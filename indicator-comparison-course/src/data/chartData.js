// Sample candlestick data for demonstrations
// Each candle: { open, high, low, close, volume }

export const generateCandleData = (count = 50, startPrice = 100) => {
    const data = [];
    let price = startPrice;

    for (let i = 0; i < count; i++) {
        const volatility = Math.random() * 5;
        const direction = Math.random() > 0.5 ? 1 : -1;
        const change = volatility * direction;

        const open = price;
        const close = price + change;
        const high = Math.max(open, close) + Math.random() * 2;
        const low = Math.min(open, close) - Math.random() * 2;
        const volume = Math.floor(Math.random() * 1000000) + 500000;

        data.push({ open, high, low, close, volume, index: i });
        price = close;
    }

    return data;
};

// Pre-generated data for consistent demos
export const DEMO_DATA = [
    { open: 100, high: 103, low: 99, close: 102, volume: 850000 },
    { open: 102, high: 105, low: 101, close: 104, volume: 920000 },
    { open: 104, high: 106, low: 102, close: 103, volume: 780000 },
    { open: 103, high: 107, low: 102, close: 106, volume: 1100000 },
    { open: 106, high: 108, low: 104, close: 105, volume: 950000 },
    { open: 105, high: 109, low: 104, close: 108, volume: 1200000 },
    { open: 108, high: 110, low: 106, close: 107, volume: 880000 },
    { open: 107, high: 111, low: 106, close: 110, volume: 1050000 },
    { open: 110, high: 112, low: 108, close: 109, volume: 920000 },
    { open: 109, high: 113, low: 108, close: 112, volume: 1150000 },
    { open: 112, high: 114, low: 110, close: 111, volume: 980000 },
    { open: 111, high: 115, low: 109, close: 114, volume: 1300000 },
    { open: 114, high: 116, low: 112, close: 113, volume: 870000 },
    { open: 113, high: 117, low: 111, close: 116, volume: 1100000 },
    { open: 116, high: 118, low: 114, close: 115, volume: 950000 },
    { open: 115, high: 117, low: 113, close: 114, volume: 820000 },
    { open: 114, high: 116, low: 112, close: 113, volume: 780000 },
    { open: 113, high: 115, low: 110, close: 111, volume: 900000 },
    { open: 111, high: 114, low: 109, close: 112, volume: 1050000 },
    { open: 112, high: 115, low: 110, close: 114, volume: 1200000 },
    { open: 114, high: 118, low: 113, close: 117, volume: 1400000 },
    { open: 117, high: 120, low: 115, close: 119, volume: 1550000 },
    { open: 119, high: 122, low: 117, close: 121, volume: 1650000 },
    { open: 121, high: 123, low: 119, close: 120, volume: 1200000 },
    { open: 120, high: 122, low: 118, close: 119, volume: 980000 },
].map((d, i) => ({ ...d, index: i }));

// Calculate Simple Moving Average
export const calculateSMA = (data, period = 5) => {
    const sma = [];
    for (let i = 0; i < data.length; i++) {
        if (i < period - 1) {
            sma.push(null);
        } else {
            const sum = data.slice(i - period + 1, i + 1).reduce((acc, d) => acc + d.close, 0);
            sma.push(sum / period);
        }
    }
    return sma;
};

// Calculate Exponential Moving Average
export const calculateEMA = (data, period = 5) => {
    const ema = [];
    const multiplier = 2 / (period + 1);

    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            ema.push(data[i].close);
        } else {
            ema.push((data[i].close - ema[i - 1]) * multiplier + ema[i - 1]);
        }
    }
    return ema;
};

// Calculate RSI
export const calculateRSI = (data, period = 14) => {
    const rsi = [];
    let gains = 0;
    let losses = 0;

    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            rsi.push(50);
            continue;
        }

        const change = data[i].close - data[i - 1].close;
        const gain = change > 0 ? change : 0;
        const loss = change < 0 ? Math.abs(change) : 0;

        if (i < period) {
            gains += gain;
            losses += loss;
            rsi.push(50);
        } else if (i === period) {
            gains += gain;
            losses += loss;
            const avgGain = gains / period;
            const avgLoss = losses / period;
            const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
            rsi.push(100 - (100 / (1 + rs)));
        } else {
            const avgGain = ((gains / period) * (period - 1) + gain) / period;
            const avgLoss = ((losses / period) * (period - 1) + loss) / period;
            gains = avgGain * period;
            losses = avgLoss * period;
            const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
            rsi.push(100 - (100 / (1 + rs)));
        }
    }
    return rsi;
};

// Calculate MACD
export const calculateMACD = (data, fastPeriod = 12, slowPeriod = 26, signalPeriod = 9) => {
    const emaFast = calculateEMA(data, fastPeriod);
    const emaSlow = calculateEMA(data, slowPeriod);

    const macdLine = emaFast.map((fast, i) => fast - emaSlow[i]);

    // Signal line is EMA of MACD line
    const signalLine = [];
    const multiplier = 2 / (signalPeriod + 1);

    for (let i = 0; i < macdLine.length; i++) {
        if (i === 0) {
            signalLine.push(macdLine[i]);
        } else {
            signalLine.push((macdLine[i] - signalLine[i - 1]) * multiplier + signalLine[i - 1]);
        }
    }

    const histogram = macdLine.map((m, i) => m - signalLine[i]);

    return { macdLine, signalLine, histogram };
};
