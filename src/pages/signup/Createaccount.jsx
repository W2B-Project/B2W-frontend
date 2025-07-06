import Banner from "../../components/signup/Banner"
import bannerImage from "../../assets/images/signup/signup.png"
import { Eye, EyeOff } from "lucide-react";
import Button from "../../components/global/Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { registerUser } from "../../Api_Calls/Authservices";
function Createaccount() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", userName: "kk", password: "" });
    const [error, setError] = useState(null)
    const { showPassword, setShowPassword, setAuthUser } = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form)
        const FORM = { ...form, userName: form.email }
        try {
            const data = await registerUser(FORM);
            const userData = {
                token: data.token,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                userId: data.userId,
                roles: data.roles,
                isAuthenticated: data.isAuthenticated,
            }
            setAuthUser(userData);
            localStorage.setItem("authUser", JSON.stringify(userData));
            navigate('/selectUser')
        } catch (err) {
            console.log(err?.response?.data?.errors ||err?.response?.data ||  "Login failed");
            setError(err.response.data.errors ||err.response.data ||  "Login failed")
        }

    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className="grid grid-cols-2 h-screen bg-primry_purble">
            <Banner image={bannerImage} text="Where Hope starts" bgColor="primry_purble" logoColor="white" />
            <div className="bg-white p-8 rounded-lg shadow-md w-full flex flex-col justify-center px-20 rounded-bl-[6%] rounded-tl-[6%]">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6 font-lato">
                    Create Your Account
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* First & Last Name */}
                    <div className="flex gap-4">
                        <div className="flex flex-col w-1/2">
                            <label className="text-gray-600 font-roboto">First Name</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                className="mt-1 p-2 border placeholder:text-zinc-400 border-gray-300 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <div className="text-xs mt-1 text-red-600">{error?.FirstName}</div>
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-gray-600 font-roboto">Last Name</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 placeholder:text-zinc-400 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <div className="text-xs mt-1 text-red-600">{error?.LastName}</div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mt-4">
                        <label className="text-gray-600 font-roboto">Email Address</label>
                        <input
                            type="email"
                            placeholder="Example@gmail.com"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="mt-1 p-2 border placeholder:text-zinc-400 border-gray-300 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="text-xs mt-1 text-red-600">{error?.Email}</div>
                    {/* Password */}
                    <div className="mt-4 relative">
                        <label className="text-gray-600 font-roboto">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="* * * * * * * * * *"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 placeholder:text-zinc-400 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <div className="text-xs mt-1 text-red-600">{error?.Password||error}</div>
                        <button
                            type="button"
                            className="absolute right-3 top-[40px] font-roboto text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {/* Submit Button */}

                    <Button btn_text="Sign Up" marg={7} />

                    <p className="font-roboto text-dark_gray font-medium">Already have an account? <span className="text-primry_purble font-bold">
                        <Link to="/Login">Login</Link>
                    </span>
                    </p>
                    <div className="flex items-center my-4 font-roboto">
                        <div className="flex-1 border-gray-300 border"></div>
                        <p className="mx-3">OR sign up with</p>
                        <div className="flex-1 border-gray-300 border-t"></div>
                    </div>
                    {/* social media icons */}
                    <div className="flex justify-center items-center gap-1">
                        <button className="p-2 rounded-full"><FcGoogle size={30} /></button>
                        <button className="p-2 rounded-full"><FaApple size={30} /></button>
                        <button className="p-2 rounded-full text-blue-600"><FaFacebook size={30} /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Createaccount