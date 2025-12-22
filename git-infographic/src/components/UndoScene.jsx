import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Caption from './Caption';
import StickFigure from './visuals/StickFigure';
import CommitNode from './visuals/CommitNode';
import StickyNote from './visuals/StickyNote';
import { Tag, History, AlertTriangle, GitCommitHorizontal, ArrowRight, FileText, Layers, Trash2 } from 'lucide-react';
import Annotation from './visuals/Annotation';
import StatusMessage from './visuals/StatusMessage';
import CommandPreview from './visuals/CommandPreview';
import SpeechBubble from './visuals/SpeechBubble';

// --- Components ---

const HeadTag = React.forwardRef((props, ref) => (
    <div ref={ref} className="absolute z-50 flex flex-col items-center pointer-events-none drop-shadow-lg">
        <div className="bg-red-600 text-white font-black px-4 py-1 rounded shadow-xl border-2 border-[#5d4037] flex items-center gap-2">
            <Tag size={16} />
            <span>HEAD</span>
        </div>
        <div className="w-1 h-6 bg-[#5d4037]"></div>
        <div className="w-3 h-3 rounded-full border-4 border-[#5d4037] bg-white -mt-1"></div>
    </div>
));

const FileIcon = React.forwardRef(({ type, label }, ref) => {
    const config = {
        staged: { icon: Layers, color: "text-green-600", bg: "bg-green-100", border: "border-green-300" },
        modified: { icon: FileText, color: "text-orange-600", bg: "bg-orange-100", border: "border-orange-300" },
        deleted: { icon: Trash2, color: "text-red-600", bg: "bg-red-100", border: "border-red-300" }
    }[type] || {};

    const Icon = config.icon;

    return (
        <div ref={ref} className={`absolute flex flex-col items-center p-3 rounded-xl border-2 ${config.border} ${config.bg} shadow-lg scale-0 opacity-0`}>
            <Icon size={24} className={config.color} />
            <span className={`text-xs font-bold mt-1 ${config.color}`}>{label}</span>
        </div>
    );
});

const CommandBox = ({ type, children }) => {
    let config = {};
    if (type === 'checkout') {
        config = {
            bg: 'bg-blue-50', border: 'border-blue-300',
            title: 'Checkout', icon: History,
            iconColor: 'text-blue-600', titleColor: 'text-blue-800',
            status: 'Safe', statusBg: 'bg-blue-200 text-blue-700'
        };
    } else if (type.includes('reset')) {
        config = {
            bg: 'bg-red-50', border: 'border-red-300',
            title: 'Reset', icon: AlertTriangle,
            iconColor: 'text-red-600', titleColor: 'text-red-800',
            status: 'Danger', statusBg: 'bg-red-200 text-red-700'
        };
        // Add Sub-badge for mode
        if (type.includes('soft')) config.mode = 'Soft';
        if (type.includes('mixed')) config.mode = 'Mixed';
        if (type.includes('hard')) config.mode = 'Hard';
    } else if (type === 'revert') {
        config = {
            bg: 'bg-green-50', border: 'border-green-300',
            title: 'Revert', icon: GitCommitHorizontal,
            iconColor: 'text-green-600', titleColor: 'text-green-800',
            status: 'Safe', statusBg: 'bg-green-200 text-green-700'
        };
    } else {
        return <div className="relative w-[1000px] h-[550px] flex items-center justify-center">{children}</div>;
    }

    const Icon = config.icon;

    return (
        <div className={`relative w-[1000px] h-[550px] ${config.bg} rounded-3xl border-4 ${config.border} shadow-xl overflow-hidden`}>
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 h-24 flex items-center justify-center gap-4 border-b-2 border-dashed border-inherit bg-white/40 backdrop-blur-sm z-10">
                <Icon size={40} className={config.iconColor} />
                <h2 className={`text-5xl font-bold ${config.titleColor}`}>{config.title}</h2>
                <div className="flex gap-2 ml-4">
                    <span className={`text-lg font-bold px-5 py-2 rounded-full ${config.statusBg} uppercase tracking-wider`}>{config.status}</span>
                    {config.mode && <span className="text-lg font-bold px-5 py-2 rounded-full bg-white/50 text-gray-800 uppercase tracking-wider border-2 border-gray-200">--{config.mode}</span>}
                </div>
            </div>
            {/* Content Stage */}
            <div className="absolute top-24 left-0 right-0 bottom-0 flex items-center justify-center">
                {children}
            </div>
        </div>
    );
};

