import React from 'react';
import { motion } from 'framer-motion';
import { List, Box, Hash, Zap } from 'lucide-react';

// Scene 3: Data Structures - Quick Icons Reveal
const Scene3 = () => {
    const structures = [
        { icon: List, label: 'Lists', desc: 'Queues & Stacks', color: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500' },
        { icon: Box, label: 'Sets', desc: 'Unique Items', color: 'text-orange-400', bg: 'bg-orange-500/20', border: 'border-orange-500' },
        { icon: Hash, label: 'Hashes', desc: 'Python Dicts', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500' },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-16 p-12">

            {/* Title */}
            <motion.div
                className="text-center"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <h1 className="text-5xl font-black text-white mb-4">Not Just Strings</h1>
                <p className="text-2xl text-gray-400">Real Data Structures</p>
            </motion.div>

            {/* 3 Structure Cards - Stacked Vertically */}
            <div className="flex flex-col gap-8 w-full max-w-lg">
                {structures.map((item, i) => (
                    <motion.div
                        key={item.label}
                        className={`flex items-center gap-6 ${item.bg} border-2 ${item.border} rounded-2xl p-6`}
                        initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.3, type: "spring" }}
                    >
                        <div className={`w-20 h-20 ${item.bg} rounded-xl flex items-center justify-center`}>
                            <item.icon size={48} className={item.color} />
                        </div>
                        <div>
                            <div className={`text-3xl font-bold ${item.color}`}>{item.label}</div>
                            <div className="text-xl text-gray-400">{item.desc}</div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Speed Badge */}
            <motion.div
                className="flex items-center gap-3 text-accent-green text-2xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <Zap className="fill-accent-green" size={32} />
                At the speed of RAM
            </motion.div>
        </div>
    );
};

export default Scene3;
