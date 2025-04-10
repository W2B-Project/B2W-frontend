import { useContext} from "react"
import AboutMe from "./aboutMe/AboutMe"
import Education from "./education/Education"
import { Outlet } from "react-router-dom"
import { InfoContext } from "../../../context/Professinoal_InfoContext"
import Experience from "./Experience/Experience"
import Skills from "./skills/Skills"

function ProfessionalInfo() {
    const {editPage}=useContext(InfoContext)

    return (
        <div className="flex flex-col gap-5">
            {editPage ?
                <Outlet />
                : <>
                    <AboutMe />
                    <Education type="Education" />
                    <Experience type="Experience"/>
                    <Skills/>
                </>
            }

        </div>
    )
}

export default ProfessionalInfo