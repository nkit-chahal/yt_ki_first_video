import React from 'react';
import { motion } from 'framer-motion';

// Chapter 3: Tier 1 - Chips - INLINE STYLES
const Chapter3 = ({ currentSegment = 0 }) => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', overflow: 'hidden' }}>
            <motion.div style={{ position: 'absolute', inset: 0 }} animate={{ background: ['radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)', 'radial-gradient(circle at 80% 50%, rgba(124, 58, 237, 0.2) 0%, transparent 50%)'] }} transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }} />

            {[0, 1, 2].map((i) => (<motion.div key={i} style={{ position: 'absolute', fontSize: '3rem', opacity: 0.2, left: `${20 + i * 25}%`, top: `${25 + i * 20}%` }} animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }} transition={{ duration: 8 + i * 2, repeat: Infinity }}>💎</motion.div>))}

            <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5rem', position: 'relative', zIndex: 10 }}>
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                    <div className="tier-badge" style={{ color: '#a78bfa', borderColor: '#a78bfa', marginBottom: '2.5rem' }}><motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>💎</motion.span></div>
                    <h1 style={{ fontSize: '4.5rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem' }}>TIER ONE</h1>
                    <motion.h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#a78bfa', marginBottom: '2.5rem' }} animate={{ textShadow: ['0 0 10px rgba(139, 92, 246, 0.5)', '0 0 30px rgba(139, 92, 246, 0.8)'] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>Chips</motion.h2>
                </motion.div>

                {currentSegment >= 1 && (
                    <motion.div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                        <motion.span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '1.5rem' }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>🔬</motion.span>
                        <p style={{ fontSize: '2.5rem', color: 'white', fontWeight: 700 }}>Control chips =</p>
                        <motion.p style={{ fontSize: '2.5rem', fontWeight: 700, color: '#a78bfa' }} animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity }}>Control innovation</motion.p>
                    </motion.div>
                )}

                {currentSegment >= 2 && (
                    <motion.div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>
                        {[{ name: 'NVIDIA', color: '#22c55e', icon: '🟢', stat: '+200%' }, { name: 'AMD', color: '#ef4444', icon: '🔴', stat: 'Rising' }, { name: 'INTEL', color: '#3b82f6', icon: '🔵', stat: 'Fighting' }].map((company, i) => (
                            <motion.div key={company.name} style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '1rem', padding: '1rem 1.5rem', textAlign: 'center', border: '2px solid rgba(255,255,255,0.2)' }} whileHover={{ scale: 1.05 }}>
                                <motion.div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }} animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}>{company.icon}</motion.div>
                                <span style={{ fontSize: '1.25rem', fontWeight: 700, color: company.color }}>{company.name}</span>
                                <p style={{ fontSize: '1rem', color: '#9ca3af' }}>{company.stat}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>

            <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5rem', position: 'relative', zIndex: 10 }}>
                {currentSegment >= 3 && (
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#f87171', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}><motion.span style={{ fontSize: '3rem' }} animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}>⚠️</motion.span>THE REALITY</h3>
                        <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid rgba(239, 68, 68, 0.3)', marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                {[0, 1, 2].map((i) => (<motion.span key={i} style={{ fontSize: '3.5rem' }} animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>💰</motion.span>))}
                            </div>
                            <p style={{ fontSize: '3rem', color: 'white', fontWeight: 700, textAlign: 'center' }}>You need <span style={{ color: '#f87171' }}>BILLIONS</span></p>
                        </div>
                    </motion.div>
                )}

                {currentSegment >= 4 && (
                    <motion.div className="glass-card" style={{ padding: '2rem', background: 'rgba(139, 92, 246, 0.1)', marginBottom: '2rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}><motion.span style={{ fontSize: '3rem' }} animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>⚙️</motion.span><p style={{ fontSize: '1.5rem', color: 'white', fontWeight: 700 }}>EUV Lithography Machine</p></div>
                        <motion.div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#a78bfa', textAlign: 'center' }} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>$150M</motion.div>
                        <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#9ca3af', marginTop: '0.75rem' }}>For ONE machine (ASML)</p>
                    </motion.div>
                )}

                {currentSegment >= 5 && (
                    <motion.div className="glass-card" style={{ padding: '2rem', background: 'rgba(239, 68, 68, 0.1)', border: '2px solid rgba(239, 68, 68, 0.5)', textAlign: 'center' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>
                        <p style={{ fontSize: '1.5rem', color: 'white', fontWeight: 700 }}>This tier is <span style={{ color: '#f87171' }}>completely inaccessible</span></p>
                        <p style={{ fontSize: '1.25rem', color: '#9ca3af', marginTop: '0.75rem' }}>Unless you're buying stock...</p>
                        <motion.div style={{ marginTop: '1.5rem', fontSize: '1.75rem' }} animate={{ x: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>Let's move on →</motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

Chapter3.segmentCount = 5;
Chapter3.segmentIds = ['3_1', '3_2', '3_3', '3_4', '3_5'];

export default Chapter3;
