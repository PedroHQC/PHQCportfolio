$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$videoDir = Join-Path $projectRoot 'public\videos'
$outputDir = Join-Path $projectRoot 'public\media\hero'
$workDir = Join-Path $projectRoot '.local\hero-video'
[IO.Directory]::CreateDirectory($outputDir) | Out-Null
[IO.Directory]::CreateDirectory($workDir) | Out-Null
$ffmpeg = (Get-Command ffmpeg -ErrorAction Stop).Source
$master = Join-Path $workDir 'afonse-master.mp4'

# Three gameplay clips and 0.6-second dissolves. The last dissolve returns to
# the opening clip; trimming its first 0.6 seconds makes the loop continuous.
$filters = @'
[0:v]fps=24,crop=iw:trunc(ih*0.78/2)*2:0:trunc(ih*0.16/2)*2,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,setsar=1,settb=AVTB,setpts=PTS-STARTPTS,split=2[a][opening];
[1:v]fps=24,crop=iw:trunc(ih*0.78/2)*2:0:trunc(ih*0.16/2)*2,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,setsar=1,settb=AVTB,setpts=PTS-STARTPTS[b];
[2:v]fps=24,crop=iw:trunc(ih*0.78/2)*2:0:trunc(ih*0.16/2)*2,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,setsar=1,settb=AVTB,setpts=PTS-STARTPTS[c];
[opening]trim=duration=0.6,setpts=PTS-STARTPTS[head];
[a][b]xfade=transition=fade:duration=0.6:offset=5.4[ab];
[ab][c]xfade=transition=fade:duration=0.6:offset=10.8[abc];
[abc][head]xfade=transition=fade:duration=0.6:offset=16.2,trim=start=0.6:duration=16.2,setpts=PTS-STARTPTS,format=yuv420p[out]
'@
& $ffmpeg -hide_banner -loglevel error -y -ss 4 -t 6 -i (Join-Path $videoDir 'AfonseShowCase.MP4') -ss 0.6 -t 6 -i (Join-Path $videoDir 'AfonseBossShowcase.MP4') -ss 5 -t 6 -i (Join-Path $videoDir 'SpiderEnemyShowcase.MP4') -filter_complex_threads 2 -filter_complex $filters -map '[out]' -an -c:v libx264 -preset fast -crf 16 -threads 4 -movflags +faststart $master
if ($LASTEXITCODE -ne 0) { throw 'Could not build Afonse montage.' }
& $ffmpeg -hide_banner -loglevel error -y -i $master -an -c:v libx264 -preset slow -crf 28 -maxrate 1200k -bufsize 2400k -pix_fmt yuv420p -threads 4 -movflags +faststart (Join-Path $outputDir 'afonse-desktop.mp4')
if ($LASTEXITCODE -ne 0) { throw 'Could not encode desktop video.' }
& $ffmpeg -hide_banner -loglevel error -y -i $master -vf 'crop=404:720,scale=480:854,setsar=1' -an -c:v libx264 -preset slow -crf 29 -maxrate 500k -bufsize 1000k -pix_fmt yuv420p -threads 4 -movflags +faststart (Join-Path $outputDir 'afonse-mobile.mp4')
if ($LASTEXITCODE -ne 0) { throw 'Could not encode mobile video.' }
& $ffmpeg -hide_banner -loglevel error -y -i $master -frames:v 1 -c:v libwebp -quality 78 (Join-Path $outputDir 'afonse-poster.webp')
if ($LASTEXITCODE -ne 0) { throw 'Could not encode poster.' }
Get-ChildItem -LiteralPath $outputDir | Select-Object Name, Length
