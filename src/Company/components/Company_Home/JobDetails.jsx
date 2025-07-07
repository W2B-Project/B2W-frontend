import { useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { CompanyProAssets } from "../../assests/companyAssets";
import { csetup } from "../../../assets/images/company setup/csetup";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import Header from "../../../components/home/Header";

import { SetupContext } from "../../../context/SetupContext";

import JobApplicationModal from "./JobApplicationModal";
import { Edit } from "lucide-react";

const JobDetails = () => {
  const [tab, setTab] = useState("description");
  const location = useLocation();
  const job = location.state?.job;
  const company = location.state?.company;
  const { comData } = useContext(SetupContext);

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false); // ✅ Added this function

  if (!job) {
    return <p className="text-center mt-10">No job selected.</p>;
  }
  return (
    <>
      {company ? <Header usertype="company" /> : <Header />}
      <div className="min-h-screen w-full p-9 font-sans pt-28 relative">
        {/* Main Card */}
        <div className="bg-veryLight_purple h-[860px] rounded-[40px] overflow-hidden shadow-lg">
          <div className="px-6 py-6">
            <div className="header-links flex flex-row items-center justify-between">
              <Link to="/home-Company" className="text-xl block">
                <IoIosArrowBack />
              </Link>

              <h1 className="text-center text-[28px] font-lato capitalize font-normal text-black">
                {job?.jobData?.jobLevel} {job?.jobData?.jobTitle}
              </h1>

              <Link to="/home-Company" className="text-xl block">
                <Edit />
              </Link>
            </div>

            <div className="company-info mt-6">
              <div className="flex items-center justify-between gap-4 pb-4">
                <div className="flex gap-2 items-center">
                  <img
                    src={job?.jobData?.img}
                    alt="Company Logo"
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-black font-lato capitalize">
                      {job?.jobData?.companyName}
                    </h2>
                    <p className="text-sm text-dark_gray">5 days ago</p>
                  </div>
                </div>
                {
                  !company &&
                  <button
                    onClick={() => setShowModal(true)}
                    className="h-[48px] bg-primry_purble hover:bg-primaryLight duration-300 text-white flex items-center justify-center rounded-[15px] font-semibold text-lg !mt-5 px-5"
                  >
                    Apply for the job
                  </button>
                }

              </div>

              <div>
                <div className="text-black text-2xl font-normal font-lato">
                  {job?.jobData?.jobLevel} {job?.jobData?.jobTitle}
                </div>
                <div className="text-sm font-lato text-dark_gray capitalize flex flex-row items-center justify-start gap-1">
                  <CiLocationOn className="w-6 h-6" /> {job?.jobData?.location}
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
              <p className="text-black font-bold font-lato">{job?.jobData?.jobLevel}</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <div className="w-20 h-20 bg-veryLight_purple rounded-full flex items-center justify-center">
                <img src={CompanyProAssets.Babc} className="w-10 h-10" alt="" />
              </div>
              <h3 className="text-base font-normal text-dark_gray">Job type</h3>
              <p className="text-black font-bold font-lato">{job?.jobData?.jobType}</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <div className="w-20 h-20 bg-veryLight_purple rounded-full flex items-center justify-center">
                <img src={CompanyProAssets.Walletc} className="w-10 h-10" alt="" />
              </div>
              <h3 className="text-base font-normal text-dark_gray">Salary</h3>
              <p className="text-black font-bold font-lato">
                {job?.jobData?.minSalary}-{job?.jobData?.maxSalary} {job?.jobData?.currency}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <div className="w-20 h-20 bg-veryLight_purple rounded-full flex items-center justify-center">
                <img src={CompanyProAssets.Manc} className="w-10 h-10" alt="" />
              </div>
              <h3 className="text-base font-normal text-dark_gray">Working model</h3>
              <p className="text-black font-bold font-lato">{job?.jobData?.workingmodel}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center bg-white pt-8">
            {["description", "requirements", "company"].map((key) => (
              <button
                key={key}
                className={`py-2 px-4 w-[437px] h-[56px] ${tab === key
                  ? "text-white bg-primry_purble rounded-[20px]"
                  : "text-dark_gray"
                  }`}
                onClick={() => setTab(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>

          <div className="p-6 text-black h-full bg-white text-lg font-normal leading-6 capitalize">
            {tab === "description" && (
              <pre className="whitespace-pre-wrap font-roboto">
                {job?.jobData?.description}
              </pre>
            )}
            {tab === "requirements" && (
              <pre className="whitespace-pre-wrap font-roboto">
                {job?.jobData?.requirements}
              </pre>
            )}
            {tab === "company" && (
              <div className="flex items-start justify-start gap-3 flex-col pl-6">
                <h5 className="font-semibold text-xl font-lato">Company</h5>
                <div className="font-normal text-lg flex flex-wrap">
                  {job?.jobData?.AboutCompany}
                </div>

                <h5 className="font-semibold text-xl font-lato">Contact</h5>
                <div className="flex items-center justify-start gap-3">
                  <div>
                    <img
                      src={job?.jobData?.img}
                      className="w-16 h-16 rounded-full"
                      alt=""
                    />
                  </div>

                  <div>
                    <h5 className="capitalize font-normal text-lg">
                      {job?.jobData?.personName}
                    </h5>
                    <p className="font-normal text-base text-dark_gray uppercase">hr</p>
                  </div>

                  <div className="flex items-center justify-start gap-3">
                    <FiPhone
                      className="w-8 h-8 text-dark_gray"
                      title={job?.jobData?.phoneNumber}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <JobApplicationModal
            jobId={job?.id}
            jobTitle={job?.jobData?.jobTitle}
            onClose={closeModal}
          />
        )}
      </div>
    </>
  );
};

export default JobDetails;