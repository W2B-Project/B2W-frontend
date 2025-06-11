import { FiFilter } from "react-icons/fi";
import JobItem from "./JobItem";
import { useContext } from "react";
import { jobContext } from "../../context/JobContext";
export const jobs = [
    {
        id: 1,
        company: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        postedAgo: "5 days ago",
        title: "Front-end Developer",
        employment: ["Onsite", "Full-time"],
        salary: "$50-70K",
        location: "New York, NY",
    },
    {
        id: 2,
        company: "Apple",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        postedAgo: "5 days ago",
        title: "Front-end Developer",
        employment: ["Onsite", "Part-time"],
        salary: "$50-70K",
        location: "New York, NY",
    },
];

function JobsList({ companyProfile = false }) {
    const { postedJobs } = useContext(jobContext);
    return (
        <div>
            {!companyProfile &&
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl mb-4 font-lato">Recommended Jobs</h3>
                    <FiFilter className="text-2xl cursor-pointer" />
                </div>
            }
            <div className="flex flex-col gap-5">
                {
                    postedJobs?.length !== 0 ?
                        postedJobs?.map((job, index) => (
                            <JobItem job={job} key={index} />
                        ))
                        : <div>no jobs</div>
                }
            </div>
        </div>
    )
}

export default JobsList
