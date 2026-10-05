"""Font-metric optical-margin adaptation of Tim's unchanged plugin bundle."""
from hashlib import sha256

ORIGINAL_SHA256 = '39afa960ba2c1d0cedde9295650845fdf2820cbc0d822543217b7fa62ec832c0'

MEASURER = r'''function Yr(e, t, n) {
 let r = document.createElement("canvas").getContext("2d");
 if (!r) throw Error("A 2D canvas context is required for typesetting.");
 r.font = e;
 let opticalStrength = 2;
 let cache = new Map(), reference = r.measureText("H");
 // Align the visible letter edge to H's upright stem, retaining its normal inset.
 let referenceLeft = -reference.actualBoundingBoxLeft;
 let referenceRight = reference.width - reference.actualBoundingBoxRight;
 return {
  spaceWidth: r.measureText(" ").width,
  hyphenWidth: r.measureText("-").width,
  opticalMargin: { measure: (character, side) => {
   if (!n) return 0;
   let key = side + ":" + character;
   if (cache.has(key)) return cache.get(key);
   let metric = r.measureText(character);
   let left = metric.actualBoundingBoxLeft, right = metric.actualBoundingBoxRight;
   if (!Number.isFinite(left) || !Number.isFinite(right)) return 0;
   let ink = Math.max(0, left + right);
   let bearing = side === "left" ? -left : metric.width - right;
   let referenceBearing = side === "left" ? referenceLeft : referenceRight;
   let fraction = side === "left" ? (pr[character] ?? 0) : 0;
   // Double punctuation and dash corrections on both edges; retain letter alignment.
   // The base limits are scaled too, so the stronger setting is not clipped.
   // Negative values retain wide glyphs within the shared optical text edge.
   let strength = /\p{P}/u.test(character) ? opticalStrength : 1;
   let amount = strength * Math.max(-t * .15, Math.min(t * .5, bearing - referenceBearing + ink * fraction));
   cache.set(key, amount);
   return amount;
  } }
 };
}
'''

def adapt_plugin(original):
    assert sha256(original).hexdigest() == ORIGINAL_SHA256, 'Original plugin changed'
    source = original.decode('utf-8')
    start = source.index('function Yr(e, t, n) {')
    end = source.index('function Xr(e, t, n) {', start)
    return source[:start] + MEASURER + source[end:]
