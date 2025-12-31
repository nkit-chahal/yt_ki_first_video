import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = 'e1b496ee6899738732a7b99d0d4f7a1f2441a50cfa467cc510806b319a28128f';
const VOICE_ID = 'UgBBYS2sOqTuMpoF3BR0';

const NARRATION_STEPS = [
    // Hook
    "Most developers are still stuck with GitHub Copilot in 2025…",
    "It was revolutionary… back then.",
    "but in 2026, everyone is switching to one free AI tool",
    "that writes entire features like a pro.",
    // Problem
    "Copilot gives you line-by-line suggestions.",
    "One line at a time.",
    "It's helpful…",
    "but it doesn't really understand your whole project.",
    // Reveal
    "Meet Cursor.",
    "An AI-first code editor",
    "built on VS Code.",
    // Demo
    "Watch this.",
    "I tell it: Add user authentication to this Next.js app",
    "and boom –",
    "it creates the auth files,",
    "updates routes,",
    "adds environment variables,",
    "and writes the login component – all in seconds.",
    // Features
    "Cursor has full project context.",
    "Multi-file edits.",
    "Built-in agents that run tasks autonomously.",
    "And an unlimited free tier.",
    "Devs are calling it faster and smarter than Copilot.",
    "And it's completely free to start.",
    // CTA
    "If you want to code 2–3 times faster in 2026",
    "for interviews, placements, or real projects",
    "you need to try Cursor today.",
    "Link in description.",
    "Drop a LIKE, comment your current AI tool, and SUBSCRIBE!",
];

async function generateAudio(text, index) {
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'audio/mpeg',
            'Content-Type': 'application/json',
            'xi-api-key': API_KEY,
        },
        body: JSON.stringify({
            text: text,
            model_id: 'eleven_turbo_v2_5',
            voice_settings: {
                stability: 0.5,
                similarity_boost: 0.75,
                style: 0.5,
                use_speaker_boost: true
            }
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to generate audio ${index}: ${response.status} - ${errorText}`);
    }

    const audioBuffer = await response.arrayBuffer();
    const outputPath = path.join(__dirname, '..', 'public', 'audio', `narration_${index}.mp3`);

    // Ensure directory exists
    const audioDir = path.dirname(outputPath);
    if (!fs.existsSync(audioDir)) {
        fs.mkdirSync(audioDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, Buffer.from(audioBuffer));
    console.log(`✓ Generated: narration_${index}.mp3`);
}

async function main() {
    console.log('🎙️ Generating audio for Cursor Reel...');
    console.log(`📝 Total steps: ${NARRATION_STEPS.length}`);
    console.log('');

    for (let i = 0; i < NARRATION_STEPS.length; i++) {
        try {
            await generateAudio(NARRATION_STEPS[i], i);
            // Small delay to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 500));
        } catch (error) {
            console.error(`✗ Error on step ${i}: ${error.message}`);
        }
    }

    console.log('');
    console.log('🎉 Audio generation complete!');
}

main();
