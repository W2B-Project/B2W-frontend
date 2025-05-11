import React from "react";
import { Link } from "react-router-dom";
import { peoplesetup } from "../../../../Company/assests/people/peoplesetup";
import { csetup } from "../../../../assets/images/company setup/csetup";

const Aside_people = () => {
  const items = [
    { id: 1, name: "Liam Carter",    job: "CEO",               image: peoplesetup.person1 },
    { id: 2, name: "Murad Mohamed",  job: "Product Manager",   image: peoplesetup.person2 },
    { id: 3, name: "Salma Ahmed",    job: "Product Designer",  image: peoplesetup.person3 },
    { id: 4, name: "Ali Wael",       job: "Graphic Designer",  image: peoplesetup.person4 },
    { id: 5, name: "Waleed Ali",     job: "HR",                image: peoplesetup.person5 },
    { id: 6, name: "Sophia Bennett", job: "Motion Designer",   image: peoplesetup.person6 },
  ];
  return (
    <>
      <aside className="w-[330px] flex flex-col justify-start gap-5">
        <div className="profile_box  bg-white rounded-[20px]">
          <div className="profile_box_header flex items-center justify-between w-full pt-6 p-5 pt-0 ">
            <h2 className="font-bold text-xl">People</h2>

            <Link to="/" className="text-primry_purble font-normal text-base">
              See All
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  padding: "0px 20px 0 20px",
                  width: "100%",
                  textAlign: "start",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <div>
                  <img
                    className="w-[60px] h-[60px] rounded-full"
                    src={item.image}
                    alt=""
                  />
                </div>

                <div className="w-full">
                  <h4 className="font-normal text-base capitalize ">
                    {item.name}
                  </h4>

                  <p className="font-normal text-xs text-dark_gray capitalize">
                    {item.jpb}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between  flex-col px-6 w-full  bg-white rounded-[20px] py-4">
          <ul className="flex items-center justify-center gap-[70px] text-dark_gray">
            <li>
              <Link
                to="/about"
                className="flex items-center text-base font-normal"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/EditAccessability"
                className="flex items-center text-base font-normal"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/EditAccessability"
                className="flex items-center text-base font-normal"
              >
                More
              </Link>
            </li>
          </ul>

          <div className="flex items-center justify-start  gap-1 mt-4">
            <img src={csetup.logo} alt="logo" className="w-5 h-5" />

            <p className="text-base font-normal text-dark_gray">
              Copyright @ 2024 B2W Website.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Aside_people;
