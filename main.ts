import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The single sentence that could have replaced an entire pointless meeting.
const ENTRY =
  "Let's cancel this meeting, decide in one email, and give everyone their hour back.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}.`);
}
if (/\n|\r/.test(ENTRY)) {
  throw new Error("Entry must be a single line (no newline characters).");
}
if (!ENTRY.trim()) {
  throw new Error("Entry must not be only white space.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} characters).`);
