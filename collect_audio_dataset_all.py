import os
import json
import shutil
import glob
import csv

# Configuration
SOURCE_ROOT = r'D:\YT\vid2\yt_ki_first_video'
DEST_DIR = r'D:\YT\vid2\yt_ki_first_video\deepseek-audio-dataset'
DEST_CSV = os.path.join(DEST_DIR, 'dataset.csv')

def setup_destination():
    if not os.path.exists(DEST_DIR):
        os.makedirs(DEST_DIR)
        print(f"Created directory: {DEST_DIR}")
    
    # Initialize CSV if it doesn't exist (append mode later, but need headers if new)
    if not os.path.exists(DEST_CSV):
        with open(DEST_CSV, 'w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow(['audio_file', 'transcription'])

def find_audio_file(project_path, scene_id):
    """
    Search for audio file in likely locations.
    Returns absolute path if found, else None.
    """
    # Common patterns for audio storage
    search_patterns = [
        os.path.join(project_path, 'public', 'audio', f'scene{scene_id}.mp3'),
        os.path.join(project_path, 'audio', f'scene{scene_id}.mp3'),
        os.path.join(project_path, 'public', f'scene{scene_id}.mp3'),
        os.path.join(project_path, 'src', 'assets', 'audio', f'scene{scene_id}.mp3'),
        os.path.join(project_path, f'scene{scene_id}.mp3'),
    ]
    
    for path in search_patterns:
        if os.path.exists(path):
            return path
    
    return None

def process_narration_file(narration_path):
    project_dir = os.path.dirname(narration_path)
    project_name = os.path.basename(project_dir)
    
    # Skip the destination folder itself
    if project_name == 'deepseek-audio-dataset':
        return

    print(f"Processing project: {project_name}")
    
    try:
        with open(narration_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        scenes_data = []
        
        # Schema 1: Array of objects [{scene: 1, text: "..."}] (e.g. python-riddle-shorts)
        if isinstance(data, list):
            for item in data:
                if 'scene' in item and 'text' in item:
                    scenes_data.append({
                        'id': item['scene'],
                        'text': item['text']
                    })
        
        # Schema 2: Object with scenes key { "scenes": [...] } (e.g. deepseek-paper-reel)
        elif isinstance(data, dict):
            # Check for "scenes" array
            if 'scenes' in data and isinstance(data['scenes'], list):
                for item in data['scenes']:
                    sid = item.get('scene')
                    # Text might be 'narration' (array or string) or 'text'
                    text = item.get('narration') or item.get('text')
                    
                    if isinstance(text, list):
                        text = " ".join(text)
                        
                    if sid is not None and text:
                        scenes_data.append({
                            'id': sid,
                            'text': text
                        })
    except Exception as e:
        print(f"Error parsing {narration_path}: {e}")
        return

    # Process extracted scenes
    new_records = []
    
    for scene in scenes_data:
        scene_id = scene['id']
        text = scene['text']
        
        audio_path = find_audio_file(project_dir, scene_id)
        
        if audio_path:
            # Create new filename: projectname_sceneX.mp3
            new_filename = f"{project_name}_scene{scene_id}.mp3"
            dest_path = os.path.join(DEST_DIR, new_filename)
            
            # Copy file
            try:
                if not os.path.exists(dest_path):
                    shutil.copy2(audio_path, dest_path)
                    print(f"  Copied: {new_filename}")
                else:
                    print(f"  Skipped (exists): {new_filename}")
                
                new_records.append([new_filename, text])
                
            except Exception as e:
                print(f"  Error copying {audio_path}: {e}")
        else:
            # Silent skip or verbose? Silent for now to avoid clutter
            pass

    # Append to CSV
    if new_records:
        with open(DEST_CSV, 'a', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerows(new_records)
            print(f"  Added {len(new_records)} records to CSV")

def main():
    setup_destination()
    
    # Find all narration.json files recursively
    # glob.glob(..., recursive=True) might be slow on huge dirs, but fine here
    search_pattern = os.path.join(SOURCE_ROOT, '**', 'narration.json')
    narration_files = glob.glob(search_pattern, recursive=True)
    
    print(f"Found {len(narration_files)} narration files.")
    
    for f in narration_files:
        process_narration_file(f)
        
    print("\nDone! Dataset expanded.")

if __name__ == "__main__":
    main()
