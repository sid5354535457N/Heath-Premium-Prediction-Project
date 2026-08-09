from fastapi import FastAPI
from pydantic import BaseModel
from prediction_helper import predict
from ai_advisory import generate_advisory
from bmi import calculate_bmi
from report import generate_report
from chatbot import ask_chatbot
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from risk import calculate_risk
from explain import explain_premium
from database import SessionLocal
from models import PredictionHistory


app = FastAPI(
    title="InsuraWise AI",
    description="Health Insurance Premium Prediction API",
    version="1.0"
)



app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class UserInput(BaseModel):
    Age: int
    Number_of_Dependants: int
    Income_in_Lakhs: float
    Genetical_Risk: int
    Insurance_Plan: str
    Employment_Status: str
    Gender: str
    Marital_Status: str
    BMI_Category: str
    Smoking_Status: str
    Region: str
    Medical_History: str



class ChatRequest(BaseModel):
    query: str
    user_profile: dict | None = None


@app.get("/")
def home():
    return {
        "message": "InsuraWise AI API Running"
    }


@app.post("/predict")
def predict_premium(data: UserInput):

    input_dict = {
        'Age': data.Age,
        'Number of Dependants': data.Number_of_Dependants,
        'Income in Lakhs': data.Income_in_Lakhs,
        'Genetical Risk': data.Genetical_Risk,
        'Insurance Plan': data.Insurance_Plan,
        'Employment Status': data.Employment_Status,
        'Gender': data.Gender,
        'Marital Status': data.Marital_Status,
        'BMI Category': data.BMI_Category,
        'Smoking Status': data.Smoking_Status,
        'Region': data.Region,
        'Medical History': data.Medical_History
    }

    premium = predict(input_dict)

    advisory = generate_advisory(
        input_dict,
        premium
    )

    risk = calculate_risk(input_dict)

    db = SessionLocal()

    history = PredictionHistory(
        age=data.Age,
        premium=float(premium),
        risk_level=risk["level"],
        smoking=data.Smoking_Status,
        medical_history=data.Medical_History
    )

    db.add(history)
    db.commit()
    db.close()

    explanation = explain_premium(input_dict)

    

    return {
        "predicted_premium": premium,
        "advisory": advisory,
        "risk": risk,
        "explanation": explanation
    }

@app.get("/bmi")
def bmi(weight: float, height: float):

    result = calculate_bmi(
        weight=weight,
        height=height
    )

    return result

@app.post("/generate-report")
def generate_pdf(data: UserInput):

    input_dict = {
        'Age': data.Age,
        'Number of Dependants': data.Number_of_Dependants,
        'Income in Lakhs': data.Income_in_Lakhs,
        'Genetical Risk': data.Genetical_Risk,
        'Insurance Plan': data.Insurance_Plan,
        'Employment Status': data.Employment_Status,
        'Gender': data.Gender,
        'Marital Status': data.Marital_Status,
        'BMI Category': data.BMI_Category,
        'Smoking Status': data.Smoking_Status,
        'Region': data.Region,
        'Medical History': data.Medical_History
    }

    premium = predict(input_dict)

    advisory = generate_advisory(
        input_dict,
        premium
    )

    filename = generate_report(
        input_dict,
        premium,
        advisory
    )

    return FileResponse(
        filename,
        media_type="application/pdf",
        filename="InsuraWise_Report.pdf"
    )


@app.post("/chat")
def chat(data: ChatRequest):

    answer = ask_chatbot(data.query,  data.user_profile)

    return {
        "question": data.query,
        "answer": answer
    }

@app.get("/history")
def get_history():

    db = SessionLocal()

    records = db.query(
        PredictionHistory
    ).all()

    result = []

    for row in records:

        result.append({
            "id": row.id,
            "age": row.age,
            "premium": row.premium,
            "risk_level": row.risk_level,
            "smoking": row.smoking,
            "medical_history": row.medical_history
        })

    db.close()

    return result
    