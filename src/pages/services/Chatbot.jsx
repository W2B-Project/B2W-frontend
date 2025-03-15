import React, { useState } from 'react'
import Intro from '../../components/servicse/chatbot/Intro'
import Level_field from '../../components/servicse/chatbot/Level_field'
import Chat from '../../components/servicse/chatbot/Chat'
function Chatbot() {
    const [step, setstep] = useState(1)
    return (
        <div className='bg-slate-100'>
            <div className='w-11/12 m-auto grid grid-cols-12 gap-10 mt-20 bg-white'> {/* مؤقت عشان اعرف اظبط الشكل بس لكن همسحها بعد كده */}
                <div className='col-span-9 border-2 rounded-2xl'>
                    {step === 1 ?
                        <Intro setstep={setstep} />
                        : step === 2 ?
                            <Level_field setstep={setstep} />
                            : <Chat />
                    }
                </div>
                <div className='col-span-3 border-2 rounded-2xl'>other section</div> {/* مؤقت عشان اعرف اظبط الشكل بس لكن همسحها بعد كده */}
            </div>
        </div>

    )
}

export default Chatbot