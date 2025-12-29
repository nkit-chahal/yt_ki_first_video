import json
import os
import requests
import time
from dotenv import load_dotenv

load_dotenv()

ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY")
VOICE_ID = "UgBBYS2sOqTuMpoF3BR0"  # User's preferred voice
API_URL = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"

def generate_audio(text, filename, max_retries=3):
    """Generate audio using ElevenLabs API with retry logic"""
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
    
    for attempt in range(max_retries):
        try:
            response = requests.post(API_URL, json=data, headers=headers, timeout=30)
            
            if response.status_code == 200:
                with open(filename, "wb") as f:
                    f.write(response.content)
                print(f"[SUCCESS] Audio saved to {filename}")
                return True
            else:
                print(f"[ERROR] {response.status_code} - {response.text}")
                if attempt < max_retries - 1:
                    print(f"   Retrying in 2 seconds... (attempt {attempt + 2}/{max_retries})")
                    time.sleep(2)
        except Exception as e:
            print(f"[ERROR] {str(e)}")
            if attempt < max_retries - 1:
                print(f"   Retrying in 2 seconds... (attempt {attempt + 2}/{max_retries})")
                time.sleep(2)
            else:
                print(f"   Failed after {max_retries} attempts")
                return False
    
    return False

def main():
    # Load narration data
    narration_file = "why-technical-indicators-fail-shorts/narration.json"
    
    with open(narration_file, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    # Create audio directory
    audio_dir = "why-technical-indicators-fail-shorts/public/audio"
    os.makedirs(audio_dir, exist_ok=True)
    
    print(f"Generating audio for: {data['video_title']}")
    print(f"Total scenes: {len(data['scenes'])}\n")
    
    # Generate audio for each scene
    for scene_data in data['scenes']:
        scene_num = scene_data['scene']
        title = scene_data['title']
        narration_lines = scene_data['narration']
        
        # Combine all narration lines for this scene
        full_text = " ".join(narration_lines)
        
        # Generate filename
        output_file = f"{audio_dir}/scene_{scene_num}.mp3"
        
        # Skip if file already exists
        if os.path.exists(output_file):
            print(f"Scene {scene_num}: {title}")
            print(f"   [SKIP] File already exists: scene_{scene_num}.mp3\n")
            continue
        
        print(f"Scene {scene_num}: {title}")
        print(f"   Text: {full_text[:80]}...")
        
        # Generate audio
        success = generate_audio(full_text, output_file)
        
        if success:
            print(f"   [SUCCESS] Generated: scene_{scene_num}.mp3\n")
            # Small delay to avoid rate limiting
            time.sleep(1)
        else:
            print(f"   [FAILED] scene_{scene_num}.mp3\n")
    
    print("Audio generation complete!")

if __name__ == "__main__":
    main()
