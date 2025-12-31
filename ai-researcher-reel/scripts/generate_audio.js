import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = 'e1b496ee6899738732a7b99d0d4f7a1f2441a50cfa467cc510806b319a28128f';
const VOICE_ID = 'UgBBYS2sOqTuMpoF3BR0';

const NARRATION_STEPS = [
    // Hook
    "Want to become an AI researcher in 2026?",
    "Here's the exact roadmap no one talks about.",
    "No PhD required.",
    // Why Now
    "AI research is exploding.",
    "OpenAI, Google, Meta – they're all hiring.",
    "And the barrier to entry has never been lower.",
    // Step 1
    "Step 1: Master the fundamentals.",
    "Linear algebra.",
    "Probability and statistics.",
    "Python and PyTorch.",
    // Step 2
    "Step 2: Read papers obsessively.",
    "Start with the classics – Attention Is All You Need.",
    "Then move to arXiv daily.",
    "Understanding papers is a superpower.",
    // Step 3
    "Step 3: Implement from scratch.",
    "Don't just read – code it yourself.",
    "Build a Transformer.",
    "Build a Diffusion model.",
    // Step 4
    "Step 4: Publish your work.",
    "GitHub repos. Blog posts. Twitter threads.",
    "Build in public.",
    "Your portfolio is your resume.",
    // Step 5
    "Step 5: Join the community.",
    "Discord servers. Twitter AI circles. Local meetups.",
    "Network with researchers. Get feedback. Collaborate.",
    // CTA
    "2026 is the year to start.",
    "The tools are free. The resources are online.",
    "All you need is consistency.",
    "Like, subscribe, and start your AI journey today!",
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
    console.log('🎙️ Generating audio for AI Researcher Reel...');
    console.log(`📝 Total steps: ${NARRATION_STEPS.length}`);
    console.log('');

    for (let i = 0; i < NARRATION_STEPS.length; i++) {
        try {
            await generateAudio(NARRATION_STEPS[i], i);
            await new Promise(resolve => setTimeout(resolve, 500));
        } catch (error) {
            console.error(`✗ Error on step ${i}: ${error.message}`);
        }
    }

    console.log('');
    console.log('🎉 Audio generation complete!');
}

main();
