import { motion } from 'framer-motion';
import { Bell, Zap, Heart, Share2 } from 'lucide-react';

const CTAScene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
            {/* Vibrant gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500 via-amber-500 to-orange-600" />

            {/* Floating shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 0.2,
                            y: [0, -30, 0],
                            rotate: [0, 10, 0]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.3
                        }}
                        className="absolute w-40 h-40 rounded-full bg-white/10"
                        style={{
                            left: `${10 + (i % 4) * 25}%`,
                            top: `${20 + Math.floor(i / 4) * 50}%`
                        }}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-12">
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-48 h-48 rounded-[40px] bg-[#1a1a1a] shadow-2xl flex items-center justify-center mb-16 mx-auto overflow-hidden"
                >
                    <img
                        src="/antigravity-logo.png"
                        alt="Antigravity Logo"
                        className="w-40 h-40 object-contain"
                    />
                </motion.div>

                {/* Antigravity text */}
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-7xl font-black text-white mb-6"
                >
                    Antigravity
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-3xl text-white/80 mb-20"
                >
                    by Google
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-6"
                >
                    {/* Subscribe button */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="inline-flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white px-16 py-8 rounded-full text-4xl font-bold shadow-2xl cursor-pointer"
                    >
                        <Bell size={40} />
                        <span>SUBSCRIBE</span>
                    </motion.div>

                    {/* Action buttons row */}
                    <div className="flex justify-center gap-6 mt-8">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-3 bg-white/20 backdrop-blur-xl px-10 py-5 rounded-full text-white text-2xl font-semibold cursor-pointer"
                        >
                            <Heart size={28} />
                            <span>Like</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-3 bg-white/20 backdrop-blur-xl px-10 py-5 rounded-full text-white text-2xl font-semibold cursor-pointer"
                        >
                            <Share2 size={28} />
                            <span>Share</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Footer text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-2xl text-white/70 mt-20"
                >
                    More AI tools coming in 2026 🚀
                </motion.p>
            </div>
        </div>
    );
};

export default CTAScene;
