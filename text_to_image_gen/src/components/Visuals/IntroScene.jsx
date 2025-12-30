import { motion } from 'framer-motion';
import { Search, Sparkles, Wand2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const IntroScene = ({ step }) => {
    // Step 0: Logos/Intro
    // Step 1: Typing
    // Step 2: Magic/Painting

    const [displayText, setDisplayText] = useState('');
    const fullText = "A futuristic city with flying cars, cyberpunk style";

    // Typing effect for Step 1
    useEffect(() => {
        if (step === 1) {
            let current = 0;
            const timer = setInterval(() => {
                if (current < fullText.length) {
                    setDisplayText(fullText.slice(0, current + 1));
                    current++;
                } else {
                    clearInterval(timer);
                }
            }, 50);
            return () => clearInterval(timer);
        } else if (step === 0 || step === 3) {
            setDisplayText('');
        } else if (step === 2) {
            setDisplayText(fullText);
        }
    }, [step]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">

            {/* Background Particles (Always active but subtle) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 2, 1],
                            x: Math.random() * 1920,
                            y: Math.random() * 1080,
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute text-orange-500/20"
                    >
                        <Sparkles size={20 + Math.random() * 40} />
                    </motion.div>
                ))}
            </div>

            {/* Step 0: Model Icons */}
            {step === 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex gap-20"
                >
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-32 h-32 rounded-3xl bg-orange-100 border border-orange-500/50 flex items-center justify-center glow-orange shadow-lg">
                            <Sparkles size={64} className="text-orange-600" />
                        </div>
                        <span className="text-2xl font-bold text-gray-800">ChatGPT</span>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-32 h-32 rounded-3xl bg-yellow-100 border border-yellow-500/50 flex items-center justify-center glow-orange shadow-lg">
                            <Wand2 size={64} className="text-yellow-600" />
                        </div>
                        <span className="text-2xl font-bold text-gray-800">Nano Banana</span>
                    </div>
                </motion.div>
            )}

            {/* Step 1 & 2: Search Bar */}
            {(step === 1 || step === 2) && (
                <motion.div
                    initial={{ opacity: 0, width: "200px" }}
                    animate={{ opacity: 1, width: "800px", y: step === 2 ? -300 : 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="h-24 bg-white border-2 border-orange-200 rounded-full flex items-center px-8 gap-4 shadow-xl absolute z-20"
                >
                    <Search className="text-orange-400" size={32} />
                    <span className="text-3xl font-medium text-gray-800 font-mono border-r-2 border-orange-500 pr-1 animate-pulse">
                        {displayText}
                    </span>
                </motion.div>
            )}

            {/* Step 2: Magic Realization */}
            {step === 2 && (
                <div className="relative mt-20">
                    {/* The "Magic" Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="w-[800px] h-[500px] rounded-3xl overflow-hidden dark-card border-4 border-orange-500/30 glow-orange relative"
                    >
                        {/* Placeholder for generated image - using a subtle gradient for now */}
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}>
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <div className="text-center p-8 bg-black/50 backdrop-blur-md rounded-2xl border border-white/10">
                                    <Sparkles className="w-16 h-16 text-orange-400 mx-auto mb-4 animate-spin-slow" />
                                    <p className="text-orange-100/80 font-medium text-lg">Generating...</p>
                                </div>
                            </div>
                        </div>

                        {/* Overlay particles */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2, delay: 1 }}
                        />
                    </motion.div>
                </div>
            )}

            {/* Step 100: Subscribe CTA */}
            {step === 100 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-8 bg-white/90 backdrop-blur-xl p-16 rounded-[3rem] shadow-2xl border-4 border-red-500/20"
                >
                    <div className="w-40 h-40 rounded-full bg-red-500 flex items-center justify-center shadow-lg animate-bounce">
                        <svg className="w-20 h-20 text-white fill-current" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                    </div>
                    <h2 className="text-6xl font-bold text-gray-900 tracking-tighter">SUBSCRIBE</h2>
                    <p className="text-2xl text-gray-600 font-medium">Join the engineering revolution.</p>
                </motion.div>
            )}
        </div>
    );
};

export default IntroScene;
