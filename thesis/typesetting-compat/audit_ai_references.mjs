import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const work=path.join(root,'tmp/vivliostyle-compat');
const read=async name=>JSON.parse(await fs.readFile(name,'utf8'));
const notices=await read(path.join(root,'thesis/typesetting-compat/ai-notices.json'));
const editionHash=createHash('sha256').update(await fs.readFile(path.join(root,'output/ai-documentation-web/edition.json'))).digest('hex');
const fixture=await read(work+'/web/fixture.json');
if(notices.edition_sha256!==editionHash || fixture.layout.ai_documentation_edition_sha256!==editionHash)
  throw Error('Thesis references are from a different documentation edition.');
const require=createRequire('/Users/timballaschke/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json');
const {chromium}=require('playwright');
const base=`http://127.0.0.1:${process.env.COMPAT_PORT||8768}`;
const browser=await chromium.launch({headless:true,executablePath:'/Users/timballaschke/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell'});
try {
  const context=await browser.newContext({viewport:{width:1100,height:1300}});
  const thesis=await context.newPage();
  await thesis.goto(base+'/preview.html',{waitUntil:'networkidle'});
  await thesis.waitForFunction(()=>window.previewViewer?.readyState==='complete' && document.querySelector('#pages .ai-copy'));
  const expected=notices.sections.flatMap(section=>section.ranges.map(range=>({section:section.section_id,...range})));
  const labelFailures=await thesis.evaluate(ranges=>{
    const normalize=s=>s.replace(/\s+/g,' ').trim();
    return ranges.flatMap(range=>{
      const blocks=[...document.querySelectorAll(`#pages .ai-copy[data-note-block="ai-notice-${range.section}"]`)];
      const fragments=blocks.flatMap(block=>[...block.querySelectorAll('.ai-documentation-ref')])
        .filter(link=>new URL(link.getAttribute('href'),location.href).href===new URL(range.href,location.href).href);
      const actual=normalize(fragments.map(link=>link.textContent).join(' '));
      return actual===normalize(range.label)?[]:[{expected:range.label,actual,href:range.href}];
    });
  },expected);
  if(labelFailures.length)throw Error('Printed thesis references differ: '+JSON.stringify(labelFailures));

  // Follow a real displayed thesis link, including its edition identifier.
  const example=notices.sections.find(s=>s.title==='Die Aufforderung zur Eingabe').ranges[0];
  const popupPromise=context.waitForEvent('page');
  await thesis.locator(`#pages .ai-documentation-ref[href$="#${example.anchor}"]`).first().click();
  const doc=await popupPromise;
  await doc.waitForLoadState('networkidle');
  await doc.waitForFunction(anchor=>document.getElementById(anchor)?.classList.contains('target'),example.anchor);
  const clicked=await doc.locator('#'+example.anchor).evaluate(el=>({page:Number(el.closest('.sheet').dataset.page),line:Number(el.dataset.lineNumber)}));
  if(clicked.page!==example.page||clicked.line!==example.start_line)throw Error('The clicked thesis reference opens a different printed row.');
  await doc.evaluate(()=>document.fonts.ready);
  const proof=path.join(root,'output/thesis-web/qa/ai-reference-target-page-05.png');
  await fs.mkdir(path.dirname(proof),{recursive:true});
  await doc.locator('#page-'+example.page).screenshot({path:proof});

  const endpoints=expected.flatMap(range=>[
    {anchor:range.anchor,page:range.page,line:range.start_line,label:range.label},
    {anchor:range.end_anchor,page:range.end_page,line:range.end_line,label:range.label}
  ]);
  const pages=[...new Set(endpoints.map(e=>e.page))];
  for(let offset=0;offset<pages.length;offset+=8)
    await doc.evaluate(batch=>Promise.all(batch.map(number=>window.aiLoadPage(number))),pages.slice(offset,offset+8));
  const endpointFailures=await doc.evaluate(endpoints=>endpoints.flatMap(expected=>{
    const row=document.getElementById(expected.anchor);
    const page=Number(row?.closest('.sheet')?.dataset.page),line=Number(row?.dataset.lineNumber);
    return page===expected.page&&line===expected.line?[]:[{...expected,actual:{page,line}}];
  }),endpoints);
  if(endpointFailures.length)throw Error('Visible documentation endpoints differ: '+JSON.stringify(endpointFailures));
  const report={checked:new Date().toISOString(),sections:notices.sections.length,ranges:expected.length,
    checked_endpoints:endpoints.length,documentation_pages_loaded:pages.length,edition_sha256:editionHash,
    all_printed_labels_match:true,all_visible_endpoints_match:true,clicked_example:{label:example.label,...clicked},
    proof:path.relative(root,proof)};
  await fs.writeFile(path.join(root,'thesis/typesetting-compat/ai-reference-results.json'),JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify(report));
} finally {await browser.close();}
