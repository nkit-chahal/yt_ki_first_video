import React from 'react';
import { motion } from 'framer-motion';
import { Bus, Users } from 'lucide-react';

// P3_S2: Static Batching
// "The old way was 'Static Batching.' Group four people, put them on a bus, bus doesn't move until everyone is done."
const Part3_Scene2 = () => {
    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-center text-white font-sans p-8">

            <h2 className="text-4xl font-bold text-gray-400 mb-12 uppercase tracking-widest">Static Batching</h2>

            {/* The Bus */}
            <motion.div
                className="relative bg-yellow-600 w-[500px] h-40 rounded-3xl flex items-center justify-around px-8 border-4 border-yellow-700"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
            >
                {/* Passengers */}
                {["A", "B", "C", "D"].map((user, i) => (
                    <motion.div
                        key={user}
                        className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 + i * 0.2 }}
                    >
                        {user}
                    </motion.div>
                ))}

                {/* Bus Icon */}
                <Bus size={40} className="absolute -top-6 left-4 text-yellow-400" />
            </motion.div>

            {/* Rule */}
            <motion.div
                className="mt-12 bg-gray-900 p-8 rounded-2xl border border-gray-700 text-center max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
            >
                <p className="text-2xl text-gray-300">
                    🚌 The bus <span className="text-red-500 font-bold">doesn't move</span> until <span className="text-yellow-400 font-bold">everyone</span> is done.
                </p>
            </motion.div>

        </div>
    );
};

export default Part3_Scene2;
