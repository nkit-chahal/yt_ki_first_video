import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap } from 'lucide-react';

// P4_S6: The Intern
// "They employ a second model. A tiny, fast, 'dumb' model. Let's call him the Intern."
const Part4_Scene6 = () => {
    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-center text-white font-sans p-8">

            <motion.p
                className="text-3xl text-gray-400 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                They employ a second model...
            </motion.p>

            <motion.div
                className="relative"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div className="bg-blue-900/50 p-16 rounded-3xl border-4 border-blue-500">
                    <Bot size={150} className="text-blue-400" strokeWidth={1.5} />
                </div>

                {/* Labels */}
                <motion.div
                    className="absolute -top-4 -right-4 bg-yellow-500 text-black font-black px-4 py-2 rounded-full text-xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 }}
                >
                    TINY
                </motion.div>
                <motion.div
                    className="absolute -bottom-4 -left-4 bg-primary text-black font-black px-4 py-2 rounded-full text-xl flex items-center gap-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <Zap size={20} /> FAST
                </motion.div>
            </motion.div>

            <motion.h1
                className="text-7xl font-black text-blue-400 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                "The Intern"
            </motion.h1>

            <motion.p
                className="text-2xl text-gray-500 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                7B Parameters • Not very smart • But incredibly fast
            </motion.p>

        </div>
    );
};

export default Part4_Scene6;
