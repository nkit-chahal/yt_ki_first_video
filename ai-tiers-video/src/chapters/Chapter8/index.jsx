import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedCounter = ({ end, duration = 1.5 }) => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        let start = Date.now();
        const timer = setInterval(() => {
            const progress = Math.min((Date.now() - start) / (duration * 1000), 1);
            setCount(Math.floor(progress * end));
            if (progress >= 1) clearInterval(timer);
        }, 16);
        return () => clearInterval(timer);
    }, [end, duration]);
    return <span>{count}</span>;
};

// Chapter 8: The Real Opportunity - INLINE STYLES
const Chapter8 = ({ currentSegment = 0 }) => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <motion.div style={{ position: 'absolute', inset: 0 }} animate={{ background: ['radial-gradient(ellipse at 50% 0%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)', 'radial-gradient(ellipse at 50% 100%, rgba(245, 158, 11, 0.2) 0%, transparent 50%)'] }} transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }} />

            <div style={{ position: 'relative', zIndex: 10, padding: '0 5rem', width: '100%', maxWidth: '1400px' }}>
                <AnimatePresence mode="wait">
                    {currentSegment === 1 && (
                        <motion.div key="seg1" style={{ textAlign: 'center' }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.2 }}>
                            <p style={{ fontSize: '2.5rem', color: '#9ca3af', marginBottom: '1.5rem' }}>So where is the opportunity for</p>
                            <motion.h1 style={{ fontSize: '6rem', fontWeight: 900, color: 'white' }} animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity }}>NORMAL PEOPLE?</motion.h1>
                            <p style={{ fontSize: '1.75rem', color: '#6b7280', marginTop: '2rem' }}>Without billions in funding or a PhD from MIT</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {currentSegment === 2 && (
                        <motion.div key="seg2" className="glass-card glow-green" style={{ padding: '4rem', textAlign: 'center' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2 }}>
                            <p style={{ fontSize: '2.5rem', color: '#9ca3af', marginBottom: '1.5rem' }}>The secret is...</p>
                            <motion.p style={{ fontSize: '5rem', fontWeight: 900, color: '#10b981' }} animate={{ scale: [1, 1.05, 1], textShadow: ['0 0 20px rgba(16, 185, 129, 0.5)', '0 0 40px rgba(16, 185, 129, 0.8)'] }} transition={{ duration: 2, repeat: Infinity }}>USING AI</motion.p>
                            <p style={{ fontSize: '1.75rem', color: '#6b7280', marginTop: '1.5rem' }}>Not <span style={{ textDecoration: 'line-through', color: '#f87171' }}>building</span> it</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {currentSegment === 3 && (
                        <motion.div key="seg3" className="glass-card" style={{ padding: '3rem', background: 'rgba(16, 185, 129, 0.1)' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }}>
                            <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#10b981', marginBottom: '2rem', textAlign: 'center' }}>💡 Customer Service Example</h3>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                                <div style={{ textAlign: 'center', flex: 1 }}>
                                    <p style={{ color: '#9ca3af', marginBottom: '0.75rem' }}>Traditional Hiring</p>
                                    <motion.div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#ef4444' }} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>$<AnimatedCounter end={400} />K</motion.div>
                                    <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>10 people × $40K</p>
                                </div>
                                <motion.div style={{ fontSize: '3.5rem', margin: '0 2.5rem' }} animate={{ x: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.div>
                                <div style={{ textAlign: 'center', flex: 1 }}>
                                    <p style={{ color: '#9ca3af', marginBottom: '0.75rem' }}>AI + 2 Managers</p>
                                    <motion.div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#10b981' }} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>$<AnimatedCounter end={100} />K</motion.div>
                                    <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>2 people × $50K</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '1rem', padding: '1.5rem' }}>
                                <motion.span style={{ fontSize: '2rem' }} animate={{ rotate: [0, 360] }} transition={{ duration: 2, repeat: Infinity }}>💰</motion.span>
                                <span style={{ fontSize: '2rem', fontWeight: 900, color: '#10b981' }}>SAVE $<AnimatedCounter end={300} />K/year</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {currentSegment === 4 && (
                        <motion.div key="seg4" className="glass-card" style={{ padding: '3rem', background: 'rgba(139, 92, 246, 0.1)' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }}>
                            <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#a78bfa', marginBottom: '2rem', textAlign: 'center' }}>✍️ Content Creation</h3>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <motion.div style={{ fontSize: '4rem', marginBottom: '1rem' }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>👨‍💻</motion.div>
                                    <p style={{ fontSize: '1.75rem', color: 'white', fontWeight: 700 }}>1 Person</p>
                                    <p style={{ color: '#9ca3af' }}>+ AI</p>
                                </div>
                                <motion.div style={{ fontSize: '4rem', color: '#10b981' }} animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>=</motion.div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '250px' }}>
                                        {[...Array(10)].map((_, i) => (<span key={i} style={{ fontSize: '1.75rem', color: '#a78bfa' }}>👤</span>))}
                                    </div>
                                    <motion.p style={{ fontSize: '2.5rem', color: '#10b981', fontWeight: 700 }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>10× Output</motion.p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {currentSegment === 5 && (
                        <motion.div key="seg5" className="glass-card" style={{ padding: '3rem', background: 'rgba(245, 158, 11, 0.1)' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2 }}>
                            <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#fbbf24', marginBottom: '2rem', textAlign: 'center' }}>⚔️ The Competition</h3>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4rem' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <motion.div style={{ fontSize: '5rem', marginBottom: '1rem' }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>🏢</motion.div>
                                    <p style={{ color: '#9ca3af' }}>Big Corps</p>
                                    <p style={{ fontSize: '0.9rem', color: '#f87171' }}>Slow & Expensive</p>
                                </div>
                                <motion.div style={{ fontSize: '5rem', color: '#fbbf24' }} animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>⚔️</motion.div>
                                <div style={{ textAlign: 'center' }}>
                                    <motion.div style={{ fontSize: '5rem', marginBottom: '1rem' }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>💪</motion.div>
                                    <p style={{ color: '#10b981', fontWeight: 700 }}>You + AI</p>
                                    <p style={{ fontSize: '0.9rem', color: '#86efac' }}>Fast & Lean</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {currentSegment === 6 && (
                        <motion.div key="seg6" style={{ textAlign: 'center' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }}>
                            <div className="glass-card glow-green" style={{ display: 'inline-block', padding: '3.5rem 5rem' }}>
                                <motion.p style={{ fontSize: '3rem', fontWeight: 900, color: '#10b981', marginBottom: '2rem' }} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>Winners are <span style={{ color: 'white' }}>USING AI</span></motion.p>
                                <p style={{ fontSize: '1.75rem', color: '#9ca3af', marginBottom: '2rem' }}>Not building it</p>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginTop: '1.5rem' }}>
                                    {[{ icon: '⚡', text: 'Faster' }, { icon: '💰', text: 'Cheaper' }, { icon: '🎯', text: 'Smarter' }].map((item, i) => (
                                        <div key={item.text} style={{ textAlign: 'center' }}><motion.span style={{ fontSize: '3rem' }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>{item.icon}</motion.span><p style={{ fontSize: '1.5rem', color: '#d1d5db', marginTop: '0.75rem' }}>{item.text}</p></div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

Chapter8.segmentCount = 6;
Chapter8.segmentIds = ['8_1', '8_2', '8_3', '8_4', '8_5', '8_6'];

export default Chapter8;
