$root = "h:\Lasya Portfolio\stitch_lasya_aji_silpa_portfolio"

$allFiles = Get-ChildItem -Path $root -Recurse -Filter "*.html" |
  Where-Object { $_.FullName -notlike "*node_modules*" -and $_.FullName -notlike "*\.git*" }

foreach ($file in $allFiles) {
  $rel = $file.FullName.Substring($root.Length + 1)
  $depth = ($rel -split '\\').Count - 1
  $prefix = "../" * $depth

  $faviconPath = "${prefix}favicon.png"
  $logoPath    = "${prefix}Lasya%20Logo/new/weblogo.png"

  $content = Get-Content $file.FullName -Raw

  # ---- 1. Add favicon <link> if not already present ----
  if ($content -notmatch 'rel="icon"') {
    $faviconTag = "  <link rel=""icon"" type=""image/png"" href=""$faviconPath"">`n"
    $content = $content -replace '(</head>)', ($faviconTag + '$1')
    Write-Host "FAVICON ADDED: $rel"
  } else {
    Write-Host "FAVICON EXISTS: $rel"
  }

  # ---- 2. Add logo img in navbar brand link ----
  # Pattern: the brand link contains "Lasya Aji Silpa" as text — wrap it with img + span
  if ($content -notmatch 'weblogo\.png') {
    # Replace the text node "Lasya Aji Silpa" that sits inside the brand anchor
    $logoImg = "<img src=""$logoPath"" alt=""Logo"" style=""height:40px;width:40px;object-fit:contain;display:inline-block;vertical-align:middle;margin-right:8px;"" /><span style=""vertical-align:middle;"">Lasya Aji Silpa</span>"
    $content = $content -replace '(?<=>)\s*Lasya Aji Silpa\s*(?=\s*</a>)', "`n        $logoImg`n      "
    Write-Host "LOGO ADDED: $rel"
  } else {
    Write-Host "LOGO EXISTS: $rel"
  }

  Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
Write-Host "All done!"
