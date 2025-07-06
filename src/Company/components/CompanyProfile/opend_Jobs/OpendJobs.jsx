import JobsList from "../../../../components/home/JobsList";
import { useContext } from "react";
import { jobContext } from "../../../../context/JobContext";
import { SetupContext } from "../../../../context/SetupContext";
function OpendJobs() {
  const { postedJobs } = useContext(jobContext);
  const { comData } = useContext(SetupContext);
  const companyJobs = postedJobs.filter(
    (job) => job?.jobData?.CompanyId === comData.companyProfileId
  );
  if (companyJobs.length!==0)
    return <JobsList companyProfile={true} company={true} companyJobs={companyJobs} apply={false} />
  else
    return <div className="text-center text-2xl mt-20 font-semibold">No Posted Jobs Yet</div>

}

export default OpendJobs;
