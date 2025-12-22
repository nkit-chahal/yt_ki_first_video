import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useSoundEffects } from './hooks/useSoundEffects';

gsap.registerPlugin(useGSAP);

const IntroSequence = () => {
    const containerRef = useRef(null);
    const timelineRef = useRef(null);
    const balanceRef = useRef(null);
    const pathRef = useRef(null);

    const { playSound } = useSoundEffects();

    useGSAP(() => {
        // Continuous timeline matching narration
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        timelineRef.current = tl;

        const pathLength = 3000;

        // --- SETUP ---
        // Scene 1 visible, others hidden
        tl.set("#scene-1", { opacity: 1, display: "flex" })
            .set(["#scene-2", "#scene-3", "#scene-4", "#scene-5"], { opacity: 0, display: "none" });

        if (pathRef.current) {
            tl.set(pathRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
        }

        // ===============================================
        // PART 1: "90% of algorithmic traders lose money."
        // ===============================================
        tl.addLabel("start");
        // Draw Chart
        if (pathRef.current) {
            tl.to(pathRef.current, {
                strokeDashoffset: 0,
                duration: 3,
                ease: "rough({ template: power1.in, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})",
                onStart: () => playSound('buzzer', 0.3) // Chart crashing sound
            }, "start");
        }
        // Text Reveal
        tl.call(() => playSound('thud', 0.5), null, "start+=0.5");
        tl.fromTo("#text-90", { scale: 1.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 2 }, "start");

        tl.call(() => playSound('thud', 0.6), null, "start+=1.5");
        tl.fromTo("#text-lose", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "start+=1");


        // ===============================================
        // PART 2: "They copy code from YouTube..."
        // (Swapped Scene 3 to be here)
        // ===============================================
        tl.addLabel("youtube", "+=1.0"); // 4s mark approx
        tl.call(() => playSound('whoosh', 0.4), null, "youtube-=0.2");
        tl.set("#scene-1", { opacity: 0, display: "none" }, "youtube")
            .set("#scene-youtube", { opacity: 1, display: "flex" }, "youtube"); // Former Scene 3

        tl.fromTo(".yt-player", { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, "youtube");

        // Play button click
        tl.call(() => playSound('click', 0.8), null, "youtube+=0.5");
        tl.to(".play-btn", { scale: 1.1, repeat: 7, yoyo: true, duration: 0.5 }, "youtube+=0.5");

        // Typing sounds
        tl.call(() => playSound('typewriter', 0.3), null, "youtube+=0.5");
        tl.to(".code-line", { width: "100%", duration: 1.5, stagger: 0.2 }, "youtube+=0.5");


        // ===============================================
        // PART 3: "...and watch their account bleed out."
        // (Swapped Scene 2 to be here)
        // ===============================================
        tl.addLabel("bleed", "+=0.5"); // 8s mark approx
        tl.set("#scene-youtube", { opacity: 0, display: "none" }, "bleed")
            .set("#scene-bleed", { opacity: 1, display: "flex" }, "bleed"); // Former Scene 2

        if (balanceRef.current) {
            tl.to(balanceRef.current, {
                innerText: 0,
                duration: 3.5, // Slow, painful drain
                snap: { innerText: 0.01 },
                onUpdate: function () {
                    if (balanceRef.current) {
                        try {
                            const val = parseFloat(this.targets()[0].innerText);
                            if (!isNaN(val)) {
                                balanceRef.current.innerText = "$" + val.toFixed(2);
                            }
                        } catch (e) { }
                    }
                },
                ease: "expo.out"
            }, "bleed");
        }
        tl.call(() => playSound('ding', 0.2), null, "bleed"); // Start of bleed (maybe change to alarm later)
        tl.fromTo("#text-copy", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "bleed");


        // ===============================================
        // PART 4: "They blame the market... They Lose."
        // ===============================================
        tl.addLabel("lose", "+=0.5"); // 12s mark approx
        tl.call(() => playSound('whoosh', 0.4), null, "lose-=0.2");
        tl.set("#scene-bleed", { opacity: 0, display: "none" }, "lose")
            .set("#scene-lose", { opacity: 1, display: "flex" }, "lose"); // Former Scene 4

        // Crash Line 2
        tl.call(() => playSound('scribble', 0.4), null, "lose");
        tl.fromTo(".crash-line-2",
            { strokeDasharray: 2000, strokeDashoffset: 2000 },
            { strokeDashoffset: 0, duration: 2, ease: "power1.in" },
            "lose"
        );
        tl.fromTo("#text-they-lose",
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 1, ease: "expo.out" },
            "lose+=0.5"
        );

        tl.call(() => playSound('thud', 0.8), null, "lose+=1.2");
        tl.fromTo(".text-lose-word",
            { color: "#1f2937" },
            { color: "#DC2626", duration: 0.2 },
            "lose+=1.2"
        );


        // ===============================================
        // PART 5: "...building a forensic tool..."
        // ===============================================
        tl.addLabel("forensic", "+=1.5"); // 16s mark approx
        tl.call(() => playSound('whoosh', 0.4), null, "forensic-=0.2");
        tl.set("#scene-lose", { opacity: 0, display: "none" }, "forensic")
            .set("#scene-forensic", { opacity: 1, display: "flex" }, "forensic"); // Former Scene 5

        tl.call(() => playSound('pop', 0.5), null, "forensic");
        tl.fromTo("#python-logo",
            { opacity: 0, y: 50, rotation: -10 },
            { opacity: 1, y: 0, rotation: 0, duration: 1, ease: "back.out(1.7)" },
            "forensic"
        );

        tl.call(() => playSound('pop', 0.5), null, "forensic+=0.5");
        tl.fromTo("#text-not-bot",
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
            "forensic+=0.5"
        );

        tl.call(() => playSound('magic', 0.6), null, "forensic+=1.0");
        tl.fromTo("#text-forensic",
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
            "forensic+=1.0"
        );

        tl.call(() => playSound('pop', 0.4), null, "forensic+=2.5");
        tl.fromTo("#text-math",
            { opacity: 0 },
            { opacity: 1, duration: 1 },
            "forensic+=2.5" // "We prove it. With math."
        );

    }, { scope: containerRef });


    return (
        <div ref={containerRef} className="relative w-screen h-screen bg-cream overflow-hidden font-sans text-gray-900">

            {/* GLOBAL BACKGROUND */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)] pointer-events-none"></div>

            {/* SCENE 1: 90% Fail */}
            <div id="scene-1" className="scene absolute inset-0 flex flex-col items-center justify-center z-10" style={{ display: 'flex' }}>
                <h1 id="text-90" className="text-9xl font-black text-red-600 tracking-tighter drop-shadow-sm z-20">
                    90% OF
                </h1>
                <h2 id="text-lose" className="text-6xl font-bold tracking-[0.5em] text-gray-800 mt-4 uppercase z-20">
                    TRADERS LOSE
                </h2>
                <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
                        <path
                            ref={pathRef}
                            d="M0,100 L100,120 L200,80 L300,150 L400,100 L500,300 L600,250 L700,400 L800,350 L900,450 L1000,480"
                            fill="none"
                            stroke="#FF0000"
                            strokeWidth="4"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                </div>
            </div>

            {/* SCENE "YOUTUBE": Copy Code */}
            <div id="scene-youtube" className="scene absolute inset-0 flex items-center justify-center z-10" style={{ display: 'none', opacity: 0 }}>
                <div className="yt-player w-3/4 h-3/4 bg-white rounded-lg border border-gray-200 shadow-2xl relative overflow-hidden flex flex-col">
                    <div className="h-12 border-b border-gray-100 flex items-center px-4 space-x-2 bg-gray-50">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 p-8 font-mono text-sm text-gray-500 opacity-80 relative flex flex-col bg-gray-50/50">
                        <div className="absolute inset-0 bg-white/20 z-10 flex items-center justify-center backdrop-blur-[1px]">
                            <div className="play-btn w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg cursor-pointer">
                                <div className="w-0 h-0 border-l-[30px] border-l-white border-y-[20px] border-y-transparent ml-2"></div>
                            </div>
                        </div>
                        <div className="code-line bg-gray-200 h-4 w-1/3 mb-4 rounded"></div>
                        <div className="code-line bg-gray-200 h-4 w-1/2 mb-4 rounded"></div>
                        <div className="code-line bg-gray-200 h-4 w-2/3 mb-4 rounded"></div>
                        <div className="code-line bg-gray-200 h-4 w-1/4 mb-4 rounded"></div>
                    </div>
                </div>
            </div>

            {/* SCENE "BLEED": Account Bleeding */}
            <div id="scene-bleed" className="scene absolute inset-0 flex flex-col items-center justify-center z-10" style={{ display: 'none', opacity: 0 }}>
                <h2 id="text-copy" className="text-5xl font-bold text-gray-500 mb-12">It Bleeds.</h2>
                <div className="border-2 border-red-600/20 bg-white/50 p-8 rounded-xl shadow-xl backdrop-blur-sm">
                    <div className="text-red-500 font-mono text-2xl mb-2 tracking-widest">BALANCE</div>
                    <div className="text-7xl font-mono font-bold text-gray-900 tabular-nums">
                        <span ref={balanceRef}>10000.00</span>
                    </div>
                </div>
            </div>

            {/* SCENE "LOSE": They Lose */}
            <div id="scene-lose" className="scene absolute inset-0 flex items-center justify-center z-10 bg-cream" style={{ display: 'none', opacity: 0 }}>
                <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
                        <path
                            d="M0,0 L200,50 L400,30 L600,400 L800,350 L1000,500"
                            fill="none"
                            stroke="#FF0000"
                            strokeWidth="8"
                            vectorEffect="non-scaling-stroke"
                            className="crash-line-2"
                        />
                    </svg>
                </div>
                <h1 id="text-they-lose" className="text-[8rem] font-bold text-gray-800 z-20 text-center leading-none">
                    They <span className="text-lose-word">Lose</span>.
                </h1>
            </div>

            {/* SCENE "FORENSIC": Forensic Tool */}
            <div id="scene-forensic" className="scene absolute inset-0 flex flex-col items-center justify-center z-10" style={{ display: 'none', opacity: 0 }}>
                <div className="flex items-center space-x-12 mb-12">
                    <div className="flex flex-col items-start space-y-2">
                        <h2 id="text-not-bot" className="text-6xl font-bold text-gray-800 tracking-wide uppercase">
                            Not a Bot.
                        </h2>
                        <h2 id="text-forensic" className="text-6xl font-black text-blue-600 tracking-wide uppercase">
                            A Forensic Tool.
                        </h2>
                    </div>

                    <div id="python-logo" className="w-48 h-48">
                        <img src="/python-logo.png" alt="Python Logo" className="w-full h-full object-contain filter drop-shadow-xl" />
                    </div>
                </div>

                <p id="text-math" className="text-3xl text-gray-500 font-mono tracking-widest mt-8">
                    We prove it. <span className="text-blue-500 font-bold">With math.</span>
                </p>
            </div>

            {/* Optional Replay Button for development */}
            <button className="absolute bottom-4 left-4 z-[50] text-gray-400/50 hover:text-gray-400 text-xs uppercase cursor-pointer transition-colors" onClick={() => timelineRef.current?.restart()}> Replay </button>

        </div>
    );
};

export default IntroSequence;
