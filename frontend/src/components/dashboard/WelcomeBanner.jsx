import { CalendarDays, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WelcomeBanner() {

    const navigate = useNavigate();

    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
    });

    return (
        <div className="relative overflow-hidden rounded-2xl bg-primary-dark px-9 py-10 text-white">

            <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-white/5" />

            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs text-white/70">
                        <CalendarDays size={13} />
                        {today}
                    </div>

                    <h1 className="mt-5 font-display text-4xl font-medium leading-tight">
                        Welcome back
                    </h1>

                    <p className="mt-4 text-[15px] leading-7 text-white/70">
                        Your wellbeing journey continues today. Complete your
                        daily check-in and let CampusWell AI generate
                        personalized recommendations.
                    </p>
                </div>

                <button
                    onClick={() => navigate("/assessment")}
                    className="group inline-flex items-center gap-2.5 self-start rounded-xl bg-white px-5 py-3 text-sm font-medium text-primary-dark transition-transform duration-200 hover:-translate-y-[1px]"
                >
                    Start today's assessment
                    <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>

            </div>
        </div>
    );
}
