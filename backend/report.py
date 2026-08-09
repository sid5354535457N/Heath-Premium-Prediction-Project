from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    PageBreak
)
from reportlab.lib.styles import getSampleStyleSheet


def generate_report(
        user_data,
        premium,
        advisory,
        filename="report.pdf"
):

    doc = SimpleDocTemplate(filename)

    styles = getSampleStyleSheet()

    elements = []

    elements.append(
        Paragraph(
            "InsuraWise AI - Health Insurance Report",
            styles["Title"]
        )
    )

    elements.append(Spacer(1, 20))

    elements.append(
        Paragraph(
            f"<b>Predicted Premium:</b> ₹{premium}",
            styles["Heading2"]
        )
    )

    elements.append(Spacer(1, 15))

    elements.append(
        Paragraph(
            "<b>User Profile</b>",
            styles["Heading2"]
        )
    )

    for key, value in user_data.items():
        elements.append(
            Paragraph(
                f"{key}: {value}",
                styles["BodyText"]
            )
        )

    elements.append(Spacer(1, 20))

    elements.append(
        Paragraph(
            "<b>AI Summary</b>",
            styles["Heading2"]
        )
    )

    elements.append(
        Paragraph(
            advisory.get(
                "summary",
                "No summary available."
            ),
            styles["BodyText"]
        )
    )

    elements.append(Spacer(1, 20))

    elements.append(
        Paragraph(
            f"<b>Recommended Cover:</b> {advisory.get('recommended_cover', '')}",
            styles["BodyText"]
        )
    )

    for title, items in [
        ("Premium Factors", advisory.get("premium_factors", [])),
        ("Reduce Premium", advisory.get("reduce_premium", [])),
        ("Buying Advice", advisory.get("buying_advice", []))
    ]:

        elements.append(Spacer(1, 10))

        elements.append(
            Paragraph(
                f"<b>{title}</b>",
                styles["Heading3"]
            )
        )

        for item in items:
            elements.append(
                Paragraph(
                    f"• {item}",
                    styles["BodyText"]
                )
            )

    doc.build(elements)

    return filename