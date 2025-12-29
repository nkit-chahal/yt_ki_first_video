import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 4: "They push price just far enough to trigger those stops. Then reverse."
const Scene4 = () => {
    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-red-900/20 z-0"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="flex flex-col items-center gap-6 relative z-10">
                <motion.div
                    className="text-4xl text-gray-300 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    They push price <span className="text-red-400 font-bold">just far enough</span>
                </motion.div>

                {/* Animation: Price hitting stop then reversing */}
                <motion.div
                    className="flex flex-col items-center gap-4 my-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.div
                        className="text-6xl"
                        animate={{ y: [0, 60, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        📉
                    </motion.div>
                    <div className="flex items-center gap-2">
                        <div className="w-24 h-1 bg-red-500" />
                        <span className="text-red-400 font-bold">STOP</span>
                        <div className="w-24 h-1 bg-red-500" />
                    </div>
                </motion.div>

                <motion.div
                    className="text-5xl font-black text-amber-400 glow-amber"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, type: "spring" }}
                >
                    Then REVERSE
                </motion.div>

                <motion.div
                    className="text-6xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    📈
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene4;
