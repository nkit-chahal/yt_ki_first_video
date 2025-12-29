/**
 * Audio Generation Script for "2.5 Years in Class" Reel
 * Uses ElevenLabs API to generate narration audio for each scene
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ELEVENLABS_API_KEY = 'sk_e448b4d42caa85aad96020d940fd52c136f2c7daa7c708ef';
const VOICE_ID = 'UgBBYS2sOqTuMpoF3BR0';

const scenes = [
    {
        id: 0,
        text: "Stop training your AI on internet garbage. Right now, most Vision-Language Models are fed billions of image-text pairs scraped from random webpages. It's noisy, it's full of ads, and the images have zero logical connection. It is essentially junk food for Artificial Intelligence."
    },
    {
        id: 1,
        text: "But a new paper just dropped the ultimate fix. It's called '2.5 Years in Class,' and the concept is genius. Instead of crawling the chaotic web, they literally sent the AI to school."
    },
    {
        id: 2,
        text: "They curated a massive dataset from 22,000 hours of instructional videos. We're talking Algebra, Physics, Engineering—real, foundational knowledge. But here is the catch: they didn't just dump the raw video files. That would be lazy. They built a 'Multimodal Textbook' pipeline."
    },
    {
        id: 3,
        text: "Here is the secret sauce: They used LLMs to extract the teacher's voice. Then, they used OCR to read the complex formulas written on the blackboard. Finally, they interleaved the video keyframes with that text in perfect, chronological order. They effectively turned video tutorials into a perfect, frame-by-frame textbook."
    },
    {
        id: 4,
        text: "This creates something web data can't offer: Coherence. In the paper, they proved that if you shuffle the images in a standard dataset, the model doesn't care. But if you shuffle this textbook? The performance tanks. That proves the model is actually learning the logic and reasoning between frames, not just memorizing pixels."
    },
    {
        id: 5,
        text: "The results are undeniable. Models pre-trained on this 'Textbook' absolutely destroyed the baselines on reasoning-heavy tasks like MathVista and ScienceQA. High-quality, dense knowledge beats massive scale every single time."
    },
    {
        id: 6,
        text: "They even ran a 'Cheat Test' where they gave the answer in the context window. Web-trained models ignored it. This model? It actually paid attention and used the context to solve the problem."
    },
    {
        id: 7,
        text: "This is the future of Open Source AI. Less noise, more knowledge. Hit that subscribe button and visit the channel for point-to-point reviews of the latest research papers. I break down the papers no one else is reading."
    }
];

async function generateAudio(scene) {
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'audio/mpeg',
            'Content-Type': 'application/json',
            'xi-api-key': ELEVENLABS_API_KEY
        },
        body: JSON.stringify({
            text: scene.text,
            model_id: 'eleven_turbo_v2_5',
            voice_settings: {
                stability: 0.5,
                similarity_boost: 0.75,
                style: 0.5,
                use_speaker_boost: true
            }
        })
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`ElevenLabs API error for scene ${scene.id}: ${error}`);
    }

    const audioBuffer = await response.arrayBuffer();
    const outputPath = path.join(__dirname, '..', 'public', 'audio', `scene${scene.id}.mp3`);

    fs.writeFileSync(outputPath, Buffer.from(audioBuffer));
    console.log(`✓ Generated audio for Scene ${scene.id}: ${outputPath}`);

    return outputPath;
}

async function main() {
    console.log('🎙️ Generating audio for "2.5 Years in Class" reel...\n');

    // Ensure audio directory exists
    const audioDir = path.join(__dirname, '..', 'public', 'audio');
    if (!fs.existsSync(audioDir)) {
        fs.mkdirSync(audioDir, { recursive: true });
    }

    for (const scene of scenes) {
        try {
            await generateAudio(scene);
            // Small delay between requests to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
            console.error(`✗ Error generating Scene ${scene.id}:`, error.message);
        }
    }

    console.log('\n✅ Audio generation complete!');
}

main().catch(console.error);
