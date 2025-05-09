import { createContext, useState, useEffect } from "react";

export const jobContext = createContext();

const JobProvider = ({ children }) => {
  const [postedJobs, setPostedJobs] = useState(() => {
    const saved = localStorage.getItem('postedJobs');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('postedJobs', JSON.stringify(postedJobs));
  }, [postedJobs]);

  const addJob = (jobData) => {
    setPostedJobs((prev) => [...prev, jobData]);
  };

  return (
    <jobContext.Provider value={{ postedJobs, addJob }}>
      {children}
    </jobContext.Provider>
  );
};

export default JobProvider;
