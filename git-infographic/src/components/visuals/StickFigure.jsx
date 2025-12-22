import React from 'react';

// Multi-Pose Stick Figure
// Poses: idle, typing, panic, thinking, presenting, pointing_left, blocking, lifting_heavy, finger_balance
const StickFigure = React.forwardRef(({ pose }, ref) => {
    return (
        <div className="flex flex-col items-center">
            <svg width="200" height="300" viewBox="0 0 200 300" className="text-[#5d4037]" style={{ overflow: 'visible' }}>
                {/* STRESS LINES (Panic Only) */}
                <g className="stress-lines" opacity={pose === 'panic' ? 1 : 0}>
                    <line x1="50" y1="10" x2="30" y2="30" stroke="orange" strokeWidth="3" strokeLinecap="round" />
                    <line x1="150" y1="10" x2="170" y2="30" stroke="orange" strokeWidth="3" strokeLinecap="round" />
                    <line x1="40" y1="40" x2="20" y2="50" stroke="orange" strokeWidth="3" strokeLinecap="round" />
                    <line x1="160" y1="40" x2="180" y2="50" stroke="orange" strokeWidth="3" strokeLinecap="round" />
                </g>

                {/* HEAD */}
                <circle cx="100" cy="50" r="30" fill="#FDFBF7" stroke="currentColor" strokeWidth="4" />

                {/* FACE */}
                {pose === 'panic' && (
                    // Panic Face (>_<)
                    <g>
                        <path d="M85 45 L95 50 L85 55" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M115 45 L105 50 L115 55" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M90 65 Q100 60 110 65" fill="none" stroke="currentColor" strokeWidth="2" />
                    </g>
                )}
                {pose === 'blocking' && (
                    // Serious Face
                    <g>
                        <circle cx="90" cy="45" r="2" fill="currentColor" />
                        <circle cx="110" cy="45" r="2" fill="currentColor" />
                        <line x1="90" y1="65" x2="110" y2="65" stroke="currentColor" strokeWidth="2" />
                    </g>
                )}
                {pose === 'thinking' && (
                    // Thinking Face (Looking up/side)
                    <g>
                        <circle cx="95" cy="40" r="2" fill="currentColor" />
                        <circle cx="115" cy="40" r="2" fill="currentColor" />
                        <path d="M100 65 Q110 60 120 65" fill="none" stroke="currentColor" strokeWidth="2" />
                    </g>
                )}
                {pose === 'lifting_heavy' && (
                    // Strained Face
                    <g>
                        <path d="M85 45 Q90 40 95 45" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M105 45 Q110 40 115 45" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M95 65 Q100 60 105 65" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M30 50 Q40 40 50 50" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" /> {/* Sweat */}
                    </g>
                )}
                {!['panic', 'blocking', 'thinking', 'lifting_heavy'].includes(pose) && (
                    // Neutral Face
                    <g>
                        <circle cx="90" cy="45" r="2" fill="currentColor" />
                        <circle cx="110" cy="45" r="2" fill="currentColor" />
                        <line x1="90" y1="65" x2="110" y2="65" stroke="currentColor" strokeWidth="2" />
                    </g>
                )}

                {/* BODY */}
                <line x1="100" y1="80" x2="100" y2="180" stroke="currentColor" strokeWidth="4" />

                {/* LEGS */}
                <g>
                    <line x1="100" y1="180" x2="60" y2="280" stroke="currentColor" strokeWidth="4" />
                    <line x1="100" y1="180" x2="140" y2="280" stroke="currentColor" strokeWidth="4" />
                </g>

                {/* ARMS (Dynamic) */}
                {pose === 'panic' && (
                    <g>
                        <polyline points="100,100 60,80 70,50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
                        <polyline points="100,100 140,80 130,50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
                    </g>
                )}
                {pose === 'thinking' && (
                    <g>
                        <polyline points="100,100 60,130 100,130" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
                        <polyline points="100,100 140,80 120,50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
                    </g>
                )}
                {pose === 'presenting' && (
                    <g>
                        <line x1="100" y1="100" x2="60" y2="150" stroke="currentColor" strokeWidth="4" />
                        <line x1="100" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="4" />
                    </g>
                )}
                {pose === 'pointing_left' && (
                    <g>
                        <line x1="100" y1="100" x2="40" y2="80" stroke="currentColor" strokeWidth="4" />
                        <line x1="100" y1="100" x2="140" y2="150" stroke="currentColor" strokeWidth="4" />
                    </g>
                )}
                {pose === 'blocking' && (
                    <g>
                        <line x1="100" y1="100" x2="60" y2="140" stroke="currentColor" strokeWidth="4" />
                        <line x1="100" y1="100" x2="140" y2="140" stroke="currentColor" strokeWidth="4" />
                    </g>
                )}
                {pose === 'typing' && (
                    <g ref={ref}>
                        <line className="arm-left" x1="100" y1="100" x2="60" y2="150" stroke="currentColor" strokeWidth="4" />
                        <line className="arm-right" x1="100" y1="100" x2="140" y2="150" stroke="currentColor" strokeWidth="4" />
                    </g>
                )}
                {pose === 'lifting_heavy' && (
                    <g>
                        {/* Arms bent upwards holding something heavy */}
                        <polyline points="100,100 70,130 50,100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
                        <polyline points="100,100 130,130 150,100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
                    </g>
                )}
                {pose === 'finger_balance' && (
                    <g>
                        {/* One arm confident on hip, one finger up */}
                        <polyline points="100,100 60,130 70,140" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
                        <polyline points="100,100 140,110 140,60" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
                    </g>
                )}

                {pose === 'meditating' && (
                    <g>
                        {/* Arms crossed in front, hands together */}
                        <polyline points="100,100 70,120 100,130 130,120 100,100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
                    </g>
                )}

                {/* Default/Idle */}
                {['idle'].includes(pose) && (
                    <g>
                        <line x1="100" y1="100" x2="60" y2="150" stroke="currentColor" strokeWidth="4" />
                        <line x1="100" y1="100" x2="140" y2="150" stroke="currentColor" strokeWidth="4" />
                    </g>
                )}
                {/* Fallback for undefined pose */}
                {!['panic', 'thinking', 'presenting', 'pointing_left', 'blocking', 'typing', 'lifting_heavy', 'finger_balance', 'idle', 'meditating'].includes(pose) && (
                    <g>
                        <line x1="100" y1="100" x2="60" y2="150" stroke="currentColor" strokeWidth="4" />
                        <line x1="100" y1="100" x2="140" y2="150" stroke="currentColor" strokeWidth="4" />
                    </g>
                )}

                {/* DESK (Hidden in some) */}
                <rect
                    x="20" y="150" width="160" height="10" rx="5"
                    fill="#f0e6d2" stroke="currentColor" strokeWidth="3"
                    opacity={pose === 'typing' ? 1 : 0}
                />

            </svg>
            {/* Optional Label */}
            <div className="text-center mt-2 font-bold text-gray-500 text-sm">You (Developer)</div>
        </div>
    );
});

export default StickFigure;
