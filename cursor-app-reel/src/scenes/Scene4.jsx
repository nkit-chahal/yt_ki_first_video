import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Files, Bot, Unlock, Check } from 'lucide-react';

// Scene 4: Why It's #1 - Features Grid
const Scene4 = ({ playbackSpeed = 1 }) => {
    const t = (val) => val / playbackSpeed;

    const features = [
        { icon: Brain, title: "Full Context", desc: "Knows entire project", color: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10" },
        { icon: Files, title: "Multi-File Edits", desc: "Changes across files", color: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10" },
        { icon: Bot, title: "Built-in Agents", desc: "Runs tasks auto", color: "text-green-400", border: "border-green-500/30", bg: "bg-green-500/10" },
        { icon: Unlock, title: "Free Tier", desc: "Unlimited AI *", color: "text-yellow-400", border: "border-yellow-500/30", bg: "bg-yellow-500/10" },
    ];

    return (
        <div className="w-full h-full bg-[#090909] text-white flex flex-col items-center justify-center relative overflow-hidden p-8">

            <motion.h2
                className="text-3xl font-bold mb-8 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: t(0.5) }}
            >
                Why Pros Choosing <span className="text-blue-500">Cursor</span>
            </motion.h2>

            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                {features.map((feat, i) => (
                    <motion.div
                        key={i}
                        className={`p-4 rounded-xl border ${feat.border} ${feat.bg} flex flex-col items-center text-center`}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: t(0.3 + i * 0.2), duration: t(0.4) }}
                    >
                        <feat.icon size={32} className={`mb-2 ${feat.color}`} />
                        <h3 className="font-bold text-lg">{feat.title}</h3>
                        <p className="text-xs text-gray-400 leading-tight">{feat.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Tagline */}
            <motion.div
                className="absolute bottom-10 flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: t(2.5) }}
            >
                <Check size={16} className="text-green-400" />
                <span className="text-sm text-gray-300">Smarter than Copilot</span>
            </motion.div>

        </div>
    );
};

export default Scene4;
