// The Funniest Toaster Error Message — writes one line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "ERROR: It's not toast. It hasn't been toast for a while now.";

// Mirror the sealed gate: UTF-8 text of 1 to 120 characters, not only white space.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry.txt would fail the gate (${LINE.length} chars)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
