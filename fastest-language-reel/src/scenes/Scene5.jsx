import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

// Scene 5: The Plot Twist - "But wait..."
const Scene5 = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center relative overflow-hidden p-8">
            {/* Warning background pulse */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-black to-red-900/30"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />

            <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", duration: 0.6 }}
            >
                <AlertTriangle size={100} className="text-orange-500" />
            </motion.div>

            <motion.h1
                className="text-5xl font-black text-white text-center mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                BUT WAIT...
            </motion.h1>

            <motion.p
                className="text-2xl text-orange-400 text-center mt-6 font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                Speed isn't everything.
            </motion.p>

            <motion.div
                className="mt-8 text-center space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <p className="text-xl text-gray-300">What about:</p>
                <p className="text-lg text-cyan-400">📚 Readability?</p>
                <p className="text-lg text-green-400">🚀 Developer Speed?</p>
                <p className="text-lg text-purple-400">🤝 Community?</p>
            </motion.div>
        </div>
    );
};

export default Scene5;
