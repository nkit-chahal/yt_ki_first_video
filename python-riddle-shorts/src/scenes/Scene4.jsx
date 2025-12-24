import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap } from 'lucide-react';

// Scene 4: ANSWER REVEAL - Light Theme
const Scene4 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 p-12 relative">

            {/* Celebration particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-4 h-4 rounded-full ${i % 3 === 0 ? 'bg-primary' :
                                i % 3 === 1 ? 'bg-secondary' : 'bg-accent'
                            }`}
                        style={{ left: `${i * 5}%`, top: '-20px' }}
                        animate={{
                            y: [0, 1920],
                            rotate: [0, 360],
                            opacity: [1, 0]
                        }}
                        transition={{
                            duration: 2 / speed,
                            delay: i * 0.1 / speed,
                            ease: "easeIn"
                        }}
                    />
                ))}
            </div>

            {/* Header */}
            <motion.div
                className="flex items-center gap-4"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <CheckCircle size={64} className="text-primary" strokeWidth={2.5} />
                <h2 className="text-5xl font-bold text-text-dark">The Answer:</h2>
            </motion.div>

            {/* Answer Box */}
            <motion.div
                className="code-block w-full max-w-lg text-4xl text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 / speed, type: "spring", bounce: 0.5 }}
            >
                <span className="text-yellow-300">[</span>
                <span className="text-white">[1], [1], [1]</span>
                <span className="text-yellow-300">]</span>
            </motion.div>

            {/* Explanation */}
            <motion.div
                className="bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-6 max-w-lg text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 / speed }}
            >
                <p className="text-2xl text-text-dark">
                    <span className="text-secondary font-mono font-bold">[[]] * 3</span> creates
                    <span className="text-accent font-bold"> 3 references</span> to the
                    <span className="text-primary font-bold"> SAME list</span>!
                </p>
            </motion.div>

            {/* Did you get it? */}
            <motion.div
                className="flex items-center gap-3 text-3xl text-primary font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 / speed }}
            >
                <Zap className="fill-primary" size={36} />
                Were YOU right?
            </motion.div>
        </div>
    );
};

export default Scene4;
