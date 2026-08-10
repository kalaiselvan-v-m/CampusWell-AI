import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import toast from "react-hot-toast";
import AppShell from "../lib/AppShell.jsx";
import { Field, PrimaryButton } from "../lib/form-controls.jsx";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — CampusWell" },
      { name: "description", content: "Manage your CampusWell profile and preferences." },
      { property: "og:title", content: "Profile — CampusWell" },
      { property: "og:description", content: "Manage your CampusWell profile and preferences." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const [form, setForm] = useState({
    full_name: "Ada Lovelace",
    email: "ada@college.edu",
    department: "Computer Science",
    year: "3",
    semester: "5",
  });
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const save = (e) => {
    e.preventDefault();
    toast.success("Profile saved");
  };

  return (
    <AppShell>
      <div className="max-w-3xl mx-auto px-8 py-14">
        <header className="mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-ink-soft mb-3">Account</p>
          <h1 className="font-display text-5xl text-ink">Your profile</h1>
          <p className="mt-3 text-ink-soft">A quiet space to keep your details up to date.</p>
        </header>

        <div className="flex items-center gap-5 mb-12 rounded-2xl bg-card border border-border p-6">
          <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-2xl">
            {form.full_name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </div>
          <div>
            <p className="font-display text-2xl text-ink">{form.full_name}</p>
            <p className="text-sm text-ink-soft">{form.email}</p>
          </div>
        </div>

        <form onSubmit={save} className="space-y-5 rounded-2xl bg-card border border-border p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Full name" name="full_name" value={form.full_name} onChange={change} />
            <Field label="Email" name="email" type="email" value={form.email} onChange={change} />
            <Field label="Department" name="department" value={form.department} onChange={change} />
            <div className="grid grid-cols-2 gap-4">
              <Field label="Year" name="year" value={form.year} onChange={change} />
              <Field label="Semester" name="semester" value={form.semester} onChange={change} />
            </div>
          </div>
          <div className="pt-3">
            <PrimaryButton type="submit">Save changes</PrimaryButton>
          </div>
        </form>
      </div>
    </AppShell>
  );
}
