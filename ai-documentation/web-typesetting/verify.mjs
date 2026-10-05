import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const out=path.join(root,'output/ai-documentation-web');
const require=createRequire('/Users/timballaschke/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json');
const {chromium}=require('playwright');
const edition=JSON.parse(await fs.readFile(out+'/edition.json'));
const rowsPerColumn=edition.layout.rows_per_column,rowsPerPage=rowsPerColumn*2;
if(edition.layout.font_size_pt!==6||rowsPerColumn!==99)throw Error('Documentation grid must use 6 pt and 99 rows per column');
if(edition.layout.optical_margin!=='off'||edition.layout.optical_margin_strength!==0)throw Error('Optical margin must be disabled');
if(edition.layout.user_text_width_fraction!==1||edition.layout.user_text_left_indent_fraction!==0)throw Error('User messages must use full text width without indentation');
if(edition.archives.length!==34||edition.archives.some(a=>a.kind!=='communication_archive'))throw Error('Edition must contain only the 34 communication/supplied-text archives');
const trace=JSON.parse(await fs.readFile(out+'/section-provenance.json'));
const hash=b=>createHash('sha256').update(b).digest('hex');
const decode=s=>s.replaceAll('&quot;','"').replaceAll('&lt;','<').replaceAll('&gt;','>').replaceAll('&amp;','&');
let sourceLines=0,printedRows=0,messageBoundaries=0,hardBreaks=0,numberedRows=0,compactHeaders=0;
const samples=new Set(),compositions=new Map();
for(const archive of edition.archives){
 if(hash(await fs.readFile(path.join(root,archive.transcript)))!==archive.sha256)throw Error('Archive checksum differs '+archive.id);
 const input=JSON.parse(await fs.readFile(out+'/'+archive.id+'.json'));
 const originalLines=(await fs.readFile(path.join(root,archive.transcript),'utf8')).split(/\r?\n/).filter(Boolean).map(raw=>{
  const match=raw.match(/^(\d+) \| ?(.*)$/);if(!match)throw Error('Invalid original archive line '+archive.id);
  return {number:Number(match[1]),text:match[2]};
 });
 const retained=originalLines.filter(l=>l.number>=input.lines[0].number);
 if(JSON.stringify(retained)!==JSON.stringify(input.lines.map(l=>({number:l.number,text:l.text}))))throw Error('Retained communication/supplied text differs from original archive '+archive.id);
 const sourceComposition=JSON.parse(await fs.readFile(out+'/'+archive.id+'-composition.json'));
 const composed=JSON.parse(await fs.readFile(out+'/'+archive.id+'-display-composition.json'));
 compositions.set(archive.id,composed);
 const headerIds=new Set(input.lines.filter(l=>l.message_start).map(l=>l.id));
 const bodyRows=rows=>rows.filter(r=>!headerIds.has(r.canonical_id));
 if(JSON.stringify(bodyRows(sourceComposition.rows))!==JSON.stringify(bodyRows(composed.rows)))throw Error('Message body composition changed '+archive.id);
 const groups=new Map();
 for(let i=0;i<composed.rows.length;i++){
  const row=composed.rows[i];
  if(row.message_start){messageBoundaries++;if(i&& !composed.rows[i-1].blank)throw Error('Missing message gap '+row.canonical_id)}
  if(row.canonical_id){if(!groups.has(row.canonical_id))groups.set(row.canonical_id,[]);groups.get(row.canonical_id).push(row)}
 }
 const inputById=new Map(input.lines.map(l=>[l.id,l]));
 const covered=new Set();
 if(sourceComposition.options.mode!=='justified')throw Error('Original plugin is not in justified mode '+archive.id);
 if(sourceComposition.options.opticalMargin!==false)throw Error('Optical margin is still enabled '+archive.id);
 for(const paragraph of sourceComposition.paragraphs){
  const originals=paragraph.refs.map(id=>{
   if(covered.has(id)||!inputById.has(id))throw Error('Duplicate/unknown paragraph reference '+id);
   covered.add(id);return inputById.get(id).text.replace(/\u00ad/g,'').replace(/\s+/g,' ').trim();
  });
  const original=originals.join(' ');
  if(original!==paragraph.text)throw Error('Paragraph source differs '+paragraph.id);
  const header=headerIds.has(paragraph.id);
  const paragraphRows=sourceComposition.rows.filter(r=>r.paragraph_id===paragraph.id);
  let cursor=0;
  for(const row of paragraphRows){
   if(!row.text.startsWith(' '))while(original[cursor]===' ')cursor++;
   let n=row.text.length;
   if(original.slice(cursor,cursor+n)!==row.text){
    if(!row.text.endsWith('-')||original.slice(cursor,cursor+n-1)!==row.text.slice(0,-1))throw Error('Paragraph text differs '+paragraph.id);
    n--;
   }
   if(row.source_offset!==cursor||row.source_length!==n)throw Error('Source character position differs '+paragraph.id);
   const refs=paragraph.spans.filter(span=>span.end>cursor&&span.start<cursor+n).map(span=>span.id);
   if(JSON.stringify(refs)!==JSON.stringify(row.refs))throw Error('Row does not map to its actual original archive lines '+paragraph.id);
   cursor+=n;
  }
  if(cursor!==original.length)throw Error('Incomplete paragraph '+paragraph.id);
  if(header){
   const parts=original.match(/^MESSAGE (\d+) \| (\S+) \| (USER|ASSISTANT) \| (\w+)$/);
   if(!parts)throw Error('Unrecognized original message header '+paragraph.id);
   const label=parts[3][0]+parts[3].slice(1).toLowerCase();
   const rows=groups.get(paragraph.id)||[];
   if(rows.length!==1||!rows[0].compact_header||rows[0].text!==label)throw Error('Compact header differs '+paragraph.id);
   compactHeaders++;
  }
 }
 for(const line of input.lines){
  sourceLines++;if(!edition.targets[line.id])throw Error('Missing stable line target '+line.id);
  if(line.text.trim()&&!covered.has(line.id))throw Error('Source line omitted from paragraphs '+line.id);
 }
 let written=0;
 for(const number of archive.pages){
  const html=await fs.readFile(out+'/pages/'+String(number).padStart(4,'0')+'.html','utf8');
  const rowNumbers=[...html.matchAll(/<div class="doc-row(?: user-message)?" id="([^"]+)" data-line-number="(\d+)"><(?:a|span) class="line-number"(?: href="[^"]*")?>(\d+)<\/(?:a|span)>/g)];
  const expectedRows=composed.rows.slice(written,written+rowsPerPage);
  const expectedHeaders=expectedRows.filter(r=>r.compact_header).length;
  if((html.match(/class="doc-row user-message"/g)||[]).length!==expectedRows.filter(r=>r.message_role==='user').length)throw Error('User row styling differs '+number);
  if((html.match(/class="line-text message-header"/g)||[]).length!==expectedHeaders)throw Error('Message header styling differs '+number);
  if(rowNumbers.length!==expectedRows.length||rowNumbers.some((m,i)=>m[2]!==String(written+i+1)||m[3]!==m[2]))throw Error('Physical line numbering differs '+number);
  for(const [i,m] of rowNumbers.entries()){
   const place=edition.targets[m[1]];
   if(!place||place.page!==number||place.line_number!==written+i+1||place.column!==Math.floor(i/rowsPerColumn)+1||place.physical_row!==i%rowsPerColumn+1)throw Error('Printed line target differs '+m[1]);
  }
  numberedRows+=rowNumbers.length;
  const actual=[...html.matchAll(/class="auto-typeset-line" style="([^"]*)">([^<]*)<\/span>/g)].map(m=>({style:decode(m[1]),text:decode(m[2])}));
  const expected=composed.rows.slice(written,written+rowsPerPage).filter(r=>!r.blank).map(r=>({style:r.style,text:r.text}));
  if(JSON.stringify(actual)!==JSON.stringify(expected))throw Error('Exported page lost composition '+number);
  written+=rowsPerPage;printedRows+=actual.length;
 }
 samples.add(archive.pages[0]);samples.add(archive.pages.at(-1));
 hardBreaks+=composed.hardSourceBreaks.length;
 for(const id of composed.hardSourceBreaks.slice(0,1))samples.add(edition.targets[id].page);
}
const relationCount=trace.sections.reduce((n,s)=>n+s.relations.length,0);
for(const section of trace.sections)for(const relation of section.relations)if(!edition.targets[relation.target])throw Error('Missing relation '+relation.target);
const browser=await chromium.launch({headless:true,executablePath:'/Users/timballaschke/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell'});
const exampleId='CGPT-19-L003478';
const geometry=[];let printPages=0;const screenshotPages=new Set([1,edition.archives.find(a=>a.id==='CDX-01').pages[0],edition.archives.find(a=>a.id==='CGPT-15').pages[0],edition.targets[exampleId].page]);
samples.add(edition.targets[exampleId].page);
samples.add(edition.targets['CGPT-19-L004932'].page);
screenshotPages.add(edition.targets['CGPT-19-L004932'].page);
await fs.mkdir(out+'/qa',{recursive:true});
try{
 const page=await browser.newPage({viewport:{width:900,height:1200}});
 await page.goto('http://127.0.0.1:8768/ai-documentation/preview.html',{waitUntil:'networkidle'});
 await page.setContent('<!doctype html><html><head><link rel="stylesheet" href="http://127.0.0.1:8768/ai-documentation/document.css"></head><body><div class="sheet"></div></body></html>');
 await page.evaluate(async()=>{await document.fonts.load('6pt Arketa');await document.fonts.ready});
 for(const number of [...samples].sort((a,b)=>a-b)){
  const html=await fs.readFile(out+'/pages/'+String(number).padStart(4,'0')+'.html','utf8');
  const archive=edition.archives.find(a=>a.pages.includes(number)),composed=compositions.get(archive.id);
  const start=archive.pages.indexOf(number)*rowsPerPage,hard=new Set(composed.hardSourceBreaks);
  // Long machine strings can have source-preserving short fragments; audit prose separately.
  const machine=new Set(composed.paragraphs.filter(p=>/\S{30,}/u.test(p.text)).map(p=>p.id));
  const checkEdges=composed.rows.slice(start,start+rowsPerPage).map(row=>!row.blank&&!row.compact_header&&!row.paragraph_last&&!hard.has(row.paragraph_id)&&!machine.has(row.paragraph_id));
  await page.locator('.sheet').evaluate((el,{content,flags})=>{
   el.innerHTML=content;
   [...el.querySelectorAll('.doc-row')].forEach((row,i)=>{if(flags[i])row.dataset.checkRightInk='true'});
  },{content:html,flags:checkEdges});
  const measured=await page.evaluate(()=>{
   const sheet=document.querySelector('.sheet').getBoundingClientRect(),f=210/sheet.width;
   const mm=el=>{const b=el.getBoundingClientRect();return {x:(b.x-sheet.x)*f,y:(b.y-sheet.y)*f,width:b.width*f,height:b.height*f,bottom:(b.bottom-sheet.y)*f}};
   const columns=[...document.querySelectorAll('.column')];
   const overflow=[];let maxRightOverhang=0;
   for(const el of document.querySelectorAll('.auto-typeset-line')){
    const range=document.createRange();range.selectNodeContents(el);
    const boxes=[...range.getClientRects()];
    const col=el.closest('.column').getBoundingClientRect();
    const excess=(Math.max(...boxes.map(b=>b.right))-col.right)*f;
    maxRightOverhang=Math.max(maxRightOverhang,excess);
    // Glyph advance bounds include sidebearings beyond the aligned visible ink.
    // Allow the optical margin and CSS rounding without accepting overfull text.
    if(excess>1.35)overflow.push({id:el.closest('.doc-row').id,excess,text:el.textContent});
   }
   const userBlocks=[...document.querySelectorAll('.doc-row.user-message')].map(row=>{
    const box=row.getBoundingClientRect(),label=row.querySelector('.line-number').getBoundingClientRect();
    const text=row.querySelector('.line-text').getBoundingClientRect();
    const gap=parseFloat(getComputedStyle(row).columnGap),full=box.width-label.width-gap;
    return {width_ratio:text.width/full,indent_ratio:(text.left-box.left-label.width-gap)/full,right_error_mm:(text.right-box.right)*f};
   });
   const context=document.createElement('canvas').getContext('2d'),edgeErrors=[];
   for(const row of document.querySelectorAll('[data-check-right-ink]')){
    const line=row.querySelector('.auto-typeset-line'),style=getComputedStyle(line),text=line.textContent;
    const last=Array.from(text).at(-1),scale=Number(line.style.transform.match(/[\d.]+/)[0]);
    context.font=`${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    const glyph=context.measureText(last);
    const range=document.createRange();range.setStart(line.firstChild,text.length-last.length);range.setEnd(line.firstChild,text.length);
    const actual=range.getBoundingClientRect().left+glyph.actualBoundingBoxRight*scale;
    const bearing=glyph.width-glyph.actualBoundingBoxRight;
    const expected=row.querySelector('.line-text').getBoundingClientRect().right-bearing*scale;
    edgeErrors.push({id:row.id,error_px:actual-expected,last});
   }
   const rightInk={checked:edgeErrors.length,max_error_px:Math.max(0,...edgeErrors.map(e=>Math.abs(e.error_px))),outliers:edgeErrors.filter(e=>Math.abs(e.error_px)>.5).slice(0,12)};
   return {rightInk,userBlocks,size:[sheet.width*f,sheet.height*f],columns:columns.map(mm),footer:mm(document.querySelector('.page-number')),
    fonts:[...new Set([...document.querySelectorAll('.line-number,.auto-typeset-line')].map(e=>getComputedStyle(e).fontSize))],
    footerFont:getComputedStyle(document.querySelector('.page-number')).fontSize,
    numberColors:[...new Set([...document.querySelectorAll('.line-number')].map(e=>getComputedStyle(e).color))],
    headerColors:[...new Set([...document.querySelectorAll('.message-header .auto-typeset-line')].map(e=>getComputedStyle(e).color))],
    bodyColors:[...new Set([...document.querySelectorAll('.line-text:not(.message-header) .auto-typeset-line,.page-number')].map(e=>getComputedStyle(e).color))],
    borderWidths:[...new Set([...document.querySelectorAll('.doc-row,.line-number,.line-text')].map(e=>getComputedStyle(e).borderRightWidth))],
    gutter:mm(document.querySelector('.line-number')),textStart:mm(document.querySelector('.line-text')).x,
    maxRightOverhang,overflow};
  });
  if(Math.abs(measured.size[1]-297)>.02||measured.fonts.some(v=>Math.abs(parseFloat(v)-6*96/72)>.02))throw Error('Font or page size differs '+number);
  if([...measured.numberColors,...measured.headerColors].some(c=>c!=='rgb(179, 179, 179)')||measured.bodyColors.some(c=>c!=='rgb(0, 0, 0)'))throw Error('Grey number/header or black text/footer differs '+number);
  if(measured.columns.some((c,i)=>Math.abs(c.x-[30,118.5][i])>.02||Math.abs(c.y-8)>.02||Math.abs(c.width-83.5)>.02))throw Error('Columns differ '+number);
  if(Math.abs(parseFloat(measured.footerFont)-10*96/72)>.02||Math.abs(297-measured.footer.bottom-8)>.02||measured.borderWidths.some(b=>parseFloat(b)!==0)||measured.overflow.length)throw Error('Footer/borders/overflow '+number+' '+JSON.stringify(measured.overflow));
  if(measured.userBlocks.some(b=>Math.abs(b.width_ratio-1)>.001||Math.abs(b.indent_ratio)>.001||Math.abs(b.right_error_mm)>.02))throw Error('User width/indent/right edge differs '+number);
  if(measured.rightInk.max_error_px>.5)throw Error('Prose edges differ from composition without optical margins '+number+' '+JSON.stringify(measured.rightInk.outliers));
  geometry.push({page:number,...measured});
  if(screenshotPages.has(number))await page.locator('.sheet').screenshot({path:out+'/qa/page-'+String(number).padStart(4,'0')+'.png'});
 }
 // Check navigation in the actual lazy browser edition as well as static pages.
 await page.goto('http://127.0.0.1:8768/ai-documentation/preview.html?section='+trace.sections[1].id,{waitUntil:'networkidle'});
 const target=trace.sections[1].relations.find(r=>r.archive_id==='CGPT-15'&&r.role==='assistant');
 await page.locator('#mapping a[href="#'+target.target+'"]').click();
 await page.waitForFunction(anchor=>document.getElementById(anchor)?.classList.contains('target'),edition.targets[target.target].anchor);
 const linkWorks=await page.locator('#'+edition.targets[target.target].anchor).isVisible();
 if(!linkWorks)throw Error('Browser navigation failed');
 const linkLabel=await page.locator('#mapping a[href="#'+target.target+'"]').innerText();
 if(!linkLabel.includes('Treffer S. '+edition.targets[target.target].page+', Z. '+edition.targets[target.target].line_number))throw Error('Register uses historical instead of printed line number');
 const numberText=await page.locator('#'+edition.targets[target.target].anchor+' .line-number').innerText();
 if(numberText!==String(edition.targets[target.target].line_number))throw Error('Browser number does not match printed target');
 await page.goto('http://127.0.0.1:8768/ai-documentation/preview.html#'+exampleId,{waitUntil:'networkidle'});
 if(await page.locator('#'+exampleId+' .line-text').innerText()!=='Assistant')throw Error('Requested message header is not compact in browser');
 await page.goto('http://127.0.0.1:8768/ai-documentation/print.html',{waitUntil:'load'});
 await page.evaluate(()=>window.printReady);
 printPages=await page.locator('.sheet').count();
 if(printPages!==edition.pages.length||await page.locator('.auto-typeset-line').count()!==printedRows)throw Error('Print edition incomplete');
}finally{await browser.close()}
const report={document_blocks:edition.archives.length,communication_archives:edition.archives.filter(a=>a.kind==='communication_archive').length,pages:edition.pages.length,canonical_lines:sourceLines,printed_text_rows:printedRows,numbered_physical_rows:numberedRows,all_numbered_rows_match_physical_lines:true,line_numbering_scope:'archive',line_number_leading_zeroes:false,register_uses_current_physical_line_numbers:true,message_boundaries:messageBoundaries,hard_machine_string_breaks:hardBreaks,
 alignment:'justified',composer:edition.layout.composer,optical_margin:edition.layout.optical_margin,optical_margin_strength:edition.layout.optical_margin_strength,optical_margin_strength_scope:edition.layout.optical_margin_strength_scope,paragraphs_join_original_archive_wraps:true,all_original_body_text_preserved:true,all_published_body_composition_matches_plugin:true,compact_message_headers:compactHeaders,message_header_numbering:false,user_text_width_fraction:1,user_text_left_indent_fraction:0,
 original_header_metadata_preserved_in_archives:true,all_static_page_text_and_plugin_styles_preserved:true,all_archive_checksums_match:true,
 all_relation_targets_resolve:true,browser_jump_checked:true,fully_loaded_print_pages:printPages,sections:trace.sections.length,relation_candidates:relationCount,
 right_visible_prose_edges_checked:geometry.reduce((n,g)=>n+g.rightInk.checked,0),max_right_visible_prose_edge_error_px:Math.max(...geometry.map(g=>g.rightInk.max_error_px)),
 geometry_sample_pages:geometry.length,geometry};
await fs.writeFile(out+'/verification.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({...report,geometry:undefined}));
