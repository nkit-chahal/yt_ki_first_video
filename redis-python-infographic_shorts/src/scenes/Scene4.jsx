import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Trash2 } from 'lucide-react';

// Scene 4: TTL Countdown - The Star Animation
const Scene4 = () => {
    const [countdown, setCountdown] = useState(5);
    const [exploded, setExploded] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(c => {
                if (c <= 1) {
                    setExploded(true);
                    return 0;
                }
                return c - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 p-12 relative">

            {/* Title */}
            <motion.div
                className="text-center z-10"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <h1 className="text-5xl font-black text-white mb-4">Time To Live</h1>
                <p className="text-2xl text-gray-400">Data that <span className="text-accent-blue">expires</span></p>
            </motion.div>

            {/* The Session Card with Countdown */}
            <AnimatePresence>
                {!exploded ? (
                    <motion.div
                        className={`relative bg-gray-900 border-4 rounded-3xl p-10 w-full max-w-lg ${countdown <= 2 ? 'border-red-500' : 'border-accent-blue'
                            }`}
                        animate={countdown <= 2 ? { x: [-5, 5, -5, 5, 0] } : {}}
                        transition={{ duration: 0.2, repeat: countdown <= 2 ? Infinity : 0 }}
                        exit={{ scale: 0, opacity: 0, rotate: 20 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-4 h-4 bg-accent-green rounded-full animate-pulse"></div>
                            <span className="text-white text-2xl font-mono">session:user_123</span>
                        </div>

                        <div className="text-gray-400 font-mono text-xl">
                            token: "abc123..."<br />
                            status: "active"
                        </div>

                        {/* Big Countdown Circle */}
                        <motion.div
                            className={`absolute -top-8 -right-8 w-32 h-32 rounded-full flex items-center justify-center text-5xl font-black font-mono ${countdown <= 2 ? 'bg-red-500 text-white' : 'bg-accent-blue text-black'
                                }`}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                        >
                            {countdown}
                        </motion.div>

                        {/* Progress Bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gray-700 rounded-b-3xl overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-accent-blue to-red-500"
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: 5, ease: "linear" }}
                            />
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        className="flex flex-col items-center gap-8"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                    >
                        {/* Explosion particles */}
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-6 h-6 bg-red-500 rounded-full"
                                initial={{ x: 0, y: 0, opacity: 1 }}
                                animate={{
                                    x: Math.cos(i * 30 * Math.PI / 180) * 200,
                                    y: Math.sin(i * 30 * Math.PI / 180) * 200,
                                    opacity: 0,
                                    scale: 0
                                }}
                                transition={{ duration: 0.8 }}
                            />
                        ))}

                        <Trash2 size={120} className="text-red-500" />
                        <span className="text-6xl font-black text-red-500">EXPIRED</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Text */}
            <motion.p
                className="text-2xl text-gray-400 text-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                No cron jobs. No cleanup scripts.
            </motion.p>
        </div>
    );
};

export default Scene4;
