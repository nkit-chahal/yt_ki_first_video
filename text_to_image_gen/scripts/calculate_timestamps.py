import os
import glob
from mutagen.mp3 import MP3

audio_dir = r"d:\YT\vid2\yt_ki_first_video\text_to_image_gen\public\audio"
files = sorted(glob.glob(os.path.join(audio_dir, "narration_*.mp3")), key=lambda x: int(os.path.basename(x).split('_')[1].split('.')[0]))

total_duration = 0
timestamps = []

# Define section start indices based on narration.js
# Intro: 0
# Prologue: 8
# Part I (GANs): 14
# Part II (Diffusion): 30
# Part III (Pipeline): 45
# Part IV (Control): 74
# Part V (Future): 85
# Part VI (Interview): 92
# Summary: 114

sections = {
    0: "Introduction",
    8: "Part I: Why GANs Failed",
    30: "Part II: The Intuition of Diffusion",
    45: "Part III: The Modern Pipeline",
    74: "Part IV: Control Systems",
    85: "Part V: The Future",
    92: "Part VI: MAANG Interview Questions",
    114: "Recap & Subscribe"
}

print("Calculating timestamps...\n")

for i, file_path in enumerate(files):
    try:
        audio = MP3(file_path)
        duration = audio.info.length
        
        if i in sections:
            minutes = int(total_duration // 60)
            seconds = int(total_duration % 60)
            print(f"{minutes}:{seconds:02d} - {sections[i]}")
            
        total_duration += duration
    except Exception as e:
        print(f"Error reading {file_path}: {e}")

print(f"\nTotal Video Duration: {int(total_duration // 60)}:{int(total_duration % 60):02d}")
