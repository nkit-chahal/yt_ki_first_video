import React from 'react';
import { motion } from 'framer-motion';

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

// Chapter 5: Tier 3 - Foundation Models - INLINE STYLES
const Chapter5 = ({ currentSegment = 0 }) => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', overflow: 'hidden' }}>
            <motion.div style={{ position: 'absolute', inset: 0 }} animate={{ background: ['radial-gradient(circle at 30% 50%, rgba(239, 68, 68, 0.2) 0%, transparent 50%)', 'radial-gradient(circle at 70% 50%, rgba(220, 38, 38, 0.2) 0%, transparent 50%)'] }} transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }} />

            <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5rem', position: 'relative', zIndex: 10 }}>
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                    <div className="tier-badge" style={{ color: '#f87171', borderColor: '#f87171', marginBottom: '2.5rem' }}><motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>🧠</motion.span></div>
                    <h1 style={{ fontSize: '4.5rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem' }}>TIER THREE</h1>
                    <motion.h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#f87171', marginBottom: '2.5rem' }} animate={{ textShadow: ['0 0 10px rgba(239, 68, 68, 0.5)', '0 0 30px rgba(239, 68, 68, 0.8)'] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>Foundation Models</motion.h2>
                </motion.div>

                {currentSegment >= 1 && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                        <p style={{ fontSize: '1.75rem', color: '#d1d5db', marginBottom: '2rem' }}>These are the <span style={{ color: '#f87171', fontWeight: 700 }}>brains</span></p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            {[{ name: 'OpenAI', icon: '🟢' }, { name: 'Anthropic', icon: '🟠' }, { name: 'Google', icon: '🔵' }].map((company, i) => (
                                <motion.div key={company.name} className="glass-card" style={{ padding: '1rem 1.5rem', textAlign: 'center' }} whileHover={{ scale: 1.05 }}>
                                    <motion.div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }} animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}>{company.icon}</motion.div>
                                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#d1d5db' }}>{company.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>

            <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5rem', position: 'relative', zIndex: 10 }}>
                {currentSegment >= 2 && (
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
                        <div className="glass-card glow-red" style={{ padding: '2.5rem', border: '1px solid rgba(239, 68, 68, 0.5)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}><motion.span style={{ fontSize: '3.5rem' }} animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}>🔥</motion.span><h3 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#f87171' }}>THE BURN</h3></div>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                {[0, 1, 2, 3].map((i) => (<motion.span key={i} style={{ fontSize: '3rem' }} animate={{ y: [0, -20], opacity: [1, 0], rotate: [0, 30] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>💸</motion.span>))}
                            </div>
                            <motion.div style={{ fontSize: '5rem', fontWeight: 900, color: '#ef4444', textAlign: 'center' }} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>-$<AnimatedCounter end={5} />B</motion.div>
                            <p style={{ fontSize: '1.25rem', color: '#9ca3af', textAlign: 'center', marginTop: '1rem' }}>OpenAI projected loss this year</p>
                        </div>
                    </motion.div>
                )}

                {currentSegment >= 3 && (
                    <motion.div className="glass-card" style={{ marginTop: '2rem', padding: '2rem', background: 'rgba(239, 68, 68, 0.1)' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                        <p style={{ fontSize: '1.5rem', color: 'white', fontWeight: 700, marginBottom: '0.75rem' }}>GPT-4 Training Cost</p>
                        <motion.div style={{ fontSize: '3rem', fontWeight: 900, color: '#fbbf24' }} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>$<AnimatedCounter end={100} />M+</motion.div>
                        <p style={{ color: '#9ca3af', marginTop: '0.5rem' }}>Just one training run</p>
                    </motion.div>
                )}

                {currentSegment >= 4 && (
                    <motion.div className="glass-card" style={{ marginTop: '1.5rem', padding: '2rem', background: 'rgba(139, 92, 246, 0.1)' }} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}><span style={{ fontSize: '2.5rem' }}>👨‍💻</span><p style={{ fontSize: '1.25rem', color: 'white', fontWeight: 700 }}>AI Researchers</p></div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}><span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#a78bfa' }}>$500K</span><span style={{ fontSize: '1.5rem', color: '#9ca3af' }}>to</span><span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#a78bfa' }}>$1M</span></div>
                        <p style={{ color: '#9ca3af', marginTop: '0.5rem' }}>per year + stock options</p>
                    </motion.div>
                )}

                {currentSegment >= 5 && (
                    <motion.div style={{ marginTop: '1.5rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '1rem', padding: '2rem', textAlign: 'center', border: '2px solid rgba(239, 68, 68, 0.5)' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}><motion.span style={{ fontSize: '3rem' }} animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>👑</motion.span><p style={{ fontSize: '1.5rem', color: 'white', fontWeight: 700 }}>This is a <span style={{ color: '#f87171' }}>game of kings</span></p></div>
                        <p style={{ fontSize: '1.25rem', color: '#9ca3af' }}>Let Saudi Arabia and Microsoft fight this battle</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

Chapter5.segmentCount = 5;
Chapter5.segmentIds = ['5_1', '5_2', '5_3', '5_4', '5_5'];

export default Chapter5;
