import { Link } from "react-router-dom"
import Button from "../global/Button"
import Banner from "./Banner"
import bannerImage from "../../assets/images/signup/Forgot password.png"
import HeadingText from "./HeadingText"
function ForgotPassword() {
    return (
        <div className="grid grid-cols-2 h-screen bg-veryLight_purple">
            <Banner image={bannerImage}  bgColor="veryLight_purple" logoColor="#7F00FF" />
            <div className="bg-white p-8 rounded-lg shadow-md w-full flex flex-col justify-center px-20 rounded-bl-[6%] rounded-tl-[6%]">
                <HeadingText mainText="forgot password" subText="Forgot your password? Enter your email to recover your account easily" />
                <form>
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
                    
                    {/* Submit Button */}
                    <Link to="/verifyEmail">
                        <Button btn_text="Send" />
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default ForgotPassword
