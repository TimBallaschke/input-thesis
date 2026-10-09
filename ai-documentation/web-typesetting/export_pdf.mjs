// Export the current frozen HTML edition, keeping its print page geometry.
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import {execFileSync} from 'node:child_process';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const require=createRequire('/Users/timballaschke/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json');
const {chromium}=require('playwright');
const out=path.join(root,'output/pdf/input-ki-dokumentation.pdf');
const scratch=path.join(root,'tmp/pdfs/ai-documentation');
const editionPath=path.join(root,'output/ai-documentation-web/edition.json');
const before=await fs.readFile(editionPath);
const edition=JSON.parse(before);
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
await fs.mkdir(scratch,{recursive:true});
await fs.mkdir(path.dirname(out),{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:'/Users/timballaschke/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell'});
try {
  const page=await browser.newPage();
  await page.goto('http://127.0.0.1:8768/ai-documentation/print.html',{waitUntil:'load'});
  await page.waitForFunction(()=>document.body.dataset.printReady==='true',null,{timeout:120000});
  await page.emulateMedia({media:'print'});
  const inspection=await page.evaluate(()=>({
    pages:document.querySelectorAll('.sheet').length,
    firstRow:document.querySelector('.doc-row')?.id,
    firstHeader:document.querySelector('.message-header')?.textContent,
    omittedHeaderPresent:!!document.getElementById('CGPT-01-H000007'),
    fontsLoaded:document.fonts.check('6pt Arketa'),
    pagesGeometry:Array.from(document.querySelectorAll('.sheet')).map(sheet=>({
      page:Number(sheet.dataset.page),side:sheet.dataset.pageSide,
      width:sheet.getBoundingClientRect().width,height:sheet.getBoundingClientRect().height,
      rows:sheet.querySelectorAll('.doc-row').length,
      footer:sheet.querySelector('.page-number')?.textContent,
    })),
  }));
  if(inspection.pages!==edition.pages.length || !inspection.fontsLoaded || inspection.omittedHeaderPresent || inspection.firstRow!=='CGPT-01-H000021') throw new Error('Current print edition did not load correctly.');
  await page.pdf({path:out,preferCSSPageSize:true,printBackground:true,displayHeaderFooter:false,scale:1,margin:{top:0,right:0,bottom:0,left:0},timeout:120000});
  if(!before.equals(await fs.readFile(editionPath))) throw new Error('Edition changed during PDF export.');
  execFileSync('/Users/timballaschke/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3',[path.join(root,'ai-documentation/web-typesetting/finalize_pdf.py')],{stdio:'inherit'});
  await fs.writeFile(path.join(scratch,'print-inspection.json'),JSON.stringify({...inspection,edition_sha256:sha(before),pdf:out,pdf_sha256:sha(await fs.readFile(out))},null,2)+'\n');
  console.log(JSON.stringify({pdf:out,pages:inspection.pages,edition_sha256:sha(before)}));
} finally {await browser.close();}
