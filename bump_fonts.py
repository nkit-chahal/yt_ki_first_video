import os
import re

# Define the font bump mapping
# We want aggressive scaling for mobile readability
MAPPING = {
    r'text-xs': 'text-sm',
    r'text-sm': 'text-lg',
    r'text-base': 'text-xl',
    r'text-lg': 'text-2xl',
    r'text-xl': 'text-3xl',      # Significant bump
    r'text-2xl': 'text-4xl',
    r'text-3xl': 'text-5xl',
    r'text-4xl': 'text-6xl',
    r'text-5xl': 'text-7xl',
    r'text-6xl': 'text-8xl',
    r'text-7xl': 'text-9xl',
}

# Directories to process
TARGET_DIRS = [
    r'ai-engineering-summary/src/chapters'
]

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # We need to apply replacements carefully to avoid double-replacing (e.g. text-xl -> text-3xl -> text-5xl)
    # So we should process from largest to smallest, or use a customized tokenizer.
    # Actually, simpler: finding all matches and replacing them in one go? 
    # Or just simpler:
    # 1. Replace all current classes with a temporary placeholder
    # 2. Replace placeholders with new classes
    
    # Let's map e.g. text-xl -> __TEMP_TEXT_XL__ -> text-3xl
    
    placeholders = {}
    
    # Step 1: To Placeholders
    for old, new in MAPPING.items():
        placeholder = f"__TEMP_{old.upper().replace('-', '_')}__"
        placeholders[placeholder] = new
        # Use word boundaries to avoid replacing substrings (e.g. context-xl)
        # Regex: \btext-xl\b
        content = re.sub(rf'\b{old}\b', placeholder, content)
        
    # Step 2: From Placeholders to New Values
    for placeholder, new in placeholders.items():
        content = content.replace(placeholder, new)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {filepath}")
        return True
    return False

def main():
    count = 0
    for folder in TARGET_DIRS:
        for root, dirs, files in os.walk(folder):
            for file in files:
                if file.endswith('.jsx'):
                    filepath = os.path.join(root, file)
                    if process_file(filepath):
                        count += 1
                        
    print(f"Done! Updated {count} files.")

if __name__ == "__main__":
    main()
