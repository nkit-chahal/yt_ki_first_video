const fs = require('fs');
const https = require('https');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const VOICE_ID = 'UgBBYS2sOqTuMpoF3BR0'; // Mark voice
const OUTPUT_DIR = path.join(__dirname, '../public/audio');
const NARRATION_FILE = path.join(__dirname, '../narration.json');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const generateAudio = async (text, fileName) => {
    const filePath = path.join(OUTPUT_DIR, fileName);

    if (fs.existsSync(filePath)) {
        console.log(`Skipping ${fileName}, already exists.`);
        return;
    }

    console.log(`Generating ${fileName}...`);

    const options = {
        hostname: 'api.elevenlabs.io',
        path: `/v1/text-to-speech/${VOICE_ID}`,
        method: 'POST',
        headers: {
            'xi-api-key': process.env.ELEVENLABS_API_KEY,
            'Content-Type': 'application/json',
            'Accept': 'audio/mpeg'
        }
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`API failed with status ${res.statusCode}`));
                return;
            }

            const fileStream = fs.createWriteStream(filePath);
            res.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Saved ${fileName}`);
                resolve();
            });
        });

        req.on('error', (e) => reject(e));

        req.write(JSON.stringify({
            text: text,
            model_id: "eleven_multilingual_v2",
            voice_settings: {
                stability: 0.5,
                similarity_boost: 0.75
            }
        }));

        req.end();
    });
};

const main = async () => {
    try {
        if (!fs.existsSync(NARRATION_FILE)) {
            console.error("Narration file not found:", NARRATION_FILE);
            return;
        }
        const narrationData = JSON.parse(fs.readFileSync(NARRATION_FILE, 'utf8'));
        const chapters = narrationData.chapters || [];

        console.log(`Found ${chapters.length} chapters.`);

        for (let i = 0; i < chapters.length; i++) {
            const chapter = chapters[i];
            const text = chapter.narration.join(' ');
            // Use index-based naming to ensure valid filenames
            const fileName = `chapter_${i}.mp3`;

            try {
                await generateAudio(text, fileName);
            } catch (err) {
                console.error(`Failed to generate chapter ${i}:`, err.message);
                // Continue to next chapter even if one fails
            }
        }
    } catch (error) {
        console.error('Error in main process:', error);
    }
};

main();
