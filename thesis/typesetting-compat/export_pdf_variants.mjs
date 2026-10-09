// Export the current frozen browser composition, with independently numbered
// digital and print editions. The canonical preview is never modified.
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const work=path.join(root,'tmp/vivliostyle-compat');
const scratch=path.join(root,'tmp/pdfs/thesis-variants');
const web=path.join(work,'web');
const base=`http://127.0.0.1:${process.env.COMPAT_PORT||8768}`;
const runtime='/Users/timballaschke/.cache/codex-runtimes/codex-primary-runtime/dependencies/node';
const {chromium}=createRequire(path.join(runtime,'node_modules/playwright/package.json'))('playwright');
const {JSDOM}=createRequire(path.join(work,'runtime/node_modules/@vivliostyle/cli/package.json'))('@vivliostyle/jsdom');
const hash=s=>createHash('sha256').update(s).digest('hex');
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const frozen=await fs.readFile(path.join(web,'frozen.html'),'utf8');
const css=await fs.readFile(path.join(web,'print.css'));
const composition=await read(path.join(work,'composition.json'));
const fixture=await read(path.join(web,'fixture.json'));
const browserInspection=await read(path.join(work,'frozen-inspection.json'));
const audit=await read(path.join(work,'complete-audit.json'));
if(!audit.all_manuscript_paragraphs_preserved||audit.missingLinks.length||audit.overflow.length)
  throw Error('The current browser composition has not passed its audit.');
if(hash(await fs.readFile(fixture.plugin_path))!==fixture.plugin_sha256||
   hash(await fs.readFile(path.join(root,'presentation/261005_Master_Thesis.pages')))!==fixture.source_pages_sha256)
  throw Error('Original manuscript or composer changed.');
await fs.mkdir(scratch,{recursive:true});
await fs.mkdir(path.join(root,'output/pdf'),{recursive:true});
await fs.writeFile(path.join(scratch,'canonical-frozen.html'),frozen);
await fs.writeFile(path.join(scratch,'canonical-print.css'),css);

const printDoc=new JSDOM(frozen);
const titles=[...printDoc.window.document.querySelectorAll('.chapter-title')];
if(titles.length!==6)throw Error(`Expected six title pages, got ${titles.length}.`);
const removedTitles=titles.map(el=>el.textContent.trim());
titles.forEach(el=>el.remove());
const variants=[
  {id:'digital',html:frozen,file:'Input_Digital_mit_Kapitelseiten.pdf',expectedPages:27},
  {id:'print',html:printDoc.serialize(),file:'Input_Druck_ohne_Kapitelseiten.pdf',expectedPages:21},
];
const browser=await chromium.launch({headless:true,
  executablePath:'/Users/timballaschke/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell'});
try {
  for(const variant of variants){
    variant.input=path.join(web,`pdf-${variant.id}.html`);
    variant.output=path.join(root,'output/pdf',variant.file);
    await fs.writeFile(variant.input,variant.html);
    const page=await browser.newPage({viewport:{width:1100,height:1300}});
    await page.goto(`${base}/viewer/index.html#src=${base}/pdf-${variant.id}.html&bookMode=false&renderAllPages=true`,{waitUntil:'networkidle'});
    await page.waitForFunction(()=>document.querySelector('[data-vivliostyle-viewer-status="complete"]'),null,{timeout:60000});
    variant.inspection=await page.evaluate(()=>{
      const pages=[...document.querySelectorAll('[data-vivliostyle-page-container]')];
      pages.forEach(p=>p.style.display='block');
      return {pageCount:pages.length,pages:pages.map((sheet,index)=>{
        const box=sheet.getBoundingClientRect();
        const mm=el=>{const r=el.getBoundingClientRect();return {x:(r.x-box.x)*210/box.width,y:(r.y-box.y)*297/box.height,width:r.width*210/box.width,height:r.height*297/box.height};};
        const font=el=>({fontSizePt:parseFloat(getComputedStyle(el).fontSize)*72/96,fontFamily:getComputedStyle(el).fontFamily});
        return {number:index+1,title:[...sheet.querySelectorAll('.chapter-title h1')].map(el=>el.textContent),
          lines:[...sheet.querySelectorAll('.auto-typeset-line')].map(el=>({
            kind:el.closest('.copy')?'body':el.closest('.ai-copy')?'ai':el.closest('.source-copy')?'source':'bibliography',
            text:el.textContent,id:el.dataset.lineId||el.dataset.noteLine,...mm(el),...font(el)})),
          pageNumber:[...sheet.querySelectorAll('[data-vivliostyle-page-counter]')].map(el=>({text:el.textContent,...mm(el),...font(el)})),
          headings:[...sheet.querySelectorAll('h1,h2')].map(el=>({text:el.textContent,...mm(el),...font(el)})),
          links:[...sheet.querySelectorAll('a[href]')].map(el=>({id:el.id,href:el.getAttribute('href'),text:el.textContent}))};
      })};
    });
    if(variant.inspection.pageCount!==variant.expectedPages)throw Error(`Unexpected ${variant.id} page count.`);
    if(variant.inspection.pages.some(p=>p.pageNumber.length!==1||p.pageNumber[0].text!==String(p.number).padStart(2,'0')))
      throw Error(`Incorrect ${variant.id} page numbering.`);
    const body=variant.inspection.pages.flatMap(p=>p.lines.filter(l=>l.kind==='body').map(l=>l.text));
    if(JSON.stringify(body)!==JSON.stringify(composition.manifest.flatMap(p=>p.lines.map(l=>l.text))))
      throw Error(`Changed ${variant.id} body composition.`);
    await fs.writeFile(path.join(scratch,`${variant.id}-inspection.json`),JSON.stringify(variant.inspection,null,2));
    await page.close();
    console.log(`${variant.id}: ${variant.inspection.pageCount} pages; ${body.length} body rows preserved`);
  }
} finally {await browser.close();}

