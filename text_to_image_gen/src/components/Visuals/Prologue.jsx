import { motion } from 'framer-motion';
import { TrendingUp, FileQuestion, Layout, CheckCircle } from 'lucide-react';

const Prologue = ({ step }) => {
    // Step 4: "Understanding from Start to End" (Timeline)
    // Step 5: "MAANG / Jobs" (Growth Graph)
    // Step 6: "Interview Questions" (Code/Cards)
    // Step 7: "System Design" (Main Title)

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">

            {/* Step 4: Start -> End Timeline */}
            {step === 4 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-8"
                >
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="text-gray-400 font-mono text-xl"
                    >
                        Start
                    </motion.div>

                    <div className="w-[600px] h-2 bg-gray-800 rounded-full relative overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="absolute top-0 left-0 h-full bg-orange-500"
                        />
                    </div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="text-orange-500 font-bold font-mono text-2xl"
                    >
                        End
                    </motion.div>
                </motion.div>
            )}

            {/* Step 5: MAANG & Jobs */}
            {step === 5 && (
                <div className="flex flex-col items-center gap-12">
                    <div className="flex gap-8">
                        {['M', 'A', 'A', 'N', 'G'].map((letter, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-8xl font-black text-gray-800"
                            >
                                {letter}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-6"
                    >
                        <div className="p-4 bg-green-100 rounded-full text-green-600">
                            <TrendingUp size={48} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">High Demand</h3>
                            <p className="text-gray-500">2026 Hiring Trends</p>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Step 6: Interview Questions */}
            {step === 6 && (
                <div className="relative">
                    {/* Floating Question Cards */}
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ x: Math.random() * 200 - 100, y: Math.random() * 200 - 100, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.3 }}
                            className={`dark-card p-6 rounded-xl border border-orange-500/30 absolute`}
                            style={{
                                top: (i - 1) * 100,
                                left: (i - 1) * 50 + (i === 2 ? -200 : 0),
                                transform: `rotate(${i * 5}deg)`
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <FileQuestion className="text-orange-400" />
                                <div className="h-2 w-32 bg-gray-700 rounded-full"></div>
                            </div>
                            <div className="h-2 w-24 bg-gray-700 rounded-full mt-3 opacity-50"></div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="relative z-10 bg-orange-600 text-white px-12 py-6 rounded-2xl text-3xl font-bold shadow-2xl shadow-orange-500/50"
                    >
                        Decoding Interviews
                    </motion.div>
                </div>
            )}

            {/* Step 7: Main System Design Title */}
            {step === 7 && (
                <motion.div
                    initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
                    animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        className="inline-flex items-center gap-3 px-6 py-2 bg-orange-100 text-orange-700 rounded-full font-bold mb-8"
                    >
                        <Layout size={20} />
                        <span>SYSTEM DESIGN</span>
                    </motion.div>

                    <h1 className="text-8xl font-black text-gray-900 leading-tight mb-6">
                        Text-to-Image<br />
                        <span className="text-orange-600">Explained</span>
                    </h1>
                </motion.div>
            )}

        </div>
    );
};

export default Prologue;
