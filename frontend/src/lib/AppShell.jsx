import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { LayoutDashboard, ClipboardList, User, LogOut, Sparkles } from "lucide-react";
import { useAuth } from "./auth-context.jsx";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/assessment", label: "Assessment", icon: ClipboardList },
  { to: "/profile", label: "Profile", icon: User },
];

export default function AppShell({ children }) {
  const { pathname } = useRouterState({ select: (s) => s.location });
  const { isAuthed, ready, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (ready && !isAuthed) navigate({ to: "/login" });
  }, [ready, isAuthed, navigate]);

  return (
    <div className="min-h-screen flex bg-background">
      <aside className="hidden lg:flex w-64 flex-col border-r border-border bg-cream px-6 py-8">
        <Link to="/dashboard" className="flex items-center gap-2.5 mb-12">
          <div className="h-9 w-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
            <Sparkles size={16} />
          </div>
          <span className="font-display text-2xl text-ink">CampusWell</span>
        </Link>

        <nav className="flex-1 space-y-1">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-ink-soft hover:bg-secondary hover:text-ink"
                }`}
              >
                <Icon size={17} strokeWidth={1.75} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => {
            logout();
            navigate({ to: "/login" });
          }}
          className="flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm text-ink-soft hover:bg-secondary transition-colors"
        >
          <LogOut size={17} strokeWidth={1.75} />
          Sign out
        </button>
      </aside>

      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
