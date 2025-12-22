import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, GitBranch, Database } from 'lucide-react';

const IntroPage = ({ data }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0); // Add state to trigger re-renders
    const audioRef = useRef(null);

    // Auto-play attempt on mount, but usually blocked by browsers without interaction
    // So we start with a clear "Start" state.

    const onTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
    };

    return (
        <div className="page-container" style={{
            height: '100vh',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            padding: '4rem',
            boxSizing: 'border-box'
        }}>
            {/* Left Side: Content */}
            <motion.div
                className="content-side flex-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}
            >
                <div style={{ marginBottom: '2rem' }}>
                    <span style={{
                        background: 'rgba(88, 166, 255, 0.2)',
                        color: '#58a6ff',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        letterSpacing: '1px'
                    }}>
                        INTRODUCTION
                    </span>
                </div>

                <h1 style={{
                    fontSize: '3.5rem',
                    lineHeight: '1.2',
                    marginBottom: '2rem',
                    background: 'linear-gradient(90deg, #fff, #8b949e)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Lets Understand Git<br />Once and for All.
                </h1>

                <div className="glass-panel" style={{ padding: '2rem', maxWidth: '600px', lineHeight: '1.6', fontSize: '1.1rem', color: '#c9d1d9' }}>
                    <p>
                        {data.text.split(' ').map((word, index) => {
                            // Simple estimation: audio progress * total words = current word index
                            // This assumes constant speaking rate, which is loose but better than nothing without timestamps.
                            const totalWords = data.text.split(' ').length;
                            const currentProgressIndex = audioRef.current?.duration
                                ? Math.floor((audioRef.current.currentTime / audioRef.current.duration) * totalWords)
                                : -1;

                            const isHighlighted = isPlaying && index <= currentProgressIndex;

                            return (
                                <span
                                    key={index}
                                    style={{
                                        color: isHighlighted ? '#fff' : '#6e7681',
                                        transition: 'color 0.2s',
                                        textShadow: isHighlighted ? '0 0 10px rgba(255,255,255,0.3)' : 'none',
                                        marginRight: '4px',
                                        display: 'inline-block'
                                    }}
                                >
                                    {word}
                                </span>
                            );
                        })}
                    </p>
                </div>

                <motion.button
                    onClick={togglePlay}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        marginTop: '3rem',
                        padding: '1rem 3rem',
                        background: isPlaying ? '#30363d' : '#238636',
                        color: 'white',
                        borderRadius: '100px',
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                    }}
                >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    {isPlaying ? 'Pause Narration' : 'Start Narration'}
                </motion.button>

                <audio
                    ref={audioRef}
                    src={`/audio/${data.id}.mp3`}
                    onEnded={handleEnded}
                    onTimeUpdate={onTimeUpdate}
                />
            </motion.div>

            {/* Right Side: Visuals */}
            <div className="visual-side flex-center" style={{ position: 'relative' }}>
                {/* Abstract Git Graph Background */}
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 100,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        width: '500px',
                        height: '500px',
                        border: '2px dashed #30363d',
                        borderRadius: '50%',
                        zIndex: -1
                    }}
                />
                <motion.div
                    animate={{
                        rotate: -360,
                    }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        width: '350px',
                        height: '350px',
                        border: '2px dashed #58a6ff',
                        borderRadius: '50%',
                        opacity: 0.2,
                        zIndex: -1
                    }}
                />

                {/* Central Audio Visualizer / Icon */}
                <motion.div
                    animate={{
                        scale: isPlaying ? [1, 1.1, 1] : 1,
                        boxShadow: isPlaying
                            ? '0 0 50px rgba(88, 166, 255, 0.4)'
                            : '0 0 0px rgba(88, 166, 255, 0)'
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity
                    }}
                    style={{
                        width: '200px',
                        height: '200px',
                        background: '#0d1117',
                        borderRadius: '50%',
                        border: '4px solid #58a6ff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 10
                    }}
                >
                    <GitBranch size={80} color="#58a6ff" />
                </motion.div>
            </div>
        </div>
    );
};

export default IntroPage;
