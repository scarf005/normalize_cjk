/**
 * Replace all half-width kana with full-width form
 *
 * Credits to [Yusuke Nemoto](https://github.com/kaakaa) for [implementation](https://twitter.com/kaakaa_hoe_prog/status/1415149003293954060)
 */
const re = /[\uff60-\uff9f]+/g

/**
 * Normalize Japanese characters (Katakana)
 *
 * Hiragana doesn't seem to need normalization. But it can be added eventually.
 *
 * [Original implementation](https://github.com/daangn/normalize-cjk/blob/b400d302c67d16684dc599a39acf8d92b31512af/src/japanese.ts)
 *
 * @example
 * ```ts
 * import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts"
 * import { normalizeKatakana } from "https://deno.land/x/normalize_cjk@$MODULE_VERSION/japanese.ts"
 *
 * assertEquals(normalizeKatakana("ﾆｯﾎﾟﾝ"), "ニッポン")
 * ```
 */
export const normalizeKatakana = (x: string): string =>
	x.replace(re, (y) => y.normalize("NFKC"))
