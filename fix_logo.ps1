$root = "h:\Lasya Portfolio\stitch_lasya_aji_silpa_portfolio"

$files = Get-ChildItem -Path $root -Recurse -Filter "*.html" |
  Where-Object { $_.FullName -notlike "*node_modules*" -and $_.FullName -notlike "*\.git*" }

foreach ($file in $files) {
  $content = Get-Content $file.FullName -Raw

  if ($content -match 'weblogo') {
    # Replace the img tag with plain text
    $content = $content -replace '(?s)\s*<img src="[^"]*weblogo[^"]*"[^/]*/>\s*', "`n        Lasya Aji Silpa`n      "
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
    Write-Host "FIXED: $($file.Name)"
  }
}
Write-Host "Done!"
