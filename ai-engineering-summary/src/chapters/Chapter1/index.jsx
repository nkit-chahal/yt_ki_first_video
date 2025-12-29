import React from 'react';
import { motion } from 'framer-motion';
import AICharacter from '../../components/AICharacter';

// Scene 1: Book Introduction
export const Scene1 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <motion.div
            className="flex items-center gap-16"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.8 }
                }
            }}
        >
            <motion.div variants={{ hidden: { scale: 0, rotate: -20 }, visible: { scale: 1, rotate: 0, transition: { type: "spring", bounce: 0.5 } } }}>
                <AICharacter mood="happy" action="wave" label="Your AI Guide" highlight={true} />
            </motion.div>

            <motion.div
                className="flex flex-col items-center"
                variants={{ hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } } }}
            >
                <div className="w-52 h-72 bg-gradient-to-br from-white to-zinc-100 border-4 border-zinc-800 rounded-xl shadow-2xl flex flex-col items-center justify-center p-6 relative">
                    <motion.div
                        className="text-9xl mb-4"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                    >📚</motion.div>
                    <div className="text-4xl font-black text-center text-zinc-800">AI Engineering</div>
                    <div className="text-2xl font-hand text-zinc-500 mt-2">by Chip Huyen</div>
                    <motion.div
                        className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-2xl shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: [0, -10, 10, 0] }}
                        transition={{
                            scale: { type: "spring", bounce: 0.5, duration: 0.6, delay: 2.0 },
                            rotate: { duration: 0.6, ease: "easeOut", delay: 2.0 }
                        }}
                    >
                        800 Pages!
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    </div>
);

// Scene 2: Salary Statistics
export const Scene2 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        <AICharacter mood="surprised" label="Whoa!" highlight={true} />
        <motion.div
            className="flex flex-col items-center gap-8"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
            }}
        >
            <motion.div
                className="text-9xl font-black bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent"
                variants={{ hidden: { scale: 0.5, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
                transition={{ delay: 2.0, type: "spring" }}
                animate={{ scale: [1, 1.05, 1] }}
            >
                $300K+
            </motion.div>
            <motion.div
                className="text-5xl font-hand text-zinc-600"
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                transition={{ delay: 2.5 }}
            >
                Average AI Engineer Salary
            </motion.div>
            <motion.div
                className="flex gap-3"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                transition={{ delay: 3.0, staggerChildren: 0.1 }}
            >
                {[1, 2, 3, 4, 5].map(i => (
                    <motion.span
                        key={i}
                        className="text-7xl"
                        variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring" } } }}
                    >
                        💰
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    </div>
);

// Scene 3: Overview Map
export const Scene3 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <motion.h2
            className="text-8xl font-black text-zinc-800"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            What You'll Learn
        </motion.h2>
        <motion.div
            className="grid grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: { transition: { delayChildren: 1.0, staggerChildren: 0.2 } }
            }}
        >
            {[
                { icon: "🧠", label: "Foundation Models", color: "from-purple-100 to-indigo-100 border-purple-400" },
                { icon: "💬", label: "Prompt Engineering", color: "from-blue-100 to-cyan-100 border-blue-400" },
                { icon: "🔍", label: "RAG Systems", color: "from-green-100 to-emerald-100 border-green-400" },
                { icon: "🎯", label: "Fine-Tuning", color: "from-orange-100 to-yellow-100 border-orange-400" },
                { icon: "🤖", label: "AI Agents", color: "from-pink-100 to-rose-100 border-pink-400" },
                { icon: "⚡", label: "Optimization", color: "from-yellow-100 to-amber-100 border-yellow-400" }
            ].map((topic, i) => (
                <motion.div
                    key={topic.label}
                    variants={{
                        hidden: { scale: 0, opacity: 0 },
                        visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 15 } }
                    }}
                    className={`w-44 h-36 bg-gradient-to-br ${topic.color} border-4 rounded-2xl flex flex-col items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 2 : -2 }}
                >
                    <div className="text-8xl">{topic.icon}</div>
                    <div className="text-2xl font-hand font-bold mt-3 text-center">{topic.label}</div>
                </motion.div>
            ))}
        </motion.div>
    </div>
);

// Scene 4: Topic Checklist
export const Scene4 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        <AICharacter mood="happy" action="pointing" label="Let's Go!" />
        <motion.div
            className="flex flex-col gap-3"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.8 } }
            }}
        >
            {[
                "Foundation Models",
                "Prompt Engineering",
                "RAG",
                "Fine-Tuning",
                "Agents",
                "Building Systems",
                "Improving Inference"
            ].map((item, i) => (
                <motion.div
                    key={item}
                    variants={{
                        hidden: { x: 100, opacity: 0 },
                        visible: { x: 0, opacity: 1, transition: { type: "spring" } }
                    }}
                    className="flex items-center gap-5 bg-gradient-to-r from-white to-zinc-50 border-2 border-zinc-200 px-8 py-3 rounded-xl shadow-lg"
                >
                    <motion.div
                        className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-md"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 + i * 0.2, type: "spring" }}
                    >
                        <span className="text-white font-bold text-3xl">✓</span>
                    </motion.div>
                    <span className="text-4xl font-hand font-bold">{item}</span>
                </motion.div>
            ))}
        </motion.div>
    </div>
);

// Scene 5: Disclaimer
export const Scene5 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <motion.div
            className="text-9xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
            transition={{
                scale: { type: "spring", bounce: 0.5, duration: 0.8 },
                rotate: { duration: 0.8, ease: "easeInOut", type: "tween" }
            }}
        >
            ⚠️
        </motion.div>
        <motion.div
            className="bg-gradient-to-br from-yellow-100 to-amber-100 border-4 border-yellow-500 px-14 py-10 rounded-3xl max-w-3xl shadow-xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.5 }}
        >
            <h3 className="text-7xl font-black text-yellow-800 text-center mb-6">High-Level Overview</h3>
            <p className="text-5xl font-hand text-yellow-700 text-center leading-relaxed">
                This is a summary, not a replacement for the book!
            </p>
        </motion.div>
    </div>
);

// Scene 6: Warning
export const Scene6 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring" }}>
            <AICharacter mood="thinking" label="Think About It" />
        </motion.div>

        <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.8 } }
            }}
        >
            <motion.div variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="text-7xl font-black text-zinc-800">
                Don't expect to learn
            </motion.div>
            <motion.div variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="text-7xl font-black text-zinc-800">
                <span className="underline decoration-wavy decoration-red-400">ALL</span> the details from
            </motion.div>
            <motion.div
                className="text-7xl font-black text-red-600"
                variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, rotate: [0, -5, 5, 0] } }}
            >
                just this video! 🎬
            </motion.div>
        </motion.div>
    </div>
);

// Scene 7: Call to Action
export const Scene7 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <AICharacter mood="happy" action="wave" label="Ready?" highlight={true} />
        <motion.div
            className="flex flex-col items-center gap-8"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 1.5 } }
            }}
        >
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-7xl font-black text-zinc-800 text-center">
                Use this as your
            </motion.div>
            <motion.div
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-12 py-8 rounded-3xl text-7xl font-black shadow-2xl cursor-pointer"
                variants={{ hidden: { scale: 0, rotate: -10 }, visible: { scale: 1, rotate: 0, transition: { type: "spring" } } }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
            >
                🚀 Jumping-Off Point
            </motion.div>
        </motion.div>
    </div>
);

const Chapter1Visualizer = ({ sceneIndex }) => {
    const scenes = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7];
    const SceneComponent = scenes[sceneIndex] || Scene1;
    return <SceneComponent />;
};

export default Chapter1Visualizer;
