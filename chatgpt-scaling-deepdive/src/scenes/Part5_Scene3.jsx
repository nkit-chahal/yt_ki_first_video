import React from 'react';
import { motion } from 'framer-motion';
import { Skull, Server } from 'lucide-react';

// P5_S3: Survival
const Part5_Scene3 = () => {
    return (
        <div className="w-full h-full bg-red-950 flex flex-col items-center justify-center text-white font-sans p-8">
            <motion.p className="text-3xl text-gray-400 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Without these three innovations...
            </motion.p>
            <motion.div
                className="flex items-center gap-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <Skull size={80} className="text-red-500" />
                <h1 className="text-5xl font-black text-center">
                    The AI revolution would have <span className="text-red-500">DIED</span>
                    <br />in a server room.
                </h1>
            </motion.div>
            <motion.p
                className="text-2xl text-gray-400 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                Crushed by the weight of its own memory.
            </motion.p>
        </div>
    );
};

export default Part5_Scene3;
