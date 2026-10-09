"""Measure body outlines, fractional frames and small atomic inline calls."""
from hashlib import sha256
from source_plugin_adapter import ORIGINAL_SHA256, MEASURER as OPTICAL_MEASURER

MEASURER = r'''
function inlineCallWidth(text) {
 const context = gt();
 const calls = window.compatInlineCalls;
 if (!calls || !/[\uE000-\uE0FF]/u.test(text)) return context.measureText(text).width;
 const small = document.createElement("canvas").getContext("2d");
 let width = 0;
 for (const part of text.split(/([\uE000-\uE0FF])/u)) {
  const call = calls[part];
  if (call) {
   small.font = call.font || context.font.replace(/\d+(?:\.\d+)?px/, `${call.fontSizePx}px`);
   width += small.measureText(call.label).width + (call.spacingPx || 0);
  } else width += context.measureText(part).width;
 }
 return width;
}
function bodyClosingWholeWords(text, startsInsideWord) {
 const body = text.replace(/[\uE000-\uE0FF]/gu, "");
 const words = body.match(/\p{L}[\p{L}\p{M}\p{N}]*(?:[-*’'][\p{L}\p{M}\p{N}]+)*/gu) || [];
 return Math.max(0, words.length - (startsInsideWord ? 1 : 0));
}
function bodyClosingAdjustment(stats, frameWidth, text, policy, startsInsideWord) {
 // Small source labels do not turn a lone syllable into a long body ending.
 const body = text.replace(/[\uE000-\uE0FF]/gu, "");
 if (policy.minimumClosingBodyWidth > 0 && gt().measureText(body).width < policy.minimumClosingBodyWidth - .05) return null;
 if (policy.minimumClosingWholeWords > 0 && bodyClosingWholeWords(body, startsInsideWord) < policy.minimumClosingWholeWords) return null;
 return Lr(stats, frameWidth);
}
'''


def adapt_inline_calls(original):
    if sha256(original).hexdigest() != ORIGINAL_SHA256:
        raise ValueError('Original plugin changed; review the inline-call adapter first.')
    source = original.decode('utf-8')
    needle = 'width: gt().measureText(e).width,'
    if source.count(needle) != 1:
        raise ValueError('Unexpected plugin text measurement.')
    source = source.replace(needle, 'width: inlineCallWidth(e),')
    # The stock punctuation percentages let Arketa's commas and hyphens
    # extend into the gutter. Use the same measured outlines as annotations,
    # scaled to the current body size, so visible ink stays in its column.
    start = source.index('function Yr(e, t, n) {')
    end = source.index('function Xr(e, t, n) {', start)
    source = source[:start] + OPTICAL_MEASURER + source[end:]
    needle = 'width: r.clientWidth,'
    if source.count(needle) != 1:
        raise ValueError('Unexpected plugin body frame measurement.')
    source = source.replace(needle, 'width: r.getBoundingClientRect().width,')
    replacements = {
        'maximumConsecutiveHyphens: i,':
            'minimumClosingBodyWidth: Math.max(0, Number(e.minimumClosingBodyWidth) || 0),\n\t\tminimumClosingWholeWords: Math.max(0, Number(e.minimumClosingWholeWords) || 0),\n\t\tmaximumConsecutiveHyphens: i,',
        'maxHyphens: t.maxHyphens,':
            'minimumClosingBodyWidth: t.minimumClosingBodyWidth,\n\t\t\t\tminimumClosingWholeWords: t.minimumClosingWholeWords,\n\t\t\t\tmaxHyphens: t.maxHyphens,',
        'm ? Lr(g, t) : jr(g, t, n, o)':
            'm ? bodyClosingAdjustment(g, t, Rr(e, s[h], s[l]), o, s[h].kind === "soft-hyphen") : jr(g, t, n, o)',
        'let v = c[g].kind === "end";':
            'let v = c[g].kind === "end", closingBodyText = v ? Rr(e, c[u], c[g]) : "";',
        'v ? Lr(_, t) : Nr(_, t, n, r, a, u, s)':
            'v ? bodyClosingAdjustment(_, t, closingBodyText, s, c[u].kind === "soft-hyphen") : Nr(_, t, n, r, a, u, s)',
        'g === d ? Lr(_, r) : Nr(_, r, i, p, s, f, l)':
            'g === d ? bodyClosingAdjustment(_, r, Rr(e, t[f], t[g]), l, t[f].kind === "soft-hyphen") : Nr(_, r, i, p, s, f, l)',
        'v ? Lr(_, t) : jr(_, t, n, s)':
            'v ? bodyClosingAdjustment(_, t, g, s, u > 0 && l[u - 1] === q) : jr(_, t, n, s)',
    }
    for needle, replacement in replacements.items():
        if source.count(needle) != 1:
            raise ValueError('Unexpected plugin closing-line constraint: ' + needle)
        source = source.replace(needle, replacement)
    return source.replace('function L(e, t) {', MEASURER + '\nfunction L(e, t) {', 1)
