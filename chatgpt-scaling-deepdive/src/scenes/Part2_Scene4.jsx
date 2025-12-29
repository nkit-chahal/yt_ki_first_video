import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

// Part 2 - Scene 4: Redundant Calculation
// "Most redundant calculation... exponential explosion of wasted work."
const Part2_Scene4 = () => {
    return (
        <div className="w-full h-full bg-red-950 flex flex-col items-center justify-center text-white font-sans p-8 overflow-hidden relative">

            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]" />

            <div className="flex gap-16 items-center">

                {/* The Graph */}
                <div className="relative w-[500px] h-[400px] border-l-4 border-b-4 border-white p-4">
                    <motion.path
                        d="M 0 400 Q 250 380 500 0"
                        stroke="white" strokeWidth="8" fill="transparent"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeIn" }}
                    />
                    <motion.div
                        className="absolute top-0 right-0 text-white text-6xl font-black"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.8 }}
                    >
                        O(n²)
                    </motion.div>
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-2xl uppercase">Tokens Generated</div>
                    <div className="absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90 text-2xl uppercase">Compute</div>
                </div>

                {/* The Message */}
                <div className="flex flex-col gap-4">
                    {["EXPONENTIAL", "EXPLOSION", "OF WASTE"].map((word, i) => (
                        <motion.h1
                            key={word}
                            className="text-8xl font-black text-red-500 uppercase leading-none"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.4 }}
                        >
                            {word}
                        </motion.h1>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default Part2_Scene4;
