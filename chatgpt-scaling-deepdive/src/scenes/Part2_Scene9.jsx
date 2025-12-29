import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Wind } from 'lucide-react';

// P2_S9: Linear Breeze
// "We turned a quadratic disaster into a linear breeze."
const Part2_Scene9 = () => {
    return (
        <div className="w-full h-full bg-bg-main flex items-center justify-center text-white font-sans p-8 gap-16">

            {/* Quadratic Disaster */}
            <motion.div
                className="flex flex-col items-center gap-6 bg-red-950/50 p-10 rounded-3xl border border-red-500"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <h3 className="text-3xl font-black text-red-500">BEFORE</h3>
                <div className="text-8xl font-mono text-red-400">O(n²)</div>
                <p className="text-xl text-gray-400">Quadratic Disaster</p>
                <div className="text-6xl">💥</div>
            </motion.div>

            {/* Arrow */}
            <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <TrendingDown size={80} className="text-primary" />
                <span className="text-2xl text-primary font-bold">OPTIMIZED</span>
            </motion.div>

            {/* Linear Breeze */}
            <motion.div
                className="flex flex-col items-center gap-6 bg-primary/20 p-10 rounded-3xl border border-primary"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
            >
                <h3 className="text-3xl font-black text-primary">AFTER</h3>
                <div className="text-8xl font-mono text-primary">O(n)</div>
                <p className="text-xl text-gray-400">Linear Breeze</p>
                <motion.div
                    className="text-6xl"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    🍃
                </motion.div>
            </motion.div>

        </div>
    );
};

export default Part2_Scene9;
