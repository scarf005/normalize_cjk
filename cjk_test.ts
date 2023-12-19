import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts"
import { normalizeCJK } from "https://deno.land/x/normalize_cjk@$MODULE_VERSION/cjk.ts"

const provided = "⾣〸ム㦳䎛内呑尙岀敻爲耈蔿説飮,ﾆｯﾎﾟﾝ,㈜목도리"
const expected = "酉十厶㘽㖈內吞尚出夐為耇蒍說飲,ニッポン,(주)목도리"

Deno.test("normalizeCJK() normalizes all CJK characters", () =>
	assertEquals(normalizeCJK(provided), expected))
