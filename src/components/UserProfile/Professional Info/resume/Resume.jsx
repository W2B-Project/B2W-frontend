import HeaderOf_info from "../../HeaderOf_info"
import { useContext } from "react"
import { InfoContext } from "../../../../context/Professinoal_InfoContext"
import { profileIcons } from "../../../../assets/icons/userProfile/useProfileIcons"
import { useNavigate } from "react-router-dom"
import { BsFilePdf } from "react-icons/bs"
import ResumeModal from "./ResumeModal"

function Resume() {
    const { setEditPage, cv, setCv, cvShowModal, setCVShowModal } = useContext(InfoContext)
    console.log(cv)
    const navigate = useNavigate()
    return (
        <>
            <div className="bg-white w-full rounded-lg">
                <div className="w-[95%] m-auto ">
                    <HeaderOf_info
                        icon={profileIcons.cv}
                        text='Resume/CV'
                        available={cv}
                        EditCV={() => {
                            setEditPage(true)
                            navigate('/userProfile/Info/editCV')
                        }}
                        addModal={() => {
                            setCVShowModal(true)
                        }}
                    />
                    <div className="pb-5">
                        {cv ?
                            <div className="flex gap-2 my-2 items-center text-dark_gray text-[17px]">
                                <BsFilePdf color="red" className="w-8 h-8" />
                                <a href={URL.createObjectURL(cv)} 
                                    target="_blank"
                                    rel="noopener noreferrer" className="text-lg">{cv.name}</a>
                            </div>

                            : <p className="text-dark_gray text-[17px]">Please upload your resume</p>}
                    </div>
                </div>
                {
                    cvShowModal &&
                    <ResumeModal onClose={() => setCVShowModal(false)} onSave={(newCV) => setCv(newCV)} />
                }
            </div>
        </>
    )
}

export default Resume