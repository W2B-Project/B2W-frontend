import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/home/Header";
import ProfileMenu from "../../components/home/ProfileMenu";
import ServicesMenu from "../../components/home/ServicesMenu";
import PeopleList from "../../components/home/PeopleList";
import { useState,useEffect } from "react";
import Chatbot from "../services/Chatbot";
import SignLanguageTranslator from "../services/SignLanguageTranslator";
import CvAnalysis from "../services/CvAnalysis";
import SavedJobs from "../../components/home/SavedJobs";
import Accessibility from "../../components/home/Accessibility";
import { useAuth } from "../../context/AuthContext";
import HomeCom from "../../Company/pages/HomeCom";
function Home() {
    const [service, setService] = useState('')
    const { authUser } = useAuth()
    const navigate = useNavigate();
    useEffect(() => {
        if (authUser?.roles[0] === "Admin") {
            navigate("/home-company");
        }
    }, [authUser,navigate]);
        return (
            <>
                <Header setService={setService} />
                <div className="px-8 h-auto bg-[#f4f4f6] pt-28">
                    <div className="grid grid-cols-12 gap-5">
                        {service === 'Chatbot Interview' ?
                            <Chatbot />
                            : service === 'Signify' ?
                                <SignLanguageTranslator />
                                : service === 'Resume Reviewer' ?
                                    <CvAnalysis />
                                    : service === 'Saved Jobs' ?
                                        <SavedJobs />
                                        : service === 'Accessibility' ?
                                            <Accessibility />
                                            : (
                                                <>
                                                    <ProfileMenu setService={setService} />
                                                    <div className="col-span-6 flex flex-col gap-3 w-full">
                                                        <Outlet />
                                                    </div>
                                                </>
                                            )
                        }
                        <div className="col-span-3 flex flex-col gap-3">
                            <ServicesMenu setService={setService} service={service} />
                            <PeopleList />
                        </div>
                    </div>
                </div>
            </>

        );
}

export default Home;
