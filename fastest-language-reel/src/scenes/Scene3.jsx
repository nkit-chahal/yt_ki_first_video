import React from 'react';
import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';

// Scene 3: The Race Animation
const LANGUAGES = [
    { name: 'Python', color: '#3776AB', emoji: '🐍', speed: 0.15 },
    { name: 'JavaScript', color: '#F7DF1E', emoji: '⚡', speed: 0.35 },
    { name: 'Go', color: '#00ADD8', emoji: '🐹', speed: 0.75 },
    { name: 'Rust', color: '#CE422B', emoji: '🦀', speed: 0.95 },
    { name: 'C++', color: '#00599C', emoji: '🔧', speed: 0.90 },
];

const Scene3 = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center relative overflow-hidden p-6">
            <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <Timer size={32} className="text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">THE RACE</h2>
            </motion.div>

            <div className="w-full max-w-sm space-y-4">
                {LANGUAGES.map((lang, i) => (
                    <div key={lang.name} className="relative">
                        {/* Track */}
                        <div className="h-12 bg-gray-900 rounded-full border border-gray-700 overflow-hidden relative">
                            {/* Progress Bar */}
                            <motion.div
                                className="absolute inset-y-0 left-0 rounded-full"
                                style={{ backgroundColor: lang.color }}
                                initial={{ width: '0%' }}
                                animate={{ width: `${lang.speed * 100}%` }}
                                transition={{ delay: 0.5 + i * 0.1, duration: 2, ease: "easeOut" }}
                            />

                            {/* Runner */}
                            <motion.div
                                className="absolute top-1/2 -translate-y-1/2 text-3xl"
                                initial={{ left: '5%' }}
                                animate={{ left: `${lang.speed * 85}%` }}
                                transition={{ delay: 0.5 + i * 0.1, duration: 2, ease: "easeOut" }}
                            >
                                {lang.emoji}
                            </motion.div>
                        </div>

                        {/* Label */}
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-mono text-white/70">
                            {lang.name}
                        </div>
                    </div>
                ))}
            </div>

            {/* Speed indicator */}
            <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
            >
                <p className="text-gray-400">Benchmark: Fibonacci(40)</p>
            </motion.div>
        </div>
    );
};

export default Scene3;
