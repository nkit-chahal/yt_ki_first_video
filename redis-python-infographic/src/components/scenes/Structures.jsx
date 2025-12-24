import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List as ListIcon, Layers, Box, Hash, Zap } from 'lucide-react';

const Structures = ({ speed = 1 }) => {
    const [phase, setPhase] = useState(0);
    const [listItems, setListItems] = useState([]);
    const [setItems, setSetItems] = useState([]);
    const [hashItems, setHashItems] = useState({});

    // Auto-advance through narrative phases
    useEffect(() => {
        const durations = [
            2000 / speed,  // Phase 0: "But here's where it gets interesting"
            2500 / speed,  // Phase 1: "Redis isn't just storing strings"
            4500 / speed,  // Phase 2: Lists demo
            4500 / speed,  // Phase 3: Sets demo
            4500 / speed,  // Phase 4: Hashes demo
            3500 / speed,  // Phase 5: "Real data structures at speed of RAM"
        ];

        if (phase < durations.length - 1) {
            const timer = setTimeout(() => setPhase(p => p + 1), durations[phase]);
            return () => clearTimeout(timer);
        }
    }, [phase, speed]);

    // Populate data as phases progress
    useEffect(() => {
        if (phase === 2) {
            const t1 = setTimeout(() => setListItems(['Job #1']), 500 / speed);
            const t2 = setTimeout(() => setListItems(prev => ['Job #2', ...prev]), 1500 / speed);
            const t3 = setTimeout(() => setListItems(prev => ['Job #3', ...prev]), 2500 / speed);
            return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
        }
        if (phase === 3) {
            const t1 = setTimeout(() => setSetItems(['Apple']), 500 / speed);
            const t2 = setTimeout(() => setSetItems(prev => [...prev, 'Banana']), 1500 / speed);
            const t3 = setTimeout(() => setSetItems(prev => [...prev, 'Cherry']), 2500 / speed);
            return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
        }
        if (phase === 4) {
            const t1 = setTimeout(() => setHashItems({ name: 'Prerna' }), 500 / speed);
            const t2 = setTimeout(() => setHashItems(h => ({ ...h, role: 'Developer' })), 1500 / speed);
            const t3 = setTimeout(() => setHashItems(h => ({ ...h, status: 'Active' })), 2500 / speed);
            return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
        }
    }, [phase, speed]);

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            <AnimatePresence mode="wait">

                {/* PHASE 0: Hook - "But here's where it gets interesting" */}
                {phase === 0 && (
                    <motion.div
                        key="phase0"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center"
                    >
                        <motion.h1
                            className="text-5xl font-black text-white"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            But here's where it gets <span className="text-accent-purple">interesting</span>...
                        </motion.h1>
                    </motion.div>
                )}

                {/* PHASE 1: "Redis isn't just storing strings" */}
                {phase === 1 && (
                    <motion.div
                        key="phase1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="flex flex-col items-center gap-8 text-center"
                    >
                        <h2 className="text-3xl text-gray-400">Redis isn't just storing strings.</h2>

                        <motion.h1
                            className="text-5xl font-black text-white"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            It has <span className="text-accent-purple">Real Data Structures</span>
                        </motion.h1>

                        <motion.div
                            className="flex gap-6 mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {[
                                { icon: ListIcon, label: 'Lists', color: 'text-purple-400' },
                                { icon: Box, label: 'Sets', color: 'text-orange-400' },
                                { icon: Hash, label: 'Hashes', color: 'text-green-400' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    className="flex flex-col items-center gap-2"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 + i * 0.15 }}
                                >
                                    <item.icon size={40} className={item.color} />
                                    <span className={`font-mono font-bold ${item.color}`}>{item.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}

                {/* PHASE 2: Lists Demo */}
                {phase === 2 && (
                    <motion.div
                        key="phase2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-8"
                    >
                        <div className="flex items-center gap-3">
                            <ListIcon size={32} className="text-accent-purple" />
                            <h2 className="text-4xl font-bold text-white">Lists</h2>
                            <span className="text-gray-400 text-xl">— Perfect for job queues</span>
                        </div>

                        <div className="flex items-center gap-12">
                            {/* Code */}
                            <motion.div
                                className="bg-gray-900 border border-gray-700 rounded-xl p-6 font-mono"
                                initial={{ x: -30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                <div className="text-gray-500 text-sm mb-2"># Push to front</div>
                                <div className="text-lg">
                                    <span className="text-purple-400">r</span>.<span className="text-accent-purple">lpush</span>
                                    <span className="text-yellow-300">('queue', 'Job')</span>
                                </div>
                            </motion.div>

                            {/* Visual */}
                            <motion.div
                                className="w-64 min-h-[200px] bg-gray-900 border-2 border-accent-purple rounded-xl p-4 flex flex-col gap-2"
                                initial={{ x: 30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                <div className="text-xs text-gray-500 text-center mb-2">REDIS LIST</div>
                                <AnimatePresence>
                                    {listItems.map((item, i) => (
                                        <motion.div
                                            key={item}
                                            initial={{ y: -50, opacity: 0, scale: 0.8 }}
                                            animate={{ y: 0, opacity: 1, scale: 1 }}
                                            className="bg-accent-purple text-white font-mono py-3 px-4 rounded-lg flex justify-between items-center shadow-lg"
                                        >
                                            <span>{item}</span>
                                            <span className="text-xs opacity-60">idx:{listItems.length - 1 - i}</span>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {/* PHASE 3: Sets Demo */}
                {phase === 3 && (
                    <motion.div
                        key="phase3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-8"
                    >
                        <div className="flex items-center gap-3">
                            <Box size={32} className="text-accent-orange" />
                            <h2 className="text-4xl font-bold text-white">Sets</h2>
                            <span className="text-gray-400 text-xl">— For unique items only</span>
                        </div>

                        <div className="flex items-center gap-12">
                            {/* Code */}
                            <motion.div
                                className="bg-gray-900 border border-gray-700 rounded-xl p-6 font-mono"
                                initial={{ x: -30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                <div className="text-gray-500 text-sm mb-2"># Add unique</div>
                                <div className="text-lg">
                                    <span className="text-purple-400">r</span>.<span className="text-accent-orange">sadd</span>
                                    <span className="text-yellow-300">('fruits', 'Apple')</span>
                                </div>
                            </motion.div>

                            {/* Visual - Circular Set */}
                            <motion.div
                                className="relative w-72 h-72"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                            >
                                <div className="absolute inset-0 border-2 border-dashed border-accent-orange/40 rounded-full"></div>
                                <div className="text-xs text-accent-orange text-center absolute -top-6 w-full font-mono">NO DUPLICATES</div>

                                <div className="w-full h-full flex items-center justify-center">
                                    <AnimatePresence>
                                        {setItems.map((item, i) => {
                                            const angle = (i * 120) - 90;
                                            const radius = 80;
                                            const x = Math.cos(angle * Math.PI / 180) * radius;
                                            const y = Math.sin(angle * Math.PI / 180) * radius;
                                            return (
                                                <motion.div
                                                    key={item}
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1, x, y }}
                                                    transition={{ type: "spring", bounce: 0.5 }}
                                                    className="absolute w-20 h-20 bg-accent-orange/20 border-2 border-accent-orange rounded-full flex items-center justify-center text-accent-orange font-bold shadow-[0_0_20px_rgba(251,146,60,0.3)]"
                                                >
                                                    {item}
                                                </motion.div>
                                            );
                                        })}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {/* PHASE 4: Hashes Demo */}
                {phase === 4 && (
                    <motion.div
                        key="phase4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-8"
                    >
                        <div className="flex items-center gap-3">
                            <Hash size={32} className="text-accent-green" />
                            <h2 className="text-4xl font-bold text-white">Hashes</h2>
                            <span className="text-gray-400 text-xl">— Python dicts in your database</span>
                        </div>

                        <div className="flex items-center gap-12">
                            {/* Code */}
                            <motion.div
                                className="bg-gray-900 border border-gray-700 rounded-xl p-6 font-mono"
                                initial={{ x: -30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                <div className="text-gray-500 text-sm mb-2"># Set hash field</div>
                                <div className="text-lg">
                                    <span className="text-purple-400">r</span>.<span className="text-accent-green">hset</span>
                                    <span className="text-yellow-300">('user:1', 'name', 'Prerna')</span>
                                </div>
                            </motion.div>

                            {/* Visual - JSON-like card */}
                            <motion.div
                                className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-2xl min-w-[280px]"
                                initial={{ x: 30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <span className="ml-auto text-xs text-gray-500 font-mono">user:1</span>
                                </div>
                                <div className="p-6 font-mono">
                                    <div className="text-gray-500">{"{"}</div>
                                    <AnimatePresence>
                                        {Object.entries(hashItems).map(([k, v]) => (
                                            <motion.div
                                                key={k}
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                className="pl-4 py-1"
                                            >
                                                <span className="text-accent-blue">"{k}"</span>
                                                <span className="text-white">: </span>
                                                <span className="text-accent-green">"{v}"</span>
                                                <span className="text-white">,</span>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                    <div className="text-gray-500">{"}"}</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {/* PHASE 5: Summary - "Real data structures at speed of RAM" */}
                {phase === 5 && (
                    <motion.div
                        key="phase5"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center gap-10 text-center"
                    >
                        <h2 className="text-3xl text-gray-400">You're not just caching data anymore.</h2>

                        <motion.h1
                            className="text-5xl font-black text-white"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            You're building <span className="text-accent-purple">real data structures</span>
                        </motion.h1>

                        <motion.div
                            className="flex items-center gap-4 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <span className="text-3xl text-gray-400">at the speed of</span>
                            <motion.span
                                className="text-4xl font-black text-accent-green flex items-center gap-2"
                                animate={{ textShadow: ["0 0 10px #2ea043", "0 0 30px #2ea043", "0 0 10px #2ea043"] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <Zap className="fill-accent-green" /> RAM
                            </motion.span>
                        </motion.div>

                        {/* Speed particles */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-10 bg-accent-purple rounded-full opacity-30"
                                    style={{ left: `${5 + i * 5}%` }}
                                    animate={{ y: [-50, 700], opacity: [0, 0.5, 0] }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.03,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>

            {/* Phase Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${phase === i ? 'bg-white scale-125' : 'bg-gray-700'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Structures;