const content=variants[0].inspection.pages.filter(p=>!p.title.length);
if(content.length!==21||content.some((p,i)=>JSON.stringify(p.lines.map(l=>l.text))!==JSON.stringify(variants[1].inspection.pages[i].lines.map(l=>l.text))))
  throw Error('The print edition changed content pagination.');
for(let i=0;i<content.length;i++)for(let j=0;j<content[i].lines.length;j++){
  const a=content[i].lines[j],b=variants[1].inspection.pages[i].lines[j];
  if(['x','y','width','height'].some(k=>Math.abs(a[k]-b[k])>.03))throw Error('The print edition changed content geometry.');
}

for(const variant of variants){
  console.log(`Exporting ${variant.file}`);
  const cli=path.join(work,'runtime/node_modules/@vivliostyle/cli/dist/cli.js');
  const log=await fs.open(path.join(scratch,`${variant.id}-export.log`),'w');
  try {
    const code=await new Promise((resolve,reject)=>{
      const child=spawn(process.execPath,[cli,'build',`${base}/pdf-${variant.id}.html`,
        '--single-doc','--no-vite-config-file','--executable-browser','/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        '--viewer-param','allowScripts=false&pixelRatio=8','--timeout','120',
        '--title','Input','--author','Tim Ballaschke','--language','de','--output',variant.output],
        {cwd:root,stdio:['ignore',log.fd,log.fd]});
      child.on('error',reject);child.on('exit',resolve);
    });
    if(code!==0)throw Error(`${variant.id} PDF export failed (${code}).`);
  } finally {await log.close();}
  variant.pdfSha256=hash(await fs.readFile(variant.output));
}
if(hash(await fs.readFile(path.join(web,'frozen.html')))!==hash(frozen)||hash(await fs.readFile(path.join(web,'print.css')))!==hash(css))
  throw Error('Canonical preview changed during export.');
const report={exported:new Date().toISOString(),frozen_sha256:hash(frozen),css_sha256:hash(css),
  source_pages_sha256:fixture.source_pages_sha256,original_plugin_sha256:fixture.plugin_sha256,
  body_rows:composition.manifest.reduce((n,p)=>n+p.lines.length,0),removed_print_title_pages:removedTitles,
  content_geometry_preserved:true,canonical_preview_preserved:true,
  print_page_mapping:content.map((p,i)=>({digital:p.number,print:i+1})),
  variants:variants.map(v=>({id:v.id,input:v.input,input_url:`${base}/pdf-${v.id}.html`,input_sha256:hash(v.html),pdf:v.output,pdf_sha256:v.pdfSha256,
    pages:v.inspection.pageCount,inspection:path.join(scratch,`${v.id}-inspection.json`)})),
  cli_version:'11.3.3',viewer_version:'2.45.1',previous_browser_pages:browserInspection.pageCount};
await fs.writeFile(path.join(root,'thesis/typesetting-compat/pdf-export-manifest.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report.variants.map(v=>({variant:v.id,pdf:v.pdf,pages:v.pages}))));
