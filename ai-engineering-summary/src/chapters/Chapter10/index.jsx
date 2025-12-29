import React from 'react';
import { motion } from 'framer-motion';
import AICharacter from '../../components/AICharacter';

// Scene 1: Agentic Intro
export const Scene1 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <motion.h1
            className="text-9xl font-black text-zinc-800"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }} // Sync: "Agentic Pattern"
        >
            🕵️ Agents
        </motion.h1>
        <motion.div
            className="bg-gradient-to-r from-purple-100 to-indigo-100 border-4 border-purple-500 px-10 py-6 rounded-2xl text-5xl font-hand text-purple-800 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.5 }} // Sync: "active approach"
        >
            Active & Autonomous
        </motion.div>
        <AICharacter mood="happy" action="wave" label="At your service!" />
    </div>
);

// Scene 2: Agent Definition Loop
export const Scene2 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">The Agent Loop</h2>
        <div className="flex items-center gap-8 relative">
            {[
                { icon: "👀", label: "Observe", color: "from-blue-400 to-blue-500" },
                { icon: "🧠", label: "Decide", color: "from-purple-400 to-purple-500" },
                { icon: "⚡", label: "Act", color: "from-red-400 to-red-500" },
                { icon: "📈", label: "Learn", color: "from-green-400 to-green-500" }
            ].map((step, i) => (
                <React.Fragment key={step.label}>
                    <motion.div
                        className={`w-36 h-40 bg-gradient-to-br ${step.color} rounded-2xl flex flex-col items-center justify-center text-white shadow-xl z-10`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 2.0 + i * 1.5 }} // Sync: Observe(2.0), Decide(3.5), Act(5.0), Learn(6.5)
                    >
                        <div className="text-6xl">{step.icon}</div>
                        <div className="font-bold mt-3 text-2xl">{step.label}</div>
                    </motion.div>
                    {i < 3 && (
                        <motion.div
                            className="text-5xl text-zinc-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.0 + i * 1.5 + 0.8 }}
                        >
                            ➜
                        </motion.div>
                    )}
                </React.Fragment>
            ))}
            {/* Feedback loop arrow */}
            <motion.div
                className="absolute top-0 w-full h-full border-t-4 border-zinc-300 rounded-[50px] -z-10"
                style={{ top: -40, height: 120 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
            />
        </div>
    </div>
);

// Scene 3: Agent Tools
export const Scene3 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Power of Tools</h2>
        <div className="flex items-center gap-20">
            <AICharacter mood="happy" action="pointing" label="I have tools!" />
            <div className="grid grid-cols-2 gap-6">
                {[
                    { icon: "🌐", label: "Web Search" },
                    { icon: "🐍", label: "Python Exec" },
                    { icon: "🎨", label: "Image Gen" },
                    { icon: "📧", label: "Send Email" }
                ].map((tool, i) => (
                    <motion.div
                        key={tool.label}
                        className="w-48 h-32 bg-[#FDFBF7] border-4 border-zinc-300 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:border-indigo-400"
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 3.0 + i * 1.5 }} // Sync: Web(3.0), Python(4.5), Image(6.0)...
                    >
                        <div className="text-6xl">{tool.icon}</div>
                        <div className="font-bold mt-2">{tool.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
);

// Scene 4: Planning
export const Scene4 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <div className="flex items-center gap-8">
            <h2 className="text-7xl font-black text-indigo-700">Planning</h2>
            <div className="text-7xl">🗺️</div>
        </div>

        <div className="flex gap-16">
            {/* Task */}
            <motion.div
                className="w-56 h-40 bg-zinc-800 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }} // Sync: "Complex Task"
            >
                <div className="text-6xl mb-2">🏔️</div>
                <div className="font-bold text-3xl">Complex Task</div>
            </motion.div>

            <motion.div
                className="text-7xl text-zinc-300 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                ➜
            </motion.div>

            {/* Subtasks */}
            <div className="flex flex-col gap-4">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="w-48 h-12 bg-indigo-100 border-2 border-indigo-400 rounded-lg flex items-center justify-center font-bold text-indigo-800 shadow-md"
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 3.5 + i * 1.0 }} // Sync: "decompose" steps
                    >
                        Step {i}
                    </motion.div>
                ))}
            </div>
            <AICharacter mood="thinking" label="Decompose..." />
        </div>
    </div>
);

