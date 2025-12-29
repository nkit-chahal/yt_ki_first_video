import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import { motion } from 'framer-motion';
import { Code, AlertTriangle, XCircle } from 'lucide-react';

const DecoratorScene1 = () => {
    return (
        <SceneWrapper>
            <div className="flex flex-col items-center gap-2 mb-8">
                <Title>You Touch</Title>
                <Title>One Function...</Title>
            </div>

            <div className="relative w-full max-w-lg flex flex-col items-center justify-center">

                {/* The One Function You Modified */}
                <motion.div
                    className="bg-yellow-900/40 border-2 border-yellow-500 p-4 rounded-xl w-full z-20 backdrop-blur-sm"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <div className="flex items-center gap-2 mb-2">
                        <Code className="text-yellow-400 w-5 h-5" />
                        <span className="text-yellow-300 font-mono font-bold text-sm">def process_user()</span>
                    </div>
                    <div className="text-yellow-200/70 font-mono text-xs ml-6">
                        # Modified this line ✏️
                    </div>
                </motion.div>

                {/* The Cascade of Breaking Code */}
                <div className="mt-6 w-full space-y-2">
                    {[
                        "validate_input()",
                        "check_permissions()",
                        "log_activity()",
                        "send_notification()",
                        "update_cache()"
                    ].map((func, i) => (
                        <motion.div
                            key={i}
                            className="bg-red-900/40 border border-red-500/50 p-3 rounded-lg flex items-center gap-3 backdrop-blur-sm"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                backgroundColor: ["rgba(127, 29, 29, 0.4)", "rgba(220, 38, 38, 0.6)", "rgba(127, 29, 29, 0.4)"]
                            }}
                            transition={{
                                delay: 1 + (i * 0.15),
                                backgroundColor: { duration: 0.5, repeat: Infinity }
                            }}
                        >
                            <XCircle className="text-red-400 w-4 h-4 flex-shrink-0" />
                            <span className="text-red-300 font-mono text-xs">{func}</span>
                            <span className="text-red-500/70 text-xs ml-auto">BROKEN</span>
                        </motion.div>
                    ))}
                </div>

                {/* The Warning */}
                <motion.div
                    className="absolute z-30 flex flex-col items-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.5, type: "spring" }}
                >
                    <div className="bg-red-600 text-white px-6 py-4 rounded-full font-black text-xl shadow-[0_0_50px_rgba(220,38,38,0.6)] flex items-center gap-2 border-4 border-white rotate-[-8deg]">
                        <AlertTriangle className="w-6 h-6" />
                        50+ ERRORS!
                    </div>
                </motion.div>

            </div>
        </SceneWrapper>
    );
};

export default DecoratorScene1;
