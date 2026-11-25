import { mkdirSync, writeFileSync } from "node:fs";

// Two Lines to Your Past Self — a warning about one specific moment.
// Line 1: one sentence warning the past self about a specific moment.
// Line 2: one sentence saying why that moment mattered and what changed.
const entry =
  "Don't say you're too busy for Dad's sixtieth — it's three hours, and there won't always be another one.\n" +
  "The next one was in a hospital room, and that empty chair is why the keys live by the door now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
