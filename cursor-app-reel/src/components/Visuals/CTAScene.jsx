import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ThumbsUp, MessageCircle, Zap } from 'lucide-react';

// CTA Scene - Steps 24-28
// Step 24: "Code 2–3 times faster in 2026"
// Step 25: "for interviews, placements, or real projects"
// Step 26: "you need to try Cursor today"
// Step 27: "Link in description"
// Step 28: "Like, comment, subscribe!"
const CTAScene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative p-8"
            style={{ background: 'linear-gradient(180deg, #FFFBF0 0%, #FDF4E3 100%)' }}>

            <AnimatePresence mode="wait">
                {/* Step 24: 2-3x Faster */}
                {step === 24 && (
                    <motion.div
                        key="speed"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring" }}
                    >
                        <Zap size={80} className="text-yellow-500 mb-6" fill="#EAB308" />
                        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
                            2-3x
                        </h1>
                        <h2 className="text-6xl font-black text-gray-800 mt-4">
                            FASTER
                        </h2>
                    </motion.div>
                )}

                {/* Step 25: Use cases */}
                {step === 25 && (
                    <motion.div
                        key="usecases"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-700 text-center mb-8">For...</h2>
                        <div className="flex gap-6">
                            {['🎯 Interviews', '🎓 Placements', '🚀 Real Projects'].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-white px-6 py-4 rounded-2xl shadow-xl border-2 border-gray-100"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                >
                                    <span className="text-xl font-bold text-gray-700">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Step 26: Try Cursor */}
                {step === 26 && (
                    <motion.div
                        key="try"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <h1 className="text-5xl font-black text-gray-800 text-center mb-8">
                            Try Cursor Today
                        </h1>
                        <motion.div
                            className="bg-black px-12 py-6 rounded-2xl shadow-2xl flex items-center gap-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <ExternalLink size={36} className="text-orange-400" />
                            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                                cursor.com
                            </span>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 27: Link in description */}
                {step === 27 && (
                    <motion.div
                        key="link"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-blue-100 border-4 border-blue-400 px-10 py-6 rounded-2xl shadow-xl"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <span className="text-3xl font-black text-blue-600">👇 Link in Description 👇</span>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 28: Subscribe */}
                {step === 28 && (
                    <motion.div
                        key="subscribe"
                        className="flex flex-col items-center w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {/* Subscribe */}
                        <motion.div
                            className="bg-red-500 px-16 py-8 rounded-3xl flex items-center gap-5 mb-10 shadow-2xl"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring" }}
                        >
                            <svg className="w-14 h-14 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                            <span className="text-white text-4xl font-black">SUBSCRIBE</span>
                        </motion.div>

                        {/* Like & Comment */}
                        <div className="flex gap-8">
                            <motion.div
                                className="bg-blue-100 border-4 border-blue-400 px-8 py-5 rounded-2xl flex items-center gap-3 shadow-xl"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="text-4xl">👍</span>
                                <span className="text-blue-700 text-2xl font-bold">LIKE</span>
                            </motion.div>

                            <motion.div
                                className="bg-green-100 border-4 border-green-400 px-8 py-5 rounded-2xl flex items-center gap-3 shadow-xl"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="text-4xl">💬</span>
                                <span className="text-green-700 text-2xl font-bold">COMMENT</span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default CTAScene;
