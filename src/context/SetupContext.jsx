import { useState, createContext, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { getFeatures, getUserData, GetUserPic } from "../Api_Calls/SetupServices";
import { getCompanyData } from "../Api_Calls/SetupServices";
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
    const [accessibility, setAccessibility] = useState()
    const [Pic,setPic]=useState(null)
    const [userData, setUserData] = useState({})
    const [comData, setComData] = useState({})

    const { authUser } = useAuth();
    useEffect(() => {
        const fetchData = async () => {
            if (!authUser?.userId) return;
            try {
                await getUserData(authUser.userId, setUserData);
                await getCompanyData(authUser.userId, setComData);
                await GetUserPic(authUser.userId,setPic)
            } catch (err) {
                console.error("Error loading setup data:", err);
            }
        };
        fetchData();
    }, [authUser.userId]);
    useEffect(() => {
        if (comData?.companyProfileId) {

            getFeatures(comData.companyProfileId, setAccessibility);
            
        }
    }, [comData?.companyProfileId]);
    return (
        <SetupContext.Provider value={{ UserInfo, setUserInfo, companyInfo, setCompanyInfo, comData, userData, setComData, setUserData,Pic,setPic,accessibility,setAccessibility }}>
            {children}
        </SetupContext.Provider>
    )
}

export default SetupProvider