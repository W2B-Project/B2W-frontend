import HeaderOf_info from '../../../../components/UserProfile/HeaderOf_info'
import { CompanyProAssets } from '../../../assests/companyAssets'
import { useContext } from 'react'
import { CompanyContext } from '../../../../context/CompanyInfoContext'
import { useNavigate } from 'react-router-dom'
function AccesabilityFeatures() {
    const { accsesability,setEditPage} = useContext(CompanyContext)
    const navigate = useNavigate()
    return (
        <>
            <div className="bg-white w-full rounded-lg pb-5">
                <div className="w-[95%] m-auto">
                    <HeaderOf_info 
                    icon={CompanyProAssets.accessability} 
                    text="Accessibility Features" 
                    setAcc={() => {setEditPage(true) 
                    ,navigate('/EditAccessability')}} />
                    {
                        accsesability.length !== 0 ?
                            accsesability.map((f, index) => (
                                <div key={index} className="flex gap-2 my-2 items-center text-dark_gray text-[17px]">
                                    <p className="rounded-full w-3 h-3 bg-primaryLight"></p>
                                    <p>{f}</p>
                                </div>
                            ))
                            : <p className="text-dark_gray text-[17px]">Please add any Accessibility Features you provide</p>
                    }
                </div>

            </div>
        </>
    )
}

export default AccesabilityFeatures