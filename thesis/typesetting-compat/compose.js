import { autoTypeset } from './auto-typeset.js';

console.log('COMPAT_PLUGIN_ENTERED', location.href, document.querySelectorAll('.copy').length);

const options = window.compatOptions ?? {
  mode: 'ragged', language: 'de-1996', opticalMargin: true,
  wordSpacing: [0.9, 1.1], tracking: [-0.01, 0.01], glyphScale: [0.98, 1.02],
  maxHyphens: 3, hyphenMinPrefix: 2, hyphenMinSuffix: 2,
  ragged: { zone: '36px', topVariance: '0px', bottomVariance: '8px' },
};

// The original plugin is used unchanged. This test-only adapter restores the
// note links that its plain-text rendering omits; it does not change line breaks.
function restoreNoteLinks(paragraph) {
  const source = paragraph.querySelector('.auto-typeset-source');
  const render = paragraph.querySelector('.auto-typeset-render');
  const text = source.textContent.replace(/\s+/g, ' ').trim().replace(/\u00ad/g, '');
  const links = [...source.querySelectorAll('.note-call,.source-number')].map(link => ({
    original: link,
    marker: link.textContent,
    start: text.indexOf(link.textContent),
  }));
  let cursor = 0;
  for (const line of render.querySelectorAll('.auto-typeset-line')) {
    const printed = line.textContent;
    const remainder = text.slice(cursor).trimStart();
    cursor += text.slice(cursor).length - remainder.length;
    // A discretionary hyphen is the only inserted character in the plugin.
    let consumed = printed.length;
    if (text.slice(cursor, cursor + consumed) !== printed) {
      if (!printed.endsWith('-') || text.slice(cursor, cursor + consumed - 1) !== printed.slice(0, -1)) {
        throw new Error(`Line/source alignment failed in ${paragraph.id}: ${printed}`);
      }
      consumed -= 1;
    }
    const fragment = document.createDocumentFragment();
    let inLine = 0;
    for (const link of links.filter(l => l.start >= cursor && l.start < cursor + consumed)) {
      const position = link.start - cursor;
      fragment.append(printed.slice(inLine, position));
      const clone = link.original.cloneNode(true);
      link.original.removeAttribute('id');
      fragment.append(clone);
      inLine = position + link.marker.length;
    }
    fragment.append(printed.slice(inLine));
    line.replaceChildren(fragment);
    cursor += consumed;
  }
  if (cursor !== text.length) throw new Error(`Unconsumed source in ${paragraph.id}`);
  source.setAttribute('aria-hidden', 'true');
  source.inert = true;
  render.removeAttribute('aria-hidden');
}

