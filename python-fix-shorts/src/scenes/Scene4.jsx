import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 4: The Need
const Scene4 = () => {
    return (
        <SceneWrapper>
            <Title>Created Once 🎯</Title>

            <div className="flex flex-col items-center gap-8">
                <motion.div
                    className="text-[8rem]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                >
                    🗄️
                </motion.div>

                <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    {["App", "API", "Service", "Worker"].map((label, i) => (
                        <motion.div
                            key={i}
                            className="bg-green-800/50 border border-green-500 px-4 py-2 rounded-lg text-green-300 font-bold"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                        >
                            {label}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-3xl text-gray-400 text-center mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    Shared Everywhere
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene4;
