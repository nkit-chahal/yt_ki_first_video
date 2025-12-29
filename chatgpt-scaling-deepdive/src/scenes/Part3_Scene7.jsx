import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft } from 'lucide-react';

// P3_S7: The Slot In
// "The moment User A finishes, the system instantly ejects them and slots in a new user."
const Part3_Scene7 = () => {
    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-center text-white font-sans p-8">

            <h2 className="text-4xl font-bold text-gray-400 mb-12 uppercase tracking-widest">Instant Swap</h2>

            {/* Lane Visualization */}
            <div className="w-full max-w-4xl">
                <div className="flex items-center gap-4">
                    <span className="w-24 text-2xl font-bold text-gray-400">Lane 1</span>
                    <div className="flex-1 h-20 bg-gray-900 rounded-xl overflow-hidden flex relative">

                        {/* User A Exits */}
                        <motion.div
                            className="absolute left-0 top-0 bottom-0 w-1/4 bg-green-500 flex items-center justify-center font-bold text-xl"
                            initial={{ x: 0 }}
                            animate={{ x: -200, opacity: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            A ✓
                        </motion.div>

                        {/* New User Slides In */}
                        <motion.div
                            className="absolute left-0 top-0 bottom-0 w-1/3 bg-purple-500 flex items-center justify-center font-bold text-xl"
                            initial={{ x: 500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.5, type: "spring" }}
                        >
                            NEW! 🚀
                        </motion.div>

                        {/* Still Processing */}
                        <motion.div
                            className="absolute right-0 top-0 bottom-0 w-2/3 bg-blue-500 flex items-center justify-center font-bold text-xl"
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: 1 }}
                        >
                            B (still processing)
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Key Points */}
            <motion.div
                className="mt-12 flex gap-8 text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
            >
                <span className="text-green-400">✓ No waiting</span>
                <span className="text-green-400">✓ No polite queuing</span>
                <span className="text-green-400">✓ Instant slot-in</span>
            </motion.div>

        </div>
    );
};

export default Part3_Scene7;
