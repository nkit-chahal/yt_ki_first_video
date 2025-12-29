import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 6: Self-Fulfilling - "When a million traders see RSI at 70 and sell... that creates the reversal."
const Scene6 = () => {
    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-amber-900/10 z-0"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="flex flex-col items-center gap-6 relative z-10">
                {/* Million traders */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="text-4xl text-gray-400">When</div>
                    <motion.div
                        className="text-7xl font-black text-amber-400 glow-amber"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                    >
                        1,000,000
                    </motion.div>
                    <div className="text-4xl text-gray-400 mt-2">traders see RSI at 70...</div>
                </motion.div>

                {/* Sell action */}
                <motion.div
                    className="flex items-center gap-4 mt-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="bg-red-900/60 border-2 border-red-500 rounded-xl px-8 py-4">
                        <span className="text-5xl font-black text-red-400">SELL</span>
                    </div>
                    <span className="text-5xl">🔥</span>
                </motion.div>

                {/* Creates reversal */}
                <motion.div
                    className="mt-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                >
                    <div className="text-3xl text-gray-400 mb-2">That creates the</div>
                    <div className="text-6xl font-black text-purple-400 glow-secondary">
                        REVERSAL
                    </div>
                </motion.div>

                {/* Self-fulfilling */}
                <motion.div
                    className="mt-4 bg-gray-800/80 border border-gray-600 rounded-xl px-6 py-3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.8, type: "spring" }}
                >
                    <span className="text-2xl text-gray-300">🔄 Self-fulfilling prophecy</span>
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene6;
