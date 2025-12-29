import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 6: Outro
const Scene6 = () => {
    const words = ["Simple.", "Efficient.", "Easy to maintain."];

    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-green-900/10 z-0"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="flex flex-col items-center gap-8 relative z-10">
                {words.map((word, i) => (
                    <motion.div
                        key={i}
                        className="text-5xl font-black text-white"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.4 }}
                    >
                        {word}
                    </motion.div>
                ))}

                <motion.div
                    className="mt-12 text-6xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: "spring" }}
                >
                    ✅
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene6;
