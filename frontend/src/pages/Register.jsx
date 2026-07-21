import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { Leaf } from "lucide-react";

import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

import { registerStudent } from "../api/authApi";

export default function Register() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        full_name: "",
        email: "",
        password: "",
        department: "",
        year: "",
        semester: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await registerStudent(form);
            toast.success("Registration successful");
            navigate("/login");
        } catch (error) {
            toast.error(error.response?.data?.detail || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-bg flex">

            {/* LEFT */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:flex w-1/2 items-center justify-center px-20 py-16 relative overflow-hidden bg-primary-dark"
            >
                <div className="absolute w-96 h-96 rounded-full bg-accent/10 blur-3xl -translate-x-1/4" />
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
                        CampusWell AI
                    </h1>
                    <p className="mt-7 max-w-md text-[15px] leading-8 text-white/60">
                        Join CampusWell AI and access personalized mental
                        health assessments, wellness insights, and AI-powered
                        support designed for students in higher education.
                    </p>
                </div>
            </motion.div>

            {/* RIGHT */}
            <div className="flex flex-1 items-center justify-center p-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-md"
                >
                    <Card>
                        <h2 className="font-display text-3xl font-medium text-ink">
                            Create account
                        </h2>
                        <p className="mt-2 text-sm text-ink-soft">
                            Start your CampusWell journey today.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                            <Input
                                label="Full name"
                                name="full_name"
                                value={form.full_name}
                                onChange={handleChange}
                            />
                            <Input
                                label="Email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                            <Input
                                label="Password"
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                            />
                            <Input
                                label="Department"
                                name="department"
                                value={form.department}
                                onChange={handleChange}
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    label="Year"
                                    type="number"
                                    name="year"
                                    value={form.year}
                                    onChange={handleChange}
                                />
                                <Input
                                    label="Semester"
                                    type="number"
                                    name="semester"
                                    value={form.semester}
                                    onChange={handleChange}
                                />
                            </div>

                            <Button type="submit" className="!mt-6">
                                {loading ? "Creating account…" : "Register"}
                            </Button>
                        </form>

                        <p className="mt-7 text-center text-sm text-ink-soft">
                            Already have an account?
                            <Link
                                to="/login"
                                className="ml-1.5 font-medium text-primary-dark hover:text-primary transition-colors"
                            >
                                Login
                            </Link>
                        </p>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
