import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import toast from "react-hot-toast";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import AppShell from "../lib/AppShell.jsx";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "Check-in — CampusWell" },
      { name: "description", content: "A short, gentle daily wellness check-in." },
      { property: "og:title", content: "Check-in — CampusWell" },
      { property: "og:description", content: "A short, gentle daily wellness check-in." },
    ],
  }),
  component: AssessmentPage,
});

const questions = [
  { id: "mood", q: "How is your mood today?", options: ["Struggling", "Low", "Okay", "Good", "Bright"] },
  { id: "sleep", q: "How well did you sleep last night?", options: ["Barely", "Restless", "Okay", "Well", "Deeply"] },
  { id: "focus", q: "How focused do you feel?", options: ["Scattered", "Distracted", "Neutral", "Sharp", "Flowing"] },
  { id: "social", q: "How connected do you feel to others?", options: ["Alone", "Distant", "Neutral", "Connected", "Held"] },
  { id: "stress", q: "How overwhelmed do you feel?", options: ["Very", "Somewhat", "Neutral", "A little", "Not at all"] },
];

function AssessmentPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  const q = questions[step];
  const total = questions.length;

  const select = (i) => setAnswers({ ...answers, [q.id]: i });

  const next = () => {
    if (answers[q.id] == null) return toast.error("Choose a response first");
    if (step < total - 1) setStep(step + 1);
    else {
      setDone(true);
      toast.success("Check-in complete");
    }
  };

  if (done) {
    return (
      <AppShell>
        <div className="max-w-2xl mx-auto px-8 py-24 text-center">
          <div className="h-16 w-16 rounded-full bg-sage/30 text-sage-deep mx-auto flex items-center justify-center">
            <Check size={28} strokeWidth={1.75} />
          </div>
          <h1 className="mt-8 font-display text-5xl text-ink">Thank you.</h1>
          <p className="mt-4 text-ink-soft leading-8">
            Your check-in has been recorded. Small moments of reflection are quiet victories.
          </p>
          <div className="mt-10">
            <a
              href="/dashboard"
              className="inline-block rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:bg-primary/90 transition"
            >
              Back to dashboard
            </a>
          </div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="max-w-2xl mx-auto px-8 py-16">
        <div className="flex items-center justify-between mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-ink-soft">
            Check-in
          </span>
          <span className="text-xs text-ink-soft">
            {step + 1} of {total}
          </span>
        </div>

        <div className="h-1 w-full bg-muted rounded-full mb-14">
          <div
            className="h-full bg-accent rounded-full transition-all"
            style={{ width: `${((step + 1) / total) * 100}%` }}
          />
        </div>

        <h1 className="font-display text-4xl text-ink text-balance leading-tight">
          {q.q}
        </h1>

        <div className="mt-10 space-y-3">
          {q.options.map((opt, i) => {
            const active = answers[q.id] === i;
            return (
              <button
                key={opt}
                onClick={() => select(i)}
                className={`w-full text-left rounded-xl border px-5 py-4 text-[15px] transition ${
                  active
                    ? "border-accent bg-accent/10 text-ink"
                    : "border-border bg-card text-ink-soft hover:border-accent/50 hover:text-ink"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        <div className="mt-12 flex justify-between">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink disabled:opacity-30"
          >
            <ChevronLeft size={16} /> Back
          </button>
          <button
            onClick={next}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:bg-primary/90 transition"
          >
            {step === total - 1 ? "Finish" : "Continue"} <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </AppShell>
  );
}
