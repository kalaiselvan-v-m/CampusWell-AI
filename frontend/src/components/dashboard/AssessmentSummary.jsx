export default function AssessmentSummary() {

    const assessments = [
        {
            title: "Stress Level",
            score: 72,
            color: "#EE4C7C"
        },
        {
            title: "Sleep Quality",
            score: 88,
            color: "#9A1750"
        },
        {
            title: "Emotional Balance",
            score: 81,
            color: "#5D001E"
        }
    ];

    return (

        <div className="rounded-3xl border border-[#E3AFBC] bg-white p-8 shadow-sm">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm uppercase tracking-[0.25em] text-[#9A1750]">

                        Assessment

                    </p>

                    <h2 className="mt-2 text-3xl font-black text-[#5D001E]">

                        Latest Results

                    </h2>

                </div>

            </div>

            <div className="mt-10 space-y-8">

                {assessments.map((item) => (

                    <div key={item.title}>

                        <div className="mb-3 flex items-center justify-between">

                            <span className="font-semibold text-[#5D001E]">

                                {item.title}

                            </span>

                            <span className="font-bold text-[#9A1750]">

                                {item.score}%

                            </span>

                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-[#E3AFBC]">

                            <div
                                className="h-full rounded-full transition-all duration-700"
                                style={{
                                    width: `${item.score}%`,
                                    backgroundColor: item.color
                                }}
                            />

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}