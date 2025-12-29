import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Snowflake } from 'lucide-react';

// P2_S7: Freezing
// "Instead of throwing away calculations... we freeze them. Lock them in memory."
const Part2_Scene7 = () => {
    const tokens = ["The", "cat", "sat", "on"];

    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-center text-white font-sans p-8">

            <h2 className="text-4xl font-bold text-gray-400 mb-12 uppercase tracking-widest">Freezing the Past</h2>

            {/* Token Blocks Getting Frozen */}
            <div className="flex gap-6 mb-12">
                {tokens.map((token, i) => (
                    <motion.div
                        key={token}
                        className="relative bg-gray-800 p-8 rounded-2xl border-2 border-gray-600"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.3 }}
                    >
                        <span className="text-3xl font-bold">"{token}"</span>

                        {/* Freeze Animation */}
                        <motion.div
                            className="absolute inset-0 bg-blue-500/30 rounded-2xl flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 + i * 0.2 }}
                        >
                            <Snowflake size={40} className="text-blue-300" />
                        </motion.div>

                        {/* Lock Icon */}
                        <motion.div
                            className="absolute -top-4 -right-4 bg-blue-500 p-2 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 3 + i * 0.1 }}
                        >
                            <Lock size={20} className="text-white" />
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Explanation */}
            <motion.div
                className="bg-gray-900 p-8 rounded-2xl border border-gray-700 text-center max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4 }}
            >
                <p className="text-2xl text-gray-300">
                    We <span className="text-blue-400 font-bold">freeze</span> the Keys and Values.
                    <br />They're <span className="text-primary font-bold">locked</span> in memory.
                </p>
            </motion.div>

        </div>
    );
};

export default Part2_Scene7;
