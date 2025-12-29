import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Eye } from 'lucide-react';

// P4_S8: The Proofread
// "He hands his messy draft to GPT-4. GPT-4 looks at the five words all at once in a single glance."
const Part4_Scene8 = () => {
    const tokens = ["The", "weather", "is", "nice", "today"];

    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-center text-white font-sans p-8">

            <h2 className="text-4xl font-bold text-gray-400 mb-12">GPT-4 Reviews in ONE Glance</h2>

            <div className="flex items-center gap-12">

                {/* Token Stream */}
                <div className="flex gap-2">
                    {tokens.map((word, i) => (
                        <motion.div
                            key={word}
                            className="bg-blue-500 px-6 py-4 rounded-xl text-xl font-bold"
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: 1, borderColor: "#10a37f" }}
                            transition={{ delay: 1.5 }}
                        >
                            {word}
                        </motion.div>
                    ))}
                </div>

                {/* Arrow */}
                <motion.div
                    className="text-4xl"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity }}
                >
                    →
                </motion.div>

                {/* GPT-4 */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <div className="bg-primary/30 p-12 rounded-3xl border-4 border-primary">
                        <Bot size={100} className="text-primary" strokeWidth={1.5} />
                    </div>
                    <motion.div
                        className="absolute -top-4 right-0 flex items-center gap-2 bg-yellow-500 text-black font-bold px-4 py-2 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        <Eye size={20} />
                        <span>Single Glance</span>
                    </motion.div>
                </motion.div>

            </div>

            <motion.p
                className="mt-12 text-2xl text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                5 tokens verified in <span className="text-primary font-bold">1 forward pass</span>
            </motion.p>

        </div>
    );
};

export default Part4_Scene8;
