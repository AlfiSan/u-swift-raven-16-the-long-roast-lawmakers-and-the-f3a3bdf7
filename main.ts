// The Long Roast: Lawmakers and the File They Cannot Convert
// Writes one satirical sentence to /output/entry.txt.
// The sentence sets up a lawmaker's authority (voting to ban an app)
// and undercuts it with the file he cannot convert, ending on the
// punch: the person who has to do it for him is nine years old.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "He voted to ban an app he has never opened, then handed the bill to his grandson and asked him to turn it into a PDF — the grandson is nine.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// The gate allows 1-320 characters and a single sentence; keep the
// program honest about that before it writes anything.
if (ROAST.length < 1 || ROAST.length > 320) {
  throw new Error(`roast is ${ROAST.length} chars, gate allows 1-320`);
}
if ((ROAST.match(/\./g) ?? []).length !== 1 || !ROAST.endsWith(".")) {
  throw new Error("roast must be exactly one sentence ending in a period");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
console.log(`wrote ${ROAST.length} chars to ${join(outDir, "entry.txt")}`);
