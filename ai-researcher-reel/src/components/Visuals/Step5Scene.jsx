import { motion, AnimatePresence } from 'framer-motion';
import { Users, MessageCircle, Handshake, Globe } from 'lucide-react';

// Step 5: Community - Steps 22-24 (KINETIC REDESIGN)
const Step5Scene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">

            <div className="noise-overlay" />
            <div className="grid-background" />

            {/* Network Connections Background */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <motion.path
                    d="M100,100 Q400,300 700,100 T1200,500"
                    fill="none"
                    stroke="#DB2777"
                    strokeWidth="4"
                    strokeDasharray="20 20"
                    animate={{ strokeDashoffset: [0, 1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                    d="M-100,600 Q400,400 900,800"
                    fill="none"
                    stroke="#DB2777"
                    strokeWidth="4"
                    strokeDasharray="20 20"
                    animate={{ strokeDashoffset: [0, -1000] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
            </svg>

            <AnimatePresence mode="wait">
                {step === 22 && (
                    <motion.div
                        key="title"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                    >
                        <div className="relative mb-8">
                            {/* Pulsing Core */}
                            <motion.div
                                className="w-40 h-40 bg-pink-500 rounded-full flex items-center justify-center text-white text-6xl font-black shadow-2xl relative z-10"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                            >
                                <Users size={80} />
                            </motion.div>
                            {/* Expanding Rings */}
                            {[1, 2, 3].map(i => (
                                <motion.div
                                    key={i}
                                    className="absolute inset-0 bg-pink-500 rounded-full opacity-50"
                                    animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                                    transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                                />
                            ))}
                        </div>

                        <h1 className="text-6xl font-black text-white">JOIN THE</h1>
                        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 shimmer-text">
                            HIVE
                        </h1>
                    </motion.div>
                )}

                {step === 23 && (
                    <motion.div
                        key="places"
                        className="flex flex-col items-center z-10 w-full px-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex flex-col gap-4 w-full max-w-lg">
                            {['Discord', 'Twitter', 'Meetups', 'Labs'].map((place, i) => (
                                <motion.div
                                    key={place}
                                    className="bg-black/40 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-pink-500/20 flex items-center justify-center gap-3 animate-float-slow"
                                    style={{ animationDelay: `${i * 0.5}s` }}
                                    initial={{ scale: 0, rotate: -20 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", delay: i * 0.1 }}
                                >
                                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" />
                                    <span className="text-2xl font-bold text-gray-200">{place}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 24 && (
                    <motion.div
                        key="network"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex flex-col justify-center items-center gap-8 mt-8 w-full">
                            {[
                                { icon: Users, text: 'Network', color: 'bg-blue-500' },
                                { icon: MessageCircle, text: 'Feedback', color: 'bg-green-500' },
                                { icon: Handshake, text: 'Collaborate', color: 'bg-purple-500' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.text}
                                    className="flex flex-col items-center group"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <div className={`w-24 h-24 ${item.color} rounded-full flex items-center justify-center text-white shadow-lg mb-4 group-hover:rotate-12 transition-transform`}>
                                        <item.icon size={40} />
                                    </div>
                                    <span className="font-bold text-gray-300 text-xl bg-black/50 border border-white/10 px-4 py-1 rounded-full shadow-sm">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Step5Scene;
