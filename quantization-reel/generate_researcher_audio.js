import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = "UgBBYS2sOqTuMpoF3BR0"; // Mark - Deep & Narrative

if (!ELEVENLABS_API_KEY) {
    console.error("Error: ELEVENLABS_API_KEY not found in .env file");
    process.exit(1);
}

const clips = [
    {
        id: "research1_hook",
        text: "Dream of building the next GPT-5? Getting into DeepMind or OpenAI is hard... but there's a formula."
    },
    {
        id: "research2_math",
        text: "Step 1: Master the Math. Linear Algebra, Calculus, Probability. You cannot skip this. It is the language of AI."
    },
    {
        id: "research3_code",
        text: "Step 2: Code Everything. Don't just import transformers. Implement papers from scratch in PyTorch or JAX."
    },
    {
        id: "research4_papers",
        text: "Step 3: Read Research. Make ArXiv your morning paper. Understand the 'why', not just the 'how'."
    },
    {
        id: "research5_build",
        text: "Step 4: Build a Portfolio. Replicate famous papers like LoRA or DDPM. Open source it on GitHub."
    },
    {
        id: "research6_cta",
        text: "You don't need a PhD, but you need an obsession. Follow for the deep dive."
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
    console.log("Generating AI Researcher Reel Audio...");
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
