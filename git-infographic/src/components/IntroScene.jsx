import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Caption from './Caption';
import StickFigure from './visuals/StickFigure';
import FloatingCommand from './visuals/FloatingCommand';
import CommitNode from './visuals/CommitNode';
import StickyNote from './visuals/StickyNote';
import { AlertTriangle } from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects';

const CAPTIONS = [
    { text: "Copy. Paste. Pray.", time: 0 },
    { text: "You know the commands...", time: 4 },
    { text: "...but when it breaks, panic sets in.", time: 8 },
    { text: "Let's build the mental model.", time: 12 }
];

const IntroScene = ({ data, onComplete }) => {
    const { playSound } = useSoundEffects();
    const containerRef = useRef(null);
    const cameraRef = useRef(null);
    const audioRef = useRef(null);
    const stickFigureRef = useRef(null);

    // Sub-scene 1 refs
    const scene1Ref = useRef(null);
    const cmd1Ref = useRef(null);
    const cmd2Ref = useRef(null);
    const cmd3Ref = useRef(null);
    const cmd4Ref = useRef(null);
    const glowRef = useRef(null);

    // Sub-scene 2 refs
    const scene2Ref = useRef(null);
    const scrollRef = useRef(null);
    const badge1Ref = useRef(null);
    const badge2Ref = useRef(null);
    const brokenGraphRef = useRef(null);

    // Sub-scene 3 refs
    const scene3Ref = useRef(null);
    const bubble1Ref = useRef(null);
    const bubble2Ref = useRef(null);
    const bubble3Ref = useRef(null);

    // Sub-scene 4 refs
    const scene4Ref = useRef(null);
    const titleRef = useRef(null);
    const graphRef = useRef(null);
    const c1Ref = useRef(null);
    const c2Ref = useRef(null);
    const c3Ref = useRef(null);
    const mainStickyRef = useRef(null);

    const [captionText, setCaptionText] = useState(CAPTIONS[0].text);
    const [pose, setPose] = useState('meditating');

    useGSAP(() => {
        if (!data) return;
        if (audioRef.current) audioRef.current.play().catch(e => console.log("Autoplay blocked", e));

        const tl = gsap.timeline();

        // Initial state: Hide all scenes except scene 1
        gsap.set(scene1Ref.current, { opacity: 1 });
        gsap.set([scene2Ref.current, scene3Ref.current, scene4Ref.current], { opacity: 0, pointerEvents: 'none' });

        // Reset scene 1 elements
        gsap.set([cmd1Ref.current, cmd2Ref.current, cmd3Ref.current, cmd4Ref.current], { opacity: 0, scale: 0, y: 50 });
        gsap.set(glowRef.current, { opacity: 0, scale: 0.8 });

        // Reset scene 2 elements
        gsap.set([scrollRef.current, badge1Ref.current, badge2Ref.current, brokenGraphRef.current], { opacity: 0 });

        // Reset scene 3 elements
        gsap.set([bubble1Ref.current, bubble2Ref.current, bubble3Ref.current], { opacity: 0, scale: 0, x: -50 });

        // Reset scene 4 elements
        gsap.set(titleRef.current, { opacity: 0, y: 30 });
        gsap.set(graphRef.current, { opacity: 0 });
        gsap.set(mainStickyRef.current, { opacity: 0, scale: 0.5 });

        // ========== SUB-SCENE 1: Copy. Paste. Pray. (0s - 4s) ==========
        tl.call(() => { setCaptionText(CAPTIONS[0].text); setPose('meditating'); });

        // Floating commands appear
        tl.call(() => playSound('pop', 0.4), null, 0.5);
        tl.to(cmd1Ref.current, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }, 0.5);

        tl.call(() => playSound('pop', 0.45), null, 0.8);
        tl.to(cmd2Ref.current, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }, 0.8);

        tl.call(() => playSound('pop', 0.5), null, 1.1);
        tl.to(cmd3Ref.current, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }, 1.1);

        tl.call(() => playSound('pop', 0.55), null, 1.4);
        tl.to(cmd4Ref.current, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }, 1.4);

        // Wobble animation for commands
        tl.to([cmd1Ref.current, cmd2Ref.current, cmd3Ref.current, cmd4Ref.current], {
            rotation: "random(-3, 3)",
            y: "random(-5, 5)",
            duration: 2,
            repeat: 1,
            yoyo: true,
            ease: "sine.inOut"
        }, 1.5);

        // Glow under figure
        tl.to(glowRef.current, { opacity: 0.6, scale: 1, duration: 1, ease: "power2.out" }, 2);

        // ========== SUB-SCENE 2: Commands Memorized (4s - 8s) ==========
        tl.call(() => { setCaptionText(CAPTIONS[1].text); setPose('thinking'); }, null, 4);

        // Fade out scene 1, show scene 2
        tl.to(scene1Ref.current, { opacity: 0, duration: 0.3 }, 4);
        tl.to(scene2Ref.current, { opacity: 1, pointerEvents: 'auto', duration: 0.3 }, 4.3);

        // Scroll and badges appear
        tl.to(scrollRef.current, { opacity: 1, duration: 0.5 }, 4.5);
        tl.to(badge1Ref.current, { opacity: 1, x: 0, duration: 0.4, ease: "back.out" }, 5);
        tl.to(badge2Ref.current, { opacity: 1, x: 0, duration: 0.4, ease: "back.out" }, 5.3);

        // Broken graph fades in
        tl.to(brokenGraphRef.current, { opacity: 1, duration: 0.8 }, 5.5);

        // ========== SUB-SCENE 3: Panic Questions (8s - 12s) ==========
        tl.call(() => { setCaptionText(CAPTIONS[2].text); setPose('panic'); }, null, 8);

        // Fade out scene 2, show scene 3
        tl.to(scene2Ref.current, { opacity: 0, duration: 0.3 }, 8);
        tl.to(scene3Ref.current, { opacity: 1, pointerEvents: 'auto', duration: 0.3 }, 8.3);

        // Speech bubbles cascade in
        tl.to(bubble1Ref.current, { opacity: 1, scale: 1, x: 0, duration: 0.5, ease: "back.out(1.7)" }, 8.5);
        tl.to(bubble2Ref.current, { opacity: 1, scale: 1, x: 0, duration: 0.5, ease: "back.out(1.7)" }, 9);
        tl.to(bubble3Ref.current, { opacity: 1, scale: 1, x: 0, duration: 0.5, ease: "back.out(1.7)" }, 9.5);

        // Camera shake for panic
        tl.to(cameraRef.current, { x: 3, duration: 0.05, repeat: 10, yoyo: true }, 10);

        // ========== SUB-SCENE 4: Git is a Database (12s - 16s) ==========
        tl.call(() => { setCaptionText(CAPTIONS[3].text); setPose('presenting'); }, null, 12);

        // Fade out scene 3, show scene 4
        tl.to(scene3Ref.current, { opacity: 0, duration: 0.3 }, 12);
        tl.to(scene4Ref.current, { opacity: 1, pointerEvents: 'auto', duration: 0.3 }, 12.3);

        // Title appears
        tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 12.5);

        // Graph reveals
        tl.to(graphRef.current, { opacity: 1, duration: 0.5 }, 13);
        tl.from(c1Ref.current, { scale: 0, duration: 0.3, ease: "back.out(1.7)" }, 13.2);
        tl.from(c2Ref.current, { scale: 0, duration: 0.3, ease: "back.out(1.7)" }, 13.5);
        tl.from(c3Ref.current, { scale: 0, duration: 0.3, ease: "back.out(1.7)" }, 13.8);
        tl.to(mainStickyRef.current, { opacity: 1, scale: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" }, 14);

    }, [data?.id]);

    if (!data) return null;

    return (
        <div ref={containerRef} className="h-screen w-full flex flex-col items-center justify-center bg-[#FDFBF7] px-4 font-sans overflow-hidden relative">
            <audio ref={audioRef} src={`/audio/${data.id}.mp3`} onEnded={onComplete} />

            {/* CAMERA RIG */}
            <div ref={cameraRef} className="relative w-full h-full flex items-center justify-center origin-center will-change-transform">

                {/* STAGE AREA */}
                <div className="relative w-full max-w-5xl h-[600px] flex items-center justify-center">

                    {/* ===== SUB-SCENE 1: Copy. Paste. Pray. ===== */}
                    <div ref={scene1Ref} className="absolute inset-0 flex items-center justify-center">
                        {/* Floating Commands */}
                        <div ref={cmd1Ref} className="absolute top-20 left-20 opacity-0">
                            <FloatingCommand command="git reset --hard" hasWarning />
                        </div>
                        <div ref={cmd2Ref} className="absolute top-32 right-24 opacity-0">
                            <FloatingCommand command="git reflog" />
                        </div>
                        <div ref={cmd3Ref} className="absolute top-12 left-1/3 opacity-0">
                            <FloatingCommand command="git rebase --abort" />
                        </div>
                        <div ref={cmd4Ref} className="absolute bottom-32 left-32 opacity-0">
                            <FloatingCommand command="git checkout HEAD~1" />
                        </div>

                        {/* Glow Effect */}
                        <div ref={glowRef} className="absolute bottom-24 w-48 h-8 bg-yellow-300 rounded-full blur-xl opacity-0" />
                    </div>

                    {/* ===== SUB-SCENE 2: Commands Memorized ===== */}
                    <div ref={scene2Ref} className="absolute inset-0 flex items-center justify-between px-16 opacity-0">
                        {/* Left: Scroll */}
                        <div ref={scrollRef} className="flex flex-col items-center gap-4 opacity-0">
                            <div className="w-48 h-64 bg-amber-100 rounded-lg shadow-lg border-2 border-amber-200 flex items-center justify-center">
                                <div className="text-amber-600 text-center text-sm font-mono opacity-50">
                                    git add<br />git commit<br />git push<br />git pull<br />...
                                </div>
                            </div>
                        </div>

                        {/* Center: Badges */}
                        <div className="flex flex-col items-center gap-4">
                            <span ref={badge1Ref} className="px-4 py-2 bg-amber-500 text-white rounded-lg font-bold text-lg shadow-lg opacity-0 transform -translate-x-4">
                                Commands <span className="font-black">memorized</span>
                            </span>
                            <span ref={badge2Ref} className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg font-medium text-lg shadow opacity-0 transform translate-x-4">
                                But no mental model
                            </span>
                        </div>

                        {/* Right: Broken Graph */}
                        <div ref={brokenGraphRef} className="flex items-center gap-2 opacity-0">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center text-gray-500">C3</div>
                                <AlertTriangle className="absolute -top-2 -right-2 text-amber-500" size={16} />
                                <AlertTriangle className="absolute -bottom-1 -left-1 text-amber-500" size={14} />
                            </div>
                        </div>
                    </div>

                    {/* ===== SUB-SCENE 3: Panic Questions ===== */}
                    <div ref={scene3Ref} className="absolute inset-0 flex items-center justify-center opacity-0">
                        <div className="absolute top-24 right-1/4 flex flex-col gap-4">
                            <div ref={bubble1Ref} className="bg-white px-4 py-3 rounded-2xl shadow-lg border border-gray-200 text-gray-700 font-medium opacity-0">
                                Why did this break?
                            </div>
                            <div ref={bubble2Ref} className="bg-white px-4 py-3 rounded-2xl shadow-lg border border-gray-200 text-gray-700 font-medium opacity-0 ml-8">
                                Where is my commit?
                            </div>
                            <div ref={bubble3Ref} className="bg-white px-4 py-3 rounded-2xl shadow-lg border border-gray-200 text-gray-700 font-medium opacity-0 ml-4">
                                What just happened?
                            </div>
                        </div>
                    </div>

                    {/* ===== SUB-SCENE 4: Git is a Database ===== */}
                    <div ref={scene4Ref} className="absolute inset-0 flex flex-col items-center justify-center gap-16 opacity-0">
                        {/* Title */}
                        <h1 ref={titleRef} className="text-4xl font-black text-gray-800 opacity-0 z-50">
                            Git is not magic. It's a <span className="text-amber-600">database</span>.
                        </h1>

                        {/* Clean Graph */}
                        <div ref={graphRef} className="relative flex items-center gap-8 opacity-0">
                            <div ref={c1Ref} className="relative"><CommitNode label="C1" /></div>
                            <div className="w-16 h-1 bg-gray-400" />
                            <div ref={c2Ref} className="relative">
                                <CommitNode label="C2" />
                                <div ref={mainStickyRef} className="absolute -top-20 left-1/2 transform -translate-x-1/2 opacity-0 scale-50 z-40">
                                    <StickyNote text="main" />
                                </div>
                            </div>
                            <div className="w-16 h-1 bg-gray-400" />
                            <div ref={c3Ref} className="relative"><CommitNode label="C3" /></div>
                        </div>
                    </div>

                    {/* ===== PERSISTENT: Stick Figure ===== */}
                    <div ref={stickFigureRef} className="absolute bottom-20 right-16 transform origin-bottom z-50">
                        <StickFigure pose={pose} />
                        <div className="text-center mt-2 font-bold text-gray-500">You (Developer)</div>
                    </div>

                </div>
            </div>

            {/* CAPTION AREA */}


        </div>
    );
};

export default IntroScene;
