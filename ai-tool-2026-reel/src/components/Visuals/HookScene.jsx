import { motion } from 'framer-motion';
import { Code, Terminal, Bug, Sparkles } from 'lucide-react';

const HookScene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-amber-50 to-orange-100" />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.5, 1],
                            x: 100 + Math.random() * 880,
                            y: 200 + Math.random() * 1500,
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2
                        }}
                        className="absolute"
                    >
                        <Sparkles size={30 + Math.random() * 40} className="text-orange-400/40" />
                    </motion.div>
                ))}
            </div>

            {/* Main content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 text-center px-12"
            >
                {/* Year badge with glitch */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <motion.span
                        className="text-[180px] font-black text-orange-600 tracking-tight"
                        animate={{
                            textShadow: [
                                "0 0 20px rgba(234, 88, 12, 0.5)",
                                "0 0 60px rgba(234, 88, 12, 0.8)",
                                "0 0 20px rgba(234, 88, 12, 0.5)"
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        2026
                    </motion.span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-7xl font-bold text-gray-900 leading-tight mb-16"
                >
                    1 AI Tool<br />
                    <span className="text-orange-600">Every Developer Needs</span>
                </motion.h1>

                {/* Floating dev icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-center gap-8"
                >
                    {[
                        { Icon: Code, delay: 0 },
                        { Icon: Terminal, delay: 0.1 },
                        { Icon: Bug, delay: 0.2 }
                    ].map(({ Icon, delay }, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1 + delay }}
                            className="w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center border-2 border-orange-200"
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            >
                                <Icon size={40} className="text-orange-600" />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HookScene;
