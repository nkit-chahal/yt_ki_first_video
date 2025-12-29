import React from 'react';
import { motion } from 'framer-motion';
import AICharacter from '../../components/AICharacter';

// Scene 1: Model Selection Intro
export const Scene1 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <motion.h1
            className="text-9xl font-black text-zinc-800"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }} // Sync: "Model Selection"
        >
            🎯 Model Selection
        </motion.h1>
        <motion.div
            className="bg-gradient-to-r from-indigo-100 to-purple-100 border-4 border-indigo-500 px-10 py-6 rounded-2xl text-5xl font-hand text-indigo-800 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.5 }} // Sync: "Choosing the right model"
        >
            Choosing the Right Model for Your App
        </motion.div>
        <AICharacter mood="thinking" label="Let's figure this out..." />
    </div>
);

// Scene 2: Model Abundance
export const Scene2 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <h2 className="text-7xl font-black text-zinc-700">So Many Models!</h2>
        <div className="flex gap-6">
            {[
                { name: "GPT-4", color: "from-green-400 to-green-500" },
                { name: "Claude", color: "from-orange-400 to-orange-500" },
                { name: "Gemini", color: "from-blue-400 to-blue-500" },
                { name: "Llama", color: "from-purple-400 to-purple-500" },
                { name: "Mistral", color: "from-red-400 to-red-500" }
            ].map((model, i) => (
                <motion.div
                    key={model.name}
                    className={`w-32 h-40 bg-gradient-to-br ${model.color} rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-xl`}
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.5 }} // Sync: Staggered reveal
                    whileHover={{ scale: 1.05 }}
                >
                    {model.name}
                </motion.div>
            ))}
        </div>
        <AICharacter mood="surprised" label="Which one?!" />
    </div>
);

// Scene 3: Cost-Performance Axis
export const Scene3 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">The Two Key Steps</h2>
        <div className="flex gap-16">
            <motion.div
                className="w-72 h-56 bg-gradient-to-br from-blue-100 to-blue-200 border-4 border-blue-500 rounded-2xl flex flex-col items-center justify-center shadow-xl p-6"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.5 }} // Sync: "Finding best performance"
            >
                <div className="text-8xl mb-4">🏆</div>
                <div className="text-3xl font-bold text-center text-blue-800">Find Best Performance</div>
            </motion.div>
            <motion.div
                className="w-72 h-56 bg-gradient-to-br from-green-100 to-green-200 border-4 border-green-500 rounded-2xl flex flex-col items-center justify-center shadow-xl p-6"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 5.5 }} // Sync: "Map cost vs performance"
            >
                <div className="text-8xl mb-4">💰</div>
                <div className="text-3xl font-bold text-center text-green-800">Map Cost vs Performance</div>
            </motion.div>
        </div>
    </div>
);

// Scene 4: Four Buckets
export const Scene4 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Evaluation Criteria</h2>
        <div className="grid grid-cols-2 gap-8">
            {[
                { icon: "🎯", label: "Domain-Specific", color: "from-red-100 to-red-200 border-red-400" },
                { icon: "🧠", label: "General Capabilities", color: "from-blue-100 to-blue-200 border-blue-400" },
                { icon: "📝", label: "Instruction Following", color: "from-green-100 to-green-200 border-green-400" },
                { icon: "⚡", label: "Cost / Latency", color: "from-yellow-100 to-yellow-200 border-yellow-400" }
            ].map((bucket, i) => (
                <motion.div
                    key={bucket.label}
                    className={`w-64 h-40 bg-gradient-to-br ${bucket.color} border-4 rounded-2xl flex flex-col items-center justify-center shadow-xl`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.5 + i * 1.5 }} // Sync: Domain(2.5), General(4.0), Instruction(5.5), Cost(7.0)
                >
                    <div className="text-7xl">{bucket.icon}</div>
                    <div className="font-bold mt-3 text-2xl text-center">{bucket.label}</div>
                </motion.div>
            ))}
        </div>
    </div>
);

// Scene 5: Hard vs Soft Attributes
export const Scene5 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        {/* Hard Attributes */}
        <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5 }} // Sync: "Hard Attributes"
        >
            <div className="w-64 h-56 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl">
                <div className="text-8xl">🔒</div>
                <div className="text-4xl font-bold mt-4">Hard Attributes</div>
            </div>
            <div className="text-3xl font-hand text-zinc-500">Can't be changed</div>
            <div className="text-lg text-zinc-400">(Context length, languages)</div>
        </motion.div>

        <div className="text-8xl text-zinc-300">vs</div>

        {/* Soft Attributes */}
        <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 4.0 }} // Sync: "Soft Attributes"
        >
            <div className="w-64 h-56 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl">
                <div className="text-8xl">🔧</div>
                <div className="text-4xl font-bold mt-4">Soft Attributes</div>
            </div>
            <div className="text-3xl font-hand text-zinc-500">Can be improved</div>
            <div className="text-lg text-zinc-400">(via fine-tuning, prompts)</div>
        </motion.div>
    </div>
);

