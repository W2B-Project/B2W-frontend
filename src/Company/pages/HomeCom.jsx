import { useState } from 'react';
import Header from '../../components/home/Header';

import Aside_profile from '../components/CompanyProfile/Company_Home/Aside_profile';
import Aside_people from '../components/CompanyProfile/Company_Home/Aside_people';
import Job_content from '../components/CompanyProfile/Company_Home/Job_content';
import OpendJobs from '../components/CompanyProfile/opend_Jobs/OpendJobs';


function HomeCom() {
  const [activeSection, setActiveSection] = useState('home'); // home | postjob | chats

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Job_content />;
      case 'postjob':
        return <OpendJobs />;
      case 'chats':
        return <div>الشات هيبقى هنا</div>;
      default:
        return <Job_content />;
    }
  };

  return (
    <>
      <Header usertype="company" setActiveSection={setActiveSection} />
      <div className="bg-light_gray">
        <div className="body pt-28 flex items-start justify-center gap-6 w-full">
          <Aside_profile />
         
                      
          <div className='w-[684px]'>
            {renderSection()}
          </div>
          <Aside_people />
        </div>
      </div>
    </>
  );
}

export default HomeCom;
