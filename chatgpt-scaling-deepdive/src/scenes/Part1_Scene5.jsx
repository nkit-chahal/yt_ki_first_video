import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Droplet } from 'lucide-react';

// P1_S5: Ferrari vs Coffee Stirrer
// "The chip is a Ferrari engine, but we are feeding it fuel through a coffee stirrer."
const Part1_Scene5 = () => {
    return (
        <div className="w-full h-full flex font-sans relative">

            {/* Left Side: The Ferrari (Compute) */}
            <div className="w-1/2 h-full bg-gray-900 flex flex-col items-center justify-center p-8 border-r border-gray-700">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-[140px] filter drop-shadow-[0_0_40px_rgba(239,68,68,0.6)]"
                >
                    🏎️
                </motion.div>
                <motion.h2
                    className="mt-6 text-4xl font-black text-red-500 uppercase"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Ferrari Engine
                </motion.h2>
                <motion.p
                    className="text-xl text-gray-400 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    1,000 TFLOPS Compute
                </motion.p>
            </div>

            {/* Center: "Fed By" */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black font-black text-xl px-5 py-3 rounded-full z-10 uppercase"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
            >
                Fed By
            </motion.div>

            {/* Right Side: The Straw (Memory) */}
            <div className="w-1/2 h-full bg-black flex flex-col items-center justify-center p-8">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="relative"
                >
                    <div className="text-[140px]">☕</div>
                    {/* Highlight the tiny stirrer */}
                    <motion.div
                        className="absolute top-12 left-[58px] w-2 h-16 bg-yellow-400 rounded-full"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                    />
                </motion.div>
                <motion.h2
                    className="mt-6 text-4xl font-black text-yellow-500 uppercase"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2 }}
                >
                    Coffee Stirrer
                </motion.h2>
                <motion.p
                    className="text-xl text-gray-400 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.3 }}
                >
                    3 TB/s Bandwidth
                </motion.p>
            </div>

        </div>
    );
};

export default Part1_Scene5;
