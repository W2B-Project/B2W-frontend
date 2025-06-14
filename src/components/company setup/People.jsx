/* eslint-disable react/prop-types */
import { Search} from "lucide-react"
import Pprofile from "./Pprofile"
import Button from "../global/Button"
import { useNavigate } from "react-router-dom"
function People({ info,edit=false }) {
    const navigate=useNavigate()
    return (
        <>
            {!edit&&<p className='my-7 text-center font-lato text-xl font-bold'>{info.desc}</p>}
            <div className="w-full border-2 p-2 rounded-2xl focus-within:border-primry_purble flex gap-5 my-5 items-center">
                <Search color="#7F00FF"/>
                <input type="text" className="border-0 w-full" />
            </div>

            <Pprofile/>
            <Pprofile/>
            <Pprofile/>
            {!edit&&<Button btn_text={'Save and start'} onHandleClick={()=>navigate('/home-Company')} marg={5}/>}
        </>
    )
}

export default People