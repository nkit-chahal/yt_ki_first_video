import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 7: Solution Part 1 - "So what works? Price action. Volume. Market structure."
const Scene7 = () => {
    const solutions = [
        { icon: "📊", text: "Price Action", color: "text-green-400" },
        { icon: "📈", text: "Volume", color: "text-blue-400" },
        { icon: "🏗️", text: "Market Structure", color: "text-purple-400" }
    ];

    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-green-900/10 z-0"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.div
                className="text-5xl font-bold text-white mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                So what works?
            </motion.div>

            <div className="flex flex-col gap-6 w-full max-w-lg relative z-10">
                {solutions.map((item, i) => (
                    <motion.div
                        key={i}
                        className="solution-card flex items-center gap-6"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.3 }}
                    >
                        <span className="text-5xl">{item.icon}</span>
                        <span className={`text-4xl font-bold ${item.color}`}>{item.text}</span>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
            >
                <span className="text-6xl">✅</span>
            </motion.div>
        </SceneWrapper>
    );
};

export default Scene7;
