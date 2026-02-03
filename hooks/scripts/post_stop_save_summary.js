/**
 * Minimal placeholder hook script.
 *
 * The full everything-claude-code framework has richer memory hooks; this file is intentionally
 * conservative so it won’t surprise you.
 *
 * If you enable hooks, this script can be modified to:
 * - append a short session summary into Lilavathi/.claude_memory/session_log.md
 *
 * NOTE: Claude Code hook payload formats may vary by version. Treat this as a starting point.
 */
const fs = require("fs");
const path = require("path");

function safeAppend(filePath, text) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.appendFileSync(filePath, text, { encoding: "utf8" });
}

try {
  const now = new Date().toISOString();
  const out = path.resolve(process.cwd(), "Lilavathi/.claude_memory/session_log.md");
  safeAppend(out, `\n\n## Session end: ${now}\n- (Customize this hook to capture a summary)\n`);
} catch (e) {
  // Fail silently: hooks should never break your workflow.
}
