import { motion, AnimatePresence } from 'framer-motion';
import { File, CheckCircle, Sparkles, Search, Zap } from 'lucide-react';

// Demo Scene - Steps 11-17
// Step 11: "Watch this"
// Step 12: "I tell it: Add user authentication..."
// Step 13: "and boom –"
// Step 14: "it creates the auth files"
// Step 15: "updates routes"
// Step 16: "adds environment variables"
// Step 17: "writes the login component – all in seconds"
const DemoScene = ({ step }) => {

    const files = [
        { name: 'auth.ts', bg: 'bg-green-100', border: 'border-green-400', text: 'text-green-700', emoji: '🔐' },
        { name: 'routes.ts', bg: 'bg-purple-100', border: 'border-purple-400', text: 'text-purple-700', emoji: '🛤️' },
        { name: '.env.local', bg: 'bg-yellow-100', border: 'border-yellow-400', text: 'text-yellow-700', emoji: '⚙️' },
        { name: 'login.tsx', bg: 'bg-blue-100', border: 'border-blue-400', text: 'text-blue-700', emoji: '🖥️' },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative p-8"
            style={{ background: 'linear-gradient(180deg, #FFFBF0 0%, #FDF4E3 100%)' }}>

            <AnimatePresence mode="wait">
                {/* Step 11: "Watch this" */}
                {step === 11 && (
                    <motion.div
                        key="watch"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="w-40 h-40 bg-purple-100 rounded-full flex items-center justify-center border-4 border-purple-400 shadow-2xl mb-6">
                            <span className="text-7xl">👀</span>
                        </div>
                        <h1 className="text-6xl font-black text-gray-800">Watch this.</h1>
                    </motion.div>
                )}

                {/* Step 12: Prompt appears */}
                {step === 12 && (
                    <motion.div
                        key="prompt"
                        className="flex flex-col items-center w-full max-w-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center border-4 border-blue-400 shadow-xl mb-6">
                            <Sparkles size={64} className="text-blue-600" />
                        </div>
                        <div className="w-full bg-black p-8 rounded-3xl shadow-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <Search size={24} className="text-purple-400" />
                                <span className="text-purple-400 text-sm font-bold uppercase tracking-widest">Prompt</span>
                            </div>
                            <motion.h2
                                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                "Add user authentication to this Next.js app"
                            </motion.h2>
                        </div>
                    </motion.div>
                )}

                {/* Step 13: BOOM */}
                {step === 13 && (
                    <motion.div
                        key="boom"
                        className="flex flex-col items-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.h1
                            className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                        >
                            BOOM
                        </motion.h1>
                        <motion.div
                            className="mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Zap size={64} className="text-yellow-500" fill="#EAB308" />
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 14: auth.ts appears */}
                {step === 14 && (
                    <motion.div
                        key="file1"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring" }}
                    >
                        <h2 className="text-3xl font-bold text-gray-600 mb-8">Creating files...</h2>
                        <div className={`${files[0].bg} ${files[0].border} border-4 rounded-3xl p-8 flex items-center gap-6 shadow-2xl`}>
                            <span className="text-6xl">{files[0].emoji}</span>
                            <span className={`${files[0].text} font-bold text-3xl`}>{files[0].name}</span>
                        </div>
                    </motion.div>
                )}

                {/* Step 15: routes.ts appears */}
                {step === 15 && (
                    <motion.div
                        key="file2"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring" }}
                    >
                        <h2 className="text-3xl font-bold text-gray-600 mb-8">Updating routes...</h2>
                        <div className={`${files[1].bg} ${files[1].border} border-4 rounded-3xl p-8 flex items-center gap-6 shadow-2xl`}>
                            <span className="text-6xl">{files[1].emoji}</span>
                            <span className={`${files[1].text} font-bold text-3xl`}>{files[1].name}</span>
                        </div>
                    </motion.div>
                )}

                {/* Step 16: .env.local appears */}
                {step === 16 && (
                    <motion.div
                        key="file3"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, rotate: -10 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ type: "spring" }}
                    >
                        <h2 className="text-3xl font-bold text-gray-600 mb-8">Adding env variables...</h2>
                        <div className={`${files[2].bg} ${files[2].border} border-4 rounded-3xl p-8 flex items-center gap-6 shadow-2xl`}>
                            <span className="text-6xl">{files[2].emoji}</span>
                            <span className={`${files[2].text} font-bold text-3xl`}>{files[2].name}</span>
                        </div>
                    </motion.div>
                )}

                {/* Step 17: All files + success */}
                {step === 17 && (
                    <motion.div
                        key="all-files"
                        className="flex flex-col items-center w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
                            {files.map((file, i) => (
                                <motion.div
                                    key={i}
                                    className={`${file.bg} ${file.border} border-4 rounded-2xl p-4 flex items-center gap-3 shadow-xl`}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: i * 0.1, type: "spring" }}
                                >
                                    <span className="text-3xl">{file.emoji}</span>
                                    <span className={`${file.text} font-bold text-lg`}>{file.name}</span>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            className="flex items-center gap-3 bg-green-100 border-4 border-green-400 px-8 py-5 rounded-2xl shadow-xl"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                        >
                            <CheckCircle size={36} className="text-green-600" />
                            <span className="text-green-700 text-2xl font-black">ALL IN SECONDS</span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default DemoScene;
