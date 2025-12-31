export const NARRATION_STEPS = [
    // ========== HOOK SCENE (0:00 - 0:17) ==========
    { text: "So Meta's AI Chief released a new paper.", scene: "hook", visualStep: 0 },
    { text: "And is this the beginning of the end for LLMs?", scene: "hook", visualStep: 1 },
    { text: "Let's talk about it.", scene: "hook", visualStep: 2 },
    { text: "So most of you guys know that Meta's AI chief scientist Yann LeCun reportedly plans to leave to build his own startup but before that, he actually made a really interesting paper that I want to talk about.", scene: "hook", visualStep: 3 },

    // ========== JEPA INTRO SCENE (0:17 - 0:33) ==========
    { text: "So, the paper that he made with a bunch of different researchers from Meta is called VL-JEPA.", scene: "jepaIntro", visualStep: 4 },
    { text: "So this is a vision-language model built on a Joint Embedding Predictive Architecture.", scene: "jepaIntro", visualStep: 5 },
    { text: "So this is, I guess you could say, an extension of his I-JEPA architecture.", scene: "jepaIntro", visualStep: 6 },

    // ========== NON-GENERATIVE SCENE (0:33 - 1:05) ==========
    { text: "So this is really cool because this is from Meta's FAIR lab, of course, Yann LeCun is the one leading this.", scene: "nonGenerative", visualStep: 7 },
    { text: "And the super, super interesting thing that I found about this is that unlike models like ChatGPT that generate answers word by word...", scene: "nonGenerative", visualStep: 8 },
    { text: "VL-JEPA does something completely different.", scene: "nonGenerative", visualStep: 9 },
    { text: "This is a non-generative model.", scene: "nonGenerative", visualStep: 10 },
    { text: "So this model builds an internal understanding of what it sees—images, video—and then converts that understanding into words only if needed.", scene: "nonGenerative", visualStep: 11 },

    // ========== IMPLICATIONS SCENE (1:05 - 1:21) ==========
    { text: "Now because it learns in a semantic space instead of token space, it's faster, more efficient, and uses about half the parameters of traditional vision-language models while often performing better.", scene: "implications", visualStep: 12 },
    { text: "And this is crazy because what this means for robotics, wearables, agents, is super crazy.", scene: "implications", visualStep: 13 },
    { text: "So let's get into this.", scene: "implications", visualStep: 14 },

    // ========== TOKEN FLOW SCENE (1:21 - 1:59) ==========
    { text: "So one of the things I wanted to really point out here to show you guys how different this architecture is, is that it talks about the fact that usually this is a generative system.", scene: "tokenFlow", visualStep: 15 },
    { text: "So if you know what a generative system is... models like ChatGPT, GPT-4, Gemini...", scene: "tokenFlow", visualStep: 16 },
    { text: "This produces tokens or words, you know, one at a time.", scene: "tokenFlow", visualStep: 17 },
    { text: "It generates answers word by word. You know, you go from left to right.", scene: "tokenFlow", visualStep: 18 },
    { text: "And every output must be fully certain to exist.", scene: "tokenFlow", visualStep: 19 },
    { text: "So to answer a question, it literally can't know the final answer until it finishes the entire sentence.", scene: "tokenFlow", visualStep: 20 },
    { text: "This is generating it, which is very slow and very painful.", scene: "tokenFlow", visualStep: 21 },

    // ========== SEMANTIC THINKING SCENE (1:59 - 2:45) ==========
    { text: "But what the non-generative system means here is that it does not need to talk to think.", scene: "semanticThinking", visualStep: 22 },
    { text: "So essentially what it does is that it does not generate words by default...", scene: "semanticThinking", visualStep: 23 },
    { text: "Instead, it predicts the abstract representation, meaning directly.", scene: "semanticThinking", visualStep: 24 },
    { text: "And it's not constrained by specific words or sentences to exist.", scene: "semanticThinking", visualStep: 25 },
    { text: "So the reason that Yann LeCun is the one leading this... his belief is that intelligence equals understanding the world.", scene: "semanticThinking", visualStep: 26 },
    { text: "And language is simply just an output format, but thinking happens via concepts.", scene: "semanticThinking", visualStep: 27 },
    { text: "So this model builds an internal understanding of what it sees—images, video—and then converts that understanding into words if needed.", scene: "semanticThinking", visualStep: 28 },
    { text: "So essentially, thinking in a latent space, reasoning in meaning, and not predicting the next token or words via text.", scene: "semanticThinking", visualStep: 29 },
    { text: "So this model learns in a semantic space instead of token space.", scene: "semanticThinking", visualStep: 30 },

    // ========== DOT CLOUD SCENE (2:57 - 3:40) ==========
    { text: "So essentially what you're looking at in this video is where you have a map of the internal understanding over time.", scene: "dotCloud", visualStep: 31 },
    { text: "So each dot is essentially what the AI thinks is happening at that moment.", scene: "dotCloud", visualStep: 32 },
    { text: "So you can see the red ones, those are basically the instant guesses.", scene: "dotCloud", visualStep: 33 },
    { text: "But the blue dot is essentially the stabilized understanding.", scene: "dotCloud", visualStep: 34 },
    { text: "Now what most people are going to ask here is: how is this even different from a cheap vision model just describing exactly what the video is doing?", scene: "dotCloud", visualStep: 35 },
    { text: "Well, the short answer is that cheap models are like, 'I see a hand, I see a bottle,' but then the second, then the third, until it finishes the entire sentence.", scene: "dotCloud", visualStep: 36 },

    // ========== CCTV COMPARISON SCENE (3:40 - 4:26) ==========
    { text: "This looks at each frame, guesses what it sees, and spits out the text immediately.", scene: "cctvComparison", visualStep: 37 },
    { text: "So this is, you know, 'what does that look like?'", scene: "cctvComparison", visualStep: 38 },
    { text: "A cheap model is basically like a CCTV motion detector.", scene: "cctvComparison", visualStep: 39 },
    { text: "It just shouts out guesses: 'Movement! Hand! Bottle! Making up canister!'", scene: "cctvComparison", visualStep: 40 },
    { text: "And it's jumpy, inconsistent, with no memory, and it's basically reacting and not understanding.", scene: "cctvComparison", visualStep: 41 },
    { text: "But here, VL-JEPA does this instead: it's got a video stream, of course.", scene: "cctvComparison", visualStep: 42 },
    { text: "And it's got continuous meaning over time, building a stable understanding.", scene: "cctvComparison", visualStep: 43 },
    { text: "And it only labels the action once it's confident.", scene: "cctvComparison", visualStep: 44 },
    { text: "That's why you see red dot, which is an instant guess—well, it might be wrong, it might be bottle.", scene: "cctvComparison", visualStep: 45 },
    { text: "But then the blue dot is the stabilized meaning, it's a canister.", scene: "cctvComparison", visualStep: 46 },

    // ========== TEMPORAL MEANING SCENE (4:26 - 5:10) ==========
    { text: "So the reason that this actually matters a lot is because a cheap model is going to say 'I see a bottle, I see a bottle.'", scene: "temporal", visualStep: 47 },
    { text: "VL-JEPA is going to actually understand the action and say the action is picking up a canister.", scene: "temporal", visualStep: 48 },
    { text: "So the killer difference is of course time.", scene: "temporal", visualStep: 49 },
    { text: "Cheap models think in single frames and have no real sense of before and after.", scene: "temporal", visualStep: 50 },
    { text: "VL-JEPA thinks in temporal meaning and it knows when an action starts, continues, and ends.", scene: "temporal", visualStep: 51 },
    { text: "That's why it's extremely useful for robotics, wearables, agents, real-world planning.", scene: "temporal", visualStep: 52 },
    { text: "And why the dot cloud matters is that, you know, it's showing meaning over time, drifting slightly from frame to frame, then locking in once enough evidence exists.", scene: "temporal", visualStep: 53 },

    // ========== ARCHITECTURE SCENE (5:10 - 6:01) ==========
    { text: "So then of course you might want to understand the diagram of the architecture.", scene: "architecture", visualStep: 54 },
    { text: "So this is the VL-JEPA model architecture.", scene: "architecture", visualStep: 55 },
    { text: "But honestly, this was a bit confusing... So I decided to just get a simpler description.", scene: "architecture", visualStep: 56 },
    { text: "So I actually used a GPT image to get this image because this visualizes perfectly what the paper is talking about.", scene: "architecture", visualStep: 57 },
    { text: "And if, you know, this is too much, I also have this one right here.", scene: "architecture", visualStep: 58 },
    { text: "So language is optional, understanding is not.", scene: "architecture", visualStep: 59 },
    { text: "So basically, you know, the X-Encoder is the visual input, so the video frames.", scene: "architecture", visualStep: 60 },
    { text: "Then you have the Y-Encoder, which is the actual meaning, the encoded meanings from the words.", scene: "architecture", visualStep: 61 },
    { text: "Then of course you've got your comparator, so this is the VL-JEPA model architecture.", scene: "architecture", visualStep: 62 },
    { text: "If you wanted to know how this works: Visual input... X-Encoder... Then you have the Predictor...", scene: "architecture", visualStep: 63 },
    { text: "And so there's no heavy decoder during training. So VL-JEPA learns faster with better results for half the trainable parameters, which is pretty insane in machine learning terms.", scene: "architecture", visualStep: 64 },

    // ========== BENCHMARK SCENE (6:01 - 7:29) ==========
    { text: "Now if we look at tests of this, this is currently the best.", scene: "benchmark", visualStep: 65 },
    { text: "So we're looking at the scoreboard, which is where we can see the other ones... the different AI models.", scene: "benchmark", visualStep: 66 },
    { text: "We can see that VL-JEPA is currently the best.", scene: "benchmark", visualStep: 67 },
    { text: "You can see the number of parameters... 3.8 billion, 3.7...", scene: "benchmark", visualStep: 68 },
    { text: "And VL-JEPA is 1.6 billion parameters.", scene: "benchmark", visualStep: 69 },
    { text: "And two 3 billion parameters.", scene: "benchmark", visualStep: 70 },
    { text: "And compared to things like CLIP, SigLIP, huge... older, well-known vision models...", scene: "benchmark", visualStep: 71 },
    { text: "Compared to VL-JEPA Base, this is remarkably more efficient than other things that we're, you know, looking at.", scene: "benchmark", visualStep: 72 },
    { text: "So I think it is pretty incredible how efficient that is.", scene: "benchmark", visualStep: 73 },
    { text: "I mean if we continue to look over here...", scene: "benchmark", visualStep: 74 },
    { text: "You can see that the number of samples seen... You can see that VL-JEPA learns much faster and reaches higher caption quality and predictive accuracy than these other models with way less samples seen.", scene: "benchmark", visualStep: 75 },
    { text: "So even without SFT, which is, you know, fine-tuning, VL-JEPA understands videos better.", scene: "benchmark", visualStep: 76 },
    { text: "And this kills the idea that you need token generation to understand things.", scene: "benchmark", visualStep: 77 },
    { text: "Predicting meaning, you know, learns faster than predicting words.", scene: "benchmark", visualStep: 78 },
    { text: "Then of course you've got chart 2, which is zero-shot video classification.", scene: "benchmark", visualStep: 79 },
    { text: "Same thing. VL-JEPA pulls ahead and beats the competition.", scene: "benchmark", visualStep: 80 },
    { text: "And then if you look at the actual size of the models, you can see that VL-JEPA is super, super small.", scene: "benchmark", visualStep: 81 },
    { text: "So, you know, how generative models just, you know, tokens on tokens on tokens...", scene: "benchmark", visualStep: 82 },
    { text: "But if you're thinking about something that actually reasons like a human, you can see that VL-JEPA learns faster, is more efficient.", scene: "benchmark", visualStep: 83 },

    // ========== YANN LECUN QUOTE SCENE (7:53 - 8:52) ==========
    { text: "Of course here we have Yann LeCun talking about this stuff.", scene: "yannQuote", visualStep: 84 },
    { text: "'...during 16,000 hours, do the arithmetics and it's about 10^14 bytes.'", scene: "yannQuote", visualStep: 85 },
    { text: "'A four-year-old has seen as much visual data as the biggest LLM trained on the entire text ever produced.'", scene: "yannQuote", visualStep: 86 },
    { text: "'And so what that tells you is that there is way more information in the real world...'", scene: "yannQuote", visualStep: 87 },
    { text: "'...but it's also much more complicated. It's noisy. It's high dimensional. It's continuous.'", scene: "yannQuote", visualStep: 88 },
    { text: "'And basically the methods that are employed to train LLMs do not work in the real world.'", scene: "yannQuote", visualStep: 89 },
    { text: "'That explains why we have LLMs that can pass the bar exam or solve equations or compute integrals like college students and solve math problems.'", scene: "yannQuote", visualStep: 90 },
    { text: "'But we still don't have a domestic robot. They can, you know, do the chores in the house.'", scene: "yannQuote", visualStep: 91 },
    { text: "'We don't even have level five self-driving cars. I mean, we have them, but we cheat.'", scene: "yannQuote", visualStep: 92 },
    { text: "'I mean, we certainly don't have self-driving cars that can learn to drive in 20 hours of practice like any teenager.'", scene: "yannQuote", visualStep: 93 },

    // ========== SONIA JOSEPH QUOTE SCENE (8:52 - 9:53) ==========
    { text: "And then of course I saw him reposting this from Sonia Joseph.", scene: "soniaQuote", visualStep: 94 },
    { text: "'The thesis behind JEPA is that our current models are not predicting causal dynamics.'", scene: "soniaQuote", visualStep: 95 },
    { text: "'We don't simulate every atom to model intelligence...'", scene: "soniaQuote", visualStep: 96 },
    { text: "'JEPA taught me the importance of learning physics at the right level of abstraction.'", scene: "soniaQuote", visualStep: 97 },
    { text: "'Thank you @ylecun and the JEPA team—it was a privilege to work with you.'", scene: "soniaQuote", visualStep: 98 },
    { text: "'The thesis behind JEPA is that our current models are not predicting causal dynamics.'", scene: "soniaQuote", visualStep: 99 },
    { text: "'And if you predict in latent space and predict the future, then you're more likely to abstract away all of these pixel-level details.'", scene: "soniaQuote", visualStep: 100 },
    { text: "'For example, when we model this conversation right now, we don't have to model it down to the level of atoms.'", scene: "soniaQuote", visualStep: 101 },
    { text: "'That would be so computationally costly and so inefficient.'", scene: "soniaQuote", visualStep: 102 },
    { text: "'We model things at the representation level of abstraction it needs that enables it to plan in the physical world and be able to do counterfactual reasoning about objects that are moving around.'", scene: "soniaQuote", visualStep: 103 },

    // ========== REDDIT REACTION SCENE (9:53 - 10:25) ==========
    { text: "Now I did see a few comments on Reddit talking about the video saying that most of the actions it detects are wrong though.", scene: "reddit", visualStep: 104 },
    { text: "'Try to stop the video at any time to actually read what it says. It's really bad.'", scene: "reddit", visualStep: 105 },
    { text: "And someone also says, 'Wait, what? It's nowhere near most. Most of the actions were dead on.'", scene: "reddit", visualStep: 106 },
    { text: "And another person says that 'I stopped at like 5 times and they were all wrong.'", scene: "reddit", visualStep: 107 },
    { text: "'Made up a slice of pizza, made up that it was putting a cucumber on the table when it was nowhere near the table...'", scene: "reddit", visualStep: 108 },
    { text: "So, you know, maybe just maybe, I was completely distracted by how cool the dot cloud looked.", scene: "reddit", visualStep: 109 },
];
