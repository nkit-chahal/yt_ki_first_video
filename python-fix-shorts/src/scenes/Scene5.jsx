import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 5: The Solution
const Scene5 = () => {
    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-purple-900/10 z-0"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            <Title color="text-purple-400">Singleton Pattern 🧙‍♂️</Title>

            <div className="flex flex-col items-center gap-8 relative z-10">
                <motion.div
                    className="bg-gray-800 border-2 border-purple-500 rounded-3xl p-8 text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                >
                    <div className="text-6xl font-black text-white mb-4">1</div>
                    <div className="text-2xl text-purple-300 font-mono">Object</div>
                </motion.div>

                <motion.div
                    className="text-4xl text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    ↓
                </motion.div>

                <motion.div
                    className="bg-gray-800 border-2 border-purple-500 rounded-3xl p-8 text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, type: "spring" }}
                >
                    <div className="text-6xl font-black text-white mb-4">♻️</div>
                    <div className="text-2xl text-purple-300 font-mono">Reuse</div>
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene5;
