import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Chapter 1: Hook - PROPER STYLING
const Chapter1 = ({ currentSegment = 0 }) => {
    const floatingIcons = ['🤖', '💡', '💰', '⚡'];

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Background gradient */}
            <motion.div
                style={{ position: 'absolute', inset: 0 }}
                animate={{
                    background: [
                        'radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
                        'radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
                    ]
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Subtle floating icons */}
            {floatingIcons.map((icon, i) => (
                <motion.div
                    key={i}
                    style={{ position: 'absolute', fontSize: '2.5rem', opacity: 0.2, left: `${15 + i * 20}%`, top: `${25 + (i % 2) * 40}%` }}
                    animate={{ y: [0, -15, 0], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.5 }}
                >{icon}</motion.div>
            ))}

            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 80px', width: '100%' }}>
                {/* Segment 0: Everyone building AI */}
                <AnimatePresence mode="wait">
                    {currentSegment === 0 && (
                        <motion.div
                            key="segment-0"
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.h1
                                style={{ fontSize: '5rem', fontWeight: 900, color: 'white', marginBottom: '2rem' }}
                                animate={{ textShadow: ['0 0 20px rgba(59, 130, 246, 0.5)', '0 0 40px rgba(139, 92, 246, 0.8)', '0 0 20px rgba(59, 130, 246, 0.5)'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >Everyone is building</motion.h1>
                            <motion.span
                                className="gradient-text"
                                style={{ fontSize: '12rem', fontWeight: 900, display: 'inline-block' }}
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >AI</motion.span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Segment 1: 18 months */}
                <AnimatePresence mode="wait">
                    {currentSegment === 1 && (
                        <motion.div
                            key="segment-1"
                            className="glass-card"
                            style={{ padding: '4rem 5rem', border: '2px solid rgba(239, 68, 68, 0.5)', maxWidth: '1000px', margin: '0 auto' }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.span style={{ fontSize: '4.5rem', marginBottom: '1.5rem', display: 'block' }} animate={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}>⚠️</motion.span>
                            <p style={{ fontSize: '3rem', color: '#f87171', fontWeight: 700, marginBottom: '1.5rem' }}>Most AI startups won't last</p>
                            <motion.div style={{ fontSize: '6rem', fontWeight: 900, color: '#ef4444' }} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>18 MONTHS</motion.div>
                            <p style={{ fontSize: '1.75rem', color: '#9ca3af', marginTop: '1.5rem' }}>The AI graveyard is filling up fast</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Segment 2: Where's the money? */}
                <AnimatePresence mode="wait">
                    {currentSegment === 2 && (
                        <motion.div
                            key="segment-2"
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.h2
                                style={{ fontSize: '4.5rem', fontWeight: 700, color: 'white', lineHeight: 1.2 }}
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                So where is the{' '}
                                <motion.span
                                    style={{ color: '#fbbf24', display: 'inline-block' }}
                                    animate={{ scale: [1, 1.1, 1], textShadow: ['0 0 10px rgba(245, 158, 11, 0.5)', '0 0 40px rgba(245, 158, 11, 0.8)', '0 0 10px rgba(245, 158, 11, 0.5)'] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >real money</motion.span>?
                            </motion.h2>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '4rem' }}>
                                {[0, 1, 2].map((i) => (
                                    <motion.span key={i} style={{ fontSize: '4.5rem' }} animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>💰</motion.span>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Segment 3: The 6 Tiers */}
                <AnimatePresence mode="wait">
                    {currentSegment === 3 && (
                        <motion.div
                            key="segment-3"
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <p style={{ fontSize: '2.5rem', color: '#9ca3af', marginBottom: '1.5rem' }}>Introducing</p>
                            <motion.h2 className="gradient-text" style={{ fontSize: '6rem', fontWeight: 900, marginBottom: '3rem' }} animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 3, repeat: Infinity }}>The 6 Tiers of AI</motion.h2>
                            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
                                {[0, 1, 2, 3, 4, 5].map((tier, i) => (
                                    <motion.div
                                        key={tier}
                                        style={{ width: '80px', height: '80px', borderRadius: '50%', border: '4px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.6)' }}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: i * 0.08, type: "spring", damping: 15 }}
                                    >
                                        <span style={{ fontSize: '2rem', fontWeight: 900, color: 'white' }}>{tier}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.p style={{ fontSize: '1.75rem', color: '#fbbf24' }} animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }}>Your 5-minute MBA in AI Economics</motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

Chapter1.segmentCount = 4;
Chapter1.segmentIds = ['1_1', '1_2', '1_3', '1_4'];

export default Chapter1;
