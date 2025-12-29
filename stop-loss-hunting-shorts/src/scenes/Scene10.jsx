import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 10: CTA - Subscribe
const Scene10 = () => {
    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-blue-900/20 z-0"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="flex flex-col items-center gap-8 relative z-10">
                <motion.div
                    className="text-5xl font-bold text-white text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Want to learn more?
                </motion.div>

                <motion.div
                    className="text-8xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                >
                    🔔
                </motion.div>

                <motion.div
                    className="bg-red-600 rounded-2xl px-12 py-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="text-5xl font-black text-white">SUBSCRIBE</span>
                </motion.div>

                <motion.div
                    className="text-3xl text-gray-300 text-center mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    for more trading tips
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene10;
