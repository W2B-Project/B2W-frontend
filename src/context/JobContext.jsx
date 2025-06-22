import { createContext, useState, useEffect, useCallback } from "react";

export const jobContext = createContext();

const JobProvider = ({ children }) => {
  const loadFromLocalStorage = (key, defaultValue) => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : defaultValue;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error);
      return defaultValue;
    }
  };

  const [postedJobs, setPostedJobs] = useState(() =>
    loadFromLocalStorage("postedJobs", [])
  );
  const [savedJobs, setSavedJobs] = useState(() =>
    loadFromLocalStorage("savedJobs", [])
  );
  const [applications, setApplications] = useState(() => {
    const loaded = loadFromLocalStorage("jobApplications", []);
    return loaded.map((app) => ({
      ...app,
      id: Number(app.id),
      jobId: Number(app.jobId),
    }));
  });

  useEffect(() => {
    localStorage.setItem("postedJobs", JSON.stringify(postedJobs));
  }, [postedJobs]);

  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  useEffect(() => {
    localStorage.setItem("jobApplications", JSON.stringify(applications));
  }, [applications]);

  const addJob = useCallback((jobData) => {
    const newJob = {
      id: Date.now(),
      jobData: {
        ...jobData,
        accepted: null, // ✅ Inside jobData
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    };
    setPostedJobs((prev) => [...prev, newJob]);
    return newJob;
  }, []);

  const updateJob = useCallback((jobId, updatedData) => {
    setPostedJobs((prev) =>
      prev.map((job) =>
        job.id === jobId
          ? {
              ...job,
              jobData: {
                ...job.jobData,
                ...updatedData,
                updatedAt: new Date().toISOString(),
              },
            }
          : job
      )
    );
  }, []);

  const updateJobAcceptedStatus = useCallback((jobId, isAccepted) => {
    setPostedJobs((prev) =>
      prev.map((job) =>
        job.id === jobId
          ? {
              ...job,
              jobData: {
                ...job.jobData,
                accepted: isAccepted,
                updatedAt: new Date().toISOString(),
              },
            }
          : job
      )
    );
  }, []);

  const deleteJob = useCallback((jobId) => {
    const numericJobId = Number(jobId);
    setPostedJobs((prev) => prev.filter((job) => job.id !== numericJobId));
    setApplications((prev) =>
      prev.filter((app) => app.jobId !== numericJobId)
    );
  }, []);

  const toggleSaved = useCallback((jobId) => {
    const numericJobId = Number(jobId);
    setSavedJobs((prev) =>
      prev.includes(numericJobId)
        ? prev.filter((id) => id !== numericJobId)
        : [...prev, numericJobId]
    );
  }, []);

  const addApplication = useCallback(
    (jobId, applicationData) => {
      const numericJobId = Number(jobId);
      if (!numericJobId || isNaN(numericJobId)) return null;

      const jobExists = postedJobs.some((job) => job.id === numericJobId);
      if (!jobExists) return null;

      const newApplication = {
        id: Date.now(),
        jobId: numericJobId,
        applicantName: applicationData.name,
        applicantEmail: applicationData.email,
        position: applicationData.position || "UI/UX Designer",
        status: "New",
        resumeUrl: applicationData.resumeFile?.name || null,
        comments: applicationData.comments || "",
        appliedDate: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      setApplications((prev) => [...prev, newApplication]);
      return newApplication;
    },
    [postedJobs]
  );

  const updateApplication = useCallback((applicationId, updatedData) => {
    const numericAppId = Number(applicationId);
    setApplications((prev) =>
      prev.map((app) =>
        app.id === numericAppId
          ? { ...app, ...updatedData, updatedAt: new Date().toISOString() }
          : app
      )
    );
  }, []);

  const updateApplicationStatus = useCallback(
    (applicationId, newStatus) => {
      updateApplication(applicationId, { status: newStatus });

      const app = applications.find((app) => app.id === applicationId);
      if (app) {
        if (newStatus === "Accepted") {
          updateJobAcceptedStatus(app.jobId, true);
        } else if (newStatus === "Rejected") {
          updateJobAcceptedStatus(app.jobId, false);
        }
      }
    },
    [applications, updateApplication, updateJobAcceptedStatus]
  );

  const getJobApplications = useCallback(
    (jobId) => applications.filter((app) => app.jobId === Number(jobId)),
    [applications]
  );

  const getApplicationById = useCallback(
    (applicationId) =>
      applications.find((app) => app.id === Number(applicationId)),
    [applications]
  );

  const getApplicationStats = useCallback(
    (jobId) => {
      const jobApps = jobId ? getJobApplications(jobId) : applications;
      return {
        total: jobApps.length,
        new: jobApps.filter((app) => app.status === "New").length,
        reviewed: jobApps.filter((app) => app.status === "Reviewed").length,
        interview: jobApps.filter((app) => app.status === "Interview").length,
        Accepted: jobApps.filter((app) => app.status === "Accepted").length,
        rejected: jobApps.filter((app) => app.status === "Rejected").length,
      };
    },
    [applications, getJobApplications]
  );

  const debugLogAllData = useCallback(() => {
    console.log("Context State:", { postedJobs, savedJobs, applications });
    console.log("LocalStorage:", {
      postedJobs: JSON.parse(localStorage.getItem("postedJobs")),
      savedJobs: JSON.parse(localStorage.getItem("savedJobs")),
      applications: JSON.parse(localStorage.getItem("jobApplications")),
    });
  }, [postedJobs, savedJobs, applications]);

  const clearAllData = useCallback(() => {
    if (window.confirm("Are you sure you want to clear ALL data?")) {
      setPostedJobs([]);
      setSavedJobs([]);
      setApplications([]);
      localStorage.clear();
    }
  }, []);

  return (
    <jobContext.Provider
      value={{
        postedJobs,
        addJob,
        updateJob,
        deleteJob,
        savedJobs,
        toggleSaved,
        applications,
        addApplication,
        updateApplication,
        updateApplicationStatus,
        getJobApplications,
        getApplicationById,
        getApplicationStats,
        debugLogAllData,
        clearAllData,
      }}
    >
      {children}
    </jobContext.Provider>
  );
};

export default JobProvider;
