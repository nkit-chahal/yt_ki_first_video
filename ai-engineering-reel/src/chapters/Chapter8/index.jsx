import React from 'react';
import { motion } from 'framer-motion';
import AICharacter from '../../components/AICharacter';

// Scene 1: Prompt Engineering Intro
export const Scene1 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <motion.h1
            className="text-9xl font-black text-zinc-800"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }} // Sync: "Prompt Engineering"
        >
            💬 Prompt Engineering
        </motion.h1>
        <motion.div
            className="bg-gradient-to-r from-purple-100 to-pink-100 border-4 border-purple-500 px-10 py-6 rounded-2xl text-5xl font-hand text-purple-800 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.0 }} // Sync: "Accessible yet nuanced"
        >
            Accessible Yet Nuanced
        </motion.div>
        <AICharacter mood="happy" action="wave" label="My favorite topic!" />
    </div>
);

// Scene 2: Crafting Prompts
export const Scene2 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        <AICharacter mood="thinking" label="Writing prompts..." />
        <motion.div
            className="w-[500px] bg-zinc-900 text-green-400 p-8 rounded-2xl font-mono text-3xl shadow-2xl"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
        >
            <div className="text-zinc-500">// Your prompt</div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }} // Sync: "crafting instructions"
            >
                "You are an expert coder..."
            </motion.div>
            <motion.div
                className="text-yellow-400 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }} // Sync: "generate your desired outcome"
            >
                "Write a Python function that..."
            </motion.div>
        </motion.div>
    </div>
);

// Scene 3: No Weight Change
export const Scene3 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
        >
            <div className="w-56 h-44 bg-gradient-to-br from-red-100 to-red-200 border-4 border-red-500 rounded-2xl flex flex-col items-center justify-center shadow-xl">
                <div className="text-7xl">⚙️</div>
                <div className="text-3xl font-bold mt-3">Fine-Tuning</div>
            </div>
            <div className="text-3xl font-hand text-red-600">Changes Weights ❌</div>
        </motion.div>

        <div className="text-8xl text-zinc-300">vs</div>

        <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 3.5 }} // Sync: "Prompting... just telling the model"
        >
            <div className="w-56 h-44 bg-gradient-to-br from-green-100 to-green-200 border-4 border-green-500 rounded-2xl flex flex-col items-center justify-center shadow-xl">
                <div className="text-7xl">💬</div>
                <div className="text-3xl font-bold mt-3">Prompting</div>
            </div>
            <div className="text-3xl font-hand text-green-600">No Changes! ✅</div>
        </motion.div>
    </div>
);

// Scene 4: Experimental Rigor
export const Scene4 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <div className="flex items-center gap-8">
            <motion.div
                className="text-8xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, rotate: [0, 10, -10, 0] }}
                transition={{ delay: 0.5, repeat: Infinity, duration: 2, type: "tween" }}
            >
                ⚠️
            </motion.div>
            <h2 className="text-7xl font-black text-zinc-800">Don't Be Fooled!</h2>
        </div>
        <motion.div
            className="bg-gradient-to-r from-yellow-100 to-orange-100 border-4 border-yellow-500 px-12 py-8 rounded-3xl max-w-3xl text-center shadow-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.5 }} // Sync: "experimental rigor"
        >
            <p className="text-5xl font-hand text-yellow-800">
                Effective prompt engineering requires the same <span className="font-bold text-red-600">experimental rigor</span> as any ML task!
            </p>
        </motion.div>
        <AICharacter mood="thinking" label="Take it seriously!" />
    </div>
);

// Scene 5: Prompt Components
export const Scene5 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Prompt Components</h2>
        <div className="flex gap-10">
            {[
                { icon: "📋", label: "Task Description", desc: "What to do" },
                { icon: "📝", label: "Examples", desc: "Show don't tell" },
                { icon: "🎯", label: "Concrete Task", desc: "The actual query" }
            ].map((item, i) => (
                <motion.div
                    key={item.label}
                    className="w-52 h-56 bg-[#FDFBF7] border-4 border-indigo-400 rounded-2xl flex flex-col items-center justify-center shadow-xl p-4"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.0 + i * 1.5 }} // Sync: Task(2.0), Examples(3.5), Concrete(5.0)
                >
                    <div className="text-8xl">{item.icon}</div>
                    <div className="font-bold mt-4 text-2xl text-center">{item.label}</div>
                    <div className="text-lg text-zinc-500 mt-2">{item.desc}</div>
                </motion.div>
            ))}
        </div>
    </div>
);

// Scene 6: Model Robustness
export const Scene6 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        <AICharacter mood="thinking" label="Depends on the model..." />
        <div className="flex flex-col gap-8">
            <motion.div
                className="flex items-center gap-6"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 }} // Sync: "Robustness" (implied early)
            >
                <div className="w-48 h-24 bg-green-100 border-4 border-green-500 rounded-xl flex items-center justify-center font-bold text-3xl">Robust Model</div>
                <div className="text-4xl">→ Less tweaking</div>
            </motion.div>
            <motion.div
                className="flex items-center gap-6"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 4.0 }} // Sync: "Model's robustness to prompt perturbation"
            >
                <div className="w-48 h-24 bg-red-100 border-4 border-red-500 rounded-xl flex items-center justify-center font-bold text-3xl">Sensitive Model</div>
                <div className="text-4xl">→ More engineering</div>
            </motion.div>
        </div>
    </div>
);

