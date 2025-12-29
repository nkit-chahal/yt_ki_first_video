import requests
import os

# ElevenLabs API
API_KEY = "fed1dad6f58e5d28a6316695944055986974852dda14da2d9bd64641bbea65a1"
VOICE_ID = "UgBBYS2sOqTuMpoF3BR0"
MODEL_ID = "eleven_multilingual_v2"
OUTPUT_DIR = r"c:\Users\Pc\Desktop\prerna\ai-tiers-video\public\audio"

# Segments based on the narration
SEGMENTS = {
    # Chapter 1: Hook
    "1_1": "Everyone is building an AI right now.",
    "1_2": "Most of these AI startups, they won't last more than 18 months.",
    "1_3": "So where is the real money being made in AI? The six tiers of AI. Here's your five-minute MBA in AI economics.",
    
    # Chapter 2: Tier 0 - Energy
    "2_1": "Tier zero. AI lives in the cloud, but it feeds off electricity.",
    "2_2": "Data centers are projected to consume more energy than entire countries.",
    "2_3": "So if I was you, what would I do? Buying or starting businesses that service energy infrastructure. Like Hanley Energy, which builds data centers. The play? If you're not going to build the data center, become the specialist. Like the electrical contractor for them.",
    
    # Chapter 3: Tier 1 - Chips
    "3_1": "Tier one is chips. And whoever controls chips, controls global innovation.",
    "3_2": "Nvidia, AMD, and Intel now control the market.",
    "3_3": "But to play in this space, you need billions. Who's building the hundred billion dollar fabs? It's them. So are you going to buy a stock? I want to know how you can become rich without buying a stock.",
    
    # Chapter 4: Tier 2 - Data Centers
    "4_1": "Tier two: Data Centers. This is the plumbing layer. Think of this as the real estate for the digital world.",
    "4_2": "But data centers are essentially huge warehouses full of servers. They get hot, they get dirty. They need maintenance. They need cleaning.",
    "4_3": "So the play is specialized service companies that clean data centers and clean rooms. Companies like Data Clean or Promera.",
    
    # Chapter 5: Tier 3 - Foundation Models
    "5_1": "Tier three: Foundation Models. This is OpenAI, Anthropic, Google. These are the brains.",
    "5_2": "But look at this chart. OpenAI is projected to lose 5 billion dollars this year. They are burning cash faster than you think.",
    "5_3": "Unless you have billions to burn, stay out of this layer. This is a game of kings.",
    
    # Chapter 6: Tier 4 - Infrastructure
    "6_1": "Tier four: Infrastructure. This is the picks and shovels of the software world.",
    "6_2": "Companies like Stripe, Datadog, MongoDB that help other software run.",
    "6_3": "This is a great place to be if you're a technical founder. But if you're not, it's hard to compete.",
    
    # Chapter 7: Tier 5 - Apps
    "7_1": "Tier five: Apps. This is the shiny stuff. The chatbots, the image generators.",
    "7_2": "Most people play in here. But most apps are just wrappers around someone else's model.",
    "7_3": "You have platform risk. If OpenAI updates their model to do what you do, you're cooked.",
    
    # Chapter 8: The Real Opportunity
    "8_1": "So where is the opportunity for normal people?",
    "8_2": "It's not building AI, it's using AI. This is a fancy way of saying make more money in your business by using these new tools.",
    "8_3": "Instead of hiring 10 people for customer service, use AI. Instead of hiring writers, use AI. This is how you compete with the big guys. You move faster and you use their tools against them.",
    
    # Chapter 9: CTA
    "9_1": "AutoDS 30 day trial is just a buck. One dollar. AutoDS will let you find products for your store. It automates shipping and order fulfillment. And it's a part of this tool stack for you to make money using AI. It's that simple.",
    "9_2": "And if you want to learn exactly how to do this, I'm teaching a free workshop on how to use AI to build your store. Click the link in the description to register. It's free. See you there.",
}

def generate_audio(segment_id, text):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"
    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": API_KEY
    }
    data = {
        "text": text,
        "model_id": MODEL_ID,
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.75
        }
    }
    
    response = requests.post(url, json=data, headers=headers)
    
    if response.status_code == 200:
        output_path = os.path.join(OUTPUT_DIR, f"{segment_id}.mp3")
        with open(output_path, "wb") as f:
            f.write(response.content)
        return True, output_path
    else:
        return False, response.text

if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    success_count = 0
    fail_count = 0
    
    for segment_id, text in SEGMENTS.items():
        print(f"Generating {segment_id}: {text[:50]}...")
        success, result = generate_audio(segment_id, text)
        if success:
            print(f"  [OK] Saved: {result}")
            success_count += 1
        else:
            print(f"  [FAIL] {result}")
            fail_count += 1
    
    print(f"\nDone! Success: {success_count}, Failed: {fail_count}")
