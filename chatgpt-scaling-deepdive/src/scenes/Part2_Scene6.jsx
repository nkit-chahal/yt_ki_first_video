import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Database } from 'lucide-react';

// P2_S6: The Solution
// "The solution was KV Caching."
const Part2_Scene6 = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center text-white font-sans p-8 relative overflow-hidden">

            {/* Glow Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

            <motion.div
                className="z-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <motion.p
                    className="text-3xl text-gray-400 mb-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    The solution was...
                </motion.p>

                <motion.h1
                    className="text-9xl font-black uppercase text-primary"
                    initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    style={{ textShadow: "0 0 80px rgba(16,163,127,0.6)" }}
                >
                    KV CACHING
                </motion.h1>

                <motion.div
                    className="mt-12 flex items-center justify-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <Lock size={40} className="text-primary" />
                    <span className="text-2xl text-gray-400">Keys & Values, frozen in memory.</span>
                    <Database size={40} className="text-primary" />
                </motion.div>
            </motion.div>

        </div>
    );
};

export default Part2_Scene6;
