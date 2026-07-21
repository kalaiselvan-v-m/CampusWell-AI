import { ClipboardList, User, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Card from "../common/Card";

export default function QuickActions() {

    const navigate = useNavigate();

    const actions = [
        {
            label: "Start assessment",
            desc: "Take your wellness evaluation",
            icon: ClipboardList,
            path: "/assessment",
            emphasis: true
        },
        {
            label: "Edit profile",
            desc: "Update your personal information",
            icon: User,
            path: "/profile",
            emphasis: false
        }
    ];

    return (
        <Card>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
                Navigation
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium text-ink">
                Quick actions
            </h2>

            <div className="mt-6 flex flex-col gap-3">
                {actions.map(({ label, desc, icon: Icon, path, emphasis }) => (
                    <button
                        key={path}
                        onClick={() => navigate(path)}
                        className={`
                            group flex items-center justify-between rounded-xl px-5 py-4
                            transition-all duration-200
                            ${emphasis
                                ? "bg-primary-dark text-white hover:bg-primary"
                                : "border border-line hover:border-primary/40 hover:bg-surface-sunken"
                            }
                        `}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`rounded-lg p-2.5 ${emphasis ? "bg-white/15" : "bg-primary-soft text-primary-dark"}`}>
                                <Icon size={18} strokeWidth={1.9} />
                            </div>
                            <div className="text-left">
                                <p className={`text-sm font-medium ${emphasis ? "text-white" : "text-ink"}`}>
                                    {label}
                                </p>
                                <p className={`text-xs mt-0.5 ${emphasis ? "text-white/60" : "text-ink-soft"}`}>
                                    {desc}
                                </p>
                            </div>
                        </div>
                        <ArrowRight
                            size={16}
                            className={`transition-transform duration-200 group-hover:translate-x-0.5 ${emphasis ? "text-white/70" : "text-ink-faint"}`}
                        />
                    </button>
                ))}
            </div>
        </Card>
    );
}
