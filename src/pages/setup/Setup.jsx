import Form from "../../components/setup/Form"
import info from '../../content/setup/userinfo'
import Header from "../../components/setup/Header"
import { useContext, useState } from "react"
import Accessibility from "../../components/setup/Accessibility"
import Info from "../../components/setup/Info"
import { setupNewUser } from "../../Api_Calls/SetupProfiles"
import { useAuth } from "../../context/AuthContext"
import { SetupContext } from "../../context/SetupContext"
import { useNavigate } from "react-router-dom"
function Setup() {
    const [step, setStep] = useState(0)
    const [checked, setchecked] = useState(null)
    const navigate=useNavigate()
    const getnextstep = () => {
        setStep(s => s + 1)
        setchecked(null)
    } 
    let destructInfo = info[step]

    const {authUser}=useAuth()
    const {UserInfo}=useContext(SetupContext)
    
    const handleSetup=(e)=>{
        e.preventDefault()
        const finalDate= {...UserInfo,applicationUserId:authUser.userId}
        setupNewUser(finalDate)
        navigate("/home")
    }
    return (
        <>
            {/* header */}
            <Header info={destructInfo} next={getnextstep} />
            {/* setup form */}
            <form className="w-[28%] m-auto mt-5" onSubmit={handleSetup}>
                {
                    info[step].step === 1 ?
                        <Form getnextstep={getnextstep}/>
                        : info[step].step === 7 ?
                            <Accessibility />
                            : <Info info={destructInfo} checked={checked} setchecked={setchecked} getnextstep={getnextstep} />
                }
                {
                    info[step].step === 7&&
                    <button type="submit"
                        className="p-2 bg-primry_purble w-full my-7 rounded-2xl border-primry_purble border-2 text-white">
                        
                        Save and start
                    </button>
                }

            </form>
        </>
    )
}

export default Setup