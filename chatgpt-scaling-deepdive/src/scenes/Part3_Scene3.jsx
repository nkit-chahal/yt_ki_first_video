import React from 'react';
import { motion } from 'framer-motion';

// P3_S3: The Disparity
// "User A asks 'What is 2+2?' User B asks for a 'PhD thesis on Quantum Physics.'"
const Part3_Scene3 = () => {
    return (
        <div className="w-full h-full bg-bg-main flex items-center justify-center text-white font-sans p-8 gap-16">

            {/* User A */}
            <motion.div
                className="flex flex-col items-center gap-6 bg-green-900/30 p-10 rounded-3xl border border-green-500"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-4xl font-black text-black">
                    A
                </div>
                <h3 className="text-2xl font-bold text-green-400">User A</h3>
                <div className="bg-gray-900 p-6 rounded-xl max-w-xs">
                    <p className="text-xl text-gray-300">"What is 2+2?"</p>
                </div>
                <motion.div
                    className="text-4xl font-mono text-green-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    10ms ⚡
                </motion.div>
            </motion.div>

            {/* VS */}
            <motion.div
                className="text-6xl font-black text-gray-600"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
            >
                vs
            </motion.div>

            {/* User B */}
            <motion.div
                className="flex flex-col items-center gap-6 bg-blue-900/30 p-10 rounded-3xl border border-blue-500"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
            >
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-4xl font-black text-black">
                    B
                </div>
                <h3 className="text-2xl font-bold text-blue-400">User B</h3>
                <div className="bg-gray-900 p-6 rounded-xl max-w-xs">
                    <p className="text-xl text-gray-300">"Write a PhD thesis on Quantum Physics"</p>
                </div>
                <motion.div
                    className="text-4xl font-mono text-red-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    30 sec 🐢
                </motion.div>
            </motion.div>

        </div>
    );
};

export default Part3_Scene3;
