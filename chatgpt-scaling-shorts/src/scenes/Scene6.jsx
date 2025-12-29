import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

// Scene 6: Speculative Decoding - "Three words for the price of one!"
const Scene6 = ({ speed = 1 }) => {
    const words = ["The", "sky", "is"];

    useEffect(() => {
        const typing = new Audio('/sfx/typing.mp3');
        typing.volume = 0.25;

        const success = new Audio('/sfx/success.mp3');
        success.volume = 0.3;

        // Play typing for words
        setTimeout(() => typing.play().catch(() => { }), 800 / speed);

        // Play success for verify
        setTimeout(() => success.play().catch(() => { }), 2500 / speed);

    }, [speed]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 p-12 bg-bg-main relative">

            <motion.h2
                className="text-5xl font-black text-white z-10 text-center uppercase leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Speculative <span className="text-blue-400 glow-secondary">Decoding</span>
            </motion.h2>

            <div className="flex items-center justify-center gap-8 w-full max-w-5xl z-10">

                {/* Draft Model */}
                <motion.div
                    className="flex flex-col items-center gap-4 bg-gray-800 p-8 rounded-2xl border-2 border-blue-400/50 w-64"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 / speed }}
                >
                    <Bot size={80} className="text-blue-400" />
                    <p className="text-xl font-bold text-white">Tiny Model</p>
                    <p className="text-gray-400 text-sm">Fast & Cheap</p>
                </motion.div>

                {/* Arrow with Words Flying */}
                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-2">
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                className="bg-blue-600 px-4 py-2 rounded-lg text-white font-bold text-xl shadow-lg"
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: (0.8 + i * 0.3) / speed, type: "spring" }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.8 / speed }}
                    >
                        <ArrowRight size={60} className="text-primary" strokeWidth={3} />
                    </motion.div>
                </div>

                {/* Main Model */}
                <motion.div
                    className="flex flex-col items-center gap-4 bg-gray-900 p-8 rounded-2xl border-4 border-primary shadow-[0_0_50px_rgba(16,163,127,0.3)] w-64"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 / speed }}
                >
                    <Bot size={100} className="text-primary" />
                    <p className="text-2xl font-bold text-white">GPT-4</p>
                    <motion.div
                        className="bg-primary/20 px-6 py-2 rounded-full flex items-center gap-2 border border-primary"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.5 / speed }}
                    >
                        <CheckCircle size={24} className="text-primary" />
                        <span className="text-white font-bold">Verified!</span>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="mt-4 p-6 bg-blue-900/30 border border-blue-500 rounded-xl text-center max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 / speed }}
            >
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Sparkles size={28} className="text-yellow-400" />
                    <p className="text-2xl text-white font-black">3 words for the price of 1!</p>
                    <Sparkles size={28} className="text-yellow-400" />
                </div>
                <p className="text-gray-400">The big model just... checks if it's right.</p>
            </motion.div>

        </div>
    );
};

export default Scene6;
