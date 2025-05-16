import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Header from '../../components/home/Header';
import Aside_profile from '../components/Company_Home/Aside_profile';
import Aside_people from '../components/Company_Home/Aside_people';

function HomeCom() {
  return (
    <>
      <Header usertype="company"  />
      <div className="px-8 bg-[#f4f4f6] min-h-screen">
        <div className=" pt-28 grid grid-cols-12 gap-5">
          <div className='col-span-3'>
            <Aside_profile />
          </div>
          
          {/* < JobsList /> */}
          <div className="col-span-6">
            <Outlet/>
          </div>
          <div className='col-span-3'>
            <Aside_people />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default HomeCom;
