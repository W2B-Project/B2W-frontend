import {React} from 'react'
import { CompanyProAssets } from '../../../assests/companyAssets'
import { Link } from 'react-router-dom';
import  { csetup } from '../../../../assets/images/company setup/csetup';
// import EditCompany from './../EditCompanyInfo'
const Aside_profile = () => {
  return (
    <>
      <aside className="w-[330px] flex flex-col justify-start gap-5 bg-light_gray"> 
        
        <div className="profile_box flex items-center justify-evenly flex-col bg-white  w-full h-[229px] p-5 pt-0 rounded-xl">
          <img src={CompanyProAssets.profPho} className=' rounded-full w-20 ' alt="" />

          <h2 className='font-bold text-2xl'>
            Digital Creative Agency
          </h2>

          <Link to="/EditCompanyInfo" className='text-white bg-primry_purble text-sm h-[40px] w-[165px] flex items-center justify-center rounded-[20px] font-bold text-base'>
            update profile
          </Link>
        </div>

        <Link to="/EditAccessability" className="bg-white flex items-center justify-between px-6 w-full rounded-[20px] py-4">
          <h2 className='font-normal text-xl '>
            Accessibility
          </h2>
        
          <img src={csetup.accessibility} alt="Accessibility"/>
        </Link>


      </aside>
    </>
  )
}

export default Aside_profile