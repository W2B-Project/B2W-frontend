
import { setup } from "../../assets/images/setup/setupAssets"
import { Plus, XIcon } from "lucide-react"
import { useState } from "react"
import Button from "../global/Button"

function Form({getnextstep}) {
    const [link, setlink] = useState('')
    const [Social, setSocial] = useState([])

    const addlink = () => {
        if (Social.length >= 0 && Social.length <= 3 && link) {
            setSocial([...Social, { id: Date.now(), text: link }])
            setlink('')
        }
    }
    const deletelink = (id) => {
        setSocial(prev => prev.filter(l => l.id !== id))
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
                    <label htmlFor="Company Name">Company Name</label>
                    <input type="text" name="Company Name" placeholder="Company Name" className="border-2 border-light_gray placeholder:text-dark_gray p-2 rounded-2xl focus:border-primry_purble" />
                </div>
                <div className="flex flex-col gap-3 w-full mt-5">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email" placeholder="example@gmail.com" className="border-2 border-light_gray placeholder:text-dark_gray p-2 rounded-2xl focus:border-primry_purble" />
                </div>
                <div className="flex flex-col gap-3 w-full mt-5">
                    <label htmlFor="field">What is your company&apos;s field of work?</label>
                    <input type="text" name="field" placeholder="field" className="border-2 border-light_gray placeholder:text-dark_gray p-2 rounded-2xl focus:border-primry_purble" />
                </div>
                <div className="flex flex-col gap-3 w-full mt-5">
                    <label htmlFor="website">Website link (if available)</label>
                    <input type="text" name="website" placeholder="Paste the URL here" className="border-2 border-light_gray placeholder:text-dark_gray p-2 rounded-2xl focus:border-primry_purble" />
                </div>
                {/* add social links */}
                <div className="flex flex-col gap-3 w-full mt-5">
                    <label htmlFor="Social">Social media links</label>
                    <div className="border-2 border-light_gray p-1 rounded-2xl flex justify-between items-center focus-within:border-primry_purble">
                        <input type="text" name="Social" placeholder="Maximum number of links: 4" className="w-full placeholder:text-dark_gray  border-0 focus:outline-none"
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
                    <input type="text" name="website" placeholder="Ex : Cairo , Egypt" className="border-2 border-light_gray placeholder:text-dark_gray p-2 rounded-2xl focus:border-primry_purble" />
                </div>
                <div className="flex flex-col gap-3 w-full mt-5">
                    <label htmlFor="description">Brief description of the company and its activities</label>
                    <textarea rows='4' name="description" placeholder="type here..." className="border-2 border-light_gray p-2 placeholder:text-dark_gray focus:border-primry_purble rounded-2xl" />
                </div>
            </div>
            <Button onHandleClick={()=>getnextstep()} btn_text={'Next'} marg={5} />
        </form>
    )
}

export default Form