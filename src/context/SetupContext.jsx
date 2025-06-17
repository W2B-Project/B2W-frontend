import { useState, createContext, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { getUserData } from "../Api_Calls/SetupServices";
import { getCompanyData } from "../Api_Calls/SetupServices";
import userinfo from "../content/setup/userinfo";
export const SetupContext = createContext()

function SetupProvider({ children }) {
    /* stattes to store formData sent to post api */
    const [UserInfo, setUserInfo] = useState({
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        jobTitle: "",
        jobType: "",
        workModel: "",
        experienceLevel: "",
        desiredJobTitle: "",
        disabilityType: "",
        fontSize: "15",
        darkMode: false,
        applicationUserId: ""
    })
    const [companyInfo, setCompanyInfo] = useState({
        id: 0,
        companyProfileId: 0,
        companyName: "",
        email: "",
        fieldOfWork: "",
        websiteUrl: "",
        socialMediaLinks: "",
        location: "",
        description: "",
        applicationUserId: ""
    })

    const [userData, setUserData] = useState({})
    const [comData, setComData] = useState({})

    const { authUser } = useAuth();
    useEffect(() => {
        const fetchData = async () => {
            if (!authUser?.userId) return;
            try {
                await getUserData(authUser.userId, setUserData);
                await getCompanyData(authUser.userId, setComData);
            } catch (err) {
                console.error("Error loading setup data:", err);
            }
        };
        fetchData();
    }, [authUser.userId]);

    return (
        <SetupContext.Provider value={{ UserInfo, setUserInfo, companyInfo, setCompanyInfo, comData, userData, setComData, setUserData }}>
            {children}
        </SetupContext.Provider>
    )
}

export default SetupProvider