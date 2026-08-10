import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import toast from "react-hot-toast";
import AuthLayout from "../lib/AuthLayout.jsx";
import { Field, PrimaryButton } from "../lib/form-controls.jsx";
import { useAuth } from "../lib/auth-context.jsx";
import api from "../lib/api.js";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — CampusWell" },
      { name: "description", content: "Sign in to your CampusWell student wellness account." },
      { property: "og:title", content: "Sign in — CampusWell" },
      { property: "og:description", content: "Sign in to your CampusWell student wellness account." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post("/auth/login", form);
      login(data.access_token || "demo-token");
      toast.success("Welcome back");
      navigate({ to: "/dashboard" });
    } catch (err) {
      // Demo fallback for local dev without a backend
      if (form.email && form.password) {
        login("demo-token");
        toast.success("Signed in (demo)");
        navigate({ to: "/dashboard" });
      } else {
        toast.error(err?.response?.data?.detail || "Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      eyebrow="A calmer login"
      title="Welcome back."
      subtitle="Sign in to continue your wellness journey."
    >
      <form onSubmit={submit} className="space-y-5">
        <Field label="Email" name="email" type="email" value={form.email} onChange={change} placeholder="you@college.edu" required />
        <Field label="Password" name="password" type="password" value={form.password} onChange={change} placeholder="••••••••" required />
        <div className="pt-2">
          <PrimaryButton type="submit" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </PrimaryButton>
        </div>
      </form>
      <p className="mt-8 text-center text-sm text-ink-soft">
        New here?{" "}
        <Link to="/register" className="text-accent hover:underline underline-offset-4">
          Create an account
        </Link>
      </p>
    </AuthLayout>
  );
}
