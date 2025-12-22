import { motion } from 'framer-motion';

const Commit = ({ x, y, label }) => (
    <div style={{
        position: 'absolute', left: x, top: y,
        width: '50px', height: '50px', borderRadius: '50%',
        background: '#0d1117', border: '2px solid #30363d',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        color: '#8b949e', fontWeight: 'bold', zIndex: 1
    }}>
        {label}
    </div>
);

const BranchLabel = ({ label, targetX, targetY }) => (
    <motion.div
        initial={{ x: targetX, y: targetY + 60, opacity: 0 }}
        animate={{ x: targetX, y: targetY - 60, opacity: 1 }}
        transition={{ duration: 1, type: 'spring' }}
        style={{
            position: 'absolute',
            background: '#238636',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '4px',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            left: 0, top: 0, // Position relative to parent or use transform
            zIndex: 10,
            boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
        }}
    >
        {label}
        <div style={{
            position: 'absolute', bottom: '-5px', left: '50%', transform: 'translateX(-50%) rotate(45deg)',
            width: '10px', height: '10px', background: '#238636'
        }} />
    </motion.div>
);

const BranchesVisual = ({ step }) => {
    // Step 1: Just showing it's a pointer
    // Step 2: Show it moving

    return (
        <div style={{ position: 'relative', width: '500px', height: '300px' }}>
            {/* Timeline */}
            <div style={{ position: 'absolute', top: '150px', left: '50px', right: '50px', height: '2px', background: '#30363d' }} />

            <Commit x={100} y={125} label="A" />
            <Commit x={200} y={125} label="B" />
            <Commit x={300} y={125} label="C" />

            {step === 1 && (
                <BranchLabel label="main" targetX={310} targetY={125} />
            )}

            {step === 2 && (
                <>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                        style={{ position: 'absolute', left: 400, top: 125, width: '50px', height: '50px', background: '#0d1117', border: '2px solid #30363d', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#c9d1d9', zIndex: 1 }}
                    >
                        D
                    </motion.div>
                    <motion.div
                        initial={{ x: 310, y: 65 }} // Above C
                        animate={{ x: 410, y: 65 }} // Above D
                        transition={{ delay: 2, duration: 1, type: 'spring' }}
                        style={{
                            position: 'absolute',
                            background: '#238636',
                            color: 'white',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            fontSize: '0.9rem',
                            zIndex: 10,
                            boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
                        }}
                    >
                        main
                        <div style={{
                            position: 'absolute', bottom: '-5px', left: '50%', transform: 'translateX(-50%) rotate(45deg)',
                            width: '10px', height: '10px', background: '#238636'
                        }} />
                    </motion.div>
                </>
            )}
        </div>
    );
};

export default BranchesVisual;
