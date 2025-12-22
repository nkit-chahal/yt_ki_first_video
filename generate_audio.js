import fs from 'fs';
import path from 'path';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars from parent directory (assuming script is in src/scripts or similar, adjussting path to root .env)
// The user said: dotenv.config({ path: path.join(__dirname, '../.env') }); 
// If I place this in `git-infographic/scripts/`, `../.env` looks in `git-infographic/`.
// Let's place it in `git-infographic/scripts/generate_audio.js`
dotenv.config({ path: path.join(__dirname, '.env') }); // Actually I saw .env in `c:\Users\Pc\Desktop\prerna\.env` previously?
// Wait, listing showed .env in `c:\Users\Pc\Desktop\prerna`. 
// If I put this script in `c:\Users\Pc\Desktop\prerna\git-infographic\scripts`, I need to go `../../.env`.
// Let's stick to placing it in `c:\Users\Pc\Desktop\prerna\git-infographic\scripts` to be inside the repo structure, 
// OR place it in `c:\Users\Pc\Desktop\prerna` directly like the python script.
// Use user's code structure: `path.join(__dirname, '../.env')` implies it's one level deep.
// Let's create `c:\Users\Pc\Desktop\prerna\git-infographic\generate_audio.js` -> then `.env` is `../.env` ?? No.
// Let's place it in `c:\Users\Pc\Desktop\prerna\generate_audio.js`. Then `.env` is `./.env`.
// User code says: `path.join(__dirname, '../.env')`. 
// If I assume I place this in `c:\Users\Pc\Desktop\prerna\git-infographic\scripts\generate_audio.js`, and `.env` is in `c:\Users\Pc\Desktop\prerna\.env` ??
// Let's look at file list again. `.env` is in `c:\Users\Pc\Desktop\prerna`.
// Project root is `c:\Users\Pc\Desktop\prerna\git-infographic`.
// I will place it in `c:\Users\Pc\Desktop\prerna\git-infographic\scripts\generate_audio.js`.
// Then `../.env` would be `git-infographic/.env`. That doesn't exist.
// `../../.env` would be `prerna/.env`. This is correct.

// However, the user provided code has `path.join(__dirname, '../.env')`.
// I will modify the path to match my placement or place it where the logic works.
// Let's place it in `c:\Users\Pc\Desktop\prerna\git-infographic\generate_audio.js`.
// Then `../.env` is `c:\Users\Pc\Desktop\prerna\.env`. This Matches!
// And `../public/audio` becomes `c:\Users\Pc\Desktop\prerna\public\audio`.
// Wait, `public` folder is inside `git-infographic`.
// So `../public/audio` would point to `c:\Users\Pc\Desktop\prerna\public\audio`.
// BUT `public` is likely in `git-infographic/public`.
// So if script is in `git-infographic/generate_audio.js`:
// `OUTPUT_DIR` = `../public/audio` -> `prerna/public/audio`.  (Wrong if public is inside git-infographic)
// `OUTPUT_DIR` = `./public/audio` -> `git-infographic/public/audio`. (Correct)

// The user code seems to assume a structure. I should adapt the paths to match the actual project structure.
// Actual Structure:
// Root: c:\Users\Pc\Desktop\prerna
//  - .env
//  - git-infographic/ (Repo)
//      - public/audio/
//      - src/data/narration.json (Assuming this is the script source?)
//      - package.json

// User code uses: `narration.json` in same dir as script.
// I will put the script in `c:\Users\Pc\Desktop\prerna\generate_audio.js` (same level as .env).
// Then:
// dotenv: `./.env` (or just `.env`)
// output: `./git-infographic/public/audio`
// script: `./git-infographic/src/data/narration.json`

// Let's modify the paths in the code to fit the file system I verified.

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = "iP95p4xoKVk53GoZ742B"; // Chris - Charming
// Adjusted path: public/audio is inside git-infographic
const OUTPUT_DIR = path.join(__dirname, 'git-infographic/public/audio');

// Load script
// Adjusted path: Source is git-infographic/src/data/narration.json (or I can read c:\Users\Pc\Desktop\prerna\narration.json which I saw exists)
// Listing showed `narration.json` in `c:\Users\Pc\Desktop\prerna`. So same dir.
const scriptPath = path.join(__dirname, 'narration.json');
const narrationScript = JSON.parse(fs.readFileSync(scriptPath, 'utf8'));

if (!API_KEY) {
    console.error("Error: ELEVENLABS_API_KEY not found in .env file");
    process.exit(1);
}

// ... rest of logic ...

async function generateAudio(text, outputFile) {
    // Force overwrite as requested ("remove prevous audio")

    console.log(`Generating: ${text.substring(0, 30)}... -> ${path.basename(outputFile)}`);

    try {
        const response = await axios({
            method: 'post',
            url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
            headers: {
                'Accept': 'audio/mpeg',
                'xi-api-key': API_KEY,
                'Content-Type': 'application/json',
            },
            data: {
                text: text,
                model_id: "eleven_flash_v2_5",
                voice_settings: {
                    stability: 0.5,
                    similarity_boost: 0.75
                }
            },
            responseType: 'stream'
        });

        const writer = fs.createWriteStream(outputFile);
        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        if (error.response) {
            console.error(`Error: ${error.response.status} - ${error.response.statusText}`);
            console.error(error.response.data);
        } else {
            console.error(`Error: ${error.message}`);
        }
    }
}

async function main() {
    // Flatten steps if structure is { steps: [...] }
    const items = Array.isArray(narrationScript) ? narrationScript : narrationScript.steps;

    console.log(`Starting audio generation for ${items.length} items...`);

    for (const item of items) {
        // Only generate for Undo scenes as requested in context? 
        // User said "generate these audio again" implying the ones we were talking about (10-13)
        // BUT also said "remove prevous audio" which implies a clean slate.
        // And the script loops over *all* items.
        // I will generate ALL to be safe and consistent with the new voice.

        const fileName = `${item.id}.mp3`;
        const filePath = path.join(OUTPUT_DIR, fileName);
        await generateAudio(item.text, filePath);
    }

    console.log("Done!");
}

main();
