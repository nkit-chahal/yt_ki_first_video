import React from 'react';
import { motion } from 'framer-motion';
import { HardDrive, Zap } from 'lucide-react';

// Scene 1: The Hook - 200ms vs <1ms
const Scene1 = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-16 p-12 relative">

            {/* Background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-16 bg-accent-green rounded-full opacity-20"
                        style={{ left: `${10 + i * 6}%` }}
                        animate={{ y: [-100, 1920] }}
                        transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, ease: "linear" }}
                    />
                ))}
            </div>

            {/* Title */}
            <motion.h1
                className="text-6xl font-black text-white text-center z-10"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                Your App is <span className="text-red-500">SLOW</span>
            </motion.h1>

            {/* The Problem - Disk */}
            <motion.div
                className="flex flex-col items-center gap-6 z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
            >
                <motion.div
                    className="w-40 h-40 bg-gray-800 border-4 border-red-500 rounded-2xl flex items-center justify-center"
                    animate={{ x: [-2, 2, -2] }}
                    transition={{ duration: 0.1, repeat: Infinity }}
                >
                    <HardDrive size={80} className="text-red-500" />
                </motion.div>

                <motion.span
                    className="text-8xl font-black text-red-500 font-mono glow-red"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    200ms
                </motion.span>
                <span className="text-2xl text-red-400 uppercase tracking-widest">Per Read</span>
            </motion.div>

            {/* VS Divider */}
            <motion.div
                className="text-4xl font-black text-gray-600 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                VS
            </motion.div>

            {/* The Solution - Redis */}
            <motion.div
                className="flex flex-col items-center gap-6 z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2, type: "spring" }}
            >
                <motion.div
                    className="w-48 h-48 bg-gray-800 border-4 border-accent-green rounded-2xl flex items-center justify-center shadow-[0_0_60px_rgba(46,160,67,0.4)]"
                >
                    <Zap size={100} className="text-accent-green fill-accent-green" />
                </motion.div>

                <motion.span
                    className="text-9xl font-black text-accent-green font-mono glow-green"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                >
                    &lt;1ms
                </motion.span>
                <span className="text-2xl text-accent-green uppercase tracking-widest">REDIS</span>
            </motion.div>
        </div>
    );
};

export default Scene1;
