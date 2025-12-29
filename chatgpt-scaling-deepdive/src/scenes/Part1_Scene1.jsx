import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, DollarSign, Zap } from 'lucide-react';

// P1_S1: The Luxury Car & Mathematical Violence
// "Deep inside a data center... H100... Mathematical Violence."
const Part1_Scene1 = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center relative overflow-hidden text-white font-sans p-8">

            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />

            <div className="relative z-10 flex flex-col items-center">

                {/* The H100 Chip */}
                <motion.div
                    className="relative mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="bg-gray-900 w-64 h-64 rounded-3xl border-2 border-gray-700 flex items-center justify-center shadow-[0_0_80px_rgba(16,163,127,0.3)]">
                        <Cpu size={150} className="text-primary" strokeWidth={1} />
                    </div>

                    {/* Price Tag */}
                    <motion.div
                        className="absolute -top-4 -right-8 bg-green-600 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, type: "spring" }}
                    >
                        <DollarSign size={20} />
                        <span className="text-2xl font-black">30,000</span>
                    </motion.div>
                </motion.div>

                {/* Dynamic Captions */}
                <div className="h-12 mb-2 flex items-center justify-center relative w-full">
                    <motion.p
                        className="text-2xl text-gray-400 absolute"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 2.5, times: [0, 0.1, 0.9, 1] }}
                    >
                        Deep inside a data center...
                    </motion.p>
                    <motion.p
                        className="text-2xl text-gray-300 font-bold absolute"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ delay: 2.5, duration: 3, times: [0, 0.1, 0.9, 1] }}
                    >
                        A piece of silicon...
                    </motion.p>
                    <motion.p
                        className="text-2xl text-green-400 font-bold absolute"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 5.5 }}
                    >
                        Costs as much as a luxury car
                    </motion.p>
                </div>

                {/* H100 Name */}
                <motion.h2
                    className="text-5xl font-black text-primary mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                >
                    The H100
                </motion.h2>

                {/* Mathematical Violence */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3, type: "spring" }}
                >
                    <p className="text-xl text-gray-400 mb-2">A beast capable of</p>
                    <h1 className="text-6xl font-black uppercase tracking-tight">
                        <span className="text-white">Mathematical </span>
                        <span className="text-red-500" style={{ textShadow: "0 0 30px rgba(239,68,68,0.5)" }}>
                            Violence
                        </span>
                    </h1>
                    <motion.div
                        className="mt-4 flex items-center justify-center gap-3 text-2xl text-yellow-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4 }}
                    >
                        <Zap size={28} />
                        <span className="font-mono font-bold">1,000 TFLOPS</span>
                    </motion.div>
                </motion.div>

            </div>

        </div>
    );
};

export default Part1_Scene1;
