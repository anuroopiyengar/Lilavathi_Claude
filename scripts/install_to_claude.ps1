\
$ErrorActionPreference = "Stop"

$srcDir = Resolve-Path (Join-Path $PSScriptRoot "..")
$destDir = Join-Path $HOME ".claude"

function Timestamp() {
  return (Get-Date -Format "yyyyMMdd_HHmmss")
}

function Copy-Dir($sub) {
  $from = Join-Path $srcDir $sub
  if (Test-Path $from) {
    $to = Join-Path $destDir $sub
    New-Item -ItemType Directory -Force -Path $to | Out-Null

    Get-ChildItem -Recurse -File $from | ForEach-Object {
      $rel = $_.FullName.Substring($from.Length + 1)
      $dest = Join-Path $to $rel
      New-Item -ItemType Directory -Force -Path (Split-Path $dest) | Out-Null

      if (Test-Path $dest) {
        Copy-Item $dest ($dest + ".bak." + (Timestamp)) -Force
      }
      Copy-Item $_.FullName $dest -Force
    }
  }
}

New-Item -ItemType Directory -Force -Path $destDir | Out-Null
Copy-Dir "agents"
Copy-Dir "commands"
Copy-Dir "skills"
Copy-Dir "rules"
Copy-Dir "hooks"

Write-Host "Installed Lilavathi framework content into: $destDir"
Write-Host "Note: This copied files; it did not delete anything."
