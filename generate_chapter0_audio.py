import os
import requests
from dotenv import load_dotenv

load_dotenv()

ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY")
VOICE_ID = "UgBBYS2sOqTuMpoF3BR0"  # User's preferred voice - DO NOT CHANGE unless requested
API_URL = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"

# Chapter 0: Introduction - 7 scenes
CHAPTER_0_NARRATIONS = [
    {
        "id": "chapter0_scene1",
        "text": "Hey everyone, today we're diving into the book 'AI Engineering' by Chip Huyen."
    },
    {
        "id": "chapter0_scene2", 
        "text": "800 pages of really great content about this in-demand field that's offering salaries of $300,000 or more."
    },
    {
        "id": "chapter0_scene3",
        "text": "In this video, I'm summarizing everything from the book to help you get a high-level overview of the field."
    },
    {
        "id": "chapter0_scene4",
        "text": "We'll talk about foundation models, prompt engineering, RAG, fine-tuning, agents, how to build a system, improving inference, and more."
    },
    {
        "id": "chapter0_scene5",
        "text": "I also want to mention, this is a super high-level overview of a very detailed technical book."
    },
    {
        "id": "chapter0_scene6",
        "text": "Don't expect to learn all the details just from watching this video."
    },
    {
        "id": "chapter0_scene7",
        "text": "I really recommend using this as a way to get an overview of what the field looks like and use it as a jumping-off point for your own research and exploration."
    }
]

OUTPUT_DIR = "ai-engineering-summary/public/audio"

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
    if not ELEVENLABS_API_KEY:
        print("Error: ELEVENLABS_API_KEY not found in .env file")
        return
    
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    print(f"Generating audio for Chapter 0: Introduction ({len(CHAPTER_0_NARRATIONS)} scenes)")
    print("-" * 50)
    
    for item in CHAPTER_0_NARRATIONS:
        output_file = os.path.join(OUTPUT_DIR, f"{item['id']}.mp3")
        print(f"Generating: {item['id']}...")
        generate_audio(item["text"], output_file)
    
    print("-" * 50)
    print("Done! Audio files generated for Chapter 0.")

if __name__ == "__main__":
    main()
