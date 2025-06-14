import { createContext, useState, useEffect } from "react";

export const jobContext = createContext();

const JobProvider = ({ children }) => {
  const [postedJobs, setPostedJobs] = useState(() => {
    const saved = localStorage.getItem('postedJobs');
    return saved && saved !== "undefined" ? JSON.parse(saved) : [];
  });

  const [savedJobs, setSavedJobs] = useState(() => {
    const saved = localStorage.getItem('savedJobs');
    return saved && saved !== "undefined" ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('postedJobs', JSON.stringify(postedJobs));
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
  }, [savedJobs, postedJobs]);

  const addJob = (jobData) => {
    setPostedJobs((prev) => [...prev, { id: Date.now(), jobData }]);
  };

  const toggleSaved = (jobId) => {
    setSavedJobs(prev =>
      prev.includes(jobId)
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  return (
    <jobContext.Provider value={{ toggleSaved, postedJobs, addJob, savedJobs }}>
      {children}
    </jobContext.Provider>
  );
};

export default JobProvider;