window.compatReady = (async () => {
  const started = performance.now();
  const firstParagraph = document.querySelector('.copy');
  const font = getComputedStyle(firstParagraph);
  const fontQuery = `${font.fontSize} ${font.fontFamily}`;
  await document.fonts.load(fontQuery);
  await document.fonts.ready;
  // Measure one additional character advance in the font actually loaded.
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = `${font.fontSize} ${font.fontFamily}`;
  const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const headingTracking = [...capitals].reduce((n, c) => n + context.measureText(c).width, 0) / capitals.length;
  document.documentElement.style.setProperty('--heading-tracking', `${headingTracking}px`);
  // Reserve four character advances for first-line indents during composition.
  // The public plugin has no first-line width option; a temporary prefix makes
  // it reserve that width without changing the original plugin itself.
  const indentedParagraphs = [...document.querySelectorAll('.copy')].filter(p => p.previousElementSibling?.classList.contains('copy'));
  const indentPrefix = 'M M ';
  indentedParagraphs.forEach(p => p.prepend(document.createTextNode(indentPrefix)));
  const sourceOptions = {...options, mode: 'justified'};
  const controls = [...document.querySelectorAll('.copy,.source-copy')].map(paragraph => {
    const paragraphOptions = paragraph.classList.contains('source-copy') ? sourceOptions : options;
    return {paragraph, options: paragraphOptions, controller: autoTypeset(paragraph, paragraphOptions), zone: options.ragged.zone};
  });
  const controller = {
    refresh: () => Promise.all(controls.map(c => c.controller.refresh())),
    destroy: () => controls.forEach(c => c.controller.destroy()),
  };
  await controller.refresh();
  // A narrow first line can make the bounded ragged composer choose an
  // overfull fallback. Retry that paragraph with a wider allowed ragged zone.
  // The plugin module and its word/glyph limits remain unchanged.
  for (const zone of ['48px', '60px', '72px', '96px']) {
    const failed = controls.filter(c => c.options.mode === 'ragged' && [...c.paragraph.querySelectorAll('[data-auto-typeset-violations]')]
      .some(line => line.title.includes('überschreitet den Satzspiegel')));
    if (!failed.length) break;
    for (const c of failed) {
      c.controller.destroy();
      c.controller = autoTypeset(c.paragraph, {...c.options, ragged: {...c.options.ragged, zone}});
      c.zone = zone;
      await c.controller.refresh();
    }
  }
  if (controls.some(c => [...c.paragraph.querySelectorAll('[data-auto-typeset-violations]')]
    .some(line => line.title.includes('überschreitet den Satzspiegel')))) {
    throw new Error('An overfull plugin line remains after composition retries.');
  }
  // Avoid resize-observer races while creating the immutable print snapshot.
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  for (const paragraph of indentedParagraphs) {
    const source = paragraph.querySelector('.auto-typeset-source');
    const line = paragraph.querySelector('.auto-typeset-line');
    if (!line.textContent.startsWith(indentPrefix)) throw new Error('Indent prefix lost.');
    const style = getComputedStyle(line);
    context.font = `${style.fontSize} ${style.fontFamily}`;
    const advance = context.measureText(indentPrefix).width
      + (indentPrefix.match(/ /g)?.length || 0) * parseFloat(style.wordSpacing || 0)
      + indentPrefix.length * (parseFloat(style.letterSpacing) || 0);
    const scale = style.transform === 'none' ? 1 : new DOMMatrix(style.transform).a;
    const left = parseFloat(style.left) || 0;
    const width = parseFloat(style.width);
    source.firstChild.textContent = source.firstChild.textContent.slice(indentPrefix.length);
    line.textContent = line.textContent.slice(indentPrefix.length);
    line.style.left = `${left + advance * scale}px`;
    line.style.width = `${width - advance}px`;
    line.dataset.paragraphIndent = 'true';
  }
  const bridge = window.compatBridge ?? new URL(location.href).searchParams.get('bridge') === '1';
  if (bridge) document.querySelectorAll('.copy,.source-copy').forEach(restoreNoteLinks);
  // Fixed line boxes do not participate in CSS widows/orphans. Keep adjacent
  // edge lines together with explicit break rules, without changing the boxes.
  if (bridge) for (const render of document.querySelectorAll('.auto-typeset-render')) {
    const lines = [...render.children];
    const keep = lines.length <= 3 ? lines.slice(0, -1) : [lines[0], lines.at(-2)];
    keep.forEach(line => line.dataset.keepWithNext = 'true');
    if (render.parentElement.nextElementSibling?.classList.contains('section-sources')) {
      lines.at(-1).dataset.keepWithNext = 'true';
    }
  }
  document.querySelectorAll('.copy .auto-typeset-line').forEach((line,index) => {
    line.dataset.lineId = `body-line-${String(index + 1).padStart(4,'0')}`;
  });
  const manifest = [...document.querySelectorAll('.copy')].map(p => ({
    id: p.id,
    raggedZone: controls.find(c => c.paragraph === p)?.zone,
    width: p.querySelector('.auto-typeset-render').getBoundingClientRect().width,
    lines: [...p.querySelectorAll('.auto-typeset-render .auto-typeset-line')].map(line => ({
      id: line.dataset.lineId, text: line.textContent, style: line.getAttribute('style'),
      metrics: Object.fromEntries(['fontSize', 'width', 'height', 'lineHeight', 'wordSpacing', 'letterSpacing', 'left', 'transform']
        .map(key => [key, getComputedStyle(line)[key]])),
    })),
  }));
  const sourceManifest = [...document.querySelectorAll('.source-copy')].map(p => ({
    id: p.id, mode: 'justified', text: p.querySelector('.auto-typeset-source').textContent.replace(/\s+/g,' ').trim(),
    lines: [...p.querySelectorAll('.auto-typeset-line')].map(line => ({text:line.textContent, style:line.getAttribute('style')})),
  }));
  // Freeze a completed export: later ResizeObserver work must not overwrite
  // the adapter's links or change line composition while pagination starts.
  const originalMains = [...document.querySelectorAll('main')];
  const composedMains = originalMains.map(main => {
    const clone = main.cloneNode(true);
    clone.querySelectorAll('.auto-typeset-source').forEach(el => el.remove());
    return clone;
  });
  controller.destroy();
  originalMains.forEach((main, index) => main.replaceWith(composedMains[index]));
  document.body.dataset.compatReady = 'true';
  window.compatResult = { bridge, options, headingTrackingPx: headingTracking, elapsedMs: performance.now() - started,
                         fontLoaded: document.fonts.check(fontQuery), manifest, sourceOptions, sourceManifest };
  console.log('COMPAT_PLUGIN_READY', JSON.stringify({bridge, paragraphs: manifest.length,
    lines: manifest.reduce((n, p) => n + p.lines.length, 0)}));
  return window.compatResult;
})();
