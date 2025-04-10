import HeaderOf_info from "../../HeaderOf_info"
import { profileIcons } from "../../../../assets/icons/userProfile/useProfileIcons"
import { useContext } from "react"
import { InfoContext } from "../../../../context/Professinoal_InfoContext"
import { useNavigate } from "react-router-dom"
import FormModal from "../global/FormModal"

function Education() {
    const {EducationList, setEducationList,showModalEdu, setShowModalEdu,setEditPage}=useContext(InfoContext)
    const navigate=useNavigate()
    return (
        <>
            <div className="bg-white w-full rounded-lg">
                <div className="w-[95%] m-auto ">
                    <HeaderOf_info 
                    icon={profileIcons.education} 
                    text='Education' 
                    available={EducationList.length}
                    setEdit={()=>{
                        setEditPage(true)
                        navigate('/userProfile/Info/edit',{
                            state:{
                                'type':'Education'
                            }
                        })
                    }}
                    addModal={()=>{
                        setShowModalEdu(true)
                    }}
                    />
                    {/* show added educaton */}
                    <div className="pb-5 ">
                        {
                            EducationList.length!==0?
                            EducationList.map((edu,index)=>(
                                <div key={index}>
                                    <div className="flex gap-5 items-center my-5">
                                        <div className="rounded-xl bg-primry_purble w-16 h-16"></div>
                                        <div>
                                            <p className="text-lg ">{edu.Faculty}</p>
                                            <p className="text-dark_gray">{edu.University}</p>
                                            <div className="flex gap-5 text-sm text-dark_gray">
                                                <p>{edu.FromMonth} {edu.FromYear}</p>
                                                <p>{edu.ToMonth} {edu.ToYear}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            :<p className="text-dark_gray text-[17px]">Please add any education you have</p>
                        }
                    </div>
                </div>
                {
                    showModalEdu&&
                        <FormModal type="Education" onClose={()=>setShowModalEdu(false)} onSave={(newedu)=>setEducationList([...EducationList,newedu])} />
                    
                }
            </div>
        </>
    )
}

export default Education