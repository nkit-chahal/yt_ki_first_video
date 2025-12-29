import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

// P4_S10: Ghostwriter
const Part4_Scene10 = () => {
    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-center text-white font-sans p-8">
            <motion.h2 className="text-4xl text-gray-400 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                It's like having a...
            </motion.h2>
            <motion.div
                className="flex items-center gap-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
                    <Mail size={80} className="text-blue-400" />
                    <p className="mt-4 text-xl text-gray-400">Draft</p>
                </div>
                <span className="text-4xl">→</span>
                <div className="bg-primary/20 p-8 rounded-2xl border border-primary">
                    <Send size={80} className="text-primary" />
                    <p className="mt-4 text-xl text-primary">Send</p>
                </div>
            </motion.div>
            <motion.h1
                className="text-6xl font-black mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <span className="text-blue-400">Ghostwriter</span> drafts, <span className="text-primary">You</span> send.
            </motion.h1>
        </div>
    );
};

export default Part4_Scene10;
