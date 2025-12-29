import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 9: Balanced Conclusion - "Indicators aren't useless. They're just not enough."
const Scene9 = () => {
    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 z-0"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="flex flex-col items-center gap-8 relative z-10">
                {/* Not useless */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="text-4xl text-gray-300">Indicators</span>
                    <motion.div
                        className="text-5xl font-bold text-amber-400 mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        aren't useless
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <motion.div
                    className="w-32 h-1 bg-gray-600 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: 128 }}
                    transition={{ delay: 0.6 }}
                />

                {/* Just not enough */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <span className="text-4xl text-gray-300">They're just</span>
                    <motion.div
                        className="text-7xl font-black text-blue-400 glow-blue mt-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.1, type: "spring" }}
                    >
                        NOT ENOUGH
                    </motion.div>
                </motion.div>

                {/* Balance visual */}
                <motion.div
                    className="flex items-center gap-6 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                >
                    <div className="text-center">
                        <div className="text-4xl">📊</div>
                        <div className="text-lg text-gray-400">Indicators</div>
                    </div>
                    <div className="text-4xl text-gray-500">+</div>
                    <div className="text-center">
                        <div className="text-4xl">📈</div>
                        <div className="text-lg text-gray-400">Price Action</div>
                    </div>
                    <div className="text-4xl text-gray-500">=</div>
                    <div className="text-center">
                        <div className="text-4xl">✅</div>
                        <div className="text-lg text-green-400">Edge</div>
                    </div>
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene9;
