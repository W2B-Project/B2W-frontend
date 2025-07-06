import { jobs } from '../../home/JobsList';
import JobItem from '../../home/JobItem'
import { useContext } from 'react';
import { jobContext } from '../../../context/JobContext';
import { SetupContext } from '../../../context/SetupContext';
import SavedJobs from '../../home/SavedJobs';

function Saved() {
  const {savedJobs,postedJobs}=useContext(jobContext)
  const {userData}=useContext(SetupContext)
  const SavedList=postedJobs?.filter((job=>savedJobs?.includes(job.id)))
  return (
    <>
      <div className="flex flex-col gap-5">
        {
          SavedList.length>0?
          SavedList.map((job) => (
            <JobItem job={job} key={job.id} />
          ))
          :<div className='text-center mt-20 text-3xl w-1/2 bg-veryLight_purple p-3 rounded-lg m-auto  font-medium'>No Saved Jobs</div>
        }
      </div>
    </>
  )
}

export default Saved