
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
const VOICE_ID = "UgBBYS2sOqTuMpoF3BR0"; // "Mark" - Deep, Storyteller (Requested by User)

if (!ELEVENLABS_API_KEY) {
    console.error("Error: ELEVENLABS_API_KEY not found in .env file");
    process.exit(1);
}

const clips = [
    {
        id: "reel2_v_1_hook",
        text: "The most common mistake in AI Engineering? Thinking you can teach an LLM new facts by fine-tuning it."
    },
    {
        id: "reel2_v_2_mechanism",
        text: "Models store information as compressed probabilities in their weights. This is Parametric Efficiency. But it is lossy."
    },
    {
        id: "reel2_v_3_compression",
        text: "Think of it like a JPEG image. You save space, but you lose the fine details. You can't perfectly reconstruct the source data from the compression artifacts."
    },
    {
        id: "reel2_v_4_forgetting",
        text: "Worse, if you try to force new facts into these weights, you risk Catastrophic Forgetting. The model literally overwrites its previous knowledge to make room for the new data."
    },
    {
        id: "reel2_v_5_reversal",
        text: "And weights are directional. If a model learns A is B, it doesn't automatically know B is A. It fails basic logical reversal because the probability chain only goes one way."
    },
    {
        id: "reel2_v_6_rag",
        text: "To add reliable knowledge, you need Non-Parametric memory. RAG. Placing the raw, uncompressed data directly into the Context Window."
    },
    {
        id: "reel2_v_7_pattern",
        text: "So is fine-tuning useless? No. Use it to teach Patterns, not Facts. Teach it to think in JSON, or speak like a doctor. Teach it the Form."
    },
    {
        id: "reel2_v_8_verdict",
        text: "Fine-tune for the How. Use RAG for the What. That is the law."
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
            model_id: "eleven_turbo_v2_5", // Fast model
            voice_settings: {
                stability: 0.5,
                similarity_boost: 0.75,
                style: 0.5, // Expressive
                use_speaker_boost: true
            }
        }));

        req.end();
    });
}

async function main() {
    console.log("Generating 8 clips for Reel 2 (Veritasium Edition)...");

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
