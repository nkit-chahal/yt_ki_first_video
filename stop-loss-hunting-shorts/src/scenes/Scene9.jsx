import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 9: "Stop hunting is real. But now you know how to avoid it."
const Scene9 = () => {
    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-gray-900 via-green-900/20 to-gray-900 z-0"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="flex flex-col items-center gap-8 relative z-10">
                <motion.div
                    className="text-4xl text-gray-300 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Stop hunting is <span className="text-amber-400 font-bold">REAL</span>
                </motion.div>

                <motion.div
                    className="w-32 h-1 bg-gray-600 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: 128 }}
                    transition={{ delay: 0.5 }}
                />

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <span className="text-4xl text-gray-300">But now you know</span>
                    <motion.div
                        className="text-6xl font-black text-green-400 glow-green mt-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.2, type: "spring" }}
                    >
                        HOW TO AVOID IT
                    </motion.div>
                </motion.div>

                <motion.div
                    className="text-7xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                >
                    🛡️
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene9;
