import HeaderOf_info from "../../HeaderOf_info"
import { profileIcons } from "../../../../assets/icons/userProfile/useProfileIcons"
import { useNavigate } from "react-router-dom"
import { useState,useContext } from "react"
import { InfoContext } from "../../../../context/Professinoal_InfoContext"

function Skills() {
    const {skillSet}=useContext(InfoContext)
    const [EditPage, setEditPage] = useState(false)
    const navigate = useNavigate()

    return (
        <>
            <div className="bg-white w-full rounded-lg">
                <div className="w-[95%] m-auto ">
                    <HeaderOf_info
                        icon={profileIcons.skills}
                        text='Skills'
                        available={skillSet.length}
                        AddSkill={() => {
                            setEditPage(true)
                            navigate('/userProfile/Info/editSkills')
                        }}
                    />
                    <div className="pb-5">
                        {skillSet.length !== 0 ?
                        skillSet.map(skill=>(
                            <div key={skill.id} className="flex gap-2 my-2 items-center text-dark_gray text-[17px]">
                                <p className="rounded-full w-3 h-3 bg-primaryLight"></p>
                                <p>{skill.newSkill}</p>
                            </div>
                        ))
                        : <p className="text-dark_gray text-[17px]">Please add any skills you have</p>}
                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default Skills