import { useContext } from "react";
import { jobContext } from "../../../../context/JobContext";
import { CompanyProAssets } from "../../../assests/companyAssets";
import { Link } from "lucide-react";

function PostedJobsList() {
  const { postedJobs } = useContext(jobContext);

  if (postedJobs.length === 0)
    return <p className="text-center">No jobs posted yet.</p>;

  return (
    <div className="space-y-6 mt-10 w-[684px] rounded-xl">
      {postedJobs.map((job, index) => (
        <div
          key={index}
          className="border bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition space-y-4"
        >
          <div className="flex items-center gap-4 pb-4">
            <img
              src={CompanyProAssets.profPho}
              alt="Company Logo"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Digital Creative Agency
              </h2>
              <p className="text-sm text-gray-500">5 days ago</p>
            </div>
          </div>

          {/* تفاصيل الوظيفة */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg text-gray-800">
              {job.jobLevel} {job.jobTitle} - {job.workingmodel}
            </h3>

            <hr className="bg-gradient-to-l from-purple-500 to-white rounded-lg h-[4px] w-[400px] my-8 mx-auto" />

            <Link to="/">
              Show Job Applications 
            </Link>

            {/* <p className="text-sm text-gray-600">
              <strong>Type:</strong> {job.jobType} | <strong>Salary:</strong>{" "}
              {job.minSalary} - {job.maxSalary} {job.currency}
            </p>

            <p className="text-sm text-gray-700">
              <strong>Description:</strong> {job.description}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Requirements:</strong> {job.requirements}
            </p>
            <p className="text-sm text-gray-700">
              <strong>About Company:</strong> {job.AboutCompany}
            </p>

            <div className="mt-3 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Contact Person:</strong> {job.personName}
              </p>
              <p>
                <strong>Phone:</strong> {job.phoneNumber}
              </p>
              <p>
                <strong>Email:</strong> {job.email}
              </p>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostedJobsList;
