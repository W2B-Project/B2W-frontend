import { useState, useContext, useRef, useEffect } from "react";
import { jobContext } from "../../../../context/JobContext";
import { CompanyProAssets } from "../../../../Company/assests/companyAssets";
//slider config
import Select from "react-select";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
//phone input 
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// style in css 
import "../../../../Company/assests/JobFormStyle.css"
function OpendJobs() {
  const { addJob } = useContext(jobContext);

  const currencyOptions = [
    {
      value: "EGP",
      label: (
        <div className="flex items-center gap-2">
          <img src={CompanyProAssets.EGPFlag} alt="EGP" className="w-5 h-4 rounded-sm" />
          EGP (جنيه)
        </div>
      ),
    },
    {
      value: "USD",
      label: (
        <div className="flex items-center gap-2">
          <img src={CompanyProAssets.USDFlag} alt="USD" className="w-5 h-4 rounded-sm" />
          USD ($)
        </div>
      ),
    },
    {
      value: "EUR",
      label: (
        <div className="flex items-center gap-2">
          <img src={CompanyProAssets.EURFlag} alt="EUR" className="w-5 h-4 rounded-sm" />
          EUR (€)
        </div>
      ),
    },
    {
      value: "SAR",
      label: (
        <div className="flex items-center gap-2">
          <img src={CompanyProAssets.SARFlag} alt="SAR" className="w-5 h-4 rounded-sm" />
          SAR (ريال)
        </div>
      ),
    },
  ];

  const [formData, setFormData] = useState({
    jobTitle: "",
    jobLevel: "",
    jobType: "",
    workingmodel: "",
    currency: "",
    minSalary: 10000,
    maxSalary: 70000,
    description: "",
    requirements: "",
    AboutCompany: "",
    personName: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const salarySliderRef = useRef(null);

  useEffect(() => {
    if (!salarySliderRef.current.noUiSlider) {
      noUiSlider.create(salarySliderRef.current, {
        start: [formData.minSalary, formData.maxSalary],
        connect: true,
        step: 1000,
        range: {
          min: 0,
          max: 70000,
        },
        tooltips: [true, true],
        format: {
          to: (value) => `${(value / 1000).toFixed(0)}K`,
          from: (value) => Number(value.replace("K", "")) * 1000,
        },
        pips: {
          mode: "values",
          values: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000],
          density: 10,
          format: {
            to: (value) => `${value / 1000}K`,
          },
        },
      });

      salarySliderRef.current.noUiSlider.on("update", (values) => {
        const [min, max] = values.map((val) =>
          parseInt(val.replace("K", "")) * 1000
        );
        setFormData((prev) => ({
          ...prev,
          minSalary: min,
          maxSalary: max,
        }));
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCurrencyChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      currency: selectedOption.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.jobTitle) newErrors.jobTitle = "Job title is required";
    if (!formData.jobLevel) newErrors.jobLevel = "Job level is required";
    if (!formData.jobType) newErrors.jobType = "Job type is required";
    if (!formData.workingmodel) newErrors.workingmodel = "Working Model is required";
    if (!formData.currency) newErrors.currency = "Currency is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.requirements) newErrors.requirements = "Requirements are required";
    if (!formData.AboutCompany) newErrors.AboutCompany = "AboutCompany is required";
    if (!formData.personName) newErrors.personName = "Person name is required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";

    if (formData.minSalary > formData.maxSalary) {
      newErrors.salary = "Min salary should be less than max salary";
    }

    setErrors(newErrors);
    const valid = Object.keys(newErrors).length === 0;
    setIsFormValid(valid);

    if (!valid) return;

    addJob(formData);

    setFormData({
      jobTitle: "",
      jobLevel: "",
      jobType: "",
      workingmodel: "",
      currency: "",
      minSalary: 10000,
      maxSalary: 70000,
      description: "",
      requirements: "",
      AboutCompany: "",
      personName: "",
      phoneNumber: ""
    });

    setErrors({});
    setIsFormValid(false);

    salarySliderRef.current.noUiSlider.set([10000, 70000]);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full bg-white rounded-[20px] shadow p-6 space-y-6">
      <h2 className="text-xl font-bold">1. Quick Job Overview</h2>

      <div className="space-y-4">
        {/* Job Title */}
        <div>
          <label className="text-lg font-normal">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="EX : Product manager"
            className={`text-dark_gray text-base font-normal w-full border pl-4 p-2 rounded-[18px] h-14 ${errors.jobTitle ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.jobTitle && <p className="text-red-500 text-sm">{errors.jobTitle}</p>}
        </div>

        {/* Job Level */}
        <div>
          <label className="text-lg font-normal">Job Level</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <img src={CompanyProAssets.levelchart} className="w-6 h-6" alt="Level Icon" />
            </span>
            <select
              name="jobLevel"
              value={formData.jobLevel}
              onChange={handleChange}
              className={`text-dark_gray text-base font-normal w-full border p-2 pl-12 rounded-[18px] h-14 ${errors.jobLevel ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Select one</option>
              <option value="Entry">Entry</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
              <option value="Lead">Lead</option>
            </select>
          </div>
          {errors.jobLevel && <p className="text-red-500 text-sm">{errors.jobLevel}</p>}
        </div>

        {/* Job Type */}
        <div>
          <label className="text-lg font-normal">Job Type</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <img src={CompanyProAssets.bag} className="w-6 h-6" alt="Job Type Icon" />
            </span>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className={`text-dark_gray text-base font-normal w-full border p-2 pl-12 rounded-[18px] h-14 ${errors.jobType ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Select Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>
          </div>
          {errors.jobType && <p className="text-red-500 text-sm">{errors.jobType}</p>}
        </div>

        {/* Working Model */}
        <div>
          <label className="text-lg font-normal">Working Model</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <img src={CompanyProAssets.workman} className="w-6 h-6" alt="icon" />
            </span>
            <select
              name="workingmodel"
              value={formData.workingmodel}
              onChange={handleChange}
              className={`text-dark_gray text-base font-normal w-full border p-2 pl-12 rounded-[18px] h-14 ${errors.workingmodel ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Select one</option>
              <option value="Remotly">Remotly</option>
              <option value="On-site">On-site</option>
            </select>
          </div>
          {errors.workingmodel && <p className="text-red-500 text-sm">{errors.workingmodel}</p>}
        </div>

        {/* Currency */}
        <div>
          <label className="text-lg font-normal">Currency</label>
          <Select
            options={currencyOptions}
            onChange={handleCurrencyChange}
            value={currencyOptions.find((opt) => opt.value === formData.currency)}
            classNames={{
              control: () =>
                "text-dark_gray text-base font-normal w-full border border-gray-300 p-2 !rounded-[18px] h-14 shadow-none ",
              singleValue: () => "text-dark_gray",
              menu: () => "z-50",
            }}
            classNamePrefix="react-select"
          />
          {errors.currency && <p className="text-red-500 text-sm">{errors.currency}</p>}
        </div>

        {/* Salary Range */}
        <div className="h-20">
          <label className="text-lg font-normal mb-4">Salary</label>
          <div ref={salarySliderRef} className="mt-2"></div>
          {errors.salary && <p className="text-red-500 text-sm">{errors.salary}</p>}
        </div>
      </div>

      <h2 className="text-xl font-bold mt-4">2. Job Specifications</h2>
      <div className="space-y-4">
        {/* Description */}
        <div>
          <label className="font-normal text-lg text-dark_gray">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Type here..."
            className={`text-dark_gray text-base font-normal w-full border pl-4 resize-none p-2 rounded-[18px] h-[186px] ${errors.description ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* Requirements */}
        <div>
          <label className="font-normal text-lg text-dark_gray">Requirements</label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            placeholder="Type here..."
            className={`text-dark_gray text-base font-normal w-full border pl-4 resize-none p-2 rounded-[18px] h-[186px] ${errors.requirements ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.requirements && <p className="text-red-500 text-sm">{errors.requirements}</p>}
        </div>

        {/* About Company */}
        <div>
          <label className="font-normal text-lg text-dark_gray">About Company</label>
          <textarea
            name="AboutCompany"
            value={formData.AboutCompany}
            onChange={handleChange}
            placeholder="Type here..."
            className={`text-dark_gray text-base font-normal w-full border pl-4 resize-none p-2 rounded-[18px] h-[186px] ${errors.AboutCompany ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.AboutCompany && <p className="text-red-500 text-sm">{errors.AboutCompany}</p>}
        </div>
      </div>

      <h2 className="text-xl font-bold">3. Contact Info</h2>
      {/* Person Name */}
      <div>
        <label>Person Name</label>
        <input
          type="text"
          name="personName"
          value={formData.personName}
          onChange={handleChange}
          placeholder="EX : Hany Ahmed"
          className={`text-dark_gray text-base font-normal w-full border pl-4 p-2 rounded-[18px] h-14 ${errors.personName ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.personName && <p className="text-red-500 text-sm">{errors.personName}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label>Phone Number</label>
        <PhoneInput
          country={"eg"}
          value={formData.phoneNumber}
          onChange={(phone) => setFormData((prev) => ({ ...prev, phoneNumber: phone }))}
          inputClass={`text-dark_gray text-base font-normal !w-full !h-14 !rounded-[18px] ${errors.phoneNumber ? "border-red-500" : "border-gray-300"}`}
          containerClass="w-full"
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
      </div>


      {/* Submit */}
      <button
        type="submit"
        className="w-full py-2 rounded-[18px] h-14 text-white transition-colors bg-purple-600 hover:bg-purple-700"
      >
        Post
      </button>
    </form>
  );
}

export default OpendJobs;
