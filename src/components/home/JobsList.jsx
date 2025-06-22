import { useState, useContext } from "react";
import { FiFilter } from "react-icons/fi";
import { jobContext } from "../../context/JobContext";
import JobItem from "./JobItem";

// Optional: if you want mock data
export const jobs = [ /* ...your mock jobs here... */];

function FilterTags({ label, options, selected, onChange }) {
    const toggle = (option) => {
        if (selected.includes(option)) {
            onChange(selected.filter((item) => item !== option));
        } else {
            onChange([...selected, option]);
        }
    };

    return (
        <div className="mb-4">
            <label className="block text-sm mb-2">{label}</label>
            <div className="flex flex-wrap gap-2">
                {options.map((opt) => (
                    <button
                        key={opt}
                        className={`px-3 py-1 rounded-full border text-sm ${selected.includes(opt)
                            ? "bg-purple-600 text-white"
                            : "bg-gray-100 text-gray-700"
                            }`}
                        onClick={() => toggle(opt)}
                        type="button"
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );
}

function JobsList({ companyProfile = false, company = false }) {
    const { postedJobs } = useContext(jobContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filters, setFilters] = useState({
        title: "",
        types: [],
        models: [],
        levels: [],
        location: "",
    });

    const filteredJobs = postedJobs?.filter((job) => {
        const data = job.jobData || {};
        const matchTitle = !filters.title || data.jobTitle?.includes(filters.title);
        const matchType =
  filters.types.length === 0 ||
  filters.types.includes(data.jobType?.trim()?.toLowerCase());
        const matchModel = filters.models.length === 0 || filters.models.includes(data.workingmodel);
        const matchLevel = filters.levels.length === 0 || filters.levels.includes(data.jobLevel);
        const matchLocation = !filters.location || data.location === filters.location;

        return matchTitle && matchType && matchModel && matchLevel && matchLocation;
    });
    return (
        <div>
            {!companyProfile && (
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl mb-4 font-lato">Recommended Jobs</h3>
                    <FiFilter className="text-2xl cursor-pointer" onClick={() => setShowFilter(true)} />
                </div>
            )}

            {showFilter && (
                <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
                    <div className="bg-white w-[90%] max-w-md rounded-2xl p-6 relative">
                        <button className="absolute top-4 right-4 text-gray-500 text-lg" onClick={() => setShowFilter(false)}>✕</button>
                        <h2 className="text-xl font-bold mb-4">Filter Jobs</h2>

                        <label className="block text-sm mb-1">Job Title</label>
                        <input
                            type="text"
                            value={filters.title}
                            onChange={(e) => setFilters({ ...filters, title: e.target.value })}
                            className="w-full border px-3 py-2 rounded mb-4"
                            placeholder="e.g. UI Designer"
                        />

                        <FilterTags
  label="Job type"
  options={["full time", "part time"]}
  selected={filters.types}
  onChange={(vals) => setFilters({ ...filters, types: vals })}
/>

                        <FilterTags
                            label="Working model"
                            options={["On-site", "Remote", "Hybrid"]}
                            selected={filters.models}
                            onChange={(vals) => setFilters({ ...filters, models: vals })}
                        />
                        <FilterTags
                            label="Level"
                            options={["Intern", "Junior", "Mid", "Senior"]}
                            selected={filters.levels}
                            onChange={(vals) => setFilters({ ...filters, levels: vals })}
                        />

                        <label className="block text-sm mt-4 mb-1">Location</label>
                        <input
                            type="text"
                            value={filters.location}
                            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                            className="w-full border px-3 py-2 rounded mb-6"
                            placeholder="e.g. Cairo"
                        />

                        <button
                            className="w-full bg-purple-600 text-white py-2 rounded"
                            onClick={() => setShowFilter(false)}
                        >
                            Apply Filter
                        </button>
                    </div>
                </div>
            )}

            {/* Job List */}
            <div className="flex flex-col gap-5">
                {filteredJobs.length !== 0 ? (
                    filteredJobs.map((job, index) => (
                        <JobItem job={job} key={index} company={company} />
                    ))
                ) : (
                    <div>No jobs found</div>
                )}
            </div>
        </div>
    );
}

export default JobsList;
