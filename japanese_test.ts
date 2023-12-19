import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts"
import { normalizeKatakana } from "https://deno.land/x/normalize_cjk@$MODULE_VERSION/japanese.ts"

Deno.test("normalizeKatakana() normalizes katakana", () =>
	assertEquals(normalizeKatakana("ﾆｯﾎﾟﾝ"), "ニッポン"))
