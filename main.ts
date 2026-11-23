// main.ts — entry for make.fun "One-Line Roast: The Gadget You Use Every Day"
// (u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
//
// Writes exactly one line to /output/entry.txt: the winning one-liner from the
// local pairwise race (V1, 4-0). The line roasts the phone's autocorrect: it
// keeps "correcting" 'ok' to 'duck', so the boss now thinks its owner runs a
// farm — setup up front, payoff in the last words, as the judge asks.
//
// Node 22 stdlib only. No network, no secrets, no reading outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The winning line (V1). 98 characters, plain UTF-8, one line, no explanation
// of the joke — the punchline lands in the last few words, as the judge asks.
const LINE =
  "My phone's autocorrect has corrected 'ok' to 'duck' so many times my boss now thinks I run a farm.";

const OUT = "/output/entry.txt";

// Gate check, same rule as the server's sealed scorer (RULES.txt "The gate"):
// UTF-8 text of 1 to 200 characters, not only white space. Refuse to write an
// invalid entry rather than submitting one the judge never sees.
const chars = [...LINE].length;
if (
  chars < 1 ||
  chars > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(`entry line fails gate: ${chars} characters (need 1-200, one line)`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8"); // exactly the line, no trailing newline