// --- Data ---
// Note: Durations roughly estimated based on text length
const CAPTIONS = {
    undo_intro: [
        { text: "Now we can talk about undoing things.", duration: 3 },
        { text: "Three commands seem to do the same job, but they are completely different.", duration: 4 },
        { text: "Confusion here costs work.", duration: 3 },
        { text: "Let’s break them down: Checkout, Reset, and Revert.", duration: 4 }
    ],
    undo_checkout: [
        { text: "Checkout moves HEAD. That’s its only job.", duration: 3 },
        { text: "It updates your working directory to match a snapshot...", duration: 3.5 },
        { text: "...but it does not change history.", duration: 3 },
        { text: "Checkout is safe and non-destructive.", duration: 3 }
    ],
    undo_reset_intro: [
        { text: "Reset is very different. Reset does not move HEAD.", duration: 4 },
        { text: "It moves a BRANCH pointer.", duration: 3 },
        { text: "This means reset rewrites history.", duration: 3 },
        { text: "That’s why reset is dangerous, especially on shared branches.", duration: 4 }
    ],
    undo_reset_soft: [
        { text: "Reset --soft moves the branch pointer only.", duration: 3.5 },
        { text: "Your working directory stays untouched.", duration: 3 },
        { text: "Your changes remain staged in the index, ready to be recommitted.", duration: 4.5 }
    ],
    undo_reset_mixed: [
        { text: "Reset --mixed moves the branch pointer and clears the staging area.", duration: 4.5 },
        { text: "Your changes are not lost.", duration: 2.5 },
        { text: "They stay in the working directory as modified files.", duration: 4 }
    ],
    undo_reset_hard: [
        { text: "Reset --hard moves the branch pointer and resets everything.", duration: 4 },
        { text: "The staging area is cleared. The working directory is overwritten.", duration: 4 },
        { text: "Changes are destroyed. Gone forever...", duration: 3 },
        { text: "Unless you know about reflog.", duration: 2 }
    ],
    undo_revert: [
        { text: "Revert takes a completely different approach.", duration: 3 },
        { text: "It creates a new commit that undoes the effects of an old one.", duration: 4 },
        { text: "History is preserved and moves forward. This is safe.", duration: 4 }
    ]
};

