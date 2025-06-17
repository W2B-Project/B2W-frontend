import { createContext, useState, useEffect, useCallback } from "react";

export const jobContext = createContext();

const JobProvider = ({ children }) => {
  // Load initial state from localStorage or set defaults
  const loadFromLocalStorage = (key, defaultValue) => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : defaultValue;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error);
      return defaultValue;
    }
  };

  // State initialization with localStorage
  const [postedJobs, setPostedJobs] = useState(() => 
    loadFromLocalStorage('postedJobs', [])
  );
  
  const [savedJobs, setSavedJobs] = useState(() => 
    loadFromLocalStorage('savedJobs', [])
  );
  
  const [applications, setApplications] = useState(() => {
    const loaded = loadFromLocalStorage('jobApplications', []);
    // Ensure all IDs are numbers
    return loaded.map(app => ({
      ...app,
      id: Number(app.id),
      jobId: Number(app.jobId)
    }));
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('postedJobs', JSON.stringify(postedJobs));
  }, [postedJobs]);

  useEffect(() => {
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
  }, [savedJobs]);

  useEffect(() => {
    localStorage.setItem('jobApplications', JSON.stringify(applications));
  }, [applications]);

  // Job CRUD operations
  const addJob = useCallback((jobData) => {
    const newJob = {
      id: Date.now(),
      jobData: {
        ...jobData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    };
    setPostedJobs(prev => [...prev, newJob]);
    return newJob;
  }, []);

  const updateJob = useCallback((jobId, updatedData) => {
    setPostedJobs(prev =>
      prev.map(job =>
        job.id === jobId
          ? {
              ...job,
              jobData: {
                ...job.jobData,
                ...updatedData,
                updatedAt: new Date().toISOString()
              }
            }
          : job
      )
    );
  }, []);

  const deleteJob = useCallback((jobId) => {
    const numericJobId = Number(jobId);
    setPostedJobs(prev => prev.filter(job => job.id !== numericJobId));
    // Also delete associated applications
    setApplications(prev => prev.filter(app => app.jobId !== numericJobId));
  }, []);

  // Saved jobs operations
  const toggleSaved = useCallback((jobId) => {
    const numericJobId = Number(jobId);
    setSavedJobs(prev =>
      prev.includes(numericJobId)
        ? prev.filter(id => id !== numericJobId)
        : [...prev, numericJobId]
    );
  }, []);

  // Application operations
  const addApplication = useCallback((jobId, applicationData) => {
    const numericJobId = Number(jobId);
    
    // Validate job exists
    if (!postedJobs.some(job => job.id === numericJobId)) {
      console.error(`Job ${numericJobId} not found when creating application`);
      return null;
    }

    const newApplication = {
      id: Date.now(),
      jobId: numericJobId,
      applicantName: applicationData.name,
      applicantEmail: applicationData.email,
      position: applicationData.position || 'UI/UX Designer', // Default position
      status: "New",
      resumeUrl: applicationData.resumeUrl || null,
      comments: applicationData.comments || '',
      appliedDate: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    setApplications(prev => [...prev, newApplication]);
    return newApplication;
  }, [postedJobs]);

  const updateApplication = useCallback((applicationId, updatedData) => {
    const numericAppId = Number(applicationId);
    setApplications(prev =>
      prev.map(app =>
        app.id === numericAppId
          ? {
              ...app,
              ...updatedData,
              updatedAt: new Date().toISOString()
            }
          : app
      )
    );
  }, []);

  const updateApplicationStatus = useCallback((applicationId, newStatus) => {
    updateApplication(applicationId, { status: newStatus });
  }, [updateApplication]);

  // Query operations
  const getJobApplications = useCallback((jobId) => {
    const numericJobId = Number(jobId);
    return applications.filter(app => app.jobId === numericJobId);
  }, [applications]);

  const getApplicationById = useCallback((applicationId) => {
    const numericAppId = Number(applicationId);
    return applications.find(app => app.id === numericAppId);
  }, [applications]);

  const getApplicationStats = useCallback((jobId) => {
    const jobApps = jobId ? getJobApplications(jobId) : applications;
    return {
      total: jobApps.length,
      new: jobApps.filter(app => app.status === "New").length,
      reviewed: jobApps.filter(app => app.status === "Reviewed").length,
      interview: jobApps.filter(app => app.status === "Interview").length,
      hired: jobApps.filter(app => app.status === "Hired").length,
      rejected: jobApps.filter(app => app.status === "Rejected").length
    };
  }, [applications, getJobApplications]);

  // Debug functions
  const debugLogAllData = useCallback(() => {
    console.log('Current state:', {
      postedJobs,
      savedJobs,
      applications
    });
    console.log('LocalStorage:', {
      postedJobs: JSON.parse(localStorage.getItem('postedJobs')),
      savedJobs: JSON.parse(localStorage.getItem('savedJobs')),
      applications: JSON.parse(localStorage.getItem('jobApplications'))
    });
  }, [postedJobs, savedJobs, applications]);

  const clearAllData = useCallback(() => {
    if (window.confirm('Are you sure you want to clear ALL data?')) {
      setPostedJobs([]);
      setSavedJobs([]);
      setApplications([]);
    }
  }, []);

  return (
    <jobContext.Provider
      value={{
        // Job data
        postedJobs,
        addJob,
        updateJob,
        deleteJob,
        
        // Saved jobs
        savedJobs,
        toggleSaved,
        
        // Applications
        applications,
        addApplication,
        updateApplication,
        updateApplicationStatus,
        getJobApplications,
        getApplicationById,
        getApplicationStats,
        
        // Debug utilities
        debugLogAllData,
        clearAllData
      }}
    >
      {children}
    </jobContext.Provider>
  );
};

export default JobProvider;