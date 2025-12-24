import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, MessageCircle, Users, Mail, Zap, MessageSquare, Bell, TrendingUp } from 'lucide-react';

const PubSub = ({ speed = 1 }) => {
    const [phase, setPhase] = useState(0);
    const [broadcasting, setBroadcasting] = useState(false);
    const [receivedCount, setReceivedCount] = useState(0);

    // Auto-advance through narrative phases
    useEffect(() => {
        const durations = [
            2500 / speed,  // Phase 0: "What about real-time?"
            3000 / speed,  // Phase 1: Use cases (Chat, Notifications, Stocks)
            3000 / speed,  // Phase 2: "Pub/Sub built in"
            5000 / speed,  // Phase 3: Fan-out demo
            3000 / speed,  // Phase 4: "No polling. No WebSocket complexity."
            4000 / speed,  // Phase 5: "One message fans out"
        ];

        if (phase < durations.length - 1) {
            const timer = setTimeout(() => setPhase(p => p + 1), durations[phase]);
            return () => clearTimeout(timer);
        }
    }, [phase, speed]);

    // Broadcast animation for phase 3
    useEffect(() => {
        if (phase === 3) {
            const t1 = setTimeout(() => setBroadcasting(true), 800 / speed);
            const t2 = setTimeout(() => setReceivedCount(1), 1500 / speed);
            const t3 = setTimeout(() => setReceivedCount(2), 1800 / speed);
            const t4 = setTimeout(() => setReceivedCount(3), 2100 / speed);
            return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
        }
    }, [phase, speed]);

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            <AnimatePresence mode="wait">

                {/* PHASE 0: "What about real-time?" */}
                {phase === 0 && (
                    <motion.div
                        key="phase0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center"
                    >
                        <motion.h1
                            className="text-5xl font-black text-white"
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                        >
                            What about <span className="text-accent-orange">real-time</span>?
                        </motion.h1>
                    </motion.div>
                )}

                {/* PHASE 1: Use Cases */}
                {phase === 1 && (
                    <motion.div
                        key="phase1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-10"
                    >
                        <div className="flex gap-12">
                            {[
                                { icon: MessageSquare, label: 'Chat Apps', color: 'text-blue-400' },
                                { icon: Bell, label: 'Live Notifications', color: 'text-yellow-400' },
                                { icon: TrendingUp, label: 'Stock Tickers', color: 'text-green-400' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    className="flex flex-col items-center gap-4"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                >
                                    <div className={`w-24 h-24 bg-gray-800 border border-gray-700 rounded-2xl flex items-center justify-center`}>
                                        <item.icon size={48} className={item.color} />
                                    </div>
                                    <span className={`font-bold text-lg ${item.color}`}>{item.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            className="text-2xl text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            All need <span className="text-white font-bold">instant</span> communication.
                        </motion.p>
                    </motion.div>
                )}

                {/* PHASE 2: "Pub/Sub built in" */}
                {phase === 2 && (
                    <motion.div
                        key="phase2"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-8 text-center"
                    >
                        <motion.div
                            className="relative"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                        >
                            <div className="absolute inset-0 bg-accent-orange/30 blur-3xl rounded-full"></div>
                            <Radio size={100} className="text-accent-orange relative" />
                        </motion.div>

                        <h2 className="text-3xl text-gray-400">Redis has</h2>

                        <motion.h1
                            className="text-6xl font-black text-white"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="text-accent-orange">Pub/Sub</span> built in.
                        </motion.h1>
                    </motion.div>
                )}

                {/* PHASE 3: Fan-out Demo */}
                {phase === 3 && (
                    <motion.div
                        key="phase3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-8"
                    >
                        <h2 className="text-2xl text-gray-400">
                            Publisher → Channel → <span className="text-accent-green">Everyone</span>
                        </h2>

                        <div className="flex items-center gap-16 relative">
                            {/* Publisher */}
                            <motion.div
                                className="flex flex-col items-center gap-3"
                                initial={{ x: -30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                <div className="w-20 h-20 bg-accent-blue rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                                    <MessageCircle size={40} className="text-white" />
                                </div>
                                <span className="text-accent-blue font-mono font-bold">Publisher</span>
                            </motion.div>

                            {/* Flying Message */}
                            <AnimatePresence>
                                {broadcasting && (
                                    <motion.div
                                        className="absolute left-28 z-20"
                                        initial={{ x: 0, scale: 0 }}
                                        animate={{ x: 80, scale: 1 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className="bg-white text-red-500 p-3 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                                            <Mail size={24} />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Channel */}
                            <motion.div
                                className="flex flex-col items-center gap-3 relative"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                            >
                                <div className="w-28 h-28 bg-gray-800 border-2 border-accent-orange rounded-2xl flex items-center justify-center relative">
                                    <Radio size={56} className="text-accent-orange" />

                                    {/* Broadcasting waves */}
                                    {broadcasting && (
                                        <>
                                            <motion.div
                                                className="absolute inset-0 border-2 border-accent-orange rounded-2xl"
                                                animate={{ scale: 1.5, opacity: 0 }}
                                                transition={{ duration: 0.8, repeat: Infinity }}
                                            />
                                            <motion.div
                                                className="absolute inset-0 border-2 border-accent-orange rounded-2xl"
                                                animate={{ scale: 2, opacity: 0 }}
                                                transition={{ duration: 0.8, delay: 0.2, repeat: Infinity }}
                                            />
                                        </>
                                    )}
                                </div>
                                <span className="text-accent-orange font-mono font-bold">Channel</span>
                            </motion.div>

                            {/* Subscribers */}
                            <div className="flex flex-col gap-6">
                                {[1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-center gap-3"
                                        initial={{ x: 30, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                    >
                                        <motion.div
                                            className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${receivedCount >= i
                                                    ? 'bg-accent-green/20 border-accent-green'
                                                    : 'bg-gray-800 border-gray-600'
                                                }`}
                                            animate={receivedCount >= i ? { scale: [1, 1.2, 1] } : {}}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Users size={24} className={receivedCount >= i ? 'text-accent-green' : 'text-gray-500'} />
                                        </motion.div>
                                        {receivedCount >= i && (
                                            <motion.span
                                                className="text-accent-green font-bold"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                            >
                                                ✓ Received!
                                            </motion.span>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* PHASE 4: "No polling. No WebSocket complexity." */}
                {phase === 4 && (
                    <motion.div
                        key="phase4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-8 text-center"
                    >
                        <div className="flex gap-8">
                            {['No Polling', 'No WebSocket Complexity'].map((text, i) => (
                                <motion.div
                                    key={text}
                                    className="px-8 py-4 bg-gray-800/50 border border-gray-700 rounded-xl"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                >
                                    <span className="text-2xl text-gray-400 line-through">{text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.h1
                            className="text-5xl font-black text-white mt-6"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Just <span className="text-accent-blue">publish</span>, <span className="text-accent-orange">subscribe</span>, <span className="text-accent-green">done</span>.
                        </motion.h1>
                    </motion.div>
                )}

                {/* PHASE 5: "One message fans out" */}
                {phase === 5 && (
                    <motion.div
                        key="phase5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center gap-10 text-center"
                    >
                        <h2 className="text-3xl text-gray-400">Watch as one message</h2>

                        <motion.h1
                            className="text-6xl font-black text-white"
                            animate={{ textShadow: ["0 0 0px #f97316", "0 0 30px #f97316", "0 0 0px #f97316"] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <span className="text-accent-orange">fans out</span> to everyone.
                        </motion.h1>

                        {/* Visual: 1 → Many */}
                        <div className="flex items-center gap-8 mt-6">
                            <motion.div
                                className="w-20 h-20 bg-accent-blue rounded-full flex items-center justify-center"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                            >
                                <span className="text-white text-3xl font-black">1</span>
                            </motion.div>

                            <motion.div
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity }}
                            >
                                <Zap size={48} className="text-accent-orange fill-accent-orange" />
                            </motion.div>

                            <div className="flex gap-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="w-14 h-14 bg-accent-green rounded-full flex items-center justify-center"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: i * 0.1, type: "spring", bounce: 0.5 }}
                                    >
                                        <Users size={24} className="text-black" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Speed particles */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {[...Array(15)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-8 bg-accent-orange rounded-full opacity-30"
                                    style={{ left: `${10 + i * 6}%` }}
                                    animate={{ y: [-50, 700], opacity: [0, 0.5, 0] }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.04,
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

export default PubSub;
