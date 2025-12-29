import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import StickFigure from '../components/StickFigure';

// Scene 1: The Hook - "Which Language is FASTEST?"
const Scene1 = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center relative overflow-hidden p-8">
            {/* Background pulse */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/30"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Stick Figure thinking */}
            <motion.div
                className="text-white mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
            >
                <StickFigure expression="thinking" label="You (Developer)" />
            </motion.div>

            {/* Speech bubble */}
            <motion.div
                className="bg-white text-black px-6 py-4 rounded-2xl rounded-bl-none relative mb-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
            >
                <Zap size={24} className="inline text-yellow-500 mr-2" />
                <span className="text-xl font-bold">Which is THE FASTEST?</span>
            </motion.div>

            {/* Main Question */}
            <motion.h1
                className="text-4xl font-black text-center leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
            >
                <span className="text-white">CODING LANGUAGE</span>
                <br />
                <span className="text-yellow-400">SPEED TEST</span>
            </motion.h1>
        </div>
    );
};

export default Scene1;
