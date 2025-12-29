import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 4: False Signals - "And false signals? Everywhere. RSI hits 30, you buy, price keeps falling."
const Scene4 = () => {
    const falseSignals = [
        { icon: "📉", text: "RSI hits 30", result: "Price falls more" },
        { icon: "🔄", text: "MACD crosses", result: "Whipsaws back" },
        { icon: "❌", text: "Buy signal", result: "Stop loss hit" }
    ];

    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-red-900/20 z-0"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            <Title color="text-red-400">False Signals ❌</Title>

            <div className="flex flex-col gap-4 w-full max-w-lg relative z-10">
                {falseSignals.map((signal, i) => (
                    <motion.div
                        key={i}
                        className="problem-card flex items-center justify-between"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.3 }}
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-4xl">{signal.icon}</span>
                            <span className="text-2xl font-bold text-white">{signal.text}</span>
                        </div>
                        <motion.span
                            className="text-xl text-red-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.3 + 0.5 }}
                        >
                            → {signal.result}
                        </motion.span>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-8 text-5xl font-black text-red-500 glow-red"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
            >
                EVERYWHERE
            </motion.div>
        </SceneWrapper>
    );
};

export default Scene4;
