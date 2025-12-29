import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 2: "That's not bad luck. That's stop hunting."
const Scene2 = () => {
    return (
        <SceneWrapper>
            <div className="flex flex-col items-center gap-8 relative z-10">
                <motion.div
                    className="text-4xl text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    That's not bad luck.
                </motion.div>

                <motion.div
                    className="text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                >
                    <span className="text-7xl font-black text-amber-400 glow-amber">
                        STOP HUNTING
                    </span>
                </motion.div>

                <motion.div
                    className="text-8xl"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 1, type: "spring" }}
                >
                    🎯
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene2;
