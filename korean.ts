/**
 * displayed as /\[ᄀ-ᇿ㄰-㆏㈀-㈞㉠-㉿ﾠ-ￜ￦\]+/g
 *
 * Credits to [@Pusnow](https://github.com/Pusnow)
 * for providing an useful [explanation](https://gist.github.com/Pusnow/aa865fa21f9557fa58d691a8b79f8a6d)
 *
 * Range to normalize
 * - Hangul Jamo: 1100 ~ 11FF
 * - Hangul Compatibility Jamo: 3130 ~ 318F
 * - Enclosed CJK Letters and Months - Hangul: 3200 ~ 321E, 3260 ~ 327F
 * - Halfwidth and Fullwidth Forms - Halfwidth Hangul variants: FFA0 ~ FFDC
 * - Halfwidth and Fullwidth Forms - FULLWIDTH WON SIGN: FFE6
 */
const re =
	/[\u1100-\u11ff\u3130-\u318f\u3200-\u321e\u3260-\u327f\uffa0-\uffdc\uffe6]+/g

/**
 * Normalizes Hangul (Hangeul, Korean alphabet) characters to [NFKC(Normalization Form Compatibility Composition)][NFKC].
 *
 * [NFKC]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize#nfkc
 *
 * [Original implementation](https://github.com/daangn/normalize-cjk/blob/b400d302c67d16684dc599a39acf8d92b31512af/src/korean.ts)
 *
 * @example
 * ```ts
 * import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts"
 * import { normalizeHangul } from "https://deno.land/x/normalize_cjk@$MODULE_VERSION/korean.ts"
 *
 * assertEquals(normalizeHangul("㈜목도리"), "(주)목도리")
 * ```
 */
export const normalizeHangul = (x: string): string =>
	x.replace(re, (y) => y.normalize("NFKC"))
