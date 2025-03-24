import AboutMe from "./AboutMe"
import Education from "./Education"

function ProfessionalInfo() {
    return (
        <div className="flex flex-col gap-5">
            <AboutMe/>
            <Education/>
        </div>
    )
}

export default ProfessionalInfo