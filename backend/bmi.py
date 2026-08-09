def calculate_bmi(weight, height):

    bmi = weight / ((height / 100) ** 2)

    bmi = round(bmi, 2)

    if bmi < 18.5:
        category = "Underweight"

    elif bmi < 25:
        category = "Normal"

    elif bmi < 30:
        category = "Overweight"

    else:
        category = "Obesity"

    return {
        "bmi": bmi,
        "category": category
    }