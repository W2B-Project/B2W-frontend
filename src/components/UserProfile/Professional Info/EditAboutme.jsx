import { useState } from 'react'
import Button from '../../global/Button'

function EditAboutme({aboutMe,setAboutMe,setEdit}) {
    const [text,setText]=useState('')
    const handleclick=(e)=>{
        e.preventDefault()
        setAboutMe(text)
        setEdit(false)
    }
    return (
        <>
            <div className="bg-white w-full rounded-lg">
                <div className="w-[95%] m-auto ">
                    <p className="text-center font-medium font-lato py-5 text-xl">
                        {aboutMe?'Edit About':'Add About'}
                    </p>
                    <form>
                        <label htmlFor="">About Me</label>
                        <textarea type="text" onChange={(e)=>setText(e.target.value)} value={text} className="rounded-lg w-full p-5 border-2 border-black focus:outline-primry_purble mt-2" />
                        <Button btn_text={`${aboutMe?'Update':'Add About'}`} marg={7} width={'w-1/2'} onHandleClick={handleclick}/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditAboutme