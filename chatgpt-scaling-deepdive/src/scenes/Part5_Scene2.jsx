import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Eye } from 'lucide-react';

// P5_S2: Architecture
const Part5_Scene2 = () => {
    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-center text-white font-sans p-8">
            <motion.h2 className="text-4xl text-gray-400 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                These aren't just software updates.
            </motion.h2>
            <motion.h1
                className="text-6xl font-black text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
            >
                They are the <span className="text-primary">intricate, invisible architecture</span>
                <br />that keeps the beast <span className="text-yellow-400">fed</span>.
            </motion.h1>
            <motion.div className="mt-12 flex items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
                <Cpu size={48} className="text-primary" />
                <Eye size={48} className="text-gray-500" />
            </motion.div>
        </div>
    );
};

export default Part5_Scene2;
