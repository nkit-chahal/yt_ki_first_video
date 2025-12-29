import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

// P1_S8: The Cheat
// "They needed a way to cheat the physics of hardware. Here is how they did it."
const Part1_Scene8 = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center text-white font-sans p-8 relative overflow-hidden">

            {/* Glitch Effect Background */}
            <motion.div
                className="absolute inset-0 bg-primary/5"
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2 }}
            />

            <motion.div
                className="text-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <motion.p
                    className="text-3xl text-gray-400 mb-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    They needed a way to...
                </motion.p>

                <motion.h1
                    className="text-8xl font-black uppercase mb-8"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                >
                    <span className="text-primary" style={{ textShadow: "0 0 50px rgba(16,163,127,0.5)" }}>
                        CHEAT
                    </span>
                    <br />
                    <span className="text-white">THE PHYSICS</span>
                </motion.h1>

                <motion.div
                    className="flex items-center justify-center gap-4 text-2xl text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <Sparkles className="text-yellow-400" />
                    <span>Here is how they did it.</span>
                    <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity }}>
                        <ArrowRight size={28} />
                    </motion.div>
                </motion.div>
            </motion.div>

        </div>
    );
};

export default Part1_Scene8;
