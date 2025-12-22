import React, { forwardRef } from 'react';

const CurvedArrow = forwardRef(({ startX = 0, startY = 0, endX = 100, endY = 0, color = "#888", strokeWidth = 2, className = "" }, ref) => {
    // Simple quadratic Bezier curve
    // Control point calculation could be improved for smarter curving
    const controlX = (startX + endX) / 2;
    const controlY = Math.min(startY, endY) - 50; // Curve upwards

    const pathData = `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;

    return (
        <svg ref={ref} className={`absolute pointer-events-none overflow-visible ${className}`} style={{ left: 0, top: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <defs>
                <marker id="arrowhead-gray" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill={color} />
                </marker>
            </defs>
            <path
                d={pathData}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                markerEnd="url(#arrowhead-gray)"
                strokeDasharray="5,5" // Dashed line style from reference
            />
        </svg>
    );
});

export default CurvedArrow;
