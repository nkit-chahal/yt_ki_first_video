import os

audio_dir = r"c:\Users\Pc\Desktop\prerna\why-technical-indicators-fail-shorts\public\audio"

# Get all files sorted by timestamp in filename
files = sorted([f for f in os.listdir(audio_dir) if f.startswith("ElevenLabs")])

# Rename to scene_1.mp3, scene_2.mp3, etc.
for i, old_name in enumerate(files, start=1):
    new_name = f"scene_{i}.mp3"
    old_path = os.path.join(audio_dir, old_name)
    new_path = os.path.join(audio_dir, new_name)
    os.rename(old_path, new_path)
    print(f"Renamed: {old_name[:50]}... -> {new_name}")

print(f"\nDone! Renamed {len(files)} files.")
