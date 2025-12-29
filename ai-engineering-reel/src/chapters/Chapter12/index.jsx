import React from 'react';
import { motion } from 'framer-motion';
import AICharacter from '../../components/AICharacter';

// Scene 1: Journey Recap
export const Scene1 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <motion.h1
            className="text-9xl font-black text-zinc-800"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring" }}
        >
            🚀 What a Journey!
        </motion.h1>
        <div className="grid grid-cols-4 gap-6">
            {[
                "Foundation Models", "Evaluation",
                "Prompt Eng", "RAG",
                "Agents", "Fine-Tuning",
                "Data", "Optimization"
            ].map((topic, i) => (
                <motion.div
                    key={topic}
                    className="bg-[#FDFBF7] border-4 border-zinc-200 rounded-xl px-6 py-4 flex items-center justify-center font-bold text-center shadow-md text-zinc-600"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.0 + i * 1.0 }} // Sync: One topic every second
                    whileHover={{ scale: 1.1, borderColor: "#818cf8", color: "#4f46e5" }}
                >
                    {topic}
                </motion.div>
            ))}
        </div>
        <AICharacter mood="happy" action="wave" label="We did it!" />
    </div>
);

// Scene 2: Book Promo
export const Scene2 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <AICharacter mood="happy" action="pointing" label="Read it!" />
        <motion.div
            className="w-80 h-[450px] bg-gradient-to-br from-white to-zinc-100 border-8 border-zinc-800 rounded-xl flex flex-col items-center justify-center shadow-2xl relative"
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            transition={{ delay: 3.5, duration: 1 }} // Sync: "AI Engineering by Chip Huyen"
        >
            <div className="text-8xl mb-6">📚</div>
            <div className="text-6xl font-black text-center text-zinc-800 px-4">AI Engineering</div>
            <div className="text-3xl font-hand text-zinc-500 mt-4">by Chip Huyen</div>
            <motion.div
                className="absolute -bottom-8 bg-yellow-400 text-yellow-900 px-8 py-3 rounded-full font-bold text-4xl shadow-xl border-4 border-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 6.0, type: "spring" }} // Sync: "Highly Recommended"
            >
                Highly Recommended!
            </motion.div>
        </motion.div>
    </div>
);

// Scene 3: Call to Action (Comments)
export const Scene3 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <h2 className="text-8xl font-black text-zinc-700">What's Next?</h2>
        <div className="flex gap-16">
            <motion.div
                className="w-72 h-64 bg-[#FDFBF7] border-4 border-zinc-300 rounded-3xl flex flex-col items-center justify-center shadow-xl p-6"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.5 }} // Sync: "in the comments"
            >
                <div className="text-8xl mb-4">💬</div>
                <div className="text-4xl font-bold text-zinc-800">Comment Below</div>
                <div className="text-2xl text-zinc-500 mt-2 text-center">Which book should I summarize next?</div>
            </motion.div>
            <AICharacter mood="thinking" label="I'm listening..." />
        </div>
    </div>
);

// Scene 4: Outro
export const Scene4 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <motion.div
            className="flex items-center gap-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
        >
            <div className="text-9xl">❤️</div>
            <h1 className="text-8xl font-black text-zinc-800">Thanks!</h1>
        </motion.div>

        <div className="flex gap-10">
            <motion.div
                className="bg-red-600 text-white px-12 py-6 rounded-full text-6xl font-bold shadow-2xl flex items-center gap-4 cursor-pointer"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ delay: 2.0, repeat: Infinity, duration: 1.5 }} // Sync: "Subscribe"
                whileHover={{ scale: 1.1 }}
            >
                <span>🔔</span> Subscribe
            </motion.div>
        </div>

        <AICharacter mood="happy" action="wave" label="See you next time!" />
    </div>
);

const Chapter12Visualizer = ({ sceneIndex }) => {
    const scenes = [Scene1, Scene2, Scene3, Scene4];
    const SceneComponent = scenes[sceneIndex] || Scene1;
    return <SceneComponent />;
};

export default Chapter12Visualizer;
