import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { GitMerge, RefreshCw, GitBranch, Move, Trash2, GitCommit, ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react';
import Annotation from './visuals/Annotation';
import StatusMessage from './visuals/StatusMessage';
import CommandPreview from './visuals/CommandPreview';
import CommitNode from './visuals/CommitNode';
import StickFigure from './visuals/StickFigure';
import StickyNote from './visuals/StickyNote';
import Caption from './Caption';
import { useSoundEffects } from '../hooks/useSoundEffects';

const RebaseScene = ({ data, onComplete }) => {
    if (!data) return null;

    const { playSound } = useSoundEffects();
    const containerRef = useRef(null);
    const audioRef = useRef(null);
    const cameraRef = useRef(null);

    // Nodes
    const c1Ref = useRef(null);
    const c2Ref = useRef(null);
    const c3Ref = useRef(null);
    const c4Ref = useRef(null);
    const c5Ref = useRef(null); // Merge commit

    // Labels
    const mainRef = useRef(null);
    const featureRef = useRef(null);

    // Annotated Layout Refs
    const annotationRef = useRef(null);
    const statusMsgRef = useRef(null);
    const commandRef = useRef(null);

    const [captionText, setCaptionText] = useState("");
    const [pose, setPose] = useState('idle');
    const [mode, setMode] = useState('merge'); // 'merge' or 'rebase'

    useGSAP(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.log("Audio play prevented:", e));
        }

        const tl = gsap.timeline();
        setCaptionText("");
        setPose('idle');

        // Reset Annotation elements
        if (annotationRef.current) gsap.set(annotationRef.current, { opacity: 0, y: 20 });
        if (statusMsgRef.current) gsap.set(statusMsgRef.current, { opacity: 0, scale: 0.8 });
        if (commandRef.current) gsap.set(commandRef.current, { opacity: 0, y: 20 });


        if (data.id === 'rebase_1') {
            const CAPTIONS = [
                { text: "Option one is Merge: ties two lines together.", duration: 3 },
                { text: "Option two is Rebase: 'Replays' your commits on top of a new base.", duration: 4 },
                { text: "Git creates BRAND NEW commits and deletes the old ones.", duration: 4 }
            ];

            setMode('merge');
            setPose('explaining');
            tl.call(() => setCaptionText(CAPTIONS[0].text));

            tl.to(c5Ref.current, { opacity: 0.5, scale: 1, duration: 1 }, 1);

            tl.call(() => {
                setCaptionText(CAPTIONS[1].text);
                setMode('rebase');
                setPose('magic');
            }, null, 3.5);

            tl.to(c5Ref.current, { opacity: 0, scale: 0, duration: 0.5 }, 3.5);

            // Replay sequence: Lift -> Move -> Drop
            // 1. Lift UP (with slight rotation lag)
            tl.call(() => playSound('whoosh', 0.4), null, 4);
            tl.to([c3Ref.current, c4Ref.current, featureRef.current], {
                y: -150,
                rotation: -5,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, 4);

            // 2. Move ACROSS (Hovering)
            tl.to([c3Ref.current, c4Ref.current, featureRef.current], {
                x: "+=150",
                rotation: 5,
                duration: 1,
                ease: "power2.inOut"
            }, 4.8);

            // 3. Drop DOWN (Heavy impact)
            tl.call(() => playSound('thud', 0.6), null, 5.8);
            tl.to([c3Ref.current, c4Ref.current, featureRef.current], {
                y: 0,
                rotation: 0,
                duration: 0.6,
                ease: "bounce.out"
            }, 5.8);

            // Annotation
            tl.call(() => playSound('ding', 0.5), null, 6.5);
            tl.to(annotationRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "back.out" }, 6.5);
            // Command
            tl.to(commandRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "back.out" }, 7);

            tl.call(() => {
                setCaptionText(CAPTIONS[2].text);
                setPose('warning');
            }, null, 7.5);

            tl.to([c3Ref.current, c4Ref.current], { backgroundColor: "#d8b4fe", duration: 0.2, yoyo: true, repeat: 3 }, 7.5);
        }
        else if (data.id === 'rebase_2') {
            const CAPTIONS = [
                { text: "This is why you never rebase shared code.", duration: 3 },
                { text: "If you change history others have seen, conflicts explode.", duration: 4 },
                { text: "But for local cleanup? It's powerful.", duration: 3 }
            ];

            setMode('rebase');
            setPose('scared');
            tl.call(() => setCaptionText(CAPTIONS[0].text));

            // Warning flash
            tl.call(() => playSound('buzzer', 0.2), null, 0);
            tl.to(containerRef.current, { backgroundColor: "#fee2e2", duration: 0.5, yoyo: true, repeat: 1 }, 0);

            tl.call(() => { setCaptionText(CAPTIONS[1].text); setPose('panic'); }, null, 3);

            // Conflict Animation - Violent!
            tl.call(() => playSound('thud', 0.7), null, 3.5);
            tl.call(() => playSound('buzzer', 0.5), null, 3.5);

            // Intense Shake
            tl.to(cameraRef.current, { x: 8, y: -8, rotation: 1, duration: 0.05, repeat: 20, yoyo: true }, 3);

            // Nodes turn red and "break"
            tl.to([c3Ref.current, c4Ref.current], {
                rotation: () => (Math.random() - 0.5) * 40,
                backgroundColor: "#ef4444",
                scale: 1.1,
                duration: 0.1
            }, 3);

            // Flash container
            tl.to(containerRef.current, { backgroundColor: "#fee2e2", duration: 0.1, yoyo: true, repeat: 5 }, 3);

            // Status Message (Conflict)
            tl.to(statusMsgRef.current, { opacity: 1, scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" }, 3.2);

            tl.call(() => {
                setCaptionText(CAPTIONS[2].text);
                setPose('thumbs_up');
            }, null, 7);

            tl.to(cameraRef.current, { x: 0, y: 0, duration: 0.5 }, 7);
            tl.to(containerRef.current, { backgroundColor: "", duration: 1 }, 7);
            tl.to([c3Ref.current, c4Ref.current], {
                rotation: 0,
                backgroundColor: "#22c55e",
                duration: 0.5
            }, 7);
        }

    }, [data.id]);

    // Theme Configuration
    const themeClass = mode === 'merge' ? "bg-blue-50" : "bg-purple-50";
    const title = mode === 'merge' ? "Merge" : "Rebase";
    const colorClass = mode === 'merge' ? "text-blue-600" : "text-purple-600";
    const statusClass = mode === 'merge' ? "bg-blue-200 text-blue-800" : "bg-purple-200 text-purple-800";
    const borderColor = mode === 'merge' ? "border-blue-300" : "border-purple-300";
    const Icon = mode === 'merge' ? GitMerge : RefreshCw;

    return (
        <div ref={containerRef} className={`w-full h-full flex flex-col relative ${themeClass} overflow-hidden transition-colors duration-500`}>

            {/* Top-Left Header */}
            <div className="absolute top-8 left-8 z-50 flex flex-col items-start drop-shadow-sm">
                <div className="flex items-center gap-3">
                    <Icon size={40} className={colorClass} />
                    <h1 className={`text-6xl font-black ${colorClass}`}>{title}</h1>
                </div>
                <div className="flex gap-2 mt-2">
                    <span className={`text-lg font-bold px-4 py-1 rounded-lg uppercase tracking-widest ${statusClass} border-2 ${borderColor}`}>
                        {mode === 'merge' ? 'Combine' : 'Replay'}
                    </span>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 relative flex flex-col">
                <div ref={cameraRef} className="flex-1 relative">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Nodes Container (Centered) */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            {/* C1 (Root) */}
                            <div ref={c1Ref} className="absolute" style={{ transform: 'translate(-200px, 0)' }}><CommitNode label="C1" /></div>

                            {/* C2 (Main Tip) */}
                            <div ref={c2Ref} className="absolute" style={{ transform: 'translate(-50px, 0)' }}><CommitNode label="C2" /></div>

                            {/* Feature Branch (Initially divergent) */}
                            <div ref={c3Ref} className="absolute" style={{ transform: 'translate(-50px, 100px)' }}><CommitNode label="C3" /></div>
                            <div ref={c4Ref} className="absolute" style={{ transform: 'translate(100px, 100px)' }}><CommitNode label="C4" /></div>

                            {/* Merge Commit (Ghost) */}
                            <div ref={c5Ref} className="absolute opacity-0 scale-0" style={{ transform: 'translate(100px, 0)' }}><CommitNode label="M" /></div>

                            {/* Labels */}
                            <div ref={mainRef} className="absolute" style={{ transform: 'translate(-50px, -70px)' }}><StickyNote text="main" /></div>
                            <div ref={featureRef} className="absolute" style={{ transform: 'translate(100px, 40px)' }}><StickyNote text="feat" /></div>
                        </div>

                        {/* Annotations Layer */}
                        {data.id === 'rebase_1' && (
                            <Annotation ref={annotationRef} text="Commits replayed on new base" className="absolute" style={{ transform: 'translate(100px, 160px)' }} />
                        )}
                    </div>
                </div>

                {/* Stick Figure (Fixed at Bottom Right) */}
                <div className="absolute bottom-20 right-32 transform origin-bottom pointer-events-none">
                    <StickFigure pose={pose} />
                </div>
            </div>

            {/* Bottom Info Area (Status + Command) */}
            <div className="absolute bottom-16 left-24 flex flex-col items-start gap-6 z-40">
                {data.id === 'rebase_1' && (
                    <CommandPreview ref={commandRef} command="git rebase main" />
                )}
                {data.id === 'rebase_2' && (
                    <StatusMessage ref={statusMsgRef} type="error" text="Merge Conflict!" />
                )}
            </div>

            {/* Caption (Bottom Center) - REMOVED */}

            {/* Audio */}
            <audio ref={audioRef} src={`/audio/${data.id}.mp3`} className="hidden" onEnded={onComplete} />
        </div>
    );
};

export default RebaseScene;
