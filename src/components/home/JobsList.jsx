import { FiFilter } from "react-icons/fi";
import JobItem from "./JobItem";
const jobs = [
    {
        id: 1,
        company: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        postedAgo: "5 days ago",
        title: "Front-end Developer",
        employment: ["Onsite", "Full-time"],
        salary: "$50-70K",
        location: "New York, NY",
        isSaved: true,
    },
    {
        id: 2,
        company: "Dell",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Dell_logo_2016.svg",
        postedAgo: "5 days ago",
        title: "Front-end Developer",
        employment: ["Remotely","Full-time"],
        salary: "$50-70K",
        location: "New York, NY",
        isSaved: false,
    },
    {
        id: 3,
        company: "Apple",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        postedAgo: "5 days ago",
        title: "Front-end Developer",
        employment: ["Onsite", "Part-time"],
        salary: "$50-70K",
        location: "New York, NY",
        isSaved: true,
    },
];
function JobsList() {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl mb-4 font-lato">Recommended Jobs</h3>
                <FiFilter className="text-2xl cursor-pointer" />
            </div>
            <div className="flex flex-col gap-5">
            {
                jobs.map((job)=>(
                    <JobItem job={job} key={job.id} />
                ))
            }
            </div>
        </div>
    )
}

export default JobsList
