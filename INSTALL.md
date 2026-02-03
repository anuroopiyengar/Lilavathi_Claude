# Install (optional) into Claude Code global directory

You can keep this framework **project-local** (recommended) OR copy it into your global Claude Code
directory so the agents/commands/skills are available everywhere.

## What gets copied

This folder contains subfolders that match Claude Code conventions:

- `agents/`
- `commands/`
- `skills/`
- `rules/`
- `hooks/`

The install scripts copy these into:

- macOS/Linux: `~/.claude/`
- Windows: `%USERPROFILE%\.claude\`

## Safety notes

- The install scripts **do not** delete existing content.
- If a file already exists, the scripts will:
  - create a timestamped backup copy next to it, then
  - overwrite the file.

## macOS/Linux

```bash
bash Lilavathi/scripts/install_to_claude.sh
```

## Windows (PowerShell)

```powershell
powershell -ExecutionPolicy Bypass -File .\Lilavathi\scripts\install_to_claude.ps1
```

## Verify

After install, you should see files like:

- `~/.claude/agents/lilavathi-orchestrator.md`
- `~/.claude/rules/10-flutter_rules.md`

If you keep it project-local, just reference files under `Lilavathi/` directly in Claude Code.
