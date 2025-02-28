import { useState } from "react"
import { csetup } from "../../assets/images/company setup/csetup"
import { Plus,XIcon } from "lucide-react"
function Pprofile() {
    const [istoggle,setToggle]=useState(true)
    const tog=()=>{
        setToggle(!istoggle)
    }
    return (
        <>
            
            <div className="flex justify-between items-center my-7">
                <div className="flex gap-3 align-middle">
                    <img src={csetup.person} alt="" className="rounded-full" />
                    <div>
                        <p>Murad Mohamed</p>
                        <p className="text-sm text-dark_gray">Product manager</p>
                    </div>
                </div>
                <div>
                    {istoggle?
                    <Plus color="#7F00FF" onClick={tog} className="cursor-pointer"/>:
                    <XIcon color="#E3E3E5" onClick={tog} className="cursor-pointer"/>}
                </div>
            </div>
        </>
    )
}

export default Pprofile