const catalog=await(await fetch('edition.json')).json();
const index=document.querySelector('#archive-index'),root=document.querySelector('#pages');
for(const archive of catalog.archives){const a=document.createElement('a');a.href='#'+archive.id;a.textContent=archive.id;index.append(a,' ')}
const sheets=[];
for(const page of catalog.pages){const el=document.createElement('div');el.className='sheet';el.dataset.page=page.number;el.id='page-'+page.number;root.append(el);sheets.push(el)}
function fitPages(){root.style.zoom=String(Math.min(1,Math.max(.2,(innerWidth-40)/(210*96/25.4))))}
fitPages();addEventListener('resize',fitPages);
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)loadPage(Number(e.target.dataset.page))}),{rootMargin:'1500px'});
sheets.forEach(p=>observer.observe(p));
const loading=new Map();
async function loadPage(number){
 if(loading.has(number))return loading.get(number);
 const task=(async()=>{const p=sheets[number-1];const response=await fetch('pages/'+String(number).padStart(4,'0')+'.html');if(!response.ok)throw Error('Seite '+number+' nicht erreichbar');p.innerHTML=await response.text();p.dataset.loaded='true';observer.unobserve(p)})();
 loading.set(number,task);return task;
}
async function targetHash(){const key=decodeURIComponent(location.hash.slice(1));if(!key)return;const target=catalog.targets[key];if(!target)return;await loadPage(target.page);const el=document.getElementById(target.anchor)||sheets[target.page-1];el.scrollIntoView({block:'center'});el.classList.add('target');setTimeout(()=>el.classList.remove('target'),2000)}
addEventListener('hashchange',targetHash);
window.aiEdition=catalog;
window.aiLoadPage=loadPage;
const trace=await(await fetch('section-provenance.json')).json();
const locations=await(await fetch('locations.json')).json();
const panel=document.querySelector('#mapping');
const sectionId=new URLSearchParams(location.search).get('section');
const selected=trace.sections.find(s=>s.id===sectionId);
if(selected){
 panel.style.display='block';
 const heading=document.createElement('p');heading.textContent=selected.title+' · dokumentierte Fundstellen, Kontextprüfung ausstehend';panel.append(heading);
 const note=document.createElement('p');note.textContent='Textüberschneidungen, ausdrückliche Abschnittsnennungen und gemeinsame Literaturbelege. Die Treffer bestätigen noch keine Übernahme oder vollständige Entstehungsgeschichte.';panel.append(note);
 for(const relation of selected.relations){
  const p=document.createElement('p'),a=document.createElement('a');a.href='#'+relation.target;
  const place=catalog.targets[relation.target];
  const start=locations.canonical_lines[`${relation.archive_id}-L${String(relation.start_line).padStart(6,'0')}`]?.start;
  const end=locations.canonical_lines[`${relation.archive_id}-L${String(relation.end_line).padStart(6,'0')}`]?.end;
  const labels={textual_overlap:'Textüberschneidung',explicit_section_mention:'Abschnittsnennung',shared_scholarly_reference:'Literaturbezug'};
  const range=start&&end?` · S. ${start.page}${start.page!==end.page?'–'+end.page:''} · Z. ${start.line_number}–${end.line_number}`:'';
  a.textContent=`${relation.archive_id}${range}${place?' · Treffer S. '+place.page+', Z. '+place.line_number:''} · ${relation.role} · ${relation.kinds.map(k=>labels[k]).join(', ')}`;
  p.append(a,document.createElement('br'),relation.matching_excerpt||relation.preview);panel.append(p);
 }
}else{
 for(const section of trace.sections){const a=document.createElement('a');a.href='?section='+section.id;a.textContent=section.title;index.append(a,' ')}
}
await targetHash();
