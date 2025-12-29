import React from 'react';
import { motion } from 'framer-motion';
import { Send, User, Database, Users, ArrowRight } from 'lucide-react';

// Scene 4: WRITE PATH - What happens when you tweet
const Scene4 = ({ speed = 1 }) => {
    const steps = [
        { icon: User, label: "You Tweet", color: "primary" },
        { icon: Database, label: "Store in DB", color: "secondary" },
        { icon: Users, label: "Fan-out to Followers", color: "accent" },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-8 p-12">

            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
            </div>

            {/* Header */}
            <motion.div
                className="flex items-center gap-3 z-10"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="icon-wrapper bg-accent/10">
                    <Send size={40} className="text-accent" strokeWidth={1.8} />
                </div>
                <h2 className="text-4xl font-bold text-text-dark">
                    The <span className="text-accent glow-accent">Write Path</span>
                </h2>
            </motion.div>

            <motion.p
                className="text-xl text-text-muted text-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 / speed }}
            >
                What happens when you post a tweet?
            </motion.p>

            {/* Flow Diagram */}
            <motion.div
                className="flex flex-col gap-4 w-full max-w-md z-10 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {steps.map((step, i) => (
                    <React.Fragment key={i}>
                        <motion.div
                            className="stat-card flex items-center gap-4"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: (0.4 + i * 0.3) / speed }}
                        >
                            <div className={`icon-wrapper ${step.color === 'primary' ? 'bg-primary/10' : step.color === 'accent' ? 'bg-accent/10' : 'bg-secondary/10'}`}>
                                <step.icon
                                    size={36}
                                    className={step.color === 'primary' ? 'text-primary' : step.color === 'accent' ? 'text-accent' : 'text-secondary'}
                                    strokeWidth={1.8}
                                />
                            </div>
                            <div>
                                <p className={`text-2xl font-bold ${step.color === 'primary' ? 'text-primary' : step.color === 'accent' ? 'text-accent' : 'text-secondary'}`}>
                                    Step {i + 1}
                                </p>
                                <p className="text-lg text-text-muted">{step.label}</p>
                            </div>
                        </motion.div>

                        {i < steps.length - 1 && (
                            <motion.div
                                className="flex justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                transition={{ delay: (0.5 + i * 0.3) / speed }}
                            >
                                <ArrowRight size={28} className="text-text-muted rotate-90" />
                            </motion.div>
                        )}
                    </React.Fragment>
                ))}
            </motion.div>

            {/* Key insight */}
            <motion.p
                className="text-xl text-accent font-semibold mt-4 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 / speed }}
            >
                Pre-compute timelines = instant reads! ⚡
            </motion.p>
        </div>
    );
};

export default Scene4;
