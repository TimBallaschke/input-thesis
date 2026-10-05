import {autoTypeset} from './arketa-auto-typeset.js';
const options={mode:'justified',language:'de-1996',opticalMargin:false,
 wordSpacing:[.9,1.1],tracking:[-.01,.01],glyphScale:[.98,1.02],maxHyphens:3,
 hyphenMinPrefix:2,hyphenMinSuffix:2};
const host=document.querySelector('#composer');
const normalize=s=>s.replace(/\u00ad/g,'').replace(/\s+/g,' ').trim();
window.docReady=(async()=>{
 await document.fonts.load('6pt Arketa');await document.fonts.ready;
 const archive=await (await fetch(new URLSearchParams(location.search).get('archive')+'.json')).json();
 const rows=[],paragraphs=[],violations=[],hardSourceBreaks=[],blocks=[];
 let current;
 // Archive lines are fixed-width transcript wrapping, not typographic paragraphs.
 // Join consecutive body lines; retain blank boundaries and separate headers.
 for(const line of archive.lines){
  if(!line.text.trim()){blocks.push({blank:true,line});current=null;continue}
  if(line.message_start){blocks.push({lines:[line]});current=null;continue}
  if(!current){current={lines:[]};blocks.push(current)}
  current.lines.push(line);
 }
 let previousBlank=false;
 for(let offset=0;offset<blocks.length;offset+=48){
  const batch=blocks.slice(offset,offset+48).map(block=>{
   if(block.blank)return {block};
   let text='';const spans=[];
   for(const line of block.lines){
    if(text)text+=' ';
    const start=text.length;text+=normalize(line.text);
    spans.push({id:line.id,number:line.number,start,end:text.length});
   }
   const p=document.createElement('div');p.className='compose-line'+(block.lines[0].message_role==='user'?' user-message':'');
   p.textContent=text.replace(/\S{43,}/gu,word=>[...word].map((c,i)=>i&&i%30===0?'\u00ad'+c:c).join(''));
   host.append(p);return {block,text,spans,p,controller:autoTypeset(p,options)};
  });
  await Promise.all(batch.filter(x=>x.controller).map(x=>x.controller.refresh()));
  for(const entry of batch){
   const {block,p}=entry;
   if(!p){
    if(!previousBlank){rows.push({blank:true,refs:[block.line.id],message_role:block.line.message_role});previousBlank=true}
    else rows.at(-1).refs.push(block.line.id);
    continue;
   }
   previousBlank=false;
   let lines=[...p.querySelectorAll('.auto-typeset-render .auto-typeset-line')];
   if(!lines.length)throw Error('No composed paragraph '+block.lines[0].id);
   const printed=[];
   for(const el of lines){
    const range=document.createRange();range.selectNodeContents(el);
    const right=Math.max(...[...range.getClientRects()].map(r=>r.right));
    const overfull=right-p.getBoundingClientRect().right>1.35*96/25.4;
    if(!overfull&&!el.title.includes('überschreitet den Satzspiegel')){
     const text=el.textContent.replace(/\u00ad/g,'').trimEnd();
     if(text.trim())printed.push({text,style:el.getAttribute('style')});
     continue;
    }
    // Repair only an overfull machine-string row; keep surrounding plugin rows.
    hardSourceBreaks.push(block.lines[0].id);
    let remaining=el.textContent.replace(/\u00ad/g,'').trim();
    while(remaining){
     let n=Math.min(40,remaining.length);
     const space=remaining.slice(0,n+1).lastIndexOf(' ');
     if(n<remaining.length&&space>20)n=space;
     const part=remaining.slice(0,n);remaining=remaining.slice(n).trimStart();
     const fragment=document.createElement('div');fragment.className='compose-line'+(block.lines[0].message_role==='user'?' user-message':'');fragment.textContent=part;host.append(fragment);
     const control=autoTypeset(fragment,options);await control.refresh();
     const composed=[...fragment.querySelectorAll('.auto-typeset-render .auto-typeset-line')];
     for(const line of composed){
      const text=line.textContent.replace(/\u00ad/g,'').trimEnd();
      if(!text.trim())continue;
      const box=document.createRange();box.selectNodeContents(line);
      if(Math.max(...[...box.getClientRects()].map(r=>r.right))-fragment.getBoundingClientRect().right>1.35*96/25.4)
       violations.push({id:block.lines[0].id,text,title:'Machine fragment exceeds the text column'});
      printed.push({text,style:line.getAttribute('style')});
     }
     control.destroy();fragment.remove();
    }
   }
   let cursor=0;const seen=new Set(),firstLine=block.lines[0];
   for(const [index,part] of printed.entries()){
    if(!part.text.startsWith(' '))while(entry.text[cursor]===' ')cursor++;
    let n=part.text.length;
    if(entry.text.slice(cursor,cursor+n)!==part.text){
     if(!part.text.endsWith('-')||entry.text.slice(cursor,cursor+n-1)!==part.text.slice(0,-1))throw Error('Transcript mismatch '+firstLine.id+' at '+cursor+' expected '+JSON.stringify(entry.text.slice(cursor,cursor+n))+' got '+JSON.stringify(part.text));
     n--;
    }
    const intersect=entry.spans.filter(s=>s.end>cursor&&s.start<cursor+n);
    if(!intersect.length)throw Error('No source span '+firstLine.id+' cursor '+cursor+' length '+entry.text.length+' part '+JSON.stringify(part));
    const lead=intersect[0],first=!seen.has(lead.id);
    const row={...part,canonical_id:lead.id,canonical_line:lead.number,message_id:firstLine.message_id,message_role:firstLine.message_role,
     first,message_start:firstLine.message_start&&index===0,source_offset:cursor,source_length:n,
     paragraph_id:firstLine.id,paragraph_last:index===printed.length-1,refs:intersect.map(s=>s.id)};
    rows.push(row);intersect.forEach(s=>seen.add(s.id));cursor+=n;
   }
   if(cursor!==entry.text.length)throw Error('Incomplete paragraph '+firstLine.id);
   paragraphs.push({id:firstLine.id,refs:entry.spans.map(s=>s.id),spans:entry.spans,text:entry.text});
   entry.controller.destroy();p.remove();
  }
 }
 return {id:archive.id,title:archive.title,sha256:archive.sha256,rows,paragraphs,violations,hardSourceBreaks,options};
})();
