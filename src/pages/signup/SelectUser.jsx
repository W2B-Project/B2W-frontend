import Button from "../../components/global/Button";
import Logo from "../../components/global/Logo";
import HeadingText from "../../components/signup/HeadingText";
import EmployeePhoto from "../../components/signup/EmployeePhoto";
import Company from "../../components/signup/Company";
import { useNavigate } from "react-router-dom";
import {useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { AddRole } from "../../Api_Calls/Authservices";

function SelectUser() {
    const { selectUser, setSelectUser, authUser, setAuthUser } = useAuth();
    const [confirmed, setConfirmed] = useState(false);
    const navigate = useNavigate();

    // Handle "Next" Button Click
    const handleNext = async () => {
        if (selectUser) {
            setConfirmed(true);
            if (selectUser === "company")
                try {
                    const role = {
                        userId: `${authUser.userId}`, role: "Admin"
                    }
                    await AddRole(role)
                    const updatedUser = { ...authUser, roles: [role.role] };
                    setAuthUser(updatedUser);
                    localStorage.setItem("authUser", JSON.stringify(updatedUser));
                    navigate("/companysetup");
                }
                catch (err) {
                    console.log(err.response?.data)
                }
            else navigate("/setup");
        } else {
            alert("Please select an option before proceeding.");
        }
    };
    return (
        <div className="flex flex-col items-center">
            {/* Logo Position */}
            <div className="absolute top-[5%] left-[5%]">
                <Logo logoColor="#7F00FF" />
            </div>
            {/* Main Container */}
            <div className="flex flex-col justify-center items-center h-screen font-lato">
                <HeadingText mainText="Please select one of the following" subText="You are a/an " />
                <div className="flex justify-around w-full mt-6">
                    {/* Employee Card */}
                    <div className="flex items-center justify-center flex-col">
                        <div
                            onClick={() => !confirmed && setSelectUser("employee")}
                            className={`userCard p-4 border rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition 
                                ${selectUser === "employee" ? "bg-[#F2E5FF]" : "bg-[#F4F4F6]"} 
                                ${confirmed && selectUser !== "employee" ? "opacity-50 pointer-events-none" : ""}`}
                        >
                            <EmployeePhoto isSelected={selectUser === "employee"} />
                        </div>
                        <h2 className="text-center mt-2 font-semibold">Employee</h2>
                    </div>
                    {/* Company Card */}
                    <div className="flex items-center justify-center flex-col">
                        <div
                            onClick={() => !confirmed && setSelectUser("company")}
                            className={`userCard p-4 border rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition 
                                ${selectUser === "company" ? " bg-[#F2E5FF]" : "bg-[#F4F4F6]"} 
                                ${confirmed && selectUser !== "company" ? "opacity-50 pointer-events-none" : ""}`}
                        >
                            <Company isSelected={selectUser === "company"} />
                        </div>
                        <h2 className="text-center mt-2 font-semibold">Company</h2>
                    </div>
                </div>
                {/* "Next" Button */}
                <Button btn_text="Next" className="mt-6" onHandleClick={handleNext} marg={7} />
            </div>
        </div>
    );
}

export default SelectUser;
