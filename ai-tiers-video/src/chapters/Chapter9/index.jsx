import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Chapter 9: CTA - INLINE STYLES
const Chapter9 = ({ currentSegment = 0 }) => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <motion.div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(180, 83, 9, 0.2), transparent, rgba(139, 92, 246, 0.2))' }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity }} />
            <motion.div style={{ position: 'absolute', width: '600px', height: '600px', background: 'rgba(245, 158, 11, 0.3)', borderRadius: '50%', filter: 'blur(150px)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} />

            <div style={{ position: 'relative', zIndex: 10, padding: '0 5rem', width: '100%', maxWidth: '1200px' }}>
                <AnimatePresence mode="wait">
                    {currentSegment === 1 && (
                        <motion.div key="seg1" className="glass-card glow-amber" style={{ padding: '4rem', textAlign: 'center' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2 }}>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                                <motion.span style={{ fontSize: '4rem' }} animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>🤖</motion.span>
                                <motion.span style={{ fontSize: '4rem' }} animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>🚀</motion.span>
                                <motion.span style={{ fontSize: '4rem' }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}>💰</motion.span>
                            </div>
                            <p style={{ fontSize: '1.75rem', color: '#9ca3af', marginBottom: '1.5rem' }}>Something practical you can use TODAY</p>
                            <motion.h2 style={{ fontSize: '4.5rem', fontWeight: 900, color: '#fbbf24', marginBottom: '2rem' }} animate={{ scale: [1, 1.05, 1], textShadow: ['0 0 20px rgba(245, 158, 11, 0.5)', '0 0 40px rgba(245, 158, 11, 0.8)'] }} transition={{ duration: 2, repeat: Infinity }}>AutoDS</motion.h2>
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                <p style={{ fontSize: '2rem', color: '#d1d5db' }}>30-Day Trial for just</p>
                                <motion.p style={{ fontSize: '6rem', fontWeight: 900, color: 'white', marginTop: '1rem' }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>$1</motion.p>
                                <motion.span style={{ position: 'absolute', top: '-1rem', right: '-2rem', fontSize: '3rem' }} animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>🔥</motion.span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {currentSegment === 2 && (
                        <motion.div key="seg2" className="glass-card" style={{ padding: '3rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }}>
                            <motion.h3 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fbbf24', marginBottom: '2.5rem', textAlign: 'center' }} animate={{ textShadow: ['0 0 10px rgba(245, 158, 11, 0.5)', '0 0 30px rgba(245, 158, 11, 0.8)'] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>AI-Powered Dropshipping</motion.h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                                {[{ icon: '📦', title: 'Find Products', desc: 'AI product research' }, { icon: '🚚', title: 'Auto Shipping', desc: 'Automated fulfillment' }, { icon: '✅', title: 'Order Fulfillment', desc: 'Hands-free processing' }].map((feature, i) => (
                                    <motion.div key={feature.title} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }} whileHover={{ scale: 1.05, y: -5 }}>
                                        <motion.div style={{ fontSize: '3.5rem', marginBottom: '1rem' }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>{feature.icon}</motion.div>
                                        <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>{feature.title}</p>
                                        <p style={{ fontSize: '1rem', color: '#9ca3af' }}>{feature.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.p style={{ textAlign: 'center', fontSize: '1.5rem', color: '#9ca3af', marginTop: '2.5rem' }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>Part of your <span style={{ color: '#10b981', fontWeight: 700 }}>AI tool stack</span> to make money</motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {currentSegment === 3 && (
                        <motion.div key="seg3" style={{ textAlign: 'center' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2 }}>
                            <motion.div style={{ display: 'inline-block', background: 'linear-gradient(90deg, #f59e0b, #ea580c)', borderRadius: '1rem', padding: '3rem 5rem', marginBottom: '2.5rem' }} animate={{ boxShadow: ["0 0 20px rgba(245, 158, 11, 0.3)", "0 0 50px rgba(245, 158, 11, 0.6)"] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <motion.span style={{ fontSize: '3rem' }} animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>🎯</motion.span>
                                    <p style={{ fontSize: '3rem', fontWeight: 900, color: 'black' }}>FREE WORKSHOP</p>
                                </div>
                                <p style={{ fontSize: '1.5rem', color: 'rgba(0,0,0,0.7)' }}>How to use AI to build your store from scratch</p>
                            </motion.div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                                <motion.p style={{ fontSize: '1.75rem', color: '#d1d5db' }} animate={{ y: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>Click the link in the description</motion.p>
                                <motion.div style={{ fontSize: '4rem' }} animate={{ y: [0, 10, 0] }} transition={{ duration: 1, repeat: Infinity }}>👇</motion.div>
                                <p style={{ fontSize: '1.5rem', color: '#10b981' }}>Completely FREE • No catch</p>
                                <motion.p style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginTop: '1.5rem' }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>See you there! 🚀</motion.p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

Chapter9.segmentCount = 3;
Chapter9.segmentIds = ['9_1', '9_2', '9_3'];

export default Chapter9;
