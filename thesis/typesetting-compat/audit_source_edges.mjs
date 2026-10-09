import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const work = path.join(root, 'tmp/vivliostyle-compat');
const require = createRequire('/Users/timballaschke/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json');
const {chromium} = require('playwright');
const fixture = JSON.parse(await fs.readFile(work + '/web/fixture.json'));
const browser = await chromium.launch({headless:true,
 executablePath:'/Users/timballaschke/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell'});

try {
 const page = await browser.newPage({viewport:{width:1000,height:1300}});
 await page.goto('http://127.0.0.1:8768/preview.html', {waitUntil:'networkidle'});
 await page.waitForFunction(count => document.querySelectorAll('#pages .section-source').length === count, fixture.notes.length);
 const audit = await page.evaluate(mode => {
  const context = document.createElement('canvas').getContext('2d');
  const precision = 64, rows = [];
  const groups = new Map();
  for (const block of document.querySelectorAll('#pages .source-copy')) {
   const id=block.dataset.noteBlock;
   if(!groups.has(id))groups.set(id,[]);
   groups.get(id).push(block);
  }
  for (const [id,blocks] of groups) {
   const lines = blocks.flatMap(block=>[...block.querySelectorAll('.auto-typeset-line')]);
   for (const [index,line] of lines.entries()) {
    const nodes = [], walker = document.createTreeWalker(line, NodeFilter.SHOW_TEXT);
    let node;
    while (node = walker.nextNode()) if (node.textContent.length) nodes.push(node);
    const first = nodes[0], last = nodes.at(-1);
    const firstRange = document.createRange(), lastRange = document.createRange();
    firstRange.setStart(first,0); firstRange.setEnd(first,1);
    lastRange.setStart(last,last.textContent.length-1); lastRange.setEnd(last,last.textContent.length);
    const style = getComputedStyle(line), size = parseFloat(style.fontSize);
    const scale = style.transform === 'none' ? 1 : new DOMMatrix(style.transform).a;
    // A source container can span columns when other section content is added.
    // Its union rectangle is not the local column frame for an individual row.
    const box = line.getBoundingClientRect();
    const zoom = box.width / (parseFloat(style.width) * scale);
    const frameLeft = box.left - (parseFloat(style.left)||0) * zoom;
    // Vivliostyle renames the loaded face (e.g. Fnt_1). Use the rendered face,
    // rather than a plain Arketa name that could silently measure a fallback.
    context.font = `${style.fontStyle} ${style.fontWeight} ${size * precision}px ${style.fontFamily}`;
    const reference = context.measureText('H');
    const leftGlyph = context.measureText(first.textContent[0]);
    const rightGlyph = context.measureText(last.textContent.at(-1));
    const factor = scale * zoom / precision;
    const inkLeft = firstRange.getBoundingClientRect().left - leftGlyph.actualBoundingBoxLeft * factor;
    const inkRight = lastRange.getBoundingClientRect().left + rightGlyph.actualBoundingBoxRight * factor;
    const targetLeft = frameLeft - reference.actualBoundingBoxLeft * factor;
    const targetRight = frameLeft + box.width - (reference.width - reference.actualBoundingBoxRight) * factor;
    rows.push({id,row:index+1,first:first.textContent[0],last:last.textContent.at(-1),
     final:index === lines.length-1,
     leftErrorPx:(inkLeft-targetLeft)/zoom,rightErrorPx:(inkRight-targetRight)/zoom,
     rightInsetPx:(frameLeft+box.width-inkRight)/zoom,
     wordSpacingPx:parseFloat(style.wordSpacing)||0,trackingPx:parseFloat(style.letterSpacing)||0,scale});
   }
  }
  const nonFinal = rows.filter(row => !row.final);
  return {pages:document.querySelectorAll('#pages [data-vivliostyle-page-container]').length,
   mode,blocks:groups.size,sourceLines:rows.length,justifiedLines:mode==='justified'?nonFinal.length:0,
   raggedLines:mode==='ragged'?rows.length:0,
   tolerancePx:0.15,maxLeftErrorPx:Math.max(...rows.map(row => Math.abs(row.leftErrorPx))),
   maxRightErrorPx:mode==='justified'?Math.max(...nonFinal.map(row => Math.abs(row.rightErrorPx))):null,
   maxRightOverrunPx:Math.max(0,...rows.map(row => row.rightErrorPx)),
   rightInsetRangePx:[Math.min(...nonFinal.map(row => row.rightInsetPx)),Math.max(...nonFinal.map(row => row.rightInsetPx))],
   finalLinesNatural:rows.filter(row => row.final).every(row => Math.abs(row.wordSpacingPx)<0.001 && Math.abs(row.trackingPx)<0.001 && row.scale===1),rows};
 },fixture.layout.source_alignment);
 await fs.writeFile(work + '/source-optical-audit.json', JSON.stringify(audit,null,2));
 if (audit.blocks !== fixture.sections.filter(section => section.note_ids.length).length
  || audit.maxLeftErrorPx > audit.tolerancePx || audit.maxRightOverrunPx > audit.tolerancePx
  || (audit.mode==='justified' && audit.maxRightErrorPx > audit.tolerancePx)
  || !audit.finalLinesNatural) throw Error('Source outline alignment or natural paragraph endings failed.');
 const {rows,...summary} = audit;
 await fs.writeFile(root + '/thesis/typesetting-compat/source-optical-results.json', JSON.stringify({
  checked:'2026-10-06',alignment:'font_contours_relative_to_H',original_plugin_sha256:fixture.plugin_sha256,
  source_pages_sha256:fixture.source_pages_sha256,...summary,
  maxRightErrorMm:summary.maxRightErrorPx==null?null:summary.maxRightErrorPx * 25.4 / 96,
  maxRightOverrunMm:summary.maxRightOverrunPx * 25.4 / 96,
 },null,2) + '\n');
 console.log(JSON.stringify({...audit,rows:undefined}));
} finally {
 await browser.close();
}
