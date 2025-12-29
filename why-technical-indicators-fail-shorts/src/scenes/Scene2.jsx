import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 2: Core Problem - "Because indicators are lagging. They're built from past prices."
const Scene2 = () => {
    return (
        <SceneWrapper>
            <Title color="text-amber-400">The Problem ⚠️</Title>

            <div className="flex flex-col items-center gap-8 relative z-10">
                {/* Lagging visualization */}
                <motion.div
                    className="bg-gray-800 rounded-2xl p-8 border-2 border-amber-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                >
                    <div className="text-6xl font-black text-amber-400 glow-amber text-center">
                        LAGGING
                    </div>
                </motion.div>

                {/* Explanation */}
                <motion.div
                    className="flex flex-col items-center gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="text-4xl text-gray-300 text-center">
                        Built from
                    </div>
                    <motion.div
                        className="bg-gray-800 border border-gray-600 rounded-xl px-8 py-4"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <span className="text-5xl font-bold text-gray-400">📅 PAST PRICES</span>
                    </motion.div>
                </motion.div>

                {/* Arrow showing delay */}
                <motion.div
                    className="flex items-center gap-4 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className="text-3xl text-green-400">NOW</div>
                    <div className="text-4xl text-gray-500">←←←</div>
                    <div className="text-3xl text-gray-500">INDICATOR</div>
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene2;
