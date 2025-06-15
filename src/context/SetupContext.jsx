import { useState, useContext, createContext } from "react";
export const SetupContext = createContext()

function SetupProvider({ children }) {
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

    return (
        <SetupContext.Provider value={{ UserInfo, setUserInfo,companyInfo,setCompanyInfo }}>
            {children}
        </SetupContext.Provider>
    )
}

export default SetupProvider