import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

export default function Login() {

    return (

        <div className="min-h-screen bg-[#FDF0D5] flex">

            {/* Left Side */}

            <motion.div

                initial={{opacity:0,x:-50}}

                animate={{opacity:1,x:0}}

                transition={{duration:.6}}

                className="hidden lg:flex w-1/2 items-center justify-center p-16"

            >

                <div>

                    <h1 className="text-6xl font-bold text-[#003049]">

                        CampusWell AI

                    </h1>

                    <p className="mt-6 text-xl text-[#669BBC] leading-relaxed">

                        Development of a Digital Mental Health
                        and Psychological Support System
                        for Students in Higher Education.

                    </p>

                </div>

            </motion.div>

            {/* Right Side */}

            <div className="flex flex-1 items-center justify-center p-8">

                <motion.div

                    initial={{opacity:0,y:30}}

                    animate={{opacity:1,y:0}}

                    transition={{duration:.5}}

                    className="w-full max-w-md"

                >

                    <Card>

                        <h2 className="text-3xl font-bold text-[#003049]">

                            Welcome Back

                        </h2>

                        <p className="mt-2 text-gray-500">

                            Sign in to continue

                        </p>

                        <div className="mt-8 space-y-5">

                            <Input

                                label="Email"

                                placeholder="student@college.edu"

                            />

                            <Input

                                label="Password"

                                type="password"

                                placeholder="••••••••"

                            />

                            <Button>

                                Login

                            </Button>

                        </div>

                        <p className="mt-8 text-center text-sm">

                            Don't have an account?{" "}

                            <Link

                                to="/register"

                                className="font-semibold text-[#C1121F]"

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