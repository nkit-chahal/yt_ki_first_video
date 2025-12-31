import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Zap, Terminal } from 'lucide-react';

// Scene 2: Reveal - "Meet Cursor"
const Scene2 = ({ playbackSpeed = 1 }) => {
    const t = (val) => val / playbackSpeed;

    return (
        <div className="w-full h-full bg-[#090909] flex flex-col items-center justify-center relative overflow-hidden text-white">

            {/* Background Grid */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Logo Reveal */}
            <motion.div
                className="relative z-10"
                initial={{ scale: 2, opacity: 0, filter: "blur(10px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: t(0.8), ease: "circOut" }}
            >
                <div className="relative">
                    <MousePointer2 size={100} className="text-white relative z-10" fill="white" />
                    {/* Glow */}
                    <motion.div
                        className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-50"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: t(2), repeat: Infinity }}
                    />
                </div>
            </motion.div>

            {/* Title */}
            <motion.h1
                className="text-5xl font-black mt-8 z-10 tracking-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: t(0.3), duration: t(0.5) }}
            >
                CURSOR
            </motion.h1>

            {/* Subtitle */}
            <motion.div
                className="flex items-center gap-2 mt-4 text-gray-400 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: t(0.6), duration: t(0.5) }}
            >
                <Terminal size={16} />
                <span className="font-mono text-sm">Built on VS Code</span>
            </motion.div>

            {/* Features popping up */}
            <div className="absolute inset-0 z-0">
                {[
                    { text: "AI-First", x: "20%", y: "20%", rotate: -10 },
                    { text: "Smart", x: "80%", y: "30%", rotate: 10 },
                    { text: "Fast", x: "15%", y: "70%", rotate: 5 },
                    { text: "Pro", x: "85%", y: "80%", rotate: -5 },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-blue-500/20 font-black text-4xl"
                        style={{ left: item.x, top: item.y, rotate: item.rotate }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: t(0.8 + i * 0.1), type: "spring" }}
                    >
                        {item.text}
                    </motion.div>
                ))}
            </div>

        </div>
    );
};

export default Scene2;
