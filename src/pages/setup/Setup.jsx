import Form from "../../components/setup/Form"
import info from '../../content/setup/userinfo'
import Header from "../../components/setup/Header"
import { useState } from "react"
import Accessibility from "../../components/setup/Accessibility"
import Info from "../../components/setup/Info"
import { useNavigate } from "react-router-dom"
function Setup() {
    const [step, setStep] = useState(0)
    const [checked, setchecked] = useState(null)
    const getnextstep = () => {
        setStep(s => s + 1)
        setchecked(null)
    }
    let destructInfo = info[step]
    const navigate = useNavigate()
    return (
        <>
            {/* header */}
            <Header info={destructInfo} next={getnextstep} />
            {/* setup form */}
            <form className="w-[28%] m-auto mt-5" onSubmit={e => e.preventDefault()}>
                {
                    info[step].step === 1 ?
                        <Form />
                        : info[step].step === 7 ?
                            <Accessibility />
                            : <Info info={destructInfo} checked={checked} setchecked={setchecked} />
                }
                {
                    <button type="submit"
                        onClick={() => info[step].step === 7? navigate('/home') :getnextstep()  }
                        className="p-2 bg-primry_purble w-full my-7 rounded-2xl border-primry_purble border-2 text-white">
                        {info[step].step === 7 ? 'Save and start' : 'Next'}
                    </button>

                }

            </form>
        </>
    )
}

export default Setup