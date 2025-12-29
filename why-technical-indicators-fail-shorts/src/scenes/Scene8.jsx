import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 8: Solution Part 2 - "The raw data... before it gets averaged and delayed."
const Scene8 = () => {
    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-blue-900/10 z-0"
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="flex flex-col items-center gap-8 relative z-10">
                <motion.div
                    className="text-5xl font-bold text-white text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    The RAW data...
                </motion.div>

                {/* Before processing */}
                <motion.div
                    className="flex flex-col items-center gap-4 mt-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="text-3xl text-gray-400">Before it gets</div>

                    <div className="flex gap-4">
                        <motion.div
                            className="bg-red-900/40 border border-red-500 rounded-xl px-6 py-3"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <span className="text-2xl text-red-400 line-through">Averaged</span>
                        </motion.div>
                        <motion.div
                            className="bg-red-900/40 border border-red-500 rounded-xl px-6 py-3"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.0 }}
                        >
                            <span className="text-2xl text-red-400 line-through">Delayed</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Clean chart visualization */}
                <motion.div
                    className="bg-gray-800 rounded-2xl p-8 border-2 border-green-500 mt-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.3, type: "spring" }}
                >
                    <div className="text-3xl text-gray-400 mb-4 text-center">Clean Price Chart</div>
                    <div className="flex items-end gap-2 h-24">
                        {[40, 60, 55, 75, 70, 90, 85, 100].map((h, i) => (
                            <motion.div
                                key={i}
                                className="w-8 bg-gradient-to-t from-green-500 to-green-300 rounded-t"
                                style={{ height: `${h}%` }}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: 1.5 + i * 0.1 }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene8;
