import { Sparkles, ArrowRight } from "lucide-react";

export default function RecommendationCard() {

    return (

        <div className="
            relative
            overflow-hidden
            rounded-3xl
            bg-[#5D001E]
            p-8
            text-white
            shadow-sm
        ">

            {/* Background Decoration */}

            <div className="
                absolute
                -right-20
                -top-20
                h-72
                w-72
                rounded-full
                bg-[#EE4C7C]/15
            " />

            <div className="
                absolute
                -bottom-24
                -left-20
                h-72
                w-72
                rounded-full
                bg-[#E3AFBC]/10
            " />

            <div className="relative z-10">

                <div className="flex items-center gap-4">

                    <div className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#EE4C7C]
                    ">

                        <Sparkles size={26} />

                    </div>

                    <div>

                        <p className="
                            uppercase
                            tracking-[0.25em]
                            text-xs
                            text-[#E3AFBC]
                        ">

                            Personalized AI

                        </p>

                        <h2 className="mt-1 text-3xl font-black">

                            Today's Recommendation

                        </h2>

                    </div>

                </div>

                <p className="
                    mt-8
                    max-w-3xl
                    text-lg
                    leading-9
                    text-[#E3E2DF]
                ">

                    Based on your recent wellness assessment,
                    your mood trends, and your sleep quality,
                    we recommend taking a
                    <span className="font-bold text-[#EE4C7C]">
                        {" "}15-minute walk
                    </span>,
                    staying hydrated throughout the day,
                    and completing a
                    <span className="font-bold text-[#EE4C7C]">
                        {" "}5-minute breathing exercise
                    </span>
                    before bedtime.

                </p>

                <button
                    className="
                        mt-8
                        inline-flex
                        items-center
                        gap-3
                        rounded-xl
                        bg-[#EE4C7C]
                        px-6
                        py-3
                        font-semibold
                        transition-all
                        duration-300
                        hover:scale-105
                    "
                >

                    View Wellness Plan

                    <ArrowRight size={18} />

                </button>

            </div>

        </div>

    );

}