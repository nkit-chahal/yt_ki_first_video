import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, ArrowDown, Clock } from 'lucide-react';

// Scene 2: The Bottleneck - "Waiting for Data"
const Scene2 = ({ speed = 1 }) => {


    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 p-12 bg-bg-main relative">

            <motion.h2
                className="text-5xl font-black text-white z-10 text-center leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Stuck <span className="text-red-500">Waiting</span> for Data
            </motion.h2>

            <div className="flex flex-col items-center gap-0 w-full max-w-3xl z-10 relative">

                {/* The Model (Huge) */}
                <motion.div
                    className="w-full bg-gray-900 border-4 border-gray-700 rounded-2xl p-8 flex justify-center items-center"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 / speed }}
                >
                    <div className="text-center">
                        <Database size={120} className="text-gray-500 mx-auto mb-4" />
                        <p className="text-4xl font-bold text-white">GPT-4 Weights</p>
                        <p className="text-xl text-gray-400">Terabytes of Data</p>
                    </div>
                </motion.div>

                {/* The Pipe (with animated data blobs) */}
                <div className="h-32 w-8 bg-gray-800 border-x-2 border-gray-600 relative overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-4 h-4 bg-red-500 rounded-full left-1/2 -translate-x-1/2"
                            initial={{ y: -20 }}
                            animate={{ y: 150 }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "linear"
                            }}
                        />
                    ))}
                    <ArrowDown size={24} className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-600" />
                </div>

                {/* The GPU (Fast but Waiting) */}
                <motion.div
                    className="w-2/3 bg-primary/20 border-4 border-primary rounded-2xl p-8 flex justify-center items-center shadow-[0_0_50px_rgba(16,163,127,0.3)]"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 / speed }}
                >
                    <div className="text-center">
                        <Cpu size={100} className="text-primary mx-auto mb-4" />
                        <p className="text-4xl font-bold text-white">GPU Core</p>
                        <motion.p
                            className="text-xl text-gray-300 flex items-center justify-center gap-2"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <Clock size={20} /> Waiting for data...
                        </motion.p>
                    </div>
                </motion.div>

            </div>

            <motion.div
                className="mt-6 p-6 bg-red-900/30 border border-red-500 rounded-xl text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 / speed }}
            >
                <p className="text-2xl text-red-200 font-bold">Memory Bandwidth Bound ⚠️</p>
                <p className="text-gray-400 mt-2">The GPU isn't stuck doing math. It's stuck waiting!</p>
            </motion.div>

        </div>
    );
};

export default Scene2;
