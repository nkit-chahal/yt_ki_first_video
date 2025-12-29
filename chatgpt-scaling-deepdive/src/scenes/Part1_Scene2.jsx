import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Cpu } from 'lucide-react';

// P1_S2: The Wait
// "But when you type a prompt... this beast isn't roaring. It is waiting."
const Part1_Scene2 = () => {
    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-center relative overflow-hidden text-white font-sans p-8">

            {/* Split Screen Concept */}
            <div className="flex w-full h-full max-w-7xl gap-8 items-center">

                {/* Left: User Perspective (Typing) */}
                <div className="flex-1 h-96 bg-gray-900 rounded-3xl border border-gray-700 p-8 relative flex flex-col">
                    <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-4">
                        <MessageSquare className="text-primary" />
                        <span className="font-bold">ChatGPT-4</span>
                    </div>

                    <div className="flex-1 space-y-4">
                        <div className="bg-gray-800 p-4 rounded-xl rounded-tl-none max-w-[80%]">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                Explain the theory of relativity.
                            </motion.p>
                        </div>

                        {/* The Loader */}
                        <motion.div
                            className="flex gap-2 p-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                        >
                            <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </motion.div>
                    </div>

                    <div className="absolute top-4 right-4 text-xs text-gray-500 font-mono">USER VIEW</div>
                </div>

                {/* Right: Hardware Reality (Waiting) */}
                <div className="flex-1 h-96 bg-black rounded-3xl border border-gray-800 p-8 relative flex flex-col items-center justify-center">

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                    >
                        {/* The Beast */}
                        <Cpu size={150} className="text-gray-700" strokeWidth={1} />

                        {/* Text Overlay: "This Beast Isn't Roaring" */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <motion.div
                                className="bg-red-900/80 text-white px-4 py-2 rounded font-bold text-xl backdrop-blur-md"
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: [0, 1, 1, 0], y: 0 }}
                                transition={{ delay: 0.5, duration: 2, times: [0, 0.1, 0.8, 1] }}
                            >
                                THIS $30k BEAST...
                            </motion.div>
                            <motion.div
                                className="absolute bg-black/80 text-red-500 px-6 py-3 rounded-xl border border-red-500 font-black text-3xl rotate-[-10deg] shadow-2xl"
                                initial={{ opacity: 0, scale: 2 }}
                                animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
                                transition={{ delay: 2.2, duration: 1.5, times: [0, 0.1, 0.8, 1] }}
                            >
                                ISN'T ROARING
                            </motion.div>
                        </div>

                        {/* Status Indicator */}
                        <motion.div
                            className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-yellow-500/20 text-yellow-500 border border-yellow-500/50 px-6 py-2 rounded-full font-mono font-bold tracking-widest"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 3 }}
                        >
                            WAITING...
                        </motion.div>

                        {/* Zzz Animation */}
                        <motion.div className="absolute -top-8 -right-8">
                            <motion.span
                                className="text-4xl text-gray-600 block"
                                animate={{ y: -20, opacity: 0 }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                            >z</motion.span>
                            <motion.span
                                className="text-5xl text-gray-500 block absolute top-2 right-4"
                                animate={{ y: -30, opacity: 0 }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            >z</motion.span>
                        </motion.div>
                    </motion.div>

                    <div className="absolute top-4 right-4 text-xs text-gray-500 font-mono">REALITY</div>
                </div>

            </div>

        </div>
    );
};

export default Part1_Scene2;
