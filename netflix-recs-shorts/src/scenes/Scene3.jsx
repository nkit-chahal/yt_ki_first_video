import React from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, Play, Clock, Search } from 'lucide-react';

// Scene 3: DATA COLLECTION - Grid Layout for Mega Icons
const Scene3 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 p-12 bg-bg-main relative">

            <motion.h2
                className="text-5xl font-black text-white z-10 mb-8 tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Data Signals
            </motion.h2>

            <div className="grid grid-cols-2 gap-8 w-full max-w-4xl z-10">

                {/* Explicit Signal */}
                <motion.div
                    className="stat-card flex flex-col items-center text-center gap-6 bg-gray-900/50 border-primary/30 p-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 / speed }}
                >
                    <div className="p-8 bg-primary/20 rounded-full">
                        <ThumbsUp size={120} className="text-primary" strokeWidth={2} />
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-white">Explicit</p>
                        <p className="text-gray-400 text-xl font-medium">Thumbs Up</p>
                    </div>
                </motion.div>

                {/* Implicit Signal 1 */}
                <motion.div
                    className="stat-card flex flex-col items-center text-center gap-6 p-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 / speed }}
                >
                    <div className="p-8 bg-white/10 rounded-full">
                        <Play size={120} className="text-white" strokeWidth={2} />
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-white">Implicit</p>
                        <p className="text-gray-400 text-xl font-medium">Plays</p>
                    </div>
                </motion.div>

                {/* Implicit Signal 2 */}
                <motion.div
                    className="stat-card flex flex-col items-center text-center gap-6 p-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9 / speed }}
                >
                    <div className="p-8 bg-white/10 rounded-full">
                        <Clock size={120} className="text-white" strokeWidth={2} />
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-white">Time</p>
                        <p className="text-gray-400 text-xl font-medium">Duration</p>
                    </div>
                </motion.div>

                {/* Implicit Signal 3 */}
                <motion.div
                    className="stat-card flex flex-col items-center text-center gap-6 p-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2 / speed }}
                >
                    <div className="p-8 bg-white/10 rounded-full">
                        <Search size={120} className="text-white" strokeWidth={2} />
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-white">Search</p>
                        <p className="text-gray-400 text-xl font-medium">History</p>
                    </div>
                </motion.div>

            </div>

            <motion.p
                className="text-2xl text-gray-300 text-center z-10 mt-8 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 / speed }}
            >
                "Implicit data speaks louder than Explicit"
            </motion.p>

        </div>
    );
};

export default Scene3;
