import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 7: "Second: widen your stops. Give the trade room to breathe."
const Scene7 = () => {
    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-blue-900/10 z-0"
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.div
                className="solution-card text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
            >
                <div className="text-3xl text-gray-400 mb-2">Solution #2</div>
                <div className="text-5xl font-black text-blue-400 glow-blue">
                    WIDEN YOUR STOPS
                </div>
            </motion.div>

            {/* Visualization */}
            <motion.div
                className="flex flex-col items-center gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <div className="flex items-center gap-4">
                    <div className="text-center">
                        <div className="text-red-400 text-xl mb-2">Tight ❌</div>
                        <div className="w-16 h-2 bg-red-500 rounded" />
                    </div>
                    <div className="text-4xl text-gray-500">→</div>
                    <div className="text-center">
                        <div className="text-green-400 text-xl mb-2">Wide ✅</div>
                        <div className="w-32 h-2 bg-green-500 rounded" />
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="text-3xl text-gray-300 mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                Give the trade <span className="text-blue-400">room to breathe</span>
            </motion.div>
        </SceneWrapper>
    );
};

export default Scene7;
