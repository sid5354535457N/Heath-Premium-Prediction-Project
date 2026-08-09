# 🏥 AI-Powered Health Insurance Premium Prediction and Personalized Advisory Platform

An AI-powered full-stack **InsurTech platform** that predicts health insurance premiums using Machine Learning and provides personalized insurance advisory, risk assessment, coverage recommendations, premium reduction suggestions, and an AI-powered chatbot.

The platform combines **Machine Learning, Generative AI, RAG, FastAPI, Next.js, and database technologies** to provide an end-to-end health insurance decision-support system.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Problem Statement](#-problem-statement)
- [Our Solution](#-our-solution)
- [Objectives](#-objectives)
- [Key Features](#-key-features)
- [System Workflow](#-system-workflow)
- [System Architecture](#-system-architecture)
- [Machine Learning Approach](#-machine-learning-approach)
- [AI Advisory](#-ai-advisory)
- [AI Chatbot and RAG](#-ai-chatbot-and-rag)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Project](#-running-the-project)
- [API Endpoints](#-api-endpoints)
- [Team Contributions](#-team-contributions)
- [Dataset and Model Limitations](#-dataset-and-model-limitations)
- [Future Scope](#-future-scope)
- [Security](#-security)
- [Disclaimer](#-disclaimer)
- [Acknowledgement](#-acknowledgement)

---

# 📖 Project Overview

Health insurance premiums depend on several factors including age, income, number of dependants, BMI, smoking habits, medical history, insurance plan, employment status, genetic risk, and region.

However, users often receive only a premium quotation without understanding:

- Why their premium is high
- Which factors are affecting the premium
- How they can potentially reduce their premium
- How much insurance coverage they may require
- What factors they should consider before purchasing a policy

To address this problem, we developed the **AI-Powered Health Insurance Premium Prediction and Personalized Advisory Platform**.

The platform combines a Machine Learning prediction engine with Generative AI to provide users with both a predicted premium and personalized insurance guidance.

---

# ❗ Problem Statement

Health insurance selection can be complicated for users because premium calculation depends on multiple demographic, financial, and health-related factors.

Traditional insurance platforms generally focus on displaying insurance plans or premium quotations. They do not necessarily provide personalized explanations about:

- Factors influencing the premium
- Recommended coverage
- Individual risk
- Premium reduction strategies
- Insurance purchasing considerations

There is also a lack of easily accessible insurance assistance for users who want to ask questions in natural language.

Therefore, there is a need for an intelligent system that combines **premium prediction, risk assessment, personalized advisory, and conversational AI** in a single platform.

---

# 💡 Our Solution

Our platform provides a complete insurance decision-support workflow.

The user enters personal, financial, and health-related information.

The system then:

1. Processes the user's input.
2. Selects an appropriate Machine Learning model.
3. Predicts the expected health insurance premium.
4. Calculates a simplified risk assessment.
5. Sends relevant information to the AI advisory engine.
6. Generates personalized insurance recommendations.
7. Identifies factors affecting the premium.
8. Provides suggestions for potentially reducing premium costs.
9. Recommends an appropriate coverage range.
10. Allows users to ask insurance-related questions through an AI chatbot.
11. Generates a downloadable PDF advisory report.
12. Stores prediction history for future reference.

---

# 🎯 Objectives

The main objectives of the project are:

- Predict health insurance premiums using Machine Learning.
- Build an age-based ML prediction pipeline.
- Provide personalized insurance advisory.
- Explain the factors influencing premium.
- Provide risk assessment.
- Recommend suitable insurance coverage.
- Suggest ways to potentially reduce premium costs.
- Provide an AI-powered insurance chatbot.
- Implement a knowledge-base-based RAG approach.
- Provide BMI calculation.
- Generate downloadable PDF reports.
- Maintain prediction history.
- Build a complete full-stack InsurTech application.

---

# ✨ Key Features

## 💰 1. Health Insurance Premium Prediction

The platform predicts the expected insurance premium based on user-provided information such as:

- Age
- Number of dependants
- Income
- Genetic risk
- Insurance plan
- Employment status
- Gender
- Marital status
- BMI category
- Smoking status
- Region
- Medical history

---

## 🤖 2. Personalized AI Advisory

After predicting the premium, the platform generates personalized advisory information including:

- AI summary
- Recommended coverage
- Premium-influencing factors
- Premium reduction suggestions
- Insurance buying advice

The advisory is generated according to the user's profile and insurance knowledge base.

---

## 📊 3. Risk Assessment

The system calculates a simplified risk level based on important user attributes.

The purpose is to help users understand their overall insurance risk profile.

---

## 💬 4. AI Insurance Chatbot

Users can ask insurance-related questions using natural language.

Example questions:

```text
How can I reduce my insurance premium?

What factors affect my premium?

How much insurance coverage should I consider?

What should I check before buying health insurance?
