import { useState, useContext, useEffect } from "react";
import { jobContext } from "../../../../context/JobContext";

function OpendJobs() {
  const { savedJobs, toggleSaved } = useContext(jobContext);
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobType: "",
    salary: 10000,
    description: "",
    requirements: "",
    personName: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const newErrors = {};
    if (!formData.jobTitle) newErrors.jobTitle = "Job title is required";
    if (!formData.jobType) newErrors.jobType = "Job type is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.requirements) newErrors.requirements = "Requirements are required";
    if (!formData.personName) newErrors.personName = "Person name is required";

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // مثلاً بنحفظ عنوان الوظيفة كـ ID مؤقتًا
      toggleSaved(formData.jobTitle); 
      console.log("Job Posted:", formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6 space-y-6 mt-20"
    >
      <h2 className="text-xl font-semibold">1. Quick Job Overview</h2>

      <div className="space-y-4">
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          placeholder="Job Title"
          className={`w-full border p-2 rounded ${errors.jobTitle ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.jobTitle && <p className="text-red-500 text-sm">{errors.jobTitle}</p>}

        <select
          name="jobType"
          value={formData.jobType}
          onChange={handleChange}
          className={`w-full border p-2 rounded ${errors.jobType ? "border-red-500" : "border-gray-300"}`}
        >
          <option value="">Select Job Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
        </select>
        {errors.jobType && <p className="text-red-500 text-sm">{errors.jobType}</p>}

        <input
          type="range"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          min={10000}
          max={70000}
          className="w-full accent-purple-500"
        />
      </div>

      <h2 className="text-xl font-semibold">2. Job Specifications</h2>

      <div className="space-y-4">
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className={`w-full border p-2 rounded ${errors.description ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}

        <textarea
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          placeholder="Requirements"
          className={`w-full border p-2 rounded ${errors.requirements ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.requirements && <p className="text-red-500 text-sm">{errors.requirements}</p>}
      </div>

      <h2 className="text-xl font-semibold">3. Contact Info</h2>

      <input
        type="text"
        name="personName"
        value={formData.personName}
        onChange={handleChange}
        placeholder="Person Name"
        className={`w-full border p-2 rounded ${errors.personName ? "border-red-500" : "border-gray-300"}`}
      />
      {errors.personName && <p className="text-red-500 text-sm">{errors.personName}</p>}

      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-2 rounded text-white transition-colors ${
          isFormValid ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Post
      </button>
    </form>
  );
}

export default OpendJobs;
