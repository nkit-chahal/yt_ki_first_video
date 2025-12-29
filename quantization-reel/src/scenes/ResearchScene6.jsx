import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

// Scene 6: CTA - THE SUMMARY
const ResearchScene6 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 p-12 bg-bg-main relative">

            <motion.h2
                className="text-5xl font-black text-white z-10 text-center tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                The <span className="text-primary glow-primary">Formula</span>
            </motion.h2>

            {/* Steps Recap */}
            <div className="flex flex-col gap-4 w-full max-w-xl z-10 text-left">
                {[
                    { step: 1, text: 'Master the Math', color: 'text-primary' },
                    { step: 2, text: 'Code Everything', color: 'text-secondary' },
                    { step: 3, text: 'Read Research', color: 'text-accent' },
                    { step: 4, text: 'Build a Portfolio', color: 'text-primary' }
                ].map((item, i) => (
                    <motion.div
                        key={item.step}
                        className="arch-box flex items-center gap-6 text-3xl font-bold"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: (0.3 + i * 0.3) / speed }}
                    >
                        <span className={`text-5xl font-black ${item.color}`}>{item.step}</span>
                        <span className="text-white">{item.text}</span>
                    </motion.div>
                ))}
            </div>

            {/* Final Message */}
            <motion.div
                className="mt-8 p-6 border-2 border-dashed border-gray-500 rounded-2xl max-w-2xl text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8 / speed }}
            >
                <p className="text-gray-400 mb-4 text-xl">You don't need a PhD.</p>
                <p className="text-5xl font-black text-white glow-primary leading-tight">
                    You need an <span className="text-primary">Obsession.</span>
                </p>
            </motion.div>

            {/* CTA */}
            <motion.div
                className="arch-box-accent flex items-center gap-4 text-2xl mt-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.5 / speed, type: "spring" }}
            >
                <Zap size={40} fill="currentColor" />
                <span className="font-black uppercase tracking-widest">Follow for the Deep Dive</span>
            </motion.div>

        </div>
    );
};

export default ResearchScene6;
