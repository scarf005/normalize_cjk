import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts"
import { normalizeChinese } from "https://deno.land/x/normalize_cjk@$MODULE_VERSION/chinese.ts"

const provided = "⾣〸ム㦳䎛内呑尙岀敻爲耈蔿説飮"
const expected = "酉十厶㘽㖈內吞尚出夐為耇蒍說飲"

Deno.test("normalizeChinese() normalizes chinese", () =>
	assertEquals(normalizeChinese(provided), expected))
