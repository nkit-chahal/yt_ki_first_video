import { motion } from 'framer-motion';
import { HelpCircle, CheckCircle, Brain, Grid, MessageSquare, Zap, Film, Layers, Box, Cpu } from 'lucide-react';

const InterviewQuestions = ({ step }) => {
    // PART VI: INTERVIEW (Steps 74-83)
    // RECAP (Steps 84-87)

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative bg-[#0a0a0a] overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-1 opacity-5">
                {[...Array(144)].map((_, i) => (
                    <div key={i} className="bg-white/10 w-full h-full rounded-full transform scale-50" />
                ))}
            </div>

            {/* PART VI TITLE - Step 74 */}
            {step === 74 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center z-10"
                >
                    <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-8 filter drop-shadow-lg">PART VI</h1>
                    <h2 className="text-6xl text-white font-thin tracking-widest border-b-2 border-orange-500 pb-4">INTERVIEW PREP</h2>
                    <p className="mt-8 text-2xl text-orange-400 font-mono">MAANG 2026</p>
                </motion.div>
            )}

            {/* Q1: PIXEL SPACE - Step 75 */}
            {step === 75 && (
                <div className="flex flex-col items-center gap-8">
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-red-900/30 border border-red-500 p-8 rounded-2xl flex items-center gap-6 max-w-4xl">
                        <HelpCircle size={48} className="text-red-500" />
                        <span className="text-4xl text-white font-bold">Why not generate in pixel space?</span>
                    </motion.div>
                    <div className="grid grid-cols-3 gap-1">
                        {[...Array(9)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                                className="w-16 h-16 bg-red-500/20 border border-red-500"
                            />
                        ))}
                    </div>
                    <span className="text-red-400 font-mono">COST: EXPENSIVE (1024x1024x3)</span>
                </div>
            )}

            {/* A1: LATENT SPACE - Step 76 */}
            {step === 76 && (
                <div className="flex gap-12 items-center">
                    <div className="flex flex-col items-center gap-4 opacity-50">
                        <div className="w-64 h-64 border-2 border-red-500 bg-red-900/20 grid grid-cols-4 gap-1 p-2">
                            {[...Array(16)].map((_, i) => <div key={i} className="bg-red-500/50 w-full h-full" />)}
                        </div>
                        <span className="text-red-400">Pixels (Huge)</span>
                    </div>

                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-4xl text-white">➡️</motion.div>

                    <div className="flex flex-col items-center gap-4">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring" }}
                            className="w-32 h-32 border-4 border-green-500 bg-green-900/20 rounded-xl flex items-center justify-center"
                        >
                            <Box size={48} className="text-green-500" />
                        </motion.div>
                        <span className="text-green-400 font-bold text-2xl">Latent (Compressed)</span>
                        <span className="text-gray-400 font-mono text-sm">VRAM USAGE: LOW</span>
                    </div>
                </div>
            )}

            {/* Q2: TEXT CONTROL - Step 77 */}
            {step === 77 && (
                <div className="flex flex-col items-center gap-8">
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-blue-900/30 border border-blue-500 p-8 rounded-2xl flex items-center gap-6 max-w-4xl">
                        <HelpCircle size={48} className="text-blue-500" />
                        <span className="text-4xl text-white font-bold">How does text control the image?</span>
                    </motion.div>
                    <motion.div
                        animate={{ x: [-10, 10, -10] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-8xl"
                    >
                        🤔
                    </motion.div>
                </div>
            )}

            {/* A2: CROSS ATTENTION - Step 78 */}
            {step === 78 && (
                <div className="flex flex-col items-center gap-8 relative">
                    <div className="flex gap-20">
                        <div className="p-6 bg-gray-800 rounded-xl border border-gray-600">
                            <span className="text-blue-400 font-mono text-xl">"Astronaut"</span>
                        </div>
                        <div className="p-6 bg-gray-800 rounded-xl border border-gray-600">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">🧑‍🚀</div>
                        </div>
                    </div>
                    {/* Attention Lines */}
                    <svg className="absolute top-16 w-full h-32 pointer-events-none">
                        <motion.path
                            d="M 120 10 Q 200 80 280 10"
                            fill="transparent"
                            stroke="#3b82f6"
                            strokeWidth="4"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />
                    </svg>
                    <div className="mt-12 bg-blue-900/50 px-8 py-4 rounded-full border border-blue-500">
                        <span className="text-blue-300 font-bold tracking-widest">CROSS-ATTENTION MAP</span>
                    </div>
                </div>
            )}

            {/* Q3: GANs - Step 79 */}
            {step === 79 && (
                <div className="flex flex-col items-center gap-8">
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-yellow-900/30 border border-yellow-500 p-8 rounded-2xl flex items-center gap-6 max-w-4xl">
                        <HelpCircle size={48} className="text-yellow-500" />
                        <span className="text-4xl text-white font-bold">What killed GANs?</span>
                    </motion.div>
                    <div className="text-8xl grayscale opacity-50">💀</div>
                </div>
            )}

            {/* A3: MODE COLLAPSE - Step 80 */}
            {step === 80 && (
                <div className="grid grid-cols-2 gap-16">
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-red-500 font-bold text-2xl">GANs</div>
                        <div className="grid grid-cols-2 gap-2">
                            {[1, 2, 3, 4].map(i => <div key={i} className="w-16 h-16 bg-gray-700 rounded flex items-center justify-center text-3xl">🐶</div>)}
                        </div>
                        <span className="text-red-400 font-mono">MODE COLLAPSE</span>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-green-500 font-bold text-2xl">DIFFUSION</div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="w-16 h-16 bg-gray-800 rounded flex items-center justify-center text-3xl">🐶</div>
                            <div className="w-16 h-16 bg-gray-800 rounded flex items-center justify-center text-3xl">🐱</div>
                            <div className="w-16 h-16 bg-gray-800 rounded flex items-center justify-center text-3xl">🚗</div>
                            <div className="w-16 h-16 bg-gray-800 rounded flex items-center justify-center text-3xl">🏠</div>
                        </div>
                        <span className="text-green-400 font-mono">STABLE DISTRIBUTION</span>
                    </div>
                </div>
            )}

            {/* Q4: VIDEO - Step 81 */}
            {step === 81 && (
                <div className="flex flex-col items-center gap-8">
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-purple-900/30 border border-purple-500 p-8 rounded-2xl flex items-center gap-6 max-w-4xl">
                        <HelpCircle size={48} className="text-purple-500" />
                        <span className="text-4xl text-white font-bold">How to extend to video?</span>
                    </motion.div>
                    <Film size={80} className="text-purple-500 animate-pulse" />
                </div>
            )}

            {/* A4: 3D VOLUME - Step 82 */}
            {step === 82 && (
                <div className="relative">
                    <motion.div
                        animate={{ rotateX: 360, rotateY: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="w-64 h-64 border-4 border-purple-500 rounded-xl relative transform-style-3d bg-purple-900/20"
                    >
                        <div className="absolute inset-0 flex items-center justify-center text-purple-300 font-bold text-4xl transform translate-z-10">XYT</div>
                    </motion.div>
                    <div className="absolute -bottom-16 w-full text-center text-purple-400 font-mono text-xl">3D CONVOLUTION VOLUME</div>
                </div>
            )}

            {/* FUNDAMENTALS - Step 83 */}
            {step === 83 && (
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center"
                >
                    <h2 className="text-6xl text-white font-bold mb-8">FUNDAMENTALS ACQUIRED</h2>
                    <div className="flex justify-center gap-4">
                        <CheckCircle className="text-green-500" size={48} />
                        <CheckCircle className="text-green-500" size={48} />
                        <CheckCircle className="text-green-500" size={48} />
                    </div>
                </motion.div>
            )}

            {/* RECAP TITLE - Step 84 */}
            {step === 84 && (
                <motion.div
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center"
                >
                    <h1 className="text-9xl text-gray-800 font-black tracking-tighter mix-blend-difference">RECAP</h1>
                    <div className="w-32 h-2 bg-white mt-4"></div>
                </motion.div>
            )}

            {/* RECAP 1: GAN vs DIFFUSION - Step 85 */}
            {step === 85 && (
                <div className="flex gap-20 items-center">
                    <div className="flex flex-col items-center gap-4 grayscale opacity-50">
                        <div className="text-6xl">⚔️</div>
                        <span className="text-gray-500 font-bold">GANs (Fought)</span>
                    </div>
                    <div className="text-4xl text-white">vs</div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-6xl text-blue-400">🌊</div>
                        <span className="text-blue-400 font-bold">Diffusion (Denoised)</span>
                    </div>
                </div>
            )}

            {/* RECAP 2: 3 MODEL PIPELINE - Step 86 */}
            {step === 86 && (
                <div className="flex gap-4 items-center">
                    <div className="p-8 bg-blue-900/30 border border-blue-500 rounded-xl flex flex-col items-center">
                        <span className="text-4xl mb-2">🔤</span>
                        <span className="text-blue-300 font-bold">CLIP</span>
                    </div>
                    <div className="text-2xl text-gray-500">+</div>
                    <div className="p-8 bg-purple-900/30 border border-purple-500 rounded-xl flex flex-col items-center">
                        <span className="text-4xl mb-2">🧠</span>
                        <span className="text-purple-300 font-bold">UNET</span>
                    </div>
                    <div className="text-2xl text-gray-500">+</div>
                    <div className="p-8 bg-green-900/30 border border-green-500 rounded-xl flex flex-col items-center">
                        <span className="text-4xl mb-2">🖼️</span>
                        <span className="text-green-300 font-bold">VAE</span>
                    </div>
                </div>
            )}

            {/* RECAP 3: LATENT MAGIC - Step 87 */}
            {step === 87 && (
                <div className="flex flex-col items-center gap-8">
                    <div className="relative w-96 h-64 bg-black border border-white/20 rounded-2xl overflow-hidden flex items-center justify-center">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-center text-2xl text-gray-300 font-thin italic">
                            "Reversing chaos,<br />guided by language."
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <span className="px-4 py-1 rounded-full bg-white/10 text-xs font-mono">Stable</span>
                        <span className="px-4 py-1 rounded-full bg-white/10 text-xs font-mono">Efficient</span>
                        <span className="px-4 py-1 rounded-full bg-white/10 text-xs font-mono">Controllable</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InterviewQuestions;
