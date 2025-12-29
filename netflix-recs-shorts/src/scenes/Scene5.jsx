import React from 'react';
import { motion } from 'framer-motion';
import { User, Film, Link } from 'lucide-react';

// Scene 5: COLLABORATIVE FILTERING - Mega Icons
const Scene5 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-16 p-12 bg-bg-main relative">

            <motion.h2
                className="text-5xl font-black text-white z-10 text-center uppercase tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Collaborative <span className="text-primary glow-primary">Filtering</span>
            </motion.h2>

            <div className="flex justify-between items-center w-full max-w-4xl z-10 relative">

                {/* User A */}
                <motion.div
                    className="flex flex-col items-center gap-4"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 / speed }}
                >
                    <div className="p-8 bg-gray-800 rounded-full border-4 border-gray-600 shadow-2xl">
                        <User size={120} className="text-gray-300" strokeWidth={1.5} />
                    </div>
                    <p className="text-white font-bold text-3xl">You</p>
                </motion.div>

                {/* Connection Line */}
                <div className="h-2 bg-gray-700 flex-1 mx-8 relative overflow-hidden rounded-full">
                    <motion.div
                        className="absolute inset-0 bg-primary w-full"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {/* User B */}
                <motion.div
                    className="flex flex-col items-center gap-4"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 / speed }}
                >
                    <div className="p-8 bg-gray-800 rounded-full border-4 border-gray-600 shadow-2xl">
                        <User size={120} className="text-gray-300" strokeWidth={1.5} />
                    </div>
                    <p className="text-white font-bold text-3xl">Similar User</p>
                </motion.div>
            </div>

            {/* The Movie in Common */}
            <motion.div
                className="stat-card flex items-center gap-8 bg-primary/10 border-primary/50 p-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 / speed }}
            >
                <Film size={100} className="text-primary" strokeWidth={1.5} />
                <div>
                    <p className="text-3xl font-bold text-white">Both liked</p>
                    <p className="text-2xl text-gray-300">"Stranger Things"</p>
                </div>
            </motion.div>

            {/* The Recommendation */}
            <motion.div
                className="mt-8 p-8 border-2 border-dashed border-gray-500 rounded-2xl max-w-2xl text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8 / speed }}
            >
                <p className="text-gray-400 mb-4 text-xl">Because they liked "Dark"...</p>
                <motion.p
                    className="text-4xl font-black text-white glow-secondary leading-tight"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.2 / speed, type: "spring" }}
                >
                    Netflix recommends <span className="text-primary">"Dark"</span> to YOU
                </motion.p>
            </motion.div>

        </div>
    );
};

export default Scene5;
