import { FiBookmark } from "react-icons/fi";
import Button from "../global/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { jobContext } from "../../context/JobContext";
import { CompanyProAssets } from "../../Company/assests/companyAssets";

function JobItem({ job,company }) {
    const { toggleSaved, savedJobs } = useContext(jobContext)
    const isSaved = savedJobs?.includes(job.id)
    console.log(job.id)
    return (
        <div className="bg-white rounded-xl p-4 flex flex-col gap-4 px-5 shadow">
            {/* Job Header */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-5 px-4">
                    <img loading="lazy" src={CompanyProAssets.profPho} className="w-16 h-16 object-contain rounded-full" alt='profile photo' />
                    <h3 className="font-bold text-xl">Digital Creative Agency</h3>
                </div>
                {!company&&
                <FiBookmark
                    className={`w-6 h-6 cursor-pointer transition-colors ${isSaved ? "fill-purple-600 stroke-purple-600" : "stroke-purple-600"}`}
                    onClick={() => toggleSaved(job.id)}
                />
                }
            </div>

            {/* Job Title */}
            <h2 className="text-2xl font-lato font-medium pl-8">{job?.jobData?.jobTitle}</h2>

            {/* Employment Type Tags */}
            <div className="flex gap-4 pl-8">

                <p className="bg-veryLight_purple rounded-xl py-2 px-4 text-gray-500">
                    {job?.jobData?.workingmodel}
                </p>
                <p className="bg-veryLight_purple rounded-xl py-2 px-4 text-gray-500">
                    {job?.jobData?.jobType}
                </p>
                

            </div>

            {/* Separator */}
            <div className="w-1/2 mx-auto h-1 bg-gradient-to-r rounded from-transparent via-primry_purble to-primry_purble"></div>

            {/* Job Details */}
            <div className="flex justify-between items-center px-6">
                <div>
                    <h4 className="font-semibold">{job?.jobData?.currency} {job?.jobData?.minSalary}-{job?.jobData?.maxSalary}</h4>
                    <span className="text-gray-600">Cairo, Egypt</span>
                </div>
                <Link to="/jobdetails" state={{ job,company:company }}>
                    <Button btn_text="More Details..." />
                </Link>
            </div>
        </div>
    );
}

export default JobItem;
