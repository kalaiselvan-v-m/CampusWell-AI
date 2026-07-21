import { Bell, Leaf } from "lucide-react";
import { useLocation } from "react-router-dom";
import NavWheelMenu from "./NavWheelMenu";

const TITLES = {
    "/dashboard": ["Dashboard", "Welcome back"],
    "/assessment": ["Assessment", "Your wellness check-in"],
    "/profile": ["Profile", "Your account details"]
};

export default function Navbar() {

    const { pathname } = useLocation();
    const [title, subtitle] = TITLES[pathname] || ["Dashboard", "Welcome back"];

    return (
        <header className="h-18 py-5 bg-surface/80 backdrop-blur-sm border-b border-line px-6 md:px-8 flex items-center justify-between sticky top-0 z-10">

            <div className="flex items-center gap-4">
                <NavWheelMenu />

                <div className="hidden sm:flex items-center gap-2.5 pr-4 border-r border-line">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-white">
                        <Leaf size={14} strokeWidth={2.25} />
                    </div>
                    <span className="font-display text-base font-medium text-ink">
                        CampusWell
                    </span>
                </div>

                <div>
                    <h2 className="font-display text-xl font-medium text-ink leading-tight">
                        {title}
                    </h2>
                    <p className="hidden sm:block text-sm text-ink-soft leading-tight">
                        {subtitle}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-5">
                <button className="relative h-9 w-9 flex items-center justify-center rounded-full hover:bg-surface-sunken transition-colors duration-200">
                    <Bell size={18} strokeWidth={1.75} className="text-ink-soft" />
                    <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-accent" />
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-line">
                    <div className="w-9 h-9 rounded-full bg-primary-soft flex items-center justify-center text-primary-dark font-display font-medium text-sm">
                        K
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-sm font-medium text-ink leading-tight">
                            Student
                        </p>
                        <p className="text-xs text-ink-soft leading-tight">
                            CampusWell User
                        </p>
                    </div>
                </div>
            </div>

        </header>
    );
}
