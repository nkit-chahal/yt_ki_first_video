import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const DemoScene = ({ step }) => {
    const [typedCode, setTypedCode] = useState('');

    const codeLines = [
        '// User: Create a REST API endpoint',
        '',
        'app.post("/api/users", async (req, res) => {',
        '  const { name, email } = req.body;',
        '  ',
        '  const user = await db.users.create({',
        '    name,',
        '    email,',
        '    createdAt: new Date()',
        '  });',
        '  ',
        '  res.json({ success: true, user });',
        '});'
    ];

    const fullCode = codeLines.join('\n');

    useEffect(() => {
        let current = 0;
        const timer = setInterval(() => {
            if (current < fullCode.length) {
                setTypedCode(fullCode.slice(0, current + 1));
                current++;
            } else {
                clearInterval(timer);
            }
        }, 30);
        return () => clearInterval(timer);
    }, []);

    const isStep5 = step >= 5;
    const isStep6 = step >= 6;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
            {/* Dark code editor background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800" />

            {/* Main content */}
            <div className="relative z-10 w-full px-12">
                {/* Code editor mockup */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#1e1e1e] rounded-3xl overflow-hidden shadow-2xl border border-gray-700"
                >
                    {/* Editor header */}
                    <div className="flex items-center gap-3 px-6 py-4 bg-[#2d2d2d] border-b border-gray-700">
                        <div className="flex gap-2">
                            <div className="w-4 h-4 rounded-full bg-red-500" />
                            <div className="w-4 h-4 rounded-full bg-yellow-500" />
                            <div className="w-4 h-4 rounded-full bg-green-500" />
                        </div>
                        <span className="text-gray-400 text-lg ml-4 font-mono">server.js</span>
                        <div className="ml-auto flex items-center gap-2">
                            <div className="px-3 py-1 bg-orange-500/20 rounded-lg">
                                <span className="text-orange-400 text-sm font-semibold">Antigravity Active</span>
                            </div>
                        </div>
                    </div>

                    {/* Code content */}
                    <div className="p-8 min-h-[600px]">
                        <pre className="font-mono text-2xl leading-relaxed">
                            <code>
                                {typedCode.split('\n').map((line, i) => (
                                    <div key={i} className="flex">
                                        <span className="text-gray-600 w-12 select-none">{i + 1}</span>
                                        <span className={
                                            line.startsWith('//') ? 'text-green-400' :
                                                line.includes('const') || line.includes('async') ? 'text-purple-400' :
                                                    line.includes('app.') || line.includes('db.') || line.includes('res.') ? 'text-blue-400' :
                                                        line.includes('"') || line.includes("'") ? 'text-orange-300' :
                                                            'text-gray-200'
                                        }>
                                            {line}
                                        </span>
                                    </div>
                                ))}
                                <span className="inline-block w-3 h-7 bg-orange-500 animate-pulse ml-1" />
                            </code>
                        </pre>
                    </div>
                </motion.div>

                {/* Feature badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex justify-center gap-6 mt-12"
                >
                    {[
                        { label: "Writes Code", active: true },
                        { label: "Debugs Errors", active: isStep5 },
                        { label: "Explains Logic", active: isStep5 }
                    ].map((badge, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: badge.active ? 1 : 0.8, opacity: badge.active ? 1 : 0.4 }}
                            transition={{ delay: 1.2 + i * 0.2 }}
                            className={`px-8 py-4 rounded-2xl text-2xl font-semibold ${badge.active
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-gray-700 text-gray-400'
                                }`}
                        >
                            {badge.label}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Speed comparison (step 6) */}
                {isStep6 && (
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="mt-16 text-center"
                    >
                        <div className="inline-flex items-center gap-8 bg-gray-800/80 backdrop-blur-xl px-16 py-8 rounded-3xl border border-gray-700">
                            <span className="text-5xl font-bold text-red-400 line-through">Hours</span>
                            <span className="text-4xl text-gray-500">→</span>
                            <span className="text-5xl font-bold text-green-400">Seconds</span>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default DemoScene;
