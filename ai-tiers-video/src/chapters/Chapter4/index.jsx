import React from 'react';
import { motion } from 'framer-motion';

// Chapter 4: Tier 2 - Data Centers - INLINE STYLES
const Chapter4 = ({ currentSegment = 0 }) => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', overflow: 'hidden' }}>
            <motion.div style={{ position: 'absolute', inset: 0 }} animate={{ background: ['radial-gradient(circle at 30% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)', 'radial-gradient(circle at 70% 50%, rgba(219, 39, 119, 0.2) 0%, transparent 50%)'] }} transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }} />

            {['🖥️', '💾', '❄️'].map((icon, i) => (<motion.div key={i} style={{ position: 'absolute', fontSize: '3rem', opacity: 0.2, left: `${20 + i * 25}%`, top: `${25 + i * 20}%` }} animate={{ y: [0, -10, 0] }} transition={{ duration: 5 + i, repeat: Infinity }}>{icon}</motion.div>))}

            <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5rem', position: 'relative', zIndex: 10 }}>
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                    <div className="tier-badge" style={{ color: '#f472b6', borderColor: '#f472b6', marginBottom: '2.5rem' }}><motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>🏢</motion.span></div>
                    <h1 style={{ fontSize: '4.5rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem' }}>TIER TWO</h1>
                    <motion.h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#f472b6', marginBottom: '2.5rem' }} animate={{ textShadow: ['0 0 10px rgba(236, 72, 153, 0.5)', '0 0 30px rgba(236, 72, 153, 0.8)'] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>Data Centers</motion.h2>
                </motion.div>

                {currentSegment >= 1 && (
                    <motion.div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                        <p style={{ fontSize: '1.75rem', color: '#d1d5db', marginBottom: '1.5rem' }}>The <span style={{ color: '#f472b6', fontWeight: 700 }}>plumbing layer</span></p>
                        <p style={{ fontSize: '1.5rem', color: '#9ca3af' }}>Think of this as <span style={{ color: 'white', fontWeight: 700 }}>real estate</span> for the digital world</p>
                    </motion.div>
                )}

                {currentSegment >= 2 && (
                    <motion.div className="glass-card" style={{ padding: '2rem', background: 'rgba(236, 72, 153, 0.1)' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>
                        <p style={{ fontSize: '1.5rem', color: '#d1d5db', marginBottom: '1.5rem' }}>Huge warehouses running 24/7:</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                            {[{ icon: '🔥', text: 'Get HOT' }, { icon: '🧹', text: 'Get DIRTY' }, { icon: '🔧', text: 'Need FIX' }].map((item, i) => (
                                <div key={item.text} style={{ textAlign: 'center' }}>
                                    <motion.span style={{ fontSize: '3rem', display: 'block', marginBottom: '0.75rem' }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>{item.icon}</motion.span>
                                    <p style={{ fontSize: '1rem', fontWeight: 700, color: '#f472b6' }}>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {currentSegment >= 3 && (
                    <motion.div className="glass-card" style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' }} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ fontSize: '2.5rem' }}>⚠️</span><div><p style={{ fontSize: '1.25rem', color: '#d1d5db' }}>Not regular janitors!</p><p style={{ fontSize: '1rem', color: '#fbbf24', fontWeight: 700 }}>Precision clean rooms</p></div></div>
                    </motion.div>
                )}
            </div>

            <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5rem', position: 'relative', zIndex: 10 }}>
                {currentSegment >= 4 && (
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}><motion.span style={{ fontSize: '3.5rem' }} animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>💰</motion.span><h3 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fbbf24' }}>THE OPPORTUNITY</h3></div>
                        <div className="glass-card glow-pink" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
                            <p style={{ fontSize: '1.75rem', color: 'white', fontWeight: 700, marginBottom: '1.5rem' }}><span style={{ color: '#f472b6' }}>Specialized service companies</span></p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[{ name: 'Data Clean', icon: '🧹' }, { name: 'Promera', icon: '✨' }].map((company) => (
                                    <motion.div key={company.name} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '0.5rem', padding: '1rem' }} whileHover={{ scale: 1.02, x: 5 }}>
                                        <span style={{ fontSize: '1.75rem' }}>{company.icon}</span><span style={{ fontSize: '1.25rem', color: '#f472b6', fontWeight: 700 }}>{company.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {currentSegment >= 5 && (
                    <motion.div className="glass-card" style={{ padding: '2rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}><motion.span style={{ fontSize: '3rem' }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>🚀</motion.span><p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#10b981' }}>YOUR MOVE</p></div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '1.25rem', color: '#d1d5db' }}>
                            <p>✅ Start <span style={{ color: '#10b981', fontWeight: 700 }}>regional cleaning company</span></p>
                            <p>✅ Get <span style={{ color: '#fbbf24', fontWeight: 700 }}>certified</span></p>
                            <p>✅ Service <span style={{ color: '#f472b6', fontWeight: 700 }}>growing data centers</span></p>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

Chapter4.segmentCount = 5;
Chapter4.segmentIds = ['4_1', '4_2', '4_3', '4_4', '4_5'];

export default Chapter4;
