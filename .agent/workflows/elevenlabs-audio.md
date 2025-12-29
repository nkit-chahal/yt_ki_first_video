---
description: How to generate audio using ElevenLabs API
---

# Audio Generation with ElevenLabs

## Default Voice ID
**IMPORTANT**: Always use this voice ID for ALL audio generation unless the user explicitly requests a different voice:

```
Voice ID: UgBBYS2sOqTuMpoF3BR0
```

This is the user's preferred voice. Do NOT change it without explicit user request.

## ElevenLabs API Configuration

```python
VOICE_ID = "UgBBYS2sOqTuMpoF3BR0"
API_URL = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"

# Recommended model and settings
model_id = "eleven_flash_v2_5"
voice_settings = {
    "stability": 0.5,
    "similarity_boost": 0.75
}
```

## API Key
The API key should be stored in `.env` file as:
```
ELEVENLABS_API_KEY=your_key_here
```

## Standard Python Script Template

```python
import os
import requests
from dotenv import load_dotenv

load_dotenv()

ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY")
VOICE_ID = "UgBBYS2sOqTuMpoF3BR0"  # User's preferred voice - DO NOT CHANGE
API_URL = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"

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
        print(f"✅ Audio saved to {filename}")
        return True
    else:
        print(f"❌ Error: {response.status_code} - {response.text}")
        return False
```

## Running the Script

// turbo
```bash
python generate_audio.py
```
