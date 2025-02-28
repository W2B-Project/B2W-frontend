/* eslint-disable react/prop-types */
import { Search} from "lucide-react"
import Pprofile from "./Pprofile"

function People({ info }) {

    return (
        <>
            <p className='my-7 text-center font-lato text-xl font-bold'>{info.desc}</p>
            <div className="w-full border-2 p-2 rounded-2xl focus-within:border-primry_purble flex gap-5 my-5">
                <Search color="#7F00FF"/>
                <input type="text" className="focus:outline-none w-full" />
            </div>

            <Pprofile/>
            <Pprofile/>
            <Pprofile/>

        </>
    )
}

export default People