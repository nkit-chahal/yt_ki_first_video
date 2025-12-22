import json
import os
import requests
from dotenv import load_dotenv

load_dotenv()

ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY")
VOICE_ID = "JBFqnCBsd6RMkjVDRZzb" # Example ID, replace if needed
API_URL = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"

def generate_audio(text, filename):
    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": ELEVENLABS_API_KEY
    }
    data = {
        "text": text,
        "model_id": "eleven_monolingual_v1",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.5
        }
    }
    
    response = requests.post(API_URL, json=data, headers=headers)
    
    if response.status_code == 200:
        with open(filename, "wb") as f:
            f.write(response.content)
        print(f"Audio saved to {filename}")
    else:
        print(f"Error: {response.status_code} - {response.text}")

def main():
    with open("narration.json", "r") as f:
        data = json.load(f)
    
    os.makedirs("public/audio", exist_ok=True)
    
    # Filter for new or updated IDs
    target_ids = ["undo_intro", "undo_checkout", "undo_reset_intro", "undo_reset_soft", "undo_reset_mixed", "undo_reset_hard", "undo_revert"]
    
    items = data if isinstance(data, list) else data.get('steps', [])

    for item in items:
        if item["id"] in target_ids:
            output_file = f"public/audio/{item['id']}.mp3"
            print(f"Generating audio for: {item['id']}")
            generate_audio(item["text"], output_file)

if __name__ == "__main__":
    main()
