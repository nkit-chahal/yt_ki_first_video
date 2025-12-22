import { motion } from 'framer-motion';

const Commit = ({ x, label, color = '#0d1117', borderColor = '#30363d' }) => (
    <div style={{
        position: 'absolute', left: x, top: 150,
        width: '50px', height: '50px', borderRadius: '50%',
        background: color, border: `2px solid ${borderColor}`,
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        color: '#8b949e', fontWeight: 'bold'
    }}>
        {label}
    </div>
);

const UndoVisual = ({ type }) => {
    // type: checkout, reset, revert, or intro

    return (
        <div style={{ position: 'relative', width: '500px', height: '300px' }}>
            <div style={{ position: 'absolute', top: '175px', left: '50px', right: '50px', height: '2px', background: '#30363d' }} />

            <Commit x={50} label="A" />
            <Commit x={150} label="B" />
            <Commit x={250} label="C" />

            {/* HEAD Pointer */}
            <motion.div
                initial={{ x: 250 }}
                animate={
                    type === 'checkout' ? { x: 150 } : // Checkout moves HEAD back
                        type === 'reset' ? { x: 150 } : // Reset moves Branch (and Head) back
                            { x: 250 } // Default
                }
                transition={{ duration: 2, delay: 1 }}
                style={{
                    position: 'absolute', top: 100,
                    width: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center'
                }}
            >
                <div style={{ background: '#1f6feb', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>HEAD</div>
                <div style={{ width: '2px', height: '25px', background: '#1f6feb' }} />
            </motion.div>

            {/* Revert adds a new commit */}
            {type === 'revert' && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 }}
                    style={{ position: 'absolute', left: 350, top: 150, width: '50px', height: '50px', borderRadius: '50%', background: '#0d1117', border: '2px dashed #f0883e', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#f0883e', fontWeight: 'bold', fontSize: '0.8rem' }}
                >
                    !C
                </motion.div>
            )}

            {/* Branch Label for Reset */}
            {type === 'reset' && (
                <motion.div
                    initial={{ x: 250 }}
                    animate={{ x: 150 }}
                    transition={{ duration: 2, delay: 1 }}
                    style={{ position: 'absolute', top: 210, background: '#238636', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem' }}
                >
                    main
                </motion.div>
            )}

            <div style={{ position: 'absolute', bottom: 20, width: '100%', textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: '#c9d1d9' }}>
                {type === 'intro' && "3 WAYS TO UNDO"}
                {type === 'checkout' && "Checkout: Moves HEAD (Safe)"}
                {type === 'reset' && "Reset: Moves Branch (Destructive)"}
                {type === 'revert' && "Revert: Adds Inverse Commit (Safe)"}
            </div>
        </div>
    );
};

export default UndoVisual;