const UndoScene = ({ data, onComplete }) => {
    if (!data) return null;

    const containerRef = useRef(null);
    const cameraRef = useRef(null);
    const audioRef = useRef(null);
    const stickFigureRef = useRef(null);

    // Graph Refs
    const c1Ref = useRef(null);
    const c2Ref = useRef(null);
    const c3Ref = useRef(null);
    const c4Ref = useRef(null); // For revert
    const lineC4Ref = useRef(null); // For revert line

    // Pointer Refs
    const stickyRef = useRef(null); // The Branch (main)
    const headRef = useRef(null);   // The HEAD

    // File State Icons
    const iconStagedRef = useRef(null);
    const iconModifiedRef = useRef(null);
    const iconDeletedRef = useRef(null);

    // Cards for Intro
    const cardCheckoutRef = useRef(null);
    const cardResetRef = useRef(null);
    const cardRevertRef = useRef(null);

    // Annotation Refs (Phase 3)
    const annotationRef = useRef(null);
    const annotationWorkingDirRef = useRef(null); // Dedicated ref for the second annotation
    const speechBubbleRef = useRef(null);
    const headLabelRef = useRef(null);
    const yellowNoteRef = useRef(null);
    const bottomTextRef = useRef(null);
    // Refs for Reset Hard (Phase 4)
    const resetSpeechRef = useRef(null);
    const resetDestructiveNoteRef = useRef(null);
    const resetBottomTextRef = useRef(null);

    const statusMsgRef = useRef(null);
    const commandRef = useRef(null);

    const [captionText, setCaptionText] = useState("");
    const [pose, setPose] = useState('idle');

    // Layout Constants
    const SPACING = 320;

    // Check Reset Scene Type
    const isResetScene = data?.id?.includes('reset');

    useGSAP(() => {
        if (!data) return; // Safety check

        // Reset Audio
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.log("Audio play prevented:", e));
        }

        const tl = gsap.timeline();
        const currentCaptions = CAPTIONS[data.id] || [];
        const isResetScene = data.id.includes('reset');

        // Reset States
        setCaptionText("");
        setPose('idle');

        // Setup base state
        if (c1Ref.current && c2Ref.current && c3Ref.current) {
            // NUCLEAR OPTION: Clear all GSAP inline styles to prevent leakage
            gsap.set([c1Ref.current, c2Ref.current, c3Ref.current, stickyRef.current, headRef.current, c4Ref.current, lineC4Ref.current, iconStagedRef.current, iconModifiedRef.current, iconDeletedRef.current, annotationRef.current, annotationWorkingDirRef.current, speechBubbleRef.current, headLabelRef.current, yellowNoteRef.current, bottomTextRef.current, resetSpeechRef.current, resetDestructiveNoteRef.current, resetBottomTextRef.current, statusMsgRef.current, commandRef.current], { clearProps: "all" });

            // Set node base positions using GSAP (avoid inline styles)
            gsap.set(c1Ref.current, { x: -SPACING, y: 0, opacity: 1, scale: 1 });
            gsap.set(c2Ref.current, { x: 0, y: 0, opacity: 1, scale: 1 });
            gsap.set(c3Ref.current, { x: SPACING, y: 0, opacity: 1, scale: 1 });
            if (c4Ref.current) gsap.set(c4Ref.current, { x: SPACING * 2, y: 0, opacity: 0, scale: 0 });

            // pointers
            gsap.set(stickyRef.current, { x: SPACING, y: -90 });
            gsap.set(headRef.current, { x: SPACING, y: -160 });

            // icons: reset their transforms so GSAP animates them predictably
            gsap.set([iconStagedRef.current, iconModifiedRef.current, iconDeletedRef.current], { x: SPACING, y: 0, opacity: 0, scale: 0 });

            // Base visibility extensions for new elements
            if (lineC4Ref.current) gsap.set(lineC4Ref.current, { opacity: 0 });
            if (annotationRef.current) gsap.set(annotationRef.current, { opacity: 0, y: 20 });
            if (annotationWorkingDirRef.current) gsap.set(annotationWorkingDirRef.current, { opacity: 0, y: 20 });
            if (statusMsgRef.current) gsap.set(statusMsgRef.current, { opacity: 0, scale: 0.8 });
            if (commandRef.current) gsap.set(commandRef.current, { opacity: 0, y: 20 });

            // Reset new reference elements
            if (speechBubbleRef.current) gsap.set(speechBubbleRef.current, { opacity: 0, scale: 0.5 });
            if (headLabelRef.current) gsap.set(headLabelRef.current, { opacity: 0, y: 10 });
            if (yellowNoteRef.current) gsap.set(yellowNoteRef.current, { opacity: 0, x: 20 });
            if (bottomTextRef.current) gsap.set(bottomTextRef.current, { opacity: 0, y: 20 });

            // Reset Reset Hard elements
            if (resetSpeechRef.current) gsap.set(resetSpeechRef.current, { opacity: 0, scale: 0.5 });
            if (resetDestructiveNoteRef.current) gsap.set(resetDestructiveNoteRef.current, { opacity: 0, x: 20 });
            if (resetBottomTextRef.current) gsap.set(resetBottomTextRef.current, { opacity: 0, y: 20 });


            // Check specific scene setups
            if (data.id === 'undo_checkout' || isResetScene || data.id === 'undo_revert') {
                gsap.set(stickyRef.current, { x: SPACING, y: -90 }); // Main at C3
                gsap.set(headRef.current, { x: SPACING, y: -160 });  // Head at C3
            }
        }
        gsap.set(cameraRef.current, { x: 0, scale: 1, transformOrigin: "50% 50%" });


        // --- SCENE: INTRO ---
        if (data.id === 'undo_intro') {
            if (cardCheckoutRef.current && cardResetRef.current && cardRevertRef.current) {
                tl.set([cardCheckoutRef.current, cardResetRef.current, cardRevertRef.current], {
                    scale: 0, opacity: 0, y: 100
                });
            }

            // "Now we can talk about undoing things"
            tl.call(() => setCaptionText(currentCaptions[0].text));
            // "Three commands..."
            tl.call(() => { setCaptionText(currentCaptions[1].text); setPose('confused'); }, null, 3);
            // "Confusion costs work"
            tl.call(() => setCaptionText(currentCaptions[2].text), null, 7);
            // "Let's break them down"
            tl.call(() => { setCaptionText(currentCaptions[3].text); setPose('presenting'); }, null, 10);

            tl.to(cardCheckoutRef.current, { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }, 10.2);
            tl.to(cardResetRef.current, { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }, 10.6);
            tl.to(cardRevertRef.current, { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }, 11.0);
        }

        // --- SCENE: CHECKOUT ---
        else if (data.id === 'undo_checkout') {
            // Reset annotation elements
            if (annotationRef.current) gsap.set(annotationRef.current, { opacity: 0, y: 20 });
            if (annotationWorkingDirRef.current) gsap.set(annotationWorkingDirRef.current, { opacity: 0, y: 20 });
            if (statusMsgRef.current) gsap.set(statusMsgRef.current, { opacity: 0, scale: 0.8 });
            if (commandRef.current) gsap.set(commandRef.current, { opacity: 0, y: 20 });

            // Reset new reference elements
            if (speechBubbleRef.current) gsap.set(speechBubbleRef.current, { opacity: 0, scale: 0.5 });
            if (headLabelRef.current) gsap.set(headLabelRef.current, { opacity: 0, y: 10 });
            if (yellowNoteRef.current) gsap.set(yellowNoteRef.current, { opacity: 0, x: 20 });
            if (bottomTextRef.current) gsap.set(bottomTextRef.current, { opacity: 0, y: 20 });
            // Reset Reset Hard elements
            if (resetSpeechRef.current) gsap.set(resetSpeechRef.current, { opacity: 0, scale: 0.5 });
            if (resetDestructiveNoteRef.current) gsap.set(resetDestructiveNoteRef.current, { opacity: 0, x: 20 });
            if (resetBottomTextRef.current) gsap.set(resetBottomTextRef.current, { opacity: 0, y: 20 });


            // 1. "Checkout moves HEAD"
            tl.call(() => { setCaptionText(currentCaptions[0].text); setPose('pointing_up'); });

            // Animation: HEAD detaches from Branch and moves to C2
            // Animation: HEAD detaches from Branch and moves to C2
            // 1. Pop UP and Rotate (Detach)
            tl.to(headRef.current, { y: -250, rotation: -15, scale: 1.1, duration: 0.4, ease: "back.out(2)" }, 1);
            // 2. Fly ACROSS (Travel)
            tl.to(headRef.current, { x: 0, rotation: 15, duration: 0.8, ease: "power2.inOut" }, 1.4);
            // 3. Slam DOWN (Attach)
            tl.to(headRef.current, { y: -95, rotation: 0, scale: 1, duration: 0.5, ease: "bounce.out" }, 2.2);

            // Show "Detached HEAD" label under C2
            if (headLabelRef.current) {
                tl.call(() => playSound('pop', 0.2), null, 3);
                tl.to(headLabelRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "back.out" }, 3);
            }

            // 2. "Updates working directory" -> Show Bottom status "History NOT changed"
            tl.call(() => { setCaptionText(currentCaptions[1].text); setPose('explaining'); }, null, 3.5);
            tl.call(() => playSound('ding', 0.5), null, 3.5);
            tl.to(statusMsgRef.current, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, 3.5);

            // Show Command Preview
            tl.to(commandRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "back.out" }, 4);

            // Show "Branch pointers do NOT move" note + Arrow
            if (yellowNoteRef.current) {
                tl.call(() => playSound('pop', 0.4), null, 4.5);
                tl.to(yellowNoteRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" }, 4.5);
            }

            // 3. "Check out old commit" -> Speech Bubble
            tl.call(() => { setCaptionText(currentCaptions[2].text); setPose('presenting'); }, null, 6);
            if (speechBubbleRef.current) {
                tl.call(() => playSound('pop', 0.3), null, 6.2);
                tl.to(speechBubbleRef.current, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" }, 6.2);
            }

            // 4. "Safe and non-destructive" -> Bottom Text
            tl.call(() => { setCaptionText(currentCaptions[3].text); setPose('thumbs_up'); }, null, 8);
            if (bottomTextRef.current) {
                tl.to(bottomTextRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 8.5);
            }
        }


        // --- SCENE: RESET INTRO ---
        else if (data.id === 'undo_reset_intro') {
            // 1. "Reset does not move HEAD" (Wait)
            tl.call(() => { setCaptionText(currentCaptions[0].text); setPose('warning'); });

            // 2. "It moves a BRANCH pointer"
            tl.call(() => { setCaptionText(currentCaptions[1].text); setPose('pointing_side'); }, null, 4);
            // Pulse WARNING
            tl.call(() => playSound('buzzer', 0.1), null, 4);
            tl.to(stickyRef.current, { scale: 1.2, boxShadow: "0px 0px 20px rgba(239, 68, 68, 0.8)", duration: 0.3, yoyo: true, repeat: 3 }, 4);

            // Move Main AND Head back to C2 (x: 0)
            tl.call(() => playSound('whoosh', 0.4), null, 5.5);
            tl.to([stickyRef.current, headRef.current], { x: 0, duration: 1.5, ease: "power3.inOut" }, 5.5);

            // 3. "Rewrites history"
            tl.call(() => { setCaptionText(currentCaptions[2].text); setPose('scared'); }, null, 7);
            // Ghost out C3
            tl.to(c3Ref.current, { opacity: 0.5, filter: "grayscale(100%) blur(1px)" }, 7.5);

            // 4. "Dangerous"
            tl.call(() => setCaptionText(currentCaptions[3].text), null, 10);
        }

        // ... (Skipping soft/mixed updates for brevity as they follow same pattern, doing Reset Hard critical part)

        // --- SCENE: RESET HARD ---
        else if (data.id === 'undo_reset_hard') {
            // ... (Skipping setup lines to match strict context finding) ...

            // 1. "Moves branch and resets everything"
            tl.call(() => { setCaptionText(currentCaptions[0].text); setPose('scared'); });

            // Move pointers left
            tl.call(() => playSound('whoosh', 0.4), null, 0.5);
            tl.to([stickyRef.current, headRef.current], { x: 0, duration: 1.5, ease: "power3.inOut" }, 0.5);

            // Annotation: "Branch pointer moved backwards"
            tl.to(annotationRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "back.out" }, 1.5);

            // Show Destructive Note
            if (resetDestructiveNoteRef.current) {
                tl.call(() => playSound('pop', 0.3), null, 2);
                tl.to(resetDestructiveNoteRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" }, 2);
            }

            // 2. "Staging cleared, Working overwritten"
            tl.call(() => { setCaptionText(currentCaptions[1].text); setPose('panic'); }, null, 4);

            // 3. "Destroyed" - EXPLOSION
            tl.call(() => { setCaptionText(currentCaptions[2].text); setPose('scared'); }, null, 8);

            // Sound!
            tl.call(() => playSound('thud', 0.8), null, 8);
            tl.call(() => playSound('buzzer', 0.4), null, 8);

            // Explosion Effect on C3
            tl.to(c3Ref.current, {
                scale: 2,
                backgroundColor: "#ef4444",
                rotation: () => Math.random() * 360, // Fix syntax error from previous attempt? No, this is valid GSAP function based value
                duration: 0.1,
                ease: "power4.in"
            }, 8);
            tl.to(c3Ref.current, {
                opacity: 0,
                scale: 3,
                filter: "blur(20px)",
            }, 8.1); // Poof
        }

        // --- SCENE: RESET SOFT ---
        else if (data.id === 'undo_reset_soft') {
            // Reset annotation elements
            if (annotationRef.current) gsap.set(annotationRef.current, { opacity: 0, y: 20 });
            if (statusMsgRef.current) gsap.set(statusMsgRef.current, { opacity: 0, scale: 0.8 });
            if (commandRef.current) gsap.set(commandRef.current, { opacity: 0, y: 20 });

            // Start State: Clean slate at C3
            // 1. "Moves branch only"
            tl.call(() => { setCaptionText(currentCaptions[0].text); setPose('explaining'); });

            // Move pointer
            tl.to([stickyRef.current, headRef.current], { x: 0, duration: 1.5, ease: "power3.inOut" }, 0.5);
            // Annotation
            tl.to(annotationRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "back.out" }, 1.5);

            // 2. "Working directory untouched"
            tl.call(() => setCaptionText(currentCaptions[1].text), null, 3.5);

            // 3. "Staged in index"
            tl.call(() => { setCaptionText(currentCaptions[2].text); setPose('presenting'); }, null, 6.5);
            // Show Staged Icon flying from C3 to Staging Area
            tl.set(iconStagedRef.current, { x: SPACING, y: 0, opacity: 1, scale: 0 });
            tl.to(iconStagedRef.current, { scale: 1.5, x: 0, y: 120, duration: 1.2, ease: "power2.inOut" }, 7);

            // Status + Command
            tl.to(statusMsgRef.current, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out" }, 7.5);
            tl.to(commandRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "back.out" }, 8);
        }

        // --- SCENE: RESET MIXED ---
        else if (data.id === 'undo_reset_mixed') {
            // Reset annotation elements
            if (annotationRef.current) gsap.set(annotationRef.current, { opacity: 0, y: 20 });
            if (statusMsgRef.current) gsap.set(statusMsgRef.current, { opacity: 0, scale: 0.8 });
            if (commandRef.current) gsap.set(commandRef.current, { opacity: 0, y: 20 });

            // 1. "Moves branch and clears staging"
            tl.call(() => { setCaptionText(currentCaptions[0].text); setPose('explaining'); });
            // Move pointer
            tl.to([stickyRef.current, headRef.current], { x: 0, duration: 1.5, ease: "power3.inOut" }, 0.5);
            // Annotation
            tl.to(annotationRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "back.out" }, 1.5);

            // 2. "Changes not lost, in working directory"
            tl.call(() => { setCaptionText(currentCaptions[1].text); setPose('presenting'); }, null, 4);
            // Show Modified Icon flying
            tl.set(iconModifiedRef.current, { x: SPACING, y: 0, opacity: 1, scale: 0 });
            tl.to(iconModifiedRef.current, { scale: 1.5, x: 0, y: 120, duration: 1.2, ease: "power2.inOut" }, 4.5);

            // Status + Command
            tl.to(statusMsgRef.current, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out" }, 5);
            tl.to(commandRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "back.out" }, 5.5);
        }


        // --- SCENE: RESET HARD ---
        else if (data.id === 'undo_reset_hard') {
            // Reset annotation elements
            if (annotationRef.current) gsap.set(annotationRef.current, { opacity: 0, y: 20 });
            if (statusMsgRef.current) gsap.set(statusMsgRef.current, { opacity: 0, scale: 0.8 });
            if (commandRef.current) gsap.set(commandRef.current, { opacity: 0, y: 20 });

            // Reset new reset elements
            if (resetSpeechRef.current) gsap.set(resetSpeechRef.current, { opacity: 0, scale: 0.5 });
            if (resetDestructiveNoteRef.current) gsap.set(resetDestructiveNoteRef.current, { opacity: 0, x: 20 });
            if (resetBottomTextRef.current) gsap.set(resetBottomTextRef.current, { opacity: 0, y: 20 });


            // 1. "Moves branch and resets everything"
            tl.call(() => { setCaptionText(currentCaptions[0].text); setPose('scared'); });

            // Move pointers left
            tl.to([stickyRef.current, headRef.current], { x: 0, duration: 1.5, ease: "power3.inOut" }, 0.5);

            // Annotation: "Branch pointer moved backwards"
            tl.to(annotationRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "back.out" }, 1.5);

            // Show Destructive Note
            if (resetDestructiveNoteRef.current) {
                tl.to(resetDestructiveNoteRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" }, 2);
            }

            // 2. "Staging cleared, Working overwritten"
            tl.call(() => { setCaptionText(currentCaptions[1].text); setPose('panic'); }, null, 4);

            // 3. "Destroyed" - EXPLOSION
            tl.call(() => { setCaptionText(currentCaptions[2].text); setPose('scared'); }, null, 8);

            // Explosion Effect on C3 (Shrapnel)
            // Pre-calculate random angles for shrapnel (simulated with box-shadow or multiple elements? 
            // We can't spawn elements easily inside GSAP without refs.
            // Let's use a "Clip Path" wipe or just a violent shake + color flash.
            // Current: tl.to(cameraRef.current, { x: 5, duration: 0.05, repeat: 10, yoyo: true }, 8); 

            // NEW: Particle Burst (Quick hack: create a few colored divs in JSX relative to C3 or use existing refs if unused?)
            // We don't have unused refs. Let's make the Node itself "explode"
            tl.to(c3Ref.current, {
                scale: 2,
                backgroundColor: "#ef4444",
                rotation: () => Math.random() * 360,
                duration: 0.1,
                ease: "power4.in"
            }, 8);
            tl.to(c3Ref.current, {
                opacity: 0,
                scale: 3,
                filter: "blur(20px)",
                duration: 0.2,
                ease: "expo.out"
            }, 8.1); // Poof

            // Violent Camera Shake
            tl.to(cameraRef.current, { x: 15, y: -15, rotation: 2, duration: 0.05, repeat: 10, yoyo: true }, 8);
            tl.to(cameraRef.current, { x: 0, y: 0, rotation: 0, duration: 0.2 }, 8.5);

            // Flash Screen White
            // We need a flash ref. Let's use cameraRef background color temporarily? No, tricky.
            // Let's just stick to the Node explosion being more violent.

            // Speech Bubble: "I just wiped out everything..."
            if (resetSpeechRef.current) {
                tl.to(resetSpeechRef.current, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" }, 8.2);
            }

            // Status Message: "Working Directory Changes Deleted"
            tl.to(statusMsgRef.current, { opacity: 1, scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" }, 8.2);

            // Show Trash Icon
            tl.set(iconDeletedRef.current, { x: SPACING, y: 0, scale: 0, opacity: 1, rotation: -15 });
            tl.to(iconDeletedRef.current, { scale: 1.5, y: -50, rotation: 15, duration: 0.6, ease: "back.out(1.7)" }, 8.3);

            // 4. "Unless reflog" - Show Command
            tl.call(() => { setCaptionText(currentCaptions[3].text); setPose('thinking'); }, null, 11);
            tl.to(commandRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "back.out" }, 11.5);

            // Bottom Text: "Reset --hard is DESTRUCTIVE"
            if (resetBottomTextRef.current) {
                tl.to(resetBottomTextRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 11.5);
            }
        }

        // --- SCENE: REVERT ---
        else if (data.id === 'undo_revert') {
            // Reset annotation elements
            if (annotationRef.current) gsap.set(annotationRef.current, { opacity: 0, y: 20 });
            if (statusMsgRef.current) gsap.set(statusMsgRef.current, { opacity: 0, scale: 0.8 });
            if (commandRef.current) gsap.set(commandRef.current, { opacity: 0, y: 20 });

            // Reset camera to show full graph
            gsap.set(cameraRef.current, { x: 0 });
            // Position pointers at C3 (SPACING)
            gsap.set(stickyRef.current, { x: SPACING, y: -90 });
            gsap.set(headRef.current, { x: SPACING, y: -160 });
            // Ensure all base nodes are visible
            gsap.set([c1Ref.current, c2Ref.current, c3Ref.current], { opacity: 1, scale: 1, filter: "none" });
            // Hide C4 initially
            tl.set([c4Ref.current, lineC4Ref.current], { opacity: 0 });
            // Hide status icons
            tl.set([iconStagedRef.current, iconModifiedRef.current, iconDeletedRef.current], { opacity: 0, scale: 0 });

            // 1. "Revert moves nothing"
            tl.call(() => { setCaptionText(currentCaptions[0].text); setPose('pointing_up'); });

            // 2. "Creates new commit"
            tl.call(() => { setCaptionText(currentCaptions[1].text); setPose('magic'); }, null, 4);

            // Reveal C4 and Line with "POP"
            tl.to(lineC4Ref.current, { opacity: 1, duration: 0.3 }, 4.5);

            // Pop in C4 (Scale overshoot)
            tl.fromTo(c4Ref.current,
                { opacity: 0, scale: 0, rotation: 180 },
                { opacity: 1, scale: 1.2, rotation: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" },
                4.8
            );
            tl.to(c4Ref.current, { scale: 1, duration: 0.2 }, 5.4);

            // Move Pointers to C4 (SPACING * 2)
            tl.to([stickyRef.current, headRef.current], { x: SPACING * 2, duration: 1, ease: "power2.inOut" }, 5.5);

            // Annotation
            tl.to(annotationRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "back.out" }, 6);

            // 3. "History preserved"
            tl.call(() => { setCaptionText(currentCaptions[2].text); setPose('thumbs_up'); }, null, 7);

            // Status + Command
            tl.to(statusMsgRef.current, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, 7.5);
            tl.to(commandRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "back.out" }, 8);

            // 4. "Safe"
            tl.call(() => { setCaptionText(currentCaptions[3]?.text || ""); setPose('yay'); }, null, 10);
        }

    }, [data.id]);

    // --- Render Logic ---
    let themeClass = "bg-gray-50";
    let title = "";
    let status = "";
    let statusClass = "";
    let mode = "";
    let Icon = History;
    let colorClass = "text-gray-600";
    let borderColor = "border-gray-200";

    if (data.id === 'undo_checkout') {
        themeClass = "bg-blue-50";
        title = "Checkout";
        status = "Safe";
        statusClass = "bg-blue-200 text-blue-800";
        Icon = History;
        colorClass = "text-blue-600";
        borderColor = "border-blue-300";
    } else if (data.id.includes('reset')) {
        themeClass = "bg-red-50";
        title = "Reset";
        status = "Danger";
        statusClass = "bg-red-200 text-red-800";
        Icon = AlertTriangle;
        colorClass = "text-red-600";
        borderColor = "border-red-300";
        if (data.id.includes('soft')) mode = "Soft";
        if (data.id.includes('mixed')) mode = "Mixed";
        if (data.id.includes('hard')) mode = "Hard";
    } else if (data.id === 'undo_revert') {
        themeClass = "bg-green-50";
        title = "Revert";
        status = "Safe";
        statusClass = "bg-green-200 text-green-800";
        Icon = GitCommitHorizontal;
        colorClass = "text-green-600";
        borderColor = "border-green-300";
    }

    // --- Render Logic ---

    // SVG Lines Component - Uses CSS centering for full-screen compatibility
    const GraphLines = () => (
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 0 }}>
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#888" />
                </marker>
            </defs>
            {/* Center the group using 50% of SVG dimensions */}
            <g style={{ transform: 'translate(50%, 50%)' }}>
                {/* C2 -> C1 */}
                <line x1="0" y1="0" x2={-SPACING} y2="0" stroke="#888" strokeWidth="4" markerEnd="url(#arrowhead)" />
                {/* C3 -> C2 */}
                <line x1={SPACING} y1="0" x2="0" y2="0" stroke="#888" strokeWidth="4" markerEnd="url(#arrowhead)" />
                {/* C4 -> C3 (For Revert) */}
                <line ref={lineC4Ref} x1={SPACING * 2} y1="0" x2={SPACING} y2="0" stroke="#888" strokeWidth="4" markerEnd="url(#arrowhead)" className="opacity-0" />
            </g>
        </svg>
    );

    const GraphContent = (
        <div className="relative w-full h-full flex items-center justify-center">
            <GraphLines />
            {/* Nodes Container - centered at (0,0) */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                {/* C1 */}
                <div ref={c1Ref} className="absolute">
                    <CommitNode label="C1" />
                </div>
                {/* C2 */}
                <div ref={c2Ref} className="absolute">
                    <CommitNode label="C2" />
                </div>
                {/* C3 */}
                <div ref={c3Ref} className="absolute">
                    <CommitNode label="C3" />
                </div>
                {/* C4 (Revert only) */}
                <div ref={c4Ref} className="absolute opacity-0">
                    <CommitNode label="C4'" sub="Revert" />
                </div>
            </div>

            {/* Status Icons Container (Centered below C3) */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="absolute" style={{ transform: `translate(${SPACING}px, 80px)` }}>
                    <FileIcon ref={iconStagedRef} type="staged" label="Files Staged" />
                    <FileIcon ref={iconModifiedRef} type="modified" label="Files Modified" />
                    <FileIcon ref={iconDeletedRef} type="deleted" label="Working Directory Changes Deleted" />
                </div>
            </div>

            {/* Pointers Layer */}
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                {/* Sticky Note (Main) */}
                <div ref={stickyRef} className="absolute">
                    <StickyNote text="main" rotation={2} />
                </div>
                {/* HEAD Tag */}
                <HeadTag ref={headRef} />
            </div>

            {/* Annotations Layer (Phase 3 & 4) */}
            {data.id === 'undo_checkout' && (
                <>
                    {/* 1. Speech Bubble for Stick Figure */}
                    <div className="absolute bottom-48 right-32 z-50">
                        <SpeechBubble
                            ref={speechBubbleRef}
                            text="I just checked out an old commit"
                            direction="right"
                            className="opacity-0 transform scale-50 origin-bottom-right"
                        />
                    </div>

                    {/* 2. "Detached HEAD" Label (Under C2) */}
                    <div className="absolute opacity-0" ref={headLabelRef} style={{ transform: 'translate(0px, 60px)' }}>
                        <div className="bg-slate-200 px-3 py-1 rounded text-slate-600 font-bold text-sm border border-slate-300">
                            Detached HEAD
                        </div>
                    </div>

                    {/* 3. "Branch pointers do NOT move narrative" - Z-Index Boost */}
                    <div className="absolute opacity-0 z-50" ref={yellowNoteRef} style={{ transform: `translate(${SPACING + 20}px, 60px)` }}>
                        <div className="relative">
                            {/* Curved Arrow pointing to Main */}
                            {/* SVG handled separately or inline if simple? Let's try simple absolute div for now or component if complex. 
                                Actually, the user wants a curved arrow. Let's assume we can position it relative to this container. 
                            */}
                            <div className="bg-yellow-200 text-yellow-900 p-3 rounded shadow-md border border-yellow-300 max-w-[150px] text-center font-bold text-sm -rotate-2">
                                Branch pointers do NOT move
                            </div>
                        </div>
                    </div>

                    {/* 4. Bottom Caption */}
                    <div className="absolute bottom-8 left-8 text-xl font-bold text-slate-700 opacity-0" ref={bottomTextRef}>
                        Checkout is safe and non-<span className="text-slate-900 font-black">destructive</span>.
                    </div>
                </>
            )}
            {/* 1. Speech Bubble for Reset */}
            {data.id === 'undo_reset_hard' && (
                <>
                    <div className="absolute bottom-48 right-32 z-50">
                        <SpeechBubble
                            ref={resetSpeechRef}
                            text="I just wiped out everything..."
                            direction="right"
                            className="opacity-0 transform scale-50 origin-bottom-right border-red-200 shadow-red-100"
                        />
                    </div>

                    {/* 2. Destructive Warning Note */}
                    <div className="absolute opacity-0 z-50" ref={resetDestructiveNoteRef} style={{ transform: `translate(${SPACING + 20}px, 60px)` }}>
                        <div className="relative">
                            <div className="bg-red-100 text-red-900 p-3 rounded shadow-md border border-red-300 max-w-[150px] text-center font-bold text-sm -rotate-2">
                                ⚠️ DESTRUCTIVE Action
                            </div>
                        </div>
                    </div>

                    {/* 3. Bottom Caption */}
                    <div className="absolute bottom-8 left-8 text-xl font-bold text-slate-700 opacity-0" ref={resetBottomTextRef}>
                        Reset --hard is <span className="text-red-600 font-black">DESTRUCTIVE</span>.
                    </div>
                </>
            )}

            {/* Standard Annotations (Reset Scenes) */}
            {(isResetScene) && (
                <Annotation
                    ref={annotationRef}
                    text="Branch pointer moved backwards"
                    className="absolute"
                    style={{ transform: `translate(0px, -140px)` }} // Above C2
                />
            )}

            {/* Bottom Info Area (Status + Command) - Aligned Left/Center to avoid Stick Figure */}
            <div className="absolute bottom-16 left-24 flex flex-col items-start gap-6 z-40">
                {data.id === 'undo_checkout' && (
                    <>
                        <StatusMessage ref={statusMsgRef} type="success" text="History NOT changed" />
                        <CommandPreview ref={commandRef} command="git checkout HEAD~1" />
                    </>
                )}
                {data.id === 'undo_reset_soft' && (
                    <>
                        <StatusMessage ref={statusMsgRef} type="info" text="Changes remain Staged" />
                        <CommandPreview ref={commandRef} command="git reset --soft HEAD~1" />
                    </>
                )}
                {data.id === 'undo_reset_mixed' && (
                    <>
                        <StatusMessage ref={statusMsgRef} type="warning" text="Changes moved to Working Directory" />
                        <CommandPreview ref={commandRef} command="git reset --mixed HEAD~1" />
                    </>
                )}
                {data.id === 'undo_reset_hard' && (
                    <>
                        <StatusMessage ref={statusMsgRef} type="error" text="Working Directory Changes Deleted" />
                        <CommandPreview ref={commandRef} command="git reset --hard HEAD~1" />
                    </>
                )}
                {data.id === 'undo_revert' && (
                    <>
                        <StatusMessage ref={statusMsgRef} type="success" text="History Preserved & Advanced" />
                        <CommandPreview ref={commandRef} command="git revert HEAD" />
                    </>
                )}
            </div>

            {/* Stick Figure (Fixed at Bottom Right) */}
            <div className="absolute bottom-20 right-32 transform origin-bottom pointer-events-none">
                <StickFigure pose={pose} />
            </div>
        </div>
    );

    // --- INTRO SCENE: Special layout with 3 cards ---
    if (data.id === 'undo_intro') {
        return (
            <div ref={containerRef} className="w-full h-full flex flex-col relative bg-gray-50 overflow-hidden">
                {/* Centered Cards */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="flex gap-8 items-end">
                        <div ref={cardCheckoutRef} className="w-56 h-72 bg-blue-100 rounded-2xl border-4 border-blue-300 flex flex-col items-center justify-center shadow-lg p-6">
                            <History size={72} className="text-blue-600 mb-6" />
                            <h3 className="text-3xl font-bold text-blue-800">Checkout</h3>
                            <span className="mt-4 text-base font-bold text-blue-600 bg-blue-200 px-3 py-1 rounded-lg uppercase">Safe</span>
                        </div>
                        <div ref={cardResetRef} className="w-56 h-80 bg-red-100 rounded-2xl border-4 border-red-300 flex flex-col items-center justify-center shadow-xl p-6">
                            <AlertTriangle size={80} className="text-red-600 mb-6" />
                            <h3 className="text-4xl font-bold text-red-800">Reset</h3>
                            <span className="mt-4 text-base font-bold text-red-600 bg-red-200 px-3 py-1 rounded-lg uppercase">Danger</span>
                        </div>
                        <div ref={cardRevertRef} className="w-56 h-72 bg-green-100 rounded-2xl border-4 border-green-300 flex flex-col items-center justify-center shadow-lg p-6">
                            <GitCommitHorizontal size={72} className="text-green-600 mb-6" />
                            <h3 className="text-3xl font-bold text-green-800">Revert</h3>
                            <span className="mt-4 text-base font-bold text-green-600 bg-green-200 px-3 py-1 rounded-lg uppercase">Safe</span>
                        </div>
                    </div>
                </div>

                {/* Stick Figure */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 pointer-events-none">
                    <StickFigure pose={pose} />
                </div>

                {/* Caption */}
                <Caption text={captionText} />

                {/* Audio */}
                <audio ref={audioRef} src={`/audio/${data.id}.mp3`} className="hidden" onEnded={onComplete} />
            </div>
        );
    }

    return (
        <div ref={containerRef} className={`w-full h-full flex flex-col relative ${themeClass} overflow-hidden transition-colors duration-500`}>

            {/* Top-Left Header */}
            <div className="absolute top-8 left-8 z-50 flex flex-col items-start drop-shadow-sm">
                <div className="flex items-center gap-3">
                    <Icon size={40} className={colorClass} />
                    <h1 className={`text-6xl font-black ${colorClass}`}>{title}</h1>
                </div>
                <div className="flex gap-2 mt-2">
                    <span className={`text-lg font-bold px-4 py-1 rounded-lg uppercase tracking-widest ${statusClass} border-2 ${borderColor}`}>{status}</span>
                    {mode && <span className="text-lg font-bold px-4 py-1 rounded-lg uppercase tracking-widest bg-white/60 text-gray-700 border-2 border-gray-300">--{mode}</span>}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 relative flex flex-col">
                {/* 3D Camera/Content Wrapper */}
                <div ref={cameraRef} className="flex-1 relative">
                    {GraphContent}
                </div>


            </div>

            {/* Caption (Bottom Center) */}


            {/* Audio */}
            <audio ref={audioRef} src={`/audio/${data.id}.mp3`} className="hidden" onEnded={onComplete} />
        </div>
    );
};

export default UndoScene;
