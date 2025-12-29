import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const VOICE_ID = 'UgBBYS2sOqTuMpoF3BR0'; // Mark voice
const OUTPUT_DIR = path.join(__dirname, '../public/audio');
const NARRATION_FILE = path.join(__dirname, '../narration.json');

// User requested scenes (post-refactoring numbering)
const SCENES_TO_REGENERATE = [
    { id: 'c3_s6', chapterId: 'c3_foundation_models', index: 5 },
    { id: 'c4_s1', chapterId: 'c4_training_data', index: 0 },
    { id: 'c4_s2', chapterId: 'c4_training_data', index: 1 },
    { id: 'c4_s3', chapterId: 'c4_training_data', index: 2 },
    { id: 'c4_s8', chapterId: 'c4_training_data', index: 7 },
    { id: 'c5_s6', chapterId: 'c5_transformers', index: 5 },
    { id: 'c5_s8', chapterId: 'c5_transformers', index: 7 },
    { id: 'c5_s11', chapterId: 'c5_transformers', index: 10 }
];

const generateAudio = async (text, fileName) => {
    const filePath = path.join(OUTPUT_DIR, fileName);
    console.log(`Generating ${fileName}...`);
    console.log(`Text: "${text.substring(0, 60)}..."`);

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
                let body = '';
                res.on('data', chunk => body += chunk);
                res.on('end', () => reject(new Error(`API failed with status ${res.statusCode}: ${body}`)));
                return;
            }

            const fileStream = fs.createWriteStream(filePath);
            res.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`✓ Saved ${fileName} (${fs.statSync(filePath).size} bytes)`);
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

const runRegeneration = async () => {
    const narrationData = JSON.parse(fs.readFileSync(NARRATION_FILE, 'utf8'));
    const chapters = narrationData.chapters;

    for (const item of SCENES_TO_REGENERATE) {
        const chapter = chapters.find(c => c.id === item.chapterId);
        if (!chapter) {
            console.error(`❌ Chapter ${item.chapterId} not found`);
            continue;
        }

        const text = chapter.narration[item.index];
        if (!text) {
            console.error(`❌ Text index ${item.index} not found in ${item.chapterId}`);
            continue;
        }

        try {
            await generateAudio(text, `${item.id}.mp3`);
        } catch (e) {
            console.error(`❌ Failed to generate ${item.id}:`, e.message);
        }
    }

    console.log('\n✅ Regeneration complete!');
};

runRegeneration();
