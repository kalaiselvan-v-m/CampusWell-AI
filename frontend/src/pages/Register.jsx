import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

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
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            await registerStudent(form);

            toast.success("Registration Successful");

            navigate("/login");

        } catch (error) {

            toast.error(
                error.response?.data?.detail ||
                "Registration Failed"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-[#E3E2DF] flex">

            {/* LEFT */}

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: .6 }}
                className="hidden lg:flex w-1/2 items-center justify-center px-20 py-16 relative overflow-hidden"
            >

                <div className="absolute w-96 h-96 rounded-full bg-[#E3AFBC]/30 blur-3xl"></div>

                <div className="relative z-10">

                    <h1 className="
                        text-7xl
                        font-black
                        leading-none
                        tracking-tight
                        text-[#5D001E]
                    ">
                        CampusWell AI
                    </h1>

                    <p className="
                        mt-8
                        max-w-xl
                        text-lg
                        leading-8
                        text-[#9A1750]
                    ">
                        Join CampusWell AI and access personalized mental health
                        assessments, wellness insights, and AI-powered support
                        designed for students in higher education.
                    </p>

                </div>

            </motion.div>

            {/* RIGHT */}

            <div className="flex flex-1 items-center justify-center p-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5 }}
                    className="w-full max-w-lg"
                >

                    <Card>

                        <h2 className="
                            text-4xl
                            font-black
                            tracking-tight
                            text-[#5D001E]
                        ">
                            Create Account
                        </h2>

                        <p className="
                            mt-3
                            text-[#9A1750]
                        ">
                            Start your CampusWell journey today.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-10 space-y-5"
                        >

                            <Input
                                label="Full Name"
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

                            <Button type="submit">

                                {loading ? "Creating Account..." : "Register"}

                            </Button>

                        </form>

                        <p className="
                            mt-8
                            text-center
                            text-sm
                            text-[#5D001E]
                        ">

                            Already have an account?

                            <Link
                                to="/login"
                                className="
                                    ml-2
                                    font-semibold
                                    text-[#EE4C7C]
                                    transition-colors
                                    hover:text-[#9A1750]
                                "
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