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

            <section className="mx-auto w-full max-w-7xl space-y-8 px-6 py-8">

                <WelcomeBanner />

                <div className="grid gap-8 lg:grid-cols-2">

                    <WellnessScoreCard />

                    <MoodCard />

                </div>

                <div className="grid gap-8 lg:grid-cols-2">

                    <AssessmentSummary />

                    <QuickActions />

                </div>

                <RecommendationCard />

            </section>

        </DashboardLayout>

    );

}