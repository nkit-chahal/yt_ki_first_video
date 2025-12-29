import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 1: Hook - "Ever notice your stop loss gets hit... then price reverses immediately?"
const Scene1 = () => {
    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-red-900/20 z-0"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="flex flex-col items-center gap-8 relative z-10">
                {/* Stop loss icon */}
                <motion.div
                    className="text-8xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                >
                    🛑
                </motion.div>

                {/* Main text */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <span className="text-4xl text-gray-300 block mb-4">
                        Ever notice your stop loss gets hit...
                    </span>
                    <motion.span
                        className="text-5xl font-black text-red-400 glow-red block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Then price reverses immediately?
                    </motion.span>
                </motion.div>

                {/* Chart visualization */}
                <motion.div
                    className="flex items-end gap-2 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className="w-6 h-16 bg-red-500 rounded" />
                    <div className="w-6 h-12 bg-red-500 rounded" />
                    <div className="w-6 h-8 bg-red-500 rounded" />
                    <motion.div
                        className="w-6 h-4 bg-red-600 rounded border-2 border-yellow-400"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 0.5 }}
                    />
                    <div className="w-6 h-12 bg-green-500 rounded" />
                    <div className="w-6 h-20 bg-green-500 rounded" />
                    <div className="w-6 h-28 bg-green-500 rounded" />
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene1;
