#!/usr/bin/env bash
set -euo pipefail

SRC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST_DIR="${HOME}/.claude"

timestamp() { date +"%Y%m%d_%H%M%S"; }

copy_dir() {
  local sub="$1"
  if [ -d "${SRC_DIR}/${sub}" ]; then
    mkdir -p "${DEST_DIR}/${sub}"
    # Copy files one by one to allow backups on collisions.
    while IFS= read -r -d '' f; do
      rel="${f#${SRC_DIR}/${sub}/}"
      dest="${DEST_DIR}/${sub}/${rel}"
      mkdir -p "$(dirname "${dest}")"
      if [ -f "${dest}" ]; then
        cp "${dest}" "${dest}.bak.$(timestamp)"
      fi
      cp "${f}" "${dest}"
    done < <(find "${SRC_DIR}/${sub}" -type f -print0)
  fi
}

mkdir -p "${DEST_DIR}"
copy_dir "agents"
copy_dir "commands"
copy_dir "skills"
copy_dir "rules"
copy_dir "hooks"

echo "Installed Lilavathi framework content into: ${DEST_DIR}"
echo "Note: This copied files; it did not delete anything."
