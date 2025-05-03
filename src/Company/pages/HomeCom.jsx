import Header from '../../components/home/Header'

//those are the two components that are used in the home page aside left and right 
import Aside_profile from '../components/CompanyProfile/Company_Home/Aside_profile'
import Aside_people from '../components/CompanyProfile/Company_Home/Aside_people'

function HomeCom() {
  return (
    <>
      <Header usertype={'company'}/>
      
      <div className='bg-light_gray'>
        <div className="body  pt-28 flex  items-start justify-center gap-6 w-full">
    
          
            <Aside_profile />
        

          

          <div className="content w-[684px]">
            <h1>Company Home</h1>
            <p>Welcome to the company home page!</p>
          </div>

          
          <Aside_people />

          
          </div>
      </div>
    </>
  )
}

export default HomeCom