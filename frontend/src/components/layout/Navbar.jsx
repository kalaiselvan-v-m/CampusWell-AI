import { Bell } from "lucide-react";

export default function Navbar() {

    return (

        <header className="h-20 bg-white shadow-sm px-10 flex items-center justify-between">

            <div>

                <h2 className="text-3xl font-bold text-[#003049]">

                    Dashboard

                </h2>

                <p className="text-[#669BBC]">

                    Welcome back 👋

                </p>

            </div>

            <div className="flex items-center gap-6">

                <button className="relative">

                    <Bell
                        size={24}
                        className="text-[#003049]"
                    />

                    <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#C1121F]" />

                </button>

                <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-[#669BBC] flex items-center justify-center text-white font-bold">

                        K

                    </div>

                    <div>

                        <h4 className="font-semibold text-[#003049]">

                            Student

                        </h4>

                        <p className="text-xs text-gray-500">

                            CampusWell User

                        </p>

                    </div>

                </div>

            </div>

        </header>

    );

}