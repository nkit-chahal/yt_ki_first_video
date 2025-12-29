import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 6: "So what do you do? First: use mental stops."
const Scene6 = () => {
    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-green-900/10 z-0"
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.div
                className="text-4xl text-gray-400 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                So what do you do?
            </motion.div>

            <motion.div
                className="solution-card text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
            >
                <div className="text-3xl text-gray-400 mb-2">Solution #1</div>
                <div className="text-5xl font-black text-green-400 glow-green">
                    MENTAL STOPS
                </div>
                <div className="text-3xl text-gray-300 mt-4">
                    🧠 Don't show your hand
                </div>
            </motion.div>

            <motion.div
                className="mt-8 text-6xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                🤫
            </motion.div>
        </SceneWrapper>
    );
};

export default Scene6;
