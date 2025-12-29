import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

// P3_S6: Continuous Batching
// "This is Continuous Batching."
const Part3_Scene6 = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center text-white font-sans p-8 relative overflow-hidden">

            {/* Glow Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/20 via-transparent to-transparent" />

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
                    This is...
                </motion.p>

                <motion.h1
                    className="text-8xl font-black uppercase text-yellow-400"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    style={{ textShadow: "0 0 80px rgba(250,204,21,0.5)" }}
                >
                    Continuous
                    <br />
                    Batching
                </motion.h1>

                <motion.div
                    className="mt-12 flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <Layers size={40} className="text-yellow-400" />
                    <span className="text-2xl text-gray-400">No gaps. No waiting.</span>
                </motion.div>
            </motion.div>

        </div>
    );
};

export default Part3_Scene6;
