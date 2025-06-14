import { useState, useEffect,useContext } from 'react'
import Button from '../../../../components/global/Button'
import {CompanyContext} from '../../../../context/CompanyInfoContext'

function EditAboutUs({ setEdit, aboutData = null }) {
    const { about, setAbout } = useContext(CompanyContext)
    const [text, setText] = useState('')
    const handleclick = (e) => {
        e.preventDefault()
        setAbout(text)
        setEdit(false)
    }
    useEffect(() => {
        aboutData ? setText(aboutData) : null
    }, [aboutData])
    return (
        <>
            <div className="bg-white w-full rounded-lg">
                <div className="w-[95%] m-auto ">
                    <p className="text-center font-medium font-lato py-5 text-xl">
                        {about ? 'Edit About' : 'Add About'}
                    </p>
                    <form>
                        <label htmlFor="">About Us</label>
                        <textarea type="text" onChange={(e) => setText(e.target.value)} value={text} className="rounded-lg w-full p-5 border-2 border-black focus:border-primry_purble mt-2" />
                        <Button btn_text={`${about ? 'Update' : 'Add About'}`} marg={7} width={'w-1/3'} onHandleClick={handleclick} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditAboutUs