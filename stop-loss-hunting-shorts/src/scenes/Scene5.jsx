import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 5: "Your stop becomes their entry. Your loss becomes their profit."
const Scene5 = () => {
    return (
        <SceneWrapper>
            <div className="flex flex-col items-center gap-8 relative z-10">
                {/* Your loss */}
                <motion.div
                    className="problem-card flex items-center gap-4"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    <span className="text-5xl">😫</span>
                    <div>
                        <div className="text-2xl text-gray-400">Your stop</div>
                        <div className="text-4xl font-bold text-red-400">= Their ENTRY</div>
                    </div>
                </motion.div>

                <motion.div
                    className="text-5xl text-gray-500"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    ↓
                </motion.div>

                {/* Their profit */}
                <motion.div
                    className="solution-card flex items-center gap-4"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <span className="text-5xl">🏦</span>
                    <div>
                        <div className="text-2xl text-gray-400">Your loss</div>
                        <div className="text-4xl font-bold text-green-400">= Their PROFIT</div>
                    </div>
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene5;
