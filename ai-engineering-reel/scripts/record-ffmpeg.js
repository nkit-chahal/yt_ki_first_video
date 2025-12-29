const puppeteer = require('puppeteer');
const { spawn, exec } = require('child_process');
const path = require('path');

const VIDEO_DURATION_MS = 70000; // 70 seconds
const OUTPUT_FILE = path.join(__dirname, '../out/deepseek-reel-ffmpeg.mp4');
const DEV_SERVER_URL = 'http://localhost:5175';

async function recordVideo() {
    console.log('🎬 Starting FFmpeg automation...');

    // Step 1: Launch browser
    console.log('🌐 Launching browser...');
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {
            width: 1080,
            height: 1920
        },
        args: [
            '--window-size=1080,1920',
            '--window-position=0,0',
            '--no-sandbox'
        ]
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1920 });

    // Step 2: Navigate to the reel
    console.log('📱 Loading reel...');
    await page.goto(DEV_SERVER_URL, { waitUntil: 'networkidle0' });
    await page.waitForTimeout(2000); // Let animations load

    // Step 3: Get window position for FFmpeg
    const session = await page.target().createCDPSession();
    const { windowId } = await session.send('Browser.getWindowForTarget');
    const { bounds } = await session.send('Browser.getWindowBounds', { windowId });

    console.log(`📐 Window position: ${bounds.left}x${bounds.top}, size: ${bounds.width}x${bounds.height}`);

    // Step 4: Start FFmpeg recording (Windows - using GDI grab)
    console.log('🎥 Starting FFmpeg screen capture...');

    const ffmpegArgs = [
        '-f', 'gdigrab',                    // Windows screen capture
        '-framerate', '30',
        '-offset_x', String(bounds.left),
        '-offset_y', String(bounds.top),
        '-video_size', `${bounds.width}x${bounds.height}`,
        '-i', 'desktop',                     // Capture from desktop
        '-c:v', 'libx264',                   // H.264 codec
        '-preset', 'ultrafast',              // Fast encoding
        '-pix_fmt', 'yuv420p',
        '-y',                                // Overwrite output
        OUTPUT_FILE
    ];

    const ffmpegProcess = spawn('ffmpeg', ffmpegArgs);

    ffmpegProcess.stderr.on('data', (data) => {
        // FFmpeg outputs to stderr by default
        process.stdout.write(data.toString());
    });

    // Wait for FFmpeg to start
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Step 5: Click play button
    console.log('▶️  Starting playback...');
    const playButton = await page.waitForSelector('button', { timeout: 5000 });
    await playButton.click();

    // Step 6: Wait for video duration
    console.log(`⏱️  Recording for ${VIDEO_DURATION_MS / 1000} seconds...`);
    await page.waitForTimeout(VIDEO_DURATION_MS);

    // Step 7: Stop recording
    console.log('⏹️  Stopping recording...');
    ffmpegProcess.stdin.write('q'); // Send 'q' to stop FFmpeg gracefully

    await new Promise(resolve => {
        ffmpegProcess.on('close', resolve);
    });

    // Step 8: Close browser
    await browser.close();

    console.log(`✅ Video saved to: ${OUTPUT_FILE}`);
    console.log('🎉 FFmpeg automation complete!');
}

// Run the automation
recordVideo().catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
});
