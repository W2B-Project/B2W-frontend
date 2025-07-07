import { useContext,useState } from 'react'
import { userprofileassets } from '../../assets/images/user Profile/userprofileAssets'
import { Edit, Github, Facebook, Mail } from 'lucide-react'
import EditPersonalInfo from './EditPersonalInfo'

import { SetupContext } from '../../context/SetupContext'
import { setup } from '../../assets/images/setup/setupAssets'
function ProfileCard() {
    const [personalModal, setPersonalModal] = useState(false)
    const {userData,Pic}=useContext(SetupContext)
    return (
        <div className='bg-white w-[23%] relative -top-24 left-10 p-5 pt-0 rounded-xl h-fit'>
            <div className='flex'>
                <img src={Pic?Pic:setup.defImg} className='relative -top-5 left-4 rounded-full w-20 m-auto' alt="" />
                <Edit color='gray' className='mt-2 cursor-pointer' onClick={() => setPersonalModal(true)} />
            </div>
            <div className='text-center'>
                <p className='text-xl font-bold font-lato capitalize'>{userData.firstName} {userData.lastName}</p>
                <p className='text-sm text-dark_gray'>{userData.desiredJobTitle}</p>
            </div>
            <div className='text-center text-sm my-4 text-dark_gray'>
                <p>{userData.jobTitle}</p>
            </div>
            {/* followers */}
            <div className='flex justify-between my-3'>
                <div className='flex items-center gap-2'>
                    <img src={userprofileassets.followers} alt="followers" className='cursor-pointer' />
                    <div>
                        <p className='font-medium text-lg'>1k</p>
                        <p className='text-xs text-dark_gray'>followers</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={userprofileassets.followers} alt="following" className='cursor-pointer' />
                    <div>
                        <p className='font-medium text-lg'>1k</p>
                        <p className='text-xs text-dark_gray'>following</p>
                    </div>
                </div>
            </div>
            {/* accounts */}
            <div className='flex gap-5 justify-center my-5'>
                <Github color='#7F00FF' />
                <Facebook color='#7F00FF' />
                <Mail color='#7F00FF' />
            </div>
            {
                personalModal && <EditPersonalInfo onClose={() => setPersonalModal(false)} />
            }
        </div>
    )
}

export default ProfileCard