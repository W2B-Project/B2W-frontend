import { useContext } from "react";
import { jobContext } from "../../../context/JobContext";
import { CompanyProAssets } from "../../assests/companyAssets";
import { Link } from "react-router-dom";

function PostedJobsList() {
  const { postedJobs } = useContext(jobContext);
  console.log(postedJobs)
  if (postedJobs?.length === 0)
    return <p className="text-center mt-20 ">No jobs posted yet.</p>;

  return (
    <div className="space-y-6 rounded-xl">
      <h3 className="capitalize font-normal text-2xl">
        Applications
      </h3>

      {postedJobs?.map((job) => (
        <div
          key={job.id}
          className="border bg-white rounded-xl p-5 shadow-sm  transition space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 pb-4">
              <img
                src={CompanyProAssets.profPho}
                alt="Company Logo"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-bold text-black">
                  Digital Creative Agency
                </h2>
                <p className="text-sm text-gray-500">5 days ago</p>
              </div>
            </div>

            <Link to="" className="w-8 h-8 bg-primry_purble rounded-full text-white flex items-center justify-center text-xl font-medium">
              6
            </Link>
          </div>

          {/* تفاصيل الوظيفة */}
          <div className="space-y-2">
            <h3 className="font-normal text-2xl  text-black">
              {job?.jobData?.jobLevel} {job?.jobData?.jobTitle} - {job?.jobData?.workingmodel}
            </h3>

            <hr className="bg-gradient-to-l from-primry_purble to-white rounded-lg h-[4px] w-[400px] my-8 mx-auto" />

            <Link
              to="/jobdetails"
              state={{ job }}
              className="h-[48px] bg-primry_purble hover:bg-primaryLight duration-300 text-white flex items-center justify-center  rounded-[15px] font-bold  text-lg !mt-5 "
            >
              Show Job Applications
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostedJobsList;
