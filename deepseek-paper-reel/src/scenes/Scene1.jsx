import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Medal, GraduationCap, BookOpen } from 'lucide-react';

// Scene 1: The Fix - "2.5 Years in Class"
// Visual: Gold medal intro, AI going to school concept
const Scene1 = () => {

    // SFX: Achievement ding
    useEffect(() => {
        const sfx = new Audio('/sfx/ding.mp3');
        sfx.volume = 0.3;
        setTimeout(() => sfx.play().catch(() => { }), 800);
    }, []);

    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center relative overflow-hidden p-6">

            {/* Golden Spotlight */}
            <motion.div
                className="absolute top-1/3 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Main Content */}
            <motion.div
                className="text-center z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
            >
                {/* Glowing Medal */}
                <motion.div
                    className="inline-block mb-6 relative"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                >
                    <motion.div
                        className="absolute inset-0 bg-yellow-400 blur-xl opacity-30"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <Medal size={100} className="text-yellow-400 relative z-10" />
                </motion.div>

                <motion.h1
                    className="text-4xl font-black text-white mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    THE FIX:
                </motion.h1>

                <motion.div
                    className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    2.5 YEARS IN CLASS
                </motion.div>
            </motion.div>

            {/* School Metaphor */}
            <motion.div
                className="mt-12 flex items-center gap-6 z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
            >
                <div className="flex items-center gap-2 bg-slate-800/60 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-700">
                    <GraduationCap size={24} className="text-blue-400" />
                    <span className="text-gray-300 text-sm">Sent AI to School</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/60 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-700">
                    <BookOpen size={24} className="text-green-400" />
                    <span className="text-gray-300 text-sm">Real Knowledge</span>
                </div>
            </motion.div>

            {/* Bottom Tagline */}
            <motion.p
                className="absolute bottom-12 text-cyan-400 text-sm font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
            >
                Not web scraping. Not random data. <span className="text-white font-bold">Education.</span>
            </motion.p>

        </div>
    );
};

export default Scene1;
