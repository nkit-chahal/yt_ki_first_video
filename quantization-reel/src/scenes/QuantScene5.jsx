import React, { useState, useEffect } from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const QuantScene5 = () => {
    // Custom number counter loop
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            let start = 0;
            const end = 800;
            const duration = 1000;
            const stepTime = Math.abs(Math.floor(duration / end));

            const timer = setInterval(() => {
                start += 20;
                setCount(Math.min(start, end));
                if (start >= end) clearInterval(timer);
            }, stepTime);
        }, 2200); // Start counting when bar starts growing

        return () => clearTimeout(timeout);
    }, []);

    return (
        <SceneWrapper>
            <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">

                {/* Title */}
                <motion.div
                    className="absolute top-16 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="text-3xl font-bold text-white">The Shocker ⚡</div>
                </motion.div>

                {/* Comparison Container */}
                <div className="flex items-end gap-16 mt-8">

                    {/* Accuracy Loss (Tiny) */}
                    <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="text-red-400 font-bold text-xl mb-2">-1%</div>
                        <motion.div
                            className="w-20 bg-gradient-to-t from-red-600 to-red-400 rounded-t-lg"
                            initial={{ height: 0 }}
                            animate={{ height: 30 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        />
                        <div className="text-gray-400 text-sm mt-2">Accuracy</div>
                    </motion.div>

                    {/* Speed/Memory Gain (MASSIVE) */}
                    <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                    >
                        {/* Counting Number */}
                        <motion.div
                            className="text-green-400 font-black text-4xl mb-2 min-w-[120px] text-center"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ delay: 2.5, duration: 0.5 }}
                        >
                            +{count}%
                        </motion.div>

                        <motion.div
                            className="w-32 bg-gradient-to-t from-green-600 to-emerald-400 rounded-t-lg relative overflow-hidden"
                            initial={{ height: 0 }}
                            animate={{ height: 250 }}
                            transition={{ delay: 2, duration: 1, ease: "easeOut" }}
                        >
                            {/* Rocket particles inside */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute bg-white/40 rounded-full"
                                    animate={{
                                        y: [0, -260],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2
                                    }}
                                    style={{
                                        width: 4 + Math.random() * 4,
                                        height: 4 + Math.random() * 4,
                                        left: `${10 + Math.random() * 80}%`,
                                        bottom: 0
                                    }}
                                />
                            ))}
                        </motion.div>
                        <div className="text-green-300 font-bold text-sm mt-2">Speed & Memory</div>
                    </motion.div>
                </div>

                {/* Zap Effect */}
                <motion.div
                    className="absolute"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3, type: "spring" }}
                    style={{ top: '30%', right: '20%' }}
                >
                    <Zap className="w-16 h-16 text-yellow-400 fill-yellow-400" />
                </motion.div>

                {/* Verdict Card */}
                <motion.div
                    className="absolute bottom-24 bg-gray-800/90 border-2 border-green-500 p-5 rounded-2xl flex items-center gap-4 shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5 }}
                >
                    <div className="bg-green-500 rounded-full p-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-white font-bold text-lg">Model still works perfectly</div>
                        <div className="text-gray-400 text-sm">Human can't tell the difference</div>
                    </div>
                </motion.div>

            </div>
        </SceneWrapper>
    );
};

export default QuantScene5;
