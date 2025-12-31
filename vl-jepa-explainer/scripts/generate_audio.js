import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ElevenLabs configuration
const ELEVENLABS_API_KEY = 'e1b496ee6899738732a7b99d0d4f7a1f2441a50cfa467cc510806b319a28128f';
const VOICE_ID = 'UgBBYS2sOqTuMpoF3BR0';

const NARRATION_STEPS = [
    // HOOK SCENE (0:00 - 0:17)
    "So Meta's AI Chief released a new paper.",
    "And is this the beginning of the end for LLMs?",
    "Let's talk about it.",
    "So most of you guys know that Meta's AI chief scientist Yann LeCun reportedly plans to leave to build his own startup but before that, he actually made a really interesting paper that I want to talk about.",

    // JEPA INTRO SCENE (0:17 - 0:33)
    "So, the paper that he made with a bunch of different researchers from Meta is called VL-JEPA.",
    "So this is a vision-language model built on a Joint Embedding Predictive Architecture.",
    "So this is, I guess you could say, an extension of his I-JEPA architecture.",

    // NON-GENERATIVE SCENE (0:33 - 1:05)
    "So this is really cool because this is from Meta's FAIR lab, of course, Yann LeCun is the one leading this.",
    "And the super, super interesting thing that I found about this is that unlike models like ChatGPT that generate answers word by word...",
    "VL-JEPA does something completely different.",
    "This is a non-generative model.",
    "So this model builds an internal understanding of what it sees—images, video—and then converts that understanding into words only if needed.",

    // IMPLICATIONS SCENE (1:05 - 1:21)
    "Now because it learns in a semantic space instead of token space, it's faster, more efficient, and uses about half the parameters of traditional vision-language models while often performing better.",
    "And this is crazy because what this means for robotics, wearables, agents, is super crazy.",
    "So let's get into this.",

    // TOKEN FLOW SCENE (1:21 - 1:59)
    "So one of the things I wanted to really point out here to show you guys how different this architecture is, is that it talks about the fact that usually this is a generative system.",
    "So if you know what a generative system is... models like ChatGPT, GPT-4, Gemini...",
    "This produces tokens or words, you know, one at a time.",
    "It generates answers word by word. You know, you go from left to right.",
    "And every output must be fully certain to exist.",
    "So to answer a question, it literally can't know the final answer until it finishes the entire sentence.",
    "This is generating it, which is very slow and very painful.",

    // SEMANTIC THINKING SCENE (1:59 - 2:45)
    "But what the non-generative system means here is that it does not need to talk to think.",
    "So essentially what it does is that it does not generate words by default...",
    "Instead, it predicts the abstract representation, meaning directly.",
    "And it's not constrained by specific words or sentences to exist.",
    "So the reason that Yann LeCun is the one leading this... his belief is that intelligence equals understanding the world.",
    "And language is simply just an output format, but thinking happens via concepts.",
    "So this model builds an internal understanding of what it sees—images, video—and then converts that understanding into words if needed.",
    "So essentially, thinking in a latent space, reasoning in meaning, and not predicting the next token or words via text.",
    "So this model learns in a semantic space instead of token space.",

    // DOT CLOUD SCENE (2:57 - 3:40)
    "So essentially what you're looking at in this video is where you have a map of the internal understanding over time.",
    "So each dot is essentially what the AI thinks is happening at that moment.",
    "So you can see the red ones, those are basically the instant guesses.",
    "But the blue dot is essentially the stabilized understanding.",
    "Now what most people are going to ask here is: how is this even different from a cheap vision model just describing exactly what the video is doing?",
    "Well, the short answer is that cheap models are like, 'I see a hand, I see a bottle,' but then the second, then the third, until it finishes the entire sentence.",

    // CCTV COMPARISON SCENE (3:40 - 4:26)
    "This looks at each frame, guesses what it sees, and spits out the text immediately.",
    "So this is, you know, 'what does that look like?'",
    "A cheap model is basically like a CCTV motion detector.",
    "It just shouts out guesses: 'Movement! Hand! Bottle! Making up canister!'",
    "And it's jumpy, inconsistent, with no memory, and it's basically reacting and not understanding.",
    "But here, VL-JEPA does this instead: it's got a video stream, of course.",
    "And it's got continuous meaning over time, building a stable understanding.",
    "And it only labels the action once it's confident.",
    "That's why you see red dot, which is an instant guess—well, it might be wrong, it might be bottle.",
    "But then the blue dot is the stabilized meaning, it's a canister.",

    // TEMPORAL SCENE (4:26 - 5:10)
    "So the reason that this actually matters a lot is because a cheap model is going to say 'I see a bottle, I see a bottle.'",
    "VL-JEPA is going to actually understand the action and say the action is picking up a canister.",
    "So the killer difference is of course time.",
    "Cheap models think in single frames and have no real sense of before and after.",
    "VL-JEPA thinks in temporal meaning and it knows when an action starts, continues, and ends.",
    "That's why it's extremely useful for robotics, wearables, agents, real-world planning.",
    "And why the dot cloud matters is that, you know, it's showing meaning over time, drifting slightly from frame to frame, then locking in once enough evidence exists.",

    // ARCHITECTURE SCENE (5:10 - 6:01)
    "So then of course you might want to understand the diagram of the architecture.",
    "So this is the VL-JEPA model architecture.",
    "But honestly, this was a bit confusing... So I decided to just get a simpler description.",
    "So I actually used a GPT image to get this image because this visualizes perfectly what the paper is talking about.",
    "And if, you know, this is too much, I also have this one right here.",
    "So language is optional, understanding is not.",
    "So basically, you know, the X-Encoder is the visual input, so the video frames.",
    "Then you have the Y-Encoder, which is the actual meaning, the encoded meanings from the words.",
    "Then of course you've got your comparator, so this is the VL-JEPA model architecture.",
    "If you wanted to know how this works: Visual input... X-Encoder... Then you have the Predictor...",
    "And so there's no heavy decoder during training. So VL-JEPA learns faster with better results for half the trainable parameters, which is pretty insane in machine learning terms.",

    // BENCHMARK SCENE (6:01 - 7:29)
    "Now if we look at tests of this, this is currently the best.",
    "So we're looking at the scoreboard, which is where we can see the other ones... the different AI models.",
    "We can see that VL-JEPA is currently the best.",
    "You can see the number of parameters... 3.8 billion, 3.7...",
    "And VL-JEPA is 1.6 billion parameters.",
    "And two 3 billion parameters.",
    "And compared to things like CLIP, SigLIP, huge... older, well-known vision models...",
    "Compared to VL-JEPA Base, this is remarkably more efficient than other things that we're, you know, looking at.",
    "So I think it is pretty incredible how efficient that is.",
    "I mean if we continue to look over here...",
    "You can see that the number of samples seen... You can see that VL-JEPA learns much faster and reaches higher caption quality and predictive accuracy than these other models with way less samples seen.",
    "So even without SFT, which is, you know, fine-tuning, VL-JEPA understands videos better.",
    "And this kills the idea that you need token generation to understand things.",
    "Predicting meaning, you know, learns faster than predicting words.",
    "Then of course you've got chart 2, which is zero-shot video classification.",
    "Same thing. VL-JEPA pulls ahead and beats the competition.",
    "And then if you look at the actual size of the models, you can see that VL-JEPA is super, super small.",
    "So, you know, how generative models just, you know, tokens on tokens on tokens...",
    "But if you're thinking about something that actually reasons like a human, you can see that VL-JEPA learns faster, is more efficient.",

    // YANN QUOTE SCENE (7:53 - 8:52)
    "Of course here we have Yann LeCun talking about this stuff.",
    "'...during 16,000 hours, do the arithmetics and it's about 10^14 bytes.'",
    "'A four-year-old has seen as much visual data as the biggest LLM trained on the entire text ever produced.'",
    "'And so what that tells you is that there is way more information in the real world...'",
    "'...but it's also much more complicated. It's noisy. It's high dimensional. It's continuous.'",
    "'And basically the methods that are employed to train LLMs do not work in the real world.'",
    "'That explains why we have LLMs that can pass the bar exam or solve equations or compute integrals like college students and solve math problems.'",
    "'But we still don't have a domestic robot. They can, you know, do the chores in the house.'",
    "'We don't even have level five self-driving cars. I mean, we have them, but we cheat.'",
    "'I mean, we certainly don't have self-driving cars that can learn to drive in 20 hours of practice like any teenager.'",

    // SONIA QUOTE SCENE (8:52 - 9:53)
    "And then of course I saw him reposting this from Sonia Joseph.",
    "'The thesis behind JEPA is that our current models are not predicting causal dynamics.'",
    "'We don't simulate every atom to model intelligence...'",
    "'JEPA taught me the importance of learning physics at the right level of abstraction.'",
    "'Thank you @ylecun and the JEPA team—it was a privilege to work with you.'",
    "'The thesis behind JEPA is that our current models are not predicting causal dynamics.'",
    "'And if you predict in latent space and predict the future, then you're more likely to abstract away all of these pixel-level details.'",
    "'For example, when we model this conversation right now, we don't have to model it down to the level of atoms.'",
    "'That would be so computationally costly and so inefficient.'",
    "'We model things at the representation level of abstraction it needs that enables it to plan in the physical world and be able to do counterfactual reasoning about objects that are moving around.'",

    // REDDIT SCENE (9:53 - 10:25)
    "Now I did see a few comments on Reddit talking about the video saying that most of the actions it detects are wrong though.",
    "'Try to stop the video at any time to actually read what it says. It's really bad.'",
    "And someone also says, 'Wait, what? It's nowhere near most. Most of the actions were dead on.'",
    "And another person says that 'I stopped at like 5 times and they were all wrong.'",
    "'Made up a slice of pizza, made up that it was putting a cucumber on the table when it was nowhere near the table...'",
    "So, you know, maybe just maybe, I was completely distracted by how cool the dot cloud looked.",
];

