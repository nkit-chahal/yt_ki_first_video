import React from 'react';
import { motion } from 'framer-motion';

// Chapter 7: Tier 5 - Apps - INLINE STYLES
const Chapter7 = ({ currentSegment = 0 }) => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', overflow: 'hidden' }}>
            <motion.div style={{ position: 'absolute', inset: 0 }} animate={{ background: ['radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)', 'radial-gradient(circle at 70% 50%, rgba(37, 99, 235, 0.2) 0%, transparent 50%)'] }} transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }} />

            <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5rem', position: 'relative', zIndex: 10 }}>
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                    <div className="tier-badge" style={{ color: '#60a5fa', borderColor: '#60a5fa', marginBottom: '2.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 1, repeat: Infinity }}>🤖</motion.span><motion.span animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>🎨</motion.span></div>
                    </div>
                    <h1 style={{ fontSize: '4.5rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem' }}>TIER FIVE</h1>
                    <motion.h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#60a5fa', marginBottom: '2.5rem' }} animate={{ textShadow: ['0 0 10px rgba(59, 130, 246, 0.5)', '0 0 30px rgba(59, 130, 246, 0.8)'] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>Apps</motion.h2>
                </motion.div>

                {currentSegment >= 1 && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                        <p style={{ fontSize: '1.75rem', color: '#d1d5db', marginBottom: '2rem' }}>The <span style={{ color: '#60a5fa', fontWeight: 700 }}>shiny stuff</span></p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                            {[{ icon: '🤖', label: 'Chatbots' }, { icon: '🎨', label: 'Image Gen' }, { icon: '✍️', label: 'Writers' }, { icon: '💬', label: 'Assistants' }].map((app, i) => (
                                <motion.div key={app.label} className="glass-card" style={{ padding: '1rem 1.5rem', textAlign: 'center' }} whileHover={{ scale: 1.05 }}>
                                    <motion.div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}>{app.icon}</motion.div>
                                    <span style={{ fontSize: '1.25rem' }}>{app.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {currentSegment >= 2 && (
                    <motion.div className="glass-card" style={{ marginTop: '2rem', padding: '2rem', background: 'rgba(59, 130, 246, 0.1)' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>
                        <p style={{ fontSize: '1.5rem', color: '#9ca3af', marginBottom: '0.75rem' }}>Most people play here because:</p>
                        <motion.p style={{ fontSize: '1.75rem', color: '#60a5fa', fontWeight: 700 }} animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity }}>It looks accessible</motion.p>
                        <p style={{ fontSize: '1.25rem', color: '#6b7280', marginTop: '0.75rem' }}>Just use OpenAI's API + nice interface</p>
                    </motion.div>
                )}
            </div>

            <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5rem', position: 'relative', zIndex: 10 }}>
                {currentSegment >= 3 && (
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
                        <div className="glass-card" style={{ padding: '2rem', border: '1px solid rgba(234, 179, 8, 0.3)', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#eab308', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span>⚠️</span> WRAPPER APPS</h3>
                            <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '1.5rem' }}>Most apps are just thin layers around OpenAI's API</p>
                            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center', background: 'rgba(59, 130, 246, 0.2)' }}>
                                <p style={{ fontSize: '1rem', color: '#9ca3af', marginBottom: '0.75rem' }}>Your App (Wrapper)</p>
                                <div style={{ border: '2px dashed #4b5563', borderRadius: '0.5rem', padding: '1rem' }}><p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white' }}>ChatGPT/Claude API</p></div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {currentSegment >= 4 && (
                    <motion.div className="glass-card" style={{ padding: '2rem', border: '1px solid rgba(239, 68, 68, 0.5)', background: 'rgba(239, 68, 68, 0.1)' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#f87171', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1, repeat: Infinity }}>🔥</motion.span>PLATFORM RISK</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ fontSize: '1.5rem' }}>✅</span><span style={{ fontSize: '1.25rem', color: '#d1d5db' }}>You build AI writing assistant</span></p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ fontSize: '1.5rem' }}>📈</span><span style={{ fontSize: '1.25rem', color: '#d1d5db' }}>It gets traction</span></p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ fontSize: '1.5rem' }}>⚡</span><span style={{ fontSize: '1.25rem', color: '#d1d5db' }}>OpenAI updates ChatGPT</span></p>
                            <motion.div style={{ background: 'rgba(239, 68, 68, 0.2)', borderRadius: '1rem', padding: '1.5rem', marginTop: '1rem' }} animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                                <p style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ef4444', textAlign: 'center' }}>You're cooked 🔥</p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {currentSegment >= 5 && (
                    <motion.div className="glass-card" style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>
                        <p style={{ fontSize: '1rem', color: '#9ca3af', marginBottom: '0.75rem' }}>You CAN defend if you have:</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {['Genuine IP', 'Unique Data', 'Specific Vertical'].map((item) => (<span key={item} style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '1rem', color: '#10b981' }}>{item}</span>))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

Chapter7.segmentCount = 5;
Chapter7.segmentIds = ['7_1', '7_2', '7_3', '7_4', '7_5'];

export default Chapter7;
