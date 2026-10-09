"""Build a source-only, font-metric variant of the unchanged plugin bundle."""
from hashlib import sha256

ORIGINAL_SHA256 = '39afa960ba2c1d0cedde9295650845fdf2820cbc0d822543217b7fa62ec832c0'

MEASURER = r'''function Yr(font, fontSize, enabled) {
 const context = document.createElement("canvas").getContext("2d");
 const contours = document.createElement("canvas").getContext("2d");
 if (!context || !contours) throw Error("A 2D canvas context is required for typesetting.");
 context.font = font;
 // Small-size Canvas ink bounds are rounded to pixels. Measure larger outlines
 // and normalize them to the actual source size for subpixel edge correction.
 const precision = 64;
 contours.font = font.replace(/\d+(?:\.\d+)?px/, `${fontSize * precision}px`);
 const reference = contours.measureText("H");
 const referenceBearings = {
  left: -reference.actualBoundingBoxLeft / precision,
  right: (reference.width - reference.actualBoundingBoxRight) / precision,
 };
 const cache = new Map();
 return {
  spaceWidth: context.measureText(" ").width,
  hyphenWidth: context.measureText("-").width,
  opticalMargin: { measure: (character, side) => {
   if (!enabled) return 0;
   const key = `${side}:${character}`;
   if (cache.has(key)) return cache.get(key);
   const metric = contours.measureText(character);
   const bearing = side === "left"
    ? -metric.actualBoundingBoxLeft / precision
    : (metric.width - metric.actualBoundingBoxRight) / precision;
   // Retain H's normal inset, correcting every letter and punctuation mark.
   // Negative corrections keep wide outlines inside the same visible edge.
   const amount = Number.isFinite(bearing) && Number.isFinite(referenceBearings[side])
    ? bearing - referenceBearings[side] : 0;
   cache.set(key, amount);
   return amount;
  } }
 };
}
'''


def adapt_plugin(original):
    if sha256(original).hexdigest() != ORIGINAL_SHA256:
        raise ValueError('Original plugin changed; review the source adapter first.')
    source = original.decode('utf-8')
    start = source.index('function Yr(e, t, n) {')
    end = source.index('function Xr(e, t, n) {', start)
    source = source[:start] + MEASURER + source[end:]
    # The composer must use the actual 83.5 mm width, including its fraction of
    # a CSS pixel. clientWidth rounds it before the line adjustment is solved.
    needle = 'width: r.clientWidth,'
    if source.count(needle) != 1:
        raise ValueError('Unexpected plugin frame measurement.')
    source = source.replace(needle, 'width: r.getBoundingClientRect().width,')
    # The core already treats NBSP as nonbreaking glue. Its public wrapper
    # collapses those spaces before tokenization, so preserve them here.
    needle = 'return e.replace(/\\s+/g, " ").trim();'
    if source.count(needle) != 1:
        raise ValueError('Unexpected plugin whitespace normalization.')
    source = source.replace(needle, r'return e.replace(/[ \t\n\r\f]+/g, " ").trim();')
    # Expose the core's existing hyphenation switch for the AI notices. Other
    # paragraphs retain the original default unless they explicitly opt out.
    needle = 'hyphenate: !0,'
    if source.count(needle) != 1:
        raise ValueError('Unexpected plugin public hyphenation option.')
    source = source.replace(needle, 'hyphenate: t.hyphenate ?? !0,')
    # Hyphenation can insert a break inside "Seite" or "Zeilen" even when
    # their spaces are glued. Remove discretionary breaks from glued units;
    # all ordinary prose keeps the original German hyphenation.
    needle = 'function xr(e, t, n) {\n\treturn e.replace'
    if source.count(needle) != 1:
        raise ValueError('Unexpected plugin hyphenation filtering.')
    replacement = r'''function xr(e, t, n) {
    e = e.split(/([ \t\n\r\f]+)/u).map(part =>
      part.includes("\xA0") ? part.replace(/\u00ad/g, "") : part).join("");
    return e.replace'''
    return source.replace(needle, replacement)
