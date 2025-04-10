import { useState, useContext } from "react"
import { InfoContext } from "../../../../context/Professinoal_InfoContext"
import { Plus,XIcon } from "lucide-react"
import Button from "../../../global/Button"

function EditSkills() {
    const { skillSet, setSkillSet, skill, setSkill } = useContext(InfoContext)

    const AddLink = (e) => {
        e.preventDefault()
        if (skill) {
            setSkillSet([...skillSet, { id: Date.now(), newSkill: skill }])
            setSkill('')
        }
    }
    const deleteSkill=(id)=>{
        setSkillSet(prev=>prev.filter(sk=>sk.id!==id))
    }

    return (
        <>
            <div className="w-full px-10 bg-white rounded-lg min-h-48">
                <p className="w-1/2 m-auto text-center text-xl font-bold my-5">Edit Skills</p>
                <form className="mt-5">
                    <input type="text" value={skill} onChange={(e) => setSkill(e.target.value)} className="w-full border-dark_gray rounded-lg placeholder:text-dark_gray focus:border-primry_purble" placeholder="Add Skills" />
                    <div className="mt-3 flex gap-3 flex-wrap">
                        {skillSet.length!==0 &&
                            skillSet.map(skill => (
                            <div key={skill.id} className="flex gap-2 items-center p-2 bg-gray-200 text-dark_gray rounded-lg text-sm">
                                <XIcon onClick={()=>deleteSkill(skill.id)} className="cursor-pointer w-4 font-bold "/>
                                {skill.newSkill}
                            </div>
                        ))}
                    </div>
                    <Button btn_text='Save' width='w-1/3' marg={7} onHandleClick={AddLink} />
                </form>

            </div>
        </>
    )
}

export default EditSkills