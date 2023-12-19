import { normalizeChinese as c } from "./chinese.ts"
import { normalizeKatakana as j } from "./japanese.ts"
import { normalizeHangul as k } from "./korean.ts"

/**
 * normalizes all CJK characters, in order of Korean, Japanese, Chinese.
 *
 * @example
 * ```ts
 * import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts"
 * import { normalizeCJK } from "https://deno.land/x/normalize_cjk@$MODULE_VERSION/cjk.ts"
 *
 * const provided = "⾣〸ム㦳䎛内呑尙岀敻爲耈蔿説飮,ﾆｯﾎﾟﾝ,㈜목도리"
 * const expected = "酉十厶㘽㖈內吞尚出夐為耇蒍說飲,ニッポン,(주)목도리"
 *
 * assertEquals(normalizeCJK(provided), expected)
 * ```
 */
export const normalizeCJK = (x: string): string => c(j(k(x)))
