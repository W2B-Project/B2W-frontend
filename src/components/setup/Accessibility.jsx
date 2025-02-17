import { setup } from '../../assets/images/setup/setupAssets'
import Toggle from './Toggle'
const font = ['Large', 'Medium', 'Small']
const fontsetteng = ['Line Hight', 'Word Spacing']
const color=['Contrat Mode','Dark Mode']

function Accessibility() {
    return (
        <>
            {/* fonts */}
            <div className='flex gap-2 roboto items-center'>
                <img src={setup.font} alt="font" width={27} />
                <p className='font-bold' >Fonts</p>
            </div>
            <div className='mt-5 '>
                <p>Font size</p>
                <div className='flex justify-between'>
                    {font.map(f => (
                        <div className='flex gap-2 mt-2' key={f}>
                            <input type="radio" value={f} className='checked:accent-primry_purble w-4' name='fonts' />
                            <label htmlFor={f}>{f}</label>
                        </div>
                    ))}
                </div>
            </div>

            {/* line hight word spacing */}
            <div className='my-12'>
                {fontsetteng.map(s => (
                    <>
                        <Toggle t={s}/>
                    </>
                ))}
            </div>
            
            {/* colors */}
            <div className='flex gap-2 roboto items-center'>
                <img src={setup.color} alt="font" width={27} />
                <p className='font-bold' >Colors</p>
            </div>
            <div className='my-12'>
                {color.map(s => (
                    <>
                        <Toggle t={s}/>
                    </>
                ))}
            </div>
        </>
    )
}

export default Accessibility