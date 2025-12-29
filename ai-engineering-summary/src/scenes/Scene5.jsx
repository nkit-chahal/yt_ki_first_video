import React from 'react';
import { motion } from 'framer-motion';
import { Code, Plane, Bug } from 'lucide-react';

// Scene 5: Synthesized Worlds
// Visual: Multiple mini-scenarios (spheres) floating around the model
const Scene5 = () => {

    const worlds = [
        { icon: Code, color: "text-blue-400", label: "Coding Tasks", delay: 0 },
        { icon: Plane, color: "text-green-400", label: "Travel Planning", delay: 0.5 },
        { icon: Bug, color: "text-red-400", label: "Debugging", delay: 1.0 },
    ];

    return (
        <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden p-6">

            <motion.h2
                className="text-2xl font-bold text-white mb-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                85,000+ SYNTHETIC TASKS
            </motion.h2>

            <div className="relative w-full h-96 flex flex-col items-center justify-center">

                {/* The Worlds */}
                {worlds.map((world, i) => (
                    <motion.div
                        key={i}
                        className={`absolute flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-4 rounded-2xl w-64`}
                        style={{ zIndex: 10 - i }}
                        initial={{
                            y: 100,
                            opacity: 0,
                            scale: 0.8,
                            x: (i - 1) * 20 // Slight offset
                        }}
                        animate={{
                            y: (i - 1) * 90, // Vertical stack
                            opacity: 1,
                            scale: 1,
                            x: 0
                        }}
                        transition={{
                            delay: world.delay,
                            type: "spring",
                            stiffness: 100
                        }}
                    >
                        <div className={`p-3 rounded-full bg-white/10 ${world.color}`}>
                            <world.icon size={24} />
                        </div>
                        <div>
                            <div className="text-white font-bold">{world.label}</div>
                            <div className="text-xs text-gray-500">Agentic Simulation</div>
                        </div>
                    </motion.div>
                ))}

            </div>

            <motion.p
                className="absolute bottom-10 text-xl font-medium text-blue-200 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
            >
                "Living in simulation to master reality"
            </motion.p>

        </div>
    );
};

export default Scene5;
