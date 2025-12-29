import requests
import os

# ElevenLabs API
API_KEY = "sk_e4501ff9969563470e78e0e30fce52d9e7a456eaf803e87f"
VOICE_ID = "UgBBYS2sOqTuMpoF3BR0"
MODEL_ID = "eleven_multilingual_v2"
OUTPUT_DIR = r"c:\Users\Pc\Desktop\prerna\indicator-comparison-course\public\audio"

# Segments to generate
SEGMENTS = {
    # Chapter 1: Introduction
    "1_1": "When to use which indicator?",
    "1_2": "Knowing what an indicator does is just the start. Knowing when to use it is the real skill.",
    "1_3": "Let's break down the best indicators for each market condition: trending, ranging, breakout, and reversal.",
    
    # Chapter 2: Trending Markets
    "2_1": "Trending markets: when price is moving in a clear direction.",
    "2_2": "Which indicators work best here?",
    "2_3": "Use moving averages like SMA and EMA. They act as dynamic support and resistance. MACD confirms trend strength.",
    "2_4": "ADX measures trend strength. Above 25 means a strong trend.",
    "2_5": "Avoid using RSI for entry signals in trends. It can stay overbought or oversold for weeks. Same with Stochastic.",
    
    # Chapter 3: Ranging Markets
    "3_1": "Ranging markets: price moves sideways between support and resistance.",
    "3_2": "This is where oscillators shine!",
    "3_3": "RSI works great here. Buy at 30, sell at 70. Stochastic crossovers are reliable in ranges.",
    "3_4": "Bollinger Bands help identify price bouncing between bands.",
    "3_5": "Avoid moving average crossovers in ranges. You'll get constant whipsaws and false signals.",
    
    # Chapter 4: Breakout Trading
    "4_1": "Breakout trading: when price breaks out of consolidation.",
    "4_2": "Volume confirmation is critical here!",
    "4_3": "Use volume and OBV. Breakout plus high volume equals valid. Low volume equals fake.",
    "4_4": "Volume Profile helps too. Price moves fast through low volume nodes.",
    "4_5": "Be careful with RSI overbought signals. Breakouts will trigger them, but don't exit too early.",
    
    # Chapter 5: Reversal Trading
    "5_1": "Reversal trading: catching trend changes early.",
    "5_2": "Divergence is your best friend here!",
    "5_3": "RSI divergence: price makes new high, RSI doesn't. That's a warning sign.",
    "5_4": "MACD divergence works too. Shrinking histogram while price extends means weakening momentum.",
    "5_5": "OBV divergence shows smart money positioning. Multiple timeframe divergence equals stronger signals.",
    
    # Chapter 6: Quick Reference
    "6_1": "Here's your quick reference matrix: which indicator for which market.",
    "6_2": "Green checkmark means best choice. Orange warning means use with caution. Red X means avoid.",
    "6_3": "Save this matrix and refer to it before every trade.",
    
    # Chapter 7: Conclusion
    "7_1": "Let's wrap up with the key takeaways.",
    "7_2": "First, identify the market condition. Trending, ranging, breakout, or reversal.",
    "7_3": "Then choose indicators that work best in that condition.",
    "7_4": "Always combine two to three complementary indicators. Never rely on just one.",
    "7_5": "Thanks for watching! Subscribe for more trading education.",
}

def generate_audio(segment_id, text):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"
    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": API_KEY
    }
    data = {
        "text": text,
        "model_id": MODEL_ID,
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.75
        }
    }
    
    response = requests.post(url, json=data, headers=headers)
    
    if response.status_code == 200:
        output_path = os.path.join(OUTPUT_DIR, f"{segment_id}.mp3")
        with open(output_path, "wb") as f:
            f.write(response.content)
        return True, output_path
    else:
        return False, response.text

if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    success_count = 0
    fail_count = 0
    
    for segment_id, text in SEGMENTS.items():
        print(f"Generating {segment_id}: {text[:50]}...")
        success, result = generate_audio(segment_id, text)
        if success:
            print(f"  [OK] Saved: {result}")
            success_count += 1
        else:
            print(f"  [FAIL] {result}")
            fail_count += 1
    
    print(f"\nDone! Success: {success_count}, Failed: {fail_count}")
