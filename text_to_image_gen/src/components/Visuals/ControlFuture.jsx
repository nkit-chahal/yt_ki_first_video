import { motion } from 'framer-motion';
import { Sliders, User, Box, Film, Lock, Zap, Layers, Wand2, Grid, Camera, Globe, Cpu } from 'lucide-react';

const ControlFuture = ({ step }) => {
    // PART IV: CONTROL SYSTEMS (Steps 60-68)
    // PART V: FUTURE (Steps 69-73)

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative bg-[#0a0a0a] overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-1 opacity-5 mix-blend-overlay">
                {[...Array(144)].map((_, i) => (
                    <div key={i} className="bg-white/10 w-full h-full rounded-full transform scale-50" />
                ))}
            </div>

            {/* PART IV TITLE */}
            {step === 60 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center z-10"
                >
                    <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8 filter drop-shadow-lg">PART IV</h1>
                    <h2 className="text-6xl text-white font-thin tracking-widest border-b-2 border-purple-500 pb-4">CONTROL SYSTEMS</h2>
                </motion.div>
            )}

            {/* SLOT MACHINE (Randomness) - Step 61 */}
            {step === 61 && (
                <div className="flex flex-col items-center gap-8">
                    <div className="flex gap-4 p-8 bg-gray-900 rounded-3xl border-4 border-yellow-500/50 shadow-[0_0_50px_rgba(234,179,8,0.3)]">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-32 h-48 bg-white text-6xl flex items-center justify-center rounded overflow-hidden relative border-inner">
                                <motion.div
                                    animate={{ y: ["0%", "-100%"] }}
                                    transition={{ duration: 0.2 + (i * 0.1), repeat: Infinity, ease: "linear" }}
                                    className="absolute flex flex-col items-center gap-8"
                                >
                                    <span>🍎</span><span>🤖</span><span>🤡</span><span>👽</span><span>🍎</span>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                    <span className="text-2xl text-yellow-500 font-mono blink">RANDOM_SEED: ???</span>
                </div>
            )}

            {/* LEVER PULL (Hope) - Step 62 */}
            {step === 62 && (
                <div className="flex items-center gap-12">
                    <div className="w-4 h-64 bg-gray-700 rounded-full relative">
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 45 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="w-8 h-8 bg-red-500 rounded-full absolute -top-4 -left-2 shadow-[0_0_20px_rgba(239,68,68,0.8)] origin-bottom"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <motion.div animate={{ opacity: [0, 1] }} className="text-4xl text-gray-500 font-bold">🤞 HOPING...</motion.div>
                        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.5 }} className="w-64 h-64 bg-gray-800 rounded-xl flex items-center justify-center">
                            <span className="text-6xl">💩</span>
                        </motion.div>
                    </div>
                </div>
            )}

            {/* CONTROLNET INTRO (Injects Pose) - Step 63 */}
            {step === 63 && (
                <div className="flex items-center gap-8">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="w-64 h-80 border border-blue-500 bg-blue-900/20 rounded-xl flex flex-col items-center justify-center"
                    >
                        <User size={64} className="text-blue-400 mb-4" />
                        <span className="text-blue-300 font-mono">POSE_DATA</span>
                    </motion.div>

                    <div className="relative w-32">
                        <motion.div
                            animate={{ x: ["0%", "100%"] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="h-2 bg-blue-500 rounded-full w-12"
                        />
                        <div className="h-1 bg-gray-800 w-full absolute top-0.5 -z-10" />
                    </div>

                    <div className="w-80 h-96 border-4 border-blue-500 rounded-2xl flex items-center justify-center relative bg-black/50">
                        <span className="text-4xl font-bold text-white">DIFFUSION</span>
                        <div className="absolute -top-4 bg-blue-500 text-white px-4 rounded">CONTROLNET ADAPTER</div>
                    </div>
                </div>
            )}

            {/* LORA INTRO (Style) - Step 64 */}
            {step === 64 && (
                <div className="flex items-center gap-8">
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        className="w-48 h-64 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                    >
                        <Wand2 size={48} className="text-white" />
                        <span className="absolute bottom-4 text-white font-bold">LoRA CHECKPOINT</span>
                    </motion.div>
                    <div className="text-4xl text-white">+</div>
                    <div className="w-64 h-64 bg-gray-800 rounded-xl overflow-hidden grayscale relative">
                        <div className="w-full h-full flex items-center justify-center text-6xl">😐</div>
                        <motion.div
                            animate={{ opacity: [0, 0.5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-pink-500 mix-blend-overlay"
                        />
                    </div>
                </div>
            )}

            {/* FACE/LIGHTING - Step 65 */}
            {step === 65 && (
                <div className="grid grid-cols-2 gap-12">
                    <motion.div className="bg-gray-800 p-8 rounded-2xl flex flex-col items-center">
                        <div className="text-8xl mb-4">👩</div>
                        <div className="text-green-500 font-mono">ID: LOCKED</div>
                    </motion.div>
                    <motion.div
                        animate={{ backgroundColor: ["#333", "#facc15", "#1e3a8a", "#333"] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="p-8 rounded-2xl flex flex-col items-center justify-center"
                    >
                        <span className="text-2xl text-white font-bold">LIGHTING VAR</span>
                        <div className="flex gap-2 mt-4 text-4xl">
                            <span>☀️</span><span>➡️</span><span>🌑</span>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* EXACT POSE - Step 66 */}
            {step === 66 && (
                <div className="relative w-96 h-96">
                    <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400" className="w-full h-full object-cover rounded-2xl opacity-50" />
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                        <motion.line
                            x1="50" y1="20" x2="50" y2="50"
                            stroke="#00ff00" strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                        />
                        <motion.line
                            x1="50" y1="50" x2="20" y2="70"
                            stroke="#00ff00" strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.2 }}
                        />
                        <motion.line
                            x1="50" y1="50" x2="80" y2="70"
                            stroke="#00ff00" strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.2 }}
                        />
                    </svg>
                    <div className="absolute bottom-4 left-0 w-full text-center bg-black/70 text-green-400 font-mono">SKELETON_LOCK_ACTIVE</div>
                </div>
            )}

            {/* CANNY EDGES - Step 67 */}
            {step === 67 && (
                <div className="flex gap-8">
                    <div className="w-64 h-64 bg-white rounded-xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=400" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-64 h-64 bg-black rounded-xl border border-white flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                            className="text-white text-9xl font-thin"
                            style={{ WebkitTextStroke: "1px white", color: "transparent" }}
                        >
                            🏔️
                        </motion.div>
                    </div>
                </div>
            )}

            {/* CHAOS TO ORDER - Step 68 */}
            {step === 68 && (
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Random Points */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: (Math.random() - 0.5) * 800, y: (Math.random() - 0.5) * 600, opacity: 1 }}
                            animate={{ x: (i % 5 - 2) * 100, y: (Math.floor(i / 5) - 2) * 100, scale: 0.5 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="absolute w-4 h-4 bg-orange-500 rounded-full"
                        />
                    ))}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        className="text-6xl font-bold text-white z-10 bg-black/50 px-8 py-4 rounded"
                    >
                        DIRECTED DESIGN
                    </motion.div>
                </div>
            )}


            {/* PART V TITLE */}
            {step === 69 && (
                <motion.div
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center z-10"
                >
                    <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 mb-8 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">PART V</h1>
                    <h2 className="text-6xl text-white font-thin tracking-widest border-b-2 border-cyan-500 pb-4">THE FUTURE</h2>
                </motion.div>
            )}

            {/* TRANSFORMERS - Step 70 */}
            {step === 70 && (
                <div className="flex gap-12 items-center">
                    <div className="flex flex-col items-center opacity-50">
                        <div className="w-32 h-32 border-2 border-gray-500 rounded-full flex items-center justify-center mb-2">U-NET</div>
                        <span className="text-gray-500">Legacy</span>
                    </div>
                    <div className="text-4xl text-cyan-500">➡️</div>
                    <div className="flex flex-col items-center">
                        <div className="grid grid-cols-2 gap-2 mb-2">
                            {[1, 2, 3, 4].map(i => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="w-16 h-16 bg-cyan-900/50 border border-cyan-500 rounded flex items-center justify-center text-cyan-300"
                                >
                                    Tx
                                </motion.div>
                            ))}
                        </div>
                        <span className="text-cyan-400 font-bold glow-cyan">O(N) SCALITY</span>
                    </div>
                </div>
            )}

            {/* VIDEO TIME DIMENSION - Step 71 */}
            {step === 71 && (
                <div className="relative perspective-1000">
                    <motion.div
                        animate={{ rotateY: 45 }}
                        className="flex items-center gap-1"
                    >
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ z: 0, opacity: 0 }}
                                animate={{ z: -i * 50, opacity: 1 }}
                                transition={{ delay: i * 0.2 }}
                                className="w-48 h-32 bg-purple-900 border border-purple-500 flex items-center justify-center text-2xl font-bold text-white shadow-xl"
                                style={{ transform: `translateZ(${-i * 50}px)` }}
                            >
                                t={i}
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className="absolute -bottom-20 w- full text-center text-purple-400 text-xl font-mono">TIME DIMENSION DETECTED</div>
                </div>
            )}

            {/* TEMPORAL CONSISTENCY - Step 72 */}
            {step === 72 && (
                <div className="flex gap-16">
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-red-500 font-bold">BAD (Flicker)</div>
                        <div className="flex gap-2">
                            <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.2, repeat: Infinity }} className="text-6xl">🧑‍🚀</motion.div>
                            <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.3, repeat: Infinity }} className="text-6xl">🐻</motion.div>
                        </div>
                    </div>
                    <div className="w-1 h-32 bg-gray-700"></div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-green-500 font-bold">GOOD (Consistent)</div>
                        <div className="flex gap-2">
                            <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-6xl">🧑‍🚀</motion.div>
                        </div>
                    </div>
                </div>
            )}

            {/* SPACE TIME VOLUME - Step 73 */}
            {step === 73 && (
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="relative w-64 h-64 border-4 border-cyan-500 bg-cyan-900/10 rounded-xl flex items-center justify-center animate-spin-slow-3d">
                        {/* 3D Cube representation */}
                        <div className="absolute inset-0 border border-cyan-500/30 transform translate-z-10"></div>
                        <div className="absolute inset-0 border border-cyan-500/30 transform -translate-z-10"></div>

                        <motion.div
                            animate={{ opacity: [0.2, 0.8, 0.2] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="bg-cyan-500/20 w-48 h-48 rounded blur-md"
                        />

                        <span className="z-10 text-white font-black text-2xl drop-shadow-md">XYT VOLUME</span>
                    </div>
                    <div className="mt-12 bg-black/60 px-8 py-4 rounded-full border border-cyan-500/50">
                        <span className="text-cyan-400 font-mono typing-cursor">Denoising (x, y, t) simultaneously...</span>
                    </div>
                </div>
            )}


        </div>
    );
};

export default ControlFuture;
