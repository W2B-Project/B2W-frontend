import Form from "../../components/setup/Form"
import info from '../../content/setup/userinfo'
import Header from "../../components/setup/Header"
import { useState } from "react"
import Accessibility from "../../components/setup/Accessibility"
import Info from "../../components/setup/Info"
function Setup() {
    const [step, setStep] = useState(0)
    const getnextstep = () => {
        setStep(s => s + 1)
    }
    let destructInfo = info[step]
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
                            : <Info info={destructInfo} />
                }
                {
                    <button type="submit"
                        onClick={() => getnextstep()}
                        className="p-2 bg-primry_purble w-full my-7 rounded-2xl border-primry_purble border-2 text-white">
                        {info[step].step === 7 ?'Save and start':'Next'}
                    </button>
                    
                }

            </form>
        </>
    )
}

export default Setup