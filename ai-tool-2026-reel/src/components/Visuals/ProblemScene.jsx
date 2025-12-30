import { motion } from 'framer-motion';
import { Bug, AlertCircle, Clock, Coffee, XCircle } from 'lucide-react';

const ProblemScene = ({ step }) => {
    const isStep2 = step >= 2;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
            {/* Dark frustrated background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />

            {/* Floating error messages */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[
                    { text: "TypeError: undefined is not a function", x: 50, y: 200, rotate: -5 },
                    { text: "ENOENT: no such file or directory", x: 700, y: 350, rotate: 8 },
                    { text: "Segmentation fault (core dumped)", x: 100, y: 600, rotate: -3 },
                    { text: "Cannot read property 'map' of null", x: 600, y: 800, rotate: 5 },
                    { text: "Maximum call stack exceeded", x: 150, y: 1100, rotate: -8 },
                    { text: "Module not found: react", x: 650, y: 1300, rotate: 3 },
                ].map((error, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: error.x - 100 }}
                        animate={{
                            opacity: [0.4, 0.7, 0.4],
                            x: error.x,
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.3
                        }}
                        style={{
                            top: error.y,
                            left: error.x,
                            transform: `rotate(${error.rotate}deg)`
                        }}
                        className="absolute bg-red-900/40 border border-red-500/50 px-4 py-2 rounded-lg"
                    >
                        <div className="flex items-center gap-2">
                            <XCircle size={16} className="text-red-400" />
                            <span className="text-red-300 font-mono text-sm">{error.text}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-12">
                {/* 40% stat */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="mb-12"
                >
                    <span className="text-[200px] font-black text-red-500">40%</span>
                </motion.div>

                {/* Problem text */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                >
                    <h2 className="text-5xl font-bold text-white">
                        of developer time is <span className="text-red-400">wasted</span>
                    </h2>
                    <p className="text-3xl text-gray-400">
                        debugging & writing boilerplate
                    </p>
                </motion.div>

                {/* Icons row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-center gap-12 mt-16"
                >
                    {[
                        { Icon: Bug, label: "Bugs" },
                        { Icon: Clock, label: "Hours" },
                        { Icon: Coffee, label: "Stress" },
                    ].map(({ Icon, label }, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1 + i * 0.2 }}
                            className="flex flex-col items-center gap-3"
                        >
                            <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center">
                                <Icon size={36} className="text-red-400" />
                            </div>
                            <span className="text-gray-400 text-xl">{label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Hours -> Seconds transition (step 2) */}
                {isStep2 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mt-20 bg-gray-800/80 backdrop-blur-xl px-16 py-8 rounded-3xl border border-gray-700"
                    >
                        <div className="flex items-center gap-8">
                            <span className="text-5xl font-bold text-red-400 line-through">Hours</span>
                            <motion.span
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="text-4xl text-gray-500"
                            >
                                →
                            </motion.span>
                            <span className="text-5xl font-bold text-green-400">Seconds</span>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ProblemScene;
