import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 1: The Hook - "If you're using RSI and MACD to trade... why are you still losing money?"
const Scene1 = () => {
    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-red-900/20 z-0"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="flex flex-col items-center gap-8 relative z-10">
                {/* Trading indicators icons */}
                <motion.div
                    className="flex gap-6 mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-blue-900/50 border border-blue-500 rounded-xl p-4 text-3xl">📊</div>
                    <div className="bg-purple-900/50 border border-purple-500 rounded-xl p-4 text-3xl">📈</div>
                    <div className="bg-amber-900/50 border border-amber-500 rounded-xl p-4 text-3xl">📉</div>
                </motion.div>

                {/* Main question */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                >
                    <span className="text-5xl font-bold text-white block mb-4">
                        Using RSI and MACD?
                    </span>
                    <motion.span
                        className="text-6xl font-black text-red-400 glow-red block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Still losing money?
                    </motion.span>
                </motion.div>

                {/* Question mark */}
                <motion.div
                    className="text-9xl font-black text-red-500"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                >
                    ?
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene1;
