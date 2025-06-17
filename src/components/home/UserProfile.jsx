import Button from "../global/Button"
import profileImage from "../../assets/images/home/cca3d1cbd0af0cf081dd88cf66a24693.jpg"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { useState,useEffect } from "react"
import { getUserData } from "../../Api_Calls/SetupProfiles"

function UserProfile() {
    const { authUser } = useAuth()
    const [data, setdata] = useState({})
    useEffect(() => {
        if (authUser.userId) getUserData(authUser.userId,setdata);
    }, [authUser.userId])
    return (
        <div className="w-full h-[230px] shadow p-5 rounded-xl bg-white flex flex-col  justify-center items-center">
            <img className="w-20 h-20 rounded-full" loading="lazy" src={profileImage} alt="" />
            <h3 className="text-2xl font-bold font-lato">{data.firstName} {data.lastName}</h3>
            <Link
                to="/userProfile"
                className="text-white bg-primry_purble  h-[40px] w-[165px] mt-5  flex items-center justify-center rounded-[20px]"
            >
                update profile
            </Link>
        </div>
    )
}

export default UserProfile
