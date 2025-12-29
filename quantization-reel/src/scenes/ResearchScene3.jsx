import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, ArrowRight } from 'lucide-react';

// Scene 3: CODE EVERYTHING - Two Icons + Flow
const ResearchScene3 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-16 p-12 bg-bg-main relative">

            <motion.h2
                className="text-5xl font-black text-white z-10 text-center uppercase tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Step 2: <span className="text-secondary glow-secondary">Code</span> Everything
            </motion.h2>

            <div className="flex justify-between items-center w-full max-w-4xl z-10 relative">

                {/* Paper Icon */}
                <motion.div
                    className="flex flex-col items-center gap-4"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 / speed }}
                >
                    <div className="p-8 bg-gray-800 rounded-full border-4 border-gray-600 shadow-2xl">
                        <BookOpen size={120} className="text-gray-300" strokeWidth={1.5} />
                    </div>
                    <p className="text-white font-bold text-3xl">Paper</p>
                </motion.div>

                {/* Connection Line */}
                <div className="h-2 bg-gray-700 flex-1 mx-8 relative overflow-hidden rounded-full">
                    <motion.div
                        className="absolute inset-0 bg-secondary w-full"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {/* Code Icon */}
                <motion.div
                    className="flex flex-col items-center gap-4"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 / speed }}
                >
                    <div className="p-8 bg-gray-800 rounded-full border-4 border-secondary shadow-2xl">
                        <Code size={120} className="text-secondary" strokeWidth={1.5} />
                    </div>
                    <p className="text-white font-bold text-3xl">Your Code</p>
                </motion.div>
            </div>

            {/* The Implementation Card */}
            <motion.div
                className="stat-card flex items-center gap-8 bg-secondary/10 border-secondary/50 p-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 / speed }}
            >
                <Code size={100} className="text-secondary" strokeWidth={1.5} />
                <div>
                    <p className="text-3xl font-bold text-white">Implement from Scratch</p>
                    <p className="text-2xl text-gray-300">PyTorch or JAX</p>
                </div>
            </motion.div>

            {/* Warning */}
            <motion.div
                className="mt-8 p-6 border-2 border-dashed border-gray-500 rounded-2xl max-w-2xl text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8 / speed }}
            >
                <p className="text-gray-400 mb-2 text-xl">Don't just run...</p>
                <p className="text-3xl font-black text-primary glow-primary line-through decoration-4">
                    import transformers
                </p>
            </motion.div>

        </div>
    );
};

export default ResearchScene3;
