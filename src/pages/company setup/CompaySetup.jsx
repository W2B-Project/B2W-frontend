import { useState } from 'react'
import Accessibility from '../../components/company setup/Accessibility'
import Header from '../../components/setup/Header'
import Form from '../../components/company setup/Form'
import People from '../../components/company setup/People'
import { cinfo } from '../../content/setup/Companyinfo'
import { useContext } from 'react'
import { CompanyContext } from '../../context/CompanyInfoContext'
import { accessibilityfeatures } from '../../content/setup/Companyinfo'
function CompaySetup() {
    const {setAccsesability}=useContext(CompanyContext)
    const [step, setStep] = useState(0)
    const [checked, setchecked] = useState(null)
    /* get next step */
    const getnextstep = () => {
        setStep(s => s + 1)
        setchecked(null)
    }
    let destructInfo = cinfo[step]

    /* handle add accesability features */
    const [featuresList, setFeaturesList] = useState(
        accessibilityfeatures.map(f => ({ ...f, selected: false }))
    )
    const toggleSelect = (title) => {
        setFeaturesList(prev =>
            prev.map(f =>
                f.title === title ? { ...f, selected: !f.selected } : f
            )
        )
    }
    console.log(featuresList)
    const handleSave = () => {
        const selectedTitles = featuresList
            .filter(f => f.selected)
            .map(f => f.title)
        setAccsesability(selectedTitles)
        getnextstep()
    }

    return (
        <>
            <Header info={destructInfo} next={getnextstep} />
            {/* setup form */}
            <div className="w-[33%] m-auto mt-5" >
                {
                    cinfo[step].step === 1 ?
                        <Form getnextstep={getnextstep} />
                        : cinfo[step].step === 2 ?
                            <Accessibility 
                            info={destructInfo} 
                            handleSave={handleSave} 
                            toggleSelect={toggleSelect}
                            featuresList={featuresList} />
                            : <People info={destructInfo} />
                }

            </div>
        </>
    )
}

export default CompaySetup