import requests
import os

# ElevenLabs API
API_KEY = "sk_e4501ff9969563470e78e0e30fce52d9e7a456eaf803e87f"
VOICE_ID = "UgBBYS2sOqTuMpoF3BR0"
MODEL_ID = "eleven_multilingual_v2"
OUTPUT_DIR = r"c:\Users\Pc\Desktop\prerna\indicator-comparison-course\public\audio"

# Only regenerate the CTA segment
SEGMENTS = {
    "7_5": "This was video 2 of our Algo Trading with Python playlist. Subscribe and follow this playlist to stay updated! Coming up next: automated trading bots and reinforcement learning for trading. Thanks for watching!",
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
    
    for segment_id, text in SEGMENTS.items():
        print(f"Generating {segment_id}: {text[:50]}...")
        success, result = generate_audio(segment_id, text)
        if success:
            print(f"  [OK] Saved: {result}")
        else:
            print(f"  [FAIL] {result}")
