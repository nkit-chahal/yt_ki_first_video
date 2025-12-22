import { motion } from 'framer-motion';

const RebaseVisual = ({ warning }) => {
    return (
        <div style={{ position: 'relative', width: '500px', height: '300px' }}>
            {/* Trunk */}
            <div style={{ position: 'absolute', top: '200px', left: '50px', width: '400px', height: '4px', background: '#30363d', borderRadius: '2px' }} />

            {/* Base Commits */}
            <div style={{ position: 'absolute', left: 100, top: 190, width: '20px', height: '20px', borderRadius: '50%', background: '#8b949e' }} />
            <div style={{ position: 'absolute', left: 200, top: 190, width: '20px', height: '20px', borderRadius: '50%', background: '#8b949e' }} />

            {/* Feature Branch */}
            <motion.div
                initial={{ x: 0, y: 0 }}
                animate={!warning ? { x: 100, y: 0 } : {}}
                transition={{ duration: 2, delay: 1 }}
                style={{ position: 'absolute', left: 100, top: 100 }} // Starts at first base
            >
                <div style={{ width: '4px', height: '100px', background: '#58a6ff', position: 'absolute', left: 10 }} />
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#58a6ff', position: 'absolute', top: -20, left: -8, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontWeight: 'bold' }}>F1</div>
            </motion.div>

            {warning && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.5, 1] }}
                    transition={{ delay: 0.5 }}
                    style={{ position: 'absolute', left: 180, top: 130, fontSize: '4rem' }}
                >
                    💥
                </motion.div>
            )}

            <div style={{ position: 'absolute', bottom: 20, width: '100%', textAlign: 'center', color: '#c9d1d9' }}>
                {warning ? "NEVER Rebase Shared History!" : "Replay commits on new base"}
            </div>
        </div>
    );
};

export default RebaseVisual;
