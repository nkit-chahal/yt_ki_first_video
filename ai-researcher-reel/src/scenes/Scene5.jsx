import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, ExternalLink, Zap } from 'lucide-react';

// Scene 5: CTA - Subscribe
const Scene5 = ({ playbackSpeed = 1 }) => {
    const t = (val) => val / playbackSpeed;

    return (
        <div className="w-full h-full bg-[#090909] text-white flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background Burst */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-0"
                    animate={{ opacity: [0, 0.5, 0.2] }}
                    transition={{ duration: t(3) }}
                />
                <motion.div
                    className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: t(4), repeat: Infinity }}
                />
            </div>

            {/* Text Overlay */}
            <div className="z-10 text-center space-y-2">
                <motion.p
                    className="text-gray-400 text-xl font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: t(0.2) }}
                >
                    Want to code...
                </motion.p>

                <motion.h1
                    className="text-6xl font-black italic tracking-tighter"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: t(0.5), type: "spring", stiffness: 200 }}
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                        2x FASTER?
                    </span>
                </motion.h1>

                <motion.p
                    className="text-gray-300 pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: t(1.5) }}
                >
                    Try <b>Cursor</b> Today (It's Free)
                </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
                className="mt-8 flex flex-col gap-4 z-10 w-64"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: t(2) }}
            >
                <div className="flex items-center justify-center gap-2 bg-white text-black font-bold py-3 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform">
                    <ExternalLink size={20} />
                    <span>Download Cursor</span>
                </div>

                <div className="flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-3 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform">
                    <Youtube size={24} />
                    <span>SUBSCRIBE</span>
                </div>
            </motion.div>

        </div>
    );
};

export default Scene5;
