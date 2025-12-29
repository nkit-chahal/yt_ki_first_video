import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp } from 'lucide-react';

// P4_S11: Doubled Speed
const Part4_Scene11 = () => {
    return (
        <div className="w-full h-full bg-primary/10 flex flex-col items-center justify-center text-white font-sans p-8">
            <motion.h2 className="text-4xl text-gray-400 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                This trick alone...
            </motion.h2>
            <motion.div
                className="flex items-center gap-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
            >
                <TrendingUp size={100} className="text-primary" />
                <h1 className="text-9xl font-black text-primary">2x</h1>
            </motion.div>
            <motion.p
                className="text-5xl font-bold mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                SPEED <span className="text-gray-400">overnight</span>
            </motion.p>
        </div>
    );
};

export default Part4_Scene11;
