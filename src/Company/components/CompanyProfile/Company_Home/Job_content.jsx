import { useContext } from "react";
import { jobContext } from "../../../../context/JobContext";

function PostedJobsList() {
  const { postedJobs } = useContext(jobContext);

  if (postedJobs.length === 0)
    return <p className="text-center">No jobs posted yet.</p>;

  return (
    <div className="space-y-4 mt-10">
      {postedJobs.map((job, index) => (
        <div key={index} className="p-4 border rounded shadow bg-white space-y-2">
          <h3 className="font-bold text-xl">{job.jobLevel} {job.jobTitle} {job.workingmodel}</h3>
          
          <p className="text-sm text-gray-600">
            <strong>Type:</strong> {job.jobType} | <strong>Salary:</strong> {job.minSalary} to {job.maxSalary}  {job.currency}
          </p>

          <p><strong>Description:</strong> {job.description}</p>
          <p><strong>Requirements:</strong> {job.requirements}</p>
          <p><strong>About Company:</strong> {job.AboutCompany}</p>

          <div className="mt-2">
            <p className="text-sm"><strong>Contact Person:</strong> {job.personName}</p>
            <p className="text-sm"><strong>Phone:</strong> {job.phoneNumber}</p>
            {/* <p className="text-sm"><strong>Email:</strong> {job.email}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostedJobsList;
