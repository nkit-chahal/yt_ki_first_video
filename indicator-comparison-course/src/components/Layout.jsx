import { motion } from 'framer-motion';

// Chapter wrapper for 16:9 video
export const ChapterWrapper = ({ children, title, chapterNum }) => (
    <div className="video-container flex flex-col">
        {/* Main content area - full height */}
        <div className="flex-1 relative overflow-hidden">
            {children}
        </div>
    </div>
);

// Section title with animation
export const SectionTitle = ({ children, subtitle, delay = 0 }) => (
    <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
    >
        <h1 className="chapter-title mb-4">{children}</h1>
        {subtitle && (
            <p className="text-2xl text-stone-400">{subtitle}</p>
        )}
    </motion.div>
);

// Callout box for key information
export const Callout = ({ children, type = "info", delay = 0 }) => {
    const colors = {
        info: "border-amber-500 bg-amber-500/10",
        success: "border-green-500 bg-green-500/10",
        warning: "border-orange-500 bg-orange-500/10",
        danger: "border-red-500 bg-red-500/10"
    };

    return (
        <motion.div
            className={`rounded-xl border px-8 py-6 ${colors[type]}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    );
};

// Bullet point with animation
export const BulletPoint = ({ children, delay = 0, icon = "•" }) => (
    <motion.div
        className="flex items-start gap-4 text-2xl text-stone-300"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay }}
    >
        <span className="text-amber-400 mt-1">{icon}</span>
        <span>{children}</span>
    </motion.div>
);

// Formula display
export const Formula = ({ children, delay = 0 }) => (
    <motion.div
        className="bg-stone-900 border border-stone-700 rounded-xl px-8 py-6 font-mono text-2xl text-center text-stone-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay }}
    >
        {children}
    </motion.div>
);

