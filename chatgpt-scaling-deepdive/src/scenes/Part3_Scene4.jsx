import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign } from 'lucide-react';

// P3_S4: Wasted Cycles
// "For 29.9 seconds, User A's seat sits empty. Wasted cycles. Wasted money."
const Part3_Scene4 = () => {
    return (
        <div className="w-full h-full bg-red-950 flex flex-col items-center justify-center text-white font-sans p-8">

            <h2 className="text-5xl font-black mb-12 text-red-400">29.9 SECONDS OF NOTHING</h2>

            {/* Lane Visualization */}
            <div className="w-full max-w-4xl space-y-4">
                {/* User A Lane */}
                <div className="flex items-center gap-4">
                    <span className="w-24 text-2xl font-bold text-green-400">User A</span>
                    <div className="flex-1 h-16 bg-gray-900 rounded-xl overflow-hidden flex">
                        <div className="w-[5%] h-full bg-green-500 flex items-center justify-center font-bold">✓</div>
                        <motion.div
                            className="flex-1 h-full bg-red-900/50 border-2 border-dashed border-red-500/50 flex items-center justify-center"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <Clock className="text-red-400 mr-2" size={24} />
                            <span className="text-red-400 font-bold text-xl">EMPTY</span>
                        </motion.div>
                    </div>
                </div>

                {/* User B Lane */}
                <div className="flex items-center gap-4">
                    <span className="w-24 text-2xl font-bold text-blue-400">User B</span>
                    <div className="flex-1 h-16 bg-blue-500 rounded-xl flex items-center justify-center font-bold text-xl">
                        Processing PhD thesis...
                    </div>
                </div>
            </div>

            {/* Impact */}
            <motion.div
                className="mt-12 flex gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <div className="flex items-center gap-3 text-2xl text-red-400">
                    <Clock size={32} />
                    <span>Wasted Cycles</span>
                </div>
                <div className="flex items-center gap-3 text-2xl text-red-400">
                    <DollarSign size={32} />
                    <span>Wasted Money</span>
                </div>
            </motion.div>

        </div>
    );
};

export default Part3_Scene4;
