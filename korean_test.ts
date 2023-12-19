import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts"
import { normalizeHangul } from "https://deno.land/x/normalize_cjk@$MODULE_VERSION/korean.ts"

Deno.test("normalizeHangul() normalizes korean", () =>
	assertEquals(normalizeHangul("㈜목도리"), "(주)목도리"))
