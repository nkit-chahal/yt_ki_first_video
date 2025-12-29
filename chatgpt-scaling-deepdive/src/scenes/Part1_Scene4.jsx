import React from 'react';
import { motion } from 'framer-motion';

// P1_S4: The Flaw
// "Why? Because of a fatal flaw... The Memory Wall."
const Part1_Scene4 = () => {
    return (
        <div className="w-full h-full bg-red-950 flex flex-col items-center justify-center relative overflow-hidden text-white font-sans p-8">

            {/* Background Noise */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] filter contrast-125 brightness-150" />

            {/* Questions */}
            <motion.div
                className="absolute top-1/4"
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl text-red-200 font-bold tracking-widest">FATAL FLAW</h2>
            </motion.div>

            {/* The Wall Slam */}
            <motion.div
                className="relative z-10"
                initial={{ scale: 3, opacity: 0, y: -200 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 120, damping: 20 }}
            >
                <div className="bg-black border-4 border-white p-12 shadow-[0_20px_100px_rgba(0,0,0,0.8)] transform -rotate-2">
                    <h1 className="text-8xl font-black uppercase text-center leading-none">
                        The<br />
                        <span className="text-red-500">Memory</span><br />
                        Wall
                    </h1>
                </div>
            </motion.div>

            {/* Impact Dust */}
            <motion.div
                className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 1.6, duration: 0.2 }}
            />

        </div>
    );
};

export default Part1_Scene4;
