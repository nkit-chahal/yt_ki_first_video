import React from 'react';
import { motion } from 'framer-motion';
import { Pencil, Eye } from 'lucide-react';

// P4_S3: Counterintuitive
// "It takes GPT-4 roughly the same amount of time to write one word as it does to proofread five words."
const Part4_Scene3 = () => {
    return (
        <div className="w-full h-full bg-bg-main flex items-center justify-center text-white font-sans p-8 gap-16">

            {/* Write 1 Word */}
            <motion.div
                className="flex flex-col items-center gap-6 bg-gray-900 p-10 rounded-3xl border border-gray-700"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <Pencil size={80} className="text-blue-400" />
                <h3 className="text-3xl font-black">Write</h3>
                <div className="flex gap-2">
                    <div className="bg-blue-500 px-6 py-4 rounded-xl text-2xl font-bold">word</div>
                </div>
                <p className="text-2xl text-gray-400">1 token</p>
            </motion.div>

            {/* = Same Time */}
            <motion.div
                className="text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
            >
                <div className="text-8xl font-black text-primary">=</div>
                <p className="text-2xl text-gray-400 mt-4">Same Time!</p>
            </motion.div>

            {/* Proofread 5 Words */}
            <motion.div
                className="flex flex-col items-center gap-6 bg-gray-900 p-10 rounded-3xl border border-primary"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
            >
                <Eye size={80} className="text-primary" />
                <h3 className="text-3xl font-black text-primary">Proofread</h3>
                <div className="flex gap-2">
                    {["The", "cat", "sat", "on", "the"].map((w, i) => (
                        <motion.div
                            key={w}
                            className="bg-primary px-4 py-3 rounded-lg text-lg font-bold text-black"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.5 + i * 0.1 }}
                        >
                            {w}
                        </motion.div>
                    ))}
                </div>
                <p className="text-2xl text-primary">5 tokens</p>
            </motion.div>

        </div>
    );
};

export default Part4_Scene3;
