import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Bell, FileText, Github, Sparkles, Play } from 'lucide-react';

// Scene 7: CTA - Subscribe Animation
// Visual: Warm theme with subscribe button
const Scene7 = ({ playbackSpeed = 1 }) => {

    // Helper to scale time
    const t = (val) => val / playbackSpeed;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #F5F0E8 0%, #EDE6DA 50%, #E8DFD0 100%)' }}>

            {/* Subtle decoration */}
            <motion.div
                className="absolute top-20 left-20 w-32 h-32 rounded-full"
                style={{ background: 'rgba(196, 167, 125, 0.2)' }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: t(4), repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-40 h-40 rounded-full"
                style={{ background: 'rgba(217, 74, 56, 0.1)' }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: t(5), repeat: Infinity }}
            />

            {/* Paper Title */}
            <motion.div
                className="text-center mb-8 z-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: t(0.5) }}
            >
                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-2">
                    <FileText size={16} />
                    <span>Research Paper</span>
                </div>
                <h1 className="text-3xl font-black text-[#8B7355]">
                    2.5 Years in Class
                </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
                className="text-xl text-gray-800 text-center mb-10 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: t(0.5), duration: t(0.5) }}
            >
                The Future of <span className="text-[#D94A38] font-bold">Open Source AI</span>
                <br />
                <span className="text-gray-500 text-base">Less noise. More knowledge.</span>
            </motion.p>

            {/* Subscribe Button */}
            <motion.div
                className="relative z-10 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: t(0.8), duration: t(0.5), type: "spring" }}
            >
                <motion.button
                    className="relative flex items-center gap-3 bg-[#D94A38] text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Youtube size={28} />
                    SUBSCRIBE
                    <motion.div
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: t(0.5), repeat: Infinity, repeatDelay: t(1) }}
                    >
                        <Bell size={20} />
                    </motion.div>
                </motion.button>
            </motion.div>

            {/* Channel CTA */}
            <motion.div
                className="flex items-center gap-2 bg-white px-6 py-3 rounded-full z-10 shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: t(1.2), duration: t(0.5) }}
            >
                <Play size={18} className="text-[#C4A77D]" />
                <span className="text-gray-600 text-sm">
                    Visit channel for <span className="text-gray-800 font-bold">point-to-point reviews</span>
                </span>
            </motion.div>

            {/* Bottom Links */}
            <motion.div
                className="absolute bottom-10 flex items-center gap-6 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: t(1.5), duration: t(0.5) }}
            >
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Github size={18} />
                    <span>Paper: arXiv</span>
                </div>
                <div className="w-px h-4 bg-gray-300" />
                <span className="text-gray-400 text-sm">
                    Papers no one else is reading
                </span>
            </motion.div>

        </div>
    );
};

export default Scene7;
