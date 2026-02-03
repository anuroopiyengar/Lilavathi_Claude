/**
 * Cross-platform installer (optional).
 * Usage: node Lilavathi/scripts/install_to_claude.js
 */
const fs = require("fs");
const path = require("path");
const os = require("os");

const srcDir = path.resolve(__dirname, "..");
const destDir = path.join(os.homedir(), ".claude");

function ts() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}_${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

function copyTree(sub) {
  const from = path.join(srcDir, sub);
  if (!fs.existsSync(from)) return;

  const to = path.join(destDir, sub);
  fs.mkdirSync(to, { recursive: true });

  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else {
        const rel = path.relative(from, full);
        const dest = path.join(to, rel);
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        if (fs.existsSync(dest)) {
          fs.copyFileSync(dest, `${dest}.bak.${ts()}`);
        }
        fs.copyFileSync(full, dest);
      }
    }
  };
  walk(from);
}

fs.mkdirSync(destDir, { recursive: true });
["agents","commands","skills","rules","hooks"].forEach(copyTree);
console.log(`Installed Lilavathi framework content into: ${destDir}`);
console.log("Note: This copied files; it did not delete anything.");
