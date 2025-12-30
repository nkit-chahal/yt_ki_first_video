import os
import requests

# API Configuration - Set via environment variable
ELEVENLABS_API_KEY = os.environ.get("ELEVENLABS_API_KEY")
VOICE_ID = "UgBBYS2sOqTuMpoF3BR0"  # User's preferred voice
API_URL = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"

# Narration steps for the Antigravity reel
NARRATION_STEPS = [
    "1 AI Tool Every Developer Needs in 2026",
    "Developers waste 40% of their time debugging and writing boilerplate code.",
    "Hours spent on tasks that AI can do in seconds.",
    "Meet Antigravity by Google. The AI coding assistant that defies limits.",
    "It writes code, debugs errors, creates entire projects from scratch.",
    "Just describe what you want. Antigravity builds it.",
    "What took hours now takes seconds.",
    "Powered by Google DeepMind. Built for developers.",
    "Follow for more AI tools that will change your workflow in 2026."
]

OUTPUT_DIR = "public/audio"

def generate_audio(text, filename):
    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": ELEVENLABS_API_KEY
    }
    data = {
        "text": text,
        "model_id": "eleven_flash_v2_5",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.75
        }
    }
    
    response = requests.post(API_URL, json=data, headers=headers)
    
    if response.status_code == 200:
        with open(filename, "wb") as f:
            f.write(response.content)
        print(f"[OK] Audio saved to {filename}")
        return True
    else:
        print(f"[ERROR] {response.status_code} - {response.text}")
        return False

def main():
    # Ensure output directory exists
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    print(f"Generating {len(NARRATION_STEPS)} audio files...")
    print("-" * 50)
    
    success_count = 0
    for i, text in enumerate(NARRATION_STEPS):
        filename = os.path.join(OUTPUT_DIR, f"narration_{i}.mp3")
        print(f"\n[{i+1}/{len(NARRATION_STEPS)}] Generating: {text[:50]}...")
        
        if generate_audio(text, filename):
            success_count += 1
    
    print("\n" + "=" * 50)
    print(f"[DONE] Generated {success_count}/{len(NARRATION_STEPS)} audio files")
    print(f"[DIR] Output directory: {OUTPUT_DIR}")

if __name__ == "__main__":
    main()
