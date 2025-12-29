import os
import re
import requests
from dotenv import load_dotenv

load_dotenv()

ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY")
VOICE_ID = "UgBBYS2sOqTuMpoF3BR0" # User's preferred voice
API_URL = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"
OUTPUT_DIR = "ai-engineering-summary/public/audio"

def generate_audio(text, filename):
    if os.path.exists(filename):
        print(f"[SKIP] {filename} already exists")
        return True

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
    
    try:
        response = requests.post(API_URL, json=data, headers=headers)
        if response.status_code == 200:
            with open(filename, "wb") as f:
                f.write(response.content)
            print(f"[OK] Saved {os.path.basename(filename)}")
            return True
        else:
            print(f"[ERROR] {response.status_code} - {response.text}")
            return False
    except Exception as e:
        print(f"[EXCEPTION] {e}")
        return False

def parse_scenes_file(filepath):
    """Simple regex parser to extract id and narration from JS files"""
    scenes = []
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Regex to find objects with id and narration
        # Matches: id: "c1_s1", ... narration: "Text...",
        # Note: This is a simple parser, might need adjustment if formatting varies wildly
        
        # Find all scene blocks roughly
        # Looking for id: "..." and narration: "..."
        
        # Strategy: find all `id: "([^"]+)"` and `narration: "([^"]+)"` pairs
        # Assuming they appear in order within the objects
        
        ids = re.findall(r'id:\s*["\']([^"\']+)["\']', content)
        narrations = re.findall(r'narration:\s*["\']([^"\']+)["\']', content)
        
        if len(ids) == len(narrations):
            for i in range(len(ids)):
                scenes.append({
                    "id": ids[i],
                    "text": narrations[i]
                })
        else:
            print(f"[WARN] Mismatch in {filepath}: found {len(ids)} ids and {len(narrations)} narrations. Using zip.")
            for i, (sid, text) in enumerate(zip(ids, narrations)):
                scenes.append({"id": sid, "text": text})

    except Exception as e:
        print(f"[ERROR] transforming {filepath}: {e}")
        
    return scenes

def main():
    if not ELEVENLABS_API_KEY:
        print("Error: ELEVENLABS_API_KEY not found in .env file")
        return
    
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    # Process Chapters 1 to 11 (Chapter 0 is done)
    for i in range(1, 12):
        print(f"\nProcessing Chapter {i}...")
        scene_file = f"ai-engineering-summary/src/chapters/Chapter{i}/scenes.js"
        
        if not os.path.exists(scene_file):
            print(f"[SKIP] File not found: {scene_file}")
            continue
            
        scenes = parse_scenes_file(scene_file)
        print(f"Found {len(scenes)} scenes in Chapter {i}")
        
        for scene in scenes:
            # We use the ID from the file (e.g., c1_s1) for the filename
            # But the user might want a clearer name like in ch0: chapterX_sceneY 
            # or just use the ID if App.jsx is updated to use the ID.
            # In ch0 we used `chapter0_scene${index}.mp3`. The IDs in scenes.js are `c0_s1`.
            # To be consistent with the ID-based lookup which is safer:
            
            # Let's save as `c1_s1.mp3` etc using the ID directly. 
            # IMPORTANT: modifying ID to include chapter prefix if simpler, but the IDs are already unique (c1_s1, c2_s1...)
            # Actually, let's check ids.
            # Ch1 scenes have ids like "c1_s1", "c1_s2".
            # Ch2 scenes have ids like "c2_s1".
            # So unique filenames based on IDs is perfect.
            
            filename = f"{scene['id']}.mp3"
            filepath = os.path.join(OUTPUT_DIR, filename)
            
            print(f"Generating: {filename}...")
            # generate_audio(scene['text'], filepath) # Uncomment to run
            generate_audio(scene['text'], filepath)

if __name__ == "__main__":
    main()
