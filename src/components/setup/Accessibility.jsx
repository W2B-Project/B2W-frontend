import { useEffect, useState } from 'react'
import { setup } from '../../assets/images/setup/setupAssets'
import Toggle from './Toggle'
import { useContext } from 'react'
import AccessibilityContext from '../../context/AccessibilityContext'
const font = ['Medium', 'Large', 'Very Large']

function Accessibility() {

    const { setscale, setWordspacing,Wordspacing,LineHieght, setLinehight,contrastMode, setContrastMode } = useContext(AccessibilityContext)

    return (
        <>
            {/* fonts */}
            <div className='flex gap-2 font-roboto items-center'>
                <img src={setup.font} alt="font" width={27} loading="lazy" />
                <p className='font-bold' >Fonts</p>
            </div>
            <div className='mt-5'>
                <p>Font size</p>
                <div className='flex justify-between'>
                    {font.map(f => (
                        <div className='flex gap-2 mt-2 ' key={f}>
                            <input type="radio" value={f} className='checked:accent-primry_purble w-4' name='fonts' onChange={(e) => setscale(e.target.value)} />
                            <label htmlFor={f}>{f}</label>
                        </div>
                    ))}
                </div>
            </div>

            {/* line hight word spacing */}
            <div className='my-12'>

                <Toggle t='Line Hight' s={LineHieght} st={setLinehight} />
                <Toggle t='Word Spacing' s={Wordspacing} st={setWordspacing} />

            </div>

            {/* colors */}
            <div className='flex gap-2 roboto items-center'>
                <img src={setup.color} alt="font" width={27} loading="lazy" />
                <p className='font-bold' >Colors</p>
            </div>
            <div className='my-12'>
                        <Toggle t='Contrat Mode' s={contrastMode} st={setContrastMode}/>
                        <Toggle t='Dark Mode'/>
            </div>


        </>
    )
}

export default Accessibility