import { useState } from 'react'
import Accessibility from '../../components/company setup/Accessibility'
import Header from '../../components/setup/Header'
import Form from '../../components/company setup/Form'
import People from '../../components/company setup/People'
import { cinfo } from '../../content/setup/Companyinfo'
import { useContext } from 'react'
import { CompanyContext } from '../../context/CompanyInfoContext'
import { accessibilityfeatures } from '../../content/setup/Companyinfo'
import { handleFeatures } from '../../Api_Calls/SetupServices'
import { SetupContext } from '../../context/SetupContext'

function CompaySetup() {
    const { setAccsesability } = useContext(CompanyContext)
    const [step, setStep] = useState(0)
    let currentStep = cinfo[step]

    /* get company data to get companyid to send it to function that handle accesability features */
    const {comData} = useContext(SetupContext);

    /* get next step */
    const getnextstep = () => {
        setStep(s => s + 1)
    }

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
    /* handle add delete accesability features  */
    const handleSave = async () => {
        const selectedTitles = featuresList
            .filter(f => f.selected)
            .map(f => f.title);
        setAccsesability(selectedTitles);
        await handleFeatures(comData?.companyProfileId, featuresList);
        getnextstep()
    };
    return (
        <>
            <Header info={currentStep} next={getnextstep} />
            {/* setup form */}
            <div className="w-[33%] m-auto mt-5" >
                {
                    cinfo[step].step === 1 ?
                        <Form getnextstep={getnextstep} />
                        : cinfo[step].step === 2 ?
                            <Accessibility
                                info={currentStep}
                                handleSave={handleSave}
                                toggleSelect={toggleSelect}
                                featuresList={featuresList} />
                            : <People info={currentStep} />
                }
            </div>
        </>
    )
}

export default CompaySetup