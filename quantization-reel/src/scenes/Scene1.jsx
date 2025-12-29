import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 1: The Hook
const Scene1 = () => {
    return (
        <SceneWrapper>
            <Title>Database Class 🗄️</Title>

            <div className="flex flex-col items-center gap-8">
                <motion.div
                    className="font-mono text-3xl text-blue-300 bg-gray-800 p-8 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    db = Database()
                </motion.div>

                <motion.div
                    className="text-6xl font-bold text-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    × 100
                </motion.div>

                <motion.div
                    className="text-4xl text-yellow-400 font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    What happens? 🤔
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene1;
