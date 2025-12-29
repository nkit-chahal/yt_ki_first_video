import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';

// P4_S4: Parallelism
// "Why? Because writing is sequential, but proofreading can happen in parallel."
const Part4_Scene4 = () => {
    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-center text-white font-sans p-8">

            <h2 className="text-4xl font-bold text-gray-400 mb-16 uppercase">Why?</h2>

            <div className="flex gap-20 items-start">

                {/* Sequential */}
                <div className="text-center">
                    <h3 className="text-3xl font-black text-red-400 mb-8">Writing = Sequential</h3>
                    <div className="flex flex-col gap-2">
                        {[1, 2, 3, 4, 5].map((n) => (
                            <motion.div
                                key={n}
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: n * 0.3 }}
                            >
                                <div className="bg-red-500 w-16 h-12 rounded flex items-center justify-center font-bold">{n}</div>
                                {n < 5 && <ArrowRight className="text-gray-500" />}
                            </motion.div>
                        ))}
                    </div>
                    <p className="mt-4 text-gray-500">One at a time</p>
                </div>

                {/* Parallel */}
                <div className="text-center">
                    <h3 className="text-3xl font-black text-primary mb-8">Proofreading = Parallel</h3>
                    <motion.div
                        className="flex gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                    >
                        {[1, 2, 3, 4, 5].map((n) => (
                            <div key={n} className="bg-primary w-16 h-12 rounded flex items-center justify-center font-bold text-black">{n}</div>
                        ))}
                    </motion.div>
                    <motion.p
                        className="mt-4 text-primary font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                    >
                        All at once! ⚡
                    </motion.p>
                </div>

            </div>

        </div>
    );
};

export default Part4_Scene4;
