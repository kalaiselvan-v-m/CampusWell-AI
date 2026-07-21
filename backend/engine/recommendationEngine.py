def generate_recommendations(score: int, risk: str):

    recommendations = []

    if risk == "Low":
        recommendations.extend([
            "Maintain your healthy lifestyle.",
            "Continue regular physical activity.",
            "Keep a consistent sleep schedule."
        ])

    elif risk == "Moderate":
        recommendations.extend([
            "Take short study breaks every hour.",
            "Practice mindfulness or meditation for 10 minutes daily.",
            "Talk with friends or family when feeling stressed."
        ])

    elif risk == "High":
        recommendations.extend([
            "Reduce academic overload where possible.",
            "Sleep at least 7–8 hours every night.",
            "Practice breathing exercises twice daily.",
            "Speak with your faculty mentor or counselor."
        ])

    else:
        recommendations.extend([
            "Please contact your college counseling center.",
            "Share your feelings with someone you trust.",
            "Avoid isolating yourself.",
            "Seek professional mental health support."
        ])

    return recommendations