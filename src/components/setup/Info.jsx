/* eslint-disable react/prop-types */
function Info(props) {
    const {question,answers}=props.info
    return (
        <>
        <p className='text-center mb-10 mt-5 text-xl font-bold font-lato'>{question}</p>
        {
            answers.map((a,index)=>(
                <div key={index} className='border-2 has-[:checked]:border-primry_purble flex gap-5 p-3 items-center rounded-xl my-3 font-roboto cursor-pointer' onClick={()=>props.setchecked(index)}>
                    <input type="checkbox" value='answer' className='w-4 h-4 border-2 checked:!bg-primry_purble' 
                    checked={props.checked===index} 
                    onChange={()=>props.setchecked(index)}/>
                    <label htmlFor="answer" className="cursor-pointer" >{a}</label>
                </div>
            ))
        }
        </>
    )
}

export default Info