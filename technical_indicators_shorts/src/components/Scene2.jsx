import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { playPop, playCrash, playDing, playWhoosh } from '../utils/SoundEffects';

const Scene2 = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // 1. Stick figure appears - Pop
        tl.from(".stick-figure", {
            y: 100,
            opacity: 0,
            ease: "back.out(1.7)",
            duration: 0.5,
            onStart: playPop
        });

        // 2. "Magic Indicator" says BUY - Ding
        tl.from(".bubble", {
            scale: 0,
            ease: "elastic.out(1, 0.5)",
            duration: 0.5,
            onStart: playDing
        });

        // 3. Candle Falls - Whoosh
        tl.to(".candle", {
            y: 250,
            rotation: 10,
            ease: "power4.in",
            duration: 0.4,
            delay: 1,
            onStart: playWhoosh
        });

        // 4. Bonk! - Crash
        tl.to(".stick-figure", {
            scaleY: 0.5,
            scaleX: 1.2,
            y: "+=20",
            duration: 0.1,
            onStart: playCrash
        });
        tl.to(".stick-figure", { scale: 1, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });

        // 5. Stars
        tl.to(".stars", { opacity: 1, scale: 1.5, rotation: 360, duration: 0.5 });

        // 6. Text
        tl.from(".guess-text", {
            scale: 0,
            rotate: -10,
            ease: "elastic.out(1, 0.4)",
            duration: 0.8,
            onStart: playPop
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="w-full h-full flex flex-col items-center justify-end p-4 pb-12 overflow-hidden relative">

            {/* The Falling Candle */}
            <div className="candle absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-16 h-48 bg-red-500 border-4 border-red-700 rounded shadow-lg z-20 flex items-center justify-center">
                <span className="text-white font-bold text-2xl rotate-90">CRASH</span>
            </div>

            {/* Magic Indicator Bubble */}
            <div className="bubble absolute top-32 right-12 bg-white text-black p-4 rounded-full rounded-bl-none z-10 shadow-lg transform rotate-6">
                <p className="font-bold text-xl">RSI Says<br /><span className="text-green-600 text-3xl">BUY!</span></p>
            </div>

            {/* Dizzy Stars */}
            <div className="stars absolute top-1/2 left-1/2 text-4xl opacity-0">💫</div>

            {/* The Stick Figure */}
            <div className="stick-figure text-9xl relative z-0">
                😨
            </div>

            {/* Bottom Text */}
            <div className="guess-text absolute top-20 bg-yellow-400 text-black p-4 rotate-[-5deg] shadow-[5px_5px_0px_rgba(0,0,0,1)] border-4 border-black z-30">
                <h2 className="text-4xl font-black">IT'S JUST<br />GUESSING!</h2>
            </div>

        </div>
    );
};

export default Scene2;
