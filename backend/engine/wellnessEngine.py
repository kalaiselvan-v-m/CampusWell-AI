from schemas.assessmentSchema import AssessmentCreate

from core.constants import *


def calculate_wellness_score(data: AssessmentCreate):

    score = 100

    score -= data.academic_workload * ACADEMIC_WEIGHT
    score -= data.exam_pressure * EXAM_WEIGHT

    score -= data.stress_level * STRESS_WEIGHT
    score -= data.anxiety_level * ANXIETY_WEIGHT

    score += data.motivation_level * MOTIVATION_WEIGHT
    score += data.physical_activity * PHYSICAL_ACTIVITY_WEIGHT
    score += data.social_interaction * SOCIAL_INTERACTION_WEIGHT

    if GOOD_SLEEP_MIN <= data.sleep_hours <= GOOD_SLEEP_MAX:
        score += GOOD_SLEEP_BONUS

    elif data.sleep_hours < LOW_SLEEP_LIMIT:
        score -= LOW_SLEEP_PENALTY

    score = max(0, min(score, 100))

    if score >= 80:
        risk = "Low"

    elif score >= 60:
        risk = "Moderate"

    elif score >= 40:
        risk = "High"

    else:
        risk = "Critical"

    return score, risk