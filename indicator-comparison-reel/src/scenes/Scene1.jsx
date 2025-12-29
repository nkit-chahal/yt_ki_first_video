import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Scene 1: Hook - "Using the wrong indicator?"
const Scene1 = ({ currentSegment = 0 }) => {
    return (
        <div className="video-container flex flex-col items-center justify-center px-12">
            <AnimatePresence>
                {currentSegment >= 0 && (
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <motion.div
                            className="text-8xl mb-8"
                            animate={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            ⚠️
                        </motion.div>
                        <h1 className="text-6xl font-black text-white mb-6">
                            Using the<br />
                            <span className="text-red-500">WRONG</span><br />
                            Indicator?
                        </h1>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {currentSegment >= 1 && (
                    <motion.p
                        className="text-3xl text-stone-400 text-center mt-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Here's which indicator to use<br />in each market condition...
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};

Scene1.segmentCount = 2;
Scene1.segmentIds = ['1_1', '1_2'];

export default Scene1;
