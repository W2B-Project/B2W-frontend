import { Link } from "react-router-dom"
import Button from "../global/Button"
import Banner from "./Banner"
import bannerImage from "../../assets/images/signup/Reset password-rafiki 1.png"
import HeadingText from "./HeadingText"
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react"

function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="grid grid-cols-2 h-screen bg-veryLight_purple">
            <Banner image={bannerImage}  bgColor="veryLight_purple" logoColor="#7F00FF" />
            <div className="bg-white p-8 rounded-lg shadow-md w-full flex flex-col justify-center px-20 rounded-bl-[6%] rounded-tl-[6%]">
                <HeadingText mainText="Create new password" subText="Create a new password and confirm it to secure your account" />
                <form>
                    {/* Password */}
                    <div className="mt-4 relative">
                        <label className="text-gray-600">Password</label>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            placeholder="*******"
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
                    {/* Confirm Password */}
                    <div className="mt-4 relative">
                        <label className="text-gray-600">Confirm New Password</label>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            placeholder="*******"
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
                    
                    {/* Submit Button */}
                    <Link to="/succusspage">
                        <Button btn_text="Send" />
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default ResetPassword
