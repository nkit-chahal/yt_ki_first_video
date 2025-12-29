import requests
import os

API_KEY = "sk_02e6908346861c95afe4c93066189dad9275706c0a14a047"
VOICE_ID = "UgBBYS2sOqTuMpoF3BR0"
MODEL_ID = "eleven_multilingual_v2"
OUTPUT_DIR = r"c:\Users\Pc\Desktop\prerna\technical-indicators-course\public\audio"

# Segments to generate
SEGMENTS = {
    # Chapter 7: OBV
    "7_1": "On-Balance Volume, or OBV, adds volume on up days and subtracts volume on down days.",
    "7_2": "The core idea is simple: volume precedes price.",
    "7_3": "If OBV is rising while price is flat, buyers are accumulating. Expect a breakout. If OBV is falling while price is flat, sellers are distributing. Expect a breakdown.",
    "7_4": "OBV divergence from price is a powerful confirmation tool.",
    
    # Chapter 8: VWAP
    "8_1": "VWAP stands for Volume Weighted Average Price.",
    "8_2": "It's the average price weighted by volume throughout the trading day.",
    "8_3": "Institutional traders use VWAP as a benchmark to measure execution quality.",
    "8_4": "Price above VWAP suggests bullish sentiment. Price below suggests bearish sentiment.",
    "8_5": "Traders often look for mean reversion entries when price deviates significantly from VWAP.",
    
    # Chapter 9: Volume Profile
    "9_1": "Volume Profile displays trading activity at specific price levels over time.",
    "9_2": "The Point of Control, or POC, is the price with the highest volume. It's a key support and resistance level.",
    "9_3": "High volume nodes act as magnets for price. Low volume nodes are areas price moves through quickly.",
    "9_4": "Volume Profile helps you identify the most significant price levels based on actual trading activity.",
    
    # Chapter 10: Conclusion
    "10_1": "Let's wrap up with some key takeaways.",
    "10_2": "Remember: no indicator works perfectly on its own.",
    "10_3": "The best traders combine indicators with price action and market structure.",
    "10_4": "Start simple. Master one or two indicators before adding more. And remember: indicators lag behind price. Use them as confirmation tools, not crystal balls.",
    "10_5": "Thanks for watching! Subscribe for more trading education.",
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
            "similarity_boost": 0.75,
            "style": 0.0,
            "use_speaker_boost": True
        }
    }
    
    print(f"Generating {segment_id}: {text[:50]}...")
    
    response = requests.post(url, json=data, headers=headers)
    
    if response.status_code == 200:
        output_path = os.path.join(OUTPUT_DIR, f"{segment_id}.mp3")
        with open(output_path, "wb") as f:
            f.write(response.content)
        print(f"  [OK] Saved: {output_path}")
        return True
    else:
        print(f"  [FAIL] Error: {response.status_code} - {response.text}")
        return False

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    success = 0
    failed = 0
    
    for segment_id, text in SEGMENTS.items():
        if generate_audio(segment_id, text):
            success += 1
        else:
            failed += 1
    
    print(f"\nDone! Success: {success}, Failed: {failed}")

if __name__ == "__main__":
    main()
