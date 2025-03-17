import { useState } from 'react'
import Intro from '../../components/servicse/chatbot/Intro'
import Level_field from '../../components/servicse/chatbot/Level_field'
import Chat from '../../components/servicse/chatbot/Chat'
import ChatProvider from '../../context/ChatbotContext'

function Chatbot() {
    const [step, setstep] = useState(1)
    return (
        <ChatProvider>
            <div className=' col-span-9'>
            <div className='bg-white'> {/* مؤقت عشان اعرف اظبط الشكل بس لكن همسحها بعد كده */}
                <div className='border-2 rounded-2xl '>
                    {step === 1 ?
                        <Intro setstep={setstep} />
                        : step === 2 ?
                            <Level_field setstep={setstep} />
                            : <Chat />
                    }
                </div>
            </div>
        </div>
        </ChatProvider>
    )
}

export default Chatbot