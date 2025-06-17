import Banner from "../../components/signup/Banner"
import bannerImage from '../../assets/images/signup/login.png'
import { Eye, EyeOff } from "lucide-react";
import Button from "../../components/global/Button";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../Api_Calls/Authservices";
import { useAuth } from "../../context/AuthContext";
import { useContext } from "react";
import { SetupContext } from "../../context/SetupContext";
import { getCompanyData } from "../../Api_Calls/SetupServices";
import { getUserData } from "../../Api_Calls/SetupServices";

function Login() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [PassError, setPassError] = useState(null)
    const { showPassword, setShowPassword, setAuthUser, authUser } = useAuth();
    const { setUserData, setComData } = useContext(SetupContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.email && form.password) {
            setEmailError("")
            setPassError("")
            try {
                const data = await loginUser(form);
                const userData = {
                    token: data.token,
                    email: data.email,
                    firstName: data.FirstName,
                    lastName: data.LastName,
                    userId: data.userId,
                    roles: data.roles,
                    isAuthenticated: data.isAuthenticated,

                }
                setAuthUser(userData);
                localStorage.setItem("authUser", JSON.stringify(userData));

                await getUserData(authUser.userId, setUserData);
                await getCompanyData(authUser.userId, setComData);

                authUser?.roles[0] === "User" ? navigate('/home') : navigate('/home-Company')

            } catch (err) {
                console.log(err.response.data || "Login failed");
                setError(err.response.data)
            }
        }
        else if (form.email === "" && form.password === "") {
            setEmailError('Email is required')
            setPassError('Password is required')
        }
        else if (form.password === "") {
            setPassError('Password is required')
            setEmailError("")
        }
        else {
            setEmailError('Email is required')
            setPassError("")
        }

    };

    return (
        <div className="grid grid-cols-2 h-screen bg-primry_purble">
            <Banner image={bannerImage} text='Where Hope starts' bgColor="primry_purble" logoColor="white" />
            <div className="bg-white p-8 rounded-lg shadow-md w-full flex flex-col justify-center px-20 rounded-bl-[6%] rounded-tl-[6%]">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-6 font-lato">
                    Login
                </h2>
                <form action="" onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="mt-4">
                        <label className="text-gray-600 font-roboto">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="Example@gmail.com"
                            className="mt-1 p-2 border border-gray-300 placeholder:text-zinc-400 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    {emailError && <div className="text-sm text-red-500 my-1">{emailError}</div>}
                    {/* Password */}
                    <div className="mt-4 relative">
                        <label className="text-gray-600 font-roboto">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            placeholder="* * * * * * * * * *"
                            className="mt-1 p-2 border placeholder:text-zinc-400 border-gray-300 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-[40px] font-roboto text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    {PassError && <div className="text-sm text-red-500 my-1">{PassError}</div>}

                    <Link to="/forgotpassword">
                        <p className="text-md text-[#66666E] text-right font-roboto">Forgot password?</p>
                    </Link>
                    {error && <div className="text-sm text-red-500 mb-1">{error}</div>}
                    {/* Submit Button */}
                    <Button btn_text="Login" marg={7} />

                    <p className="text-dark_gray font-medium font-roboto">Don’t have an account?
                        <span className="text-primry_purble font-bold">
                            <Link to="/signup"> Sign up</Link>
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

export default Login