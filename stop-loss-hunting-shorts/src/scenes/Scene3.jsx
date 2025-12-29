import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';

// Scene 3: "Big players can see where retail traders place their stops."
const Scene3 = () => {
    return (
        <SceneWrapper>
            <motion.div
                className="absolute inset-0 bg-purple-900/10 z-0"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="flex flex-col items-center gap-6 relative z-10">
                <motion.div
                    className="text-4xl text-gray-300 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Big players can <span className="text-purple-400 font-bold">SEE</span>
                </motion.div>

                <motion.div
                    className="text-5xl font-bold text-white text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    where retail traders place stops
                </motion.div>

                {/* Visual: Chart with stop levels */}
                <motion.div
                    className="bg-gray-800 rounded-2xl p-6 mt-4 w-full max-w-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-400">Support</span>
                        <span className="text-red-400 font-bold">⬇️ STOPS HERE</span>
                    </div>
                    <div className="h-2 bg-blue-500 rounded mb-6" />
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Resistance</span>
                        <span className="text-red-400 font-bold">⬆️ STOPS HERE</span>
                    </div>
                    <div className="h-2 bg-blue-500 rounded mt-4" />
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene3;
