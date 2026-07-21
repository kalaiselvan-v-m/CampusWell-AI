import { TrendingUp } from "lucide-react";
import Card from "../common/Card";

export default function WellnessScoreCard() {

    const score = 84;

    return (
        <Card>
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
                        Overall wellness
                    </p>
                    <span className="mt-4 inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary-dark">
                        Excellent progress
                    </span>
                </div>

                {/* Signature element: a slow, ambient "breathing" ring behind
                    the score — the one animated flourish on the page. */}
                <div className="relative flex h-24 w-24 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-accent-soft animate-breathe" />
                    <span className="relative font-data text-3xl font-medium text-ink">
                        {score}%
                    </span>
                </div>
            </div>

            <div className="mt-9">
                <div className="mb-2.5 flex justify-between text-sm">
                    <span className="font-medium text-ink">Weekly progress</span>
                    <span className="font-data text-ink-soft">{score}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-surface-sunken">
                    <div
                        className="h-full rounded-full bg-primary transition-all duration-700"
                        style={{ width: `${score}%` }}
                    />
                </div>
            </div>

            <div className="mt-7 flex items-center justify-between rounded-xl bg-surface-sunken px-5 py-4">
                <div>
                    <p className="text-sm font-medium text-ink">
                        Compared to last week
                    </p>
                    <p className="mt-0.5 text-sm text-ink-soft">
                        You're improving consistently.
                    </p>
                </div>
                <div className="flex items-center gap-1.5 font-data text-sm font-medium text-primary-dark">
                    <TrendingUp size={16} />
                    +6%
                </div>
            </div>
        </Card>
    );
}
