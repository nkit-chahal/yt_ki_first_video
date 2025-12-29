import os

audio_dir = "ai-engineering-summary/public/audio"

for i in range(1, 8):
    old_name = os.path.join(audio_dir, f"chapter0_scene{i}.mp3")
    new_name = os.path.join(audio_dir, f"c0_s{i}.mp3")
    
    if os.path.exists(old_name):
        # Remove destination if exists (to avoid error on rename)
        if os.path.exists(new_name):
            os.remove(new_name)
            
        os.rename(old_name, new_name)
        print(f"Renamed {old_name} -> {new_name}")
    else:
        print(f"File not found: {old_name}")

print("Done renaming Chapter 0 files.")
