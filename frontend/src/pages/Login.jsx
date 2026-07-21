import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";

import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

import { loginStudent } from "../api/authApi";

export default function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        email: "",
        password: ""
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

            const response = await loginStudent(form);

            login(response.access_token);

            toast.success("Login Successful");

            navigate("/dashboard");

        }

        catch (error) {

            toast.error(

                error.response?.data?.detail ||

                "Login Failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-[#E3E2DF] flex">

            {/* LEFT SIDE */}

            <motion.div

                initial={{ opacity: 0, x: -50 }}

                animate={{ opacity: 1, x: 0 }}

                transition={{ duration: .6 }}

                className="hidden lg:flex w-1/2 items-center justify-center px-20 py-16 relative overflow-hidden"

            >

                <div className="absolute w-[420px] h-[420px] rounded-full bg-[#E3AFBC]/30 blur-3xl"></div>

                <div className="relative z-10">

                    <p className="uppercase tracking-[0.35em] text-sm text-[#9A1750] mb-6">

                        Mental Health Platform

                    </p>

                    <h1 className="text-7xl font-black leading-none tracking-tight text-[#5D001E]">

                        CampusWell AI

                    </h1>

                    <p className="mt-8 max-w-xl text-lg leading-8 text-[#9A1750]">

                        Development of a Digital Mental Health and Psychological
                        Support System for Students in Higher Education.

                    </p>

                </div>

            </motion.div>

            {/* RIGHT SIDE */}

            <div className="flex flex-1 items-center justify-center px-8 py-10">

                <motion.div

                    initial={{ opacity: 0, y: 30 }}

                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: .5 }}

                    className="w-full max-w-lg"

                >

                    <Card>

                        <h2 className="text-4xl font-black tracking-tight text-[#5D001E]">

                            Welcome Back

                        </h2>

                        <p className="mt-3 text-[#9A1750]">

                            Sign in to continue your wellness journey.

                        </p>

                        <form

                            onSubmit={handleSubmit}

                            className="mt-10 space-y-6"

                        >

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

                                {

                                    loading

                                        ?

                                        "Signing In..."

                                        :

                                        "Login"

                                }

                            </Button>

                        </form>

                        <p className="mt-8 text-center text-sm text-[#5D001E]">

                            Don't have an account?

                            <Link

                                to="/register"

                                className="ml-2 font-semibold text-[#EE4C7C] hover:text-[#9A1750] transition-colors"

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