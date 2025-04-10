import { Edit,PlusIcon } from "lucide-react"

function HeaderOf_info({icon,text,available,setEditabout,setEdit,addModal,AddSkill}) {
    return (
        <>
        <div>
            <div className="flex items-center justify-between py-3">
                <div className="flex gap-2 items-center text-lg">
                    <img src={icon} alt="about me" />
                    <p>{text}</p>
                </div>
                {
                    available?
                    <Edit color="gray" className="cursor-pointer" onClick={setEditabout||setEdit}/>
                    :<PlusIcon color="gray" className="cursor-pointer" onClick={setEditabout||addModal||AddSkill}/>
                }
                
            </div>
            <hr className="pb-3" />
        </div>
            
        </>
    )
}

export default HeaderOf_info