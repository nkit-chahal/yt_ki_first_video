import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const audioDir = path.join(__dirname, '..', 'public', 'audio');

// Get all mp3 files sorted by name (which sorts by timestamp)
const files = fs.readdirSync(audioDir)
    .filter(f => f.endsWith('.mp3') && f.startsWith('ElevenLabs'))
    .sort();

console.log('Found files to rename:\n');

files.forEach((file, index) => {
    const oldPath = path.join(audioDir, file);
    const newPath = path.join(audioDir, `scene${index}.mp3`);

    console.log(`Scene ${index}: ${file.substring(0, 40)}...`);
    fs.renameSync(oldPath, newPath);
});

console.log('\n✅ All audio files renamed!');
console.log('\nMapping:');
for (let i = 0; i < files.length; i++) {
    console.log(`  scene${i}.mp3 -> Scene ${i}`);
}
