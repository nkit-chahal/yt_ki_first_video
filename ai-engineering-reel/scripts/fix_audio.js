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

// Files reported by user OR found by scan to be < 10KB
const REPORTED_FILES = [
    // Chapter 3 (User Reported)
    { id: 'c3_s5', chapterId: 'c3_training_data', index: 4 },
    { id: 'c3_s6', chapterId: 'c3_training_data', index: 5 },

    // Chapter 4 (User Reported + Scan)
    { id: 'c4_s1', chapterId: 'c4_transformers', index: 0 },
    { id: 'c4_s2', chapterId: 'c4_transformers', index: 1 },
    { id: 'c4_s3', chapterId: 'c4_transformers', index: 2 },
    { id: 'c4_s8', chapterId: 'c4_transformers', index: 7 }, // Also corrupt <10KB

    // Chapter 5 (User Reported + Scan)
    { id: 'c5_s3', chapterId: 'c5_eval', index: 2 }, // Corrupt <10KB
    { id: 'c5_s6', chapterId: 'c5_eval', index: 5 }, // User reported
    { id: 'c5_s7', chapterId: 'c5_eval', index: 6 }, // Corrupt <10KB
    { id: 'c5_s8', chapterId: 'c5_eval', index: 7 }, // User reported
    { id: 'c5_s11', chapterId: 'c5_eval', index: 10 }, // User reported

    // Other potentially corrupt files found by scan
    { id: 'c7_s3', chapterId: 'c7_prompt_eng', index: 2 },
    { id: 'c7_s7', chapterId: 'c7_prompt_eng', index: 6 },
    { id: 'c8_s11', chapterId: 'c8_rag', index: 10 },
    { id: 'c11_s4', chapterId: 'c11_conclusion', index: 3 }
];

const generateAudio = async (text, fileName) => {
    const filePath = path.join(OUTPUT_DIR, fileName);
    console.log(`Generating ${fileName}...`);
    console.log(`Text: "${text.substring(0, 50)}..."`);

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
                console.log(`Saved ${fileName} (${fs.statSync(filePath).size} bytes)`);
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

const scanFiles = () => {
    console.log("Scanning audio files for size anomalies...");
    if (!fs.existsSync(OUTPUT_DIR)) {
        console.error("Audio directory not found.");
        return;
    }
    const files = fs.readdirSync(OUTPUT_DIR);
    const suspicious = [];

    files.forEach(file => {
        if (file.endsWith('.mp3')) {
            const stats = fs.statSync(path.join(OUTPUT_DIR, file));
            // Flag files smaller than 10KB
            if (stats.size < 10000) {
                suspicious.push({ file, size: stats.size });
            }
        }
    });

    if (suspicious.length > 0) {
        console.log("\n⚠️ Found corrupted (small) files:");
        suspicious.forEach(f => console.log(`- ${f.file}: ${f.size} bytes`));
    } else {
        console.log("No files < 10KB found.");
    }

    // Check specific reported files presence and size
    console.log("\nVerifying reported files:");
    REPORTED_FILES.forEach(item => {
        const p = path.join(OUTPUT_DIR, `${item.id}.mp3`);
        if (fs.existsSync(p)) {
            const size = fs.statSync(p).size;
            console.log(`- ${item.id}: ${size} bytes ${size < 10000 ? '(Potentially Corrupt)' : '(Size seems OK)'}`);
        } else {
            console.log(`- ${item.id}: MISSING`);
        }
    });
};

const runRegeneration = async () => {
    const narrationData = JSON.parse(fs.readFileSync(NARRATION_FILE, 'utf8'));
    const chapters = narrationData.chapters;

    for (const item of REPORTED_FILES) {
        const chapter = chapters.find(c => c.id === item.chapterId);
        if (!chapter) continue;
        const text = chapter.narration[item.index];
        if (!text) continue;

        try {
            await generateAudio(text, `${item.id}.mp3`);
        } catch (e) {
            console.error(`Failed to generate ${item.id}:`, e.message);
        }
    }
};

const mode = process.argv[2];

if (mode === 'scan') {
    scanFiles();
} else if (mode === 'regenerate') {
    runRegeneration();
} else {
    console.log("Usage: node scripts/fix_audio.js [scan|regenerate]");
}
