# 🏥 AI-Powered Health Insurance Premium Prediction and Personalized Advisory Platform

An AI-powered full-stack platform that predicts health insurance premiums using Machine Learning and provides personalized insurance advisory, risk assessment, coverage recommendations, premium reduction suggestions, and an AI-powered chatbot.

The project combines **Machine Learning, Generative AI, RAG, FastAPI, and Next.js** to create an end-to-end health insurance decision-support platform.

---

## 📌 Project Overview

Choosing a health insurance policy can be difficult because users often do not understand:

- Why their premium is high
- Which personal factors affect the premium
- How much insurance coverage they may need
- How they can potentially reduce their premium
- Which factors they should consider before purchasing a policy
- How to understand common insurance-related terms

Our platform addresses these problems by combining a Machine Learning premium prediction system with an AI-powered personalized advisory engine.

The user provides their personal, financial, and health-related information, and the platform:

1. Predicts the expected insurance premium.
2. Calculates a risk level.
3. Generates personalized insurance advisory.
4. Recommends an appropriate coverage range.
5. Identifies factors affecting the premium.
6. Provides suggestions to potentially reduce premium costs.
7. Provides insurance buying advice.
8. Allows users to ask insurance-related questions through an AI chatbot.
9. Generates a downloadable PDF advisory report.
10. Provides BMI calculation and prediction history.

---

# 🎯 Problem Statement

Health insurance premiums depend on multiple factors such as age, income, BMI, smoking status, medical history, dependants, insurance plan, and other personal characteristics.

However, users generally receive a premium quotation without fully understanding the factors behind the price or what coverage would be appropriate for their situation.

Traditional insurance platforms often focus on providing policy information or quotations rather than combining:

- Premium prediction
- Risk assessment
- Personalized recommendations
- AI-based assistance
- Insurance education

Therefore, we developed a unified AI-powered platform that acts as a **decision-support system for health insurance users**.

---

# 💡 Proposed Solution

Our solution consists of two major intelligent components:

### 1. Machine Learning Premium Prediction

An XGBoost-based regression system predicts the expected health insurance premium based on user information.

To handle differences in premium patterns across age groups, we developed a **dual-model prediction pipeline**:

```text
User Age
   │
   ├── 18–25 ──> XGBoost Model 1
   │
   └── 26+ ────> XGBoost Model 2
