import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users } from 'lucide-react';

// P3_S8: The Result
// "GPU goes from 30% to 95%. Throughput triples. Same hardware, three times the users."
const Part3_Scene8 = () => {
    return (
        <div className="w-full h-full bg-primary/10 flex flex-col items-center justify-center text-white font-sans p-8">

            <h2 className="text-4xl font-bold text-gray-400 mb-12 uppercase tracking-widest">The Result</h2>

            {/* GPU Utilization */}
            <div className="w-full max-w-2xl mb-12">
                <div className="flex justify-between text-2xl mb-2">
                    <span>GPU Utilization</span>
                    <motion.span
                        className="text-primary font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                    >
                        95%
                    </motion.span>
                </div>
                <div className="h-12 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-primary"
                        initial={{ width: "30%" }}
                        animate={{ width: "95%" }}
                        transition={{ delay: 1, duration: 1.5 }}
                    />
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>30% (Static)</span>
                    <span>95% (Continuous)</span>
                </div>
            </div>

            {/* Stats */}
            <motion.div
                className="flex gap-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
            >
                <div className="text-center">
                    <TrendingUp size={64} className="text-primary mx-auto mb-4" />
                    <div className="text-5xl font-black text-primary">3x</div>
                    <div className="text-xl text-gray-400">Throughput</div>
                </div>
                <div className="text-center">
                    <Users size={64} className="text-primary mx-auto mb-4" />
                    <div className="text-5xl font-black text-primary">3x</div>
                    <div className="text-xl text-gray-400">Users (same hardware)</div>
                </div>
            </motion.div>

        </div>
    );
};

export default Part3_Scene8;
