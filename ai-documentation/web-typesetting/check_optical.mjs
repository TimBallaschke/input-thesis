import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
const require=createRequire('/Users/timballaschke/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json');
const {chromium}=require('playwright');
const out='output/ai-documentation-web';
await fs.mkdir(out+'/qa',{recursive:true});
const bundle=await fs.readFile(out+'/arketa-auto-typeset.js','utf8');
if(!bundle.includes('let opticalStrength = 2;'))throw Error('Doubled optical strength missing');
const metricExport='\nexport {Yr as measureOpticalMargins};\n';
await fs.writeFile(out+'/qa/optical-before.js',bundle.replace('let opticalStrength = 2;','let opticalStrength = 1;')+metricExport);
await fs.writeFile(out+'/qa/optical-double.js',bundle+metricExport);
const original=JSON.parse(await fs.readFile(out+'/CGPT-19-composition.json'));
const fixture=original.paragraphs.find(p=>p.id==='CGPT-19-L004933').text;
const browser=await chromium.launch({headless:true,executablePath:'/Users/timballaschke/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell'});
try {
 const page=await browser.newPage({viewport:{width:640,height:650},deviceScaleFactor:2});
 await page.goto('http://127.0.0.1:8768/ai-documentation/compose.html',{waitUntil:'load'});
 const result=await page.evaluate(async text=>{
  const {autoTypeset:before,measureOpticalMargins:beforeMetrics}=await import('./qa/optical-before.js');
  const {autoTypeset:after,measureOpticalMargins:afterMetrics}=await import('./qa/optical-double.js');
  await document.fonts.load('6pt Arketa');await document.fonts.load('10pt Arketa');
  document.querySelector('#composer').remove();
  document.body.style.cssText='background:white;padding:20px;display:flex;gap:30px;align-items:flex-start';
  const options={mode:'justified',language:'de-1996',opticalMargin:true,wordSpacing:[.9,1.1],tracking:[-.01,.01],glyphScale:[.98,1.02],maxHyphens:3,hyphenMinPrefix:2,hyphenMinSuffix:2};
  const report=[];
  let checked=0,nonzero=0,punctuation=0;
  for(const pt of [6,10]){
   const first=beforeMetrics(pt+'pt Arketa',pt*96/72,true),second=afterMetrics(pt+'pt Arketa',pt*96/72,true);
   for(const character of 'Hfij.,;:!?\"\'()[]–—-')for(const side of ['left','right']){
    const previous=first.opticalMargin.measure(character,side),current=second.opticalMargin.measure(character,side);
    const multiplier=/\p{P}/u.test(character)?2:1;
    if(Math.abs(current-previous*multiplier)>1e-8)throw Error('Incorrect punctuation/letter correction: '+character+' '+side);
    checked++;if(previous!==0)nonzero++;if(multiplier===2)punctuation++;
   }
  }
  if(!nonzero)throw Error('No nonzero optical corrections checked');
  for(const [label,plugin,pt,narrow,strength] of [['Bisher',before,6,true,1],['Doppelt',after,6,true,2],['Ganz',after,6,false,2],['Doppelt10',after,10,false,2]]){
   const wrapper=document.createElement('section');wrapper.style.cssText='flex:none;position:relative';
   const heading=document.createElement('p');heading.textContent=label;wrapper.append(heading);
   const p=document.createElement('div');p.id=label;p.className='compose-line';p.style.cssText='font-size:'+pt+'pt;width:'+(narrow?'calc(75.15mm - 6.3ch)':'calc(83.5mm - 7ch)');p.textContent=text;wrapper.append(p);document.body.append(wrapper);
   const controller=plugin(p,options);await controller.refresh();
   const lines=[...p.querySelectorAll('.auto-typeset-line')];
   const ctx=document.createElement('canvas').getContext('2d');ctx.font=pt+'pt Arketa';
   const metrics=(strength===1?beforeMetrics:afterMetrics)(pt+'pt Arketa',pt*96/72,true);
   const edges=lines.slice(0,-1).map(line=>{
    const str=line.textContent;const c=str.at(-1),metric=ctx.measureText(c);
    const scale=Number(line.style.transform.match(/[\d.]+/)[0]);
    const range=document.createRange();range.setStart(line.firstChild,str.length-1);range.setEnd(line.firstChild,str.length);
    const actual=range.getBoundingClientRect().left+metric.actualBoundingBoxRight*scale;
    const bearing=metric.width-metric.actualBoundingBoxRight,correction=metrics.opticalMargin.measure(c,'right');
    const expected=p.getBoundingClientRect().right+(correction-bearing)*scale;
    return {last:c,error_px:actual-expected,text:str};
   });
   let cursor=0;const normal=text.replace(/\s+/g,' ').trim();
   for(const line of lines){let s=line.textContent.trim();if(!s)continue;while(normal[cursor]===' ')cursor++;let n=s.length;if(normal.slice(cursor,cursor+n)!==s){if(!s.endsWith('-')||normal.slice(cursor,cursor+n-1)!==s.slice(0,-1))throw Error('Changed fixture text');n--;}cursor+=n;}
   if(cursor!==normal.length)throw Error('Incomplete fixture');
   report.push({label,pt,narrow,strength,punctuation_doubling_cases:punctuation,letter_alignment_cases:checked-punctuation,nonzero_metric_cases:nonzero,rows:lines.length,mean_edge_error_px:edges.reduce((sum,r)=>sum+Math.abs(r.error_px),0)/edges.length,max_edge_error_px:Math.max(...edges.map(r=>Math.abs(r.error_px))),edges});
   if(label==='Ganz'||pt===10)wrapper.style.display='none';
  }
  return report;
 },fixture);
 await fs.mkdir(out+'/qa',{recursive:true});
 await page.screenshot({path:out+'/qa/optical-before-after.png',fullPage:true});
 // The plugin measures integer clientWidth; compare at the same half-pixel
 // rounding tolerance used to verify the published prose edges.
 if(result.filter(r=>r.label!=='Bisher').some(r=>r.max_edge_error_px>.5))throw Error('Right visible edges are not sufficiently aligned');
 await fs.writeFile(out+'/qa/optical-comparison.json',JSON.stringify(result,null,2));
 console.log(JSON.stringify(result.map(({edges,...r})=>r)));
}finally {await browser.close()}
