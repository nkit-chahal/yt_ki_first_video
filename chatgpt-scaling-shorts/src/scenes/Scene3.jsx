import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, RefreshCw, Zap } from 'lucide-react';

// Scene 3: KV Cache
const Scene3 = ({ speed = 1 }) => {
    // Visualizing tokens as blocks
    const tokens = ["The", "cat", "sat", "on", "the"];

    useEffect(() => {
        // Pop sound for stacking tokens
        const pop = new Audio('/sfx/pop.mp3');
        pop.volume = 0.15;

        tokens.forEach((_, i) => {
            setTimeout(() => {
                pop.currentTime = 0;
                pop.play().catch(() => { });
            }, (500 + i * 200) / speed);
        });

        // Ding for new token
        setTimeout(() => {
            const ding = new Audio('/sfx/ding.mp3');
            ding.volume = 0.5;
            ding.play().catch(() => { });
        }, 2000 / speed);

    }, [speed]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 p-12 bg-bg-main relative">

            <motion.h2
                className="text-5xl font-black text-white z-10 text-center uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                KV <span className="text-primary glow-primary">Cache</span>
            </motion.h2>

            <motion.p
                className="text-2xl text-gray-400 z-10 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 / speed }}
            >
                Don't Re-Compute History.
            </motion.p>

            <div className="w-full max-w-4xl z-10 flex gap-4 overflow-hidden justify-center items-end h-[400px]">

                {/* Past Tokens (Cached) */}
                {tokens.map((token, i) => (
                    <motion.div
                        key={i}
                        className="w-32 bg-gray-900 border border-primary/50 rounded-t-lg flex flex-col items-center justify-end pb-4 relative"
                        initial={{ height: 0 }}
                        animate={{ height: 200 + (i * 20) }}
                        transition={{ delay: (0.5 + i * 0.2) / speed }}
                    >
                        <div className="absolute inset-x-0 top-0 h-1 bg-primary shadow-[0_0_20px_#10a37f]" />
                        <span className="text-gray-500 font-mono mb-2">Key: {i}</span>
                        <span className="text-2xl font-bold text-white mb-4">"{token}"</span>
                        <div className="absolute top-1/2 text-primary/30">
                            <Layers size={40} />
                        </div>
                    </motion.div>
                ))}

                {/* New Token (Active) */}
                <motion.div
                    className="w-32 bg-white flex flex-col items-center justify-end pb-4 rounded-t-lg relative"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 350, opacity: 1 }}
                    transition={{ delay: 2 / speed }}
                >
                    <div className="absolute top-4 animate-bounce">
                        <Zap size={40} className="text-black" />
                    </div>
                    <span className="text-black font-bold text-3xl mb-4">?</span>
                </motion.div>

            </div>

            <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 / speed }}
            >
                <p className="text-primary text-xl font-bold">Only compute the NEW token.</p>
            </motion.div>

        </div>
    );
};

export default Scene3;
