import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Stamp } from 'lucide-react';

// P4_S9: Approval
const Part4_Scene9 = () => {
    const tokens = [
        { word: "The", approved: true },
        { word: "weather", approved: true },
        { word: "is", approved: true },
        { word: "nice", approved: true },
        { word: "today", approved: false },
    ];

    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-center text-white font-sans p-8">
            <h2 className="text-4xl font-bold text-gray-400 mb-12">The Verdict</h2>
            <div className="flex gap-4 mb-12">
                {tokens.map((token, i) => (
                    <motion.div
                        key={token.word}
                        className={`relative px-8 py-6 rounded-2xl text-2xl font-bold ${token.approved ? 'bg-green-600' : 'bg-red-600'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.2 }}
                    >
                        {token.word}
                        <motion.div className="absolute -top-3 -right-3" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }}>
                            {token.approved ? <CheckCircle size={28} className="text-white" /> : <XCircle size={28} className="text-white" />}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
            <motion.div className="text-2xl text-primary font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
                5 tokens for the price of ~2
            </motion.div>
        </div>
    );
};

export default Part4_Scene9;
