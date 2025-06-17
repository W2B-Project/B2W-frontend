import { setup } from "../../assets/images/setup/setupAssets"
import { Plus, XIcon } from "lucide-react"
import { useContext, useState } from "react"
import Button from "../global/Button"
import {SetupContext} from '../../context/SetupContext'
import { useAuth } from "../../context/AuthContext"
import { getCompanyData, setupNewCompany } from "../../Api_Calls/SetupServices"
function Form({ getnextstep, btn_text }) {
    const [link, setlink] = useState('')
    const [Social, setSocial] = useState([])
    const {companyInfo, setCompanyInfo,setComData}=useContext(SetupContext)
    /* handle add social links */
    const addlink = () => {
        if (Social.length >= 0 && Social.length <= 3 && link) {
            setSocial([...Social, { id: Date.now(), text: link }])
            setlink('')
        }
    }
    const deletelink = (id) => {
        setSocial(prev => prev.filter(l => l.id !== id))
    }
    
    const handleChange = (e) => {
        setCompanyInfo({ ...companyInfo, [e.target.name]: e.target.value })
    }

        const {authUser}=useAuth()
        
        const handleSetup=async(e)=>{
            e.preventDefault()
            const finalDate= {...companyInfo,applicationUserId:authUser.userId}
            await setupNewCompany(finalDate)
            await getCompanyData(authUser.userId,setComData)
            getnextstep()
        }
    return (
        <form>
            {/* image upload */}
            <input type="file" id="inputt" className="hidden" />
            <label htmlFor="inputt">
                <img src={setup.addimg} loading="lazy" alt="upload image" className="m-auto" width={100} />
            </label>
            {/* user info */}
            <div className="mt-5">
                <div className="flex flex-col gap-3 w-full mt-5">
                    <label htmlFor="companyName">Company Name</label>
                    <input 
                    type="text" 
                    name="companyName" 
                    value={companyInfo.companyName}
                    placeholder="Company Name" 
                    onChange={handleChange}
                    className="border-2 border-light_gray placeholder:text-dark_gray p-2 rounded-2xl focus:border-primry_purble" />
                </div>
                <div className="flex flex-col gap-3 w-full mt-5">
                    <label htmlFor="email">Email Address</label>
                    <input 
                    type="text" 
                    name="email"
                    value={companyInfo.email}
                    placeholder="example@gmail.com" 
                    onChange={handleChange}
                    className="border-2 border-light_gray placeholder:text-dark_gray p-2 rounded-2xl focus:border-primry_purble" />
                </div>
                <div className="flex flex-col gap-3 w-full mt-5">
                    <label htmlFor="field">What is your company&apos;s field of work?</label>
                    <input 
                    type="text" 
                    name="fieldOfWork" 
                    value={companyInfo.fieldOfWork}
                    placeholder="field" 
                    onChange={handleChange}
                    className="border-2 border-light_gray placeholder:text-dark_gray p-2 rounded-2xl focus:border-primry_purble" />
                </div>
                <div className="flex flex-col gap-3 w-full mt-5">
                    <label htmlFor="website">Website link (if available)</label>
                    <input 
                    type="text" 
                    name="websiteUrl" 
                    value={companyInfo.websiteUrl}
                    placeholder="Paste the URL here" 
                    onChange={handleChange}
                    className="border-2 border-light_gray placeholder:text-dark_gray p-2 rounded-2xl focus:border-primry_purble" />
                </div>
                {/* add social links */}
                <div className="flex flex-col gap-3 w-full mt-5">
                    <label htmlFor="Social">Social media links</label>
                    <div className="border-2 border-light_gray p-1 rounded-2xl flex justify-between items-center focus-within:border-primry_purble">
                        <input 
                        type="text" 
                        name="socialMediaLinks" 
                        placeholder="Maximum number of links: 4" 
                        className="w-full placeholder:text-dark_gray  border-0 focus:outline-none"
                        value={link}
                        onChange={(e) => setlink(e.target.value)} />

                        <Plus color="#E3E3E5" className="cursor-pointer" onClick={addlink} />
                    </div>
                    {
                        Social.length !== 0 ?
                            Social.map(s => (
                                <div className="bg-gray-50 ps-5 p-1 rounded-lg  text-dark_gray  flex justify-between" key={s.id}>
                                    <p>{s.text}</p>
                                    <XIcon color="#E3E3E5" onClick={() => deletelink(s.id)} className="cursor-pointer" />
                                </div>
                            ))
                            : ''
                    }
                </div>
                {/*  */}
                <div className="flex flex-col gap-3 w-full mt-5">
                    <label htmlFor="website">Company Location </label>
                    <input 
                    type="text" 
                    name="location" 
                    value={companyInfo.location}
                    placeholder="Ex : Cairo , Egypt" 
                    onChange={handleChange}
                    className="border-2 border-light_gray placeholder:text-dark_gray p-2 rounded-2xl focus:border-primry_purble" />
                </div>
                <div className="flex flex-col gap-3 w-full mt-5">
                    <label htmlFor="description">Brief description of the company and its activities</label>
                    <textarea 
                    rows='4' 
                    name="description" 
                    value={companyInfo.description}
                    placeholder="type here..." 
                    onChange={handleChange}
                    className="border-2 border-light_gray p-2 placeholder:text-dark_gray focus:border-primry_purble rounded-2xl" />
                </div>
            </div>
            <Button onHandleClick={handleSetup} btn_text={btn_text || 'Next'} marg={5} />
        </form>
    )
}

export default Form