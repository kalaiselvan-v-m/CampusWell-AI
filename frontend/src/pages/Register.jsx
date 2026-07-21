import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

        }

        catch(error){

            toast.error(

                error.response?.data?.detail ||

                "Registration Failed"

            );

        }

        finally{

            setLoading(false);

        }

    };

    return(

        <div className="min-h-screen flex items-center justify-center bg-[#FDF0D5]">

            <Card className="w-full max-w-lg">

                <h2 className="text-3xl font-bold text-[#003049] mb-8">

                    Create Account

                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
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

                    <Button>

                        {

                            loading

                            ?

                            "Creating..."

                            :

                            "Register"

                        }

                    </Button>

                </form>

                <p className="mt-6 text-center">

                    Already have an account?

                    <Link

                        to="/login"

                        className="ml-2 text-[#C1121F]"

                    >

                        Login

                    </Link>

                </p>

            </Card>

        </div>

    );

}