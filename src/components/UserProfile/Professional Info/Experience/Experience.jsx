import HeaderOf_info from "../../HeaderOf_info"
import { profileIcons } from "../../../../assets/icons/userProfile/useProfileIcons"
import { useContext } from "react"
import { InfoContext } from "../../../../context/Professinoal_InfoContext"
import { useNavigate } from "react-router-dom"
import FormModal from "../global/FormModal"
import { userprofileassets } from "../../../../assets/images/user Profile/userprofileAssets"

function Experience() {
    const {ExperienceList, setExperienceList,showModalEx, setShowModalEx,setEditPage}=useContext(InfoContext)
    const navigate=useNavigate()
    return (
        <div className="bg-white w-full rounded-lg">
                <div className="w-[95%] m-auto ">
                    <HeaderOf_info 
                    icon={profileIcons.experience} 
                    text='Experience' 
                    available={ExperienceList.length}
                    setEdit={()=>{
                        setEditPage(true)
                        navigate('/userProfile/Info/edit',{
                            state:{
                                'type':'Experience'
                            }
                        })
                    }}
                    addModal={()=>{
                        setShowModalEx(true)
                    }}
                    />
                    {/* show added experience */}
                    <div className="pb-5 ">
                        {
                            ExperienceList.length!==0?
                            ExperienceList.map((ex,index)=>(
                                <div key={index}>
                                    <div className="flex gap-5 items-center my-5">
                                        <img src={userprofileassets.company} className="rounded-xl  w-16 h-16"/>
                                        <div>
                                            <p className="text-lg ">{ex.CompanyName}</p>
                                            <p className="text-dark_gray">{ex.JobTitle}</p>
                                            <div className="flex gap-5 text-sm text-dark_gray">
                                                <p>{ex.FromMonth} {ex.FromYear}</p>
                                                <p>{ex.ToMonth} {ex.ToYear}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            :<p className="text-dark_gray text-[17px]">Please add any experience you have</p>
                        }
                    </div>
                </div>
                {
                    showModalEx&&
                        <FormModal type="Experience" onClose={()=>setShowModalEx(false)} onSave={(newex)=>setExperienceList([...ExperienceList,newex])} />
                    
                }
            </div>
    )
}

export default Experience