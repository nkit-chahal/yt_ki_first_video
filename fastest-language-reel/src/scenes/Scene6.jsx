import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import StickFigure from '../components/StickFigure';

// Scene 6: CTA - Comment Your Pick!
const Scene6 = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-purple-900 via-black to-cyan-900 flex flex-col items-center justify-center relative overflow-hidden p-8">

            {/* Floating emojis background */}
            {['🐍', '⚡', '🔧', '🦀', '🐹'].map((emoji, i) => (
                <motion.div
                    key={i}
                    className="absolute text-3xl opacity-20"
                    style={{ left: `${10 + i * 18}%`, top: `${15 + (i % 2) * 60}%` }}
                    animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                >
                    {emoji}
                </motion.div>
            ))}

            {/* Stick figure asking */}
            <motion.div
                className="text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <StickFigure expression="happy" label="" />
            </motion.div>

            <motion.h1
                className="text-3xl font-black text-white text-center z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
            >
                WHICH ONE IS
                <br />
                <span className="text-yellow-400">YOUR FAVORITE?</span>
            </motion.h1>

            {/* Comment CTA */}
            <motion.div
                className="mt-8 flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <MessageCircle size={28} className="text-cyan-400" />
                <span className="text-xl font-bold text-white">COMMENT BELOW!</span>
            </motion.div>

            {/* Controversial statement to drive comments */}
            <motion.p
                className="mt-8 text-base text-gray-300 text-center bg-black/50 px-4 py-2 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                Hot take: Python devs are crying 😂
            </motion.p>
        </div>
    );
};

export default Scene6;
