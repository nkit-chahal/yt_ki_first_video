import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 3: The Problem
const Scene3 = () => {
    const problems = [
        { icon: "💾", text: "More Memory" },
        { icon: "🧹", text: "More Cleanup" },
        { icon: "🐛", text: "More Bugs" }
    ];

    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-red-900/20 z-0"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            <Title color="text-red-400">The Problem ⚠️</Title>

            <div className="flex flex-col gap-6 w-full max-w-md relative z-10">
                {problems.map((p, i) => (
                    <motion.div
                        key={i}
                        className="bg-red-900/40 border border-red-500 rounded-2xl p-6 flex items-center gap-6"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.3 }}
                    >
                        <span className="text-5xl">{p.icon}</span>
                        <span className="text-3xl font-bold text-white">{p.text}</span>
                    </motion.div>
                ))}
            </div>
        </SceneWrapper>
    );
};

export default Scene3;
