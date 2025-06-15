import { useContext } from "react"
import { SetupContext } from "../../context/SetupContext"

function Info(props) {
    const { question, answers, value } = props.info
    const { UserInfo, setUserInfo } = useContext(SetupContext)

    const handleChange = (val, index) => {
        setUserInfo({ ...UserInfo, [value]: val });
        props.setchecked(index);

    };

    const handleOtherChange = (e) => {
        setUserInfo({ ...UserInfo, [value]: e.target.value });
    };
    return (
        <>
            <p className='text-center mb-10 mt-5 text-xl font-bold font-lato'>{question}</p>
            {
                answers.map((a, index) => (
                    <div key={index}
                        className='border-2 has-[:checked]:border-primry_purble flex gap-5 p-3 items-center rounded-xl my-3 font-roboto cursor-pointer' onClick={() => handleChange(a, index)}>
                        {a === "Other" && props.checked === index ?
                            <input
                                type="text"
                                name={value}
                                placeholder="Other"
                                value={UserInfo[value] || ""}
                                onChange={handleOtherChange}
                                className="border-0 p-0 placeholder:text-gray-500 outline-none flex-1"
                            />
                            : <>
                                <input
                                    type="checkbox"
                                    className='w-4 h-4 border-2 checked:!bg-primry_purble'
                                    checked={props.checked === index}
                                    readOnly
                                />
                                <label htmlFor="answer" className="cursor-pointer" >{a}</label>
                            </>
                        }
                    </div>
                ))
            }
            <button type="submit"
                onClick={() => props.getnextstep()}
                disabled={!UserInfo[value]}
                className={`p-2 ${UserInfo[value] !== "" ? 'bg-primry_purble border-primry_purble' : 'bg-gray-300 border-gray-300'}  w-full my-7 rounded-2xl  border-2 text-white`}>
                Next
            </button>
        </>
    )
}

export default Info