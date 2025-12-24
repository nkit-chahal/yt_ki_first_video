import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Check } from 'lucide-react';

// Scene 2: SET → GET Flow
const Scene2 = () => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const t1 = setTimeout(() => setPhase(1), 1500);
        const t2 = setTimeout(() => setPhase(2), 4000);
        const t3 = setTimeout(() => setPhase(3), 6000);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, []);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 p-12">

            {/* Title */}
            <motion.h1
                className="text-5xl font-black text-white text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <span className="text-accent-blue">SET</span> a key, <span className="text-accent-green">GET</span> a key
            </motion.h1>

            {/* SET Code */}
            <motion.div
                className={`bg-gray-900 border-2 rounded-2xl p-8 w-full max-w-lg transition-all ${phase >= 1 ? 'border-accent-blue' : 'border-gray-700'}`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div className="font-mono text-3xl">
                    <span className="text-purple-400">r</span>.<span className="text-accent-blue font-bold">set</span>
                    <span className="text-yellow-300">(</span>
                    <span className="text-green-400">'user'</span>,
                    <span className="text-green-400">'Alice'</span>
                    <span className="text-yellow-300">)</span>
                </div>
            </motion.div>

            {/* Arrow */}
            <AnimatePresence>
                {phase >= 1 && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-accent-blue"
                    >
                        <ArrowDown size={64} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Redis Memory */}
            <motion.div
                className={`bg-gray-900 border-2 rounded-2xl p-8 w-full max-w-lg transition-all ${phase >= 1 ? 'border-accent-green shadow-[0_0_30px_rgba(46,160,67,0.3)]' : 'border-gray-700'}`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <div className="text-gray-500 text-xl mb-4 font-mono">REDIS MEMORY</div>
                <AnimatePresence>
                    {phase >= 1 && (
                        <motion.div
                            className="flex justify-between items-center bg-gray-800 p-4 rounded-xl"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                        >
                            <span className="text-accent-blue font-mono text-2xl">user</span>
                            <span className="text-accent-green font-mono text-2xl">"Alice"</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* GET Code */}
            <AnimatePresence>
                {phase >= 2 && (
                    <motion.div
                        className="bg-gray-900 border-2 border-accent-green rounded-2xl p-8 w-full max-w-lg"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <div className="font-mono text-3xl">
                            <span className="text-purple-400">val</span> = <span className="text-purple-400">r</span>.<span className="text-accent-green font-bold">get</span>
                            <span className="text-yellow-300">(</span>
                            <span className="text-green-400">'user'</span>
                            <span className="text-yellow-300">)</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Result */}
            <AnimatePresence>
                {phase >= 3 && (
                    <motion.div
                        className="flex items-center gap-4 bg-accent-green text-black font-bold text-3xl px-8 py-4 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                    >
                        <Check size={32} />
                        "Alice"
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Scene2;
