import React from 'react';
import { motion } from 'framer-motion';

// Scene 1: THE HOOK - Iconic "N" animation vibe
const Scene1 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 p-12 relative bg-black">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center opacity-20 pointer-events-none blur-sm" />
            <div className="absolute inset-0 bg-black/80" />

            {/* Big N Animation */}
            <motion.div
                className="relative z-10"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 / speed, ease: "easeOut" }}
            >
                <div className="text-[200px] font-black text-primary tracking-tighter" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    N
                </div>
            </motion.div>

            {/* Hook Text */}
            <motion.h1
                className="text-5xl font-bold text-white text-center leading-tight z-10 max-w-2xl"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 / speed, duration: 0.8 }}
            >
                How does <span className="text-primary glow-primary">Netflix</span> know
                <br />
                what you want to watch?
            </motion.h1>

            {/* Subtext */}
            <motion.p
                className="text-2xl text-gray-400 text-center z-10 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 / speed }}
            >
                (Before YOU do?)
            </motion.p>
        </div>
    );
};

export default Scene1;
