import React from 'react';
import { motion } from 'framer-motion';
import { Dice5 } from 'lucide-react';

// P4_S5: The Gamble
// "So, they decided to gamble. This is Speculative Decoding."
const Part4_Scene5 = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center text-white font-sans p-8 relative overflow-hidden">

            {/* Glow Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />

            <motion.p
                className="text-3xl text-gray-400 mb-8 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                So, they decided to...
            </motion.p>

            <motion.div
                className="flex items-center gap-6 z-10"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
            >
                <Dice5 size={80} className="text-red-500" />
                <h1 className="text-9xl font-black text-red-500 uppercase">
                    GAMBLE
                </h1>
            </motion.div>

            <motion.div
                className="mt-12 z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <h2 className="text-5xl font-black text-blue-400" style={{ textShadow: "0 0 40px rgba(96,165,250,0.5)" }}>
                    SPECULATIVE DECODING
                </h2>
            </motion.div>

        </div>
    );
};

export default Part4_Scene5;
