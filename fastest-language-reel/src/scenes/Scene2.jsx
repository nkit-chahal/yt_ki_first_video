import React from 'react';
import { motion } from 'framer-motion';

// Scene 2: The Contenders
const LANGUAGES = [
    { name: 'Python', color: '#3776AB', emoji: '🐍' },
    { name: 'JavaScript', color: '#F7DF1E', emoji: '⚡' },
    { name: 'C++', color: '#00599C', emoji: '🔧' },
    { name: 'Rust', color: '#CE422B', emoji: '🦀' },
    { name: 'Go', color: '#00ADD8', emoji: '🐹' },
];

const Scene2 = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center relative overflow-hidden p-6">
            <motion.h2
                className="text-3xl font-bold text-white mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                THE CONTENDERS
            </motion.h2>

            <div className="space-y-4 w-full max-w-sm">
                {LANGUAGES.map((lang, i) => (
                    <motion.div
                        key={lang.name}
                        className="flex items-center gap-4 p-4 rounded-xl border-2"
                        style={{ borderColor: lang.color, backgroundColor: `${lang.color}20` }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.15, type: "spring" }}
                    >
                        <span className="text-4xl">{lang.emoji}</span>
                        <span className="text-2xl font-bold text-white">{lang.name}</span>
                    </motion.div>
                ))}
            </div>

            <motion.p
                className="text-xl text-gray-400 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                Who will win? 🏆
            </motion.p>
        </div>
    );
};

export default Scene2;
