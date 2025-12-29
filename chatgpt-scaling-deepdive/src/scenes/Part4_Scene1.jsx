import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock } from 'lucide-react';

// P4_S1: Still Limited
// "We optimized the memory. We optimized the scheduling. But we were still limited by the speed of the model itself."
const Part4_Scene1 = () => {
    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-center text-white font-sans p-8">

            <div className="space-y-6 text-center">
                <motion.div
                    className="flex items-center justify-center gap-4 text-3xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <CheckCircle size={40} className="text-green-500" />
                    <span className="text-green-400">Optimized Memory</span>
                    <span className="text-gray-500">(KV Cache)</span>
                </motion.div>

                <motion.div
                    className="flex items-center justify-center gap-4 text-3xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <CheckCircle size={40} className="text-green-500" />
                    <span className="text-green-400">Optimized Scheduling</span>
                    <span className="text-gray-500">(Continuous Batching)</span>
                </motion.div>

                <motion.div
                    className="flex items-center justify-center gap-4 text-3xl mt-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <Clock size={40} className="text-red-500" />
                    <span className="text-red-400">But still limited by...</span>
                </motion.div>

                <motion.h1
                    className="text-6xl font-black text-white mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 }}
                >
                    THE MODEL ITSELF
                </motion.h1>
            </div>

        </div>
    );
};

export default Part4_Scene1;
