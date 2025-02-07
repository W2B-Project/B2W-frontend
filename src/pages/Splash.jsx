import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/icons/IconsAssets'
function Splash() {
    const navigate = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/Landing')
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [navigate])
    return (
        <>
            <div className='h-screen flex justify-center items-center bg-gradient-to-b from-primry_purble to-veryLight_purple'>
                <div className=''>
                    <img src={assets.lightlogo} alt="light logo" />
                    <p className='text-white text-2xl font-bold font-lato'>Where Hope Starts</p>
                </div>

            </div>
        </>
    )
}

export default Splash