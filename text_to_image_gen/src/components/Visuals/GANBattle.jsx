import { motion } from 'framer-motion';
import { Bot, ShieldAlert, Image as ImageIcon, AlertTriangle } from 'lucide-react';

const GANBattle = ({ step }) => {
    // Step 8: Title Card
    // Step 9: Show Nodes (Neutral)
    // Step 10: Highlight Generator
    // Step 11: Highlight Discriminator
    // Step 12: Generator Action
    // Step 13: Discriminator Action
    // Step 14: Battle Loop
    // Step 15: Instability
    // Step 16: Repetitive Output
    // Step 17: Mode Collapse
    // Step 18: Pencil Analogy

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">

            {/* Step 8: Title */}
            {step === 8 && (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.2, opacity: 0 }}
                    className="text-center"
                >
                    <h1 className="text-8xl font-black text-orange-600 mb-8">PART I</h1>
                    <h2 className="text-6xl text-gray-800 font-light tracking-widest">THE GAN ERA</h2>
                    <p className="mt-8 text-2xl text-gray-500 font-medium">The Models That Fought Themselves</p>
                </motion.div>
            )}

            {/* Step 9-16: The Battle Arena */}
            {step >= 9 && step <= 16 && (
                <div className="flex gap-40 items-center">

                    {/* GENERATOR */}
                    <motion.div
                        className="flex flex-col items-center gap-8 relative"
                        animate={{
                            opacity: (step === 11 || step === 13) ? 0.3 : 1, // Dim when Disc is active
                            scale: step === 10 ? 1.1 : 1
                        }}
                    >
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className={`dark-card border-2 p-8 rounded-3xl relative z-10 transition-all duration-500 ${step === 10 ? 'border-green-400 shadow-[0_0_50px_rgba(74,222,128,0.3)]' : 'border-green-500/50 glow-green'}`}
                        >
                            <Bot size={80} className="text-green-500" />
                            <span className="absolute -top-4 -right-4 bg-green-500 text-black px-3 py-1 rounded-full font-bold text-sm">GEN</span>
                        </motion.div>
                        <h3 className="text-3xl font-bold text-green-600">GENERATOR</h3>
                        <p className="text-xl text-gray-600 font-medium">The Forger</p>

                        {/* Generator Action */}
                        {(step === 12 || step === 14) && (
                            <motion.div
                                initial={{ y: 0, opacity: 0 }}
                                animate={{ y: 200, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute top-full mt-4"
                            >
                                <div className="w-32 h-32 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-600">
                                    <ImageIcon size={48} className="text-gray-500" />
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* VS */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-4xl font-black text-gray-700 font-mono"
                    >
                        VS
                    </motion.div>

                    {/* DISCRIMINATOR */}
                    <motion.div
                        className="flex flex-col items-center gap-8 relative"
                        animate={{
                            opacity: (step === 10 || step === 12) ? 0.3 : 1, // Dim when Gen is active
                            scale: step === 11 ? 1.1 : 1
                        }}
                    >
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className={`dark-card border-2 p-8 rounded-3xl relative z-10 transition-all duration-500 ${step === 11 ? 'border-red-400 shadow-[0_0_50px_rgba(248,113,113,0.3)]' : 'border-red-500/50 glow-red'}`}
                        >
                            <ShieldAlert size={80} className="text-red-500" />
                            <span className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">DISC</span>
                        </motion.div>
                        <h3 className="text-3xl font-bold text-red-600">DISCRIMINATOR</h3>
                        <p className="text-xl text-gray-600 font-medium">The Detective</p>

                        {/* Discriminator Action */}
                        {(step === 13 || step === 14) && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: [1.5, 1] }}
                                className="absolute -top-20 right-0 bg-red-600 text-white px-6 py-2 rounded-full font-bold"
                            >
                                FAKE!
                            </motion.div>
                        )}
                    </motion.div>

                </div>
            )}

            {/* Step 15: Instability */}
            {step === 15 && (
                <div className="absolute inset-0 bg-red-900/10 z-0 pointer-events-none animate-pulse"></div>
            )}

            {/* Step 16: Repetitive Output */}
            {step === 16 && (
                <div className="grid grid-cols-3 gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="w-32 h-32 bg-gray-800 border-2 border-orange-500 flex items-center justify-center"
                        >
                            <span className="text-4xl">🐶</span>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Step 17: Mode Collapse */}
            {step === 17 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 z-50 bg-red-600 flex items-center justify-center flex-col"
                >
                    <AlertTriangle size={120} className="text-black mb-8 animate-bounce" />
                    <h1 className="text-9xl font-black text-black tracking-tighter">MODE COLLAPSE</h1>
                </motion.div>
            )}

            {/* Step 18: Pencil Analogy */}
            {step === 18 && (
                <div className="flex flex-col items-center gap-8">
                    <motion.div
                        animate={{ rotate: [-2, 2, -2] }}
                        transition={{ duration: 0.2, repeat: Infinity }}
                        className="w-4 h-96 bg-yellow-400 rounded-full relative shadow-xl"
                    >
                        <div className="absolute bottom-0 w-8 h-8 bg-black rounded-full -left-2"></div>
                        <div className="absolute top-0 w-4 h-8 bg-pink-300 rounded-t-lg"></div>
                    </motion.div>
                    <span className="text-3xl text-gray-400 font-light">"Balancing a pencil..."</span>
                </div>
            )}

        </div>
    );
};

export default GANBattle;
