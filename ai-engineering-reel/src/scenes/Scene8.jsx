import React from 'react';
import { motion } from 'framer-motion';
import { Database, Filter, Sliders, Image } from 'lucide-react';

// Scene 8: SUMMARY - Large Grid
const Scene8 = ({ speed = 1 }) => {
    const steps = [
        { icon: Database, text: "Data", sub: "Collection" },
        { icon: Filter, text: "Funnel", sub: "Filtering" },
        { icon: Sliders, text: "Ranking", sub: "Scoring" },
        { icon: Image, text: "Artwork", sub: "Personalization" },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 p-12 bg-bg-main relative">

            <motion.h2
                className="text-5xl font-black text-white z-10 text-center uppercase tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                The Netflix <span className="text-primary glow-primary">Secret Sauce</span>
            </motion.h2>

            <div className="grid grid-cols-2 gap-8 w-full max-w-4xl z-10">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        className="bg-gray-900 border border-gray-800 p-8 rounded-2xl flex flex-col items-center text-center gap-4 relative overflow-hidden group"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: (0.3 + i * 0.2) / speed }}
                        whileHover={{ scale: 1.05, borderColor: '#E50914' }}
                    >
                        <div className="p-6 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                            <step.icon size={80} className="text-white group-hover:text-primary transition-colors" strokeWidth={2} />
                        </div>
                        <div>
                            <p className="font-black text-3xl text-white tracking-wide">{step.text}</p>
                            <p className="text-xl text-gray-500 font-medium">{step.sub}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-10 text-3xl font-bold text-center max-w-3xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 / speed }}
            >
                <span className="text-gray-400">Result: </span>
                <span className="text-white text-primary">80% of streams come from recommendations!</span>
            </motion.div>

        </div>
    );
};

export default Scene8;
