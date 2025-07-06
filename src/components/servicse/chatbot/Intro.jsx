/* eslint-disable react/prop-types */
import React from 'react'
import { chatbot } from '../../../assets/images/services/services'
import Button from '../../global/Button'
function Intro({setstep}) {

    const clickHandler=()=>{
        setstep(s=>s+1)
    }
    return (
        <div className='w-1/2 m-auto flex flex-col gap-2 text-center py-5'>
            <p className='font-lato text-2xl '>Interview Simulation</p>
            <p className='font-roboto text-2xl font-bold'>
                Welcome! Ready to ace your next interview?
            </p>
            <img src={chatbot.introAi} alt="intro-ai" width={430} className='self-center' />
                <Button btn_text='Get Started' onHandleClick={clickHandler} marg={0} />
        </div>
    )
}

export default Intro