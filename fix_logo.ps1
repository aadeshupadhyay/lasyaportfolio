$root = "h:\Lasya Portfolio\stitch_lasya_aji_silpa_portfolio"

$files = Get-ChildItem -Path $root -Recurse -Filter "*.html" |
  Where-Object { $_.FullName -notlike "*node_modules*" -and $_.FullName -notlike "*\.git*" }

foreach ($file in $files) {
  $content = Get-Content $file.FullName -Raw

  if ($content -match 'weblogo') {
    # Update the img style to be larger (50px), remove any background, clean rendering
    $oldStyle = 'height:40px;width:40px;object-fit:contain;display:inline-block;vertical-align:middle;margin-right:0;'
    $newStyle = 'height:48px;width:48px;object-fit:contain;display:inline-block;vertical-align:middle;background:transparent;'
    $content = $content -replace [regex]::Escape($oldStyle), $newStyle
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
    Write-Host "FIXED: $($file.Name)"
  }
}
Write-Host "Done!"
