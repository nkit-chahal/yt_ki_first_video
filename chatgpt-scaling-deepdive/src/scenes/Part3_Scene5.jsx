import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

// P3_S5: Orca
// "The fix came from Orca. They stopped thinking about 'buses' and started thinking about 'Tetris.'"
const Part3_Scene5 = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center text-white font-sans p-8">

            <motion.p
                className="text-3xl text-gray-400 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                The fix came from a system called...
            </motion.p>

            <motion.h1
                className="text-9xl font-black text-blue-400 mb-12"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                style={{ textShadow: "0 0 60px rgba(96,165,250,0.5)" }}
            >
                ORCA
            </motion.h1>

            <motion.div
                className="flex items-center gap-8 text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <div className="flex items-center gap-3 text-gray-500 line-through">
                    <span>🚌 Buses</span>
                </div>
                <span className="text-4xl text-primary">→</span>
                <div className="flex items-center gap-3 text-primary font-bold">
                    <Gamepad2 size={32} />
                    <span>Tetris</span>
                </div>
            </motion.div>

        </div>
    );
};

export default Part3_Scene5;
