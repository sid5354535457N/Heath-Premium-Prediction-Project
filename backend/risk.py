def calculate_risk(input_dict):

    score = 0

    age = input_dict["Age"]
    smoking = input_dict["Smoking Status"]
    bmi = input_dict["BMI Category"]
    medical = input_dict["Medical History"]

    # Age
    if age > 45:
        score += 2
    elif age > 30:
        score += 1

    # Smoking
    if smoking == "Regular":
        score += 3
    elif smoking == "Occasional":
        score += 1

    # BMI
    if bmi == "Obesity":
        score += 3
    elif bmi == "Overweight":
        score += 1

    # Medical History
    if medical != "No Disease":
        score += 3

    if score <= 3:
        return {
            "level": "Low Risk",
            "color": "green",
            "score": score
        }

    elif score <= 6:
        return {
            "level": "Medium Risk",
            "color": "yellow",
            "score": score
        }

    return {
        "level": "High Risk",
        "color": "red",
        "score": score
    }