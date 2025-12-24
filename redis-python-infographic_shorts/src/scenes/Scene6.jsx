import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Bell, ThumbsUp, Zap } from 'lucide-react';

// Scene 6: Subscribe CTA
const Scene6 = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-16 p-12 relative">

            {/* Confetti Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-4 h-4 rounded-full ${i % 4 === 0 ? 'bg-red-500' :
                                i % 4 === 1 ? 'bg-accent-green' :
                                    i % 4 === 2 ? 'bg-accent-blue' : 'bg-yellow-400'
                            }`}
                        style={{ left: `${i * 4}%`, top: '-20px' }}
                        animate={{
                            y: [0, 1920],
                            x: [0, (i % 2 === 0 ? 80 : -80)],
                            rotate: [0, 360],
                            opacity: [1, 0]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            delay: i * 0.15,
                            ease: "easeIn"
                        }}
                    />
                ))}
            </div>

            {/* Redis Logo / Title */}
            <motion.div
                className="flex items-center gap-4 z-10"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <Zap size={64} className="text-accent-green fill-accent-green" />
                <span className="text-6xl font-black text-white">Redis</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
                className="text-3xl text-gray-400 text-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                Stop waiting. Start building.
            </motion.p>

            {/* Subscribe Button */}
            <motion.button
                className="flex items-center gap-4 bg-red-600 text-white font-bold text-3xl px-12 py-6 rounded-2xl shadow-[0_0_50px_rgba(220,38,38,0.5)] z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", bounce: 0.5 }}
                whileHover={{ scale: 1.05 }}
            >
                <Youtube size={40} />
                SUBSCRIBE
            </motion.button>

            {/* Bell + Like Row */}
            <motion.div
                className="flex gap-6 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <motion.button
                    className="flex items-center gap-3 bg-gray-800 text-white px-8 py-4 rounded-xl border border-gray-600"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 2 }}
                >
                    <Bell size={28} className="text-yellow-400" />
                    <span className="text-yellow-400 font-bold text-xl">Turn on</span>
                </motion.button>

                <motion.button
                    className="flex items-center gap-3 bg-gray-800 text-white px-8 py-4 rounded-xl border border-gray-600"
                >
                    <ThumbsUp size={28} className="text-accent-blue" />
                    <span className="font-bold text-xl">Like</span>
                </motion.button>
            </motion.div>

            {/* Thanks */}
            <motion.p
                className="text-2xl text-gray-500 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                Thanks for watching! 🚀
            </motion.p>
        </div>
    );
};

export default Scene6;
