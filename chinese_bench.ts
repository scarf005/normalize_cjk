import { normalizeChinese as original } from "./chinese.ts"
import { normalizeChinese as current } from "https://raw.githubusercontent.com/daangn/normalize-cjk/b400d302c67d16684dc599a39acf8d92b31512af/src/chinese.ts"

/**
 * Using [Array.prototype.reduce()][reduce] over for loop gives a small performance boost.
 *
 * [reduce]: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce>
 *
 * ```
 * Check file:///home/scarf/repo/deno/normalize_cjk/chinese_bench.ts
 * cpu: AMD Ryzen 5 5600G with Radeon Graphics
 * runtime: deno 1.39.0+d51fda9 (x86_64-unknown-linux-gnu)
 *
 * file:///home/scarf/repo/deno/normalize_cjk/chinese_bench.ts
 * benchmark               time (avg)        iter/s             (min … max)       p75       p99      p995
 * ------------------------------------------------------------------------ -----------------------------
 * current (reduce)       134.98 ms/iter           7.4 (111.79 ms … 160.48 ms) 149.77 ms 160.48 ms 160.48 ms
 * original (forloop)     158.83 ms/iter           6.3 (137.35 ms … 187.01 ms) 166.98 ms 187.01 ms 187.01 ms
 *
 * summary
 *   current (reduce)
 *    1.18x faster than original (forloop)
 * ```
 *
 * @module
 */

const x = "⾣〸ム㦳䎛内呑尙岀敻爲耈蔿説飮".repeat(100000)

Deno.bench({
	baseline: true,
	name: "current (reduce)",
	fn: () => {
		original(x)
	},
})

Deno.bench({
	name: "original (forloop)",
	fn: () => {
		current(x)
	},
})
