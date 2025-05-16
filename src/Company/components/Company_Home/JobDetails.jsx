import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { CompanyProAssets } from "../../assests/companyAssets";
import { csetup } from "../../../assets/images/company setup/csetup";

import { CiLocationOn } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import Header from "../../../components/home/Header";

const JobDetails = () => {
  const [tab, setTab] = useState("description");
  const location = useLocation();
  const job = location.state?.job;

  if (!job) {
    return <p className="text-center mt-10">No job selected.</p>;
  }

  return (
    <>
    <Header usertype="company"/>
      <div className="min-h-screen w-full p-9  font-sans pt-28">
        {/* Main Card */}
        <div className="  bg-veryLight_purple  h-[860px] rounded-[40px] overflow-hidden shadow-lg">
          <div className=" px-6 py-6 ">
            <div className="header-links flex flex-row items-center justify-between">
              <Link to="/home-Company" className=" text-xl block">
                <IoIosArrowBack />
              </Link>

              <h1 className="text-center text-[28px] capitalize font-normal text-black">
                {job.jobLevel} {job.jobTitle}
              </h1>

              <Link to="/home-Company" className=" text-xl block">
                <FaRegEdit />
              </Link>
            </div>

            <div className="company-info mt-6">
              <div className="flex items-center gap-4 pb-4">
                <img
                  src={CompanyProAssets.profPho}
                  alt="Company Logo"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-xl font-bold text-black">
                    Digital Creative Agency
                  </h2>

                  <p className="text-sm text-dark_gray">5 days ago</p>
                </div>
              </div>

              <div>
                <div className="text-black text-2xl font-normal">
                  {job.jobLevel} {job.jobTitle}
                </div>
                <div className="text-xs text-dark_gray capitalize flex flex-row items-center justify-start gap-1 ">
                  <CiLocationOn className="w-6 h-6" />{" "}
                  {job.location || "mansoura"}
                </div>
              </div>
            </div>
          </div>

          {/* Job Info */}
          <div className="flex justify-center gap-[56px] pt-7 bg-white rounded-tr-[40px] rounded-tl-[40px]">
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="w-20 h-20 bg-veryLight_purple rounded-full flex items-center justify-center">
                <img src={CompanyProAssets.Chartc} className="w-10 h-10" alt="" />
              </div>

              <h3 className="text-base font-normal text-dark_gray">Level</h3>

              <p className="text-black font-bold">{job.jobLevel}</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <div className="w-20 h-20 bg-veryLight_purple rounded-full flex items-center justify-center">
                <img src={CompanyProAssets.Babc} className="w-10 h-10" alt="" />
              </div>

              <h3 className="text-base font-normal text-dark_gray">Job type</h3>

              <p className="text-black font-bold">{job.jobType}</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <div className="w-20 h-20 bg-veryLight_purple rounded-full flex items-center justify-center">
                <img
                  src={CompanyProAssets.Walletc}
                  className="w-10 h-10"
                  alt=""
                />
              </div>

              <h3 className="text-base font-normal text-dark_gray">Salary</h3>

              <p className="text-black font-bold">
                {job.minSalary}-{job.maxSalary} {job.currency}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <div className="w-20 h-20 bg-veryLight_purple rounded-full flex items-center justify-center">
                <img src={CompanyProAssets.Manc} className="w-10 h-10" alt="" />
              </div>

              <h3 className="text-base font-normal text-dark_gray">
                Working model
              </h3>

              <p className="text-black font-bold">{job.workingmodel}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center bg-white pt-8">
            {["description", "requirements", "company"].map((key) => (
              <button
                key={key}
                className={`py-2 px-4 w-[437px] h-[56px] ${tab === key
                    ? " text-white bg-primry_purble rounded-[20px] "
                    : "text-dark_gray"
                  }`}
                onClick={() => setTab(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>

          <div className="p-6 text-black h-full bg-white text-xl font-normal leading-6 capitalize">
            {tab === "description" && <p>{job.description}</p>}
            {tab === "requirements" && <p>{job.requirements}</p>}
            {tab === "company" && (
              <div className="flex items-start justify-start gap-3 flex-col pl-6">
                <h5 className="font-bold text-lg">company</h5>

                <p className="font-normal text-lg">{job.AboutCompany}</p>

                <h5 className="font-bold text-lg">contact</h5>

                <div className="flex items-start justify-start gap-3">
                  <div>
                    <img
                      src={csetup.person}
                      className="w-20 h-20 rounded-full"
                      alt=""
                    />
                  </div>

                  <div>
                    <h5 className="capitalize font-normal text-lg">
                      {job.personName}
                    </h5>

                    <p className="font-normal text-base text-dark_gray uppercase">
                      hr
                    </p>
                  </div>

                  <div className="flex items-start justify-start  gap-3">
                    <FiPhone className="w-8 h-8 text-dark_gray" />

                    {job.phoneNumber}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
        </div>
      </div>
    </>
  );
};

export default JobDetails;
