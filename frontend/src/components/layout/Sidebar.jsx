import {
    LayoutDashboard,
    ClipboardList,
    User,
    LogOut
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Sidebar() {

    const { logout } = useAuth();
    const navigate = useNavigate();

    const menu = [
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            path: "/dashboard"
        },
        {
            name: "Assessment",
            icon: ClipboardList,
            path: "/assessment"
        },
        {
            name: "Profile",
            icon: User,
            path: "/profile"
        }
    ];

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (

        <aside className="w-72 bg-[#5D001E] border-r border-[#E3AFBC] text-white flex flex-col justify-between">

            <div>

                <div className="px-8 py-10 border-b border-[#E3AFBC]/30">

                    <p className="uppercase tracking-[0.35em] text-xs text-[#E3AFBC]">

                        Student Wellness

                    </p>

                    <h1 className="mt-3 text-3xl font-black tracking-tight">

                        CampusWell AI

                    </h1>

                </div>

                <nav className="mt-8 px-4">

                    {menu.map((item) => {

                        const Icon = item.icon;

                        return (

                            <NavLink

                                key={item.path}

                                to={item.path}

                                className={({ isActive }) =>

                                    `flex items-center gap-4 px-5 py-4 rounded-xl mb-3 transition-all duration-300 ${

                                        isActive

                                            ? "bg-[#E3AFBC] text-[#5D001E] font-semibold shadow-sm"

                                            : "text-white hover:bg-[#9A1750]"

                                    }`

                                }

                            >

                                <Icon size={20} />

                                <span className="font-medium">

                                    {item.name}

                                </span>

                            </NavLink>

                        );

                    })}

                </nav>

            </div>

            <div className="p-4 border-t border-[#E3AFBC]/30">

                <button

                    onClick={handleLogout}

                    className="w-full flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#9A1750] transition-all duration-300"

                >

                    <LogOut size={20} />

                    Logout

                </button>

            </div>

        </aside>

    );

}