async function generateAudio(text, index) {
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'audio/mpeg',
            'xi-api-key': ELEVENLABS_API_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: text,
            model_id: 'eleven_monolingual_v1',
            voice_settings: {
                stability: 0.5,
                similarity_boost: 0.75,
            },
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to generate audio for step ${index}: ${response.statusText}`);
    }

    const audioBuffer = await response.arrayBuffer();
    const outputPath = path.join(__dirname, '..', 'public', 'audio', `narration_${index}.mp3`);

    // Ensure directory exists
    const audioDir = path.dirname(outputPath);
    if (!fs.existsSync(audioDir)) {
        fs.mkdirSync(audioDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, Buffer.from(audioBuffer));
    console.log(`✓ Generated narration_${index}.mp3`);
}

async function main() {
    if (!ELEVENLABS_API_KEY) {
        console.error('Error: ELEVENLABS_API_KEY not set in environment');
        process.exit(1);
    }

    console.log(`Generating ${NARRATION_STEPS.length} audio files...`);

    for (let i = 0; i < NARRATION_STEPS.length; i++) {
        try {
            await generateAudio(NARRATION_STEPS[i], i);
            // Rate limit: wait 500ms between requests
            await new Promise(resolve => setTimeout(resolve, 500));
        } catch (error) {
            console.error(`Error generating audio ${i}:`, error.message);
        }
    }

    console.log('Done!');
}

main();
