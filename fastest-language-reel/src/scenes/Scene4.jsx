import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock } from 'lucide-react';
import StickFigure from '../components/StickFigure';

// Scene 4: The Benchmark Results
const RESULTS = [
    { name: 'Rust', time: '0.8s', rank: 1, color: '#CE422B', emoji: '🦀' },
    { name: 'C++', time: '0.9s', rank: 2, color: '#00599C', emoji: '🔧' },
    { name: 'Go', time: '1.2s', rank: 3, color: '#00ADD8', emoji: '🐹' },
    { name: 'JavaScript', time: '3.5s', rank: 4, color: '#F7DF1E', emoji: '⚡' },
    { name: 'Python', time: '45s', rank: 5, color: '#3776AB', emoji: '🐍' },
];

const Scene4 = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-start relative overflow-hidden p-6 pt-10">
            <motion.div
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <Clock size={24} className="text-cyan-400" />
                <h2 className="text-xl font-bold text-white">RESULTS</h2>
            </motion.div>

            <div className="w-full max-w-xs space-y-2">
                {RESULTS.map((lang, i) => (
                    <motion.div
                        key={lang.name}
                        className="flex items-center justify-between p-2 rounded-lg border"
                        style={{
                            borderColor: lang.color,
                            backgroundColor: i === 0 ? `${lang.color}30` : `${lang.color}10`
                        }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.15 }}
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-black text-white w-6">
                                {i === 0 && <Trophy className="text-yellow-400 fill-yellow-400" size={18} />}
                                {i !== 0 && `#${lang.rank}`}
                            </span>
                            <span className="text-xl">{lang.emoji}</span>
                            <span className="text-base font-bold text-white">{lang.name}</span>
                        </div>
                        <span className="text-base font-mono text-white">{lang.time}</span>
                    </motion.div>
                ))}
            </div>

            {/* Stick figure reaction */}
            <motion.div
                className="text-white mt-4 flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <StickFigure expression="shocked" label="" className="scale-75" />
                <motion.div
                    className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-2 rounded-xl text-sm font-bold"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                >
                    Python: 50x SLOWER! 💀
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Scene4;
