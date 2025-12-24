import puppeteer from 'puppeteer';
import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SAVE_PATH = path.join(__dirname, 'output.mp4');

(async () => {
    console.log('🚀 Launching Browser...');
    const browser = await puppeteer.launch({
        headless: false, // Must be false to capture headful if needed, but recorder works in headless too.
        // Keeping it headless: 'new' is better for performance usually, but let's try headful to be safe with audio syncing?
        // Actually, recorder works best in headless mode usually.
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=500,900']
    });

    const page = await browser.newPage();

    // Set viewport to 9:16 vertical video
    await page.setViewport({
        width: 1080,
        height: 1920,
        deviceScaleFactor: 1,
    });

    console.log('🌍 Navigating to App...');
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

    // Init Recorder
    const recorder = new PuppeteerScreenRecorder(page, {
        followNewTab: false,
        fps: 60,
        ffmpeg_Path: null, // Uses default if available
        videoFrame: {
            width: 1080,
            height: 1920,
        },
        aspectRatio: '9:16',
    });

    console.log('🎥 Starting Recording...');
    await recorder.start(SAVE_PATH);

    // Click the "Start" button to trigger audio/animation
    // We need to wait for the overlay to be clickable
    const startBtn = await page.$('.cursor-pointer');
    if (startBtn) {
        console.log('▶️ Clicking Start Button...');
        await startBtn.click();
    } else {
        console.error('❌ Could not find Start Button!');
    }

    // Wait for the duration of the animation (approx 30 seconds)
    // Scene 1: 6s
    // Scene 2: 10s
    // Scene 3: ~14s
    // Total: 30s + buffer
    console.log('⏳ Recording for 32 seconds...');
    await new Promise(r => setTimeout(r, 32000));

    console.log('🛑 Stopping Recording...');
    await recorder.stop();

    await browser.close();
    console.log(`✅ Video saved to: ${SAVE_PATH}`);
})();
