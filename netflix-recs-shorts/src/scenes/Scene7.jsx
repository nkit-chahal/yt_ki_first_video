import React from 'react';
import { motion } from 'framer-motion';
import { User, Image, Sword, Heart } from 'lucide-react';

// Scene 7: ARTWORK PERSONALIZATION - Huge Thumbnails
const Scene7 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 p-12 bg-bg-main relative">

            <motion.h2
                className="text-4xl font-black text-white z-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Artwork <span className="text-primary glow-primary">Personalization</span>
            </motion.h2>

            <motion.p
                className="text-2xl text-gray-400 z-10 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 / speed }}
            >
                One Title. Different Thumbnails.
            </motion.p>

            <div className="flex gap-10 w-full max-w-4xl z-10">

                {/* User A - Action Fan */}
                <motion.div
                    className="flex-1 flex flex-col items-center gap-6"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 / speed }}
                >
                    <div className="flex items-center gap-3 text-gray-300 bg-gray-900 px-6 py-3 rounded-full border border-gray-700">
                        <User size={32} />
                        <span className="text-xl font-bold">Generic User</span>
                    </div>

                    {/* Movie Card - Romantic Variant - HUGE */}
                    <div className="w-full aspect-[2/3] bg-gray-800 rounded-2xl border-2 border-gray-600 relative overflow-hidden group shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

                        {/* Placeholder Art - Romantic focus */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <Heart size={160} className="text-pink-500 mb-4 drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]" fill="currentColor" fillOpacity={0.2} />
                            </motion.div>
                            <span className="text-gray-400 font-bold uppercase tracking-widest">Romantic Scene</span>
                        </div>

                        <div className="absolute bottom-6 left-6 z-20">
                            <p className="font-black text-white text-3xl leading-none mb-2">Good Will<br />Hunting</p>
                            <p className="text-green-400 text-xl font-bold">98% Match</p>
                        </div>
                    </div>
                </motion.div>

                {/* User B - Comedy/Action Fan */}
                <motion.div
                    className="flex-1 flex flex-col items-center gap-6"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9 / speed }}
                >
                    <div className="flex items-center gap-3 text-white bg-gray-900 px-6 py-3 rounded-full border border-primary">
                        <User size={32} className="text-primary" />
                        <span className="text-xl font-bold">You</span>
                    </div>

                    {/* Movie Card - Comedy Variant - HUGE */}
                    <div className="w-full aspect-[2/3] bg-gray-800 rounded-2xl border-4 border-primary relative overflow-hidden shadow-[0_0_50px_rgba(229,9,20,0.4)]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

                        {/* Placeholder Art - Comedy focus */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800">
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                            >
                                <Sword size={160} className="text-orange-500 mb-4 drop-shadow-[0_0_30px_rgba(249,115,22,0.5)]" fill="currentColor" fillOpacity={0.2} />
                            </motion.div>
                            <span className="text-gray-400 font-bold uppercase tracking-widest">Comedy Scene</span>
                        </div>

                        <div className="absolute bottom-6 left-6 z-20">
                            <p className="font-black text-white text-3xl leading-none mb-2">Good Will<br />Hunting</p>
                            <p className="text-green-400 text-xl font-bold">99% Match</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="mt-6 p-6 bg-primary/20 rounded-xl border border-primary text-center max-w-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 / speed }}
            >
                <p className="text-white text-xl">We change the <span className="font-black underline decoration-primary decoration-4 underline-offset-4">image</span> to verify you click!</p>
            </motion.div>

        </div>
    );
};

export default Scene7;
