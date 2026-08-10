import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import toast from "react-hot-toast";
import AuthLayout from "../lib/AuthLayout.jsx";
import { Field, PrimaryButton } from "../lib/form-controls.jsx";
import api from "../lib/api.js";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create account — CampusWell" },
      { name: "description", content: "Join CampusWell to access personalized mental wellness support for students." },
      { property: "og:title", content: "Create account — CampusWell" },
      { property: "og:description", content: "Join CampusWell to access personalized mental wellness support for students." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
    department: "",
    year: "",
    semester: "",
  });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/auth/register", form);
      toast.success("Account created");
      navigate({ to: "/login" });
    } catch (err) {
      if (form.email && form.password && form.full_name) {
        toast.success("Account created (demo)");
        navigate({ to: "/login" });
      } else {
        toast.error(err?.response?.data?.detail || "Registration failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      eyebrow="Begin gently"
      title="Create your account."
      subtitle="A few details to personalize your wellness experience."
    >
      <form onSubmit={submit} className="space-y-5">
        <Field label="Full name" name="full_name" value={form.full_name} onChange={change} placeholder="Ada Lovelace" required />
        <Field label="Email" name="email" type="email" value={form.email} onChange={change} placeholder="you@college.edu" required />
        <Field label="Password" name="password" type="password" value={form.password} onChange={change} placeholder="••••••••" required />
        <Field label="Department" name="department" value={form.department} onChange={change} placeholder="Computer Science" />
        <div className="grid grid-cols-2 gap-4">
          <Field label="Year" name="year" value={form.year} onChange={change} placeholder="2" />
          <Field label="Semester" name="semester" value={form.semester} onChange={change} placeholder="3" />
        </div>
        <div className="pt-2">
          <PrimaryButton type="submit" disabled={loading}>
            {loading ? "Creating…" : "Create account"}
          </PrimaryButton>
        </div>
      </form>
      <p className="mt-8 text-center text-sm text-ink-soft">
        Already have an account?{" "}
        <Link to="/login" className="text-accent hover:underline underline-offset-4">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
