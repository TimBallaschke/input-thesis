import { CoreViewer } from './vivliostyle-core.js';

const viewport = document.getElementById('viewport');
const pageStack = document.getElementById('pages');
const viewer = new CoreViewer({ viewportElement: viewport, userAgentRootURL: `${location.origin}/viewer/` },
  { autoResize: false, renderAllPages: true, allowScripts: false, fitToScreen: false, zoom: 1, pixelRatio: 8 });
// Cloned margin text has slightly different inline box metrics in the preview.
// Keep the displayed footer at the same physical edge as the export engine.
function alignPageNumbers() {
  for (const page of pageStack.querySelectorAll('[data-vivliostyle-page-container]')) {
    const footer = page.querySelector('[data-vivliostyle-page-counter]');
    if (!footer) continue;
    const sheet = page.getBoundingClientRect(), rect = footer.getBoundingClientRect();
    const zoom = sheet.width / (210 * 96 / 25.4);
    const delta = (sheet.top + sheet.height * 289 / 297 - rect.bottom) / zoom;
    footer.style.position = 'relative';
    footer.style.top = `${(parseFloat(footer.style.top) || 0) + delta}px`;
  }
}
function scalePages() {
  const pages = viewer.getPageSizes();
  if (!pages.length) return;
  const width = Math.max(...pages.map(p => p.width));
  const factor = Math.min(1, Math.max(.2, (innerWidth - 60) / width));
  pageStack.style.width = `${width}px`;
  pageStack.style.zoom = String(factor);
  alignPageNumbers();
}
viewer.addListener('readystatechange', () => {
  if (viewer.readyState !== 'complete') return;
  // Keep the engine's paged navigation intact while showing a continuous copy.
  // These clones are for display only; export uses the immutable source HTML.
  pageStack.replaceChildren(...[...viewport.querySelectorAll('[data-vivliostyle-page-container]')].map(page => page.cloneNode(true)));
  // Vivliostyle may expand fragment links to the cache-busted source URL.
  // The displayed page copies still navigate within this preview stack.
  for (const link of pageStack.querySelectorAll('a[href]')) {
    const target = new URL(link.getAttribute('href'), location.href);
    if (target.origin === location.origin && target.pathname === '/frozen.html' && target.hash) {
      link.setAttribute('href', target.hash);
    }
  }
  for (const name of ['--viv-outputPixelRatio','--viv-devicePixelRatio','--viv-layoutUnitAdj','--viv-outputScale']) {
    pageStack.style.setProperty(name, getComputedStyle(viewport).getPropertyValue(name));
  }
  scalePages();
  document.fonts.ready.then(alignPageNumbers);
});
viewer.addListener('error', event => {
  const message = String(event.content?.error || event.content?.messages?.join('\n') || 'Die Seiteneinteilung ist fehlgeschlagen.');
  pageStack.textContent = message;
});
addEventListener('resize', scalePages);
pageStack.addEventListener('click', event => {
  const link = event.target.closest('a[href]');
  if (!link) return;
  const href = link.getAttribute('href');
  if (!href.startsWith('#')) {link.target = '_blank';link.rel = 'noopener';return;}
  const id = decodeURIComponent(href.slice(1));
  const target = [...pageStack.querySelectorAll('[id]')].find(el => el.id === id);
  if (!target) return;
  event.preventDefault();
  const focus = target.closest('.print-note,.note-call,.csl-entry') || target;
  focus.scrollIntoView({behavior:'smooth',block:'center'});
  focus.classList.add('link-focus');
  setTimeout(() => focus.classList.remove('link-focus'),1800);
});
window.previewViewer = viewer;
// Each composition replaces frozen.html in place. A fresh URL also refreshes
// embedded-browser caches when the user reloads the preview after a new run.
viewer.loadDocument(`${location.origin}/frozen.html?revision=${Date.now()}`);
