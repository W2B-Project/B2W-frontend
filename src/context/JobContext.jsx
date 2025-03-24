import { createContext, useState,useEffect } from "react"
export const jobContext = createContext()

const JobProvider = ({ children }) => {
    const [savedJobs, setSavedJobs] = useState(() => {
        const saved = localStorage.getItem('savedJobs');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
    }, [savedJobs]);
    
    const toggleSaved = (jobID) => {
        setSavedJobs((prev) => 
            prev.includes(jobID) ?
                prev.filter(id => id !== jobID)
                : [...prev, jobID]
        )
    }
    return (
        <jobContext.Provider value={{ toggleSaved, savedJobs }}>
            {children}
        </jobContext.Provider>
    )
}

export default JobProvider