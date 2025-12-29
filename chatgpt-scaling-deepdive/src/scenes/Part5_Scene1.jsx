import React from 'react';
import { motion } from 'framer-motion';

// P5_S1: Recap
const Part5_Scene1 = () => {
    const techniques = ["KV Caching", "Continuous Batching", "Speculative Decoding"];
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center text-white font-sans p-8">
            <div className="flex gap-8">
                {techniques.map((tech, i) => (
                    <motion.div
                        key={tech}
                        className="bg-gray-900 border border-primary p-8 rounded-2xl text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.5 }}
                    >
                        <div className="text-5xl font-black text-primary mb-4">#{i + 1}</div>
                        <h3 className="text-2xl font-bold">{tech}</h3>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Part5_Scene1;
