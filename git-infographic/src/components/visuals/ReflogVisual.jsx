import { motion } from 'framer-motion';

const Row = ({ hash, action, delay, isTarget }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        style={{
            display: 'flex', gap: '1rem', padding: '10px',
            borderBottom: '1px solid #30363d',
            background: isTarget ? 'rgba(35, 134, 54, 0.2)' : 'transparent',
            color: '#c9d1d9', fontFamily: 'monospace'
        }}
    >
        <span style={{ color: '#d29922' }}>{hash}</span>
        <span>{action}</span>
    </motion.div>
);

const ReflogVisual = () => {
    return (
        <div style={{ width: '400px', background: '#0d1117', border: '1px solid #30363d', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ background: '#161b22', padding: '10px', borderBottom: '1px solid #30363d', fontWeight: 'bold' }}>
                git reflog
            </div>
            <div>
                <Row hash="e4a1b2" action="HEAD@{0}: reset: moving to HEAD~1" delay={0.2} />
                <Row hash="7f3c9d" action="HEAD@{1}: commit: WIP feature" delay={0.4} isTarget={true} />
                <Row hash="a9b8c7" action="HEAD@{2}: checkout: moving from main" delay={0.6} />
                <Row hash="1d2e3f" action="HEAD@{3}: clone: from github.com" delay={0.8} />
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{ padding: '10px', color: '#238636', textAlign: 'center', fontSize: '0.9rem' }}
            >
                FOUND IT!
            </motion.div>
        </div>
    );
};

export default ReflogVisual;
