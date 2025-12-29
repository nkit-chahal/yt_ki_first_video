import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, AlertTriangle } from 'lucide-react';

// P1_S7: The Problem
// "To serve 100M users with 175B param model... financially impossible."
const Part1_Scene7 = () => {
    return (
        <div className="w-full h-full bg-red-950 flex flex-col items-center justify-center text-white font-sans p-8 relative overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                {Array(20).fill(0).map((_, i) => (
                    <DollarSign key={i} size={100} className="absolute text-red-500" style={{ left: `${(i * 5) % 100}%`, top: `${(i * 17) % 100}%`, opacity: 0.2 }} />
                ))}
            </div>

            <motion.div
                className="z-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <motion.div
                    className="flex items-center justify-center gap-4 mb-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                >
                    <Users size={64} className="text-blue-400" />
                    <span className="text-6xl font-black">100,000,000</span>
                    <span className="text-3xl text-gray-400">users</span>
                </motion.div>

                <motion.div
                    className="text-4xl text-gray-400 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    × 175 Billion Parameters
                </motion.div>

                <motion.div
                    className="text-4xl text-gray-400 mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    × The Memory Wall
                </motion.div>

                {/* Result */}
                <motion.div
                    className="bg-black/50 border-4 border-red-500 p-8 rounded-3xl inline-flex items-center gap-4"
                    initial={{ scale: 0, rotate: -5 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 2, type: "spring" }}
                >
                    <AlertTriangle size={64} className="text-red-500" />
                    <div>
                        <p className="text-2xl text-gray-400">Result:</p>
                        <h1 className="text-5xl font-black text-red-500 uppercase">
                            Financially Impossible
                        </h1>
                    </div>
                </motion.div>
            </motion.div>

        </div>
    );
};

export default Part1_Scene7;
