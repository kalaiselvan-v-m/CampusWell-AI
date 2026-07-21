import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { Leaf } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

import { loginStudent } from "../api/authApi";

export default function Login() {

    const navigate = useNavigate();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await loginStudent(form);
            login(response.access_token);
            toast.success("Login successful");
            navigate("/dashboard");
        } catch (error) {
            toast.error(error.response?.data?.detail || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-bg flex">

            {/* LEFT SIDE */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:flex w-1/2 items-center justify-center px-20 py-16 relative overflow-hidden bg-primary-dark"
            >
                <div className="absolute w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl -translate-x-1/4" />
                <div className="relative z-10 text-white">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                            <Leaf size={18} strokeWidth={2} />
                        </div>
                        <span className="text-sm uppercase tracking-[0.2em] text-white/60">
                            Student wellness platform
                        </span>
                    </div>
                    <h1 className="mt-8 font-display text-6xl font-medium leading-[1.05] tracking-tight">
                        Care for your mind, one day at a time.
                    </h1>
                    <p className="mt-7 max-w-md text-[15px] leading-8 text-white/60">
                        A digital mental health and psychological support
                        system built for students in higher education.
                    </p>
                </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <div className="flex flex-1 items-center justify-center px-8 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-md"
                >
                    <Card>
                        <h2 className="font-display text-3xl font-medium text-ink">
                            Welcome back
                        </h2>
                        <p className="mt-2 text-sm text-ink-soft">
                            Sign in to continue your wellness journey.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            <Input
                                label="Email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="student@college.edu"
                            />
                            <Input
                                label="Password"
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                            />
                            <Button type="submit">
                                {loading ? "Signing in…" : "Login"}
                            </Button>
                        </form>

                        <p className="mt-7 text-center text-sm text-ink-soft">
                            Don't have an account?
                            <Link
                                to="/register"
                                className="ml-1.5 font-medium text-primary-dark hover:text-primary transition-colors"
                            >
                                Register
                            </Link>
                        </p>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
