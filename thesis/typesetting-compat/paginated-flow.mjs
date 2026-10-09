import fs from 'node:fs/promises';

// Correct only the fractional row following the actual final annotation
// fragment. A column break resets its baseline phase, so the unpaginated
// paragraph's total line count cannot determine this padding.
export async function calibrateAnnotationFlow({viewer, work, base, readInspection, bodyLeadingMm}) {
  const adjustments = [];
  const inspect = () => viewer.evaluate(bodyLeadingMm => {
    const pages = [...document.querySelectorAll('[data-vivliostyle-page-container]')];
    const display = pages.map(p => p.style.display);
    pages.forEach(p => p.style.display = 'block');
    const root = document;
    const baseline = el => {
      const probe = document.createElement('span');
      probe.style.cssText = 'display:inline-block;width:0;height:0;padding:0;margin:0;vertical-align:baseline';
      el.append(probe); const y = probe.getBoundingClientRect().top; probe.remove(); return y;
    };
    const position = el => {
      const page = el.closest('[data-vivliostyle-page-container]');
      const p = page.getBoundingClientRect(), r = el.getBoundingClientRect();
      return {page:pages.indexOf(page), column:(r.left-p.left)*210/p.width < 116 ? 1 : 2,
        y:(r.top-p.top)*297/p.height, bottom:(r.bottom-p.top)*297/p.height,
        baseline:(baseline(el)-p.top)*297/p.height};
    };
    const first = root.querySelector('.copy .auto-typeset-line');
    const origin = position(first).baseline;
    const step = position(first.nextElementSibling).baseline-origin;
    const phase = el => ((position(el).baseline-origin)/step % 1 + 1) % 1;
    const sameColumn = (a,b) => {
      const p=position(a), q=position(b); return p.page===q.page && p.column===q.column;
    };
    const rows = selector => [...root.querySelectorAll(selector)];
    const corrections = [], singleAiFragments = [], boundarySeparators = [];
    const sections = new Set(rows('.section-sources').map(g=>g.dataset.section));
    for (const section of sections) {
      const groups = rows(`.section-sources[data-section="${section}"]`);
      const ai = rows(`.ai-copy[data-note-block="ai-notice-${section}"]`);
      const aiRows = ai.flatMap(b=>[...b.querySelectorAll('.auto-typeset-line')]);
      const body = rows(`.copy[data-paragraph-id="${groups[0].dataset.precedingParagraph}"] .auto-typeset-line`).at(-1);
      const firstNote = aiRows[0] || root.querySelector(`[data-note-block="sources-${section}"] .auto-typeset-line`);
      if (body && firstNote && !sameColumn(body, firstNote)
          && groups[0].dataset.bodyNoteSeparator !== 'column_boundary') {
        boundarySeparators.push({section, firstNoteId:firstNote.dataset.noteLine,
          body:position(body), note:position(firstNote)});
      }
      const aiFragments = new Map();
      for (const row of aiRows) {
        const p = position(row), key = `${p.page}:${p.column}`;
        if (!aiFragments.has(key)) aiFragments.set(key, []);
        aiFragments.get(key).push(row);
      }
      if (aiRows.length > 1) for (const fragment of aiFragments.values()) {
        if (fragment.length !== 1) continue;
        const lone = fragment[0], index = aiRows.indexOf(lone);
        // Push an isolated opening/continuation to the following column.
        // If the final fragment is isolated, move its preceding row with it.
        // Only annotation rows move; the body retains its normal flow.
        const isFinal = index === aiRows.length - 1;
        const start = isFinal ? aiRows[index - 1] : lone;
        const following = isFinal ? lone : aiRows[index + 1];
        singleAiFragments.push({section, id:start.dataset.noteLine,
          releaseId:following.dataset.noteLine, loneId:lone.dataset.noteLine,
          kind:isFinal?'closing':'opening_or_continuation', ...position(lone)});
      }
      const source = rows(`.source-copy[data-note-block="sources-${section}"]`);
      const sourceRows = source.flatMap(b=>[...b.querySelectorAll('.auto-typeset-line')]);
      const alignAfter = (previous, next, owner, property) => {
        if (!previous || !next || !sameColumn(previous,next)) return;
        const error = phase(next);
        if (Math.min(error,1-error)*step < .05) return;
        const current = Number(owner.dataset.gridExtraRows || 0);
        const extraRows = (current-error+1)%1;
        corrections.push({id:owner.dataset.noteBlock || section,property,extraRows});
      };
      // Keep the exact small blank row between AI and sources. Only the gap
      // after the complete annotation sequence returns to the body grid.
      if(sourceRows.length) {
        const next = rows('.heading-block').find(h=>sourceRows.at(-1).compareDocumentPosition(h)&Node.DOCUMENT_POSITION_FOLLOWING);
        const nextLine = next?.querySelector('h2');
        alignAfter(sourceRows.at(-1),nextLine,groups.at(-1),'--source-gap-extra');
      }
    }
    const overflows = rows('.source-copy .auto-typeset-line,.ai-copy .auto-typeset-line')
      .filter(line=>position(line).bottom > 289-3*bodyLeadingMm+.05)
      .map(line=>({id:line.dataset.noteLine, ...position(line)}));
    pages.forEach((p,i)=>p.style.display=display[i]);
    return {corrections,overflows,singleAiFragments,boundarySeparators};
  }, bodyLeadingMm);
  for (let pass=0;pass<8;pass++) {
    const state=await inspect();
    if(!state.corrections.length && !state.overflows.length && !state.singleAiFragments.length && !state.boundarySeparators.length) break;
    if(pass===7)throw Error('Annotation pagination did not converge: '+JSON.stringify(state));
    const frozen=await fs.readFile(work+'/web/frozen.html','utf8');
    const updated=await viewer.evaluate(({html,state})=>{
      const doc=new DOMParser().parseFromString(html,'text/html');
      for(const correction of state.corrections) {
        const owner=correction.property==='--ai-grid-extra'
          ? doc.querySelector(`[data-note-block="${correction.id}"]`)
          : doc.querySelector(`.section-sources[data-section="${correction.id}"]`);
        owner.style.setProperty(correction.property,`calc(var(--baseline) * ${correction.extraRows})`);
        owner.dataset.gridExtraRows=correction.extraRows;
      }
      // Move just the single line whose painted box crosses the type area.
      for(const overflow of state.overflows) {
        const line=doc.querySelector(`[data-note-line="${overflow.id}"]`);
        if(!line)throw Error('Missing stable annotation line '+overflow.id);
        line.style.breakBefore='column';
      }
      for(const move of state.singleAiFragments) {
        const line=doc.querySelector(`[data-note-line="${move.id}"]`);
        const following=doc.querySelector(`[data-note-line="${move.releaseId}"]`);
        if(!line||!following)throw Error('Missing AI row for singleton correction.');
        line.style.breakBefore='column';
        // An earlier overflow guard must not strand the moved row by itself.
        if(following.style.breakBefore==='column')following.style.removeProperty('break-before');
        line.dataset.aiFragmentStart='minimum_two_rows';
      }
      for(const boundary of state.boundarySeparators) {
        const group=doc.querySelector(`.section-sources[data-section="${boundary.section}"]`);
        const firstNote=doc.querySelector(`[data-note-line="${boundary.firstNoteId}"]`);
        if(!group||!firstNote)throw Error('Missing body/annotation boundary '+boundary.section);
        // Preserve the observed column break while removing all three
        // separator rows. Otherwise their removal could pull annotations
        // back under the body and alternate between the two layouts.
        group.dataset.bodyNoteSeparator='column_boundary';
        firstNote.style.removeProperty('break-before');
      }
      return '<!doctype html>\n'+doc.documentElement.outerHTML;
    },{html:frozen,state});
    await fs.writeFile(work+'/web/frozen.html',updated);
    adjustments.push({pass:pass+1,...state});
    await viewer.goto(`${base}/viewer/index.html#src=${base}/frozen.html?flow=${pass+1}&bookMode=false&renderAllPages=true`,{waitUntil:'networkidle'});
    await viewer.waitForFunction(()=>document.querySelector('[data-vivliostyle-viewer-status="complete"]'),null,{timeout:60000});
  }
  // Optical movement does not affect pagination. Measure neighbouring ink in
  // the final physical column; a separator at a boundary has no shared gap.
  const optical=await viewer.context().browser().newPage({viewport:{width:1100,height:1300}});
  await optical.goto(`${base}/preview.html`,{waitUntil:'networkidle'});
  await optical.waitForFunction(()=>window.previewViewer?.readyState==='complete' && document.querySelector('#pages .ai-copy'));
  await optical.evaluate(()=>document.fonts.ready);
  // Native pagination determines which original paragraph starts a column.
  // Restore just that first line's full frame, preserving all plugin breaks.
  const columnStartIndents=await optical.evaluate(()=>{
    const root=document.querySelector('#pages');
    const first=root.querySelector('.copy .auto-typeset-line');
    const firstPage=first.closest('[data-vivliostyle-page-container]').getBoundingClientRect();
    const topMm=(first.getBoundingClientRect().top-firstPage.top)*297/firstPage.height;
    const pages=[...root.querySelectorAll('[data-vivliostyle-page-container]')];
    return [...root.querySelectorAll('.copy .auto-typeset-line[data-paragraph-indent]')].filter(line=>{
      const p=line.closest('[data-vivliostyle-page-container]').getBoundingClientRect();
      return Math.abs((line.getBoundingClientRect().top-p.top)*297/p.height-topMm)<.15;
    }).map(line=>{
      const p=line.closest('[data-vivliostyle-page-container]'),box=p.getBoundingClientRect();
      return {id:line.dataset.lineId,paragraph:line.closest('.copy').dataset.paragraphId,
        page:pages.indexOf(p)+1,column:(line.getBoundingClientRect().left-box.left)*210/box.width<116?1:2,
        leftPx:Number(line.dataset.indentBaseLeftPx),widthPx:Number(line.dataset.indentBaseWidthPx)};
    });
  });
  if(columnStartIndents.length){
    const frozen=await fs.readFile(work+'/web/frozen.html','utf8');
    const updated=await optical.evaluate(({html,indents})=>{
      const doc=new DOMParser().parseFromString(html,'text/html');
      for(const indent of indents){
        const line=doc.querySelector(`[data-line-id="${indent.id}"]`);
        line.style.left=`${indent.leftPx}px`;line.style.width=`${indent.widthPx}px`;
        line.dataset.columnStartIndent='suppressed';
      }
      return '<!doctype html>\n'+doc.documentElement.outerHTML;
    },{html:frozen,indents:columnStartIndents});
    await fs.writeFile(work+'/web/frozen.html',updated);
    await optical.reload({waitUntil:'networkidle'});
    await optical.waitForFunction(()=>window.previewViewer?.readyState==='complete' && document.querySelector('#pages .copy'));
    await optical.evaluate(()=>document.fonts.ready);
  }
  // Position a continued physical annotation fragment on the final body
  // baseline. Moving every small row equally preserves its exact leading and
  // the single blank row between AI and sources; it does not affect pagination.
  const bottomFragments=await optical.evaluate(bodyLeadingMm=>{
    const root=document.querySelector('#pages'),pages=[...root.querySelectorAll('[data-vivliostyle-page-container]')];
    const baseline=el=>{
      const probe=document.createElement('span');
      probe.style.cssText='display:inline-block;width:0;height:0;padding:0;margin:0;vertical-align:baseline';
      el.append(probe);const y=probe.getBoundingClientRect().top;probe.remove();return y;
    };
    const position=el=>{
      const page=el.closest('[data-vivliostyle-page-container]'),p=page.getBoundingClientRect(),r=el.getBoundingClientRect();
      return {page:pages.indexOf(page)+1,column:(r.left-p.left)*210/p.width<116?1:2,
        top:(r.top-p.top)*297/p.height,bottom:(r.bottom-p.top)*297/p.height,baseline:(baseline(el)-p.top)*297/p.height,
        cssPixelsPerMm:parseFloat(getComputedStyle(el).height)/((r.bottom-r.top)*297/p.height)};
    };
    const first=root.querySelector('.copy .auto-typeset-line'),firstPosition=position(first);
    const step=position(first.nextElementSibling).baseline-firstPosition.baseline;
    const finalRow=Math.floor((289-3*bodyLeadingMm-firstPosition.bottom)/step);
    const targetBaselineMm=firstPosition.baseline+finalRow*step;
    const groups=new Map();
    for(const line of root.querySelectorAll('.ai-copy .auto-typeset-line,.source-copy .auto-typeset-line')){
      const section=line.closest('.section-sources').dataset.section;
      if(!groups.has(section))groups.set(section,[]);groups.get(section).push(line);
    }
    return [...groups].flatMap(([section,lines])=>{
      const fragments=new Map();
      for(const line of lines){
        const p=position(line),key=`${p.page}:${p.column}`;
        if(!fragments.has(key))fragments.set(key,[]);fragments.get(key).push(line);
      }
      return [...fragments.values()].slice(0,-1).map(rows=>{
        const last=position(rows.at(-1)),shiftMm=targetBaselineMm-last.baseline;
        // Independent annotation leading may place its final baseline just
        // below the last body baseline. A small upward correction is valid
        // while the whole fragment remains inside the top of the type area.
        if(position(rows[0]).top+shiftMm<firstPosition.top-.06)
          throw Error('Aligning a continued annotation would cross the top of the type area.');
        const deltaPx=shiftMm*last.cssPixelsPerMm;
        return {section,page:last.page,column:last.column,targetBaselineMm,baselineBeforeMm:last.baseline,
          shiftMm,rows:rows.map(row=>({id:row.dataset.noteLine,
            shiftPx:(parseFloat(getComputedStyle(row).getPropertyValue('--annotation-fragment-shift'))||0)+deltaPx}))};
      });
    });
  },bodyLeadingMm);
  if(bottomFragments.length){
    const frozen=await fs.readFile(work+'/web/frozen.html','utf8');
    const updated=await optical.evaluate(({html,fragments})=>{
      const doc=new DOMParser().parseFromString(html,'text/html');
      for(const fragment of fragments)for(const row of fragment.rows){
        const line=doc.querySelector(`[data-note-line="${row.id}"]`);
        if(!line)throw Error('Missing annotation row for bottom alignment: '+row.id);
        line.style.setProperty('--annotation-fragment-shift',`${row.shiftPx}px`);
        line.dataset.bottomFragment=`${fragment.section}:${fragment.page}:${fragment.column}`;
      }
      return '<!doctype html>\n'+doc.documentElement.outerHTML;
    },{html:frozen,fragments:bottomFragments});
    await fs.writeFile(work+'/web/frozen.html',updated);
    await optical.reload({waitUntil:'networkidle'});
    await optical.waitForFunction(()=>window.previewViewer?.readyState==='complete' && document.querySelector('#pages .ai-copy'));
    await optical.evaluate(()=>document.fonts.ready);
  }
  const stars=await optical.evaluate(()=>{
    const pages=[...document.querySelectorAll('#pages [data-vivliostyle-page-container]')];
    const display=pages.map(p=>p.style.display);pages.forEach(p=>p.style.display='block');
    const root=document.querySelector('#pages'),context=document.createElement('canvas').getContext('2d');
    const baseline=el=>{
      const probe=document.createElement('span');probe.style.cssText='display:inline-block;width:0;height:0;padding:0;margin:0;vertical-align:baseline';
      el.append(probe);const y=probe.getBoundingClientRect().top;probe.remove();return y;
    };
    const ink=el=>{
      const edges=[],walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);let node;
      while(node=walker.nextNode())if(node.textContent.trim()) {
        const owner=node.parentElement.closest('.note-call,.source-number,.gender-star')||el,s=getComputedStyle(owner);
        context.font=`${s.fontStyle} ${s.fontWeight} ${parseFloat(s.fontSize)*64}px ${s.fontFamily}`;
        const m=context.measureText(node.textContent),y=baseline(owner);
        const zoom=owner.closest('[data-vivliostyle-page-container]').getBoundingClientRect().width/(210*96/25.4);
        edges.push({top:y-m.actualBoundingBoxAscent/64*zoom,bottom:y+m.actualBoundingBoxDescent/64*zoom});
      }
      return {top:Math.min(...edges.map(e=>e.top)),bottom:Math.max(...edges.map(e=>e.bottom))};
    };
    const column=el=>{
      const p=el.closest('[data-vivliostyle-page-container]'),r=p.getBoundingClientRect();
      return `${pages.indexOf(p)}:${(el.getBoundingClientRect().left-r.left)*210/r.width<116?1:2}`;
    };
    const corrections=[];
    for(const star of root.querySelectorAll('.source-stars')) {
      if(!star.getBoundingClientRect().height)continue;
      const group=star.closest('.section-sources'),internal=star.classList.contains('ai-source-stars'),section=group.dataset.section;
      const previous=internal
        ? [...root.querySelectorAll(`[data-note-block="ai-notice-${section}"] .auto-typeset-line`)].at(-1)
        : [...root.querySelectorAll(`.copy[data-paragraph-id="${group.dataset.precedingParagraph}"] .auto-typeset-line`)].at(-1);
      const next=root.querySelector(`[data-note-block="${internal?'sources':'ai-notice'}-${section}"] .auto-typeset-line`);
      if(!previous||!next||column(previous)!==column(star)||column(next)!==column(star))continue;
      const a=ink(previous),b=ink(next),s=ink(star);
      const zoom=star.closest('[data-vivliostyle-page-container]').getBoundingClientRect().width/(210*96/25.4);
      const current=parseFloat(getComputedStyle(star).getPropertyValue('--source-star-shift'))||0;
      corrections.push({id:star.id,shiftPx:current+(a.bottom+b.top-s.top-s.bottom)/2/zoom});
    }
    pages.forEach((p,i)=>p.style.display=display[i]);return corrections;
  });
  await optical.close();
  const frozen=await fs.readFile(work+'/web/frozen.html','utf8');
  const updated=await viewer.evaluate(({html,stars})=>{
    const doc=new DOMParser().parseFromString(html,'text/html');
    for(const star of stars)doc.getElementById(star.id).style.setProperty('--source-star-shift',`${star.shiftPx}px`);
    return '<!doctype html>\n'+doc.documentElement.outerHTML;
  },{html:frozen,stars});
  await fs.writeFile(work+'/web/frozen.html',updated);
  await viewer.reload({waitUntil:'networkidle'});
  await viewer.waitForFunction(()=>document.querySelector('[data-vivliostyle-viewer-status="complete"]'),null,{timeout:60000});
  return {inspection:await readInspection(),adjustments,columnStartIndents,bottomFragments,starCorrections:stars};
}
