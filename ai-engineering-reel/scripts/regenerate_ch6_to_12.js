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

// Build list of scenes to regenerate
const SCENES_TO_REGENERATE = [
    // Chapter 6: Scenes 1, 12
    { id: 'c6_s1', chapterId: 'c6_eval', index: 0 },
    { id: 'c6_s12', chapterId: 'c6_eval', index: 11 },

    // Chapter 7: Scenes 1, 2, 7
    { id: 'c7_s1', chapterId: 'c7_selection', index: 0 },
    { id: 'c7_s2', chapterId: 'c7_selection', index: 1 },
    { id: 'c7_s7', chapterId: 'c7_selection', index: 6 },

    // Chapter 8: Scenes 1, 4, 6, 8, 10
    { id: 'c8_s1', chapterId: 'c8_prompt_eng', index: 0 },
    { id: 'c8_s4', chapterId: 'c8_prompt_eng', index: 3 },
    { id: 'c8_s6', chapterId: 'c8_prompt_eng', index: 5 },
    { id: 'c8_s8', chapterId: 'c8_prompt_eng', index: 7 },
    { id: 'c8_s10', chapterId: 'c8_prompt_eng', index: 9 }
];

// Add ALL scenes from Chapter 9 onwards (c9, c10, c11, c12)
const CHAPTER_9_ONWARDS = [
    { chapterId: 'c9_rag', sceneCount: 11 },
    { chapterId: 'c10_agents', sceneCount: 6 },
    { chapterId: 'c11_inference', sceneCount: 9 },
    { chapterId: 'c12_conclusion', sceneCount: 4 }
];

// Generate scene entries for chapters 9-12
CHAPTER_9_ONWARDS.forEach(chapter => {
    const chapterNum = chapter.chapterId.split('_')[0]; // e.g., 'c9'
    for (let i = 0; i < chapter.sceneCount; i++) {
        SCENES_TO_REGENERATE.push({
            id: `${chapterNum}_s${i + 1}`,
            chapterId: chapter.chapterId,
            index: i
        });
    }
});

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
                const size = fs.statSync(filePath).size;
                console.log(`✓ Saved ${fileName} (${(size / 1024).toFixed(1)}KB)`);
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

    console.log(`\n🎙️ Regenerating ${SCENES_TO_REGENERATE.length} audio files...\n`);

    let successCount = 0;
    let failCount = 0;

    for (const item of SCENES_TO_REGENERATE) {
        const chapter = chapters.find(c => c.id === item.chapterId);
        if (!chapter) {
            console.error(`❌ Chapter ${item.chapterId} not found`);
            failCount++;
            continue;
        }

        const text = chapter.narration[item.index];
        if (!text) {
            console.error(`❌ Text index ${item.index} not found in ${item.chapterId}`);
            failCount++;
            continue;
        }

        try {
            await generateAudio(text, `${item.id}.mp3`);
            successCount++;
        } catch (e) {
            console.error(`❌ Failed to generate ${item.id}:`, e.message);
            failCount++;
        }
    }

    console.log(`\n✅ Regeneration complete! Success: ${successCount}, Failed: ${failCount}`);
};

runRegeneration();
