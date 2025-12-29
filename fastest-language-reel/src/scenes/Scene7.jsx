import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Brain, Rocket, Heart, Share2 } from 'lucide-react';

// Scene 7: Summary & CTA - "Cache. Batch. Speculate."
const Scene7 = ({ speed = 1 }) => {
    const points = [
        { num: "1", icon: Layers, text: "Cache", sub: "Remember context" },
        { num: "2", icon: Zap, text: "Batch", sub: "Fill every cycle" },
        { num: "3", icon: Brain, text: "Speculate", sub: "Guess & verify" },
    ];

    useEffect(() => {
        const click = new Audio('/sfx/click.mp3');
        click.volume = 0.5;
        // Play click delayed for button appearance
        setTimeout(() => click.play().catch(() => { }), 2300 / speed);
    }, [speed]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 p-12 bg-black relative">

            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none" />

            <motion.h2
                className="text-5xl font-black text-white z-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <span className="text-primary glow-primary">Cache.</span> {" "}
                <span className="text-blue-400">Batch.</span> {" "}
                <span className="text-yellow-400">Speculate.</span>
            </motion.h2>

            <div className="flex gap-6 w-full max-w-4xl z-10 justify-center">
                {points.map((point, i) => (
                    <motion.div
                        key={i}
                        className="bg-gray-900 border border-gray-800 p-6 rounded-2xl flex flex-col items-center gap-4 flex-1"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: (0.3 + i * 0.2) / speed }}
                    >
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black font-black text-2xl">
                            {point.num}
                        </div>
                        <div className="p-4 bg-white/5 rounded-full">
                            <point.icon size={48} className="text-white" />
                        </div>
                        <p className="text-2xl font-bold text-white">{point.text}</p>
                        <p className="text-gray-400 text-sm">{point.sub}</p>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <motion.div
                className="text-center z-10 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 / speed }}
            >
                <p className="text-2xl text-gray-400 mb-6">Want more System Design?</p>

                <div className="flex gap-8 justify-center">
                    <motion.button
                        className="bg-white text-black px-12 py-6 rounded-full font-black text-3xl flex items-center gap-4 hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Rocket size={36} />
                        FOLLOW
                    </motion.button>
                </div>

                <div className="flex gap-6 justify-center mt-6">
                    <motion.div
                        className="flex items-center gap-2 text-gray-500 hover:text-red-500 cursor-pointer transition-colors"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Heart size={28} />
                        <span className="text-lg">Like</span>
                    </motion.div>
                    <motion.div
                        className="flex items-center gap-2 text-gray-500 hover:text-blue-400 cursor-pointer transition-colors"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Share2 size={28} />
                        <span className="text-lg">Share</span>
                    </motion.div>
                </div>
            </motion.div>

        </div>
    );
};

export default Scene7;
