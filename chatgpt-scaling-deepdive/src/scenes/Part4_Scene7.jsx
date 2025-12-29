import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

// P4_S7: The Sprint
// "The Intern sprints ahead, wildly guessing the next five words. He's often right, but sometimes wrong. He's fast."
const Part4_Scene7 = () => {
    const guesses = ["The", "weather", "is", "nice", "today"];

    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-center text-white font-sans p-8">

            <h2 className="text-4xl font-bold text-gray-400 mb-12">The Intern SPRINTS ahead...</h2>

            {/* Token Generation Animation */}
            <div className="flex gap-4 mb-12">
                {guesses.map((word, i) => (
                    <motion.div
                        key={word}
                        className="bg-blue-500 px-8 py-6 rounded-2xl text-2xl font-bold shadow-lg"
                        initial={{ opacity: 0, x: -50, scale: 0.5 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ delay: i * 0.2, type: "spring" }}
                    >
                        {word}
                    </motion.div>
                ))}
                <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <Zap size={40} className="text-yellow-400" />
                </motion.div>
            </div>

            {/* Stats */}
            <motion.div
                className="flex gap-12 text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <div className="text-green-400">✓ Often right</div>
                <div className="text-yellow-400">⚠ Sometimes wrong</div>
                <div className="text-blue-400 font-bold">⚡ Always fast</div>
            </motion.div>

        </div>
    );
};

export default Part4_Scene7;
