import { conversionMap } from "./chinese_map.ts"

/**
 * Normalize chinese characters according to [ctext.org][ctext].
 *
 * [ctext]: <https://ctext.org/faq/normalization>
 * [Original implementation](https://github.com/daangn/normalize-cjk/blob/b400d302c67d16684dc599a39acf8d92b31512af/src/chinese.ts)
 *
 * @example
 * ```
 * import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts"
 * import { normalizeChinese } from "https://deno.land/x/normalize_cjk@$MODULE_VERSION/chinese.ts"
 *
 * const provided = "⾣〸ム㦳䎛内呑尙岀敻爲耈蔿説飮"
 * const expected = "酉十厶㘽㖈內吞尚出夐為耇蒍說飲"
 *
 * assertEquals(normalizeChinese(provided), expected)
 * ```
 */
export const normalizeChinese = (x: string): string =>
	x.split("").reduce(apply, "")

const apply = (acc: string, ch: string): string =>
	acc + (conversionMap.get(ch) ?? ch)
