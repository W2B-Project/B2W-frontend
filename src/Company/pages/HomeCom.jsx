import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import Header from '../../components/home/Header';
import Aside_profile from '../components/CompanyProfile/Company_Home/Aside_profile';
import Aside_people from '../components/CompanyProfile/Company_Home/Aside_people';

function HomeCom() {
  const [activeSection, setActiveSection] = useState('applications');
  const navigate = useNavigate();

  useEffect(() => {
    switch (activeSection) {
      case 'applications':
        navigate('/home-Company/applications');
        break;
      case 'postjob':
        navigate('/home-Company/postjob');
        break;
      case 'chats':
        navigate('/company/chats');
        break;
      default:
        navigate('/home-Company');
        break;
    }
  }, [activeSection, navigate]);

  return (
    <>
      <Header usertype="company" setActiveSection={setActiveSection} />
      <div className="bg-light_gray">
        <div className="body pt-28 flex items-start justify-center gap-6 w-full">
          <Aside_profile />
          <div className="w-[684px]">
            <Outlet />
          </div>
          <Aside_people />
        </div>
      </div>
    </>
  );
}

export default HomeCom;
