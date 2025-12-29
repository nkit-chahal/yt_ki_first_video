import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Medal, Trophy, Zap } from 'lucide-react';

// Scene 0: The Hook - Victory First
// Visual: Bold statement with gold medal
const Scene0 = () => {

    // SFX: Medal ding
    useEffect(() => {
        const sfx = new Audio('/sfx/ding.mp3');
        sfx.volume = 0.3;
        setTimeout(() => sfx.play().catch(() => { }), 600);
    }, []);
    return (
        <div className="w-full h-full bg-gradient-to-b from-slate-950 via-slate-900 to-black flex flex-col items-center justify-center relative overflow-hidden p-6">

            {/* Spotlight effect */}
            <motion.div
                className="absolute top-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Main Title */}
            <motion.div
                className="text-center z-10 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
            >
                <motion.div
                    className="inline-block mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                    <Medal size={80} className="text-yellow-400" />
                </motion.div>

                <h1 className="text-5xl font-black text-white mb-4 leading-tight">
                    Open Source
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                        Beat GPT-5
                    </span>
                </h1>
            </motion.div>

            {/* Subtext */}
            <motion.div
                className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 px-6 py-4 rounded-2xl max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
            >
                <p className="text-slate-200 text-center text-sm leading-relaxed">
                    On the <span className="text-yellow-400 font-bold">hardest math problems</span> in the world
                </p>
            </motion.div>

            {/* Bottom tagline */}
            <motion.div
                className="absolute bottom-12 flex items-center gap-2 text-cyan-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <Zap size={20} className="animate-pulse" />
                <span className="text-sm font-mono uppercase tracking-wider">Here's How</span>
            </motion.div>

        </div>
    );
};

export default Scene0;
