import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Sparkles } from 'lucide-react';

// P3_S9: Final Trick
// "But there was one final trick left. The most dangerous one."
const Part3_Scene9 = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center text-white font-sans p-8">

            <motion.p
                className="text-3xl text-gray-400 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                But there was one final trick left...
            </motion.p>

            <motion.div
                className="flex items-center gap-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
            >
                <AlertTriangle size={80} className="text-red-500" />
                <h1 className="text-7xl font-black text-red-500 uppercase">
                    The Most Dangerous One
                </h1>
            </motion.div>

            <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <Sparkles size={48} className="text-yellow-400 animate-pulse" />
            </motion.div>

        </div>
    );
};

export default Part3_Scene9;
