import { FiBookmark } from "react-icons/fi";
import Button from "../global/Button";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { jobContext } from "../../context/JobContext";
import { CompanyProAssets } from "../../Company/assests/companyAssets";
import { SetupContext } from "../../context/SetupContext";

function JobItem({ job, apply,company }) {
    const { toggleSaved, savedJobs, applications } = useContext(jobContext);
    const isSaved = savedJobs?.includes(job.id);
    const {userData}=useContext(SetupContext)

    const location = useLocation();
    const isAppliedPage = location.pathname === "/home/applied";

    // Get status of the application for this job
    const jobApplication = applications.find((app) => app.jobId === job.id);
    const status = jobApplication?.status;

    const getStatusStyle = (status) => {
        switch (status) {
            case "Accepted":
                return "bg-green-100 text-green-700 border border-green-300";
            case "Rejected":
                return "bg-red-100 text-red-700 border border-red-300";
            case "New":
            case "Pending":
                return "bg-gray-200 text-gray-700 border border-gray-300";
            default:
                return "hidden";
        }
    };

    return (
        <div className="bg-white rounded-xl p-4 flex flex-col gap-4 px-5 shadow">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 px-4">
                    <img
                        loading="lazy"
                        src={CompanyProAssets.profPho}
                        className="w-16 h-16 object-contain rounded-full "
                        alt="profile"
                    />
                    <h3 className="font-bold text-xl capitalize">{job?.jobData?.companyName}</h3>
                </div>
                {isAppliedPage && status && (
                    <span
                        className={`text-sm font-semibold px-3 py-1 rounded-full ${getStatusStyle(
                            status === "Accepted" ? "Accepted" : status === "Rejected" ? "Rejected" : "Pending"
                        )}`}
                    >
                        {status === "Accepted" ? "Accepted" : status === "Rejected" ? "Rejected" : "Pending"}
                    </span>
                )}
                {!apply&& !company && (
                    <FiBookmark
                        className={`w-6 h-6 cursor-pointer transition-colors ${isSaved ? "fill-purple-600 stroke-purple-600" : "stroke-purple-600"
                            }`}
                        onClick={() => toggleSaved(job.id,userData.applicationUserId)}
                    />
                )}
            </div>

            {/* Title + Status */}
            <div className="flex justify-between items-center pl-8 pr-4">
                <h2 className="text-2xl font-lato font-medium">{job?.jobData?.jobTitle}</h2>
            </div>

            {/* Tags */}
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

            {/* Footer */}
            <div className="flex justify-between items-center px-6">
                <div>
                    <h4 className="font-semibold">
                        {job?.jobData?.currency} {job?.jobData?.minSalary}-{job?.jobData?.maxSalary}
                    </h4>
                    <span className="text-gray-600">Cairo, Egypt</span>
                </div>
                <Link to="/jobdetails" state={{ job, company }}>
                    <Button btn_text="More Details..." />
                </Link>
            </div>
        </div>
    );
}

export default JobItem;
