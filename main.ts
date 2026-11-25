import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The single sentence that could have replaced an entire pointless meeting.
// Kept verbatim: the exact wording is the entry itself, so it must never
// be reworded, trimmed, or re-punctuated by later edits.
const ENTRY =
  "Let's cancel this meeting, decide in one email, and give everyone their hour back.";

// Helper: the entry must survive any plain-text round-trip unchanged, so
// it may only use printable ASCII characters.
function assertPrintableAscii(text: string): void {
  if (/[^\x20-\x7E]/.test(text)) {
    throw new Error("Entry must be printable ASCII only.");
  }
}

assertPrintableAscii(ENTRY);

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}.`);
}
if (/\n|\r/.test(ENTRY)) {
  throw new Error("Entry must be a single line (no newline characters).");
}
if (!ENTRY.trim()) {
  throw new Error("Entry must not be only white space.");
}
// The entry must read as one finished sentence: capitalised start,
// full stop at the end, and no doubled spaces inside.
if (!/^[A-Z]/.test(ENTRY)) {
  throw new Error("Entry must start with a capital letter.");
}
if (!ENTRY.endsWith(".")) {
  throw new Error("Entry must end with a full stop.");
}
if (/  /.test(ENTRY)) {
  throw new Error("Entry must not contain doubled spaces.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} characters).`);
