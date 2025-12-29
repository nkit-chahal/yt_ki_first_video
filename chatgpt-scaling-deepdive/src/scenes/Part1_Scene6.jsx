import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock } from 'lucide-react';

// P1_S6: Physics
// "The math is instantaneous, but moving the data takes an eternity in computer time."
const Part1_Scene6 = () => {
    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-center text-white font-sans p-8">

            <h2 className="text-4xl font-bold text-gray-400 mb-16 uppercase tracking-widest">The Physics Problem</h2>

            <div className="flex items-center gap-16">

                {/* Math: Instant */}
                <motion.div
                    className="flex flex-col items-center gap-4 bg-gray-900 p-10 rounded-3xl border border-primary"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <Zap size={80} className="text-primary" />
                    <h3 className="text-3xl font-black text-primary">MATH</h3>
                    <motion.p
                        className="text-6xl font-mono text-white"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                    >
                        0.001ms
                    </motion.p>
                    <p className="text-gray-500">Instantaneous</p>
                </motion.div>

                {/* VS */}
                <motion.div
                    className="text-6xl font-black text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    vs
                </motion.div>

                {/* Data: Eternity */}
                <motion.div
                    className="flex flex-col items-center gap-4 bg-gray-900 p-10 rounded-3xl border border-red-500"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                >
                    <Clock size={80} className="text-red-500" />
                    <h3 className="text-3xl font-black text-red-500">DATA TRANSFER</h3>
                    <motion.p
                        className="text-6xl font-mono text-white"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        100ms+
                    </motion.p>
                    <p className="text-gray-500">"An Eternity"</p>
                </motion.div>

            </div>

            <motion.p
                className="mt-16 text-2xl text-gray-400 text-center max-w-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                Moving data from <span className="text-blue-400">memory</span> to <span className="text-primary">core</span> is the bottleneck.
            </motion.p>

        </div>
    );
};

export default Part1_Scene6;
