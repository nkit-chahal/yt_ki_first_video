import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 2: The Answer
const Scene2 = () => {
    return (
        <SceneWrapper>
            <Title color="text-red-400">100 Objects! 📦</Title>

            <div className="grid grid-cols-5 gap-4 max-w-lg">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-16 h-16 bg-blue-500/30 border-2 border-blue-400 rounded-lg flex items-center justify-center text-xl"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                    >
                        🗄️
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="text-2xl text-gray-400 mt-8 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                ...and counting
            </motion.div>
        </SceneWrapper>
    );
};

export default Scene2;
