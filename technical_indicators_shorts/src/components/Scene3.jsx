import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { playRev, playWhoosh, playPop } from '../utils/SoundEffects';

const Scene3 = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // 1. Car enters - Rev engine
        tl.from(".car", {
            x: -300,
            ease: "back.out(0.8)",
            duration: 1,
            onStart: playRev
        });

        // 2. Speedometer appears - Pop
        tl.from(".meter", {
            scale: 0,
            ease: "elastic.out(1, 0.6)",
            duration: 0.8,
            onStart: playPop
        });

        // 3. Needle revs up & Car Zooms - Whoosh
        tl.to(".needle", { rotate: 180, duration: 1, ease: "power2.inOut", delay: 0.5 });

        tl.to(".car", {
            x: 300,
            duration: 0.5,
            ease: "power4.in",
            onStart: playWhoosh
        }, "<0.5");

        // 5. Text Explains - Pop
        tl.from(".fix-text", {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: "back.out(2)",
            duration: 0.5,
            onStart: playPop
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="w-full h-full flex flex-col items-center justify-center p-4 relative bg-blue-900">

            <h2 className="text-2xl font-bold text-white mb-8 text-center">
                Don't watch the <span className="text-yellow-400">CAR</span>...
            </h2>

            {/* The Car (Price) */}
            <div className="car text-8xl mb-12">
                🏎️💨
            </div>

            {/* The Speedometer (Velocity) */}
            <div className="meter w-48 h-24 bg-gray-800 rounded-t-full relative overflow-hidden border-4 border-gray-600 mb-8">
                <div className="absolute bottom-0 left-1/2 w-4 h-20 bg-red-500 origin-bottom needle transform rotate-[-45deg] rounded-full anchor-bottom z-10" style={{ transformOrigin: '50% 100%' }}></div>
                <div className="absolute bottom-0 w-full h-full flex">
                    <div className="flex-1 bg-red-500 opacity-50"></div>
                    <div className="flex-1 bg-yellow-500 opacity-50"></div>
                    <div className="flex-1 bg-green-500 opacity-50"></div>
                </div>
                <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full z-20 border-4 border-gray-600"></div>
            </div>

            <div className="text-center bg-white text-black p-4 rounded-xl shadow-[0_5px_0_rgba(0,0,0,0.2)] fix-text">
                <h3 className="text-xl font-bold">Watch the SPEED!</h3>
                <p className="text-sm font-bold text-blue-600 mt-1">(That's Velocity!)</p>
            </div>

        </div>
    );
};

export default Scene3;
