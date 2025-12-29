import React from 'react';
import { motion } from 'framer-motion';

// Chapter 2: Tier 0 - Energy - INLINE STYLES
const Chapter2 = ({ currentSegment = 0 }) => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', overflow: 'hidden' }}>
            {/* Background */}
            <motion.div
                style={{ position: 'absolute', inset: 0 }}
                animate={{ background: ['radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)', 'radial-gradient(circle at 80% 70%, rgba(5, 150, 105, 0.2) 0%, transparent 50%)'] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Subtle floating bolts */}
            {[0, 1, 2].map((i) => (
                <motion.div key={i} style={{ position: 'absolute', fontSize: '3rem', opacity: 0.2, left: `${20 + i * 25}%`, top: `${30 + i * 15}%` }} animate={{ y: [0, -10, 0], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 4 + i, repeat: Infinity }}>⚡</motion.div>
            ))}

            {/* Left side */}
            <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5rem', position: 'relative', zIndex: 10 }}>
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                    <div className="tier-badge" style={{ color: '#10b981', borderColor: '#10b981', marginBottom: '2.5rem' }}>
                        <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>⚡</motion.span>
                    </div>
                    <h1 style={{ fontSize: '4.5rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem' }}>TIER ZERO</h1>
                    <motion.h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#10b981', marginBottom: '2.5rem' }} animate={{ textShadow: ['0 0 10px rgba(16, 185, 129, 0.5)', '0 0 30px rgba(16, 185, 129, 0.8)'] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>Energy Infrastructure</motion.h2>
                </motion.div>

                {currentSegment >= 1 && (
                    <motion.div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <span style={{ fontSize: '3.5rem' }}>☁️</span>
                            <motion.span style={{ fontSize: '3rem' }} animate={{ x: [0, 10, 0] }} transition={{ duration: 1, repeat: Infinity }}>→</motion.span>
                            <motion.span style={{ fontSize: '3.5rem' }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>⚡</motion.span>
                        </div>
                        <p style={{ fontSize: '1.75rem', color: '#d1d5db' }}>AI lives in the <span style={{ color: '#60a5fa', fontWeight: 700 }}>cloud</span>, but it <span style={{ color: '#10b981', fontWeight: 700 }}>feeds off electricity</span></p>
                    </motion.div>
                )}

                {currentSegment >= 2 && (
                    <motion.div className="glass-card" style={{ padding: '2rem', background: 'rgba(16, 185, 129, 0.1)' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <span style={{ fontSize: '3.5rem' }}>🏢</span>
                            <motion.span style={{ fontSize: '2.5rem' }} animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>{'>'}</motion.span>
                            <motion.span style={{ fontSize: '3.5rem' }} animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>🌍</motion.span>
                        </div>
                        <p style={{ fontSize: '1.5rem', textAlign: 'center', color: '#d1d5db' }}>Data centers consuming more than</p>
                        <motion.p style={{ fontSize: '1.75rem', fontWeight: 900, textAlign: 'center', color: '#10b981', marginTop: '1rem' }} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>ENTIRE COUNTRIES</motion.p>
                    </motion.div>
                )}
            </div>

            {/* Right side */}
            <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5rem', position: 'relative', zIndex: 10 }}>
                {currentSegment >= 3 && (
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                            <motion.span style={{ fontSize: '3.5rem' }} animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>💡</motion.span>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fbbf24' }}>THE OPPORTUNITY</h3>
                        </div>
                        <p style={{ fontSize: '1.75rem', color: '#d1d5db', marginBottom: '2rem' }}>Businesses that service <span style={{ color: '#10b981', fontWeight: 700 }}>energy infrastructure</span></p>
                        <div className="glass-card glow-green" style={{ padding: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ fontSize: '3rem' }}>🏗️</span>
                                <p style={{ fontSize: '1.5rem', color: 'white', fontWeight: 700 }}>Companies like <span style={{ color: '#fbbf24' }}>Hanley Energy</span></p>
                            </div>
                        </div>
                    </motion.div>
                )}

                {currentSegment >= 4 && (
                    <motion.div style={{ marginTop: '2rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                        <div className="glass-card" style={{ padding: '1.5rem', background: 'rgba(16, 185, 129, 0.1)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <motion.span style={{ fontSize: '2.5rem' }} animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>⚙️</motion.span>
                                <p style={{ fontSize: '1.25rem', color: '#d1d5db' }}><span style={{ color: '#10b981', fontWeight: 700 }}>Energy grid expansion</span></p>
                            </div>
                        </div>
                    </motion.div>
                )}

                {currentSegment >= 5 && (
                    <motion.div style={{ marginTop: '2rem' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <motion.span style={{ fontSize: '3rem' }} animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>💰</motion.span>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fbbf24' }}>THE PLAY</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[{ icon: '🔌', text: 'Electrical contractor for data centers' }, { icon: '❄️', text: 'Cooling system installer' }, { icon: '🔋', text: 'Backup power provider' }].map((item, i) => (
                                <motion.div key={item.text} className="glass-card glow-green" style={{ padding: '1rem' }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.15, delay: i * 0.05 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span style={{ fontSize: '1.75rem' }}>{item.icon}</span>
                                        <p style={{ fontSize: '1.25rem', color: 'white' }}>{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

Chapter2.segmentCount = 5;
Chapter2.segmentIds = ['2_1', '2_2', '2_3', '2_4', '2_5'];

export default Chapter2;
