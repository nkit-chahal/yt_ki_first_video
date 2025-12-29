import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const CHAPTERS_DIR = path.join(PROJECT_ROOT, 'src/chapters');
const AUDIO_DIR = path.join(PROJECT_ROOT, 'public/audio');

// 1. Rename Folders (Reverse Order)
// Check actual folders first
const dirs = fs.readdirSync(CHAPTERS_DIR).filter(d => d.startsWith('Chapter'));
const nums = dirs.map(d => parseInt(d.replace('Chapter', ''))).sort((a, b) => a - b);
const max = Math.max(...nums);

console.log(`Found chapters 0 to ${max}. Shifting...`);

for (let i = max; i >= 0; i--) {
    const oldPath = path.join(CHAPTERS_DIR, `Chapter${i}`);
    const newPath = path.join(CHAPTERS_DIR, `Chapter${i + 1}`);
    if (fs.existsSync(oldPath)) {
        console.log(`Renaming Chapter${i} -> Chapter${i + 1}`);
        fs.renameSync(oldPath, newPath);
    }
}

// 2. Rename Audio Files
if (fs.existsSync(AUDIO_DIR)) {
    const audioFiles = fs.readdirSync(AUDIO_DIR).filter(f => f.match(/^c\d+_s\d+\.mp3$/));
    const items = audioFiles.map(f => {
        const m = f.match(/^c(\d+)_s(\d+)\.mp3$/);
        return { name: f, c: parseInt(m[1]), s: parseInt(m[2]) };
    });

    // Sort by C descending
    items.sort((a, b) => b.c - a.c);

    items.forEach(item => {
        const oldPath = path.join(AUDIO_DIR, item.name);
        const newName = `c${item.c + 1}_s${item.s}.mp3`;
        const newPath = path.join(AUDIO_DIR, newName);
        // console.log(`Renaming ${item.name} -> ${newName}`);
        fs.renameSync(oldPath, newPath);
    });
    console.log(`Renamed ${items.length} audio files.`);
}

// 3. Update scenes.js content
// Now we look at Chapter1..max+1
for (let i = 1; i <= max + 1; i++) {
    const scenesPath = path.join(CHAPTERS_DIR, `Chapter${i}`, 'scenes.js');
    if (fs.existsSync(scenesPath)) {
        let content = fs.readFileSync(scenesPath, 'utf8');

        // Update IDs: c0_s1 -> c1_s1
        content = content.replace(/id: "c(\d+)_/g, (match, n) => {
            return `id: "c${parseInt(n) + 1}_`;
        });

        // Update Comment: Chapter 0: -> Chapter 1:
        content = content.replace(/Chapter (\d+):/g, (match, n) => {
            return `Chapter ${parseInt(n) + 1}:`;
        });

        // Update Const Name: CHAPTER_0_SCENES -> CHAPTER_1_SCENES
        content = content.replace(/CHAPTER_(\d+)_SCENES/g, (match, n) => {
            return `CHAPTER_${parseInt(n) + 1}_SCENES`;
        });

        fs.writeFileSync(scenesPath, content);
        console.log(`Updated scenes.js for Chapter${i}`);
    }
}

// 4. Update narration.json
const NARRATION_FILE = path.join(PROJECT_ROOT, 'narration.json');
if (fs.existsSync(NARRATION_FILE)) {
    const narration = JSON.parse(fs.readFileSync(NARRATION_FILE, 'utf8'));
    narration.chapters.forEach(ch => {
        if (ch.id.startsWith('c')) {
            const parts = ch.id.split('_'); // [c0, intro]
            const num = parseInt(parts[0].substring(1)); // 0
            ch.id = `c${num + 1}_${parts.slice(1).join('_')}`;
        }
    });
    fs.writeFileSync(NARRATION_FILE, JSON.stringify(narration, null, 4));
    console.log("Updated narration.json");
}
