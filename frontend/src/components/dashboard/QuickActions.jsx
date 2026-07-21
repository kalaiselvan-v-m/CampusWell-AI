import { ClipboardList, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function QuickActions() {

    const navigate = useNavigate();

    return (

        <div className="rounded-3xl border border-[#E3AFBC] bg-white p-8 shadow-sm">

            <div>

                <p className="text-sm uppercase tracking-[0.25em] text-[#9A1750]">

                    Navigation

                </p>

                <h2 className="mt-2 text-3xl font-black text-[#5D001E]">

                    Quick Actions

                </h2>

                <p className="mt-3 text-[#9A1750]">

                    Access your most frequently used features.

                </p>

            </div>

            <div className="mt-8 space-y-4">

                <button
                    onClick={() => navigate("/assessment")}
                    className="
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-2xl
                        bg-[#5D001E]
                        px-6
                        py-5
                        text-white
                        transition-all
                        duration-300
                        hover:scale-[1.02]
                        hover:bg-[#9A1750]
                    "
                >

                    <div className="flex items-center gap-4">

                        <div className="rounded-xl bg-white/15 p-3">

                            <ClipboardList size={22} />

                        </div>

                        <div className="text-left">

                            <p className="font-bold">

                                Start Assessment

                            </p>

                            <p className="text-sm text-[#E3AFBC]">

                                Take your wellness evaluation

                            </p>

                        </div>

                    </div>

                    →

                </button>

                <button
                    onClick={() => navigate("/profile")}
                    className="
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-[#E3AFBC]
                        bg-[#E3E2DF]
                        px-6
                        py-5
                        transition-all
                        duration-300
                        hover:scale-[1.02]
                        hover:border-[#9A1750]
                    "
                >

                    <div className="flex items-center gap-4">

                        <div className="rounded-xl bg-[#E3AFBC] p-3">

                            <User
                                size={22}
                                className="text-[#5D001E]"
                            />

                        </div>

                        <div className="text-left">

                            <p className="font-bold text-[#5D001E]">

                                Edit Profile

                            </p>

                            <p className="text-sm text-[#9A1750]">

                                Update your personal information

                            </p>

                        </div>

                    </div>

                    →

                </button>

            </div>

        </div>

    );

}