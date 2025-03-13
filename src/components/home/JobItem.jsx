import { FiBookmark } from "react-icons/fi";
import Button from "../global/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

function JobItem({ job }) {
    const [saved, setSaved] = useState(job.isSaved);

    return (
        <div className="bg-white rounded-xl p-4 flex flex-col gap-4 px-5 shadow">
            {/* Job Header */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-5 px-4">
                    <img loading="lazy" src={job.logo} className="w-16 h-16 object-contain" alt={job.company} />
                    <h3 className="font-bold text-xl">{job.company}</h3>
                </div>
                <FiBookmark
                    className={`w-6 h-6 cursor-pointer transition-colors ${saved ? "fill-purple-600 stroke-purple-600" : "stroke-purple-600"}`}
                    onClick={() => setSaved(!saved)}
                />
            </div>

            {/* Job Title */}
            <h2 className="text-2xl font-lato font-medium pl-8">{job.title}</h2>

            {/* Employment Type Tags */}
            <div className="flex gap-4 pl-8">
                {job.employment.map((type, index) => (
                    <p key={index} className="bg-veryLight_purple rounded-xl py-2 px-4 text-gray-500">
                        {type}
                    </p>
                ))}
            </div>

            {/* Separator */}
            <div className="w-1/2 mx-auto h-1 bg-gradient-to-r rounded from-transparent via-primry_purble to-primry_purble"></div>

            {/* Job Details */}
            <div className="flex justify-between items-center px-6">
                <div>
                    <h4 className="font-semibold">{job.salary}</h4>
                    <span className="text-gray-600">{job.location}</span>
                </div>
                <Link to="">
                    <Button btn_text="More Details..." />
                </Link>
            </div>
        </div>
    );
}

export default JobItem;