// Scene 7: Model Preferences
export const Scene7 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Different Models, Different Styles</h2>
        <div className="flex gap-8">
            {[
                { name: "GPT-4", style: "Detailed", color: "from-green-400 to-green-500" },
                { name: "Claude", style: "Context-rich", color: "from-orange-400 to-orange-500" },
                { name: "Llama", style: "Structured", color: "from-purple-400 to-purple-500" }
            ].map((model, i) => (
                <motion.div
                    key={model.name}
                    className={`w-44 h-48 bg-gradient-to-br ${model.color} rounded-2xl flex flex-col items-center justify-center text-white shadow-xl`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.0 + i * 1.0 }} // Sync: GPT-4(2.0), Claude(3.0), Llama(4.0)
                >
                    <div className="text-4xl font-bold">{model.name}</div>
                    <div className="mt-4 bg-[#FDFBF7]/20 px-4 py-2 rounded-full text-lg">{model.style}</div>
                </motion.div>
            ))}
        </div>
    </div>
);

// Scene 8: Shot Learning
export const Scene8 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">In-Context Learning</h2>
        <div className="flex gap-10">
            {[
                { shots: 0, label: "Zero-Shot", color: "from-zinc-200 to-zinc-300 border-zinc-400" },
                { shots: 1, label: "One-Shot", color: "from-blue-100 to-blue-200 border-blue-400" },
                { shots: 3, label: "Few-Shot", color: "from-green-100 to-green-200 border-green-400" }
            ].map((item, i) => (
                <motion.div
                    key={item.label}
                    className={`w-48 h-52 bg-gradient-to-br ${item.color} border-4 rounded-2xl flex flex-col items-center justify-center shadow-xl`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 4.0 + i * 1.5 }} // Sync: Zero(4.0), One(5.5), Few(7.0)
                >
                    <div className="text-7xl font-black">{item.shots}</div>
                    <div className="text-2xl mt-2">examples</div>
                    <div className="font-bold mt-4 text-3xl">{item.label}</div>
                </motion.div>
            ))}
        </div>
        <AICharacter mood="happy" action="pointing" label="Examples help!" />
    </div>
);

// Scene 9: System vs User Prompts
export const Scene9 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Two Types of Prompts</h2>
        <div className="flex gap-16">
            <motion.div
                className="w-72 h-56 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl p-6"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 }} // Sync: "system prompts"
            >
                <div className="text-7xl">⚙️</div>
                <div className="text-4xl font-bold mt-4">System Prompt</div>
                <div className="text-2xl mt-2 opacity-80 text-center">Role & instructions</div>
            </motion.div>
            <motion.div
                className="w-72 h-56 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl p-6"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 4.5 }} // Sync: "user prompts"
            >
                <div className="text-7xl">👤</div>
                <div className="text-4xl font-bold mt-4">User Prompt</div>
                <div className="text-2xl mt-2 opacity-80 text-center">Specific query</div>
            </motion.div>
        </div>
    </div>
);

// Scene 10: Strategies Grid
export const Scene10 = () => (
    <div className="flex flex-col items-center justify-center gap-8 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Key Strategies</h2>
        <div className="grid grid-cols-3 gap-6">
            {[
                { icon: "✍️", label: "Clear Instructions" },
                { icon: "🎭", label: "Adopt a Persona" },
                { icon: "📝", label: "Provide Examples" },
                { icon: "📊", label: "Specify Format" },
                { icon: "🧩", label: "Break Into Steps" },
                { icon: "🤔", label: "Chain-of-Thought" }
            ].map((strategy, i) => (
                <motion.div
                    key={strategy.label}
                    className="w-44 h-36 bg-[#FDFBF7] border-4 border-zinc-300 rounded-2xl flex flex-col items-center justify-center shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.0 + i * 1.5 }} // Sync: Roughly 1.5s per item in list
                    whileHover={{ scale: 1.05, borderColor: "#818cf8" }}
                >
                    <div className="text-6xl">{strategy.icon}</div>
                    <div className="font-hand font-bold mt-3 text-center text-lg px-2">{strategy.label}</div>
                </motion.div>
            ))}
        </div>
    </div>
);

// Scene 11: Iterate Systematically
export const Scene11 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <motion.h1
            className="text-8xl font-black text-indigo-700"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [1, 1.02, 1], opacity: 1 }}
            transition={{ delay: 0.5, repeat: Infinity, duration: 2 }} // Sync: "Iterate systematically"
        >
            🔄 Iterate Systematically
        </motion.h1>
        <div className="flex items-center gap-8">
            {["Try", "Measure", "Improve", "Repeat"].map((step, i) => (
                <React.Fragment key={step}>
                    <motion.div
                        className="w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 border-4 border-indigo-400 rounded-full flex items-center justify-center font-bold text-2xl shadow-xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2.5 + i * 0.5, type: "spring" }} // Sync: "experimentation"
                    >
                        {step}
                    </motion.div>
                    {i < 3 && <div className="text-5xl text-zinc-300">→</div>}
                </React.Fragment>
            ))}
        </div>
        <AICharacter mood="happy" label="Experiment is key!" />
    </div>
);

const Chapter8Visualizer = ({ sceneIndex }) => {
    const scenes = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9, Scene10, Scene11];
    const SceneComponent = scenes[sceneIndex] || Scene1;
    return <SceneComponent />;
};

export default Chapter8Visualizer;
