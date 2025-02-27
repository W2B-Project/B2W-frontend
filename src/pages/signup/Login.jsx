import Banner from "../../components/signup/Banner"
import bannerImage from '../../assets/images/signup/login.png'
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Button from "../../components/global/Button";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="grid grid-cols-2 h-screen bg-primry_purble">
            <Banner image={bannerImage} text='Where Hope starts' bgColor="primry_purble" logoColor="white" />
            <div className="bg-white p-8 rounded-lg shadow-md w-full flex flex-col justify-center px-20 rounded-bl-[6%] rounded-tl-[6%]">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
                    Login
                </h2>
                <form action="">
                    {/* Email */}
                    <div className="mt-4">
                        <label className="text-gray-600">Email Address</label>
                        <input
                            required
                            type="email"
                            placeholder="Example@gmail.com"
                            className="mt-1 p-2 border border-gray-300 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                    </div>

                    {/* Password */}
                    <div className="mt-4 relative">
                        <label className="text-gray-600">Password</label>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            placeholder="* * * * * * * * * *"
                            className="mt-1 p-2 border border-gray-300 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        <button
                            type="button"
                            className="absolute right-3 top-[40px]  text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    <Link to="/forgotpassword">
                        <p className="text-md text-[#66666E] text-right">Forgot password?</p>
                    </Link>
                    {/* Submit Button */}
                    <Link to="/">
                        <Button btn_text="Sign Up" />
                    </Link>
                <p>Already have an account? <span className="text-primry_purble font-bold">
                    <Link to="/signup">Sign up</Link>
                    </span>  
                </p>
                <div className="flex items-center my-4">
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

export default Login