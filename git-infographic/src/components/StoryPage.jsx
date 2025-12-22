import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronRight, ChevronLeft, RefreshCw } from 'lucide-react';

const StoryPage = ({ data, visual, onNext, onPrev, isFirst, isLast }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);

    // Reset state when data changes (new page)
    useEffect(() => {
        setIsPlaying(false);
        setCurrentTime(0);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }, [data.id]);

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

    const onTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    // Split text for highlighting
    const words = data.text.split(' ');

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
                key={data.id} // Re-animate on page change
                className="content-side flex-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
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
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                    }}>
                        {data.moduleId || 'Concept'}
                    </span>
                </div>

                <h2 style={{
                    fontSize: '2.5rem',
                    lineHeight: '1.2',
                    marginBottom: '2rem',
                    color: '#e6edf3'
                }}>
                    {data.id.replace(/_/g, ' ').toUpperCase()}
                </h2>

                <div className="glass-panel" style={{ padding: '2rem', maxWidth: '600px', lineHeight: '1.6', fontSize: '1.1rem', color: '#c9d1d9' }}>
                    <p>
                        {words.map((word, index) => {
                            // Highlighting Logic
                            const totalWords = words.length;
                            const duration = audioRef.current?.duration || 1;
                            // Safety: Estimate duration if 0 to avoid Infinity, though usually it updates.
                            // Better approach: calculate highlight index only if duration > 0

                            let isHighlighted = false;
                            if (isPlaying && duration > 0) {
                                const progress = currentTime / duration;
                                const highlightIndex = Math.floor(progress * totalWords);
                                isHighlighted = index <= highlightIndex;
                            }

                            return (
                                <span
                                    key={index}
                                    style={{
                                        color: isHighlighted ? '#fff' : '#6e7681',
                                        transition: 'color 0.1s', // Faster transition for snappier feel
                                        textShadow: isHighlighted ? '0 0 10px rgba(255,255,255,0.2)' : 'none',
                                        marginRight: '5px',
                                        display: 'inline-block'
                                    }}
                                >
                                    {word}
                                </span>
                            );
                        })}
                    </p>
                </div>

                <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <motion.button
                        onClick={togglePlay}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '1rem 2rem',
                            background: isPlaying ? '#30363d' : '#238636',
                            color: 'white',
                            borderRadius: '100px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                        }}
                    >
                        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                        {isPlaying ? 'Pause' : 'Play Narration'}
                    </motion.button>

                    {/* Replay Button */}
                    <motion.button
                        onClick={() => {
                            if (audioRef.current) {
                                audioRef.current.currentTime = 0;
                                audioRef.current.play();
                                setIsPlaying(true);
                            }
                        }}
                        whileHover={{ scale: 1.1 }}
                        style={{ padding: '0.8rem', background: 'var(--glass-bg)', borderRadius: '50%', border: '1px solid var(--border-color)' }}
                    >
                        <RefreshCw size={20} color="#8b949e" />
                    </motion.button>
                </div>

                {/* Navigation Controls */}
                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                    <button
                        onClick={onPrev}
                        disabled={isFirst}
                        style={{
                            opacity: isFirst ? 0.3 : 1,
                            cursor: isFirst ? 'default' : 'pointer',
                            display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#8b949e'
                        }}
                    >
                        <ChevronLeft size={20} /> Prev
                    </button>
                    <button
                        onClick={onNext}
                        disabled={isLast}
                        style={{
                            opacity: isLast ? 0.3 : 1,
                            cursor: isLast ? 'default' : 'pointer',
                            display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#58a6ff'
                        }}
                    >
                        Next <ChevronRight size={20} />
                    </button>
                </div>

                <audio
                    ref={audioRef}
                    src={`/audio/${data.id}.mp3`}
                    onEnded={handleEnded}
                    onTimeUpdate={onTimeUpdate}
                />
            </motion.div>

            {/* Right Side: Visuals */}
            <div className="visual-side flex-center" style={{ position: 'relative', perspective: '1000px' }}>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={data.id}
                        initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                        transition={{ duration: 0.6 }}
                        style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        {/* Clone the visual element to pass generic audio props */}
                        {React.cloneElement(visual, {
                            currentTime,
                            duration: audioRef.current?.duration || 0,
                            isPlaying
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default StoryPage;
