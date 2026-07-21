import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import OptionWheel from "../common/OptionWheel";

const NAV_ITEMS = ["Dashboard", "Assessment", "Profile", "Log out"];

const ROUTES = {
    Dashboard: "/dashboard",
    Assessment: "/assessment",
    Profile: "/profile"
};

export default function NavWheelMenu() {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useAuth();

    const currentLabel =
        Object.entries(ROUTES).find(([, path]) => path === location.pathname)?.[0] ?? "Dashboard";
    const defaultIndex = Math.max(NAV_ITEMS.indexOf(currentLabel), 0);

    // Escape closes the menu, and page scroll is locked while it's open.
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open]);

    const handleSelect = (index, item) => {
        if (item === "Log out") {
            logout();
            navigate("/login");
        } else {
            navigate(ROUTES[item]);
        }
        setOpen(false);
    };

    // The overlay is rendered via a portal straight into <body>, deliberately
    // outside the navbar's DOM subtree. The navbar has backdrop-blur, and any
    // ancestor with a filter/backdrop-filter becomes a new containing block
    // for position:fixed descendants — so without the portal, "fixed inset-0"
    // was resolving against the navbar's small box instead of the viewport,
    // which is what squashed the overlay into that thin strip at the top.
    const overlay = open && (
        <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/35 backdrop-blur-md animate-fade-up"
            style={{ animationDuration: "0.2s" }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md mx-6 rounded-3xl bg-primary-dark px-10 py-11 text-white shadow-2xl"
            >
                <button
                    onClick={() => setOpen(false)}
                    aria-label="Close navigation"
                    className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 transition-colors duration-200"
                >
                    <X size={17} className="text-white/60" />
                </button>

                <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/40">
                    Navigate
                </p>
                <h2 className="mt-1 font-display text-2xl font-medium">
                    Where to?
                </h2>

                <div className="mt-4 h-72">
                    <OptionWheel
                        items={NAV_ITEMS}
                        defaultSelected={defaultIndex}
                        onChange={handleSelect}
                        textColor="rgba(255,255,255,0.32)"
                        activeColor="#ffffff"
                        side="left"
                        fontSize={1.9}
                        spacing={1.5}
                        curve={1}
                        tilt={9}
                        blur={3}
                        fade={0.35}
                        inset={0}
                        loop
                        draggable
                    />
                </div>

                <p className="mt-2 text-xs text-white/35">
                    Scroll, drag, or click an option to go there.
                </p>
            </div>
        </div>
    );

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                aria-label="Open navigation"
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-surface-sunken transition-colors duration-200"
            >
                <Menu size={19} strokeWidth={1.9} className="text-ink" />
            </button>

            {overlay && createPortal(overlay, document.body)}
        </>
    );
}