import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, Share2, Bell } from 'lucide-react';

// Scene 5: CTA - Light Theme
const Scene5 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 p-12 relative">

            {/* Background particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-2 h-8 rounded-full opacity-40 ${i % 3 === 0 ? 'bg-primary' :
                                i % 3 === 1 ? 'bg-secondary' : 'bg-accent'
                            }`}
                        style={{ left: `${10 + i * 6}%` }}
                        animate={{ y: [-50, 1920] }}
                        transition={{
                            duration: 1.5 / speed,
                            delay: i * 0.1,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Main CTA */}
            <motion.h1
                className="text-5xl font-black text-text-dark text-center z-10"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                Drop your answer in the
            </motion.h1>

            <motion.div
                className="flex items-center gap-4 z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 / speed, type: "spring", bounce: 0.5 }}
            >
                <MessageCircle size={80} className="text-primary fill-primary" />
                <span className="text-7xl font-black text-primary glow-primary">COMMENTS</span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
                className="flex gap-6 mt-8 z-10"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 / speed }}
            >
                <motion.button
                    className="flex flex-col items-center gap-2 bg-accent/10 border-2 border-accent text-accent p-5 rounded-2xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    <Heart size={48} className="fill-accent" />
                    <span className="font-bold text-lg">Like</span>
                </motion.button>

                <motion.button
                    className="flex flex-col items-center gap-2 bg-primary/10 border-2 border-primary text-primary p-5 rounded-2xl"
                >
                    <Share2 size={48} />
                    <span className="font-bold text-lg">Share</span>
                </motion.button>

                <motion.button
                    className="flex flex-col items-center gap-2 bg-secondary/10 border-2 border-secondary text-secondary p-5 rounded-2xl"
                >
                    <Bell size={48} className="fill-secondary" />
                    <span className="font-bold text-lg">Follow</span>
                </motion.button>
            </motion.div>

            {/* Follow for more */}
            <motion.p
                className="text-2xl text-text-muted text-center z-10 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 / speed }}
            >
                Follow for more <span className="text-secondary font-bold">daily riddles</span>!
            </motion.p>
        </div>
    );
};

export default Scene5;
