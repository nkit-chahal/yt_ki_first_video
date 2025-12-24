import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle } from 'lucide-react';

// Scene 1: THE HOOK - Light Theme
const Scene1 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 p-12">

            {/* Pulsing Question Mark */}
            <motion.div
                className="relative"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5, duration: 0.5 / speed }}
            >
                <motion.div
                    className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 1 / speed, repeat: Infinity }}
                />
                <HelpCircle size={200} className="text-primary relative" strokeWidth={2.5} />
            </motion.div>

            {/* Hook Text */}
            <motion.h1
                className="text-6xl font-black text-text-dark text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 / speed }}
            >
                Can <span className="text-primary glow-primary">YOU</span> solve this?
            </motion.h1>

            {/* Subtitle */}
            <motion.div
                className="flex items-center gap-3 text-xl text-text-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 / speed }}
            >
                <MessageCircle size={36} className="text-secondary" />
                <span className="text-2xl font-medium">Comment your answer below!</span>
            </motion.div>
        </div>
    );
};

export default Scene1;
