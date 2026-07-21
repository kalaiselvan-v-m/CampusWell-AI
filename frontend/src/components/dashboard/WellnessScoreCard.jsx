import {
    HeartPulse,
    TrendingUp
} from "lucide-react";

export default function WellnessScoreCard() {

    const score = 84;

    return (

        <div className="
            rounded-3xl
            border
            border-[#E3AFBC]
            bg-white
            p-8
            shadow-sm
        ">

            <div className="flex items-start justify-between">

                <div>

                    <p className="
                        text-sm
                        uppercase
                        tracking-[0.25em]
                        text-[#9A1750]
                    ">

                        Overall Wellness

                    </p>

                    <h2 className="
                        mt-2
                        text-5xl
                        font-black
                        text-[#5D001E]
                    ">

                        {score}%

                    </h2>

                    <span className="
                        mt-4
                        inline-flex
                        items-center
                        rounded-full
                        bg-[#EE4C7C]
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-white
                    ">

                        Excellent Progress 🎉

                    </span>

                </div>

                <div className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-3xl
                    bg-[#E3AFBC]
                ">

                    <HeartPulse
                        size={38}
                        className="text-[#5D001E]"
                    />

                </div>

            </div>

            <div className="mt-10">

                <div className="flex justify-between mb-3">

                    <span className="font-semibold text-[#5D001E]">

                        Weekly Progress

                    </span>

                    <span className="font-bold text-[#9A1750]">

                        {score}%

                    </span>

                </div>

                <div className="
                    h-3
                    overflow-hidden
                    rounded-full
                    bg-[#E3AFBC]
                ">

                    <div
                        className="
                            h-full
                            rounded-full
                            bg-[#EE4C7C]
                            transition-all
                            duration-700
                        "
                        style={{
                            width: `${score}%`
                        }}
                    />

                </div>

            </div>

            <div className="
                mt-8
                flex
                items-center
                justify-between
                rounded-2xl
                bg-[#E3E2DF]
                p-5
            ">

                <div>

                    <p className="font-semibold text-[#5D001E]">

                        Compared to last week

                    </p>

                    <p className="mt-1 text-sm text-[#9A1750]">

                        You're improving consistently.

                    </p>

                </div>

                <div className="
                    flex
                    items-center
                    gap-2
                    font-bold
                    text-[#5D001E]
                ">

                    <TrendingUp
                        size={22}
                    />

                    +6%

                </div>

            </div>

        </div>

    );

}