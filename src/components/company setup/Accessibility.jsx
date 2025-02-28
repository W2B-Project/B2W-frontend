/* eslint-disable react/prop-types */
import Feature from './Feature'
import { accessibilityfeatures } from '../../content/setup/Companyinfo'
function Accessibility({info}) {
    return (
        <>
            <p className='my-7 text-center font-lato text-xl font-bold'>{info.desc}</p>
            <div className='grid grid-cols-2 gap-10 '>
                {accessibilityfeatures.map((f)=>(
                    <Feature f={f} key={f.title}/>
                ))}
                
            </div>
        </>
    )
}

export default Accessibility