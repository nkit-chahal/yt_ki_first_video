import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';
import { Brain, Smartphone } from 'lucide-react';

const QuantScene6 = () => {
    return (
        <SceneWrapper>
            <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">

                {/* Background Shockwave (on Click) */}
                <motion.div
                    className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
                    style={{ top: '45%' }}
                >
                    <motion.div
                        className="w-1 h-1 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 opacity-50"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 200, opacity: [0.8, 0] }}
                        transition={{ delay: 2.5, duration: 1 }}
                    />
                </motion.div>

                {/* Big Brain - Shrinking into Phone */}
                <div className="relative flex flex-col items-center z-10">

                    {/* The Brain */}
                    <motion.div
                        className="relative z-10"
                        initial={{ scale: 1, y: 0 }}
                        animate={{
                            scale: [1, 1, 0.3],
                            y: [0, 0, 120]
                        }}
                        transition={{ delay: 1, duration: 1.5, times: [0, 0.3, 1] }}
                    >
                        <Brain className="w-40 h-40 text-pink-400" />

                        {/* Brain Glow */}
                        <motion.div
                            className="absolute inset-0 bg-pink-500/20 rounded-full blur-xl"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>

                    {/* Label: Big Brain */}
                    <motion.div
                        className="text-pink-300 font-black text-3xl mt-4"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: [1, 1, 0] }}
                        transition={{ delay: 1, duration: 1, times: [0, 0.3, 1] }}
                    >
                        BIG BRAIN
                    </motion.div>
                </div>

                {/* The Phone - Receiving the Brain */}
                <motion.div
                    className="absolute flex flex-col items-center z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2 }}
                    style={{ top: '45%' }}
                >
                    <div className="relative">
                        {/* Phone Frame */}
                        <div className="w-28 h-48 bg-gray-800 rounded-3xl border-4 border-gray-600 flex items-center justify-center relative overflow-hidden">

                            {/* Screen */}
                            <div className="absolute inset-2 bg-gradient-to-br from-green-900 to-cyan-900 rounded-2xl" />

                            {/* Brain Inside (appears after merge) */}
                            <motion.div
                                className="relative z-10"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
                            >
                                <Brain className="w-12 h-12 text-pink-300" />
                            </motion.div>

                            {/* Glow Effect on Merge */}
                            <motion.div
                                className="absolute inset-0 bg-green-400/30 rounded-2xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ delay: 2.5, duration: 0.5 }}
                            />
                        </div>

                        {/* Satisfying Click Effect */}
                        <motion.div
                            className="absolute inset-0 border-4 border-green-400 rounded-3xl"
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: [0, 1, 0], scale: [1, 1.3, 1.5] }}
                            transition={{ delay: 2.5, duration: 0.5 }}
                        />
                    </div>

                    {/* Label: Small Device */}
                    <motion.div
                        className="text-green-300 font-bold text-xl mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3 }}
                    >
                        SMALL DEVICE
                    </motion.div>
                </motion.div>

                {/* Final Tagline */}
                <motion.div
                    className="absolute bottom-32 text-center z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5 }}
                >
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                        That's Quantization.
                    </div>
                </motion.div>

                {/* Subscribe Button */}
                <motion.div
                    className="absolute bottom-12 z-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: [1, 1.05, 1] }}
                    transition={{ delay: 4, duration: 1, repeat: Infinity }}
                >
                    <div className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-xl shadow-[0_0_40px_rgba(220,38,38,0.5)] flex items-center gap-2">
                        🔔 SUBSCRIBE
                    </div>
                </motion.div>

            </div>
        </SceneWrapper>
    );
};

export default QuantScene6;
