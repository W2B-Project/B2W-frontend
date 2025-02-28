/* eslint-disable react/prop-types */
import React, { useState } from "react"

function Feature({f}) {
    const [selected,setSelected]=useState(false)
    const toggleSelected=()=>{
        setSelected(!selected)
    }
    const updatesvg=React.cloneElement(f.img,{
        color:selected? '#7F00FF':'#E3E3E5'
    })
    return (
        <>
            <div className={` border-2 ${selected?'bg-veryLight_purple border-primry_purble':'border-gray-300'} rounded-xl items-center min-h-40 min-w-52 flex flex-col justify-center gap-5 cursor-pointer`}
            key={f.title}
            onClick={()=>toggleSelected()}
            >
                {updatesvg}
                <p className={`${selected?'text-primry_purble':'text-dark_gray'} text-sm text-center`}>{f.title}</p>
            </div>
        </>
    )
}

export default Feature