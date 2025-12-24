import React, { useState, useEffect } from 'react';

// Use "Hormozi" style text splitting for punchiness
const CAPTION_DATA = {
    1: [
        { text: "9 out of 10", time: 0, duration: 2500, rotate: -2, color: "text-white" },
        { text: "BLOW UP", time: 2500, duration: 1500, color: "text-red-500", scale: 1.5, rotate: 5 },
        { text: "their accounts", time: 4000, duration: 1500, color: "text-white" },
        { text: "in the first year.", time: 5500, duration: 2000, color: "text-white" },
        { text: "WHY?", time: 7500, duration: 1000, color: "text-yellow-400", scale: 2 },
    ],
    2: [
        { text: "Because you're trusting", time: 0, duration: 2000, color: "text-white" },
        { text: "OUTDATED", time: 2000, duration: 1000, color: "text-gray-400", rotate: -3 },
        { text: "INDICATORS", time: 3000, duration: 1000, color: "text-gray-400", rotate: 3 },
        { text: "like RSI.", time: 4000, duration: 1500, color: "text-purple-400", scale: 1.2 },
        { text: "They scream", time: 5500, duration: 1000, color: "text-white" },
        { text: "BUY!", time: 6500, duration: 1000, color: "text-green-400", scale: 1.8, rotate: -5 },
        { text: "just because it's low...", time: 7500, duration: 2000, color: "text-white" },
        { text: "Right before it", time: 9500, duration: 1500, color: "text-white" },
        { text: "CRASHES!", time: 11000, duration: 1500, color: "text-red-600", scale: 1.8, rotate: 10 },
    ],
    3: [
        { text: "Stop betting on price.", time: 0, duration: 2000, color: "text-white" },
        { text: "Start measuring", time: 2000, duration: 1500, color: "text-white" },
        { text: "VELOCITY.", time: 3500, duration: 1500, color: "text-cyan-400", scale: 1.5, rotate: -2 },
        { text: "Green = GO", time: 5000, duration: 1500, color: "text-green-500", scale: 1.2 },
        { text: "Red = STOP", time: 6500, duration: 1500, color: "text-red-500", scale: 1.2 },
        { text: "Don't predict price.", time: 8000, duration: 2000, color: "text-white" },
        { text: "Measure the", time: 10000, duration: 500, color: "text-white" },
        { text: "FORCE.", time: 10500, duration: 2000, color: "text-yellow-400", scale: 1.5, rotate: 5 },
    ]
};

const Captions = ({ scene }) => {
    const [currentCaption, setCurrentCaption] = useState(null);

    useEffect(() => {
        setCurrentCaption(null);
        if (!CAPTION_DATA[scene]) return;

        const timeouts = [];

        CAPTION_DATA[scene].forEach((cap) => {
            // Show Caption
            const t1 = setTimeout(() => {
                setCurrentCaption(cap);
            }, cap.time);

            // Hide Caption
            const t2 = setTimeout(() => {
                setCurrentCaption((prev) => (prev && prev.text === cap.text ? null : prev));
            }, cap.time + cap.duration);

            timeouts.push(t1, t2);
        });

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, [scene]);

    if (!currentCaption) return null;

    return (
        <div className="absolute inset-x-0 bottom-[25%] flex justify-center z-[100] pointer-events-none">
            <div
                key={currentCaption.text} // Key change triggers re-animation
                className={`
                animate-word-pop
                relative
                flex items-center justify-center
            `}
                style={{
                    transform: `rotate(${currentCaption.rotate || 0}deg) scale(${currentCaption.scale || 1})`
                }}
            >
                <span
                    className={`
                    ${currentCaption.color} 
                    font-black 
                    text-4xl 
                    text-center 
                    uppercase 
                    leading-tight
                    px-2
                    py-1
                    drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]
                    stroke-black
                `}
                    style={{
                        // Strong text stroke effect for "Shorts" look
                        WebkitTextStroke: '2px black',
                        textShadow: '0 4px 10px rgba(0,0,0,0.5)'
                    }}
                >
                    {currentCaption.text}
                </span>
            </div>
        </div>
    );
};

export default Captions;
