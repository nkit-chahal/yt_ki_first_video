import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 9: Proof - Same Object Every Time
const Scene9 = () => {
    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-green-900/10 z-0"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            <Title color="text-green-400">Proof ✅</Title>

            <div className="flex flex-col items-center gap-6 relative z-10 w-full max-w-lg">
                <motion.div
                    className="bg-gray-800 p-6 rounded-xl border border-gray-600 w-full font-mono text-xl"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    <span className="text-blue-300">db1</span> = Database()
                </motion.div>

                <motion.div
                    className="bg-gray-800 p-6 rounded-xl border border-gray-600 w-full font-mono text-xl"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <span className="text-blue-300">db2</span> = Database()
                </motion.div>

                <motion.div
                    className="bg-green-900/50 p-8 rounded-2xl border-2 border-green-500 w-full text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                >
                    <div className="font-mono text-2xl text-white mb-2">db1 is db2</div>
                    <div className="text-5xl font-black text-green-400">TRUE ✅</div>
                </motion.div>

                <motion.div
                    className="text-2xl text-gray-400 font-bold mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    One connection. Zero waste.
                </motion.div>

                <motion.div
                    className="mt-8 flex flex-col items-center gap-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2, type: "spring" }}
                >
                    <div className="px-8 py-4 bg-red-600 text-white font-bold text-2xl rounded-full animate-pulse shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                        🔔 SUBSCRIBE
                    </div>
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene9;
