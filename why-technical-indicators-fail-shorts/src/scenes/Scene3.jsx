import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 3: Timing Issue - "By the time RSI says 'oversold'... the move is already over."
const Scene3 = () => {
    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-red-900/10 z-0"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="flex flex-col items-center gap-6 relative z-10">
                {/* RSI Display */}
                <motion.div
                    className="bg-gray-800 rounded-2xl p-6 border border-purple-500 w-full max-w-md"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="text-2xl text-gray-400 mb-2">RSI Indicator</div>
                    <div className="flex items-center justify-between">
                        <span className="text-5xl font-black text-green-400">30</span>
                        <span className="text-3xl text-green-400 font-bold">← OVERSOLD</span>
                    </div>
                </motion.div>

                {/* Arrow down */}
                <motion.div
                    className="text-6xl text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    ↓
                </motion.div>

                {/* Price already moved */}
                <motion.div
                    className="bg-red-900/40 border-2 border-red-500 rounded-2xl p-8 text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                >
                    <div className="text-4xl font-bold text-red-400 mb-2">
                        Move Already Over
                    </div>
                    <motion.div
                        className="text-6xl"
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                    >
                        📉 → 📈
                    </motion.div>
                </motion.div>

                {/* Too late text */}
                <motion.div
                    className="text-5xl font-black text-red-500 glow-red"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                >
                    TOO LATE!
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene3;
