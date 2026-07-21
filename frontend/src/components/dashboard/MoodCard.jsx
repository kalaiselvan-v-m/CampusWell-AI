import { Smile } from "lucide-react";
import Card from "../common/Card";

export default function MoodCard() {

    const mood = "Happy";

    return (
        <Card>
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
                        Mood tracker
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-medium text-ink">
                        Today's mood
                    </h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft">
                    <Smile size={20} strokeWidth={1.75} className="text-accent" />
                </div>
            </div>

            <div className="mt-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3.5 py-1.5 text-sm font-medium text-primary-dark">
                    {mood}
                </span>
                <p className="mt-5 text-[15px] leading-7 text-ink-soft">
                    You're feeling positive today. Keep maintaining healthy
                    habits and take a few moments to appreciate today's
                    progress — every small step contributes to your
                    overall wellbeing.
                </p>
            </div>
        </Card>
    );
}
