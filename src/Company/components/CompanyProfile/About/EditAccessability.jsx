import Header from "../../../../components/home/Header"
import Button from "../../../../components/global/Button"
import Accessibility from "../../../../components/company setup/Accessibility"
import { useState, useContext, useEffect } from "react"
import { CompanyContext } from "../../../../context/CompanyInfoContext"
import { accessibilityfeatures } from "../../../../content/setup/Companyinfo"
import { useNavigate } from "react-router-dom"

function EditAccessability() {
    const navigate=useNavigate()
    const { accsesability, setAccsesability } = useContext(CompanyContext)
    const [featuresList, setFeaturesList] = useState([])
    const info = {
        desc: 'What accessibility features does your company provide?',
    }

    useEffect(() => {
        setFeaturesList(
            accessibilityfeatures.map(f => ({
                ...f,
                selected: accsesability.includes(f.title)
            }))
        )
    }, [accsesability])

    const toggleSelect = (title) => {
        setFeaturesList(prev =>
            prev.map(f =>
                f.title === title ? { ...f, selected: !f.selected } : f
            )
        )
    }

    const handleUpdate = () => {
        const selectedTitles = featuresList
            .filter(f => f.selected)
            .map(f => f.title)
        setAccsesability(selectedTitles)
        navigate('/companyProfile/about')
    }

    return (
        <>
            <Header usertype="company" />
            <div className=" pt-28 bg-[#f4f4f6]">
                <div className="w-[98%] m-auto pt-5  rounded-lg bg-white ">
                    <p className="my-7 text-2xl font-semibold text-center font-lato">Edit Accessibility Features</p>
                    <div className="w-[40%] m-auto">
                        <Accessibility 
                        info={info} 
                        editmode={true} 
                        handleSave={handleUpdate} 
                        toggleSelect={toggleSelect}
                        featuresList={featuresList} />
                        <Button btn_text={'Update'} marg={5} onHandleClick={handleUpdate} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditAccessability