import { useState } from 'react'
import Accessibility from '../../components/company setup/Accessibility'
import Header from '../../components/setup/Header'
import Form from '../../components/company setup/Form'
import People from '../../components/company setup/People'
import { cinfo } from '../../content/setup/Companyinfo'

function CompaySetup() {
    const [step, setStep] = useState(0)
    const [checked, setchecked] = useState(null)
    const getnextstep = () => {
        setStep(s => s + 1)
        setchecked(null)
    }
    let destructInfo=cinfo[step]
    return (
        <>
            <Header info={destructInfo} next={getnextstep} />
            {/* setup form */}
            <form className="w-[33%] m-auto mt-5" onSubmit={e => e.preventDefault()}>
                {
                    cinfo[step].step === 1 ?
                        <Form />
                        : cinfo[step].step === 2 ?
                            <Accessibility info={destructInfo} />
                            : <People info={destructInfo} />
                }
                {
                    <button type="submit"
                        onClick={() => getnextstep()}
                        className="p-2 bg-primry_purble w-full my-7 rounded-2xl border-primry_purble border-2 text-white">
                        {cinfo[step].step === 3 ?'Save and start':'Next'}
                    </button>
                    
                }

            </form>
        </>
    )
}

export default CompaySetup