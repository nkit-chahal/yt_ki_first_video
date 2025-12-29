import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 8: "Third: place stops at less obvious levels."
const Scene8 = () => {
    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-purple-900/10 z-0"
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.div
                className="solution-card text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
            >
                <div className="text-3xl text-gray-400 mb-2">Solution #3</div>
                <div className="text-5xl font-black text-purple-400 glow-secondary">
                    LESS OBVIOUS LEVELS
                </div>
            </motion.div>

            {/* Visualization */}
            <motion.div
                className="bg-gray-800 rounded-2xl p-6 mt-6 w-full max-w-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-500 line-through">Just below support</span>
                    <span className="text-red-400">❌</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-300">ATR-based / Structure</span>
                    <span className="text-green-400">✅</span>
                </div>
            </motion.div>

            <motion.div
                className="text-3xl text-gray-300 mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                Not where <span className="text-purple-400">everyone else</span> does
            </motion.div>
        </SceneWrapper>
    );
};

export default Scene8;
