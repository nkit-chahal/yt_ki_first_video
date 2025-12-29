# Rename ElevenLabs audio files to segment IDs
# Files are already sorted by timestamp in directory listing

$audioDir = "c:\Users\Pc\Desktop\prerna\ai-tiers-video\public\audio"
Set-Location $audioDir

# Get all ElevenLabs files sorted by creation time
$files = Get-ChildItem -Filter "ElevenLabs_*.mp3" | Sort-Object CreationTime

# Define the mapping (49 segments total, but we only have 43 files)
# Assuming user generated them in order from narration script
$segmentIds = @(
    # Chapter 1 (4)
    "1_1", "1_2", "1_3", "1_4",
    # Chapter 2 (5)
    "2_1", "2_2", "2_3", "2_4", "2_5",
    # Chapter 3 (5) 
    "3_1", "3_2", "3_3", "3_4", "3_5",
    # Chapter 4 (5)
    "4_1", "4_2", "4_3", "4_4", "4_5",
    # Chapter 5 (5)
    "5_1", "5_2", "5_3", "5_4", "5_5",
    # Chapter 6 (5)
    "6_1", "6_2", "6_3", "6_4", "6_5",
    # Chapter 7 (5)
    "7_1", "7_2", "7_3", "7_4", "7_5",
    # Chapter 8 (6)
    "8_1", "8_2", "8_3", "8_4", "8_5", "8_6",
    # Chapter 9 (3)
    "9_1", "9_2", "9_3"
)

Write-Host "Found $($files.Count) audio files"
Write-Host "Need $($segmentIds.Count) segments total"
Write-Host ""

# Check if we have the right number
if ($files.Count -ne $segmentIds.Count) {
    Write-Host "WARNING: File count mismatch!" -ForegroundColor Red
    Write-Host "Files: $($files.Count), Expected: $($segmentIds.Count)" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Missing segments:" -ForegroundColor Yellow
    $missing = $segmentIds.Count - $files.Count
    Write-Host "You need to generate $missing more audio files" -ForegroundColor Yellow
    Write-Host ""
}

# Rename files
for ($i = 0; $i -lt $files.Count; $i++) {
    $oldName = $files[$i].Name
    $newName = "$($segmentIds[$i]).mp3"
    
    Write-Host "[$($i+1)/$($files.Count)] Renaming: $oldName -> $newName"
    
    # Rename the file
    Rename-Item -Path $oldName -NewName $newName -Force
}

Write-Host ""
Write-Host "✅ Renaming complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Renamed files:" -ForegroundColor Cyan
Get-ChildItem -Filter "*.mp3" | Where-Object { $_.Name -match '^\d+_\d+\.mp3$' } | Sort-Object Name | ForEach-Object {
    Write-Host "  $($_.Name)" -ForegroundColor Green
}
