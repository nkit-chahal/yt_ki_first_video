import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import { motion } from 'framer-motion';
import { Copy, TrendingDown, DollarSign } from 'lucide-react';

const DecoratorScene2 = () => {
    return (
        <SceneWrapper>
            <div className="flex flex-col items-center gap-2 mb-8">
                <Title color="text-red-400">Copy-Paste</Title>
                <Title color="text-red-400">= Debt 💸</Title>
            </div>

            <div className="flex flex-col items-center gap-6 relative w-full max-w-md">

                {/* The Copy-Paste Action */}
                <motion.div
                    className="bg-blue-900/40 border border-blue-500/50 p-4 rounded-xl w-full backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="flex items-center gap-2 mb-2">
                        <Copy className="text-blue-400 w-5 h-5" />
                        <span className="text-blue-300 font-mono text-sm font-bold">log.info(user_id)</span>
                    </div>
                    <div className="text-blue-200/50 text-xs font-mono ml-6">
                        # Original code
                    </div>
                </motion.div>

                {/* The Pasted Copies (Creating Debt) */}
                {[1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        className="bg-orange-900/40 border border-orange-500/50 p-3 rounded-lg w-full backdrop-blur-sm flex items-center gap-3"
                        initial={{ x: -100, opacity: 0, scale: 0.8 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.15) }}
                    >
                        <Copy className="text-orange-400 w-4 h-4 flex-shrink-0" />
                        <span className="text-orange-300 font-mono text-xs">log.info(user_id)</span>
                        <span className="text-orange-500/70 text-xs ml-auto">PASTED</span>
                    </motion.div>
                ))}

                {/* The Debt Meter */}
                <motion.div
                    className="mt-4 bg-red-900/50 border-2 border-red-500 p-4 rounded-xl w-full flex items-center gap-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, type: "spring" }}
                >
                    <TrendingDown className="text-red-400 w-8 h-8" />
                    <div className="flex-1">
                        <div className="text-red-300 font-bold text-sm">Technical Debt</div>
                        <div className="text-red-500/80 text-xs">Maintenance Cost: HIGH</div>
                    </div>
                    <DollarSign className="text-red-400 w-6 h-6 animate-pulse" />
                </motion.div>

                {/* Floating Debt Icons */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-red-700/20 -z-10"
                        initial={{
                            x: (Math.random() - 0.5) * 300,
                            y: (Math.random() - 0.5) * 400,
                            scale: 0.5,
                            opacity: 0
                        }}
                        animate={{
                            y: [0, -15, 0],
                            opacity: 0.2,
                            rotate: 360
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: i * 0.4
                        }}
                    >
                        <DollarSign size={50} />
                    </motion.div>
                ))}
            </div>
        </SceneWrapper>
    );
};

export default DecoratorScene2;
