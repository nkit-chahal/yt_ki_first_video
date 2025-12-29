import React from 'react';
import { motion } from 'framer-motion';
import { Car, Users } from 'lucide-react';

// P3_S1: Traffic Jam
// "So the chip is faster, but now we have a traffic jam. A server handles thousands of people at once."
const Part3_Scene1 = () => {
    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-center text-white font-sans p-8">

            <motion.h1
                className="text-6xl font-black mb-12 text-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                The chip is faster, but now...
            </motion.h1>

            {/* Traffic Jam Visual */}
            <motion.div
                className="relative w-full max-w-4xl h-48 bg-gray-900 rounded-3xl overflow-hidden border border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {/* Cars stuck */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 -translate-y-1/2"
                        style={{ left: `${10 + i * 15}%` }}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 + i * 0.2 }}
                    >
                        <Car size={60} className={i === 0 ? "text-red-500" : "text-gray-500"} />
                    </motion.div>
                ))}

                {/* Congestion Label */}
                <motion.div
                    className="absolute top-4 right-4 bg-red-600 px-4 py-2 rounded-full font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2 }}
                >
                    🚦 CONGESTED
                </motion.div>
            </motion.div>

            <motion.div
                className="mt-12 flex items-center gap-4 text-3xl text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
            >
                <Users size={40} />
                <span>Thousands of users. One GPU.</span>
            </motion.div>

        </div>
    );
};

export default Part3_Scene1;
