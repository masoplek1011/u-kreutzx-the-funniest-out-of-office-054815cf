// The Funniest Out-of-Office — u-kreutzx-the-funniest-out-of-office-054815cf
// Writes a single deterministic out-of-office line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node standard library only. No network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "I'm on holiday. 'Eventually' means the week I remember I have a job.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
