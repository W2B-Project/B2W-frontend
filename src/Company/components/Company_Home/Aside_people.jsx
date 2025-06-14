
import { Link } from "react-router-dom";
import { peoplesetup } from "../../assests/people/peoplesetup";
import Footer from "../../../components/global/Footer";


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
      <aside className="flex flex-col justify-start gap-5">
        <div className="profile_box  bg-white rounded-[20px]">
          <div className="profile_box_header flex items-center justify-between w-full pt-6 p-5 ">
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
              paddingBottom:'15px'
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 items-center ps-5 w-full  "
              >
                <div>
                  <img
                    className="max-w-[50px] max-h-[50px] rounded-full"
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

        <Footer/>
      </aside>
    </>
  );
};

export default Aside_people;
