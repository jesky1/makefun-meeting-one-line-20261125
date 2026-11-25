import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import assert from "node:assert/strict";

const EXPECTED =
  "Let's cancel this meeting, decide in one email, and give everyone their hour back.";

function run(outDir) {
  return spawnSync(process.execPath, ["main.ts"], {
    cwd: import.meta.dirname,
    env: { ...process.env, MAKEFUN_OUTPUT_DIR: outDir },
    encoding: "utf8",
  });
}

test("entry is a single line of 1-200 characters and deterministic", () => {
  const dirA = mkdtempSync(join(tmpdir(), "meeting-a-"));
  const dirB = mkdtempSync(join(tmpdir(), "meeting-b-"));
  const runA = run(dirA);
  assert.equal(runA.status, 0, runA.stderr);
  const runB = run(dirB);
  assert.equal(runB.status, 0, runB.stderr);
  const a = readFileSync(join(dirA, "entry.txt"), "utf8");
  const b = readFileSync(join(dirB, "entry.txt"), "utf8");
  assert.equal(a, b, "output must be deterministic across runs");
  assert.equal(a, EXPECTED);
  assert.ok(a.length >= 1 && a.length <= 200, `length ${a.length} out of gate`);
  assert.ok(!/[\n\r]/.test(a), "entry must be a single line");
  assert.ok(a.trim().length > 0, "entry must not be only white space");
});
