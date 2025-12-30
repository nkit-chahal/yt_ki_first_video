import React from 'react';
import { motion } from 'framer-motion';
import { User, MessageSquare, FileText, MonitorPlay, ScanText, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

// Scene 3: The Pipeline - "Multimodal Textbook"
// Visual: Warm theme flowchart
const Scene3 = ({ animSpeed = 1 }) => {

    // Helper to scale time
    const t = (val) => val / animSpeed;

    const pipelineSteps = [
        {
            icon: User,
            label: "Teacher's Voice",
            subLabel: "LLM Extraction",
            color: "#C4A77D",
            delay: 0.5
        },
        {
            icon: ScanText,
            label: "Blackboard OCR",
            subLabel: "Formula Reading",
            color: "#8B7355",
            delay: 1.0
        },
        {
            icon: MonitorPlay,
            label: "Video Keyframes",
            subLabel: "Frame Extraction",
            color: "#D94A38",
            delay: 1.5
        },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #F5F0E8 0%, #EDE6DA 50%, #E8DFD0 100%)' }}>

            {/* Subtle texture */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `radial-gradient(circle at 50% 30%, rgba(200,180,150,0.4) 0%, transparent 50%)`
                }}
            />

            {/* Title */}
            <motion.div
                className="flex items-center gap-2 text-[#D94A38] mb-10 z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: t(0.5) }}
            >
                <Sparkles size={28} />
                <h2 className="text-2xl font-bold">The Secret Sauce</h2>
            </motion.div>

            {/* Pipeline Flowchart */}
            <div className="flex items-center gap-4 z-10 mb-8">
                {pipelineSteps.map((step, i) => (
                    <React.Fragment key={i}>
                        <motion.div
                            className="bg-white rounded-xl px-5 py-4 text-center shadow-md min-w-32"
                            style={{ border: `2px solid ${step.color}` }}
                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: t(step.delay), duration: t(0.5), type: "spring" }}
                        >
                            <step.icon size={32} style={{ color: step.color }} className="mx-auto mb-2" />
                            <div className="text-gray-800 font-medium text-sm">{step.label}</div>
                            <div className="text-gray-500 text-xs mt-1">{step.subLabel}</div>
                        </motion.div>

                        {i < pipelineSteps.length - 1 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: t(step.delay + 0.3), duration: t(0.3) }}
                            >
                                <ArrowRight size={24} className="text-gray-400" />
                            </motion.div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Merge Arrow */}
            <motion.div
                className="flex flex-col items-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: t(2.2), duration: t(0.4) }}
            >
                <div className="w-px h-8 bg-[#C4A77D]" />
                <motion.div
                    className="w-3 h-3 border-r-2 border-b-2 border-[#C4A77D] rotate-45 -mt-1"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: t(1), repeat: Infinity }}
                />
            </motion.div>

            {/* Final Output: Textbook */}
            <motion.div
                className="mt-4 bg-white rounded-2xl px-8 py-5 flex items-center gap-4 z-10 shadow-lg"
                style={{ border: '2px solid #C4A77D' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: t(2.5), duration: t(0.5), type: "spring" }}
            >
                <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: t(2), repeat: Infinity }}
                >
                    <BookOpen size={40} className="text-[#C4A77D]" />
                </motion.div>
                <div>
                    <div className="text-gray-800 font-bold text-lg">Multimodal Textbook</div>
                    <div className="text-gray-500 text-sm">Frame-by-frame knowledge</div>
                </div>
            </motion.div>

            {/* Bottom Note */}
            <motion.p
                className="absolute bottom-10 text-gray-500 text-sm text-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: t(3), duration: t(0.5) }}
            >
                Video tutorials → Perfect, chronological textbooks
            </motion.p>

        </div>
    );
};

export default Scene3;
