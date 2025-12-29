import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, RefreshCw } from 'lucide-react';

// Scene 4: Forced Reasoning (Reinforcement Learning)
// Visual: Brain/Model getting feedback loops and growing stronger
const Scene4 = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center relative overflow-hidden p-6">

            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            <motion.h2
                className="text-2xl font-bold text-purple-400 mb-10 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                SCALABLE RL
            </motion.h2>

            <div className="relative z-10">
                {/* Central Brain */}
                <motion.div
                    className="relative z-10 bg-gray-900 p-6 rounded-2xl border border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.3)]"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Brain size={80} className="text-purple-400" />
                </motion.div>

                {/* Feedback Loops */}
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full border-2 border-purple-500/30"
                        style={{ width: '200px', height: '200px', left: '-35px', top: '-35px' }}
                        initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
                        animate={{
                            rotate: 360,
                            scale: [1, 1.2, 1],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 1,
                            ease: "linear"
                        }}
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 bg-black text-purple-400 text-xs px-2 py-1 rounded border border-purple-500">
                            Reasoning Path
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-16 flex items-center gap-4 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <div className="text-center">
                    <div className="text-3xl font-black text-white">10%</div>
                    <div className="text-xs uppercase tracking-widest">Compute Budget</div>
                </div>
                <div className="h-8 w-[1px] bg-gray-700" />
                <div className="text-center">
                    <div className="text-3xl font-black text-white">GRPO</div>
                    <div className="text-xs uppercase tracking-widest">Algorithm</div>
                </div>
            </motion.div>

        </div>
    );
};

export default Scene4;
