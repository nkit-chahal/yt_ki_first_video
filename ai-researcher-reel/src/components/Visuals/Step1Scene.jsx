import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Database, Code2 } from 'lucide-react';

// Step 1: Foundations - Steps 6-9 (KINETIC REDESIGN)
const Step1Scene = ({ step }) => {

    // Cards stack config
    const cards = [
        { id: 0, name: 'Linear Algebra', icon: Layers, color: 'bg-blue-500' },
        { id: 1, name: 'Prob & Stats', icon: Database, color: 'bg-green-500' },
        { id: 2, name: 'PyTorch', icon: Code2, color: 'bg-orange-500' },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">

            <div className="noise-overlay" />
            <div className="grid-background" />

            <AnimatePresence mode="wait">
                {step === 6 && (
                    <motion.div
                        key="title"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        <motion.div
                            className="text-[120px] font-black text-white/[0.05] absolute top-20 select-none"
                            initial={{ scale: 2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                        >
                            01
                        </motion.div>

                        <div className="relative z-10 text-center mt-32">
                            <h1 className="text-4xl font-bold text-gray-400 tracking-wider mb-2">MASTER</h1>
                            <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 shimmer-text">
                                THE BASICS
                            </h1>
                        </div>
                    </motion.div>
                )}

                {(step >= 7 && step <= 9) && (
                    <motion.div
                        key="stack"
                        className="flex flex-col items-center z-10 w-full h-full justify-center perspective-1000"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="relative w-64 h-80">
                            {cards.map((card, index) => {
                                // Logic for stacking: 
                                // Step 7 -> Show card 0
                                // Step 8 -> Show card 0 (behind), card 1 (front)
                                // Step 9 -> Show card 0, 1 (behind), card 2 (front)
                                const activeIndex = step - 7; // 0, 1, 2
                                if (index > activeIndex) return null;

                                const isTop = index === activeIndex;

                                return (
                                    <motion.div
                                        key={card.name}
                                        className={`absolute inset-0 rounded-3xl ${card.color} shadow-2xl flex flex-col items-center justify-center text-white border-4 border-white/10`}
                                        initial={{ x: 100, opacity: 0, rotate: 10 }}
                                        animate={{
                                            x: isTop ? 0 : index * 10 - 10, // Slight offset for stack look
                                            y: isTop ? 0 : index * 10 - 10,
                                            scale: isTop ? 1 : 0.95,
                                            rotate: isTop ? 0 : -5,
                                            opacity: 1,
                                            zIndex: index
                                        }}
                                        transition={{ type: "spring", stiffness: 150, damping: 20 }}
                                    >
                                        <card.icon size={80} className="mb-6 drop-shadow-md" />
                                        <h2 className="text-3xl font-black text-center px-4">{card.name}</h2>

                                        {/* Sheen effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 rounded-3xl" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Step1Scene;
