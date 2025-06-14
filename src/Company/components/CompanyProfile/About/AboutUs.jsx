import { useContext, useState } from 'react'
import HeaderOf_info from '../../../../components/UserProfile/HeaderOf_info'
import { CompanyProAssets } from '../../../assests/companyAssets'
import { CompanyContext } from '../../../../context/CompanyInfoContext'
import EditAboutUs from './EditAboutUs'
function AboutUs() {
    const {about} = useContext(CompanyContext)
    const [edit, setEdit] = useState(false)
    return (
        <>
            {
                edit ? <EditAboutUs setEdit={()=>setEdit(!edit)} aboutData={about?about:null} />
                    : <div className="bg-white w-full rounded-lg">
                        <div className="w-[95%] m-auto ">
                            <HeaderOf_info icon={CompanyProAssets.about} text="About Us" available={about} setEditabout={() => setEdit(!edit)} />
                            <div className='pb-5 text-dark_gray'>
                                {
                                    about ?
                                        about
                                        : <p className="text-[17px]">Please add About us to tell more about your company</p>
                                }
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}

export default AboutUs