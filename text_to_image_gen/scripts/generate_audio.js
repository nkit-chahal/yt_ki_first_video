import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';
import { NARRATION_STEPS } from '../src/data/narration.js';

// Configuration
const API_KEY = "sk_ccf30e91ae6be690a2c22005574352e7bee39eb6000482a7";
const VOICE_ID = "UgBBYS2sOqTuMpoF3BR0";
const MODEL_ID = "eleven_multilingual_v2";
const AUDIO_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '../public/audio');

// Ensure audio directory exists
if (!fs.existsSync(AUDIO_DIR)) {
    fs.mkdirSync(AUDIO_DIR, { recursive: true });
}

// Validation
if (!API_KEY) {
    console.error("❌ API Key missing.");
    process.exit(1);
}

const generateAudio = async (text, index) => {
    const filename = `narration_${index}.mp3`;
    const filepath = path.join(AUDIO_DIR, filename);

    if (fs.existsSync(filepath)) {
        console.log(`⏩ [${index}] Skipping (Exists): "${text.substring(0, 30)}..."`);
        return;
    }

    console.log(`🎙️ [${index}] Generating: "${text.substring(0, 30)}..."`);

    try {
        const response = await axios({
            method: 'post',
            url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
            headers: {
                'Accept': 'audio/mpeg',
                'Content-Type': 'application/json',
                'xi-api-key': API_KEY,
            },
            data: {
                text: text,
                model_id: MODEL_ID,
                voice_settings: {
                    stability: 0.5,
                    similarity_boost: 0.75,
                }
            },
            responseType: 'arraybuffer'
        });

        fs.writeFileSync(filepath, response.data);
        console.log(`✅ [${index}] Saved: ${filename}`);

    } catch (error) {
        if (error.response) {
            console.error(`❌ [${index}] Error ${error.response.status}:`, error.response.statusText);
            // Log full error details if possible
            try {
                const errData = JSON.parse(Buffer.from(error.response.data).toString());
                console.error("Details:", errData);
            } catch (e) {
                // buffer might not be json
            }
        } else {
            console.error(`❌ [${index}] Error:`, error.message);
        }
    }
};

const processQueue = async () => {
    console.log(`🚀 Starting Audio Generation for ${NARRATION_STEPS.length} steps...`);

    for (let i = 0; i < NARRATION_STEPS.length; i++) {
        await generateAudio(NARRATION_STEPS[i].text, i);
        // Small delay to be nice to the API, though "await" is already sequential
        await new Promise(resolve => setTimeout(resolve, 250));
    }

    console.log("🎉 Audio Generation Complete!");
};

processQueue();
