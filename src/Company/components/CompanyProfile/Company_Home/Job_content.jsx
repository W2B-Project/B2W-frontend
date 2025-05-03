import React, { useContext } from 'react';
import { JobContext } from '../../../../context/JobContext';

const Job_content = () => {
  const { jobData } = useContext(JobContext);

  if (!jobData || Object.keys(jobData).length === 0) return null;

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white rounded-lg shadow mt-10">
      <h2 className="text-2xl font-semibold mb-6">Applications</h2>

      <div className="bg-gray-50 rounded-lg p-4 shadow-md space-y-3">
        <h3 className="text-lg font-bold border-b pb-2">Job Preview</h3>

        <div className="text-gray-800">
          <p><span className="font-medium">Title:</span> {jobData.jobTitle}</p>
          <p><span className="font-medium">Level:</span> {jobData.jobLevel || "N/A"}</p>
          <p><span className="font-medium">Type:</span> {jobData.jobType}</p>
          <p><span className="font-medium">Salary:</span> {jobData.salary} {jobData.currency || "USD"}</p>
          <p><span className="font-medium">Description:</span> {jobData.description}</p>
          <p><span className="font-medium">Requirements:</span> {jobData.requirements}</p>
          <p><span className="font-medium">Contact Person:</span> {jobData.personName}</p>
        </div>
      </div>
    </div>
  );
};

export default Job_content;