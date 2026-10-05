import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const work = path.join(root, 'tmp/vivliostyle-compat');
const require = createRequire('/Users/timballaschke/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json');
const { chromium } = require('playwright');
const port = process.env.COMPAT_PORT || '8768';
const base = `http://127.0.0.1:${port}`;
const browser = await chromium.launch({headless: true,
  executablePath: '/Users/timballaschke/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell'});

try {
  const page = await browser.newPage({viewport: {width: 1000, height: 1300}});
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(`${base}/source.html?bridge=1`, {waitUntil: 'networkidle'});
  const result = await page.evaluate(() => window.compatReady);
  if (errors.length) throw new Error(JSON.stringify(errors));
  if (!result.fontLoaded || result.manifest.some(p => !p.lines.length)) throw new Error('Plugin did not compose every paragraph.');
  const restoredLinks = await page.locator('.auto-typeset-render .note-call').count();
  const fixture = JSON.parse(await fs.readFile(path.join(work, 'web/fixture.json')));
  if (restoredLinks !== (fixture.layout.sources_visible === false ? 0 : fixture.notes.length)) throw new Error(`Lost note links: ${restoredLinks}`);
  await page.screenshot({path: path.join(work, 'plugin-browser.png')});
  const frozen = await page.evaluate(() => {
    document.querySelectorAll('script, .auto-typeset-source').forEach(el => el.remove());
    return '<!doctype html>\n' + document.documentElement.outerHTML;
  });
  await fs.writeFile(path.join(work, 'web/frozen.html'), frozen);
  await fs.writeFile(path.join(work, 'composition.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({stage: 'plugin', paragraphs: result.manifest.length,
    lines: result.manifest.reduce((n,p) => n + p.lines.length, 0), restoredLinks, errors}));

  const variant = process.argv[2] || 'frozen';
  const viewer = await browser.newPage({viewport: {width: 1100, height: 1300}});
  const viewerErrors = [], logs = [];
  viewer.on('pageerror', error => viewerErrors.push(error.message));
  viewer.on('console', message => { if (message.type() === 'error' || message.text().includes('COMPAT_')) logs.push(message.text()); });
  viewer.on('requestfailed', request => logs.push(`FAILED ${request.url()} ${request.failure()?.errorText}`));
  await viewer.goto(`${base}/viewer/index.html#src=${base}/${variant === 'direct' ? 'source.html' : 'frozen.html'}&bookMode=false&renderAllPages=true`, {waitUntil: 'networkidle'});
  await viewer.screenshot({path: path.join(work, `${variant}-initial.png`)});
  await fs.writeFile(path.join(work, `${variant}-initial.json`), JSON.stringify({logs, viewerErrors,
    text: (await viewer.locator('body').innerText()).slice(0, 2500)}, null, 2));
  await viewer.waitForFunction(() => document.querySelector('[data-vivliostyle-page-container]'), null, {timeout: 60000});
  // Inspect the engine's visible page DOM rather than just its hidden source.
  await viewer.waitForFunction(() => document.querySelector('[data-vivliostyle-viewer-status="complete"]'), null, {timeout: 60000});
  const readInspection = () => viewer.evaluate(() => {
    const pages = [...document.querySelectorAll('[data-vivliostyle-page-container]')];
    // Hidden pages have unresolved computed percentage widths. Temporarily
    // reveal every page solely for measuring their computed line properties.
    const display = pages.map(p=>p.style.display);
    pages.forEach(p=>p.style.display='block');
    const result = {
      pageCount: pages.length,
      pages: pages.map((p,index) => ({number: index + 1,
        lines: [...p.querySelectorAll('.copy .auto-typeset-line')].map(el => ({text: el.textContent, style: el.getAttribute('style'),
          metrics: Object.fromEntries(['fontSize', 'width', 'height', 'lineHeight', 'wordSpacing', 'letterSpacing', 'left', 'transform']
            .map(key=>[key,getComputedStyle(el)[key]]))})),
        noteCalls: [...p.querySelectorAll('.note-call')].map(a => ({id: a.id, href: a.getAttribute('href'), text: a.textContent})),
        notes: [...p.querySelectorAll('.print-note, .section-source')].map(a => ({id: a.id, text: a.textContent})),
        geometry: (() => {
          const box = p.getBoundingClientRect();
          const mm = rect => ({x:(rect.x-box.x)*210/box.width, y:(rect.y-box.y)*297/box.height,
            width:rect.width*210/box.width,height:rect.height*297/box.height});
          const lines = [...p.querySelectorAll('.copy .auto-typeset-line')].map(el=>({...mm(el.getBoundingClientRect()),id:el.dataset.lineId,text:el.textContent}));
          return {bodyLines:lines, noteBoxes:[...p.querySelectorAll('.print-note, .source-copy')].map(el=>mm(el.getBoundingClientRect())),
            pageNumber:[...p.querySelectorAll('[data-vivliostyle-page-counter]')].map(el=>({...mm(el.getBoundingClientRect()),text:el.textContent})),
            headings:[...p.querySelectorAll('h2')].map(el=>({...mm(el.getBoundingClientRect()),text:el.textContent,
              align:getComputedStyle(el).textAlign, transform:getComputedStyle(el).textTransform, tracking:getComputedStyle(el).letterSpacing}))};
        })(),
      })),
      sourceFrames: [...document.querySelectorAll('iframe')].map(f => {
        try { return {src: f.src, ready: f.contentDocument?.body?.dataset.compatReady,
          lines: f.contentDocument?.querySelectorAll('.auto-typeset-line').length}; } catch { return {src: f.src}; }
      }),
    };
    pages.forEach((p,i)=>p.style.display=display[i]);
    return result;
  });
  let inspection = await readInspection();
  const verticalAdjustments = [];
  if (variant === 'frozen' && fixture.layout.source_placement !== 'subchapter_end') for (let round = 0; round < 3; round++) {
    const adjustments = [];
    for (const [index,p] of inspection.pages.entries()) {
      const columns = [true,false].map(left => p.geometry.bodyLines.filter(line=>(line.x < (fixture.layout.margins_mm.left + (210 - fixture.layout.margins_mm.left - fixture.layout.margins_mm.right) / 2))===left));
      const bottoms = columns.map(lines=>lines.length ? Math.max(...lines.map(line=>line.y+line.height)) : 0);
      const following = inspection.pages.slice(index+1).some(p=>p.geometry.bodyLines.length);
      const target = Math.max(...bottoms);
      columns.forEach((lines,column) => {
        const full = column === 0 ? columns[1].length > 0 || following : following;
        const missing = target - bottoms[column];
        if (full && lines.length && missing > 1) {
          adjustments.push({page:index+1,column:column+1,extraMm:missing,ids:lines.map(line=>line.id),
            extraPxPerLine: missing * 96 / 25.4 / lines.length});
        }
      });
    }
    if (!adjustments.length) break;
    await page.evaluate(adjustments => {
      for (const adjustment of adjustments) for (const id of adjustment.ids) {
        const line = document.querySelector(`[data-line-id="${id}"]`);
        const height = parseFloat(getComputedStyle(line).height) + adjustment.extraPxPerLine;
        line.style.height = `${height}px`; line.style.lineHeight = `${height}px`;
      }
    }, adjustments);
    const adjusted = await page.evaluate(() => '<!doctype html>\n'+document.documentElement.outerHTML);
    await fs.writeFile(path.join(work,'web/frozen.html'), adjusted);
    verticalAdjustments.push(...adjustments.map(({ids,...entry})=>({...entry,lineCount:ids.length})));
    await viewer.goto(`${base}/viewer/index.html#src=${base}/frozen.html?layout=${round+1}&bookMode=false&renderAllPages=true`,{waitUntil:'networkidle'});
    await viewer.waitForFunction(()=>document.querySelector('[data-vivliostyle-viewer-status="complete"]'),null,{timeout:60000});
    inspection = await readInspection();
  }
  // Mixed 10 pt prose and 7 pt fixed plugin lines can let native multicol
  // overflow a kept final line. Force a column break before its final pair.
  for (let pass = 0; pass < 4; pass++) {
    const overflow = inspection.pages.flatMap(p=>p.geometry.bodyLines).filter(l=>l.y+l.height>289-3*281/61+0.05);
    if (!overflow.length) break;
    const ids = new Set(overflow.map(line=>{
      const paragraph=result.manifest.find(p=>p.lines.some(l=>l.id===line.id));
      const index=paragraph.lines.findIndex(l=>l.id===line.id);
      return paragraph.lines[Math.min(index,Math.max(0,paragraph.lines.length-2))].id;
    }));
    let adjusted=await fs.readFile(path.join(work,'web/frozen.html'),'utf8');
    for(const id of ids) adjusted=adjusted.replace(new RegExp(`(<span[^>]*data-line-id="${id}"[^>]*style=")`),'$1break-before: column; ');
    await fs.writeFile(path.join(work,'web/frozen.html'),adjusted);
    await viewer.reload({waitUntil:'networkidle'});
    await viewer.waitForFunction(()=>document.querySelector('[data-vivliostyle-viewer-status="complete"]'),null,{timeout:60000});
    inspection=await readInspection();
  }
  if (fixture.layout.headings_visible) {
    const headings = inspection.pages.flatMap(p => p.geometry.headings);
    if (fixture.layout.subchapter_start === 'new_column' && headings.some(h => Math.abs(h.y - 8) > 0.05)) {
      throw new Error('A subchapter heading did not start at the top of a new column.');
    }
    if (headings.length !== (fixture.sections?.filter(s => s.has_heading).length || 2) || headings.some(h => h.align !== 'center' || h.transform !== 'uppercase' || parseFloat(h.tracking) <= 0)) {
      throw new Error('Expected both centered, tracked uppercase subchapter headings.');
    }
  }
  if (variant === 'frozen' && fixture.layout.source_vertical_alignment === 'column_bottom') {
    const sourceOffsets = await viewer.evaluate(() => {
      const pages = [...document.querySelectorAll('[data-vivliostyle-page-container]')];
      pages.forEach(p => p.style.display = 'block');
      return [...document.querySelectorAll('.section-sources')].map(group => {
        const page = group.closest('[data-vivliostyle-page-container]').getBoundingClientRect();
        const last = group.querySelector('.section-source:last-child').getBoundingClientRect();
        const bottom = (last.bottom - page.top) * 297 / page.height;
        return {section:group.dataset.section, offsetMm:289 - 3 * 281 / 61 - bottom};
      });
    });
    if (sourceOffsets.some(s => s.offsetMm < -0.05)) throw new Error('Sources exceed the text area.');
    const css = sourceOffsets.map(s => `.section-sources[data-section="${s.section}"]{position:relative;top:${Math.max(0,s.offsetMm)}mm}`).join('\n');
    await fs.writeFile(path.join(work,'web/frozen.html'), frozen.replace('</head>', `<style id="source-bottom-placement">${css}</style></head>`));
    await viewer.reload({waitUntil:'networkidle'});
    await viewer.waitForFunction(()=>document.querySelector('[data-vivliostyle-viewer-status="complete"]'),null,{timeout:60000});
    inspection = await readInspection();
    inspection.sourceBottomOffsets = sourceOffsets;
  }
  if (fixture.layout.page_number === 'inside_type_area_bottom') {
    for (const p of inspection.pages) {
      const number = p.geometry.pageNumber[0];
      const lowerMargin = 297 - number.y - number.height;
      const textBottom = Math.max(0, ...p.geometry.bodyLines.map(l => l.y + l.height), ...p.geometry.noteBoxes.map(l => l.y + l.height));
      if (Math.abs(lowerMargin - 8) > 0.05 || (textBottom && number.y - textBottom < (fixture.layout.footer_blank_baselines || 1) * 281 / 61)) {
        throw new Error(`Page ${p.number}: footer lower margin ${lowerMargin}, gap ${number.y-textBottom}, text bottom ${textBottom}`);
      }
    }
  }
  inspection.verticalAdjustments = verticalAdjustments;
  const rendered = inspection.pages.flatMap(p => p.lines);
  const expected = result.manifest.flatMap(p => p.lines);
  inspection.composedLineCount = expected.length;
  inspection.renderedLineCount = rendered.length;
  inspection.lineTextPreserved = JSON.stringify(rendered.map(l=>l.text)) === JSON.stringify(expected.map(l=>l.text));
  inspection.lineStylePreserved = JSON.stringify(rendered.map(l=>l.style)) === JSON.stringify(expected.map(l=>l.style));
  inspection.maxMetricDeltaPx = Object.fromEntries(['fontSize', 'width', 'height', 'lineHeight', 'wordSpacing', 'letterSpacing', 'left']
    .map(key => [key, rendered.length === expected.length ? Math.max(...rendered.map((l,i) =>
      Math.abs((parseFloat(l.metrics[key]) || 0) - (parseFloat(expected[i].metrics[key]) || 0)))) : null]));
  inspection.glyphScalePreserved = rendered.length === expected.length && rendered.every((l,i)=>l.metrics.transform === expected[i].metrics.transform);
  inspection.notesOnCallPage = inspection.pages.every(p=>p.noteCalls.every(a=>
    p.notes.some(n=>n.id === a.id.replace('call-', 'fn-'))));
  inspection.viewerErrors = viewerErrors;
  inspection.logs = logs;
  await fs.writeFile(path.join(work, `${variant}-inspection.json`), JSON.stringify(inspection, null, 2));
  await viewer.screenshot({path: path.join(work, `${variant}-viewer.png`)});
  console.log(JSON.stringify({stage: variant, ...inspection, pages: inspection.pages.map(p=>({number:p.number,lines:p.lines.length,notes:p.notes.length,calls:p.noteCalls.length}))}));
} finally {
  await browser.close();
}
