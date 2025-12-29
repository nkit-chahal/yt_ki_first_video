import React from 'react';
import { motion } from 'framer-motion';
import { Database, AlertTriangle } from 'lucide-react';

// P2_S10: New Problem
// "But this created a new problem: We solved compute, but we filled the memory with cache."
const Part2_Scene10 = () => {
    return (
        <div className="w-full h-full bg-yellow-950 flex flex-col items-center justify-center text-white font-sans p-8 relative overflow-hidden">

            <motion.div
                className="text-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <motion.div
                    className="flex items-center justify-center gap-4 mb-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                >
                    <AlertTriangle size={64} className="text-yellow-500" />
                    <h2 className="text-5xl font-black text-yellow-500">NEW PROBLEM</h2>
                </motion.div>

                {/* The Trade-off */}
                <motion.div
                    className="bg-black/50 p-10 rounded-3xl border border-yellow-500 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-3xl mb-6">
                        ✅ Solved: <span className="text-primary">Compute Bottleneck</span>
                    </p>
                    <p className="text-3xl">
                        ❌ Created: <span className="text-red-400">Memory Full of Cache</span>
                    </p>
                </motion.div>

                {/* VRAM Filling Up */}
                <motion.div
                    className="w-[500px] h-16 bg-gray-800 rounded-full overflow-hidden border-2 border-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-red-500"
                        initial={{ width: "20%" }}
                        animate={{ width: "95%" }}
                        transition={{ delay: 2, duration: 2 }}
                    />
                </motion.div>
                <motion.p
                    className="mt-4 text-xl text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4 }}
                >
                    VRAM Usage: <span className="text-red-400 font-bold">95%</span> (Cache)
                </motion.p>
            </motion.div>

        </div>
    );
};

export default Part2_Scene10;
