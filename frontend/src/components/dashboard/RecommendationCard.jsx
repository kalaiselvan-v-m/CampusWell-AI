import { Sparkles, ArrowRight } from "lucide-react";

export default function RecommendationCard() {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-primary-dark px-9 py-9 text-white">

            <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-accent/10" />

            <div className="relative z-10">
                <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                        <Sparkles size={18} className="text-accent" />
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-white/50">
                            Personalized AI
                        </p>
                        <h2 className="font-display text-xl font-medium">
                            Today's recommendation
                        </h2>
                    </div>
                </div>

                <p className="mt-6 max-w-2xl text-[15px] leading-8 text-white/70">
                    Based on your recent wellness assessment, mood trends, and
                    sleep quality, we recommend a{" "}
                    <span className="font-medium text-white">15-minute walk</span>,
                    staying hydrated throughout the day, and a{" "}
                    <span className="font-medium text-white">5-minute breathing exercise</span>{" "}
                    before bedtime.
                </p>

                <button className="group mt-7 inline-flex items-center gap-2.5 rounded-xl bg-white px-5 py-3 text-sm font-medium text-primary-dark transition-transform duration-200 hover:-translate-y-[1px]">
                    View wellness plan
                    <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
            </div>
        </div>
    );
}
