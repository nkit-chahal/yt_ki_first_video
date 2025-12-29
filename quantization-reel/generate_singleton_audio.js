
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
    console.error("Error: ELEVENLABS_API_KEY not found");
    process.exit(1);
}

const clips = [
    {
        id: "s1_hook",
        text: "If your database class creates a new object every time you call it… what happens when you call it 100 times?"
    },
    {
        id: "s2_answer",
        text: "You get 100 objects."
    },
    {
        id: "s3_problem",
        text: "More objects means more memory, more cleanup, and more chances for bugs."
    },
    {
        id: "s4_need",
        text: "But some things — like your database — should be created once and shared everywhere."
    },
    {
        id: "s5_solution",
        text: "Singleton is a design rule that says: make one object, reuse one object."
    },
    {
        id: "s6_outro",
        text: "Simple. Efficient. Easy to maintain."
    },
    {
        id: "s7_code",
        text: "Here's how you implement it. Create a Metaclass that intercepts object creation. If an instance exists, return it. Otherwise, create one."
    },
    {
        id: "s8_usage",
        text: "Now apply it to your Database class using the metaclass keyword. That's it."
    },
    {
        id: "s9_proof",
        text: "Every time you call Database, you get the exact same object. One connection. Zero waste."
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
    console.log("Generating Singleton audio (6 clips)...");
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
