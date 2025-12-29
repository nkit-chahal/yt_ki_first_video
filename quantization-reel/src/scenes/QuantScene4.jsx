import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';
import { Flame, Snowflake } from 'lucide-react';

const QuantScene4 = () => {
    return (
        <SceneWrapper>
            <div className="relative w-full h-full flex overflow-hidden">

                {/* LEFT: BEFORE (Hot) */}
                <motion.div
                    className="w-1/2 h-full bg-gradient-to-br from-red-900/50 via-orange-900/40 to-red-950/60 flex flex-col items-center justify-center relative border-r-2 border-white/10"
                    animate={{ x: [0, 0, '-100%'] }}
                    transition={{ delay: 4, duration: 0.8 }}
                >
                    <div className="flex flex-col items-center gap-6">
                        {/* Label */}
                        <div className="text-red-400 text-2xl font-black tracking-wider uppercase">BEFORE</div>

                        {/* LARGE CSS LAPTOP - Overheating */}
                        <div className="relative">
                            <motion.div
                                animate={{ rotate: [-1, 1, -1], y: [-2, 2, -2] }}
                                transition={{ duration: 0.15, repeat: Infinity }}
                            >
                                {/* Screen */}
                                <div className="w-40 h-28 bg-gray-800 rounded-t-2xl border-4 border-red-600 p-2 shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                                    <div className="w-full h-full bg-red-950 rounded-lg flex items-center justify-center">
                                        <div className="text-red-400 text-5xl">🔥</div>
                                    </div>
                                </div>
                                {/* Base */}
                                <div className="w-48 h-3 bg-gradient-to-b from-gray-400 to-gray-600 rounded-b-xl mx-auto"></div>
                            </motion.div>

                            {/* Rising Flames */}
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute text-orange-500"
                                    animate={{ y: [-20, -100], opacity: [1, 0], scale: [1, 1.5] }}
                                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.25 }}
                                    style={{ top: -10, left: `${10 + i * 20}%` }}
                                >
                                    <Flame size={32} fill="currentColor" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats - TIGHTLY GROUPED */}
                        <div className="text-center space-y-1">
                            <div className="text-red-300 text-xl font-bold">Slow math</div>
                            <div className="text-red-400 text-3xl font-black">RAM: 100%</div>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT: AFTER (Cool) */}
                <motion.div
                    className="w-1/2 h-full bg-gradient-to-br from-green-900/50 via-cyan-900/40 to-green-950/60 flex flex-col items-center justify-center relative"
                    animate={{ x: [0, 0, '-50%'], width: ['50%', '50%', '100%'] }}
                    transition={{ delay: 4, duration: 0.8 }}
                >
                    <div className="flex flex-col items-center gap-6">
                        {/* Label */}
                        <div className="text-green-400 text-2xl font-black tracking-wider uppercase">AFTER</div>

                        {/* LARGE CSS LAPTOP - Happy */}
                        <div className="relative">
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                {/* Screen */}
                                <div className="w-40 h-28 bg-gray-800 rounded-t-2xl border-4 border-green-500 p-2 shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                                    <div className="w-full h-full bg-green-950 rounded-lg flex items-center justify-center">
                                        <div className="text-green-400 text-5xl">😎</div>
                                    </div>
                                </div>
                                {/* Base */}
                                <div className="w-48 h-3 bg-gradient-to-b from-gray-400 to-gray-600 rounded-b-xl mx-auto"></div>
                            </motion.div>

                            {/* Snowflakes */}
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute text-cyan-400"
                                    animate={{ y: [-80, 20], opacity: [0, 1, 0], rotate: [0, 360] }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                                    style={{ top: -60, left: `${15 + i * 25}%` }}
                                >
                                    <Snowflake size={28} />
                                </motion.div>
                            ))}

                            {/* Wind Lines */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-12 h-1 bg-cyan-400/70 rounded-full"
                                    animate={{ x: [0, 50], opacity: [1, 0] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                                    style={{ right: -20, top: `${40 + i * 15}%` }}
                                />
                            ))}
                        </div>

                        {/* Stats - TIGHTLY GROUPED */}
                        <div className="text-center space-y-1">
                            <div className="text-green-300 text-xl font-bold">Fast math</div>
                            <div className="text-green-400 text-3xl font-black">RAM: 12%</div>
                        </div>
                    </div>
                </motion.div>

                {/* 8x SMALLER Badge */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 5, type: "spring" }}
                >
                    <div className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-10 py-5 rounded-full font-black text-4xl shadow-[0_0_80px_rgba(34,197,94,0.7)] whitespace-nowrap">
                        8x SMALLER
                    </div>
                </motion.div>

                {/* Bottom Text */}
                <motion.div
                    className="absolute bottom-6 left-0 right-0 text-center z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 5.5 }}
                >
                    <div className="text-4xl font-black text-green-300 drop-shadow-lg">
                        Your laptop finally breathes 😮‍💨
                    </div>
                </motion.div>

            </div>
        </SceneWrapper>
    );
};

export default QuantScene4;
