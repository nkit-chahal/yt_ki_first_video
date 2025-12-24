import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { playPop, playCrash } from '../utils/SoundEffects';

const Scene1 = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // 1. Show all traders happy
        tl.from(".trader", {
            scale: 0,
            opacity: 0,
            stagger: {
                each: 0.1,
                onStart: () => playPop() // Pop sound for each emoji
            },
            ease: "elastic.out(1, 0.5)",
            duration: 0.8
        });

        // 2. "9 OUT OF 10 FAIL"
        tl.to(".trader-fail", {
            scale: 1.2,
            rotate: 15,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            delay: 1
        });

        tl.to(".trader-fail", {
            scale: 0,
            opacity: 0,
            rotation: 360,
            stagger: {
                each: 0.05,
                onStart: () => playPop() // Pop sound for disappearance
            },
            ease: "back.in(1.7)",
            duration: 0.5
        });

        // Replace with skulls
        tl.to(".skull", {
            scale: 1,
            opacity: 1,
            stagger: 0.05,
            duration: 0.1
        }, "<0.2"); // Overlap slightly

        // 3. Big Text Slam
        tl.from(".big-fail-text", {
            scale: 5,
            opacity: 0,
            ease: "elastic.out(1, 0.3)",
            duration: 0.8,
            onStart: () => playCrash() // Crash sound for big text
        }, "+=0.2");

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="w-full h-full flex flex-col items-center justify-center p-4">

            <h2 className="text-3xl font-bold text-yellow-300 mb-8 text-center drop-shadow-md">
                TRADING IS HARD! 😅
            </h2>

            {/* Grid of Traders */}
            <div className="grid grid-cols-5 gap-4 mb-8">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="relative w-12 h-12 flex items-center justify-center">
                        {/* The Happy Trader */}
                        <div className={`trader text-4xl absolute inset-0 ${i < 9 ? 'trader-fail' : ''}`}>
                            🤑
                        </div>
                        {/* The Dead Trader (Hidden initially) */}
                        {i < 9 && (
                            <div className="skull text-4xl absolute inset-0 scale-0 opacity-0 transform rotate-12">
                                💀
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="big-fail-text text-center">
                <h1 className="text-8xl font-black text-red-500 transform -rotate-6 drop-shadow-[0_5px_0_rgba(0,0,0,0.5)]">
                    FAIL!
                </h1>
                <p className="text-xl text-white font-bold mt-2">90% Lose Money</p>
            </div>

        </div>
    );
};

export default Scene1;
