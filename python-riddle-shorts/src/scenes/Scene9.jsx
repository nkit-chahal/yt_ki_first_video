import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Heart, Share2, Bell, MessageCircle } from 'lucide-react';

// Scene 9: CTA - Final Call to Action
const Scene9 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 p-12 relative">

            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
            </div>

            {/* Subtle floating particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-6 rounded-full bg-primary/20"
                        style={{ left: `${10 + i * 8}%` }}
                        animate={{ y: [-30, 1920] }}
                        transition={{
                            duration: 3 / speed,
                            delay: i * 0.2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Twitter Icon */}
            <motion.div
                className="z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.4 }}
            >
                <div className="icon-wrapper p-5 bg-primary/10">
                    <Twitter size={80} className="text-primary" strokeWidth={1.5} />
                </div>
            </motion.div>

            {/* Main CTA */}
            <motion.h1
                className="text-4xl font-bold text-text-dark text-center z-10 leading-tight"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                Want more
                <br />
                <span className="text-primary glow-primary text-5xl">System Design?</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="text-xl text-text-muted text-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 / speed }}
            >
                Netflix, Uber, Instagram & more!
            </motion.p>

            {/* Action Buttons */}
            <motion.div
                className="flex gap-5 mt-2 z-10"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 / speed }}
            >
                <motion.button
                    className="flex flex-col items-center gap-2 stat-card px-6 py-4"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <Heart size={36} className="text-accent" strokeWidth={1.8} />
                    <span className="font-semibold text-text-muted">Like</span>
                </motion.button>

                <motion.button className="flex flex-col items-center gap-2 stat-card px-6 py-4">
                    <Share2 size={36} className="text-secondary" strokeWidth={1.8} />
                    <span className="font-semibold text-text-muted">Share</span>
                </motion.button>

                <motion.button
                    className="flex flex-col items-center gap-2 stat-card px-6 py-4 border-primary/30"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <Bell size={36} className="text-primary" strokeWidth={1.8} />
                    <span className="font-semibold text-primary">Follow</span>
                </motion.button>
            </motion.div>

            {/* Comment prompt */}
            <motion.div
                className="flex items-center gap-3 text-lg text-text-muted z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 / speed }}
            >
                <MessageCircle size={24} className="text-primary" strokeWidth={1.8} />
                <span>Drop a 🔥 in the comments!</span>
            </motion.div>
        </div>
    );
};

export default Scene9;
