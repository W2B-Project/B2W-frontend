import React from 'react'
import { Link } from 'react-router-dom';
import  { csetup } from '../../../../assets/images/company setup/csetup';



const Aside_people = () => {
  const items = [
    { id: 1, name: " Liam Carter", jpb: "Graphic Designer"  },
    { id: 2, name: " Liam Carter", jpb: "Graphic Designer"  },
    { id: 3, name: " Liam Carter", jpb: "Graphic Designer"  },
    { id: 4, name: " Liam Carter", jpb: "Graphic Designer"  },
    { id: 5, name: " Liam Carter", jpb: "Graphic Designer"  },
  ];

  return (
    <>
      <aside className="w-[330px] flex flex-col justify-start gap-5"> 
        <div className="profile_box  bg-white rounded-[20px]">
          <div className="profile_box_header flex items-center justify-between w-full pt-6 p-5 pt-0 ">
            <h2 className='font-bold text-xl'>
                People
            </h2>
            
            <Link to="/" className='text-primry_purble font-normal text-base'>
              See All
            </Link>
          </div>

          <div style={{ display: "flex", gap: "8px" ,  flexDirection: 'column'  ,width: "100%"  }}>
            {items.map((item) => (
              <div key={item.id}
                style={{
                  padding: "0px 20px 0 20px",
                  width: "100%",
                  textAlign: "start",
                  display: "flex",
                   gap: "10px"
                }}
              >
                <div>
                  <img 
                    className='w-[60px] h-[60px] rounded-full'
                    src={csetup.person} alt=""
                  />
                </div>
                
                <div className='w-full'>
                  <h4 className='font-normal text-base capitalize '>
                    {item.name}
                  </h4>
                  
                  <p className='font-normal text-xs text-dark_gray capitalize'>
                    {item.jpb}
                  </p>
                </div>
              </div>  
            ))}
          </div>
        </div>
      
        <div className='flex items-center justify-between  flex-col px-6 w-full  bg-white rounded-[20px] py-4'>
          
          <ul className='flex items-center justify-center gap-[70px] text-dark_gray'>
            <li >
              <Link to="/about" className='flex items-center text-base font-normal'>
                About
              </Link>
            </li> 
            <li >
              <Link to="/EditAccessability" className='flex items-center text-base font-normal'>
                Services
              </Link>
            </li>

            <li >
              <Link to="/EditAccessability" className='flex items-center text-base font-normal'>
                More
              </Link>
            </li>
          </ul>

          <div className='flex items-center justify-start  gap-1 mt-4'>
            <img src={csetup.logo} alt="logo" className='w-5 h-5' />
            
            <p className='text-base font-normal text-dark_gray'>
              Copyright @ 2024 B2W Website.
            </p>
          </div>
        </div>

      </aside>      
    </>
  )
}

export default Aside_people