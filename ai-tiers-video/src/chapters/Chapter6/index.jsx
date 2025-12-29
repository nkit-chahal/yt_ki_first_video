import React from 'react';
import { motion } from 'framer-motion';

// Chapter 6: Tier 4 - Infrastructure - INLINE STYLES
const Chapter6 = ({ currentSegment = 0 }) => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', overflow: 'hidden' }}>
            <motion.div style={{ position: 'absolute', inset: 0 }} animate={{ background: ['radial-gradient(circle at 30% 50%, rgba(245, 158, 11, 0.2) 0%, transparent 50%)', 'radial-gradient(circle at 70% 50%, rgba(217, 119, 6, 0.2) 0%, transparent 50%)'] }} transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }} />

            <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5rem', position: 'relative', zIndex: 10 }}>
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                    <div className="tier-badge" style={{ color: '#fbbf24', borderColor: '#fbbf24', marginBottom: '2.5rem' }}><motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>⚙️</motion.span></div>
                    <h1 style={{ fontSize: '4.5rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem' }}>TIER FOUR</h1>
                    <motion.h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#fbbf24', marginBottom: '2.5rem' }} animate={{ textShadow: ['0 0 10px rgba(245, 158, 11, 0.5)', '0 0 30px rgba(245, 158, 11, 0.8)'] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>Infrastructure</motion.h2>
                </motion.div>

                {currentSegment >= 1 && (
                    <motion.div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}><motion.span style={{ fontSize: '3rem' }} animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity }}>⛏️</motion.span><motion.span style={{ fontSize: '3rem' }} animate={{ y: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>🔧</motion.span></div>
                        <p style={{ fontSize: '1.75rem', color: '#d1d5db' }}>The <span style={{ color: '#fbbf24', fontWeight: 700 }}>picks and shovels</span></p>
                        <p style={{ fontSize: '1.5rem', color: '#9ca3af', marginTop: '0.75rem' }}>of the software world</p>
                    </motion.div>
                )}

                {currentSegment >= 2 && (
                    <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>
                        {[{ name: 'Stripe', desc: 'Payments', icon: '💳' }, { name: 'Datadog', desc: 'Monitoring', icon: '📊' }, { name: 'MongoDB', desc: 'Database', icon: '💾' }, { name: 'Cloudflare', desc: 'CDN', icon: '🔒' }].map((company, i) => (
                            <motion.div key={company.name} className="glass-card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }} whileHover={{ scale: 1.02, x: 5 }}>
                                <motion.span style={{ fontSize: '1.75rem' }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>{company.icon}</motion.span>
                                <div><span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fbbf24' }}>{company.name}</span><p style={{ fontSize: '1rem', color: '#6b7280' }}>{company.desc}</p></div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>

            <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5rem', position: 'relative', zIndex: 10 }}>
                {currentSegment >= 3 && (
                    <motion.div className="glass-card glow-green" style={{ padding: '2.5rem', marginBottom: '2rem' }} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}><motion.span style={{ fontSize: '3rem' }} animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>👨‍💻</motion.span><p style={{ fontSize: '1.75rem', fontWeight: 700, color: '#10b981' }}>Great for technical founders</p></div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '1.25rem', color: '#d1d5db' }}>
                            <p>✅ Build <span style={{ color: '#10b981', fontWeight: 700 }}>developer tools</span></p>
                            <p>✅ Create <span style={{ color: '#fbbf24', fontWeight: 700 }}>API services</span></p>
                            <p>✅ Build <span style={{ color: '#a78bfa', fontWeight: 700 }}>infrastructure software</span></p>
                        </div>
                    </motion.div>
                )}

                {currentSegment >= 4 && (
                    <motion.div className="glass-card" style={{ padding: '2rem', background: 'rgba(245, 158, 11, 0.1)', marginBottom: '1.5rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}><motion.span style={{ fontSize: '2.5rem' }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>💰</motion.span><p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fbbf24' }}>BEAUTIFUL BUSINESS MODEL</p></div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', textAlign: 'center' }}>
                            {['📈 Recurring', '💎 High Margins', '🔒 Sticky'].map((item, i) => (<motion.div key={item} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}><p style={{ fontSize: '1.25rem', color: '#10b981' }}>{item}</p></motion.div>))}
                        </div>
                    </motion.div>
                )}

                {currentSegment >= 5 && (
                    <motion.div className="glass-card" style={{ padding: '2rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}><span style={{ fontSize: '2.5rem' }}>⚠️</span><p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f87171' }}>REALITY CHECK</p></div>
                        <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '0.75rem' }}>If you're not a <span style={{ color: '#a78bfa', fontWeight: 700 }}>technical founder</span>...</p>
                        <p style={{ fontSize: '1rem', color: '#9ca3af' }}>You're competing against <span style={{ color: '#f87171', fontWeight: 700 }}>VC-backed ex-Google teams</span></p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

Chapter6.segmentCount = 5;
Chapter6.segmentIds = ['6_1', '6_2', '6_3', '6_4', '6_5'];

export default Chapter6;
