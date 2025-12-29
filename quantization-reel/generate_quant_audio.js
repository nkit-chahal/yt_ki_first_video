import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = "UgBBYS2sOqTuMpoF3BR0"; // Mark

if (!ELEVENLABS_API_KEY) {
    console.error("Error: ELEVENLABS_API_KEY not found in .env file");
    process.exit(1);
}

const clips = [
    {
        id: "quant1_hook",
        text: "70GB AI model… 4GB laptop. Sounds impossible, right? Well, there’s a trick engineers use. It’s called Quantization."
    },
    {
        id: "quant2_essay",
        text: "See, AI models normally store numbers in 32-bit precision. That’s like writing an essay when a tweet would do. Way too much detail. Too much RAM used."
    },
    {
        id: "quant3_rounding",
        text: "So we compress them into 4-bit buckets. Think of it like rounding 0.98234 to just 1. You keep the meaning, but drop the noise."
    },
    {
        id: "quant4_speed",
        text: "And just like that — the model becomes 8x smaller. Plus, slow decimal math turns into fast integer math. Your laptop finally breathes."
    },
    {
        id: "quant5_shocker",
        text: "But here’s the shocker… the model still works almost the same. In real tasks, you lose around 1% accuracy, but gain huge memory and speed boost."
    },
    {
        id: "quant6_bigbrain",
        text: "Which means this isn’t just theory — you can run powerful AI on normal laptops, phones, even tiny chips. Big brain. Small device. That’s Quantization."
    }
];

const OUTPUT_DIR = path.join(__dirname, 'public/audio');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function generateAudio(text, filename) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'api.elevenlabs.io',
            path: `/v1/text-to-speech/${VOICE_ID}`,
            method: 'POST',
            headers: {
                'xi-api-key': ELEVENLABS_API_KEY,
                'Content-Type': 'application/json',
                'Accept': 'audio/mpeg'
            }
        };

        const req = https.request(options, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`API Request failed with status code ${res.statusCode}`));
                return;
            }

            const filePath = path.join(OUTPUT_DIR, filename);
            const fileStream = fs.createWriteStream(filePath);
            res.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Saved ${filename}`);
                resolve(filePath);
            });
        });

        req.on('error', (e) => reject(e));

        req.write(JSON.stringify({
            text: text,
            model_id: "eleven_turbo_v2_5",
            voice_settings: {
                stability: 0.5,
                similarity_boost: 0.75
            }
        }));

        req.end();
    });
}

async function main() {
    console.log("Generating Quantization Reel Audio...");
    for (const clip of clips) {
        try {
            console.log(`Generating ${clip.id}.mp3...`);
            await generateAudio(clip.text, `${clip.id}.mp3`);
        } catch (error) {
            console.error(`Error generating ${clip.id}:`, error.message);
        }
    }
    console.log("Done!");
}

main();
