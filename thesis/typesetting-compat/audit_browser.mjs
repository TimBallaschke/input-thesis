import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const require=createRequire('/Users/timballaschke/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json');
const {chromium}=require('playwright');
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const work=path.join(root, 'tmp/vivliostyle-compat');
const fixture=JSON.parse(await fs.readFile(work+'/web/fixture.json'));
const composed=JSON.parse(await fs.readFile(work+'/composition.json'));
if(composed.manifest.length!==fixture.paragraphs.length)throw Error('Paragraph count differs.');
for(let i=0;i<fixture.paragraphs.length;i++){
 const p=fixture.paragraphs[i], m=composed.manifest[i];
 if(p.id!==m.id)throw Error('Paragraph order differs.');
 const notes=fixture.notes.filter(n=>n.paragraph_id===p.id);let number=0;
 const text=p.original.replace(/\(vgl\.[^()\n]*\)/g,()=>notes[number++].marker).replace(/\s+/g,' ').trim();
 let cursor=0;
 for(const line of m.lines){
  while(text[cursor]===' ')cursor++;
  let consumed=line.text.length;
  if(text.slice(cursor,cursor+consumed)!==line.text){
   if(!line.text.endsWith('-')||text.slice(cursor,cursor+consumed-1)!==line.text.slice(0,-1))throw Error(`Prose mismatch: ${p.id} ${line.text}`);
   consumed--;
  }
  cursor+=consumed;
 }
 if(cursor!==text.length)throw Error('Unconsumed manuscript paragraph '+p.id);
}
if(composed.sourceManifest.length!==fixture.sections.filter(s=>s.note_ids.length).length)throw Error('Missing composed source paragraph.');
for(const block of composed.sourceManifest){
 const sectionId=block.id.replace('sources-','');
 const text=fixture.notes.filter(n=>n.section_id===sectionId).map(n=>`[${String(n.number).padStart(2,'0')}] Vgl. ${n.references.map(r=>r.text).join('; ')}.`).join(' ').replace(/\s+/g,' ').trim();
 if(text!==block.text || block.mode!=='justified')throw Error('Source text or composer mode differs.');
 let cursor=0;
 for(const line of block.lines){
  while(text[cursor]===' ')cursor++;
  let consumed=line.text.length;
  if(text.slice(cursor,cursor+consumed)!==line.text){
   if(!line.text.endsWith('-')||text.slice(cursor,cursor+consumed-1)!==line.text.slice(0,-1))throw Error('Composed source prose differs.');
   consumed--;
  }
  cursor+=consumed;
 }
 if(cursor!==text.length)throw Error('Source paragraph is incomplete.');
}
const browser=await chromium.launch({headless:true,executablePath:'/Users/timballaschke/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell'});
try{
 const page=await browser.newPage({viewport:{width:1000,height:1300}});
 await page.goto('http://127.0.0.1:8768/preview.html',{waitUntil:'networkidle'});
 await page.waitForFunction(count=>document.querySelectorAll('#pages .section-source').length===count,fixture.notes.length);
 const audit=await page.evaluate(sectionEnds=>{
  const root=document.querySelector('#pages'), pages=[...root.querySelectorAll('[data-vivliostyle-page-container]')];
  const allIds=new Set([...root.querySelectorAll('[id]')].map(e=>e.id));
  const calls=[...root.querySelectorAll('.note-call')];
  const missingLinks=[...root.querySelectorAll('.note-call[href],a.source-number[href],.source-number a[href]')].filter(a=>!allIds.has(decodeURIComponent(a.getAttribute('href').slice(1)))).map(a=>a.getAttribute('href'));
  const overflow=[];let opticalOverhangs=0;
  for(const el of root.querySelectorAll('.auto-typeset-line')){
   const page=el.closest('[data-vivliostyle-page-container]').getBoundingClientRect();
   const box=el.getBoundingClientRect();const leftMm=(box.left-page.left)*210/page.width;
   const columnRight=page.left+(leftMm<116?113.5:202)*page.width/210;
   const range=document.createRange();range.selectNodeContents(el);
   const textRight=Math.max(...[...range.getClientRects()].map(r=>r.right));
   const excess=textRight-columnRight;
   if(excess>5 && excess<=10 && !el.getAttribute('title'))opticalOverhangs++;
   if(excess>10)overflow.push({id:el.dataset.lineId,text:el.textContent,excessPx:excess,
    violation:el.getAttribute('title')});
  }
  const sourceWidths=[...root.querySelectorAll('.source-copy')].map(block=>{
   const page=block.closest('[data-vivliostyle-page-container]').getBoundingClientRect(), rect=block.getBoundingClientRect();
   const factor=210/page.width;
   return {id:block.id,widthMm:rect.width*factor,rightMm:(rect.right-page.left)*factor,
    lines:block.querySelectorAll('.auto-typeset-line').length};
  });
  const sourceSeparatorChecks=[...root.querySelectorAll('.section-sources')].map(group=>{
   const page=group.closest('[data-vivliostyle-page-container]'), pageRect=page.getBoundingClientRect(), factor=210/pageRect.width;
   const last=group.querySelector('.source-copy'), stars=group.querySelector('.source-stars-after');
   const next=group.nextElementSibling;
   const lastRect=last.getBoundingClientRect(), starsRect=stars?.getBoundingClientRect();
   const nextRect=next?.getBoundingClientRect();
   const sameColumn=next && next.closest('[data-vivliostyle-page-container]')===page && Math.abs(nextRect.left-lastRect.left)*factor<1;
   return {section:group.dataset.section,blankBeforeSourcesMm:parseFloat(getComputedStyle(group).marginTop)*factor,starsBefore:group.querySelector('.source-stars:not(.source-stars-after)')?.textContent,stars:stars?.textContent,
    blankAboveStarsMm:starsRect?(starsRect.top-lastRect.bottom)*factor:null,
    paddingBelowStarsMm:parseFloat(getComputedStyle(group).paddingBottom)*factor,
    sameColumnNext:!!sameColumn,nextHeadingGapMm:sameColumn?(nextRect.top-lastRect.bottom)*factor:null};
  });
  const sourceRendering=[...root.querySelectorAll('.source-copy')].map(block=>({id:block.id,
   fontSize:getComputedStyle(block).fontSize,lines:[...block.querySelectorAll('.auto-typeset-line')].map(l=>l.textContent)}));
  return {sourceRendering,sourceSeparatorChecks,sourceWidths,pages:pages.length,paragraphs:new Set([...root.querySelectorAll('.copy')].map(p=>p.id)).size,
   chapters:[...root.querySelectorAll('h1')].map(e=>e.textContent),subheadings:[...root.querySelectorAll('h2')].map(e=>e.textContent),
   calls:calls.length,sources:root.querySelectorAll('.section-source').length,groups:root.querySelectorAll('.section-sources').length,
   missingLinks,overflow,opticalOverhangs,pageNumbers:pages.map(p=>p.querySelector('[data-vivliostyle-page-counter]').textContent)};
 },fixture.sections.filter(s=>s.note_ids.length).map(s=>({id:s.id,noteIds:s.note_ids,
  paragraphId:fixture.paragraphs.filter(p=>p.section_id===s.id).at(-1).id})));
 if(audit.sourceRendering.some(block=>Math.abs(parseFloat(block.fontSize)-7*96/72)>0.01 || JSON.stringify(block.lines)!==JSON.stringify(composed.sourceManifest.find(m=>m.id===block.id)?.lines.map(l=>l.text))))throw Error('Rendered source lines or 7 pt size differs from the original plugin composition.');
 if(fixture.layout.source_block_width_fraction===1 && audit.sourceWidths.some(s=>Math.abs(s.widthMm-83.5)>0.15 || Math.min(Math.abs(s.rightMm-113.5),Math.abs(s.rightMm-202))>0.15))throw Error('A source table does not fill the text column width.');
 if(fixture.layout.source_vertical_alignment==='after_text' && audit.sourceSeparatorChecks.some(s=>s.starsBefore!=='* * *' || s.stars!=null || Math.abs(s.paddingBelowStarsMm-6*281/61)>0.15 || (s.sameColumnNext && Math.abs(s.nextHeadingGapMm-6*281/61)>0.15)))throw Error('Incorrect pre-source stars or six-blank-row subsection gap.');
 await fs.mkdir(work+'/complete-pages',{recursive:true});
 const containers=await page.locator('#pages [data-vivliostyle-page-container]').all();
 for(let i=0;i<containers.length;i++)await containers[i].screenshot({path:work+'/complete-pages/page-'+String(i+1).padStart(2,'0')+'.png'});
 await fs.writeFile(work+'/complete-audit.json',JSON.stringify({...audit,all_manuscript_paragraphs_preserved:true},null,2));
 if(audit.missingLinks.length||audit.overflow.length)throw Error('Unresolved links or overfull body lines.');
 console.log(JSON.stringify({...audit,sourceRendering:audit.sourceRendering.length,sourceWidths:audit.sourceWidths.length,sourceSeparatorChecks:audit.sourceSeparatorChecks.length}));
}finally{await browser.close();}
