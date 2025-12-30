export const NARRATION_STEPS = [
    // INTRO
    { text: "Everyday you use image generation models—ChatGPT, or Nano Banana by Google.", scene: "intro", visualStep: 0 },
    { text: "It feels like you type words… and AI paints reality.", scene: "intro", visualStep: 1 },
    { text: "It feels like magic.", scene: "intro", visualStep: 2 },
    { text: "But today, we won’t just use it.", scene: "intro", visualStep: 3 }, // Transition

    // PROLOGUE
    { text: "Today, we will understand it — from start to end.", scene: "prologue", visualStep: 4 },
    { text: "And since AI is the most demanded skill for 2026 jobs, especially in MAANG...", scene: "prologue", visualStep: 5 },
    { text: "We will also decode real interview questions on this trending topic.", scene: "prologue", visualStep: 6 },
    { text: "This is the System Design of Text-to-Image. Explained the right way.", scene: "prologue", visualStep: 7 },

    // PART I: GANs
    { text: "For years, GANs ruled image generation.", scene: "gan", visualStep: 8 }, // Map to Title Card (Step 3 -> 8)
    { text: "The system had two neural networks:", scene: "gan", visualStep: 9 }, // Show Arena (Step 4)
    { text: "The Generator → the forger.", scene: "gan", visualStep: 10 }, // Highlight Gen (Step 5)
    { text: "The Discriminator → the detective.", scene: "gan", visualStep: 11 }, // Highlight Disc (Step 6)
    { text: "The forger makes fake images.", scene: "gan", visualStep: 12 }, // Gen Act (Step 7)
    { text: "The detective shouts: FAKE!", scene: "gan", visualStep: 13 }, // Disc Act (Step 8)
    { text: "They train by competing, improving each other.", scene: "gan", visualStep: 14 }, // Loop (Step 9)
    { text: "It worked… but it was unstable.", scene: "gan", visualStep: 15 }, // Instability Glitch
    { text: "Sometimes the AI learned one trick that fooled the detective and then repeated the same image forever.", scene: "gan", visualStep: 16 }, // Repetitive Output
    { text: "That failure mode is called Mode Collapse.", scene: "gan", visualStep: 17 }, // Mode Collapse Title
    { text: "Training a GAN was like balancing a pencil on its tip.", scene: "gan", visualStep: 18 }, // Pencil Analogy
    { text: "Engineers needed stability.", scene: "diffusion", visualStep: 19 }, // Stability Visual
    { text: "We needed a system that learns to reverse a process, not fight it.", scene: "diffusion", visualStep: 20 }, // Reverse Visual
    { text: "And that shift was Diffusion.", scene: "diffusion", visualStep: 21 }, // Diffusion Title

    // PART II: DIFFUSION
    { text: "Think of ink falling in water.", scene: "diffusion", visualStep: 22 }, // Ink Drop
    { text: "It spreads until the glass becomes random grey.", scene: "diffusion", visualStep: 23 }, // Ink Spread
    { text: "That is diffusion. That is entropy.", scene: "diffusion", visualStep: 24 }, // Entropy Label
    { text: "Now imagine reversing it mathematically — starting from grey water and reconstructing the ink drop.", scene: "diffusion", visualStep: 25 }, // Ink Rewind
    { text: "That intuition became the core of generative AI.", scene: "diffusion", visualStep: 26 }, // Core Intuition
    { text: "So instead of two models fighting… We train one model to answer a simple question:", scene: "diffusion", visualStep: 27 }, // One Model Visual
    { text: "“What noise was added here?”", scene: "diffusion", visualStep: 28 }, // Question Visual
    { text: "We take real images and slowly destroy them by adding Gaussian noise, step by step, until they become pure static.", scene: "diffusion", visualStep: 29 }, // Forward Diff (Moved up)
    { text: "Then the model learns to predict the noise, so we can subtract it and recover the image.", scene: "diffusion", visualStep: 30 }, // Reverse Diff (Moved up)
    { text: "If you can recover an image from pure noise… You can also generate an image from pure noise.", scene: "diffusion", visualStep: 31 }, // Insight Visual
    { text: "But one big challenge remained:", scene: "pipeline", visualStep: 32 }, // Challenge Lock
    { text: "How do we control what image comes out of the noise?", scene: "pipeline", visualStep: 33 }, // Control Question
    { text: "That required the language-vision bridge: CLIP & Embeddings.", scene: "pipeline", visualStep: 34 }, // Bridge

    // PART III: PIPELINE (Expanded Steps 30-54)
    { text: "A modern Text-to-Image system isn’t one model.", scene: "pipeline", visualStep: 35 }, // Title
    { text: "It’s a pipeline of 3 major systems working together:", scene: "pipeline", visualStep: 36 }, // 3-Boxes Empty
    { text: "Text Encoder (CLIP / T5) → converts words into math vectors.", scene: "pipeline", visualStep: 37 }, // Labels
    { text: "Diffusion Model (U-Net / Transformer) → sculpts meaning out of noise in latent space.", scene: "pipeline", visualStep: 37 },
    { text: "VAE Decoder → converts the final math back into pixels.", scene: "pipeline", visualStep: 37 },
    { text: "Let’s trace your prompt. You type: “An astronaut riding a horse.”", scene: "pipeline", visualStep: 38 }, // Typing
    { text: "STEP 1 — TEXT TO MATH.", scene: "pipeline", visualStep: 39 }, // Step 1 Badge
    { text: "The computer doesn’t know what “astronaut” means.", scene: "pipeline", visualStep: 40 }, // Confusion
    { text: "So the text encoder converts words into embeddings (number vectors), where related concepts stay mathematically close.", scene: "pipeline", visualStep: 41 }, // Vectors
    { text: "This becomes the guide for generation.", scene: "pipeline", visualStep: 42 }, // Compass
    { text: "STEP 2 — WE COMPRESS REALITY.", scene: "pipeline", visualStep: 43 }, // Step 2 Badge
    { text: "Pixels are expensive. A 1024×1024 image has over 1 million pixels.", scene: "pipeline", visualStep: 44 }, // Pixels
    { text: "Denoising that many pixels at every step would melt your GPU VRAM.", scene: "pipeline", visualStep: 45 }, // Fire
    { text: "So we use a VAE (autoencoder) to compress the image into a small latent representation — like a neural ZIP file that keeps concepts, not pixels.", scene: "pipeline", visualStep: 46 }, // Shrink
    { text: "All generation happens in latent space.", scene: "pipeline", visualStep: 47 }, // Latent Space
    { text: "STEP 3 — DENOISE TOWARDS MEANING.", scene: "pipeline", visualStep: 48 }, // Step 3 Badge
    { text: "We start with pure noise in latent space. The text embeddings enter the model through Cross-Attention arrows.", scene: "pipeline", visualStep: 49 }, // Arrows
    { text: "Inside, the model keeps asking:", scene: "pipeline", visualStep: 50 }, // Thinking
    { text: "“This looks like static… but the user wants an astronaut. How do I shift the noise to look less like non-astronaut noise?”", scene: "pipeline", visualStep: 51 }, // Comparison
    { text: "And it does it step by step. 20–50 iterations.", scene: "pipeline", visualStep: 52 }, // Counter
    { text: "Every step removes a little bit of “anti-astronaut” noise.", scene: "pipeline", visualStep: 53 }, // Removal
    { text: "When it draws the helmet, it attends to the word “astronaut.” When it draws legs, it attends to “horse.”", scene: "pipeline", visualStep: 54 }, // Attention
    { text: "That is Cross-Attention in action.", scene: "pipeline", visualStep: 55 }, // Cross-Attention Label
    { text: "STEP 4 — LATENT TO PIXELS.", scene: "pipeline", visualStep: 56 }, // Step 4 Badge
    { text: "The final result is still compressed math.", scene: "pipeline", visualStep: 57 }, // Math Block
    { text: "The VAE decoder inflates it back into high-resolution pixels.", scene: "pipeline", visualStep: 58 }, // Expand
    { text: "And you see the final image. This is why the system is stable, efficient, and controllable.", scene: "pipeline", visualStep: 59 }, // Final Image

    // PART IV: CONTROL
    { text: "PART IV — CONTROL SYSTEMS (DIRECTED DESIGN, NOT SLOT MACHINES)", scene: "control", visualStep: 60 },
    { text: "Early diffusion models were random. Like slot machines.", scene: "control", visualStep: 61 },
    { text: "You pulled the lever and hoped for the best.", scene: "control", visualStep: 62 },
    { text: "Today we have ControlNet → injects pose, structure, edges.", scene: "control", visualStep: 63 },
    { text: "And LoRAs → inject style, face, domain tweaks.", scene: "control", visualStep: 64 },
    { text: "Now you can say: “Keep this face, change lighting”", scene: "control", visualStep: 65 },
    { text: "“Use this exact pose”", scene: "control", visualStep: 66 },
    { text: "“Follow these edges”", scene: "control", visualStep: 67 },
    { text: "We moved from random generation → directed design.", scene: "control", visualStep: 68 },

    // PART V: FUTURE
    { text: "PART V — THE FUTURE (SPEED, CONTROL & VIDEO)", scene: "control", visualStep: 69 },
    { text: "Diffusion is now evolving into Transformers for better scaling across aspect ratios and resolutions.", scene: "control", visualStep: 70 },
    { text: "And video generation extends diffusion into the time dimension.", scene: "control", visualStep: 71 },
    { text: "The core challenge there is: Temporal consistency — making sure the astronaut doesn’t turn into a bear between frames.", scene: "control", visualStep: 72 },
    { text: "The modern solution is treating video as a single 3D data volume and denoising space + time together.", scene: "control", visualStep: 73 },

    // PART VI: INTERVIEW QUESTIONS
    { text: "PART VI — MAANG 2026 INTERVIEW QUESTIONS", scene: "interview", visualStep: 74 },
    { text: "Now let’s connect this to jobs.", scene: "interview", visualStep: 74 },

    // Q1
    { text: "Why not generate in pixel space?", scene: "interview", visualStep: 75 },
    { text: "Because latent space compresses features and reduces VRAM + compute load.", scene: "interview", visualStep: 76 },

    // Q2
    { text: "How does text control the image?", scene: "interview", visualStep: 77 },
    { text: "Through Cross-Attention, aligning specific visual regions with text tokens.", scene: "interview", visualStep: 78 },

    // Q3
    { text: "What killed GANs?", scene: "interview", visualStep: 79 },
    { text: "Training instability + Mode Collapse, solved by noise prediction in diffusion.", scene: "interview", visualStep: 80 },

    // Q4
    { text: "How to extend to video?", scene: "interview", visualStep: 81 },
    { text: "Treat video as a 3D volume, denoising time + space jointly for consistency.", scene: "interview", visualStep: 82 },

    { text: "These are the fundamentals interviewers expect you to know.", scene: "interview", visualStep: 83 },

    // RECAP & OUTRO
    { text: "RECAP — QUICK REWIND", scene: "interview", visualStep: 84 },
    { text: "GANs fought. Diffusion learned to undo noise.", scene: "interview", visualStep: 85 },
    { text: "Modern Text-to-Image is a 3-model pipeline: Text → embeddings, Images → latent space", scene: "interview", visualStep: 86 },
    { text: "Latent noise → denoised towards meaning, Latent → pixels", scene: "interview", visualStep: 87 },
    { text: "Elegant system. Simple intuition. Big impact.", scene: "interview", visualStep: 87 },
    { text: "So we began with: Everyday you use image generation models…", scene: "interview", visualStep: 87 }, // Callback
    { text: "And now you know why it actually works.", scene: "interview", visualStep: 87 },
    { text: "It’s not magic. It’s system design that reverses chaos, guided by language, powered by math, optimized by compression.", scene: "intro", visualStep: 2 },
    { text: "And this — this is why AI Engineering will dominate MAANG hiring in 2026.", scene: "interview", visualStep: 87 },
    { text: "Keep learning. Keep designing. Don't forget to like and subscribe. Thanks for watching.", scene: "intro", visualStep: 100 }
];
