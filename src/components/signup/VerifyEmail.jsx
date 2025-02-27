import { useState } from "react";
import { Link } from "react-router-dom";
import OTPInput from "react-otp-input";

import bannerImage from "../../assets/images/signup/Drone Delivery-cuate 1.png";
import Button from "../global/Button";
import Banner from "./Banner";
import HeadingText from "./HeadingText";

function VerifyEmail() {
  const [otp, setOtp] = useState("");

  return (
    <div className="grid grid-cols-2 h-screen bg-veryLight_purple">
      {/* Left Side - Banner */}
      <Banner image={bannerImage} bgColor="veryLight_purple" logoColor="#7F00FF" />

      {/* Right Side - Email Verification */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full flex flex-col justify-center px-20 rounded-bl-[6%] rounded-tl-[6%]">
        <HeadingText
          mainText="Verify your Email"
          subText="A verification code has been sent to your email. Please enter it here to verify your identity."
        />

        {/* OTP Input */}
        <div className="mt-4 flex flex-col items-center">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputType="text"
            renderInput={(props) => <input {...props} />}
            containerStyle="flex justify-evenly space-x-3 w-full"
            inputStyle="!w-[50px] !h-[50px] text-lg border border-gray-300 rounded-2xl text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Resend Code */}
        <button className="text-purple-600 text-sm mt-3 hover:underline">
          Resend code?
        </button>

        {/* Verify Button */}
        <Link to="/resetPassword" className="mt-6">
          <Button btn_text="Verify" />
        </Link>
      </div>
    </div>
  );
}

export default VerifyEmail;
