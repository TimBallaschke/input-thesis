import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const require=createRequire('/Users/timballaschke/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json');
const {chromium}=require('playwright');
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const work=path.join(root, 'tmp/vivliostyle-compat');
const fixture=JSON.parse(await fs.readFile(work+'/web/fixture.json'));
const bodyLeadingMm=281/fixture.layout.baseline_rows;
const annotationLeadingMm=fixture.layout.source_leading_pt*25.4/72;
const composed=JSON.parse(await fs.readFile(work+'/composition.json'));
if(composed.manifest.length!==fixture.paragraphs.length)throw Error('Paragraph count differs.');
for(let i=0;i<fixture.paragraphs.length;i++){
 const p=fixture.paragraphs[i], m=composed.manifest[i];
 if(p.id!==m.id)throw Error('Paragraph order differs.');
 const notes=fixture.notes.filter(n=>n.paragraph_id===p.id);let number=0;
 const citationPattern=fixture.layout.body_call_leading_space===false?/\s*\(vgl\.[^()\n]*\)/g:/\(vgl\.[^()\n]*\)/g;
 const text=p.original.replace(citationPattern,()=>notes[number++].marker).replace(/\s+/g,' ').trim();
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
 if(text!==block.text || block.mode!==fixture.layout.source_alignment)throw Error('Source text or composer mode differs.');
 if(block.hyphenate!==fixture.layout.source_hyphenation)throw Error('Source hyphenation setting differs.');
 let cursor=0;
 for(const line of block.lines){
  while(text[cursor]===' ')cursor++;
  let consumed=line.text.length;
  if(text.slice(cursor,cursor+consumed)!==line.text){
   if(fixture.layout.source_hyphenation===false)throw Error('Unexpected word hyphenation in sources: '+line.text);
   if(!line.text.endsWith('-')||text.slice(cursor,cursor+consumed-1)!==line.text.slice(0,-1))throw Error('Composed source prose differs.');
   consumed--;
  }
  cursor+=consumed;
 }
 if(cursor!==text.length)throw Error('Source paragraph is incomplete.');
}
if(composed.aiManifest?.length!==fixture.ai_notices?.length)throw Error('Missing AI notice.');
for(const block of composed.aiManifest){
 const expected=fixture.ai_notices.find(n=>block.id===`ai-notice-${n.section_id}`);
 if(!expected || block.text!==expected.text || block.mode!==fixture.layout.ai_notice_alignment)throw Error('AI notice text or composer differs.');
 if(block.hyphenate!==fixture.layout.ai_notice_hyphenation)throw Error('AI notice hyphenation setting differs.');
 let cursor=0;
 for(const line of block.lines){
  while(block.text[cursor]===' ')cursor++;
  let consumed=line.text.length;
  if(block.text.slice(cursor,cursor+consumed)!==line.text){
   if(fixture.layout.ai_notice_hyphenation===false)throw Error('Unexpected word hyphenation in AI notice: '+line.text);
   if(!line.text.endsWith('-')||block.text.slice(cursor,cursor+consumed-1)!==line.text.slice(0,-1))throw Error('Composed AI notice differs.');
   consumed--;
  }
  cursor+=consumed;
 }
 if(cursor!==block.text.length)throw Error('Incomplete AI notice.');
}
const browser=await chromium.launch({headless:true,executablePath:'/Users/timballaschke/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell'});
try{
 const page=await browser.newPage({viewport:{width:1000,height:1300}});
 await page.goto('http://127.0.0.1:8768/preview.html',{waitUntil:'networkidle'});
 await page.waitForFunction(count=>document.querySelectorAll('#pages .section-source').length===count,fixture.notes.length);
 const audit=await page.evaluate(({fixtureGap,bodyLeadingMm,annotationLeadingMm,annotationFontRatio,annotationBodyRatio})=>{
  const root=document.querySelector('#pages'), pages=[...root.querySelectorAll('[data-vivliostyle-page-container]')];
  const allIds=new Set([...root.querySelectorAll('[id]')].map(e=>e.id));
  const calls=[...root.querySelectorAll('.note-call')];
  const missingLinks=[...root.querySelectorAll('.note-call[href],a.source-number[href],.source-number a[href]')].filter(a=>!allIds.has(decodeURIComponent(a.getAttribute('href').slice(1)))).map(a=>a.getAttribute('href'));
  const overflow=[];let opticalOverhangs=0;
  const edgeContext=document.createElement('canvas').getContext('2d'), edgePrecision=64;
  let maxInkOverrunPx=0, edgeRows=0;
  for(const el of root.querySelectorAll('.auto-typeset-line')){
   const page=el.closest('[data-vivliostyle-page-container]').getBoundingClientRect();
   const box=el.getBoundingClientRect();const leftMm=(box.left-page.left)*210/page.width;
   const columnLeft=page.left+(leftMm<116?30:118.5)*page.width/210;
   const columnRight=page.left+(leftMm<116?113.5:202)*page.width/210;
   const style=getComputedStyle(el),scale=style.transform==='none'?1:new DOMMatrix(style.transform).a;
   const zoom=box.width/(parseFloat(style.width)*scale);
   const nodes=[],walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);let node;
   while(node=walker.nextNode())if(node.textContent.length)nodes.push(node);
   if(!nodes.length)continue;
   const edge=(node,index,side)=>{
    const owner=node.parentElement.closest('.note-call,.source-number,.gender-star')??el;
    const font=getComputedStyle(owner),range=document.createRange();
    range.setStart(node,index);range.setEnd(node,index+1);
    edgeContext.font=`${font.fontStyle} ${font.fontWeight} ${parseFloat(font.fontSize)*edgePrecision}px ${font.fontFamily}`;
    const glyph=edgeContext.measureText(node.textContent[index]),rect=range.getBoundingClientRect();
    return rect.left+(side==='left'?-glyph.actualBoundingBoxLeft:glyph.actualBoundingBoxRight)*scale*zoom/edgePrecision;
   };
   const inkLeft=edge(nodes[0],0,'left'),last=nodes.at(-1);
   const inkRight=edge(last,last.textContent.length-1,'right');
   const excessPx=Math.max(0,inkRight-columnRight,columnLeft-inkLeft)/zoom;
   maxInkOverrunPx=Math.max(maxInkOverrunPx,excessPx);edgeRows++;
   if(excessPx>.15)overflow.push({id:el.dataset.lineId,text:el.textContent,excessPx,
    inkLeftMm:(inkLeft-page.left)*210/page.width,inkRightMm:(inkRight-page.left)*210/page.width,
    violation:el.getAttribute('title')});
  }
  const noteLocations=blocks=>{
   const fragments=new Map();
   for(const block of blocks)for(const line of block.querySelectorAll('.auto-typeset-line')){
    const p=line.closest('[data-vivliostyle-page-container]'),box=p.getBoundingClientRect(),rect=line.getBoundingClientRect();
    const page=pages.indexOf(p)+1,column=(rect.left-box.left)*210/box.width<116?1:2,key=`${page}:${column}`;
    if(!fragments.has(key))fragments.set(key,{page,column,lines:0});fragments.get(key).lines++;
   }
   return [...fragments.values()];
  };
  const sourceGroups=new Map();
  for(const block of root.querySelectorAll('.source-copy')){
   const id=block.dataset.noteBlock;
   if(!sourceGroups.has(id))sourceGroups.set(id,[]);
   sourceGroups.get(id).push(block);
  }
  const sourceWidths=[...sourceGroups].flatMap(([id,blocks])=>blocks.flatMap(block=>{
   const page=block.closest('[data-vivliostyle-page-container]').getBoundingClientRect(),factor=210/page.width;
   return [...block.getClientRects()].map(rect=>({id,widthMm:rect.width*factor,rightMm:(rect.right-page.left)*factor}));
  }));
  const sourceSeparatorChecks=[...sourceGroups].map(([id,blocks])=>{
   const section=id.replace('sources-',''),groups=[...root.querySelectorAll(`.section-sources[data-section="${section}"]`)];
   const group=groups.at(-1),last=blocks.at(-1),lastLine=last.querySelector('.auto-typeset-line:last-child');
   const page=lastLine.closest('[data-vivliostyle-page-container]'),pageRect=page.getBoundingClientRect(),factor=210/pageRect.width;
   const lastRect=lastLine.getBoundingClientRect();
   const next=[...root.querySelectorAll('.heading-block')].find(h=>lastLine.compareDocumentPosition(h)&Node.DOCUMENT_POSITION_FOLLOWING);
   const nextRect=next?.getBoundingClientRect();
   const sameColumn=next && next.closest('[data-vivliostyle-page-container]')===page && Math.abs(nextRect.left-lastRect.left)*factor<2;
   const sourceRows=blocks.reduce((n,b)=>n+b.querySelectorAll('.auto-typeset-line').length,0);
   const extraRows=Number(group.dataset.gridExtraRows||0);
   const openingStars=root.querySelector(`.section-sources[data-section="${section}"] .source-stars:not(.ai-source-stars)`);
   const render=lastLine.closest('.auto-typeset-render'),zoom=pageRect.width/(210*96/25.4);
   const flowBottom=lastRect.bottom-(parseFloat(getComputedStyle(render).top)||0)*zoom;
   return {section,sourceRows,extraGapRows:extraRows,expectedGapMm:(6+extraRows)*bodyLeadingMm,
    starsBefore:openingStars?.textContent,bodyNoteSeparator:groups[0].dataset.bodyNoteSeparator||'same_column',stars:null,
    paddingBelowStarsMm:(parseFloat(getComputedStyle(group).paddingBottom)+parseFloat(getComputedStyle(group).marginBottom))*factor,
    sameColumnNext:!!sameColumn,nextHeadingGapMm:sameColumn?(nextRect.top-flowBottom)*factor:null};
  });
  const sourceRendering=[...sourceGroups].map(([id,blocks])=>({id,
   fontSize:getComputedStyle(blocks[0]).fontSize,locations:noteLocations(blocks),physicalFragments:blocks.reduce((n,b)=>n+b.getClientRects().length,0),
   lines:blocks.flatMap(block=>[...block.querySelectorAll('.auto-typeset-line')].map(l=>l.textContent))}));
  const aiGroups=new Map();
  for(const block of root.querySelectorAll('.ai-copy')){
   const trace=block.dataset.traceSection;
   if(!aiGroups.has(trace))aiGroups.set(trace,[]);
   aiGroups.get(trace).push(block);
  }
  const aiRendering=[...aiGroups].map(([traceId,blocks])=>{
   const sectionId=blocks[0].closest('.section-sources').dataset.section;
   const source=[...root.querySelectorAll('.source-copy')].find(s=>s.closest('.section-sources').dataset.section===sectionId);
   const widthsMm=blocks.flatMap(block=>{
    const page=block.closest('[data-vivliostyle-page-container]').getBoundingClientRect();
    return [...block.getClientRects()].map(r=>r.width*210/page.width);
   });
   return {id:`ai-notice-${sectionId}`,traceId,sectionId,fontSize:getComputedStyle(blocks[0]).fontSize,
    widthMm:widthsMm[0],widthsMm,physicalFragments:widthsMm.length,locations:noteLocations(blocks),
    lines:blocks.flatMap(block=>[...block.querySelectorAll('.auto-typeset-line')].map(l=>l.textContent)),
    beforeSources:!!source && !!(blocks.at(-1).compareDocumentPosition(source)&Node.DOCUMENT_POSITION_FOLLOWING),
    links:blocks.flatMap(block=>[...block.querySelectorAll('.ai-documentation-ref')].map(a=>({href:a.getAttribute('href'),text:a.textContent,
      composedLine:!!a.closest('.auto-typeset-line'),rects:a.getClientRects().length,nowrap:getComputedStyle(a).whiteSpace==='nowrap'})))};
  });
  const aiSourceGapChecks=aiRendering.filter(ai=>ai.beforeSources).map(ai=>{
   const lastAi=[...root.querySelectorAll(`[data-note-block="${ai.id}"] .auto-typeset-line`)].at(-1);
   const source=root.querySelector(`[data-note-block="sources-${ai.sectionId}"]`);
   const firstSource=source.querySelector('.auto-typeset-line');
   const page=lastAi.closest('[data-vivliostyle-page-container]'),box=page.getBoundingClientRect(),factor=297/box.height;
   const a=lastAi.getBoundingClientRect(),b=firstSource.getBoundingClientRect();
   const sameColumn=firstSource.closest('[data-vivliostyle-page-container]')===page && Math.abs(a.left-b.left)*210/box.width<2;
   return {section:ai.sectionId,sameColumn,blankRowMm:parseFloat(getComputedStyle(source).marginTop)*factor,
    gapMm:sameColumn?(b.top-a.bottom)*factor:null,smallLeadingMm:a.height*factor};
  });
  const baseline=el=>{
   const probe=document.createElement('span');
   probe.style.cssText='display:inline-block;width:0;height:0;padding:0;margin:0;vertical-align:baseline';
   el.append(probe);const y=probe.getBoundingClientRect().top;probe.remove();return y;
  };
  const inkContext=document.createElement('canvas').getContext('2d');
  const verticalInk=element=>{
   const edges=[], walker=document.createTreeWalker(element,NodeFilter.SHOW_TEXT);
   const nodes=[];let node;
   while(node=walker.nextNode())if(node.textContent.trim())nodes.push(node);
   for(const node of nodes){
    const owner=node.parentElement.closest('.note-call,.source-number,.gender-star')||element;
    const style=getComputedStyle(owner),precision=64;
    inkContext.font=`${style.fontStyle} ${style.fontWeight} ${parseFloat(style.fontSize)*precision}px ${style.fontFamily}`;
    const ink=inkContext.measureText(node.textContent),y=baseline(owner);
    const zoom=owner.closest('[data-vivliostyle-page-container]').getBoundingClientRect().width/(210*96/25.4);
    edges.push({top:y-ink.actualBoundingBoxAscent/precision*zoom,bottom:y+ink.actualBoundingBoxDescent/precision*zoom});
   }
   return {top:Math.min(...edges.map(e=>e.top)),bottom:Math.max(...edges.map(e=>e.bottom))};
  };
  const sourceStarChecks=[...root.querySelectorAll('.source-stars')].filter(stars=>stars.getBoundingClientRect().height>0).map(stars=>{
   const group=stars.closest('.section-sources'),internal=stars.classList.contains('ai-source-stars');
   const section=group.dataset.section;
   const body=internal?[...root.querySelectorAll(`[data-note-block="ai-notice-${section}"] .auto-typeset-line`)].at(-1)
    :[...root.querySelectorAll(`.copy[data-paragraph-id="${group.dataset.precedingParagraph}"] .auto-typeset-line`)].at(-1);
   const note=root.querySelector(`[data-note-block="${internal?'sources':'ai-notice'}-${section}"] .auto-typeset-line`);
   if(!body||!note)return {section:group.dataset.section,neighboursPresent:false};
   const page=stars.closest('[data-vivliostyle-page-container]'),box=page.getBoundingClientRect();
   const column=element=>(element.getBoundingClientRect().left-box.left)*210/box.width<116?1:2;
   const sameColumn=body.closest('[data-vivliostyle-page-container]')===page&&note.closest('[data-vivliostyle-page-container]')===page
    &&column(body)===column(stars)&&column(note)===column(stars);
   const above=verticalInk(body),below=verticalInk(note),ink=verticalInk(stars),factor=297/box.height;
   const gapAboveMm=(ink.top-above.bottom)*factor,gapBelowMm=(below.top-ink.bottom)*factor;
   const style=getComputedStyle(stars);
   return {section:group.dataset.section,kind:internal?'ai_to_sources':'body_to_notes',
    page:pages.indexOf(page)+1,neighboursPresent:true,sameColumn,
    gapAboveMm,gapBelowMm,gapDifferenceMm:Math.abs(gapAboveMm-gapBelowMm),
    blankAboveMm:parseFloat(style.marginTop)*factor,blankBelowMm:parseFloat(style.marginBottom)*factor,
    shiftPx:parseFloat(getComputedStyle(stars).getPropertyValue('--source-star-shift'))};
  });
  const targets=new Map([...root.querySelectorAll('[id]')].map(element=>[element.id,element]));
  const inlineCalls=calls.map(call=>{
   const style=getComputedStyle(call), size=parseFloat(style.fontSize), precision=64;
   inkContext.font=`${style.fontStyle} ${style.fontWeight} ${size*precision}px ${style.fontFamily}`;
   const ink=inkContext.measureText(call.textContent);
   const bracket=inkContext.measureText('['), numeral=inkContext.measureText('0');
   const bracketNumeralAxisErrorMm=Math.abs(bracket.actualBoundingBoxDescent-bracket.actualBoundingBoxAscent
    -numeral.actualBoundingBoxDescent+numeral.actualBoundingBoxAscent)/2/precision*25.4/96;
   const row=call.closest('.auto-typeset-line').getBoundingClientRect();
   const page=call.closest('[data-vivliostyle-page-container]').getBoundingClientRect();
   const center=baseline(call)+(ink.actualBoundingBoxDescent-ink.actualBoundingBoxAscent)/(2*precision);
   // Vivliostyle also inserts empty navigation anchors under rewritten IDs.
   // Compare labels against the actual source-number element's canonical ID.
   const target=targets.get(call.id.replace(/^call-/,'fn-'))
    || targets.get(decodeURIComponent(call.getAttribute('href').slice(1)));
   const bodyStyle=getComputedStyle(call.closest('.auto-typeset-line'));
   const scale=row.width/parseFloat(bodyStyle.width);
   const previous=call.previousSibling, next=call.nextSibling;
   const edgeRect=(node,offset)=>{
    const range=document.createRange();range.setStart(node,offset);range.setEnd(node,offset+1);
    return range.getBoundingClientRect();
   };
   const bodyInk=character=>{
    inkContext.font=`${bodyStyle.fontStyle} ${bodyStyle.fontWeight} ${parseFloat(bodyStyle.fontSize)*precision}px ${bodyStyle.fontFamily}`;
    const glyph=inkContext.measureText(character);
    return {left:-glyph.actualBoundingBoxLeft/precision,right:glyph.actualBoundingBoxRight/precision};
   };
   const callRect=call.getBoundingClientRect();
   const preceding=bodyInk(previous.textContent.at(-1)), following=bodyInk(next.textContent[0]);
   const opticalLeftPx=(callRect.left-edgeRect(previous,previous.textContent.length-1).left)/scale
    -ink.actualBoundingBoxLeft/precision-preceding.right;
   const opticalRightPx=(edgeRect(next,0).left-callRect.left)/scale+following.left-ink.actualBoundingBoxRight/precision;
   return {id:call.id,label:call.textContent,targetLabel:target?.textContent,
    fontFeatures:style.fontFeatureSettings,sourceFontFeatures:target?getComputedStyle(target).fontFeatureSettings:null,
    bracketNumeralAxisErrorMm,
    fontSizePt:size*72/96,sourceFontSizePt:target?parseFloat(getComputedStyle(target).fontSize)*72/96:null,
    glyphCenterErrorMm:Math.abs(center-row.top-row.height/2)*297/page.height,
    leadingSpace:/\s$/.test(call.previousSibling?.textContent||''),
    atLineStart:!(call.previousSibling?.textContent||'').length,
    opticalLeftPx,opticalRightPx,opticalGapErrorMm:Math.abs(opticalLeftPx-opticalRightPx)*scale*297/page.height,
    opticalSpacingPt:parseFloat(style.marginLeft)*72/96,
    atomic:getComputedStyle(call).whiteSpace==='nowrap' && call.getClientRects().length===1};
  });
  const firstBody=root.querySelector('.copy .auto-typeset-line'), firstPage=firstBody.closest('[data-vivliostyle-page-container]').getBoundingClientRect();
  // Calibrate to the first printed baseline. The scaled preview container
  // includes a border; its outer top is not the physical paper's zero point.
  const gridOrigin=(baseline(firstBody)-firstPage.top)*297/firstPage.height;
  const nextBody=firstBody.nextElementSibling;
  const step=(baseline(nextBody)-baseline(firstBody))*297/firstPage.height;
  const annotationLeadingRatios=[];
  for(const block of root.querySelectorAll('.source-copy,.ai-copy')){
   const rows=[...block.querySelectorAll('.auto-typeset-line')];
   for(let index=1;index<rows.length;index++){
    const first=rows[index-1],next=rows[index],sheet=first.closest('[data-vivliostyle-page-container]');
    if(sheet!==next.closest('[data-vivliostyle-page-container]'))continue;
    const box=sheet.getBoundingClientRect(),column=el=>(el.getBoundingClientRect().left-box.left)*210/box.width<116?1:2;
    if(column(first)!==column(next))continue;
    annotationLeadingRatios.push((baseline(next)-baseline(first))*297/box.height/step);
   }
  }
  const columnTopMm=(firstBody.getBoundingClientRect().top-firstPage.top)*297/firstPage.height;
  const bodyNoteSeparatorChecks=[...new Set([...root.querySelectorAll('.section-sources')].map(g=>g.dataset.section))].map(section=>{
   const group=root.querySelector(`.section-sources[data-section="${section}"]`);
   const body=[...root.querySelectorAll(`.copy[data-paragraph-id="${group.dataset.precedingParagraph}"] .auto-typeset-line`)].at(-1);
   const note=root.querySelector(`[data-note-block="ai-notice-${section}"] .auto-typeset-line`)
    ||root.querySelector(`[data-note-block="sources-${section}"] .auto-typeset-line`);
   if(!body||!note)return {section,neighboursPresent:false};
   const sheet=note.closest('[data-vivliostyle-page-container]'),box=sheet.getBoundingClientRect();
   const column=el=>(el.getBoundingClientRect().left-box.left)*210/box.width<116?1:2;
   const sameColumn=body.closest('[data-vivliostyle-page-container]')===sheet&&column(body)===column(note);
   const stars=sourceStarChecks.filter(s=>s.section===section&&s.kind==='body_to_notes');
   const rect=note.getBoundingClientRect(),render=note.closest('.auto-typeset-render');
   const zoom=box.width/(210*96/25.4);
   const fragmentShiftPx=parseFloat(getComputedStyle(note).getPropertyValue('--annotation-fragment-shift'))||0;
   // Remove the existing optical baseline correction to measure actual flow.
   const flowTopMm=(rect.top-box.top-((parseFloat(getComputedStyle(render).top)||0)+fragmentShiftPx)*zoom)*297/box.height;
   return {section,neighboursPresent:true,sameColumn,visibleStars:stars.length,
    separator:group.dataset.bodyNoteSeparator||'same_column',
    page:pages.indexOf(sheet)+1,column:column(note),
    leadingMarginPx:parseFloat(getComputedStyle(group).marginTop),
    flowTopMm,columnTopMm,openingErrorMm:Math.abs(flowTopMm-columnTopMm)};
  });
  const sourceColumnOpeningChecks=[...root.querySelectorAll('.source-copy')].flatMap(source=>{
   const line=source.querySelector('.auto-typeset-line'),sheet=line.closest('[data-vivliostyle-page-container]');
   const box=sheet.getBoundingClientRect(),rect=line.getBoundingClientRect();
   const column=el=>(el.getBoundingClientRect().left-box.left)*210/box.width<116?1:2;
   const earlier=[...sheet.querySelectorAll('.copy .auto-typeset-line,.ai-copy .auto-typeset-line,.source-copy .auto-typeset-line,.heading-block h1,.heading-block h2,.heading-stars,.source-stars')]
    .some(el=>el!==line&&column(el)===column(line)&&el.getBoundingClientRect().top<rect.top-.15*box.height/297);
   if(earlier)return [];
   const actual=(baseline(line)-box.top)*297/box.height;
   const fragmentShiftPx=parseFloat(getComputedStyle(line).getPropertyValue('--annotation-fragment-shift'))||0;
   const fragmentShiftMm=fragmentShiftPx*rect.height/parseFloat(getComputedStyle(line).height)*297/box.height;
   // margin-break can discard the physical gap while computed margin-top
   // still retains its declared value. Measure the actual row opening.
   const render=line.closest('.auto-typeset-render'),zoom=box.width/(210*96/25.4);
   const baselineShiftPx=parseFloat(getComputedStyle(render).top)||0;
   const flowTopMm=(rect.top-box.top-(baselineShiftPx+fragmentShiftPx)*zoom)*297/box.height;
   return [{id:source.dataset.noteBlock,page:pages.indexOf(sheet)+1,column:column(line),
    firstLine:line.textContent,marginTopPx:parseFloat(getComputedStyle(source).marginTop),
    firstBaselineMm:actual,targetBaselineMm:gridOrigin,fragmentShiftMm,
    flowTopMm,openingErrorMm:Math.abs(flowTopMm-columnTopMm),
    firstLineTopMm:(rect.top-box.top)*297/box.height,
    errorMm:Math.abs(actual-fragmentShiftMm-gridOrigin)}];
  });
  const paragraphIndentChecks=[...root.querySelectorAll('.copy .auto-typeset-line[data-paragraph-indent]')].map(line=>{
   const sheet=line.closest('[data-vivliostyle-page-container]'),box=sheet.getBoundingClientRect(),rect=line.getBoundingClientRect();
   const y=(rect.top-box.top)*297/box.height;
   const atColumnStart=Math.abs(y-columnTopMm)<.15;
   const expectedLeft=Number(line.dataset[atColumnStart?'indentBaseLeftPx':'indentAppliedLeftPx']);
   const expectedWidth=Number(line.dataset[atColumnStart?'indentBaseWidthPx':'indentAppliedWidthPx']);
   const style=getComputedStyle(line);
   return {id:line.dataset.lineId,paragraph:line.closest('.copy').dataset.paragraphId,
    page:pages.indexOf(sheet)+1,column:(rect.left-box.left)*210/box.width<116?1:2,atColumnStart,
    suppressed:line.dataset.columnStartIndent==='suppressed',
    leftErrorPx:Math.abs(parseFloat(style.left)-expectedLeft),widthErrorPx:Math.abs(parseFloat(style.width)-expectedWidth)};
  });
  const gridError=(el,subdivisions=1)=>{
   const box=el.closest('[data-vivliostyle-page-container]').getBoundingClientRect();
   const row=((baseline(el)-box.top)*297/box.height-gridOrigin)/step;
   return Math.abs(row-Math.round(row*subdivisions)/subdivisions)*step;
  };
  const annotationCadenceErrors=selector=>[...root.querySelectorAll(selector)].flatMap(block=>{
   const columns=new Map();
   for(const line of block.querySelectorAll('.auto-typeset-line')){
    const p=line.closest('[data-vivliostyle-page-container]'),box=p.getBoundingClientRect();
    const key=`${pages.indexOf(p)}:${(line.getBoundingClientRect().left-box.left)*210/box.width<116?1:2}`;
    if(!columns.has(key))columns.set(key,[]);columns.get(key).push(line);
   }
   return [...columns.values()].flatMap(lines=>{
    const sheet=lines[0].closest('[data-vivliostyle-page-container]').getBoundingClientRect();
    const start=baseline(lines[0]);
    return lines.map((line,index)=>Math.abs((baseline(line)-start)*297/sheet.height-index*annotationLeadingMm));
   });
  });
  const annotationSubdivisions=Math.abs(annotationBodyRatio-.75)<1e-6?4:
   Math.abs(annotationBodyRatio-2/3)<1e-6?3:0;
  const annotationGridErrors=selector=>annotationSubdivisions
   ? [...root.querySelectorAll(`${selector} .auto-typeset-line`)].map(el=>gridError(el,annotationSubdivisions)) : [];
  const grid={toleranceMm:0.15,bodyStepMm:step,bodyMaxErrorMm:Math.max(...[...root.querySelectorAll('.copy .auto-typeset-line')].map(el=>gridError(el))),
   aiMaxErrorMm:Math.max(...annotationCadenceErrors('.ai-copy'),...annotationGridErrors('.ai-copy')),
   sourceMaxErrorMm:Math.max(...annotationCadenceErrors('.source-copy'),...annotationGridErrors('.source-copy')),
   annotationGridScope:annotationSubdivisions===4?'quarter_body_rows_with_three_quarter_leading':
    annotationSubdivisions===3?'third_body_rows_with_two_thirds_leading':'independent_annotation_leading_with_body_grid_after_annotations'};
  const bottomRow=Math.floor((289-3*bodyLeadingMm-(firstBody.getBoundingClientRect().bottom-firstPage.top)*297/firstPage.height)/step);
  const bottomBaselineMm=gridOrigin+bottomRow*step;
  const annotationSequences=new Map();
  for(const line of root.querySelectorAll('.ai-copy .auto-typeset-line,.source-copy .auto-typeset-line')){
   const section=line.closest('.section-sources').dataset.section;
   if(!annotationSequences.has(section))annotationSequences.set(section,[]);annotationSequences.get(section).push(line);
  }
  const bottomAlignmentChecks=[...annotationSequences].flatMap(([section,lines])=>{
   const fragments=new Map();
   for(const line of lines){
    const p=line.closest('[data-vivliostyle-page-container]'),box=p.getBoundingClientRect(),r=line.getBoundingClientRect();
    const page=pages.indexOf(p)+1,column=(r.left-box.left)*210/box.width<116?1:2,key=`${page}:${column}`;
    if(!fragments.has(key))fragments.set(key,{page,column,lines:[]});fragments.get(key).lines.push(line);
   }
   return [...fragments.values()].slice(0,-1).map(fragment=>{
    const last=fragment.lines.at(-1),p=last.closest('[data-vivliostyle-page-container]').getBoundingClientRect();
    const y=(baseline(last)-p.top)*297/p.height;
    const shifts=fragment.lines.map(line=>parseFloat(getComputedStyle(line).getPropertyValue('--annotation-fragment-shift'))||0);
    return {section,page:fragment.page,column:fragment.column,rowCount:fragment.lines.length,lastLine:last.dataset.noteLine,
     targetBaselineMm:bottomBaselineMm,lastBaselineMm:y,errorMm:Math.abs(y-bottomBaselineMm),
     equalRowShift:Math.max(...shifts)-Math.min(...shifts)<.001,shiftPx:shifts[0]};
   });
  });
  const annotationFlow={
   keptAnnotationLines:root.querySelectorAll('.source-copy [data-keep-with-next],.ai-copy [data-keep-with-next]').length,
   keptBlocks:[...root.querySelectorAll('.section-sources,.source-copy,.ai-copy')].filter(b=>getComputedStyle(b).breakInside!=='auto').length,
   overflowingLines:[...root.querySelectorAll('.source-copy .auto-typeset-line,.ai-copy .auto-typeset-line')].filter(line=>{
    const p=line.closest('[data-vivliostyle-page-container]').getBoundingClientRect(),r=line.getBoundingClientRect();
    return (r.bottom-p.top)*297/p.height>289-3*bodyLeadingMm+.05;
   }).map(line=>line.dataset.noteLine)
  };
  return {inlineCalls,grid,leading:{expectedBodyMm:bodyLeadingMm,actualBodyMm:step,
    annotationRatioRange:[Math.min(...annotationLeadingRatios),Math.max(...annotationLeadingRatios)],
    expectedAnnotationMm:annotationLeadingMm,annotationFontRatio,
    maxAnnotationRatioError:Math.max(...annotationLeadingRatios.map(r=>Math.abs(r-annotationLeadingMm/bodyLeadingMm))),
    checkedAdjacentAnnotationRows:annotationLeadingRatios.length},paragraphIndentChecks,sourceColumnOpeningChecks,bodyNoteSeparatorChecks,annotationFlow,bottomAlignmentChecks,aiSourceGapChecks,aiRendering,sourceRendering,sourceSeparatorChecks,sourceStarChecks,sourceWidths,pages:pages.length,paragraphs:new Set([...root.querySelectorAll('.copy')].map(p=>p.id)).size,
   chapters:[...root.querySelectorAll('h1')].map(e=>e.textContent),subheadings:[...root.querySelectorAll('h2')].map(e=>e.textContent),
   calls:calls.length,sources:root.querySelectorAll('.section-source').length,groups:root.querySelectorAll('.section-sources').length,
   missingLinks,overflow,opticalOverhangs,inkEdges:{rows:edgeRows,tolerancePx:.15,maxOverrunPx:maxInkOverrunPx},
   footerGeometry:pages.map((p,index)=>{
    const sheet=p.getBoundingClientRect(),footer=p.querySelector('[data-vivliostyle-page-counter]'),rect=footer.getBoundingClientRect();
    return {page:index+1,bottomMarginMm:297-(rect.bottom-sheet.top)*297/sheet.height,
      fontSizePt:parseFloat(getComputedStyle(footer).fontSize)*72/96};
   }),pageNumbers:pages.map(p=>p.querySelector('[data-vivliostyle-page-counter]').textContent)};
 },{fixtureGap:fixture.layout.source_after_gap,bodyLeadingMm,annotationLeadingMm,
   annotationFontRatio:fixture.layout.source_leading_font_ratio,annotationBodyRatio:fixture.layout.source_leading_body_ratio});
 audit.genderStars=await page.evaluate(expected=>{
  const root=document.querySelector('#pages'),context=document.createElement('canvas').getContext('2d'),precision=64;
  const baseline=el=>{
   const probe=document.createElement('span');
   probe.style.cssText='display:inline-block;width:0;height:0;padding:0;margin:0;vertical-align:baseline';
   el.append(probe);const y=probe.getBoundingClientRect().top;probe.remove();return y;
  };
  const separator=root.querySelector('.heading-stars,.source-stars');
  const separatorFont=getComputedStyle(separator).fontFamily;
  const details=[...root.querySelectorAll('.copy .gender-star')].map(star=>{
   const line=star.closest('.auto-typeset-line'),style=getComputedStyle(star),page=star.closest('[data-vivliostyle-page-container]').getBoundingClientRect();
   context.font=`${style.fontStyle} ${style.fontWeight} ${parseFloat(style.fontSize)*precision}px ${style.fontFamily}`;
   const ink=context.measureText('*'),x=context.measureText('x'),zoom=page.width/(210*96/25.4);
   const starBaseline=baseline(star),lineBaseline=baseline(line);
   const center=starBaseline+(ink.actualBoundingBoxDescent-ink.actualBoundingBoxAscent)/2/precision*zoom;
   const xCenter=lineBaseline+(x.actualBoundingBoxDescent-x.actualBoundingBoxAscent)/2/precision*zoom;
   return {paragraph:star.closest('.copy').dataset.paragraphId,line:line.dataset.lineId,glyph:star.textContent,
    sameFontAsSeparator:style.fontFamily===separatorFont,fontSizePt:parseFloat(style.fontSize)*72/96,
    sameFontSizeAsText:style.fontSize===getComputedStyle(line).fontSize,
    position:style.position,top:style.top,verticalAlign:style.verticalAlign,
    baselineErrorMm:Math.abs(starBaseline-lineBaseline)*297/page.height,
    aboveXCenterMm:(xCenter-center)*297/page.height,
    betweenLetters:/\p{L}$/u.test(star.previousSibling?.textContent||'')&&/^\p{L}/u.test(star.nextSibling?.textContent||'')};
  });
  return {expected,count:details.length,alignment:'native_font_baseline',
   maxBaselineErrorMm:Math.max(0,...details.map(d=>d.baselineErrorMm)),details};
 },fixture.text_revision?.gender_stars||0);
 if(fixture.layout.gender_star_vertical_alignment!=='native_font_baseline'||
  audit.genderStars.count!==audit.genderStars.expected||audit.genderStars.details.some(s=>s.glyph!=='*'||!s.sameFontAsSeparator||!s.sameFontSizeAsText||!s.betweenLetters||s.position!=='static'||s.top!=='auto'||s.verticalAlign!=='baseline'||s.baselineErrorMm>.03||s.aboveXCenterMm<=0))
  throw Error('Gender asterisks are missing, detached or displaced from their native font position: '+JSON.stringify(audit.genderStars));
 audit.hyphenation=await page.evaluate(limit=>{
  const paragraphs=new Map();
  for(const block of document.querySelectorAll('#pages .copy,#pages .bibliography-entry')){
   const kind=block.matches('.copy')?'body':'bibliography';
   const id=block.dataset.paragraphId||block.dataset.bibKey;
   const key=`${kind}:${id}`;
   if(!paragraphs.has(key))paragraphs.set(key,{kind,id,lines:[]});
   paragraphs.get(key).lines.push(...[...block.querySelectorAll('.auto-typeset-line')].map(line=>line.textContent.trimEnd()));
  }
  let maximum=0,pairs=0;const violations=[];
  for(const {kind,id,lines} of paragraphs.values()){
   let streak=0;
   for(const [index,text] of lines.entries()){
    streak=text.endsWith('-')?streak+1:0;maximum=Math.max(maximum,streak);
    if(streak===2)pairs++;
    if(streak>limit)violations.push({kind,id,row:index+1,streak,text});
   }
  }
  return {limit,paragraphs:paragraphs.size,maxConsecutiveLineEndingHyphens:maximum,pairs,violations,
   includesLiteralCompoundHyphens:true};
 },composed.options.maxHyphens);
 if(audit.hyphenation.violations.length)throw Error('Rendered consecutive hyphens exceed the configured limit: '+JSON.stringify(audit.hyphenation));
 audit.paragraphEndings=await page.evaluate(()=>{
  const root=document.querySelector('#pages'),context=document.createElement('canvas').getContext('2d');
  const pages=[...root.querySelectorAll('[data-vivliostyle-page-container]')],groups=new Map();
  for(const block of root.querySelectorAll('.copy')){
   const id=block.dataset.paragraphId;
   if(!groups.has(id))groups.set(id,[]);
   groups.get(id).push(...block.querySelectorAll('.auto-typeset-line'));
  }
  return [...groups].map(([id,lines])=>{
   const last=lines.at(-1),style=getComputedStyle(last);
   context.font=`${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
   const indentPx=context.measureText('M M ').width,extraPx=context.measureText('MMM').width;
   const sheet=last.closest('[data-vivliostyle-page-container]'),box=sheet.getBoundingClientRect();
   const zoom=box.width/(210*96/25.4),walker=document.createTreeWalker(last,NodeFilter.SHOW_TEXT);
   let node,widthPx=0,bodyText='';
   while(node=walker.nextNode()){
    if(node.parentElement.closest('.note-call')||!node.textContent)continue;
    const range=document.createRange();range.selectNodeContents(node);
    widthPx+=range.getBoundingClientRect().width/zoom;bodyText+=node.textContent;
   }
   const minimumPx=indentPx+extraPx;
   return {id,page:pages.indexOf(sheet)+1,column:(last.getBoundingClientRect().left-box.left)*210/box.width<116?1:2,
    rows:lines.length,text:last.textContent,bodyText,widthPx,indentPx,extraPx,minimumPx,
    marginPx:widthPx-minimumPx,passes:widthPx>=minimumPx-.15};
  });
 });
 if(fixture.layout.paragraph_closing_line_minimum==='normal_indent_plus_three_character_advances' &&
  (composed.endingPolicy?.extraCharacterAdvances!==3||composed.endingPolicy?.excludeSourceCalls!==true||
   audit.paragraphEndings.length!==fixture.paragraphs.length||audit.paragraphEndings.some(p=>!p.passes)))
  throw Error('A printed paragraph ending is shorter than the normal indent plus three characters: '
   +JSON.stringify(audit.paragraphEndings.filter(p=>!p.passes)));
 // Use complete words in the unsplit manuscript and their character spans,
 // independently of the adapter's hyphenation candidates and word count.
 audit.subchapterEndings=fixture.sections.filter(s=>s.has_heading).map(section=>{
  const paragraph=fixture.paragraphs.filter(p=>p.section_id===section.id).at(-1);
  const printed=audit.paragraphEndings.find(p=>p.id===paragraph?.id);
  if(!printed)throw Error('Missing subchapter closing paragraph: '+section.id);
  const body=paragraph.original.replace(/\s*\(vgl\.[^()\n]*\)/g,'').replace(/[\u00ad\u200b]/gu,'')
   .replace(/\s+/gu,' ').trim();
  const last=printed.bodyText.trim(),start=body.length-last.length;
  if(!body.endsWith(last))throw Error('Subchapter closing row differs from manuscript: '+paragraph.id);
  const words=[...body.matchAll(/\p{L}[\p{L}\p{M}\p{N}]*(?:[-*’'][\p{L}\p{M}\p{N}]+)*/gu)]
   .filter(word=>word.index>=start).map(word=>word[0]);
  const manifest=composed.manifest.find(p=>p.id===paragraph.id);
  return {section:section.id,title:section.title,id:paragraph.id,page:printed.page,column:printed.column,
   text:printed.text,bodyText:last,completeWords:words,wholeWordCount:words.length,
   minimumWholeWords:fixture.layout.subchapter_closing_line_minimum_whole_words,
   constraintEnabled:manifest?.subchapterEnding===true&&manifest?.minimumClosingWholeWords===1,
   passes:words.length>=fixture.layout.subchapter_closing_line_minimum_whole_words};
 });
 if(fixture.layout.subchapter_closing_line_minimum_whole_words===1&&
  (composed.endingPolicy?.subchapterMinimumWholeWords!==1||
   composed.manifest.filter(p=>p.minimumClosingWholeWords===1).length!==audit.subchapterEndings.length||
   audit.subchapterEndings.some(p=>!p.passes||!p.constraintEnabled)))
  throw Error('A printed subchapter closing row has no complete word or its constraint is missing: '
   +JSON.stringify(audit.subchapterEndings.filter(p=>!p.passes||!p.constraintEnabled)));
 const invalidCalls=audit.inlineCalls.filter(call=>
   !/^\[\d{2}\]$/.test(call.label)||call.label!==call.targetLabel||!call.atomic||
   Math.abs(call.fontSizePt-fixture.layout.body_call_font_size_pt)>0.01||Math.abs(call.fontSizePt-call.sourceFontSizePt)>0.01||call.glyphCenterErrorMm>0.06);
 if(fixture.layout.body_call_format==='inline_brackets_decimal_leading_zero' && invalidCalls.length)
   throw Error('Inline bracket labels, font size or vertical centering differ: '+JSON.stringify(invalidCalls));
 if(fixture.layout.body_call_leading_space===false && audit.inlineCalls.some(call=>call.leadingSpace||call.atLineStart))
   throw Error('A body source call is separated from the preceding text.');
 if(fixture.layout.body_call_optical_spacing==='match_closing_bracket_to_body_period' &&
   audit.inlineCalls.some(call=>call.opticalGapErrorMm>0.06))
   throw Error('Inline source-call optical gaps differ: '+JSON.stringify(audit.inlineCalls.filter(call=>call.opticalGapErrorMm>0.06)));
 if(fixture.layout.source_label_font_feature==='case' && audit.inlineCalls.some(call=>
   !/["']case["'](?:\s+1)?(?:,|$)/.test(call.fontFeatures)||
   !/["']case["'](?:\s+1)?(?:,|$)/.test(call.sourceFontFeatures)||call.bracketNumeralAxisErrorMm>0.01))
   throw Error('Native case-sensitive brackets or numeral-axis alignment differ.');
 if(fixture.layout.paragraph_indent_at_column_start===false && audit.paragraphIndentChecks.some(p=>p.atColumnStart!==p.suppressed||p.leftErrorPx>.05||p.widthErrorPx>.05))throw Error('Paragraph indentation does not match its actual column position: '+JSON.stringify(audit.paragraphIndentChecks));
 if(fixture.layout.source_opening_margin_at_column_start==='discard'&&audit.sourceColumnOpeningChecks.some(s=>s.errorMm>.06||s.openingErrorMm>.06||s.firstLineTopMm<7.9))throw Error('A source column opening retains a leading blank row or crosses the type area: '+JSON.stringify(audit.sourceColumnOpeningChecks));
 if([audit.grid.bodyMaxErrorMm,audit.grid.aiMaxErrorMm,audit.grid.sourceMaxErrorMm].some(error=>error>audit.grid.toleranceMm))throw Error('Body, AI notice or source baselines leave the shared grid: '+JSON.stringify(audit.grid));
 if(Math.abs(audit.leading.actualBodyMm-audit.leading.expectedBodyMm)>.02 || audit.leading.maxAnnotationRatioError>.002)
  throw Error('Body or annotation leading differs from the current fixture: '+JSON.stringify(audit.leading));
 if(audit.footerGeometry.some(f=>Math.abs(f.bottomMarginMm-8)>.05 || Math.abs(f.fontSizePt-fixture.layout.page_number_font_size_pt)>.01))
  throw Error('Preview footer margin or size differs: '+JSON.stringify(audit.footerGeometry));
 const internalStarChecks=audit.sourceStarChecks.filter(s=>s.kind==='ai_to_sources');
 const expectedInternalStars=fixture.layout.ai_source_separator==='blank_body_row_star_row_blank_body_row'?fixture.ai_notices.filter(n=>fixture.sections.find(s=>s.id===n.section_id)?.note_ids.length).length:0;
 if(fixture.layout.ai_source_separator==='blank_body_row_star_row_blank_body_row' &&
  (internalStarChecks.length!==expectedInternalStars||internalStarChecks.some(s=>Math.abs(s.blankAboveMm-bodyLeadingMm)>0.06||Math.abs(s.blankBelowMm-bodyLeadingMm)>0.06)))
  throw Error('Incorrect blank/star/blank separator between AI notice and sources.');
 if(fixture.layout.ai_source_separator==='one_annotation_blank_row' &&
  (internalStarChecks.length || audit.aiSourceGapChecks.length!==fixture.sections.filter(s=>s.note_ids.length).length ||
   // Native column breaks discard the separating margin. Measure the blank
   // row only when both neighbouring text edges share the physical column.
   audit.aiSourceGapChecks.some(g=>g.sameColumn && (Math.abs(g.blankRowMm-annotationLeadingMm)>.06 || Math.abs(g.gapMm-g.smallLeadingMm)>.06))))
   throw Error('AI and sources must have exactly one small blank row: '+JSON.stringify(audit.aiSourceGapChecks));
 if(fixture.layout.source_separator_vertical_alignment==='equal_visible_ink_gaps' &&
  (audit.sourceStarChecks.length!==audit.bodyNoteSeparatorChecks.filter(s=>s.sameColumn).length+expectedInternalStars||audit.sourceStarChecks.some(s=>!s.neighboursPresent||!s.sameColumn||s.gapAboveMm<0||s.gapBelowMm<0||s.gapDifferenceMm>0.06)))
  throw Error('Source stars are not centred between visible text edges: '+JSON.stringify(audit.sourceStarChecks));
 if(fixture.layout.body_note_separator==='only_within_same_physical_column' &&
  (audit.bodyNoteSeparatorChecks.length!==fixture.ai_notices.length||audit.bodyNoteSeparatorChecks.some(s=>!s.neighboursPresent||
   (s.sameColumn?(s.visibleStars!==1||s.separator!=='same_column'):
    (s.visibleStars!==0||s.separator!=='column_boundary'||s.leadingMarginPx>.05||s.openingErrorMm>.06)))))
  throw Error('Body/annotation separator does not match its physical column boundary: '+JSON.stringify(audit.bodyNoteSeparatorChecks));
 if(fixture.layout.annotation_continuation_alignment==='last_body_baseline' && audit.bottomAlignmentChecks.some(f=>f.errorMm>.06||!f.equalRowShift))throw Error('A continued annotation is not aligned to the last body baseline: '+JSON.stringify(audit.bottomAlignmentChecks));
 if(fixture.layout.annotation_pagination==='continuous_line_flow' && (audit.annotationFlow.keptAnnotationLines||audit.annotationFlow.keptBlocks||audit.annotationFlow.overflowingLines.length))throw Error('Annotation flow is kept or exceeds the type area: '+JSON.stringify(audit.annotationFlow));
 if(audit.aiRendering.length!==fixture.ai_notices.length)throw Error('Rendered AI notice count differs.');
 if(fixture.layout.ai_notice_minimum_fragment_rows===2 && audit.aiRendering.some(block=>block.lines.length>1&&block.locations.some(fragment=>fragment.lines===1)))
  throw Error('An isolated AI notice row remains in a physical column: '+JSON.stringify(audit.aiRendering.map(b=>({id:b.id,locations:b.locations}))));
 for(const block of audit.aiRendering){
  const expected=fixture.ai_notices.find(n=>n.trace_id===block.traceId);
  const composedBlock=composed.aiManifest.find(m=>m.id===block.id);
  const section=fixture.sections.find(s=>s.id===expected?.section_id);
  if(!expected || block.sectionId!==expected.section_id || !!block.beforeSources!==!!section.note_ids.length || block.widthsMm.some(width=>Math.abs(width-83.5)>0.15) || Math.abs(parseFloat(block.fontSize)-fixture.layout.ai_notice_font_size_pt*96/72)>0.01
   || JSON.stringify(block.lines)!==JSON.stringify(composedBlock?.lines.map(l=>l.text)))throw Error('AI notice layout or text differs.');
  const absolute=href=>new URL(href,'http://127.0.0.1:8768/').href;
  if(block.links.some(a=>!expected.ranges.some(r=>absolute(r.href)===absolute(a.href))))throw Error('Unexpected AI citation link.');
  for(const range of expected.ranges){
   const fragments=block.links.filter(a=>absolute(a.href)===absolute(range.href));
   const printed=fragments.map(a=>a.text).join('').replace(/\s/g,'');
   if(printed!==range.label.replace(/\s/g,''))throw Error('Missing or truncated AI citation: '+range.label);
   if(fixture.layout.ai_notice_reference_wrapping==='complete_page_and_line_range_nonbreaking' &&
      (fragments.length!==1 || !fragments[0].composedLine || fragments[0].rects!==1 || !fragments[0].nowrap))
     throw Error('AI page/line reference wraps across lines: '+range.label);
  }
 }
 if(audit.sourceRendering.some(block=>Math.abs(parseFloat(block.fontSize)-fixture.layout.source_font_size_pt*96/72)>0.01 || JSON.stringify(block.lines)!==JSON.stringify(composed.sourceManifest.find(m=>m.id===block.id)?.lines.map(l=>l.text))))throw Error('Rendered source lines or font size differs from the original plugin composition.');
 if(fixture.layout.source_block_width_fraction===1 && audit.sourceWidths.some(s=>Math.abs(s.widthMm-83.5)>0.15 || Math.min(Math.abs(s.rightMm-113.5),Math.abs(s.rightMm-202))>0.15))throw Error('A source table does not fill the text column width.');
 if(fixture.layout.source_vertical_alignment==='after_text' && audit.sourceSeparatorChecks.some(s=>(s.bodyNoteSeparator!=='column_boundary'&&s.starsBefore!=='* * *') || s.stars!=null || s.paddingBelowStarsMm<6*bodyLeadingMm-0.15 || Math.abs(s.paddingBelowStarsMm-s.expectedGapMm)>0.15 || (s.sameColumnNext && Math.abs(s.nextHeadingGapMm-s.expectedGapMm)>0.15)))throw Error('Incorrect source separator or expanding subsection gap.');
 await fs.mkdir(work+'/complete-pages',{recursive:true});
 const containers=await page.locator('#pages [data-vivliostyle-page-container]').all();
 for(let i=0;i<containers.length;i++)await containers[i].screenshot({path:work+'/complete-pages/page-'+String(i+1).padStart(2,'0')+'.png'});
 await fs.writeFile(work+'/complete-audit.json',JSON.stringify({...audit,all_manuscript_paragraphs_preserved:true},null,2));
 if(audit.missingLinks.length||audit.overflow.length)throw Error('Unresolved links or visible text outside a column: '+JSON.stringify(audit.overflow.slice(0,8)));
 console.log(JSON.stringify({...audit,aiRendering:audit.aiRendering.length,sourceRendering:audit.sourceRendering.length,sourceWidths:audit.sourceWidths.length,sourceSeparatorChecks:audit.sourceSeparatorChecks.length}));
}finally{await browser.close();}
