import { Upload } from "lucide-react"
import { useContext } from "react"
import { InfoContext } from "../../../../context/Professinoal_InfoContext"
import ResumeModal from "./ResumeModal"
import Button from "../../../global/Button"
import { useNavigate } from "react-router-dom"

function EditResume() {
    const { cv, setCv, cvShowModal, setCVShowModal } = useContext(InfoContext)
    const navigate=useNavigate()
    const saveHandle=()=>{
        navigate('/userProfile/Info')
    }
    return (
        <>
            <div className="w-full px-10 bg-white rounded-lg min-h-48">
                <p className="w-1/2 m-auto text-center text-xl font-bold my-5">Edit CV</p>
                <div >
                    <p className="mb-2">Upload your resume (CV)</p>
                    <div className="w-full h-36 border-[1px] border-black rounded-lg ">
                        <div className=" m-auto my-10 " onClick={()=>setCVShowModal(true)}>
                            <Upload color="#7F00FF" className="w-10 h-10 m-auto cursor-pointer" />
                            <p className=" text-center my-1">{cv?.name}</p>
                        </div>
                    </div>
                    <Button btn_text={'Save'} width={'w-1/2'} marg={5} onHandleClick={saveHandle} />
                </div>
                {
                    cvShowModal &&
                    <ResumeModal onClose={() => setCVShowModal(false)} onSave={(newCV) => setCv(newCV)} />
                }
            </div>
        </>
    )
}

export default EditResume