import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// ESM dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const VOICE_ID = 'UgBBYS2sOqTuMpoF3BR0'; // Mark voice
const OUTPUT_DIR = path.join(__dirname, '../public/audio/reel');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const REEL_SCRIPT = [
    {
        id: "reel_1_hook",
        text: "AI Engineering is the hottest career path right now. But what exactly is it?"
    },
    {
        id: "reel_2_models",
        text: "It starts with Foundation Models. You don't train them from scratch; you build applications ON TOP of them."
    },
    {
        id: "reel_3_rag",
        text: "But models need context. That's R A G. Connecting private data to the AI's brain."
    },
    {
        id: "reel_4_agents",
        text: "Then, you give them tools. That's Agents. AI that can browse the web and actually DO things."
    },
    {
        id: "reel_5_cta",
        text: "For the full deep-dive summary, watch the complete video on my channel. Subscribe for more!"
    }
];

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
    console.log(`Generating ${REEL_SCRIPT.length} clips for Reel 2.0...`);

    for (const line of REEL_SCRIPT) {
        try {
            await generateAudio(line.text, `${line.id}.mp3`);
        } catch (err) {
            console.error(`Failed to generate ${line.id}:`, err.message);
        }
    }
    console.log("Done!");
};

main();
