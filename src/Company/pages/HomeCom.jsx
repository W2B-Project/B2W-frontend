import Header from '../../components/home/Header'

//those are the two components that are used in the home page aside left and right 
import Aside_profile from '../components/CompanyProfile/Company_Home/Aside_profile'
import Aside_people from '../components/CompanyProfile/Company_Home/Aside_people'
import Job_content from '../components/CompanyProfile/Company_Home/Job_content'
import OpendJobs from '../components/CompanyProfile/opend_Jobs/OpendJobs'

function HomeCom() {
  
  return (
    <>
      <Header usertype={'company'}/>
      
      <div className='bg-light_gray'>
        <div className="body  pt-28 flex  items-start justify-center gap-6 w-full">
          <Aside_profile />
      
          <Job_content />
          {/* <OpendJobs /> */}

          <Aside_people />          
        </div>

        
      </div>
    </>
  )
}

export default HomeCom