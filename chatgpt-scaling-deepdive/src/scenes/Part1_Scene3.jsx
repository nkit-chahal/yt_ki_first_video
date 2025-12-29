import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock } from 'lucide-react';

// P1_S3: Doing Nothing
// "It is arguably the most powerful calculator... doing absolutely nothing."
const Part1_Scene3 = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center relative overflow-hidden text-white font-sans p-8">

            <div className="w-full max-w-4xl relative">

                {/* Header */}
                <div className="flex justify-between items-end mb-4 px-4">
                    <h2 className="text-3xl text-gray-400 font-mono">GPU_CORE_01</h2>
                    <div className="text-xl text-green-500 font-mono">ONLINE</div>
                </div>

                {/* The Graph */}
                <div className="h-64 border-l-2 border-b-2 border-gray-700 relative bg-gray-900/50 rounded-tr-xl overflow-hidden p-4 flex items-end">

                    {/* Grid Lines */}
                    <div className="absolute inset-0 grid grid-rows-4 gap-4 pointer-events-none opacity-20">
                        <div className="border-b border-gray-500 w-full" />
                        <div className="border-b border-gray-500 w-full" />
                        <div className="border-b border-gray-500 w-full" />
                        <div className="border-b border-gray-500 w-full" />
                    </div>

                    {/* The Line - Flatlining */}
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                        <motion.path
                            d="M0,100 L50,100 L100,100 L150,100 L200,100 L250,100 L300,100 L800,100"
                            fill="none"
                            stroke="#ef4444"
                            strokeWidth="4"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 4, ease: "linear" }}
                        />
                    </svg>

                    {/* Dynamic Text Overlay */}
                    <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
                    >
                        <motion.div
                            className="text-4xl font-bold text-white bg-black/50 px-6 py-3 rounded-xl border border-white/20 backdrop-blur-sm"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: [0, 1, 1, 0], y: 0 }}
                            transition={{ delay: 0.5, duration: 2.5, times: [0, 0.1, 0.9, 1] }}
                        >
                            MOST POWERFUL CALCULATOR
                        </motion.div>
                        <motion.div
                            className="mt-4 text-5xl font-black text-red-500 bg-black/80 px-8 py-4 rounded-xl border-2 border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.4)]"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 1.2, 1, 1], opacity: 1 }}
                            transition={{ delay: 3.2, duration: 0.5 }}
                        >
                            DOING ABSOLUTELY NOTHING
                        </motion.div>
                    </motion.div>

                    {/* Text Overlay IDLE */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                    >
                        <div className="text-[120px] font-black text-red-500/20 tracking-widest uppercase">
                            IDLE
                        </div>
                    </motion.div>
                </div>

                {/* Metrics */}
                <div className="flex justify-between mt-8">
                    <motion.div
                        className="bg-gray-900 border border-gray-700 p-6 rounded-2xl w-64 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <div className="text-gray-500 text-sm mb-1 uppercase">Utilization</div>
                        <div className="text-5xl font-mono text-white">0<span className="text-2xl text-red-500">%</span></div>
                    </motion.div>

                    <motion.div
                        className="bg-gray-900 border border-gray-700 p-6 rounded-2xl w-64 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        <div className="text-gray-500 text-sm mb-1 uppercase">Power Draw</div>
                        <div className="text-5xl font-mono text-white">700<span className="text-2xl text-gray-500">W</span></div>
                    </motion.div>

                    <motion.div
                        className="bg-gray-900 border border-gray-700 p-6 rounded-2xl w-64 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                    >
                        <div className="text-gray-500 text-sm mb-1 uppercase">Compute</div>
                        <div className="text-5xl font-mono text-red-500">None</div>
                    </motion.div>
                </div>

            </div>

        </div>
    );
};

export default Part1_Scene3;
