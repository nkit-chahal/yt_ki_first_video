import { motion } from 'framer-motion';
import { Type, Box, Grid, ArrowRight, Expand, Shrink, Cpu } from 'lucide-react';

const PipelineFlow = ({ step }) => {
    // Step 12: Title "PART III - THE PIPELINE"
    // Step 13: Overview (3 Boxes)
    // Step 14-15: Text Encoder (User Input -> Vectors)
    // Step 16-17: VAE (Image -> Latent)
    // Step 18-19: U-Net (Latent + Noise -> Denoise with Cross Attn)
    // Step 20-21: VAE Decoder (Latent -> Image)

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative bg-[#0a0a0a] overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-1 opacity-5 mix-blend-overlay">
                {[...Array(144)].map((_, i) => (
                    <div key={i} className="bg-white/10 w-full h-full rounded-full transform scale-50" />
                ))}
            </div>

            {/* Step 32: Challenge Lock - "But one big challenge remained" */}
            {step === 32 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center gap-8 relative z-10"
                >
                    <motion.div
                        animate={{
                            rotate: [0, -10, 10, -10, 10, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="bg-red-500/20 p-16 rounded-3xl border-4 border-red-500 shadow-[0_0_100px_rgba(239,68,68,0.3)] backdrop-blur-xl"
                    >
                        <div className="text-9xl filter drop-shadow-2xl">🔒</div>
                    </motion.div>
                    <h2 className="text-4xl font-bold text-red-500 tracking-widest uppercase">Access Denied</h2>
                </motion.div>
            )}

            {/* Step 33: Control Question - "How do we control it?" */}
            {step === 33 && (
                <motion.div
                    className="relative w-full max-w-4xl flex items-center justify-center"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-8xl mr-8"
                    >
                        🧙‍♂️
                    </motion.div>
                    <motion.div className="flex flex-col gap-4">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                        <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            CONTROL?
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.2 }}
                            className="h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                        />
                    </motion.div>
                </motion.div>
            )}

            {/* Step 34: Bridge Visual - "CLIP & Embeddings" */}
            {step === 34 && (
                <div className="flex items-center gap-24 relative">
                    {/* Language Node */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="p-8 bg-blue-900/30 border border-blue-500 rounded-2xl backdrop-blur-md"
                    >
                        <span className="text-5xl font-black text-blue-400 block mb-2">TEXT</span>
                        <div className="flex gap-2 text-blue-300 font-mono text-sm">
                            <span>"Astronaut"</span>
                            <span>"Horse"</span>
                        </div>
                    </motion.div>

                    {/* The Bridge */}
                    <div className="relative w-96 h-4 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-white to-green-500 shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        />
                    </div>

                    {/* Vision Node */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="p-8 bg-green-900/30 border border-green-500 rounded-2xl backdrop-blur-md"
                    >
                        <span className="text-5xl font-black text-green-400 block mb-2">IMAGE</span>
                        <div className="flex gap-2 text-green-300 font-mono text-xs">
                            <div className="w-8 h-8 bg-green-500/50 rounded"></div>
                            <div className="w-8 h-8 bg-green-500/50 rounded"></div>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Step 35: Title */}
            {step === 35 && (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, filter: "blur(20px)" }}
                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                    className="text-center relative z-10"
                >
                    <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-red-600 mb-8 drop-shadow-2xl">PART III</h1>
                    <h2 className="text-7xl text-white font-thin tracking-[0.2em] border-b-2 border-orange-500 pb-4">PIPELINE</h2>
                </motion.div>
            )}

            {/* Step 36 & 37: Overview Boxes */}
            {(step === 36 || step === 37) && (
                <div className="w-full max-w-7xl relative flex items-center justify-center gap-12">
                    {/* Box 1 */}
                    <motion.div
                        layoutId="box1"
                        className="w-72 h-96 border border-gray-700 bg-gray-900/50 rounded-3xl flex flex-col items-center justify-center backdrop-blur-sm relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {step === 37 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
                                <Type size={64} className="text-blue-500 mb-6" />
                                <span className="text-3xl font-bold text-blue-400">TEXT</span>
                                <span className="text-sm text-gray-500 mt-2">ENCODER</span>
                            </motion.div>
                        )}
                    </motion.div>

                    <ArrowRight size={48} className="text-gray-600 animate-pulse" />

                    {/* Box 2 */}
                    <motion.div
                        layoutId="box2"
                        className="w-72 h-96 border border-gray-700 bg-gray-900/50 rounded-3xl flex flex-col items-center justify-center backdrop-blur-sm relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {step === 37 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
                                <Cpu size={64} className="text-orange-500 mb-6" />
                                <span className="text-3xl font-bold text-orange-400">DIFFUSION</span>
                                <span className="text-sm text-gray-500 mt-2">MODEL</span>
                            </motion.div>
                        )}
                    </motion.div>

                    <ArrowRight size={48} className="text-gray-600 animate-pulse" />

                    {/* Box 3 */}
                    <motion.div
                        layoutId="box3"
                        className="w-72 h-96 border border-gray-700 bg-gray-900/50 rounded-3xl flex flex-col items-center justify-center backdrop-blur-sm relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {step === 37 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
                                <Shrink size={64} className="text-yellow-500 mb-6" />
                                <span className="text-3xl font-bold text-yellow-400">VAE</span>
                                <span className="text-sm text-gray-500 mt-2">DECODER</span>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            )}

            {/* PIPELINE DEEP DIVE (Steps 38-59) */}
            {step >= 38 && (
                <div className="w-full max-w-7xl relative flex items-center justify-center gap-12">

                    {/* 1. TEXT ENCODER SECTION */}
                    <motion.div
                        animate={
                            (step >= 38 && step <= 42) ? { scale: 1, opacity: 1, filter: "brightness(1.2)" } :
                                step > 42 ? { scale: 0.8, opacity: 0.3, filter: "grayscale(100%)" } :
                                    { scale: 1, opacity: 1 }
                        }
                        className="w-80 h-[500px] bg-gradient-to-b from-blue-900/20 to-black border border-blue-500/50 rounded-3xl relative overflow-hidden flex flex-col items-center p-8 backdrop-blur-xl transition-all duration-500"
                    >
                        {/* Header */}
                        <div className="w-full flex items-center justify-between mb-8 border-b border-blue-500/30 pb-4">
                            <span className="text-blue-400 font-mono text-sm">MODULE_01</span>
                            <Type size={24} className="text-blue-500" />
                        </div>

                        {/* Dynamic Content */}
                        <div className="flex-1 w-full flex items-center justify-center relative">

                            {step === 38 && ( // Typing
                                <motion.div className="font-mono text-2xl text-blue-300">
                                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>"</motion.span>
                                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>A</motion.span>
                                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>s</motion.span>
                                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>t</motion.span>
                                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>r</motion.span>
                                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>o</motion.span>
                                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>"</motion.span>
                                    <motion.div
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="inline-block w-3 h-6 bg-blue-500 ml-1 align-middle"
                                    />
                                </motion.div>
                            )}

                            {step === 39 && ( // Step 1 Badge
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-32 h-32 rounded-full border-4 border-white flex items-center justify-center bg-blue-600">
                                    <span className="text-6xl font-black text-white">1</span>
                                </motion.div>
                            )}

                            {step === 40 && ( // Confusion
                                <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-center">
                                    <div className="text-8xl mb-4">💻</div>
                                    <div className="flex justify-center gap-2">
                                        <motion.span animate={{ y: -20, opacity: 0 }} transition={{ repeat: Infinity, duration: 1 }} className="text-4xl text-red-500 font-bold">?</motion.span>
                                        <motion.span animate={{ y: -20, opacity: 0 }} transition={{ repeat: Infinity, duration: 1, delay: 0.3 }} className="text-4xl text-red-500 font-bold">?</motion.span>
                                    </div>
                                </motion.div>
                            )}

                            {step === 41 && ( // Vectors Matrix
                                <div className="grid grid-cols-4 gap-2 font-mono text-xs text-green-400 opacity-80">
                                    {[...Array(24)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: Math.random() }}
                                            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                                        >
                                            {Math.random().toFixed(1)}
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {step === 42 && ( // Compass
                                <motion.div className="flex flex-col items-center">
                                    <div className="w-32 h-32 rounded-full border-2 border-green-500 relative flex items-center justify-center">
                                        <motion.div
                                            animate={{ rotate: 45 }}
                                            transition={{ type: "spring", damping: 10 }}
                                            className="w-1 h-24 bg-red-500 absolute"
                                        />
                                    </div>
                                    <span className="text-green-400 font-mono mt-4 tracking-widest">GUIDANCE LINKED</span>
                                </motion.div>
                            )}

                        </div>
                    </motion.div>


                    {/* 2. DIFFUSION MODEL SECTION */}
                    <motion.div
                        animate={
                            (step >= 48 && step <= 55) ? { scale: 1.1, opacity: 1, width: "400px", zIndex: 50 } : // Expanded Focus
                                step > 55 ? { scale: 0.8, opacity: 0.3, width: "320px", filter: "grayscale(100%)" } :
                                    step >= 36 ? { scale: 1, opacity: 1, width: "320px" } : { opacity: 0, width: 0 }
                        }
                        className="h-[500px] bg-gradient-to-b from-orange-900/20 to-black border border-orange-500/50 rounded-3xl relative overflow-hidden flex flex-col items-center p-8 backdrop-blur-xl transition-all duration-500"
                    >
                        <div className="w-full flex items-center justify-between mb-8 border-b border-orange-500/30 pb-4">
                            <span className="text-orange-400 font-mono text-sm">MODULE_02</span>
                            <Cpu size={24} className="text-orange-500" />
                        </div>

                        <div className="flex-1 w-full flex items-center justify-center relative">
                            {/* Step 48: Badge 3 */}
                            {step === 48 && (
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-32 h-32 rounded-full border-4 border-white flex items-center justify-center bg-orange-600">
                                    <span className="text-6xl font-black text-white">3</span>
                                </motion.div>
                            )}

                            {/* Step 49: Noise + Embeddings */}
                            {step === 49 && (
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-24 h-24 bg-white/10 rounded-lg relative overflow-hidden">
                                        {/* Static Noise CSS */}
                                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50"></div>
                                    </div>
                                    <div className="text-2xl text-white">+</div>
                                    <div className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded border border-blue-500 text-xs font-mono">
                                        [0.2, 0.9, ...]
                                    </div>
                                </div>
                            )}

                            {/* Step 50: Thinking */}
                            {step === 50 && (
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ repeat: Infinity }}
                                    className="bg-orange-500/20 rounded-full p-8 border-2 border-orange-500"
                                >
                                    <span className="text-6xl">🧠</span>
                                </motion.div>
                            )}

                            {/* Step 51: Comparison */}
                            {step === 51 && (
                                <div className="flex items-center gap-8">
                                    <div className="text-center opacity-50">
                                        <div className="w-20 h-20 bg-gray-800 rounded mb-2"></div>
                                        <span className="text-xs text-red-500">NOISE</span>
                                    </div>
                                    <ArrowRight className="text-orange-500" />
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-white/20 rounded mb-2 flex items-center justify-center text-2xl">👩‍🚀</div>
                                        <span className="text-xs text-green-500">TARGET</span>
                                    </div>
                                </div>
                            )}

                            {/* Step 52: Iterations */}
                            {step === 52 && (
                                <div className="text-center">
                                    <motion.div
                                        animate={{ opacity: [1, 0.5, 1] }}
                                        transition={{ duration: 0.1, repeat: Infinity }}
                                        className="text-6xl font-black text-orange-500 font-mono"
                                    >
                                        50
                                    </motion.div>
                                    <span className="text-orange-300 text-sm tracking-widest">STEPS REMAINING</span>
                                </div>
                            )}

                            {/* Step 53: Removal */}
                            {step === 53 && (
                                <div className="w-32 h-32 bg-gray-600 rounded-lg relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50"></div>
                                    <motion.div
                                        animate={{ height: ["0%", "100%"] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent to-orange-500/50 border-b-2 border-orange-400"
                                    />
                                </div>
                            )}

                            {/* Step 54: Attention */}
                            {step === 54 && (
                                <div className="relative w-40 h-40 border border-gray-600 rounded bg-black">
                                    {/* Fake image composition */}
                                    <motion.div animate={{ opacity: [0.3, 1] }} transition={{ repeat: Infinity }} className="absolute top-4 left-4 w-12 h-12 border-2 border-yellow-400 rounded-full flex items-center justify-center text-xs text-yellow-500 bg-yellow-400/10">HELMET</motion.div>
                                    <motion.div animate={{ opacity: [0.3, 1] }} transition={{ repeat: Infinity, delay: 1 }} className="absolute bottom-4 right-4 w-12 h-16 border-2 border-yellow-400 flex items-center justify-center text-xs text-yellow-500 bg-yellow-400/10">LEGS</motion.div>
                                </div>
                            )}

                            {/* Step 55: Cross Attention */}
                            {step === 55 && (
                                <div className="flex flex-col gap-2 w-full">
                                    <div className="flex justify-between text-xs font-mono text-gray-500 px-4">
                                        <span>QUERY (Text)</span>
                                        <span>KEY (Image)</span>
                                    </div>
                                    <div className="relative h-24 border border-orange-500/30 rounded bg-orange-900/10">
                                        <motion.div
                                            animate={{ x: ["0%", "100%"] }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
                                        />
                                    </div>
                                </div>
                            )}

                        </div>
                    </motion.div>


                    {/* 3. VAE DECODER SECTION */}
                    <motion.div
                        animate={
                            (step >= 43 && step <= 47) ? { scale: 1.1, opacity: 1, width: "320px", zIndex: 50, x: -100 } : // Shift left to focus
                                (step >= 56 && step <= 59) ? { scale: 1.1, opacity: 1, width: "320px", zIndex: 50 } : // Active again
                                    step >= 36 ? { scale: 1, opacity: 1, width: "320px" } : { opacity: 0, width: 0 }
                        }
                        className="h-[500px] bg-gradient-to-b from-yellow-900/20 to-black border border-yellow-500/50 rounded-3xl relative overflow-hidden flex flex-col items-center p-8 backdrop-blur-xl transition-all duration-500"
                    >
                        <div className="w-full flex items-center justify-between mb-8 border-b border-yellow-500/30 pb-4">
                            <span className="text-yellow-400 font-mono text-sm">MODULE_03</span>
                            <Expand size={24} className="text-yellow-500" />
                        </div>

                        <div className="flex-1 w-full flex items-center justify-center relative">
                            {/* Step 43 / 56: Badges */}
                            {(step === 43 || step === 56) && (
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-32 h-32 rounded-full border-4 border-white flex items-center justify-center bg-yellow-600">
                                    <span className="text-6xl font-black text-white">{step === 43 ? '2' : '4'}</span>
                                </motion.div>
                            )}

                            {/* Step 44: Cost */}
                            {step === 44 && (
                                <div className="text-center">
                                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity }} className="text-red-500 text-6xl font-bold mb-2">$$$</motion.div>
                                    <span className="text-red-400 font-mono text-xs">PIXEL COST HIGH</span>
                                </div>
                            )}

                            {/* Step 45: VRAM Fire */}
                            {step === 45 && (
                                <motion.div className="relative">
                                    <div className="text-8xl">🔥</div>
                                    <div className="absolute top-0 w-full text-center text-xl font-bold text-white bg-red-600 px-2 rounded">GPU MELT</div>
                                </motion.div>
                            )}

                            {/* Step 46: Compression */}
                            {step === 46 && (
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-32 h-32 border-2 border-dashed border-gray-500 rounded"></div>
                                    <ArrowRight className="rotate-90 text-yellow-500" />
                                    <div className="w-12 h-12 bg-yellow-500 rounded shadow-[0_0_20px_rgba(234,179,8,0.5)]"></div>
                                </div>
                            )}

                            {/* Step 47: Latent Space */}
                            {step === 47 && (
                                <div className="w-full h-full bg-black rounded-xl overflow-hidden relative">
                                    {[...Array(20)].map((_, i) => (
                                        <div key={i} className="absolute w-1 h-1 bg-white rounded-full" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
                                    ))}
                                    <div className="absolute inset-0 flex items-center justify-center text-yellow-500 font-mono tracking-widest text-xs">LATENT REPR</div>
                                </div>
                            )}

                            {/* Step 57: Math to Pixels */}
                            {step === 57 && (
                                <div className="grid grid-cols-3 gap-1 w-full">
                                    {[...Array(9)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ backgroundColor: ["#333", "#facc15", "#333"] }}
                                            transition={{ delay: i * 0.1, duration: 2, repeat: Infinity }}
                                            className="h-8 rounded bg-gray-800"
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Step 58: Inflation */}
                            {step === 58 && (
                                <motion.div
                                    initial={{ scale: 0.2 }}
                                    animate={{ scale: 1.5 }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur-sm"
                                />
                            )}

                            {/* Step 59: Final */}
                            {step === 59 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="w-full h-48 bg-white rounded-lg overflow-hidden shadow-2xl relative"
                                >
                                    <img src="https://images.unsplash.com/photo-1541873676-a18131494184?w=400" className="w-full h-full object-cover" />
                                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur">HD</div>
                                </motion.div>
                            )}

                        </div>
                    </motion.div>
                </div>
            )}


        </div>
    );
};

export default PipelineFlow;
