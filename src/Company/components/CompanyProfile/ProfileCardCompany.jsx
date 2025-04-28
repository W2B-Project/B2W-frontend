import { useState } from 'react'
import { CompanyProAssets } from '../../assests/companyAssets'
import { Edit, Github, Facebook, Mail } from 'lucide-react'
import { userprofileassets } from '../../../assets/images/user Profile/userprofileAssets'
import { Link,MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function ProfileCardCompany() {
    const navigate=useNavigate()
    return (
        <div className='bg-white w-[23%] relative -top-24 left-10 p-5 pt-0 rounded-xl h-fit'>
            <div className='flex'>
                <img src={CompanyProAssets.profPho} className='relative -top-8 left-4 rounded-full w-20 m-auto' alt="" />
                <Edit color='gray' className='mt-2 cursor-pointer' onClick={() => navigate('/EditCompanyInfo')} />
            </div>
            <div className='text-center'>
                <p className='text-xl font-bold font-lato'>Digital Creative Agency</p>
                <p className='text-sm text-dark_gray'>UIUX designer</p>
            </div>
            <div className='text-center text-sm my-4 text-dark_gray'>
                <p>Empowering brands with creative digital solutions and strategies. Let’s innovate together!</p>
                
            </div>
            <div className='flex gap-2 justify-center items-center text-dark_gray text-sm my-2'>
                <MapPin color='#7F00FF'/>
                <p>Cairo, Egypt</p>
            </div>
            {/* following */}
                <div className='flex items-center justify-center gap-2 my-2'>
                    <img src={userprofileassets.followers} alt="followers" className='cursor-pointer' />
                    <div>
                        <p className='font-medium text-lg'>10k</p>
                        <p className='text-xs text-dark_gray'>followers</p>
                    </div>
                </div>
            
            {/* accounts */}
            <div className='flex gap-5 justify-center my-5'>
                <Github color='#7F00FF' />
                <Facebook color='#7F00FF' />
                <Mail color='#7F00FF' />
                
            </div>
            <div className='flex gap-2 items-center justify-center'>
                <Link color='#7F00FF'/>
                <p className='text-dark_gray text-sm'>http://Digital-Creative-Agency.name</p>
            </div>
            
        </div>
    )
}

export default ProfileCardCompany