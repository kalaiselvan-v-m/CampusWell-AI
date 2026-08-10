import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  Moon,
  Sun,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import AppShell from "../lib/AppShell.jsx";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  const stats = [
    {
      label: "Wellness score",
      value: "78",
      trend: "+6",
      icon: Heart,
      tint: "bg-accent/10 text-accent",
    },
    {
      label: "Sleep quality",
      value: "7.2h",
      trend: "+0.4",
      icon: Moon,
      tint: "bg-sage/20 text-sage-deep",
    },
    {
      label: "Mood average",
      value: "Calm",
      trend: "steady",
      icon: Sun,
      tint: "bg-clay/10 text-clay",
    },
    {
      label: "Streak",
      value: "12 days",
      trend: "keep going",
      icon: TrendingUp,
      tint: "bg-primary/10 text-primary",
    },
  ];

  return (
    <AppShell>
      <div className="max-w-6xl mx-auto px-8 lg:px-12 py-12">

        {/* Header */}
        <header className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ink-soft mb-3">
              Tuesday, 21 July
            </p>

            <h1 className="font-display text-5xl text-ink text-balance">
              Good morning.{" "}
              <em className="text-accent not-italic">
                How is today feeling?
              </em>
            </h1>
          </div>

          <Link
            to="/assessment"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-primary
              text-primary-foreground
              px-6
              py-3
              text-sm
              hover:bg-primary/90
              transition
            "
          >
            Take today's check-in
            <ArrowUpRight size={16} />
          </Link>
        </header>


        {/* Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="
                  rounded-2xl
                  bg-card
                  border
                  border-border
                  p-6
                "
              >
                <div
                  className={`
                    h-10
                    w-10
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    ${stat.tint}
                  `}
                >
                  <Icon size={18} strokeWidth={1.75} />
                </div>

                <p className="mt-5 text-xs uppercase tracking-wider text-ink-soft">
                  {stat.label}
                </p>

                <p className="mt-1 font-display text-3xl text-ink">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-ink-soft">
                  {stat.trend}
                </p>
              </div>
            );
          })}
        </section>


        {/* Mood + Suggestion */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Mood Chart */}
          <div
            className="
              lg:col-span-2
              rounded-2xl
              bg-card
              border
              border-border
              p-8
            "
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl text-ink">
                This week's mood
              </h2>

              <span className="text-xs text-ink-soft">
                7 days
              </span>
            </div>


            <div className="flex items-end gap-3 h-56">

              {[42, 58, 51, 66, 60, 72, 78].map((height, index) => (
                <div
                  key={index}
                  className="
                    flex-1
                    flex
                    flex-col
                    items-center
                    gap-2
                  "
                >
                  <div
                    className="
                      w-full
                      rounded-t-lg
                      bg-gradient-to-t
                      from-primary/70
                      to-accent/70
                    "
                    style={{
                      height: `${height}%`,
                    }}
                  />

                  <span className="text-[11px] text-ink-soft">
                    {
                      ["M", "T", "W", "T", "F", "S", "S"][
                        index
                      ]
                    }
                  </span>
                </div>
              ))}

            </div>
          </div>


          {/* Daily Tip */}
          <div
            className="
              rounded-2xl
              bg-primary
              text-primary-foreground
              p-8
              relative
              overflow-hidden
            "
          >

            <div
              className="
                absolute
                -top-10
                -right-10
                h-40
                w-40
                rounded-full
                bg-accent/20
                blur-2xl
              "
            />

            <Sparkles
              size={20}
              className="text-accent"
            />

            <h3
              className="
                mt-4
                font-display
                text-2xl
                leading-snug
              "
            >
              A gentle nudge for today
            </h3>

            <p
              className="
                mt-3
                text-sm
                text-primary-foreground/70
                leading-7
              "
            >
              Try a 4-minute breathing pause between classes.
              Small pauses build big calm.
            </p>


            <button
              className="
                mt-6
                rounded-full
                bg-accent
                text-accent-foreground
                px-5
                py-2.5
                text-sm
                hover:bg-accent/90
                transition
              "
            >
              Start breathing
            </button>

          </div>

        </section>

      </div>
    </AppShell>
  );
}