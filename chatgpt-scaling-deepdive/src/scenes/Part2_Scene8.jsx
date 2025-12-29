import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, StickyNote, Eye } from 'lucide-react';

// P2_S8: Glancing
// "Now, when the model predicts the next word, it doesn't re-read the book. It just glances at its notes."
const Part2_Scene8 = () => {
    return (
        <div className="w-full h-full bg-bg-main flex items-center justify-center text-white font-sans p-8 gap-16">

            {/* Old Way: Re-reading */}
            <motion.div
                className="flex flex-col items-center gap-6 opacity-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
            >
                <div className="relative">
                    <BookOpen size={120} className="text-gray-500" />
                    <div className="absolute inset-0 flex items-center justify-center text-6xl">❌</div>
                </div>
                <p className="text-2xl text-gray-500 line-through">Re-read the book</p>
            </motion.div>

            {/* Arrow */}
            <motion.div
                className="text-6xl text-primary"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
            >
                →
            </motion.div>

            {/* New Way: Glancing */}
            <motion.div
                className="flex flex-col items-center gap-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
            >
                <div className="relative">
                    <StickyNote size={120} className="text-primary" />
                    <motion.div
                        className="absolute -top-4 -right-4"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        <Eye size={40} className="text-yellow-400" />
                    </motion.div>
                </div>
                <p className="text-3xl text-primary font-bold">Glance at notes</p>
                <p className="text-xl text-gray-400">Instant lookup from cache</p>
            </motion.div>

        </div>
    );
};

export default Part2_Scene8;