// Scene 6: Selection Workflow
export const Scene6 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Selection Workflow</h2>
        <div className="flex items-center gap-6">
            {[
                { step: "1", label: "Filter Hard", icon: "🔍" },
                { step: "2", label: "Research", icon: "📊" },
                { step: "3", label: "Experiment", icon: "🧪" },
                { step: "4", label: "Monitor", icon: "👁️" }
            ].map((item, i) => (
                <React.Fragment key={item.step}>
                    <motion.div
                        className="w-40 h-48 bg-[#FDFBF7] border-4 border-indigo-400 rounded-2xl flex flex-col items-center justify-center shadow-xl"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 2.5 + i * 2.0 }} // Sync: Filter(2.5), Research(4.5), Experiment(6.5), Monitor(8.5)
                    >
                        <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold mb-3">{item.step}</div>
                        <div className="text-6xl">{item.icon}</div>
                        <div className="font-bold mt-3 text-center">{item.label}</div>
                    </motion.div>
                    {i < 3 && <motion.div
                        className="text-5xl text-zinc-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5 + i * 2.0 }}
                    >➜</motion.div>}
                </React.Fragment>
            ))}
        </div>
    </div>
);

// Scene 7: API vs Self-Host
export const Scene7 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        <AICharacter mood="thinking" label="Hmm..." />
        <div className="flex gap-16">
            {/* API */}
            <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.5 }} // Sync: "commercial model APIs"
            >
                <div className="w-56 h-44 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl">
                    <div className="text-7xl">☁️</div>
                    <div className="text-4xl font-bold mt-3">Model API</div>
                </div>
                <div className="text-2xl font-hand text-zinc-500">OpenAI, Anthropic</div>
            </motion.div>

            <div className="text-7xl text-zinc-300">or</div>

            {/* Self-Host */}
            <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 5.0 }} // Sync: "host an open-source model yourself"
            >
                <div className="w-56 h-44 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl">
                    <div className="text-7xl">🖥️</div>
                    <div className="text-4xl font-bold mt-3">Self-Host</div>
                </div>
                <div className="text-2xl font-hand text-zinc-500">Llama, Mistral</div>
            </motion.div>
        </div>
    </div>
);

// Scene 8: Inference Service
export const Scene8 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Inference Service</h2>
        <div className="flex items-center gap-12">
            {/* Users */}
            <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div className="flex gap-3">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="text-7xl">👤</div>
                    ))}
                </div>
                <div className="text-3xl font-hand">Users</div>
            </motion.div>

            <div className="text-7xl text-zinc-300">➜</div>

            {/* Inference Service */}
            <motion.div
                className="w-64 h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 4.5 }} // Sync: "inference service"
            >
                <div className="text-7xl">⚙️</div>
                <div className="text-4xl font-bold mt-3">Inference</div>
                <div className="text-2xl opacity-80">Service</div>
            </motion.div>

            <div className="text-7xl text-zinc-300">➜</div>

            {/* Model */}
            <motion.div
                className="w-48 h-48 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 6.0 }} // Sync: "model" (target of inference)
            >
                <div className="text-7xl">🤖</div>
                <div className="text-3xl font-bold mt-3">Model</div>
            </motion.div>
        </div>
    </div>
);

// Scene 9: Hosting Factors
export const Scene9 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Hosting Factors</h2>
        <div className="grid grid-cols-2 gap-8">
            {[
                { icon: "🔐", label: "Data Privacy", desc: "Who sees your data?" },
                { icon: "📜", label: "Data Lineage", desc: "Training data origins" },
                { icon: "⚡", label: "Performance", desc: "Speed & reliability" },
                { icon: "🎛️", label: "Control", desc: "Customization options" }
            ].map((factor, i) => (
                <motion.div
                    key={factor.label}
                    className="w-64 h-44 bg-[#FDFBF7] border-4 border-zinc-300 rounded-2xl flex flex-col items-center justify-center shadow-xl p-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 3.0 + i * 1.0 }} // Sync: Privacy(3.0), Lineage(4.0), Performance(5.0), Control(6.0)
                >
                    <div className="text-7xl">{factor.icon}</div>
                    <div className="font-bold text-3xl mt-3">{factor.label}</div>
                    <div className="text-lg text-zinc-500 mt-1">{factor.desc}</div>
                </motion.div>
            ))}
        </div>
        <AICharacter mood="happy" action="pointing" label="Consider all of these!" />
    </div>
);

const Chapter7Visualizer = ({ sceneIndex }) => {
    const scenes = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9];
    const SceneComponent = scenes[sceneIndex] || Scene1;
    return <SceneComponent />;
};

export default Chapter7Visualizer;
