// Make the AI Judge Feel Nostalgic: A Childhood Memory
// Writes one sentence — a single childhood memory — to /output/entry.txt.
// Node 22, no dependencies, deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";

const sentence =
  "Every night the gate creaked, my father's motorbike headlight swept across the cracks in my bedroom wall, and I lay still, pretending to be asleep, so he would believe his long day had ended well.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
