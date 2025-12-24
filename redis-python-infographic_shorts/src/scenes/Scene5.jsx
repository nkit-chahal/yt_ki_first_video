import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, MessageCircle, Users, Zap } from 'lucide-react';

// Scene 5: PubSub Fan-out
const Scene5 = () => {
    const [broadcasting, setBroadcasting] = useState(false);
    const [received, setReceived] = useState([false, false, false]);

    useEffect(() => {
        const t1 = setTimeout(() => setBroadcasting(true), 1500);
        const t2 = setTimeout(() => setReceived([true, false, false]), 2500);
        const t3 = setTimeout(() => setReceived([true, true, false]), 3000);
        const t4 = setTimeout(() => setReceived([true, true, true]), 3500);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    }, []);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 p-12">

            {/* Title */}
            <motion.div
                className="text-center"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <h1 className="text-5xl font-black text-white mb-4">Real-Time Push</h1>
                <p className="text-2xl text-gray-400">One message, <span className="text-accent-orange">everyone</span> gets it</p>
            </motion.div>

            {/* Publisher */}
            <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
            >
                <div className="w-24 h-24 bg-accent-blue rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                    <MessageCircle size={48} className="text-white" />
                </div>
                <span className="text-accent-blue font-bold text-xl">Publisher</span>
            </motion.div>

            {/* Channel with Broadcasting Waves */}
            <motion.div
                className="relative"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
            >
                <div className="w-32 h-32 bg-gray-800 border-4 border-accent-orange rounded-2xl flex items-center justify-center">
                    <Radio size={64} className="text-accent-orange" />
                </div>

                {/* Broadcasting Waves */}
                {broadcasting && (
                    <>
                        <motion.div
                            className="absolute inset-0 border-4 border-accent-orange rounded-2xl"
                            animate={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute inset-0 border-4 border-accent-orange rounded-2xl"
                            animate={{ scale: 2.5, opacity: 0 }}
                            transition={{ duration: 1, delay: 0.3, repeat: Infinity }}
                        />
                    </>
                )}
            </motion.div>

            {/* Subscribers Row */}
            <div className="flex gap-8">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="flex flex-col items-center gap-3"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                    >
                        <motion.div
                            className={`w-20 h-20 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${received[i]
                                    ? 'bg-accent-green/20 border-accent-green shadow-[0_0_30px_rgba(46,160,67,0.5)]'
                                    : 'bg-gray-800 border-gray-600'
                                }`}
                            animate={received[i] ? { scale: [1, 1.2, 1] } : {}}
                        >
                            <Users size={36} className={received[i] ? 'text-accent-green' : 'text-gray-500'} />
                        </motion.div>
                        {received[i] && (
                            <motion.span
                                className="text-accent-green font-bold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                ✓
                            </motion.span>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Bottom Text */}
            <motion.div
                className="flex items-center gap-3 text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}
            >
                <Zap className="text-accent-orange fill-accent-orange" size={28} />
                <span className="text-gray-400">Instant. No polling.</span>
            </motion.div>
        </div>
    );
};

export default Scene5;
