import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const out=path.join(root,'output/ai-documentation-web');
const rowsPerColumn=99,rowsPerPage=rowsPerColumn*2;
const require=createRequire('/Users/timballaschke/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json');
const {chromium}=require('playwright');
const hash=s=>createHash('sha256').update(s).digest('hex');
const pipelineHash=hash(await fs.readFile(path.join(out,'compose.js'),'utf8')+await fs.readFile(path.join(out,'document.css'),'utf8')+await fs.readFile(path.join(out,'arketa-auto-typeset.js'),'utf8'));
const layoutHash=hash(await fs.readFile(path.join(out,'document.css'),'utf8')+await fs.readFile(path.join(out,'duplex.css'),'utf8')+await fs.readFile(path.join(out,'preview.js'),'utf8')+await fs.readFile(path.join(out,'print.html'),'utf8'));
const archives=JSON.parse(await fs.readFile(path.join(out,'catalog.json'),'utf8'));
const originalPlugin=path.join(root,'../web-to-print/public/auto-typeset.js');
const pluginHash=hash(await fs.readFile(originalPlugin));
const expectedPluginHash='39afa960ba2c1d0cedde9295650845fdf2820cbc0d822543217b7fa62ec832c0';
if(pluginHash!==expectedPluginHash)throw Error('Original plugin checksum changed');
async function verifyArchives(){
 for(const archive of archives){
  if(hash(await fs.readFile(path.join(root,archive.transcript)))!==archive.sha256)throw Error('Archive changed: '+archive.id);
 }
}
await verifyArchives();
const browser=await chromium.launch({headless:true,executablePath:'/Users/timballaschke/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell'});
const results=new Map(), errors=[];let next=0,headerComposition;
try{
 await Promise.all(Array.from({length:3},async()=>{
  const page=await browser.newPage();
  while(next<archives.length){
   const archive=archives[next++], cachePath=path.join(out,archive.id+'-composition.json');
   const inputHash=hash(await fs.readFile(path.join(out,archive.id+'.json')));
   let result;
   try{const cached=JSON.parse(await fs.readFile(cachePath,'utf8'));if(cached.sha256===archive.sha256&&cached.pipelineHash===pipelineHash&&(cached.inputHash===inputHash||(!cached.inputHash&&archive.kind==='communication_archive')))result=cached}catch{}
   try {
   if(!result){
    await page.goto('http://127.0.0.1:8768/ai-documentation/compose.html?archive='+archive.id,{waitUntil:'load'});
    result=await page.evaluate(()=>window.docReady,{timeout:0});
    if(result.violations.length)throw Error(archive.id+' overfull lines: '+JSON.stringify(result.violations.slice(0,3)));
    result.pipelineHash=pipelineHash;
   }
   if(result.inputHash!==inputHash){result.inputHash=inputHash;await fs.writeFile(cachePath,JSON.stringify(result))}
   results.set(archive.id,result);console.log(archive.id, result.rows.length,'rows verified');
   }catch(error){errors.push({archive:archive.id,error:String(error)});console.log('FAILED',archive.id,String(error));}
  }
  await page.close();
 }));
 const headerInput=JSON.parse(await fs.readFile(path.join(out,'_message-headers.json'),'utf8'));
 const headerCache=path.join(out,'_message-headers-composition.json');
 try{const cached=JSON.parse(await fs.readFile(headerCache,'utf8'));if(cached.sha256===headerInput.sha256&&cached.pipelineHash===pipelineHash)headerComposition=cached}catch{}
 if(!headerComposition){
  const page=await browser.newPage();
  await page.goto('http://127.0.0.1:8768/ai-documentation/compose.html?archive=_message-headers',{waitUntil:'load'});
  headerComposition=await page.evaluate(()=>window.docReady,{timeout:0});
  if(headerComposition.violations.length)throw Error('Compact message header overflow');
  headerComposition.pipelineHash=pipelineHash;
  await fs.writeFile(headerCache,JSON.stringify(headerComposition));
  await page.close();
 }
}finally{await browser.close()}
if(errors.length)throw Error(JSON.stringify(errors));
await verifyArchives();
if(hash(await fs.readFile(originalPlugin))!==pluginHash)throw Error('Plugin changed during composition');
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const pages=[],targets={},locations={},messages={};let number=0;
const compactHeaders=new Map(headerComposition.rows.map(row=>[row.canonical_id,row]));
if(compactHeaders.size!==headerComposition.rows.length||headerComposition.rows.some(row=>!row.first))throw Error('A compact message header wrapped');
for(const archive of archives){
 const result=results.get(archive.id);
 const rows=result.rows.flatMap(row=>{
  const header=compactHeaders.get(row.canonical_id);
  if(!header)return [row];
  return row.first?[{...header,compact_header:true}]:[];
 });
 await fs.writeFile(path.join(out,archive.id+'-display-composition.json'),JSON.stringify({...result,rows,display_transforms:['compact_message_headers']}));
 for(let start=0;start<rows.length;start+=rowsPerPage){
  number++;const columns=[];
  for(let column=0;column<2;column++){
   let text='<div class="column">';
   for(let index=0;index<rowsPerColumn;index++){
    const rowNumber=start+column*rowsPerColumn+index+1;
    const row=rows[rowNumber-1];if(!row)break;
    const rowId=row.canonical_id&&row.first?row.canonical_id:`${archive.id}-R${rowNumber}`;
    const loc={page:number,column:column+1,physical_row:index+1,line_number:rowNumber,anchor:rowId};
    for(const ref of row.refs){
     if(/-L\d{6}$/.test(ref)){
      if(!locations[ref])locations[ref]={start:loc,end:loc};else locations[ref].end=loc;
     }
     targets[ref]??=loc;
    }
    if(row.message_id){messages[row.message_id]??={start:loc,end:loc};messages[row.message_id].end=loc;targets[row.message_id]??=loc}
    targets[rowId]??=loc;
    text+=`<div class="doc-row${row.message_role==='user'?' user-message':''}" id="${rowId}" data-line-number="${rowNumber}">`;
    if(row.blank)text+=`<span class="line-number">${rowNumber}</span><span class="line-text"></span>`;
    else text+=`<a class="line-number" href="#${rowId}">${rowNumber}</a><span class="line-text${row.compact_header?' message-header':''}"><span class="auto-typeset-line" style="${esc(row.style)}">${esc(row.text)}</span></span>`;
    text+='</div>';
   }
   text+='</div>';columns.push(text);
  }
  targets[archive.id]??={page:number,anchor:archive.id};
  const content=`<div class="columns" ${start===0?`id="${archive.id}"`:''}>${columns.join('')}</div><div class="page-number">${String(number).padStart(2,'0')}</div>`;
  await fs.writeFile(path.join(out,'pages',String(number).padStart(4,'0')+'.html'),content);
  pages.push({number,archive:archive.id});
 }
 archive.pages=pages.filter(p=>p.archive===archive.id).map(p=>p.number);
}
// Remove obsolete generated pages so a shorter edition cannot expose old tails.
for(const filename of await fs.readdir(path.join(out,'pages'))){
 if(/^\d{4}\.html$/.test(filename)&&Number(filename.slice(0,4))>pages.length)
  await fs.unlink(path.join(out,'pages',filename));
}
const displayExclusions=archives.flatMap(archive=>archive.display_exclusions||[]);
const edition={scope:displayExclusions.length?'messages_and_supplied_text_with_documented_exclusions':'messages_and_supplied_text_only',display_exclusions:displayExclusions,layout:{size_mm:[210,297],margins_mm:{left:30,top:8,right:8,bottom:8},printing:'duplex',binding:'left',inner_margin_mm:30,outer_margin_mm:8,margins_by_page_side_mm:{recto:{left:30,top:8,right:8,bottom:8},verso:{left:8,top:8,right:30,bottom:8}},columns:2,column_gap_mm:5,font:'Arketa',font_size_pt:6,page_number_font_size_pt:10,line_number_color:'#b3b3b3',message_header_color:'#b3b3b3',alignment:'ragged',ragged:{zone:'28px',topVariance:'0px',bottomVariance:'8px'},composer:'original_plugin_with_arketa_optical_adapter',optical_margin:'font_contours_relative_to_H',optical_margin_strength:1,optical_margin_strength_scope:'all_edge_glyphs',paragraph_flow:'joined_archive_lines',baseline_mm:281/102,rows_per_column:rowsPerColumn,number_gutter:'6ch',number_gap:'1ch',blank_between_messages:1,message_header:'sender',message_role_labels:{user:'User',assistant:'System'},imported_role_annotations:'editorial readings of supplied text',user_text_width_fraction:.9,user_text_left_indent_fraction:.1,line_numbering:{basis:'composed_rows',scope:'archive',count_blank_rows:true,leading_zeroes:false}},pipelineHash,layoutHash,archives,pages,targets};
await fs.writeFile(path.join(out,'edition.json'),JSON.stringify(edition));
await fs.writeFile(path.join(out,'locations.json'),JSON.stringify({canonical_lines:locations,messages},null,2));
await fs.writeFile(path.join(out,'build-report.json'),JSON.stringify({document_blocks:archives.length,communication_archives:archives.filter(a=>a.kind==='communication_archive').length,pages:pages.length,canonical_lines:Object.keys(locations).length,messages:Object.keys(messages).length,pipelineHash,layoutHash,duplex:true,inside_margin_mm:30,outside_margin_mm:8,plugin_sha256:pluginHash,original_archives_unchanged:true,all_composed_text_verified:true,excluded_messages:displayExclusions.length,compact_message_headers:compactHeaders.size,imported_editorial_headers:headerComposition.rows.filter(r=>r.display_only).length,display_transform:'User/System sender labels; user paragraphs indented by 10% of usable text width; original roles, text and metadata retained in archives'},null,2)+'\n');
console.log('Complete:',pages.length,'pages,',Object.keys(locations).length,'stable line references');
