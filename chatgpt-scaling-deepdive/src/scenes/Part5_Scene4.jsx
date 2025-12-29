import React from 'react';
import { motion } from 'framer-motion';
import { Target, Hammer } from 'lucide-react';

// P5_S4: Shattering
const Part5_Scene4 = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center text-white font-sans p-8">
            <motion.h2 className="text-4xl text-gray-400 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                System design isn't just about making things work.
            </motion.h2>
            <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
            >
                <h1 className="text-6xl font-black mb-4">
                    It's about finding the <span className="text-red-500">bottleneck</span>...
                </h1>
                <motion.h1
                    className="text-8xl font-black text-primary flex items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                >
                    <Hammer size={80} />
                    AND SHATTERING IT.
                </motion.h1>
            </motion.div>
        </div>
    );
};

export default Part5_Scene4;
