import { autoTypeset } from './body-auto-typeset.js';
import { autoTypeset as sourceAutoTypeset } from './source-auto-typeset.js';
import { autoTypeset as bibliographyAutoTypeset } from './bibliography-auto-typeset.js';

console.log('COMPAT_PLUGIN_ENTERED', location.href, document.querySelectorAll('.copy').length);

const options = window.compatOptions ?? {
  mode: 'ragged', language: 'de-1996', opticalMargin: true,
  wordSpacing: [0.9, 1.1], tracking: [-0.01, 0.01], glyphScale: [0.98, 1.02],
  maxHyphens: 3, hyphenMinPrefix: 2, hyphenMinSuffix: 2,
  // Alternate long (99–100%) and short (90–91%) target rows within the
  // column-relative zone, retaining a small variation around each target.
  ragged: { zone: '10%', topVariance: '1%', bottomVariance: '1%' },
};

// Local adapters retain the plugin composer and measure the loaded outlines.
// This bridge restores links its plain-text rendering omits, retaining breaks.
function restoreNoteLinks(paragraph) {
  const source = paragraph.querySelector('.auto-typeset-source');
  const render = paragraph.querySelector('.auto-typeset-render');
  const text = source.textContent.replace(/\s+/g, ' ').trim().replace(/[\u00ad\u200b]/g, '');
  let linkCursor = 0;
  const links = [...source.querySelectorAll('.note-call,.source-number,.ai-documentation-ref,.bibliography-link')].map(link => {
    const marker = link.textContent.replace(/\s+/g, ' ').trim().replace(/\u200b/g, '');
    const start = text.indexOf(marker, linkCursor);
    if (start < 0) throw new Error(`Link/source alignment failed in ${paragraph.id}`);
    linkCursor = start + marker.length;
    return {original: link, start, end: linkCursor};
  });
  let cursor = 0;
  for (const line of render.querySelectorAll('.auto-typeset-line')) {
    // Normalize spacing once the immutable lines exist, for text matching
    // and copying. Link restoration also supports references spanning lines.
    const printed = line.textContent.replace(/\u00a0/g, ' ').replace(/\u200b/g, '');
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
    for (const link of links.filter(l => l.end > cursor && l.start < cursor + consumed)) {
      const position = Math.max(link.start, cursor) - cursor;
      const end = Math.min(link.end, cursor + consumed) - cursor;
      fragment.append(printed.slice(inLine, position));
      const clone = link.original.cloneNode(true);
      // Restore each line's portion of a link; every fragment points to the
      // same documentation range, including references that wrap freely.
      clone.textContent = printed.slice(position, end);
      if (link.start < cursor) clone.removeAttribute('id');
      fragment.append(clone);
      inLine = end;
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

// Different font sizes have different baseline offsets within their line boxes.
// Measure the loaded font so every fourth source baseline meets the body grid.
function baselineOffset(line) {
  const probe = document.createElement('span');
  probe.style.cssText = 'display:inline-block;width:0;height:0;padding:0;margin:0;vertical-align:baseline';
  line.append(probe);
  const offset = probe.getBoundingClientRect().top - line.getBoundingClientRect().top;
  probe.remove();
  return offset;
}

// Measure visible outlines, including the smaller inline source labels.
function verticalInkBounds(element, context) {
  const precision = 64, nodes = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  let node;
  while (node = walker.nextNode()) if (node.textContent.trim()) nodes.push(node);
  const edges = nodes.map(node => {
    const owner = node.parentElement.closest('.note-call,.source-number,.gender-star') ?? element;
    const style = getComputedStyle(owner);
    context.font = `${style.fontStyle} ${style.fontWeight} ${parseFloat(style.fontSize) * precision}px ${style.fontFamily}`;
    const ink = context.measureText(node.textContent);
    const baseline = owner.getBoundingClientRect().top + baselineOffset(owner);
    return {top: baseline - ink.actualBoundingBoxAscent / precision,
      bottom: baseline + ink.actualBoundingBoxDescent / precision};
  });
  if (!edges.length) throw new Error('Missing visible text for separator alignment.');
  return {top: Math.min(...edges.map(edge => edge.top)),
    bottom: Math.max(...edges.map(edge => edge.bottom))};
}

// Mark the ordinary U+002A glyph without changing its native font position
// or measured advance. The inline span shares the surrounding text baseline.
function markGenderStars() {
  const results = [];
  for (const line of document.querySelectorAll('.copy .auto-typeset-line')) {
    const walker = document.createTreeWalker(line, NodeFilter.SHOW_TEXT), nodes = [];
    let node;
    while (node = walker.nextNode()) if (node.textContent.includes('*')) nodes.push(node);
    const style = getComputedStyle(line);
    for (const node of nodes) {
      const fragment = document.createDocumentFragment(), parts = node.textContent.split('*');
      for (const [index, part] of parts.entries()) {
        if (index) {
          const star = document.createElement('span');
          star.className = 'gender-star'; star.textContent = '*';
          fragment.append(star);
          results.push({paragraph:line.closest('.copy').id, glyph:'*',
            alignment:'native_font_baseline', fontSizePx:parseFloat(style.fontSize), shiftPx:0});
        }
        fragment.append(part);
      }
      node.replaceWith(fragment);
    }
  }
  return results;
}

window.compatReady = (async () => {
  const started = performance.now();
  const firstParagraph = document.querySelector('.copy');
  const font = getComputedStyle(firstParagraph);
  const fontQuery = `${font.fontSize} ${font.fontFamily}`;
  await document.fonts.load(fontQuery);
  await document.fonts.load('6pt ArketaCase', '[01]');
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
  const endingPolicy = { extraCharacterAdvances: 3, indentPrefix,
    referenceCharacter: 'M', excludeSourceCalls: true, subchapterMinimumWholeWords: 1 };
  const subchapterHeadings = new Set([...document.querySelectorAll('h2[id]')].map(h => h.id));
  const subchapterEndings = new Map();
  for (const p of document.querySelectorAll('.copy')) {
    if (subchapterHeadings.has(p.dataset.sectionId)) subchapterEndings.set(p.dataset.sectionId, p);
  }
  const subchapterEndingParagraphs = new Set(subchapterEndings.values());
  // Use the normal indent even at section/column openings where it is hidden.
  const minimumClosingBodyWidth = context.measureText(indentPrefix).width
    + context.measureText('M'.repeat(endingPolicy.extraCharacterAdvances)).width;
  indentedParagraphs.forEach(p => p.prepend(document.createTextNode(indentPrefix)));
  // One temporary token per call keeps the bracket label atomic. The body
  // adapter measures its actual small-font width plus optical spacing; labels return below.
  window.compatInlineCalls = {};
  [...document.querySelectorAll('.copy .note-call')].forEach((call, index) => {
    const token = String.fromCodePoint(0xE000 + index + 1);
    const label = call.textContent;
    const bodyStyle = getComputedStyle(call.closest('.copy'));
    const callStyle = getComputedStyle(call), precision = 64;
    const glyph = (text, style) => {
      context.font = `${style.fontStyle} ${style.fontWeight} ${parseFloat(style.fontSize) * precision}px ${style.fontFamily}`;
      const ink = context.measureText(text);
      return {left: -ink.actualBoundingBoxLeft / precision,
        right: (ink.width - ink.actualBoundingBoxRight) / precision};
    };
    const previous = call.previousSibling?.textContent.at(-1);
    if (!previous || /\s/u.test(previous)) throw new Error(`Missing adjacent word before ${call.id}`);
    // Equal visible gaps on both sides: use ] plus the body period as the
    // reference, and compensate the preceding letter's and ['s sidebearings.
    const targetGap = glyph(']', callStyle).right + glyph('.', bodyStyle).left;
    const naturalGap = glyph(previous, bodyStyle).right + glyph('[', callStyle).left;
    const spacingPx = targetGap - naturalGap;
    call.style.setProperty('--note-leading-space', `${spacingPx}px`);
    window.compatInlineCalls[token] = {label, fontSizePx: parseFloat(callStyle.fontSize), spacingPx,
      font: `${callStyle.fontStyle} ${callStyle.fontWeight} ${callStyle.fontSize} ${callStyle.fontFamily}`};
    call.dataset.noteLabel = label;
    call.textContent = token;
  });
  const sourceOptions = {...options, mode: 'ragged', hyphenate: false};
  const aiOptions = {...sourceOptions};
  // A -15/1000 em base retains the ±10 tracking variation and lets the
  // complete bibliography fit one page. Paragraph endings remain natural.
  const bibliographyOptions = {...options, mode: 'ragged', language: 'en-us',
    tracking: options.tracking.map(value => value - 0.015)};
  await document.fonts.load('6pt Arketa');
  const controls = [...document.querySelectorAll('.copy,.source-copy,.ai-copy,.bibliography-entry')].map(paragraph => {
    const isSource = paragraph.matches('.source-copy,.ai-copy,.bibliography-entry');
    const profileOptions = paragraph.matches('.bibliography-entry') ? bibliographyOptions
      : paragraph.matches('.ai-copy') ? aiOptions : isSource ? sourceOptions : options;
    // The plugin measures CSS lengths with an absolutely positioned probe;
    // percentages would therefore resolve against the viewport here. Resolve
    // them explicitly against the same column width each adapter composes.
    const columnWidth = paragraph.getBoundingClientRect().width;
    const baseTracking = Number(paragraph.dataset.baseTrackingEm || 0);
    const paragraphOptions = {...profileOptions,
      minimumClosingBodyWidth: isSource ? 0 : minimumClosingBodyWidth,
      minimumClosingWholeWords: subchapterEndingParagraphs.has(paragraph) ? endingPolicy.subchapterMinimumWholeWords : 0,
      tracking: profileOptions.tracking.map(value => value + baseTracking),
      ragged: Object.fromEntries(
      Object.entries(profileOptions.ragged).map(([key, value]) => [key,
        typeof value === 'string' && value.trim().endsWith('%')
          ? `${parseFloat(value) / 100 * columnWidth}px` : value]))};
    const compose = paragraph.matches('.bibliography-entry') ? bibliographyAutoTypeset : isSource ? sourceAutoTypeset : autoTypeset;
    return {paragraph, options: paragraphOptions, compose, controller: compose(paragraph, paragraphOptions), zone: paragraphOptions.ragged.zone};
  });
  const controller = {
    refresh: () => Promise.all(controls.map(c => c.controller.refresh())),
    destroy: () => controls.forEach(c => c.controller.destroy()),
  };
  await controller.refresh();
  // Count visible line-ending hyphens too: the core does not include a
  // literal compound hyphen (e.g. "Datenschutz-") in its hyphenation streak.
  const exceedsHyphenLimit = c => {
    if (c.options.hyphenate === false) return false;
    let streak = 0;
    return [...c.paragraph.querySelectorAll('.auto-typeset-line')].some(line => {
      streak = line.textContent.trimEnd().endsWith('-') ? streak + 1 : 0;
      return streak > c.options.maxHyphens;
    });
  };
  const endingWidth = c => {
    const line = c.paragraph.querySelector('.auto-typeset-line:last-child');
    const style = getComputedStyle(line);
    context.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    const body = line.textContent.replace(/[\uE000-\uE0FF]/gu, '');
    return context.measureText(body).width;
  };
  const shortEnding = c => c.paragraph.matches('.copy')
    && endingWidth(c) < c.options.minimumClosingBodyWidth - .05;
  // Compare the final row to its unsplit paragraph suffix. A word that begins
  // before this row is a fragment, including literal compound hyphens.
  const closingWholeWords = c => {
    const source = c.paragraph.querySelector('.auto-typeset-source').textContent
      .replace(/[\u00ad\u200b\uE000-\uE0FF]/gu, '').replace(/\s+/gu, ' ').trim();
    const last = c.paragraph.querySelector('.auto-typeset-line:last-child').textContent
      .replace(/[\uE000-\uE0FF]/gu, '').trim();
    const start = source.length - last.length;
    if (!source.endsWith(last)) throw new Error('Closing row/source alignment failed: ' + c.paragraph.id);
    return [...source.matchAll(/\p{L}[\p{L}\p{M}\p{N}]*(?:[-*’'][\p{L}\p{M}\p{N}]+)*/gu)]
      .filter(word => word.index >= start).map(word => word[0]);
  };
  const incompleteSubchapterEnding = c => c.options.minimumClosingWholeWords > 0
    && closingWholeWords(c).length < c.options.minimumClosingWholeWords;
  // A narrow first line can make the bounded ragged composer choose an
  // overfull fallback or exceed its hyphen limit. Retry only the affected
  // paragraph with a slightly wider ragged zone, preserving spacing limits.
  // The plugin module and its word/glyph limits remain unchanged.
  for (const zone of ['36px', '40px', '44px', '48px', '60px', '72px', '96px', '120px', '144px', '180px']) {
    // A complete page/line label can be wider than the normal ragged zone.
    // Permit shorter notice rows instead of breaking that label or overflowing.
    const failed = controls.filter(c => (parseFloat(zone) <= 96 || c.paragraph.matches('.ai-copy')) && c.options.mode === 'ragged'
      && (exceedsHyphenLimit(c) || shortEnding(c) || incompleteSubchapterEnding(c) || [...c.paragraph.querySelectorAll('[data-auto-typeset-violations]')]
        .some(line => line.title.includes('überschreitet den Satzspiegel'))));
    if (!failed.length) break;
    for (const c of failed) {
      c.controller.destroy();
      c.controller = c.compose(c.paragraph, {...c.options, ragged: {...c.options.ragged, zone}});
      c.zone = zone;
      await c.controller.refresh();
    }
  }
  if (controls.some(shortEnding)) {
    throw new Error('A paragraph ending is shorter than its normal indent plus three characters: '
      + controls.filter(shortEnding).map(c => c.paragraph.id).join(', '));
  }
  if (controls.some(incompleteSubchapterEnding)) {
    throw new Error('A subchapter closing row has no complete word: '
      + controls.filter(incompleteSubchapterEnding).map(c => c.paragraph.id).join(', '));
  }
  if (controls.some(exceedsHyphenLimit)) {
    throw new Error('Consecutive line-ending hyphens exceed the configured limit: '
      + controls.filter(exceedsHyphenLimit).map(c => c.paragraph.id).join(', '));
  }
  if (controls.some(c => [...c.paragraph.querySelectorAll('[data-auto-typeset-violations]')]
    .some(line => line.title.includes('überschreitet den Satzspiegel')))) {
    const failedLines = controls.flatMap(c => [...c.paragraph.querySelectorAll('[data-auto-typeset-violations]')]
      .filter(line => line.title.includes('überschreitet den Satzspiegel'))
      .map(line => ({id:c.paragraph.id, zone:c.zone, text:line.textContent, title:line.title})));
    throw new Error('An overfull plugin line remains after composition retries: ' + JSON.stringify(failedLines));
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
    // At a later column opening, align the actual initial glyph rather than
    // the temporary M used to reserve the indent during composition.
    const precision = 64;
    context.font = `${parseFloat(style.fontSize) * precision}px ${style.fontFamily}`;
    const firstInk = context.measureText(line.textContent[0]), referenceInk = context.measureText('H');
    const openingLeft = (firstInk.actualBoundingBoxLeft - referenceInk.actualBoundingBoxLeft) / precision * scale;
    // Preserve the unindented frame for paragraphs that pagination places
    // at a column start. The fixed plugin line content stays unchanged.
    line.dataset.indentBaseLeftPx = openingLeft;
    line.dataset.indentBaseWidthPx = width;
    line.dataset.indentAppliedLeftPx = left + advance * scale;
    line.dataset.indentAppliedWidthPx = width - advance;
    line.style.left = `${left + advance * scale}px`;
    line.style.width = `${width - advance}px`;
    line.dataset.paragraphIndent = 'true';
  }
  const bridge = window.compatBridge ?? new URL(location.href).searchParams.get('bridge') === '1';
  if (bridge) document.querySelectorAll('.copy,.source-copy,.ai-copy,.bibliography-entry').forEach(restoreNoteLinks);
  document.querySelectorAll('.copy .note-call').forEach(call => {
    call.textContent = call.dataset.noteLabel;
  });
  const genderStars = markGenderStars();
  for (const call of document.querySelectorAll('.copy .auto-typeset-line .note-call')) {
    const line = call.closest('.auto-typeset-line');
    // Body tracking also shifts the gap before the small, untracked call.
    // Compensate it after the composer has selected this row's tracking.
    const trackingPx = parseFloat(getComputedStyle(line).letterSpacing) || 0;
    const spacingPx = parseFloat(call.style.getPropertyValue('--note-leading-space')) || 0;
    call.style.setProperty('--note-leading-space', `${spacingPx - trackingPx}px`);
    const style = getComputedStyle(call);
    const fontSize = parseFloat(style.fontSize), precision = 64;
    context.font = `${style.fontStyle} ${style.fontWeight} ${fontSize * precision}px ${style.fontFamily}`;
    const ink = context.measureText(call.textContent);
    const rect = call.getBoundingClientRect(), row = line.getBoundingClientRect();
    const center = rect.top + baselineOffset(call)
      + (ink.actualBoundingBoxDescent - ink.actualBoundingBoxAscent) / (2 * precision);
    call.style.setProperty('--note-center-shift', `${row.top + row.height / 2 - center}px`);
  }
  const bodyBaselineOffset = baselineOffset(document.querySelector('.copy .auto-typeset-line'));
  const bodyLeadingPx = parseFloat(getComputedStyle(document.querySelector('.copy .auto-typeset-line')).height);
  for (const paragraph of document.querySelectorAll('.source-copy,.ai-copy')) {
    const lines = [...paragraph.querySelectorAll('.auto-typeset-line')];
    const shift = bodyBaselineOffset - baselineOffset(lines[0]);
    paragraph.style.setProperty('--source-baseline-shift', `${shift}px`);
    // Always expand the gap after sources to the next body row. The six-row
    // minimum is never shortened, including blocks with one to three spare rows.
    if (paragraph.classList.contains('ai-copy')) {
      // AI and sources share their small leading without an extra body-grid pad.
      paragraph.dataset.gridExtraRows = 0;
    } else {
      const group = paragraph.closest('.section-sources');
      const aiRows = group.querySelectorAll('.ai-copy .auto-typeset-line').length;
      const leadingPx = parseFloat(getComputedStyle(lines[0]).height);
      const sequenceRows = lines.length + aiRows + (aiRows ? 1 : 0);
      const remainderRows = (1 - (sequenceRows * leadingPx / bodyLeadingPx) % 1) % 1;
      const extra = `calc(var(--baseline) * ${remainderRows})`;
      group.style.setProperty('--source-gap-extra', extra);
      group.dataset.gridExtraRows = remainderRows;
    }
  }
  // Centre the visible stars between their text neighbours, preserving the
  // row boxes before the notes. AI and sources are separated by one small row.
  const sourceSeparatorAlignment = [...document.querySelectorAll('.source-stars')].map(stars => {
    const group = stars.closest('.section-sources');
    const internal = stars.classList.contains('ai-source-stars');
    const body = internal ? group.querySelector('.ai-copy .auto-typeset-line:last-child')
      : group.previousElementSibling?.querySelector('.auto-typeset-line:last-child');
    const firstNote = internal ? group.querySelector('.source-copy .auto-typeset-line')
      : group.querySelector('.ai-copy .auto-typeset-line,.source-copy .auto-typeset-line');
    if (!body || !firstNote || !stars) throw new Error('Missing source separator neighbours.');
    const above = verticalInkBounds(body, context), below = verticalInkBounds(firstNote, context);
    const ink = verticalInkBounds(stars, context);
    const shiftPx = (above.bottom + below.top - ink.top - ink.bottom) / 2;
    stars.style.setProperty('--source-star-shift', `${shiftPx}px`);
    return {sectionId: group.dataset.section, kind: internal ? 'ai_to_sources' : 'body_to_notes',
      alignment: 'equal_visible_ink_gaps', shiftPx,
      gapPx: (below.top - above.bottom - ink.bottom + ink.top) / 2};
  });
  // Keep paragraph openings together, but allow a single closing line after
  // a column/page break so widow prevention does not leave a body row empty.
  // Annotation lines may break individually across columns and pages.
  if (bridge) for (const render of document.querySelectorAll('.copy .auto-typeset-render')) {
    const lines = [...render.children];
    if (lines.length > 1) lines[0].dataset.keepWithNext = 'true';
  }
  for (const paragraph of document.querySelectorAll('.source-copy,.ai-copy')) {
    [...paragraph.querySelectorAll('.auto-typeset-line')].forEach((line, index) => {
      line.dataset.noteLine = `${paragraph.dataset.noteBlock}-row-${index + 1}`;
    });
  }
  document.querySelectorAll('.copy .auto-typeset-line').forEach((line,index) => {
    line.dataset.lineId = `body-line-${String(index + 1).padStart(4,'0')}`;
  });
  const manifest = [...document.querySelectorAll('.copy')].map(p => ({
    id: p.id,
    sectionId: p.dataset.sectionId,
    subchapterEnding: subchapterEndingParagraphs.has(p),
    baseTrackingEm: Number(p.dataset.baseTrackingEm || 0),
    trackingRangeEm: controls.find(c => c.paragraph === p)?.options.tracking,
    raggedZone: controls.find(c => c.paragraph === p)?.zone,
    minimumClosingBodyWidthPx: controls.find(c => c.paragraph === p)?.options.minimumClosingBodyWidth,
    minimumClosingWholeWords: controls.find(c => c.paragraph === p)?.options.minimumClosingWholeWords,
    width: p.querySelector('.auto-typeset-render').getBoundingClientRect().width,
    lines: [...p.querySelectorAll('.auto-typeset-render .auto-typeset-line')].map(line => ({
      id: line.dataset.lineId, text: line.textContent, style: line.getAttribute('style'),
      metrics: Object.fromEntries(['fontSize', 'width', 'height', 'lineHeight', 'wordSpacing', 'letterSpacing', 'left', 'transform']
        .map(key => [key, getComputedStyle(line)[key]])),
    })),
  }));
  const sourceManifest = [...document.querySelectorAll('.source-copy')].map(p => ({
    id: p.id, mode: sourceOptions.mode, hyphenate: sourceOptions.hyphenate,
    raggedZone: controls.find(c => c.paragraph === p)?.zone,
    opticalMargin: 'font_contours_relative_to_H', text: p.querySelector('.auto-typeset-source').textContent.replace(/\s+/g,' ').trim(),
    lines: [...p.querySelectorAll('.auto-typeset-line')].map(line => ({text:line.textContent, style:line.getAttribute('style')})),
  }));
  const aiManifest = [...document.querySelectorAll('.ai-copy')].map(p => ({
    id: p.id, mode: aiOptions.mode, hyphenate: aiOptions.hyphenate,
    raggedZone: controls.find(c => c.paragraph === p)?.zone,
    text: p.querySelector('.auto-typeset-source').textContent.replace(/\s+/g,' ').trim(),
    lines: [...p.querySelectorAll('.auto-typeset-line')].map(line => ({text:line.textContent, style:line.getAttribute('style')})),
  }));
  const bibliographyManifest = [...document.querySelectorAll('.bibliography-entry')].map(p => ({
    id: p.id, key: p.dataset.bibKey, mode: bibliographyOptions.mode,
    text: p.querySelector('.auto-typeset-source').textContent.replace(/\u200b/g, '').replace(/\s+/g, ' ').trim(),
    lines: [...p.querySelectorAll('.auto-typeset-line')].map(line => ({text:line.textContent, style:line.getAttribute('style')})),
  }));
  // Freeze a completed export: later ResizeObserver work must not overwrite
  // the adapter's links or change line composition while pagination starts.
  // The core deliberately leaves closing rows at natural tracking/scale.
  // Zero tracking is valid there even when a paragraph's ordinary tracking
  // range is negative; retain every other diagnostic. Do this
  // after pending observer work, immediately before cloning the final DOM.
  for (const line of document.querySelectorAll('.copy .auto-typeset-line:last-child,.bibliography-entry .auto-typeset-line:last-child')) {
    const style = getComputedStyle(line);
    if ((parseFloat(style.letterSpacing) || 0) !== 0 || new DOMMatrix(style.transform).a !== 1) continue;
    const messages = line.title.split('\n').filter(message => message && !message.startsWith('Laufweite 0/1000 em'));
    if (messages.length) line.title = messages.join('\n');
    else { line.removeAttribute('title'); line.removeAttribute('data-auto-typeset-violations'); }
  }
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
                         endingPolicy, minimumClosingBodyWidthPx: minimumClosingBodyWidth,
                         fontLoaded: document.fonts.check(fontQuery), manifest, sourceOptions, sourceManifest, aiOptions, aiManifest,
                         bibliographyOptions, bibliographyManifest, sourceSeparatorAlignment, genderStars };
  console.log('COMPAT_PLUGIN_READY', JSON.stringify({bridge, paragraphs: manifest.length,
    lines: manifest.reduce((n, p) => n + p.lines.length, 0)}));
  return window.compatResult;
})();
