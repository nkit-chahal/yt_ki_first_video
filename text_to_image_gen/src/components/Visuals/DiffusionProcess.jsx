import { motion } from 'framer-motion';
import { Droplet, ArrowRight, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

const DiffusionProcess = ({ step }) => {
    // Step 14: Stability (Need)
    // Step 15: Reverse Process (Concept)
    // Step 16: Diffusion Title
    // Step 17: Ink Drop
    // Step 18: Ink Spread
    // Step 19: Entropy (Random Grey)
    // Step 20: Reverse Ink (Rewind)
    // Step 21: Core Intuition (Brain/Spark)
    // Step 22: One Model (Not Fighting)
    // Step 23: "What Noise?" Question
    // Step 24: Add Noise (Forward)
    // Step 25: Remove Noise (Reverse)
    // Step 26: Insight (Image from Noise)

    // Generate Noise Texture
    const [noiseLevel, setNoiseLevel] = useState(0);

    useEffect(() => {
        if (step === 29) {
            setNoiseLevel(0);
            const interval = setInterval(() => {
                setNoiseLevel(prev => Math.min(prev + 10, 100));
            }, 500);
            return () => clearInterval(interval);
        } else if (step === 30) {
            setNoiseLevel(100);
            const interval = setInterval(() => {
                setNoiseLevel(prev => Math.max(prev - 10, 0));
            }, 500);
            return () => clearInterval(interval);
        } else {
            setNoiseLevel(0);
        }
    }, [step]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">

            {/* Step 19: Stability */}
            {step === 19 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center border-4 border-blue-500">
                        <div className="w-4 h-32 bg-blue-500 rounded-full"></div>
                        <div className="w-32 h-4 bg-blue-500 rounded-full absolute"></div>
                    </div>
                    <h2 className="text-4xl font-bold text-blue-600">STABILITY</h2>
                    <p className="text-xl text-gray-500">Engineers needed control.</p>
                </motion.div>
            )}

            {/* Step 20: Reverse Process */}
            {step === 20 && (
                <motion.div
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    className="flex flex-col items-center gap-6"
                >
                    <ArrowLeft size={100} className="text-orange-500" />
                    <h2 className="text-4xl font-bold text-orange-600">Learning to Reverse</h2>
                    <p className="text-xl text-gray-500">Not fighting. Undoing.</p>
                </motion.div>
            )}

            {/* Step 21: Title */}
            {step === 21 && (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.2, opacity: 0 }}
                    className="text-center"
                >
                    <h1 className="text-8xl font-black text-orange-600 mb-8">PART II</h1>
                    <h2 className="text-6xl text-gray-800 font-light tracking-widest">DIFFUSION</h2>
                    <p className="mt-8 text-2xl text-gray-500">Removing Noise, Not Creating Competing Models</p>
                </motion.div>
            )}

            {/* Step 22 & 23: Entropy (Ink Drop) */}
            {/* Steps 22-25: Ink Analogy Granular */}
            {step >= 22 && step <= 25 && (
                <div className="relative w-[600px] h-[600px] bg-white border-4 border-gray-200 rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-blue-50/50"></div>

                    {/* Ink Drop & Spread */}
                    <motion.div
                        initial={{ scale: 0.1, opacity: 1, filter: "blur(0px)" }}
                        animate={
                            step === 22 ? { scale: 1, opacity: 1, filter: "blur(0px)", background: "#000" } : // Drop
                                step === 23 ? { scale: 30, opacity: 0.6, filter: "blur(20px)", background: "#333" } : // Spread
                                    step === 24 ? { scale: 60, opacity: 0.9, filter: "blur(50px)", background: "#555" } : // Entropy
                                        step === 25 ? { scale: 0.1, opacity: 1, filter: "blur(0px)", background: "#000", transition: { duration: 2 } } : // Rewind
                                            {}
                        }
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="w-10 h-10 rounded-full bg-black z-10"
                    />

                    {/* Step 19: Entropy Label */}
                    {step === 19 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute inset-0 flex items-center justify-center z-20"
                        >
                            <h2 className="text-6xl font-black text-white mix-blend-difference tracking-widest">ENTROPY</h2>
                        </motion.div>
                    )}

                    {/* Step 20: Reversing Label */}
                    {step === 20 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute bottom-10 bg-orange-600 px-6 py-3 rounded-xl text-white font-bold text-xl shadow-lg"
                        >
                            Reversing Time...
                        </motion.div>
                    )}
                </div>
            )}

            {/* Steps 26-28: Theoretical Concepts */}
            {step >= 26 && step <= 28 && (
                <div className="flex flex-col items-center gap-8">
                    {/* Step 26: Core Intuition */}
                    {step === 26 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-yellow-50 p-12 rounded-full border-4 border-yellow-400 shadow-2xl relative overflow-hidden"
                        >
                            <motion.div
                                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-yellow-400/20 blur-xl"
                            />
                            <Droplet size={100} className="text-yellow-600 relative z-10" />
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="absolute top-0 right-0 bg-red-500 rounded-full p-2"
                            >
                                <ArrowLeft size={24} className="text-white rotate-45" />
                            </motion.div>
                            <p className="mt-6 text-2xl font-black text-yellow-800 relative z-10 text-center uppercase tracking-widest">The Core<br />Intuition</p>
                        </motion.div>
                    )}

                    {/* Step 27: One Model */}
                    {step === 27 && (
                        <div className="flex items-center gap-12">
                            {/* Fighting Models (Faded) */}
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 0.5 }}
                                className="flex flex-col items-center grayscale"
                            >
                                <div className="flex gap-4 mb-2">
                                    <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center text-4xl">🤖</div>
                                    <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center text-4xl">🤖</div>
                                </div>
                                <span className="text-red-500 font-bold text-lg line-through decoration-4">COMPETITION</span>
                            </motion.div>

                            <ArrowRight size={48} className="text-gray-400" />

                            {/* One Model (Highlighted) */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1.1, opacity: 1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"
                                    />
                                    <span className="text-8xl relative z-10">🧠</span>
                                </div>
                                <span className="text-blue-500 font-black text-2xl mt-4">ONE MODEL</span>
                            </motion.div>
                        </div>
                    )}

                    {/* Step 28: Question */}
                    {step === 28 && (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-black p-12 rounded-3xl border border-gray-800 shadow-2xl max-w-2xl text-center relative overflow-hidden"
                        >
                            <motion.div
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent skew-x-12"
                            />
                            <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
                                "What noise was added?"
                            </h2>
                            <p className="text-gray-400 text-xl font-mono">Prediction Target: &epsilon; (Epsilon)</p>
                        </motion.div>
                    )}
                </div>
            )}

            {/* Steps 29 & 30: Forward/Reverse Diffusion on Image */}
            {(step === 29 || step === 30) && (
                <div className="flex flex-col items-center gap-8">
                    <div className="flex items-center gap-12">
                        {/* SOURCE IMAGE CONTAINER */}
                        <div className="w-[400px] h-[400px] relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                            {/* Base Image */}
                            <img
                                src="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Astronaut"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Noise Overlay */}
                            <div
                                className="absolute inset-0 bg-black pointer-events-none mix-blend-screen"
                                style={{ opacity: noiseLevel / 100 }}
                            >
                                <svg className="w-full h-full opacity-100">
                                    <filter id="noiseFilter">
                                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                                    </filter>
                                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {step === 29 ? <ArrowRight className="text-red-500" size={32} /> : <ArrowLeft className="text-green-500" size={32} />}
                        <span className={`text-2xl font-mono ${step === 29 ? 'text-red-400' : 'text-green-400'}`}>
                            {step === 29 ? `Adding Noise: ${noiseLevel}%` : `Denoising: ${100 - noiseLevel}%`}
                        </span>
                    </div>
                </div>
            )}

            {/* Step 31: Insight */}
            {step === 31 && (
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center"
                >
                    <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                        Pure Noise → Pure Image
                    </h2>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                    </div>
                </motion.div>
            )}

        </div>
    );
};

export default DiffusionProcess;
