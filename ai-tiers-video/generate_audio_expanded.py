import requests
import os

# ElevenLabs API
API_KEY = "fed1dad6f58e5d28a6316695944055986974852dda14da2d9bd64641bbea65a1"
VOICE_ID = "UgBBYS2sOqTuMpoF3BR0"
MODEL_ID = "eleven_multilingual_v2"
OUTPUT_DIR = r"c:\Users\Pc\Desktop\prerna\ai-tiers-video\public\audio"

# EXPANDED Segments - More detailed narration
SEGMENTS = {
    # Chapter 1: Hook (4 segments)
    "1_1": "Everyone is building an AI right now. Every startup pitch starts with artificial intelligence. Every business plan mentions machine learning.",
    "1_2": "But here's the brutal truth: Most of these AI startups, they won't last more than 18 months. The AI graveyard is filling up fast.",
    "1_3": "So where is the real money being made in AI? It's not where you think. There are six distinct tiers in the AI economy.",
    "1_4": "And understanding these tiers is your five-minute MBA in AI economics. This is where the real wealth is being created. Let me break it down for you.",
    
    # Chapter 2: Tier 0 - Energy (5 segments)
    "2_1": "Let's start at the foundation. Tier zero. Energy infrastructure. AI lives in the cloud, but it feeds off electricity. Massive amounts of electricity.",
    "2_2": "Data centers are projected to consume more energy than entire countries. We're talking about the energy consumption of Argentina. Of Sweden. Just for running AI models.",
    "2_3": "And this creates an enormous opportunity. The problem is simple: AI needs power. Lots of it. And someone has to build that infrastructure.",
    "2_4": "So if I was you, what would I do? I'd look at businesses that service energy infrastructure. Companies like Hanley Energy, which builds data centers. Or energy grid expansion companies.",
    "2_5": "The play? If you're not going to build the data center yourself, become the specialist. The electrical contractor for them. The cooling system installer. The backup power provider. That's where ordinary people can make extraordinary money.",
    
    # Chapter 3: Tier 1 - Chips (5 segments)
    "3_1": "Tier one is chips. Silicon. And whoever controls chips, controls global innovation. This is geopolitical warfare disguised as business.",
    "3_2": "Right now, three companies dominate: Nvidia, AMD, and Intel. Nvidia especially has become a money-printing machine. Their stock went up over 200 percent in a single year.",
    "3_3": "But here's the catch: to play in this space, you need billions. Not millions. Billions. Who's building the hundred billion dollar semiconductor fabs? TSMC. Samsung. Intel.",
    "3_4": "The equipment needed to manufacture these chips costs hundreds of millions of dollars. A single EUV lithography machine from ASML costs 150 million dollars. One machine.",
    "3_5": "So unless you're buying stock, this tier is completely inaccessible. I want to show you how to become rich without just buying stocks. So let's move on.",
    
    # Chapter 4: Tier 2 - Data Centers (5 segments)
    "4_1": "Tier two: Data Centers. This is the plumbing layer. Think of this as the real estate for the digital world. And just like real estate, someone has to maintain it.",
    "4_2": "Data centers are essentially huge warehouses full of servers running 24/7. They get hot. Really hot. They get dirty. Dust is the enemy of electronics.",
    "4_3": "They need constant maintenance. They need specialized cleaning. You can't just send in a regular janitorial crew. These are precision clean rooms.",
    "4_4": "And this is where the opportunity is. Specialized service companies that clean data centers and maintain clean rooms. Companies like Data Clean. Companies like Promera.",
    "4_5": "You could start a regional data center cleaning company. Get certified. Get the right equipment. And service the growing number of data centers in your area. This is a real, accessible business opportunity.",
    
    # Chapter 5: Tier 3 - Foundation Models (5 segments)
    "5_1": "Tier three: Foundation Models. This is OpenAI. Anthropic. Google DeepMind. These are the brains. The actual AI models everyone uses.",
    "5_2": "But look at the economics. OpenAI is projected to lose 5 billion dollars this year. Five. Billion. Dollars. They are burning cash faster than almost any company in history.",
    "5_3": "Why? Because training these models costs hundreds of millions. GPT-4's training run cost over 100 million dollars. And that's just one training run.",
    "5_4": "Then there's the compute costs. The API costs. The talent costs. They're paying AI researchers 500 thousand to a million dollars a year. Plus stock options.",
    "5_5": "Unless you have billions to burn, stay out of this layer. This is a game of kings. Let Saudi Arabia and Microsoft fight this battle. Move on to where you can actually win.",
    
    # Chapter 6: Tier 4 - Infrastructure (5 segments)
    "6_1": "Tier four: Infrastructure. This is the picks and shovels of the software world. The tools that help other software run better, faster, cheaper.",
    "6_2": "Companies like Stripe for payments. Datadog for monitoring. MongoDB for databases. Cloudflare for CDN and security. These are the backbone companies.",
    "6_3": "This is a great place to be if you're a technical founder. You can build developer tools. API services. Infrastructure software.",
    "6_4": "The business model is beautiful: recurring revenue, high margins, sticky customers. Once a company integrates your infrastructure tool, they rarely leave.",
    "6_5": "But here's the reality: if you're not a technical founder with serious engineering skills, it's extremely hard to compete. You're up against venture-backed teams of ex-Google engineers. So unless you have that background, let's look at better options.",
    
    # Chapter 7: Tier 5 - Apps (5 segments)
    "7_1": "Tier five: Apps. This is the shiny stuff everyone sees. The chatbots. The image generators. The AI assistants. The productivity tools.",
    "7_2": "Most people play in here because it looks accessible. You don't need to build the AI. You just use OpenAI's API or Anthropic's API and build a nice interface.",
    "7_3": "But most apps are just wrappers. Thin layers around someone else's model. And that creates massive platform risk.",
    "7_4": "Here's what happens: you build an AI writing assistant. It gets traction. Then OpenAI updates ChatGPT to do exactly what you do. For free.",
    "7_5": "You're cooked. Your entire business model is gone overnight. This tier is extremely high risk unless you have genuine IP, unique data, or a very specific vertical where you can defend your position.",
    
    # Chapter 8: The Real Opportunity (6 segments)
    "8_1": "So where is the opportunity for normal people? For people without billions in funding or a PhD from MIT?",
    "8_2": "Here's the secret: It's not building AI. It's using AI. Using these new tools to make more money in your existing business, or to start a new business with AI as your competitive advantage.",
    "8_3": "Think about it. Instead of hiring 10 people for customer service at 40 thousand a year each, that's 400 thousand, use AI and hire 2 people to manage the AI. You save 300 thousand a year.",
    "8_4": "Instead of hiring writers, editors, and content creators, use AI to 10x your content output. One person with AI can do the work of ten.",
    "8_5": "This is how you compete with the big guys. You move faster. You have lower costs. You're more agile. You use their tools against them.",
    "8_6": "The companies winning right now aren't the ones building AI. They're the ones using AI to build better businesses. Faster. Cheaper. Smarter.",
    
    # Chapter 9: CTA (3 segments)
    "9_1": "And this is where I want to introduce you to something practical. AutoDS. Their 30 day trial is just a buck. One dollar. This is a perfect example of using AI tools to build a real business.",
    "9_2": "AutoDS will help you find products for your store. It automates shipping and order fulfillment. It's AI-powered dropshipping infrastructure. And it's part of the tool stack you need to make money using AI. It's that simple.",
    "9_3": "And if you want to learn exactly how to do this, I'm teaching a free workshop on how to use AI to build your store from scratch. Click the link in the description to register. It's completely free. No catch. I'll see you there.",
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
