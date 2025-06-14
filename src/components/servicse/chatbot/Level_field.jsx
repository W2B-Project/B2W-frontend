/* eslint-disable react/prop-types */
import { useState } from "react"
import { chatbot } from "../../../assets/images/services/services"
import Button from "../../global/Button"
import { useContext } from "react"
import { ChatContext } from "../../../context/ChatbotContext"


function Level_field({ setstep }) {
    const { level, setLevel, field, setField, startInterview } = useContext(ChatContext);

    const [toggle, setToggle] = useState(null)
    const [err, seterr] = useState(false)

    const chatbotLevels = [
        { title: 'Easy - Entry Level', img: chatbot.easy, border: 'border-green-400', bg: 'bg-green-100' },
        { title: 'Medium - Intermediate Level', img: chatbot.medium, border: 'border-yellow-300', bg: 'bg-yellow-100' },
        { title: 'Hard - Senior Level', img: chatbot.hard, border: 'border-red-400', bg: 'bg-red-100' },
    ]
    const handleLevel = (index, lvl) => {
        setToggle(index)
        setLevel(lvl)
    }
    
    const handlestartInterview = () => {
        level !== '' && field !== '' ?(
            startInterview(),
            setstep(s => s + 1)
        )
        : seterr(true)
    }
    return (
        <>
            <div className='w-1/2 m-auto flex flex-col gap-2 py-5'>
                <p className='font-lato text-2xl text-center'>Interview Simulation</p>
                <p className="text-dark_gray text-center font-roboto">Select your preferences to get a tailored interview experience.</p>
                {/* choose level */}
                <div className="my-5 flex flex-col gap-5 font-roboto font-normal">
                    <p className="text-xl font-bold">Choose Question Difficulty</p>
                    {chatbotLevels.map((lvl, index) => (
                        <div key={index} className={`rounded-xl border-2 ${lvl.border} flex gap-3 ${index === toggle && lvl.bg} items-center p-2 text-lg cursor-pointer`} 
                        onClick={()=>handleLevel(index, lvl.title)}>
                            <img src={lvl.img} alt={lvl.title} />
                            <p >{lvl.title}</p>
                        </div>
                    ))}
                </div>
                {/* enter field */}
                <div className="font-roboto mb-5">
                    <p className="text-xl font-bold mb-5">Enter Your Field</p>
                    <input type="text" placeholder="Your Field" value={field}
                        className=" w-full border-2 border-light_gray rounded-xl p-3 text-lg placeholder:text-gray-500 focus:border-primry_purble"
                        onChange={(e) => setField(e.target.value)}
                    />
                </div>
                {/* start */}
                <Button btn_text='Start Interview' onHandleClick={handlestartInterview} marg={2} />
                {err?<div className="text-center text-red-500 text-lg">Please choose your level and field!</div>
                    :null
                }

            </div>
        </>
    )
}

export default Level_field