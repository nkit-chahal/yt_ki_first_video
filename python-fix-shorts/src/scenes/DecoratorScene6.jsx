import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import { motion } from 'framer-motion';

const DecoratorScene6 = () => {
    const words = ["Clean.", "Modular.", "Zero Copy-Paste."];

    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-blue-900/10 z-0"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="flex flex-col items-center gap-8 relative z-10 h-full justify-center">
                {words.map((word, i) => (
                    <motion.div
                        key={i}
                        className="text-5xl font-black text-white"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.5 }}
                    >
                        {word}
                    </motion.div>
                ))}

                <motion.div
                    className="mt-12 flex flex-col items-center gap-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2, type: "spring" }}
                >
                    <div className="px-8 py-4 bg-red-600 text-white font-bold text-2xl rounded-full animate-pulse shadow-[0_0_30px_rgba(239,68,68,0.5)] cursor-pointer">
                        🔔 SUBSCRIBE
                    </div>
                    <div className="text-gray-400 text-sm font-mono mt-2">for more Design Patterns</div>
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default DecoratorScene6;
