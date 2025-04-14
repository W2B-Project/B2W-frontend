import { useState } from "react"

function Language() {
    const LanguagesList = [
        'English', 'Arabic', 'Spanish',
        'Mandarin', 'French', 'Russian',
        'Hindi', 'Portuguese', 'German',
        'Italian', 'Japanese', 'Korean',
        'Dutch', 'Swedish', 'Vietnamese'
    ]
    const [checked,setChecked]=useState('')
    return (
        <>
            <div className="p-10 flex flex-col gap-5">
                {
                    LanguagesList.map(lang => (
                        <div key={lang} className="flex gap-2 items-center text-lg cursor-pointer " onClick={()=>setChecked(lang)}>
                            <input type="radio"
                            name='language'
                            checked={checked===lang}
                            onChange={()=>setChecked(lang)}
                            className="border-2 border-primry_purble  checked:!bg-primry_purble"/>
                            <p className="text-gray-500">{lang}</p>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default Language