import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CHAPTERS_DIR = path.join(__dirname, '../src/chapters');

for (let i = 1; i <= 12; i++) {
    const file = path.join(CHAPTERS_DIR, `Chapter${i}/index.jsx`);
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        const oldName = `Chapter${i - 1}Visualizer`;
        const newName = `Chapter${i}Visualizer`;

        if (content.includes(oldName)) {
            content = content.replaceAll(oldName, newName);
            fs.writeFileSync(file, content);
            console.log(`Updated Chapter${i}/index.jsx: ${oldName} -> ${newName}`);
        }
    }
}
