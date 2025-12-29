import React from 'react';
import { motion } from 'framer-motion';
import AICharacter from '../../components/AICharacter';

// Scene 1: Beyond Training Data
export const Scene1 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <motion.h1
            className="text-9xl font-black text-zinc-800"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }} // Sync: "RAG"
        >
            🔍 RAG
        </motion.h1>
        <motion.div
            className="bg-gradient-to-r from-blue-100 to-cyan-100 border-4 border-blue-500 px-10 py-6 rounded-2xl text-5xl font-hand text-blue-800 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.5 }} // Sync: "access to information"
        >
            Retrieval Augmented Generation
        </motion.div>
        <AICharacter mood="happy" action="pointing" label="Beyond training data!" />
    </div>
);

// Scene 2: Two Patterns
export const Scene2 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Two Dominant Patterns</h2>
        <div className="flex gap-16">
            <motion.div
                className="w-64 h-56 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 }} // Sync: "RAG"
            >
                <div className="text-8xl">🔍</div>
                <div className="text-4xl font-bold mt-4">RAG</div>
                <div className="text-lg mt-2 opacity-80">Retrieve & Generate</div>
            </motion.div>
            <motion.div
                className="w-64 h-56 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 4.5 }} // Sync: "Agentic Pattern"
            >
                <div className="text-8xl">🤖</div>
                <div className="text-4xl font-bold mt-4">Agentic</div>
                <div className="text-lg mt-2 opacity-80">Tools & Actions</div>
            </motion.div>
        </div>
    </div>
);

// Scene 3: RAG vs Agentic
export const Scene3 = () => (
    <div className="flex items-center justify-center gap-16 h-full">
        <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0 }} // Sync: "RAG allows..."
        >
            <div className="w-72 h-48 bg-gradient-to-br from-blue-100 to-blue-200 border-4 border-blue-500 rounded-2xl flex flex-col items-center justify-center shadow-xl p-6">
                <div className="text-7xl mb-3">📚</div>
                <div className="text-3xl font-bold text-blue-800">RAG</div>
                <div className="text-lg text-blue-600 mt-2 text-center">Retrieves from databases</div>
            </div>
        </motion.div>

        <div className="text-8xl text-zinc-300">vs</div>

        <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 4.0 }} // Sync: "Agentic Pattern enables..."
        >
            <div className="w-72 h-48 bg-gradient-to-br from-purple-100 to-purple-200 border-4 border-purple-500 rounded-2xl flex flex-col items-center justify-center shadow-xl p-6">
                <div className="text-7xl mb-3">🌐</div>
                <div className="text-3xl font-bold text-purple-800">Agentic</div>
                <div className="text-lg text-purple-600 mt-2 text-center">Web search, APIs, tools</div>
            </div>
        </motion.div>
    </div>
);

// Scene 4: RAG Definition
export const Scene4 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <AICharacter mood="thinking" label="Here's the idea..." />
        <motion.div
            className="flex flex-col items-center gap-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
        >
            <div className="flex flex-col items-center gap-6">
                <div className="w-56 h-48 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
                    <div className="text-7xl">📂</div>
                    <div className="mt-2 font-bold text-3xl">External</div>
                    <div className="text-xl">Memory</div>
                </div>
                <div className="text-7xl">+</div>
                <div className="w-56 h-48 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
                    <div className="text-7xl">🧠</div>
                    <div className="mt-2 font-bold text-3xl">LLM</div>
                    <div className="text-xl">Generation</div>
                </div>
            </div>
            <motion.div
                className="text-5xl font-hand text-zinc-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.5 }} // Sync: "enhanced"
            >
                = Enhanced Responses! ✨
            </motion.div>
        </motion.div>
    </div>
);

// Scene 5: Retriever + Generator
export const Scene5 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Two Main Components</h2>
        <div className="flex items-center gap-12">
            <motion.div
                className="w-64 h-52 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.5 }} // Sync: "Retriever"
            >
                <div className="text-8xl">🔍</div>
                <div className="text-4xl font-bold mt-4">Retriever</div>
                <div className="text-lg mt-2 opacity-80">Fetches information</div>
            </motion.div>

            <motion.div
                className="text-7xl text-zinc-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3.5 }}
            >
                ➜
            </motion.div>

            <motion.div
                className="w-64 h-52 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 5.0 }} // Sync: "Generator"
            >
                <div className="text-8xl">✍️</div>
                <div className="text-4xl font-bold mt-4">Generator</div>
                <div className="text-lg mt-2 opacity-80">Produces response</div>
            </motion.div>
        </div>
    </div>
);

// Scene 6: Indexing & Querying
export const Scene6 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Retriever Functions</h2>
        <div className="flex gap-16">
            <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3.5 }} // Sync: "Indexing"
            >
                <div className="w-56 h-48 bg-gradient-to-br from-indigo-100 to-indigo-200 border-4 border-indigo-500 rounded-2xl flex flex-col items-center justify-center shadow-xl">
                    <div className="text-8xl">📋</div>
                    <div className="text-3xl font-bold mt-4 text-indigo-800">Indexing</div>
                </div>
                <div className="text-2xl font-hand text-zinc-500">Organize data</div>
            </motion.div>

            <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 5.0 }} // Sync: "Querying"
            >
                <div className="w-56 h-48 bg-gradient-to-br from-cyan-100 to-cyan-200 border-4 border-cyan-500 rounded-2xl flex flex-col items-center justify-center shadow-xl">
                    <div className="text-8xl">❓</div>
                    <div className="text-3xl font-bold mt-4 text-cyan-800">Querying</div>
                </div>
                <div className="text-2xl font-hand text-zinc-500">Search data</div>
            </motion.div>
        </div>
        <AICharacter mood="happy" label="Critical for success!" />
    </div>
);

