import os
import json
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def generate_advisory(user_input, premium):

    # Read KB
    with open(
        "health_insurance_kb.txt",
        "r",
        encoding="utf-8"
    ) as f:
        kb = f.read()

    prompt = f"""
You are an expert Indian health insurance advisor.

Use ONLY the knowledge base below.

KNOWLEDGE BASE:
{kb}

USER PROFILE:
{user_input}

PREDICTED PREMIUM:
₹{premium}

Generate personalized advice.

Return ONLY valid JSON:

{{
    "recommended_cover": "",
    "premium_factors": [],
    "reduce_premium": [],
    "buying_advice": [],
    "summary": ""
}}

Do not include markdown.
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.3
    )

    content = response.choices[0].message.content

    try:
        return json.loads(content)
    except:
        return {
            "summary": content
        }