import React from 'react';
import { motion } from 'framer-motion';

// Animated Candlestick Chart Component
const CandlestickChart = ({
    data,
    width = 1200,
    height = 500,
    showVolume = true,
    indicatorLines = [],
    animationDelay = 0,
    candleDelay = 0.1
}) => {
    const padding = { top: 20, right: 60, bottom: showVolume ? 100 : 40, left: 80 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom - (showVolume ? 80 : 0);

    // Calculate price range
    const prices = data.flatMap(d => [d.high, d.low]);
    const minPrice = Math.min(...prices) * 0.99;
    const maxPrice = Math.max(...prices) * 1.01;
    const priceRange = maxPrice - minPrice;

    // Volume range
    const volumes = data.map(d => d.volume);
    const maxVolume = Math.max(...volumes);

    // Scale functions
    const xScale = (index) => padding.left + (index / (data.length - 1)) * chartWidth;
    const yScale = (price) => padding.top + (1 - (price - minPrice) / priceRange) * chartHeight;
    const volumeScale = (vol) => (vol / maxVolume) * 60;

    const candleWidth = Math.max(8, chartWidth / data.length - 4);

    return (
        <svg width={width} height={height} className="overflow-visible">
            {/* Grid lines */}
            {[...Array(5)].map((_, i) => {
                const y = padding.top + (i / 4) * chartHeight;
                const price = maxPrice - (i / 4) * priceRange;
                return (
                    <g key={i}>
                        <line
                            x1={padding.left}
                            y1={y}
                            x2={width - padding.right}
                            y2={y}
                            className="grid-line"
                        />
                        <text
                            x={padding.left - 10}
                            y={y + 5}
                            textAnchor="end"
                            className="fill-gray-500 text-sm"
                        >
                            {price.toFixed(1)}
                        </text>
                    </g>
                );
            })}

            {/* Candlesticks */}
            {data.map((candle, i) => {
                const x = xScale(i);
                const isBullish = candle.close > candle.open;
                const bodyTop = yScale(Math.max(candle.open, candle.close));
                const bodyBottom = yScale(Math.min(candle.open, candle.close));
                const bodyHeight = Math.max(1, bodyBottom - bodyTop);

                return (
                    <motion.g
                        key={i}
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        transition={{ delay: animationDelay + i * candleDelay }}
                        style={{ transformOrigin: `${x}px ${yScale(candle.close)}px` }}
                    >
                        {/* Wick */}
                        <line
                            x1={x}
                            y1={yScale(candle.high)}
                            x2={x}
                            y2={yScale(candle.low)}
                            stroke={isBullish ? '#10B981' : '#EF4444'}
                            strokeWidth={2}
                        />
                        {/* Body */}
                        <rect
                            x={x - candleWidth / 2}
                            y={bodyTop}
                            width={candleWidth}
                            height={bodyHeight}
                            fill={isBullish ? '#10B981' : '#EF4444'}
                            rx={2}
                        />
                    </motion.g>
                );
            })}

            {/* Indicator lines */}
            {indicatorLines.map((indicator, lineIndex) => (
                <motion.path
                    key={lineIndex}
                    d={indicator.data
                        .map((val, i) => {
                            if (val === null) return '';
                            const x = xScale(i);
                            const y = yScale(val);
                            return i === 0 || indicator.data[i - 1] === null
                                ? `M ${x} ${y}`
                                : `L ${x} ${y}`;
                        })
                        .join(' ')
                    }
                    stroke={indicator.color}
                    strokeWidth={indicator.width || 3}
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: indicator.delay || 1, duration: indicator.duration || 2 }}
                />
            ))}

            {/* Volume bars */}
            {showVolume && (
                <g transform={`translate(0, ${height - 80})`}>
                    {data.map((candle, i) => {
                        const x = xScale(i);
                        const isBullish = candle.close > candle.open;
                        const barHeight = volumeScale(candle.volume);

                        return (
                            <motion.rect
                                key={i}
                                x={x - candleWidth / 2}
                                y={60 - barHeight}
                                width={candleWidth}
                                height={barHeight}
                                fill={isBullish ? '#10B981' : '#EF4444'}
                                opacity={0.5}
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ delay: animationDelay + i * candleDelay }}
                                style={{ transformOrigin: 'bottom' }}
                            />
                        );
                    })}
                </g>
            )}
        </svg>
    );
};

export default CandlestickChart;
