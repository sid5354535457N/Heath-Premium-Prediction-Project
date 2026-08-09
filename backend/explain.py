def explain_premium(input_dict):

    explanations = []

    if input_dict["Smoking Status"] == "Regular":
        explanations.append({
            "factor": "Smoking",
            "impact": "High",
            "reason": "Regular smoking increases health risks."
        })

    if input_dict["BMI Category"] == "Obesity":
        explanations.append({
            "factor": "BMI",
            "impact": "High",
            "reason": "Obesity increases claim probability."
        })

    if input_dict["Age"] > 45:
        explanations.append({
            "factor": "Age",
            "impact": "Medium",
            "reason": "Premiums generally increase with age."
        })

    if input_dict["Medical History"] != "No Disease":
        explanations.append({
            "factor": "Medical History",
            "impact": "High",
            "reason": f"{input_dict['Medical History']} increases risk."
        })

    return explanations