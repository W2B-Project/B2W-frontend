import HeaderOf_info from "../HeaderOf_info"
import { profileIcons } from "../../../assets/icons/userProfile/useProfileIcons"
import { useState } from "react"
function Education() {
    const [education, seteducation] = useState(null)
    return (
        <>
            <div className="bg-white w-full rounded-lg">
                <div className="w-[95%] m-auto ">
                    <HeaderOf_info icon={profileIcons.education} text='Education' available={education} />
                    <div className="pb-5 text-dark_gray">
                        {
                            education?
                            education
                            :'Please add any education you have'
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Education