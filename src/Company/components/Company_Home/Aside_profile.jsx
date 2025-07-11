import {useContext } from "react";
import { CompanyProAssets } from "../../assests/companyAssets";
import { Link } from "react-router-dom";
import { csetup } from "../../../assets/images/company setup/csetup";
import { SetupContext } from "../../../context/SetupContext";
// import EditCompany from './../EditCompanyInfo'

const Aside_profile = () => {

  const {comData,Pic}=useContext(SetupContext)

  return (
    <>
      <Link
        to="/companyProfile"
        className="flex flex-col justify-start gap-5 bg-[#f4f4f6]"
      >
        <div className="profile_box flex items-center justify-evenly flex-col bg-white  w-full h-[229px] p-5 pt-0 rounded-xl">
          <img
            src={Pic}
            className=" rounded-full w-20 h-20 "
            alt=""
          />

          <h3 className="font-bold text-2xl font-lato capitalize">{comData?.companyName}</h3>

          <Link
            to="/companyProfile"
            className="text-white bg-primry_purble mt-4 h-[40px] w-[165px]  flex items-center justify-center rounded-[20px]"
          >
            update profile
          </Link>
        </div>

        <Link
          to="/EditAccessability"
          className="bg-white flex items-center justify-between px-6 w-full rounded-[20px] py-4"
        >
          <h2 className="font-normal text-xl ">Accessibility</h2>
          <img src={csetup.accessibility} alt="Accessibility" />
        </Link>
      </Link>
    </>
  );
};

export default Aside_profile;
