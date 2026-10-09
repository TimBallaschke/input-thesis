import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const work=path.join(root,'tmp/vivliostyle-compat');
const fixture=JSON.parse(await fs.readFile(work+'/web/fixture.json'));
const composition=JSON.parse(await fs.readFile(work+'/composition.json'));
const bibliography=JSON.parse(await fs.readFile(root+'/thesis/typesetting-compat/bibliography.json'));
const models=JSON.parse(await fs.readFile(root+'/ai-documentation/model-register.json'));
const aiEntry=bibliography.entries.find(e=>e.key==='aiCollaborationDocumentation2026');
if(!aiEntry || Object.values(models.models).flat().some(model=>!aiEntry.text.includes(model))
  || models.unknown_model_archives.some(id=>!aiEntry.text.includes(id)))
  throw Error('AI bibliography entry must preserve all documented model identifiers and missing-metadata limits.');
const expected=fixture.bibliography.entries;
if(composition.bibliographyManifest.length!==expected.length)throw Error('Missing composed bibliography entry.');
if(expected.length!==fixture.sources.length+1 || new Set(expected.map(e=>e.key)).size!==expected.length)
  throw Error('Bibliography must contain each cited work once plus the AI documentation.');
if(fixture.sources.some(key=>!expected.some(e=>e.key===key)))throw Error('A cited source is missing.');
for(const [i,entry] of composition.bibliographyManifest.entries()){
  if(entry.key!==expected[i].key || entry.text!==expected[i].text)throw Error('Bibliography order or source text changed.');
  let cursor=0;
  for(const line of entry.lines){
    while(entry.text[cursor]===' ')cursor++;
    let consumed=line.text.length;
    if(entry.text.slice(cursor,cursor+consumed)!==line.text){
      if(!line.text.endsWith('-') || entry.text.slice(cursor,cursor+consumed-1)!==line.text.slice(0,-1))
        throw Error('Bibliography line differs from source: '+entry.key);
      consumed--;
    }
    cursor+=consumed;
  }
  if(cursor!==entry.text.length)throw Error('Incomplete bibliography entry: '+entry.key);
}
const require=createRequire('/Users/timballaschke/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json');
const {chromium}=require('playwright');
const browser=await chromium.launch({headless:true,executablePath:'/Users/timballaschke/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell'});
try{
  const page=await browser.newPage({viewport:{width:1000,height:1300}});
  await page.goto('http://127.0.0.1:8768/preview.html',{waitUntil:'networkidle'});
  await page.waitForFunction(count=>document.querySelectorAll('#pages .bibliography-entry').length===count,expected.length);
  const actual=await page.evaluate(()=>{
    const pages=[...document.querySelectorAll('#pages [data-vivliostyle-page-container]')];
    const geometry=el=>{
      const sheet=el.closest('[data-vivliostyle-page-container]'), box=sheet.getBoundingClientRect(),rect=el.getBoundingClientRect();
      return {page:pages.indexOf(sheet)+1,x:(rect.x-box.x)*210/box.width,y:(rect.y-box.y)*297/box.height,
        width:rect.width*210/box.width,height:rect.height*297/box.height};
    };
    const title=document.querySelector('#pages .bibliography-title');
    const heading=title.querySelector('h1');
    const style=getComputedStyle(heading);
    const titlePage=title.closest('[data-vivliostyle-page-container]');
    return {pages:pages.length,title:{...geometry(heading),text:heading.textContent,fontSize:style.fontSize,
      align:style.textAlign,transform:style.textTransform,tracking:style.letterSpacing,
      proseLines:titlePage.querySelectorAll('.auto-typeset-line').length},
      entries:[...document.querySelectorAll('#pages .bibliography-entry')].map(el=>({
        ...geometry(el),key:el.dataset.bibKey,fontSize:getComputedStyle(el).fontSize,lineHeight:getComputedStyle(el).lineHeight,
        lines:[...el.querySelectorAll('.auto-typeset-line')].map(line=>({text:line.textContent,...geometry(line)})),
        links:[...el.querySelectorAll('a.bibliography-link')].map(a=>({href:a.getAttribute('href'),text:a.textContent})),
      })),
      footers:pages.filter(p=>p.querySelector('.bibliography')).map(p=>{
        const footer=p.querySelector('[data-vivliostyle-page-counter]');
        return {...geometry(footer),text:footer.textContent,fontSize:getComputedStyle(footer).fontSize};
      })};
  });
  if(actual.title.text!==fixture.bibliography.title || actual.title.proseLines || actual.title.align!=='center' || actual.title.transform!=='uppercase'
    || Math.abs(parseFloat(actual.title.fontSize)-fixture.layout.font_size_pt*96/72)>.01 || parseFloat(actual.title.tracking)<=0
    || Math.abs(actual.title.y+actual.title.height/2-148.5)>.1)
    throw Error('Bibliography title does not match existing centered chapter title pages: '+JSON.stringify(actual.title));
  for(const [i,entry] of actual.entries.entries()){
    const composed=composition.bibliographyManifest[i];
    if(entry.key!==composed.key || JSON.stringify(entry.lines.map(l=>l.text))!==JSON.stringify(composed.lines.map(l=>l.text)))
      throw Error('Paginated bibliography text or order differs.');
    if(Math.abs(parseFloat(entry.fontSize)-8)>.01 || Math.abs(parseFloat(entry.lineHeight)-281/102*96/25.4)>.02 || Math.abs(entry.width-83.5)>.15
      || Math.min(Math.abs(entry.x-30),Math.abs(entry.x-118.5))>.15)
      throw Error('Bibliography typography or column geometry differs: '+entry.key);
    if(entry.lines.some(l=>l.page<=actual.title.page || l.y<7.9 || l.y+l.height>289-3*281/102+.15))throw Error('Bibliography leaves its page area.');
    const absolute=href=>new URL(href,'http://127.0.0.1:8768/').href;
    const expectedLinks=[...bibliography.entries[i].html.matchAll(/href="([^"]+)"/g)].map(m=>absolute(m[1].replace(/&amp;/g,'&')));
    const actualLinks=[...new Set(entry.links.map(a=>absolute(a.href)))];
    if(JSON.stringify(actualLinks)!==JSON.stringify(expectedLinks))throw Error('Bibliography link target differs: '+entry.key);
  }
  for(const footer of actual.footers){
    const lines=actual.entries.flatMap(e=>e.lines).filter(l=>l.page===footer.page);
    const bottom=Math.max(...lines.map(l=>l.y+l.height));
    // The 10 pt footer retains the body line box, which is taller than its
    // nominal font size. Three dense rows reserve that complete box.
    if(Math.abs(297-footer.y-footer.height-8)>.15 || Math.abs(parseFloat(footer.fontSize)-10*96/72)>.01
      || footer.y-bottom<3*281/102-footer.height-.15)throw Error('Bibliography footer position or clearance differs: '+JSON.stringify({footer,bottom}));
  }
  for(const pageNumber of [actual.title.page,...new Set(actual.entries.map(e=>e.page))]){
    await page.locator('#pages [data-vivliostyle-page-container]').nth(pageNumber-1).screenshot({path:work+`/bibliography-page-${pageNumber}.png`});
  }
  await fs.writeFile(root+'/thesis/typesetting-compat/bibliography-results.json',JSON.stringify({...actual,all_entries_preserved:true,unique_cited_sources:fixture.sources.length},null,2)+'\n');
  console.log(JSON.stringify({pages:actual.pages,titlePage:actual.title.page,bibliographyPages:[...new Set(actual.entries.map(e=>e.page))],entries:actual.entries.length,all_entries_preserved:true}));
}finally{await browser.close();}