// Scene 7: Chunking
export const Scene7 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Document Chunking</h2>
        <div className="flex items-center gap-8">
            {/* Big Document */}
            <motion.div
                className="w-40 h-64 bg-zinc-200 border-4 border-zinc-400 rounded-xl flex items-center justify-center shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }} // Sync: "Document"
            >
                <div className="text-8xl">📄</div>
            </motion.div>

            <motion.div
                className="text-7xl text-zinc-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                ➜
            </motion.div>

            {/* Chunks */}
            <div className="flex flex-col gap-3">
                {[1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        className="w-32 h-14 bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-400 rounded-lg flex items-center justify-center shadow-md font-bold"
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 3.5 + i * 0.1 }} // Sync: "scattered/split"
                    >
                        Chunk {i}
                    </motion.div>
                ))}
            </div>
        </div>
        <div className="text-4xl font-hand text-zinc-500">Split into manageable pieces</div>
    </div>
);

// Scene 8: Retrieval Algorithms
export const Scene8 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Retrieval Methods</h2>
        <div className="flex gap-16">
            <motion.div
                className="w-64 h-56 bg-gradient-to-br from-yellow-100 to-yellow-200 border-4 border-yellow-500 rounded-2xl flex flex-col items-center justify-center shadow-xl p-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.0 }} // Sync: "Term-Based"
            >
                <div className="text-7xl">🔤</div>
                <div className="text-3xl font-bold mt-4 text-yellow-800">Term-Based</div>
                <div className="text-lg text-yellow-700 mt-2 text-center">Keyword matching</div>
            </motion.div>

            <motion.div
                className="w-64 h-56 bg-gradient-to-br from-purple-100 to-purple-200 border-4 border-purple-500 rounded-2xl flex flex-col items-center justify-center shadow-xl p-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 4.5 }} // Sync: "Embedding-Based"
            >
                <div className="text-7xl">🧲</div>
                <div className="text-3xl font-bold mt-4 text-purple-800">Embedding-Based</div>
                <div className="text-lg text-purple-700 mt-2 text-center">Semantic similarity</div>
            </motion.div>
        </div>
    </div>
);

// Scene 9: Hybrid Retrieval
export const Scene9 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <AICharacter mood="happy" action="pointing" label="Best of both worlds!" />
        <motion.div
            className="w-[500px] h-56 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-3xl flex items-center justify-center text-white shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2.0 }} // Sync: "combines several approaches"
        >
            <div className="text-center">
                <div className="text-7xl mb-4">🔀</div>
                <div className="text-5xl font-bold">Hybrid Retrieval</div>
                <div className="text-2xl mt-2 opacity-90">Combine multiple approaches</div>
            </div>
        </motion.div>
    </div>
);

// Scene 10: Improvement Tactics
export const Scene10 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Improvement Tactics</h2>
        <div className="grid grid-cols-2 gap-6">
            {[
                { icon: "✂️", label: "Chunking", desc: "Optimal size" },
                { icon: "🔄", label: "Re-ranking", desc: "Reorder results" },
                { icon: "📝", label: "Query Rewriting", desc: "Rephrase queries" },
                { icon: "🎯", label: "Contextual", desc: "Add context" }
            ].map((tactic, i) => (
                <motion.div
                    key={tactic.label}
                    className="w-52 h-40 bg-[#FDFBF7] border-4 border-zinc-300 rounded-2xl flex flex-col items-center justify-center shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.0 + i * 1.5 }} // Sync: Chunking(2.0), Re-ranking(3.5), Query(5.0), Contextual(6.5)
                    whileHover={{ borderColor: "#818cf8", scale: 1.02 }}
                >
                    <div className="text-6xl">{tactic.icon}</div>
                    <div className="font-bold mt-3">{tactic.label}</div>
                    <div className="text-lg text-zinc-500 mt-1">{tactic.desc}</div>
                </motion.div>
            ))}
        </div>
    </div>
);

// Scene 11: Multimodal RAG
export const Scene11 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Not Just Text!</h2>
        <div className="flex gap-8">
            {[
                { icon: "📝", label: "Text", color: "from-blue-100 to-blue-200 border-blue-400" },
                { icon: "🖼️", label: "Images", color: "from-green-100 to-green-200 border-green-400" },
                { icon: "📊", label: "Tables", color: "from-yellow-100 to-yellow-200 border-yellow-400" },
                { icon: "🎵", label: "Audio", color: "from-purple-100 to-purple-200 border-purple-400" }
            ].map((type, i) => (
                <motion.div
                    key={type.label}
                    className={`w-36 h-44 bg-gradient-to-br ${type.color} border-4 rounded-2xl flex flex-col items-center justify-center shadow-xl`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.5 + i * 1.0 }} // Sync: Rapid sequence for multimodal
                >
                    <div className="text-7xl">{type.icon}</div>
                    <div className="font-bold mt-4">{type.label}</div>
                </motion.div>
            ))}
        </div>
        <motion.div
            className="text-5xl font-hand text-zinc-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
        >
            Multimodal RAG 🚀
        </motion.div>
    </div>
);

const Chapter9Visualizer = ({ sceneIndex }) => {
    const scenes = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9, Scene10, Scene11];
    const SceneComponent = scenes[sceneIndex] || Scene1;
    return <SceneComponent />;
};

export default Chapter9Visualizer;
