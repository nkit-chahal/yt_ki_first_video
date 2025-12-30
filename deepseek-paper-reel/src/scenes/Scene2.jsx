import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Atom, Wrench, BookOpen, Clock, Layers } from 'lucide-react';

// Scene 2: The Dataset - "22,000 Hours"
// Visual: Warm theme with animated counters
const Scene2 = ({ animSpeed = 1 }) => {

    const [hours, setHours] = useState(0);
    const [topics, setTopics] = useState(0);

    // Helper to scale time
    const t = (val) => val / animSpeed;

    // Animated counter effect
    useEffect(() => {
        // Adjust interval speed
        const intervalSpeed = t(50);

        const hoursInterval = setInterval(() => {
            setHours(prev => Math.min(prev + 450, 22000));
        }, intervalSpeed);

        const topicsTimeout = setTimeout(() => {
            const topicsInterval = setInterval(() => {
                setTopics(prev => Math.min(prev + 80, 3900));
            }, intervalSpeed);
            // Cleanup nested interval
            return () => clearInterval(topicsInterval);
            // This return is tricky in timeout. 
            // Better to manage intervals cleanly.
        }, t(1000));

        // Refactored for cleaner cleanup
        let topicsInterval;
        const safeTopicsTimeout = setTimeout(() => {
            topicsInterval = setInterval(() => {
                setTopics(prev => Math.min(prev + 80, 3900));
            }, intervalSpeed);
        }, t(1000));

        return () => {
            clearInterval(hoursInterval);
            clearTimeout(safeTopicsTimeout);
            if (topicsInterval) clearInterval(topicsInterval);
        };
    }, [animSpeed]);

    const subjects = [
        { icon: Calculator, label: "Algebra", color: "#C4A77D" },
        { icon: Atom, label: "Physics", color: "#8B7355" },
        { icon: Wrench, label: "Engineering", color: "#D94A38" },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #F5F0E8 0%, #EDE6DA 50%, #E8DFD0 100%)' }}>

            {/* Subtle texture */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `radial-gradient(circle at 30% 20%, rgba(200,180,150,0.3) 0%, transparent 50%),
                                     radial-gradient(circle at 70% 80%, rgba(180,160,130,0.2) 0%, transparent 50%)`
                }}
            />

            {/* Title */}
            <motion.div
                className="flex items-center gap-3 mb-8 z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: t(0.5) }}
            >
                <BookOpen size={28} className="text-[#8B7355]" />
                <h2 className="text-2xl font-bold text-gray-800">Instructional Video Dataset</h2>
            </motion.div>

            {/* Counters */}
            <div className="flex gap-6 mb-10 z-10">
                <motion.div
                    className="text-center bg-white rounded-2xl px-8 py-6 shadow-md"
                    style={{ border: '2px solid #C4A77D' }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: t(0.3), duration: t(0.5) }}
                >
                    <Clock size={32} className="text-[#C4A77D] mx-auto mb-2" />
                    <div className="text-4xl font-black text-gray-800 font-mono">
                        {hours.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Hours</div>
                </motion.div>

                <motion.div
                    className="text-center bg-white rounded-2xl px-8 py-6 shadow-md"
                    style={{ border: '2px solid #D94A38' }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: t(0.6), duration: t(0.5) }}
                >
                    <Layers size={32} className="text-[#D94A38] mx-auto mb-2" />
                    <div className="text-4xl font-black text-gray-800 font-mono">
                        {topics.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Topics</div>
                </motion.div>
            </div>

            {/* Subject Icons */}
            <div className="flex gap-4 z-10">
                {subjects.map((subject, i) => (
                    <motion.div
                        key={i}
                        className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-sm"
                        style={{ border: `1px solid ${subject.color}30` }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: t(1.5 + i * 0.2), duration: t(0.5) }}
                    >
                        <subject.icon size={20} style={{ color: subject.color }} />
                        <span className="text-gray-700 font-medium">{subject.label}</span>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Note */}
            <motion.p
                className="absolute bottom-10 text-gray-500 text-sm text-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: t(2.2), duration: t(0.5) }}
            >
                Real, foundational knowledge. Not random webpages.
            </motion.p>

        </div>
    );
};

export default Scene2;
