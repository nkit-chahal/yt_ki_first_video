import { motion, AnimatePresence } from 'framer-motion';
import { Twitter, Quote, Atom, Brain, Lightbulb } from 'lucide-react';

// Sonia Joseph Quote Scene - Steps 94-103: Sonia's quotes about JEPA thesis
const SoniaQuoteScene = ({ step, progress = 0 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">
            <div className="noise-overlay" />
            <div className="grid-background" />

            <AnimatePresence mode="wait">
                {/* Step 94: Sonia Joseph intro */}
                {step === 94 && (
                    <motion.div
                        key="sonia-intro"
                        className="flex items-center gap-12 z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="flex items-center gap-4 bg-black border border-gray-700 rounded-2xl px-8 py-4"
                            initial={{ x: -30, opacity: 0 }}
                            animate={{
                                x: progress > 0.1 ? 0 : -30,
                                opacity: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <Twitter size={30} className="text-blue-400" />
                            <span className="text-white font-bold">@saborni_j</span>
                        </motion.div>

                        <motion.p
                            className="text-2xl text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.5 ? 1 : 0 }}
                        >
                            Yann LeCun reposted this...
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 95-97: JEPA thesis */}
                {(step >= 95 && step <= 97) && (
                    <motion.div
                        key="jepa-thesis"
                        className="flex flex-col items-center z-10 px-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: progress > 0.1 ? 1 : 0 }}>
                            <Quote size={40} className="text-pink-400 mb-6" />
                        </motion.div>

                        {step === 95 && (
                            <motion.p
                                className="text-3xl text-white text-center leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                            >
                                "The thesis behind JEPA is that our current models
                                <br />
                                are <span className="text-red-400 font-bold">NOT</span> predicting <span className="text-blue-400">causal dynamics</span>"
                            </motion.p>
                        )}

                        {step === 96 && (
                            <motion.div
                                className="flex items-center gap-8"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{
                                    y: progress > 0.2 ? 0 : 20,
                                    opacity: progress > 0.2 ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="relative"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: progress > 0.35 ? 1 : 0 }}
                                >
                                    <Atom size={80} className="text-gray-600" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-1 bg-red-500 rotate-45" />
                                    </div>
                                </motion.div>
                                <motion.p
                                    className="text-2xl text-gray-400"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: progress > 0.55 ? 1 : 0 }}
                                >
                                    We don't simulate every atom to model intelligence
                                </motion.p>
                            </motion.div>
                        )}

                        {step === 97 && (
                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{
                                    scale: progress > 0.2 ? 1 : 0.95,
                                    opacity: progress > 0.2 ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.p
                                    className="text-3xl text-white text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: progress > 0.35 ? 1 : 0 }}
                                >
                                    "JEPA taught me the importance of learning physics"
                                </motion.p>
                                <motion.p
                                    className="text-2xl text-purple-400 mt-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: progress > 0.6 ? 1 : 0 }}
                                >
                                    at the <span className="font-bold">right level of abstraction</span>
                                </motion.p>
                            </motion.div>
                        )}
                    </motion.div>
                )}

                {/* Step 98: Thank you Yann */}
                {step === 98 && (
                    <motion.div
                        key="thank-yann"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl px-12 py-8"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: progress > 0.1 ? [1, 1.02, 1] : 0,
                                opacity: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ scale: { duration: 2, repeat: Infinity } }}
                        >
                            <motion.p
                                className="text-2xl text-white text-center italic"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                            >
                                "Thank you @ylecun and the JEPA team—
                                <br />
                                it was a <span className="text-purple-400">privilege</span> to work with you."
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 99-100: Latent space prediction */}
                {(step === 99 || step === 100) && (
                    <motion.div
                        key="latent-predict"
                        className="flex flex-col items-center z-10 px-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: progress > 0.1 ? 1 : 0 }}>
                            <Quote size={40} className="text-pink-400 mb-6" />
                        </motion.div>

                        {step === 99 && (
                            <motion.p
                                className="text-3xl text-white text-center leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                            >
                                "If you predict in <span className="text-blue-400">latent space</span> and predict the future"
                            </motion.p>
                        )}

                        {step === 100 && (
                            <motion.p
                                className="text-3xl text-white text-center leading-relaxed"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{
                                    y: progress > 0.2 ? 0 : 20,
                                    opacity: progress > 0.2 ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                "You're more likely to <span className="text-green-400">abstract away</span>
                                <br />
                                all of these pixel-level details"
                            </motion.p>
                        )}
                    </motion.div>
                )}

                {/* Step 101-102: Conversation example */}
                {(step === 101 || step === 102) && (
                    <motion.div
                        key="conversation-example"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {step === 101 && (
                            <>
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: progress > 0.1 ? 1 : 0 }}>
                                    <Quote size={40} className="text-pink-400 mb-6" />
                                </motion.div>
                                <motion.p
                                    className="text-3xl text-white text-center leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                                >
                                    "When we model this conversation right now..."
                                </motion.p>
                                <motion.p
                                    className="text-2xl text-gray-400 mt-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: progress > 0.6 ? 1 : 0 }}
                                >
                                    We don't model it down to the level of <span className="text-red-400">atoms</span>
                                </motion.p>
                            </>
                        )}

                        {step === 102 && (
                            <motion.div
                                className="bg-red-500/10 border border-red-500/30 rounded-2xl px-12 py-6"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{
                                    scale: progress > 0.2 ? 1 : 0.9,
                                    opacity: progress > 0.2 ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.p
                                    className="text-2xl text-red-400 text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: progress > 0.5 ? 1 : 0 }}
                                >
                                    That would be <span className="font-bold">computationally costly</span>
                                    <br />
                                    and <span className="font-bold">inefficient</span>
                                </motion.p>
                            </motion.div>
                        )}
                    </motion.div>
                )}

                {/* Step 103: Right level of abstraction */}
                {step === 103 && (
                    <motion.div
                        key="right-abstraction"
                        className="flex flex-col items-center z-10 px-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: progress > 0.05 ? 1 : 0 }}>
                            <Quote size={40} className="text-pink-400 mb-6" />
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl px-12 py-8"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: progress > 0.15 ? 1 : 0,
                                scale: progress > 0.15 ? 1 : 0,
                                boxShadow: progress > 0.3 ? ['0 0 30px rgba(139,92,246,0.2)', '0 0 50px rgba(139,92,246,0.3)', '0 0 30px rgba(139,92,246,0.2)'] : '0 0 0px transparent'
                            }}
                            transition={{ boxShadow: { duration: 3, repeat: Infinity } }}
                        >
                            <motion.p
                                className="text-2xl text-white text-center leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                            >
                                "We model things at the <span className="text-purple-400 font-bold">representation level</span>
                                <br />
                                that enables it to <span className="text-blue-400">plan in the physical world</span>"
                            </motion.p>
                        </motion.div>

                        <div className="flex gap-6 mt-8">
                            <motion.div
                                className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-full"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{
                                    opacity: progress > 0.65 ? 1 : 0,
                                    x: progress > 0.65 ? 0 : -20
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <Lightbulb size={20} className="text-green-400" />
                                <span className="text-green-400">Counterfactual Reasoning</span>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full"
                                initial={{ x: 20, opacity: 0 }}
                                animate={{
                                    opacity: progress > 0.8 ? 1 : 0,
                                    x: progress > 0.8 ? 0 : 20
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <Brain size={20} className="text-blue-400" />
                                <span className="text-blue-400">Object Understanding</span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SoniaQuoteScene;

