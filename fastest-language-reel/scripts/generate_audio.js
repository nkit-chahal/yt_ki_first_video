import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NARRATION_FILE = path.join(__dirname, '../narration.json');
const OUTPUT_DIR = path.join(__dirname, '../public/audio');
const ENV_FILE = path.join(__dirname, '../.env');

// Manual .env parsing
let API_KEY = '';
if (fs.existsSync(ENV_FILE)) {
    const envContent = fs.readFileSync(ENV_FILE, 'utf8');
    const match = envContent.match(/ELEVENLABS_API_KEY=(.*)/);
    if (match && match[1]) {
        API_KEY = match[1].trim().replace(/\.$/, '');
    }
}

if (!API_KEY) {
    console.error('Error: ELEVENLABS_API_KEY not found in .env file');
    console.log('Create a .env file with: ELEVENLABS_API_KEY=your_key_here');
    process.exit(1);
}

const VOICE_ID = 'UgBBYS2sOqTuMpoF3BR0';
const MODEL_ID = 'eleven_multilingual_v2';

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Helper to download audio
async function generateAudio(text, fileName) {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'POST',
            hostname: 'api.elevenlabs.io',
            path: `/v1/text-to-speech/${VOICE_ID}`,
            headers: {
                'xi-api-key': API_KEY,
                'Content-Type': 'application/json',
            },
        };

        const req = https.request(options, (res) => {
            if (res.statusCode !== 200) {
                let errorBody = '';
                res.on('data', (chunk) => errorBody += chunk);
                res.on('end', () => reject(new Error(`API Error: ${res.statusCode} - ${errorBody}`)));
                return;
            }

            const filePath = path.join(OUTPUT_DIR, fileName);
            const fileStream = fs.createWriteStream(filePath);
            res.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`✅ Saved: ${fileName}`);
                resolve();
            });
        });

        req.on('error', (e) => reject(e));

        req.write(JSON.stringify({
            text: text,
            model_id: MODEL_ID,
            voice_settings: {
                stability: 0.5,
                similarity_boost: 0.75,
                use_speaker_boost: true,
            }
        }));
        req.end();
    });
}

async function main() {
    try {
        const narrationData = JSON.parse(fs.readFileSync(NARRATION_FILE, 'utf8'));
        const scenes = narrationData.scenes;

        console.log(`🎬 Found ${scenes.length} scenes. Starting generation...`);
        console.log(`📁 Output: ${OUTPUT_DIR}\n`);

        for (const scene of scenes) {
            const sceneId = scene.scene;
            const text = scene.narration.join(' ');
            const fileName = `scene${sceneId}.mp3`;

            const filePath = path.join(OUTPUT_DIR, fileName);
            if (fs.existsSync(filePath)) {
                console.log(`⏭️  Skipping existing: ${fileName}`);
                continue;
            }

            console.log(`🎙️  Generating: ${fileName}...`);
            try {
                await generateAudio(text, fileName);
            } catch (err) {
                console.error(`❌ Failed to generate ${fileName}:`, err.message);
            }

            await new Promise(r => setTimeout(r, 250));
        }

        console.log('\n🎉 Audio generation complete!');
    } catch (error) {
        console.error('Critical Error:', error.message);
    }
}

main();
