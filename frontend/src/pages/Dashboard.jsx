import DashboardLayout from "../components/layout/DashboardLayout";

import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import WellnessScoreCard from "../components/dashboard/WellnessScoreCard";
import MoodCard from "../components/dashboard/MoodCard";
import QuickActions from "../components/dashboard/QuickActions";
import AssessmentSummary from "../components/dashboard/AssessmentSummary";
import RecommendationCard from "../components/dashboard/RecommendationCard";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <section className="mx-auto w-full max-w-6xl space-y-6 px-8 py-8 animate-fade-up">
                <WelcomeBanner />
                <div className="grid gap-6 lg:grid-cols-2">
                    <WellnessScoreCard />
                    <MoodCard />
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                    <AssessmentSummary />
                    <QuickActions />
                </div>
                <RecommendationCard />
            </section>
        </DashboardLayout>
    );
}
