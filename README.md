# normalize_cjk

[![deno module](https://shield.deno.dev/x/normalize_cjk)](https://deno.land/x/normalize_cjk)

> [!WARNING]
>
> this repository has no relationship with the [original repository][original].

Unofficial deno port of [daangn/normalize-cjk][original]. For node compatible NPM package, please visit [original repository][original] instead.

## Usage

Either import all functions from `https://deno.land/x/normalize_cjk@$MODULE_VERSION/mod.ts` or import specific functions from:

- `chinese.ts`
- `japanese.ts`
- `korean.ts`

```ts
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts"
import { normalizeCJK } from "https://deno.land/x/normalize_cjk@$MODULE_VERSION/mod.ts"

const provided = "⾣〸ム㦳䎛内呑尙岀敻爲耈蔿説飮,ﾆｯﾎﾟﾝ,㈜목도리"
const expected = "酉十厶㘽㖈內吞尚出夐為耇蒍說飲,ニッポン,(주)목도리"

assertEquals(normalizeCJK(provided), expected)
```

```ts
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts"
import { normalizeHangul } from "https://deno.land/x/normalize_cjk@$MODULE_VERSION/korean.ts"

assertEquals(normalizeHangul("㈜목도리"), "(주)목도리")
```

## License

- Original repository was MIT licensed and can be found in [LICENSE](./LICENSE).
- This port's license is [AGPL-3.0-only](./LICENSE.agpl).

[original]: https://github.com/daangn/normalize-cjk
