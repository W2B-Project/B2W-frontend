import { jobs } from '../../home/JobsList';
import JobItem from '../../home/JobItem'
import { useContext } from 'react';
import { jobContext } from '../../../context/JobContext';

function Saved() {
  const {savedJobs}=useContext(jobContext)
  const SavedList=jobs.filter((job=>savedJobs.includes(job.id)))
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