import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, CheckCircle } from 'lucide-react';

// Scene 6: RANKING
const Scene6 = ({ speed = 1 }) => {
    // Simulated ranked items
    const items = [
        { title: "Stranger Things", score: 98, match: "98% Match" },
        { title: "The Crown", score: 92, match: "92% Match" },
        { title: "Squid Game", score: 85, match: "85% Match" },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-8 p-12 bg-bg-main relative">

            <motion.h2
                className="text-4xl font-bold text-white z-10 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Ranking <span className="text-primary glow-primary">Engine</span>
            </motion.h2>

            <motion.p
                className="text-xl text-gray-400 z-10 text-center max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 / speed }}
            >
                Calculating the probability of <span className="text-white font-bold">PLAY</span>
            </motion.p>

            <div className="w-full max-w-lg z-10 flex flex-col gap-4">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        className="bg-gray-900 border border-gray-700 rounded-lg p-4 flex justify-between items-center relative overflow-hidden"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: (0.8 + i * 0.4) / speed }}
                    >
                        {/* Score Bar Background */}
                        <motion.div
                            className="absolute left-0 top-0 bottom-0 bg-green-500/10"
                            initial={{ width: 0 }}
                            animate={{ width: `${item.score}%` }}
                            transition={{ delay: (1.2 + i * 0.4) / speed, duration: 1 }}
                        />

                        <div className="flex items-center gap-4 z-10">
                            <span className="text-2xl font-bold text-gray-500">#{i + 1}</span>
                            <span className="text-xl font-bold text-white">{item.title}</span>
                        </div>

                        <div className="flex flex-col items-end z-10">
                            <span className="text-green-400 font-bold">{item.match}</span>
                            <span className="text-xs text-gray-500">P(Play) = 0.{item.score}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Formula visualization (Abstract) */}
            <motion.div
                className="mt-6 p-4 bg-black/50 border border-gray-800 rounded-lg code-block text-sm text-gray-300 font-mono"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 / speed }}
            >
                Score = (W1 * Popularity) + (W2 * History) + (W3 * Device)
            </motion.div>

        </div>
    );
};

export default Scene6;
