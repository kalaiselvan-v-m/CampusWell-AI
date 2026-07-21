import Card from "../common/Card";

export default function AssessmentSummary() {

    const assessments = [
        { title: "Stress level", score: 72 },
        { title: "Sleep quality", score: 88 },
        { title: "Emotional balance", score: 81 }
    ];

    return (
        <Card>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
                Assessment
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium text-ink">
                Latest results
            </h2>

            <div className="mt-8 space-y-6">
                {assessments.map((item) => (
                    <div key={item.title}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                            <span className="font-medium text-ink">{item.title}</span>
                            <span className="font-data text-ink-soft">{item.score}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-surface-sunken">
                            <div
                                className="h-full rounded-full bg-primary transition-all duration-700"
                                style={{ width: `${item.score}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
