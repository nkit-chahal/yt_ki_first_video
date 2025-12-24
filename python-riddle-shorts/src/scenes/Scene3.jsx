import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';

// Scene 3: COUNTDOWN - Light Theme
const Scene3 = ({ speed = 1 }) => {
    const [count, setCount] = useState(3);

    useEffect(() => {
        if (count > 0) {
            const timer = setTimeout(() => setCount(c => c - 1), 1200 / speed);
            return () => clearTimeout(timer);
        }
    }, [count, speed]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 p-12">

            {/* Timer Icon */}
            <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
            >
                <Clock size={120} className="text-accent" strokeWidth={2.5} />
            </motion.div>

            {/* Countdown Number */}
            <AnimatePresence mode="wait">
                {count > 0 ? (
                    <motion.div
                        key={count}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 2, opacity: 0 }}
                        className="text-[200px] font-black text-text-dark leading-none"
                        style={{ textShadow: '0 10px 40px rgba(0,0,0,0.15)' }}
                    >
                        {count}
                    </motion.div>
                ) : (
                    <motion.div
                        key="timesup"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-7xl font-black text-accent glow-accent"
                    >
                        TIME'S UP!
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Subtitle */}
            <motion.p
                className="text-3xl text-text-muted font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Think fast... 🤔
            </motion.p>
        </div>
    );
};

export default Scene3;