// Scene 5: Agent Failures
export const Scene5 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-red-600">⚠️ Failure Modes</h2>
        <div className="flex gap-16">
            <motion.div
                className="w-72 h-64 bg-red-50 border-4 border-red-500 rounded-3xl flex flex-col items-center justify-center shadow-xl p-6 text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 4.0 }} // Sync: "Planning Failure"
            >
                <div className="text-8xl mb-4">😵‍💫</div>
                <div className="text-4xl font-bold text-red-800">Planning Failure</div>
                <div className="text-2xl text-red-600 mt-2">"Stuck in a loop"</div>
            </motion.div>

            <motion.div
                className="w-72 h-64 bg-orange-50 border-4 border-orange-500 rounded-3xl flex flex-col items-center justify-center shadow-xl p-6 text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 5.5 }} // Sync: "Tool Failure"
            >
                <div className="text-8xl mb-4">🔧</div>
                <div className="text-4xl font-bold text-orange-800">Tool Failure</div>
                <div className="text-2xl text-orange-600 mt-2">"API Error 500"</div>
            </motion.div>
        </div>
        <AICharacter mood="sad" label="It happens..." />
    </div>
);

// Scene 6: Memory Challenge
export const Scene6 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">The Memory Challenge</h2>
        <div className="flex items-center gap-20">
            <AICharacter mood="thinking" label="Do I remember?" />
            <div className="relative">
                <motion.div
                    className="w-56 h-56 bg-gradient-to-br from-yellow-200 to-amber-300 border-4 border-yellow-500 rounded-full flex flex-col items-center justify-center shadow-xl z-10 relative"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ delay: 3.0, repeat: Infinity, duration: 3 }} // Sync: "Memory"
                >
                    <div className="text-8xl">🧠</div>
                    <div className="font-bold text-4xl mt-2 text-yellow-900">Memory</div>
                </motion.div>

                {/* Connecting lines */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-32 h-1 bg-yellow-400 -z-0 origin-left"
                        style={{ rotate: deg, x: 0, y: 0 }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 4.0 + i * 0.1 }} // Sync: "retain and utilize"
                    >
                        <div className="absolute right-0 -top-3 text-4xl">💭</div>
                    </motion.div>
                ))}
            </div>
        </div>
        <div className="text-4xl font-hand text-zinc-500">Retaining context across interactions is hard</div>
    </div>
);

// Scene 7: Agents Conclusion
export const Scene7 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">The Complete Agent</h2>
        <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
            {[
                { label: "RAG", sub: "Knowledge", color: "bg-blue-100 border-blue-500" },
                { label: "Tools", sub: "Capabilities", color: "bg-green-100 border-green-500" },
                { label: "Planning", sub: "Strategy", color: "bg-purple-100 border-purple-500" },
                { label: "Memory", sub: "Continuity", color: "bg-yellow-100 border-yellow-500" }
            ].map((part, i) => (
                <motion.div
                    key={part.label}
                    className={`${part.color} border-4 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg`}
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.5 + i * 1.5, type: "spring" }} // Sync: RAG(1.5), Tools(3.0), Planning(4.5), Memory(6.0)
                >
                    <div className="text-5xl font-black text-zinc-800">{part.label}</div>
                    <div className="text-2xl font-hand text-zinc-600">{part.sub}</div>
                </motion.div>
            ))}
        </div>
        <AICharacter mood="happy" action="wave" label="Ready for anything!" />
    </div>
);

const Chapter10Visualizer = ({ sceneIndex }) => {
    const scenes = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7];
    const SceneComponent = scenes[sceneIndex] || Scene1;
    return <SceneComponent />;
};

export default Chapter10Visualizer;
