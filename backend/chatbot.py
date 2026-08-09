import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def ask_chatbot(query, user_profile=None):

    with open(
        "health_insurance_kb.txt",
        "r",
        encoding="utf-8"
    ) as f:
        kb = f.read()

    profile_text = ""

    if user_profile:
        profile_text = f"""
USER PROFILE:
{user_profile}
"""

    system_prompt = f"""
You are an expert Indian Health Insurance Assistant.

Knowledge Base:
{kb}

{profile_text}

Rules:
1. Use ONLY the knowledge base.
2. Personalize answers using the user profile if available.
3. If information is unavailable, say:
   "I do not have that information in the policy document."
4. Never hallucinate or invent policy details.
5. Mention if smoking, BMI, age, or medical history affect premiums.
6. Mention 18% GST where relevant.
7. Final claim approval depends on insurer terms.
8. If a user profile is provided, give personalized advice.
9. Explain how age, BMI, smoking, and medical history affect premiums.
10. Mention when higher coverage or super top-up plans may be useful.
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": system_prompt
            },
            {
                "role": "user",
                "content": query
            }
        ],
        temperature=0.2,
        max_tokens=500
    )

    return response.choices[0].message.content