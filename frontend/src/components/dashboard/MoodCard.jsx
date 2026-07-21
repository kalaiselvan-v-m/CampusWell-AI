import { Smile } from "lucide-react";

export default function MoodCard() {

    const mood = "Happy";

    return (

        <div className="rounded-3xl border border-[#E3AFBC] bg-white p-8 shadow-sm">

            <div className="flex items-start justify-between">

                <div>

                    <p className="text-sm uppercase tracking-[0.25em] text-[#9A1750]">

                        Mood Tracker

                    </p>

                    <h2 className="mt-2 text-3xl font-black text-[#5D001E]">

                        Today's Mood

                    </h2>

                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E3AFBC]">

                    <Smile
                        size={34}
                        className="text-[#5D001E]"
                    />

                </div>

            </div>

            <div className="mt-8">

                <span className="
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

                    😊 {mood}

                </span>

                <p className="mt-6 text-lg font-semibold text-[#5D001E]">

                    You're feeling positive today.

                </p>

                <p className="mt-2 leading-7 text-[#9A1750]">

                    Keep maintaining healthy habits and take a few moments to
                    appreciate today's progress. Every small step contributes
                    to your overall wellbeing.

                </p>

            </div>

        </div>

    );

}