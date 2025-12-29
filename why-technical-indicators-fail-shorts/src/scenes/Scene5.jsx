import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 5: Real Problem Setup - "But here's the real problem: everyone watches the same levels."
const Scene5 = () => {
    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-purple-900/10 z-0"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.div
                className="text-4xl text-gray-400 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                But here's the
            </motion.div>

            <motion.div
                className="text-7xl font-black text-purple-400 glow-secondary mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
            >
                REAL PROBLEM
            </motion.div>

            {/* Multiple traders visualization */}
            <motion.div
                className="flex gap-4 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="text-6xl"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                    >
                        👤
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="text-4xl text-gray-300 mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
            >
                Everyone watches the
                <br />
                <span className="text-5xl font-bold text-purple-400">SAME LEVELS</span>
            </motion.div>
        </SceneWrapper>
    );
};

export default Scene5;
