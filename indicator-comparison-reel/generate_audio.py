import requests
import os

# ElevenLabs API
API_KEY = "fed1dad6f58e5d28a6316695944055986974852dda14da2d9bd64641bbea65a1"
VOICE_ID = "UgBBYS2sOqTuMpoF3BR0"
MODEL_ID = "eleven_multilingual_v2"
OUTPUT_DIR = r"c:\Users\Pc\Desktop\prerna\indicator-comparison-reel\public\audio"

# Reel segments - short and punchy
SEGMENTS = {
    # Scene 1: Hook
    "1_1": "Using the wrong indicator?",
    "1_2": "Here's which one to use in each market condition.",
    
    # Scene 2: Trending
    "2_1": "Trending markets? Use moving averages and MACD.",
    "2_2": "Avoid RSI for entries. It stays overbought in trends!",
    
    # Scene 3: Ranging
    "3_1": "Ranging markets? RSI and Stochastic shine here.",
    "3_2": "Avoid moving average crossovers. Constant whipsaws!",
    
    # Scene 4: Breakout
    "4_1": "Breakout trading? Volume is everything!",
    "4_2": "High volume equals real breakout. Low volume equals fake.",
    
    # Scene 5: Reversal
    "5_1": "Catching reversals? Look for divergence in RSI, MACD, and OBV.",
    
    # Scene 6: CTA
    "6_1": "Follow our Algo Trading with Python playlist for more!",
    "6_2": "Subscribe and stay tuned for automated bots and RL trading!",
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
        print(f"Generating {segment_id}: {text[:40]}...")
        success, result = generate_audio(segment_id, text)
        if success:
            print(f"  [OK] Saved: {result}")
            success_count += 1
        else:
            print(f"  [FAIL] {result}")
            fail_count += 1
    
    print(f"\nDone! Success: {success_count}, Failed: {fail_count}")
