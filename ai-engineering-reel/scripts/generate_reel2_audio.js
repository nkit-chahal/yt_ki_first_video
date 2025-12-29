
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Configure __dirname and dotenv
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = "JBFqnCBsd6RMkjVDRZzb"; // Use same voice as Reel 1

if (!ELEVENLABS_API_KEY) {
    console.error("Error: ELEVENLABS_API_KEY not found in .env file");
    process.exit(1);
}

const clips = [
    {
        id: "reel2_1_hook",
        text: "Should you Fine-Tune or use RAG? 90% of developers get this wrong."
    },
    {
        id: "reel2_2_analogy",
        text: "Think of an LLM like a student taking a test. You have two ways to help them pass."
    },
    {
        id: "reel2_3_finetuning",
        text: "Fine-tuning is like studying. The student learns new skills permanently, but it takes time and effort."
    },
    {
        id: "reel2_4_rag",
        text: "RAG is like an open-book test. The student can look up the exact facts they need, right when they need them."
    },
    {
        id: "reel2_5_verdict",
        text: "Need to change behavior? Fine-tune. Need accurate facts? RAG. Most of the time? You probably just need RAG."
    },
    {
        id: "reel2_6_cta",
        text: "Watch the full breakdown on my channel to make the right choice!"
    }
];

const OUTPUT_DIR = path.join(__dirname, '../public/audio/reel');

// Ensure output directory exists
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

        req.on('error', (e) => {
            reject(e);
        });

        req.write(JSON.stringify({
            text: text,
            model_id: "eleven_turbo_v2_5", // Fast model for standard english
            voice_settings: {
                stability: 0.5,
                similarity_boost: 0.75
            }
        }));

        req.end();
    });
}

async function main() {
    console.log("Generating 6 clips for Reel 2 (RAG vs FT)...");

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
