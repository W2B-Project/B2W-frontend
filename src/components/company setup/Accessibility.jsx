import Feature from './Feature'
import Button from '../global/Button'
import { useEffect } from 'react'


function Accessibility({ info, editmode = false, toggleSelect, handleSave, featuresList }) {
    useEffect(()=>{
        console.log(editmode)
    },[editmode])
    return (
        <>
            <p className='my-7 text-center font-lato text-xl font-bold'>{info.desc}</p>
            <div className='grid grid-cols-2 gap-10 '>
                {featuresList.map((f) => (
                    <Feature f={f} key={f.title} toggleSelect={toggleSelect} selected={f.selected} />
                ))}

            </div>
            {!editmode && <Button btn_text={'Next'} onHandleClick={handleSave} marg={5} />}
        </>
    )
}

export default Accessibility