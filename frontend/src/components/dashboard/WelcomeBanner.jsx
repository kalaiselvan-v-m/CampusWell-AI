import { CalendarDays, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WelcomeBanner() {

    const navigate = useNavigate();

    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
    });

    return (

        <div className="
            relative
            overflow-hidden
            rounded-3xl
            bg-[#5D001E]
            p-10
            text-white
            shadow-sm
        ">

            {/* Decorative Circles */}

            <div className="
                absolute
                -right-24
                -top-24
                h-80
                w-80
                rounded-full
                bg-[#EE4C7C]/15
            " />

            <div className="
                absolute
                -left-20
                -bottom-24
                h-72
                w-72
                rounded-full
                bg-[#E3AFBC]/10
            " />

            <div className="relative z-10">

                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                    {/* LEFT */}

                    <div>

                        <div className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            bg-white/10
                            px-4
                            py-2
                            text-sm
                            text-[#E3AFBC]
                        ">

                            <CalendarDays size={16} />

                            {today}

                        </div>

                        <h1 className="
                            mt-6
                            text-5xl
                            font-black
                            leading-tight
                        ">

                            Welcome Back 👋

                        </h1>

                        <p className="
                            mt-5
                            max-w-2xl
                            text-lg
                            leading-8
                            text-[#E3E2DF]
                        ">

                            Your wellbeing journey continues today.
                            Complete your daily assessment and let
                            CampusWell AI generate personalized
                            recommendations to help improve your
                            mental wellness.

                        </p>

                    </div>

                    {/* RIGHT */}

                    <div className="
                        rounded-3xl
                        bg-white/10
                        p-8
                        backdrop-blur-sm
                        lg:w-80
                    ">

                        <div className="flex items-center gap-3">

                            <Sparkles
                                size={28}
                                className="text-[#EE4C7C]"
                            />

                            <h3 className="text-2xl font-bold">

                                Wellness Status

                            </h3>

                        </div>

                        <h2 className="
                            mt-6
                            text-5xl
                            font-black
                            text-[#EE4C7C]
                        ">

                            Good

                        </h2>

                        <p className="
                            mt-3
                            text-[#E3E2DF]
                        ">

                            Keep building healthy habits and maintain
                            your positive progress.

                        </p>

                        <button
                            onClick={() => navigate("/assessment")}
                            className="
                                mt-8
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-3
                                rounded-xl
                                bg-[#EE4C7C]
                                py-3
                                font-semibold
                                transition-all
                                duration-300
                                hover:scale-[1.03]
                            "
                        >

                            Start Today's Assessment

                            <ArrowRight size={18} />

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}