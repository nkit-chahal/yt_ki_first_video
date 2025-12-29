import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, Bookmark, Brain } from 'lucide-react';

// Scene 4: READ RESEARCH - Grid Layout for Mega Icons
const ResearchScene4 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 p-12 bg-bg-main relative">

            <motion.h2
                className="text-5xl font-black text-white z-10 mb-8 tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Step 3: Read <span className="text-accent glow-accent">Research</span>
            </motion.h2>

            <div className="grid grid-cols-2 gap-8 w-full max-w-4xl z-10">

                {/* ArXiv */}
                <motion.div
                    className="stat-card flex flex-col items-center text-center gap-6 bg-accent/10 border-accent/30 p-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 / speed }}
                >
                    <div className="p-8 bg-accent/20 rounded-full">
                        <FileText size={120} className="text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-white">ArXiv</p>
                        <p className="text-gray-400 text-xl font-medium">Daily Papers</p>
                    </div>
                </motion.div>

                {/* Search */}
                <motion.div
                    className="stat-card flex flex-col items-center text-center gap-6 p-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 / speed }}
                >
                    <div className="p-8 bg-white/10 rounded-full">
                        <Search size={120} className="text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-white">Semantic Scholar</p>
                        <p className="text-gray-400 text-xl font-medium">Deep Search</p>
                    </div>
                </motion.div>

                {/* Bookmark */}
                <motion.div
                    className="stat-card flex flex-col items-center text-center gap-6 p-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9 / speed }}
                >
                    <div className="p-8 bg-white/10 rounded-full">
                        <Bookmark size={120} className="text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-white">Papers We Love</p>
                        <p className="text-gray-400 text-xl font-medium">Curated</p>
                    </div>
                </motion.div>

                {/* Brain */}
                <motion.div
                    className="stat-card flex flex-col items-center text-center gap-6 p-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2 / speed }}
                >
                    <div className="p-8 bg-white/10 rounded-full">
                        <Brain size={120} className="text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-white">Understand</p>
                        <p className="text-gray-400 text-xl font-medium">The "WHY"</p>
                    </div>
                </motion.div>

            </div>

            <motion.p
                className="text-2xl text-gray-300 text-center z-10 mt-8 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 / speed }}
            >
                "Make ArXiv your morning paper"
            </motion.p>

        </div>
    );
};

export default ResearchScene4;
