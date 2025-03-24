import { useState } from "react"
import { profileIcons } from "../../../assets/icons/userProfile/useProfileIcons"
import HeaderOf_info from "../HeaderOf_info"
import EditAboutme from "./EditAboutme"
function AboutMe() {
    const [aboutMe, setAboutMe] = useState('')
    const [edit, setEdit] = useState(false)
    return (
        <>
            {edit ? <EditAboutme aboutMe={aboutMe} setAboutMe={setAboutMe} setEdit={setEdit}/>
                :
                <div className="bg-white w-full rounded-lg">
                    <div className="w-[95%] m-auto ">
                        <HeaderOf_info icon={profileIcons.aboutme} text="About Me" available={aboutMe} setEdit={setEdit} edit={edit} />

                        <div className="pb-5 text-dark_gray">
                            {
                                aboutMe ?
                                    aboutMe
                                    : 'Please add About me to tell more about yourself'
                            }
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default AboutMe