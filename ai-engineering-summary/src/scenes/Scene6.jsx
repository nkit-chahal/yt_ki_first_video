import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Medal, Star } from 'lucide-react';
import StickFigure from '../components/StickFigure';

// Scene 6: Speciale (Gold Medal)
// Visual: DeepSeek Speciale variant winning Gold
const Scene6 = () => {

    // SFX: Victory celebration
    useEffect(() => {
        const sfx = new Audio('/sfx/success.mp3');
        sfx.volume = 0.3;
        setTimeout(() => sfx.play().catch(() => { }), 800);
    }, []);
    return (
        <div className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col items-center justify-center relative overflow-hidden p-6">

            {/* Confetti / Sparkles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: -10
                    }}
                    animate={{
                        y: window.innerHeight + 10,
                        rotate: 360
                    }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                />
            ))}

            <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
            >
                <div className="inline-block relative">
                    <motion.div
                        className="absolute inset-0 bg-yellow-400 blur-2xl opacity-20"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />
                    <Medal size={120} className="text-yellow-400 relative z-10" />
                </div>

                <h1 className="text-4xl font-black text-white mt-6 tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
                        GOLD MEDAL
                    </span>
                </h1>
                <p className="text-gray-400 mt-2">International Math Olympiad</p>
            </motion.div>

            <motion.div
                className="bg-slate-800/80 backdrop-blur border border-slate-700 p-6 rounded-2xl w-full max-w-xs"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-bold">DeepSeek Speciale</span>
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <motion.div
                        className="bg-blue-500 h-full"
                        initial={{ width: 0 }}
                        animate={{ width: "95%" }}
                        transition={{ delay: 1.5, duration: 1 }}
                    />
                </div>
                <div className="flex justify-between mt-4 text-xs text-gray-500">
                    <span>Performance</span>
                    <span className="text-white font-mono">SOTA</span>
                </div>
            </motion.div>

            {/* Stick figure cheering */}
            <motion.div
                className="mt-8 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <StickFigure expression="happy" label="Open Source is Back!" />
            </motion.div>

        </div>
    );
};

export default Scene6;
