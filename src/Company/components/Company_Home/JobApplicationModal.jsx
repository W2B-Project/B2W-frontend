import { useState, useRef, useContext } from "react";
import { jobContext } from "../../../context/JobContext";

function JobApplicationModal({ jobId, onClose, jobTitle = "UX Designer" }) {
    const { addApplication } = useContext(jobContext);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        resume: null,
        comments: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type and size (max 5MB)
            const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            const maxSize = 5 * 1024 * 1024; // 5MB
            
            if (!validTypes.includes(file.type)) {
                setSubmitError("Please upload a PDF or Word document");
                return;
            }
            
            if (file.size > maxSize) {
                setSubmitError("File size exceeds 5MB limit");
                return;
            }
            
            setFormData(prev => ({ ...prev, resume: file }));
            setSubmitError(null);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            fileInputRef.current.files = e.dataTransfer.files;
            handleFileChange({ target: { files: e.dataTransfer.files } });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);
        
        try {
            await addApplication(jobId, {
                name: formData.name,
                email: formData.email,
                position: jobTitle,
                resumeFile: formData.resume,
                comments: formData.comments
            });
            setSubmitSuccess(true);
            setTimeout(() => {
                onClose();
            }, 1500);
        } catch (error) {
            setSubmitError(error.message || "Failed to submit application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitSuccess) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-xl p-6 w-full max-w-md text-center">
                    <div className="mb-4">
                        <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
                    <p className="text-gray-600 mb-6">Thank you for applying to the {jobTitle} position.</p>
                    <button
                        onClick={onClose}
                        className="w-full h-[48px] bg-primry_purble hover:bg-primaryLight duration-300 text-white rounded-[15px] font-bold text-lg"
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Applying for {jobTitle}</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-500 hover:text-gray-700 transition"
                        disabled={isSubmitting}
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primry_purble focus:border-transparent"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primry_purble focus:border-transparent"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Upload your resume (CV) *</label>
                        <div
                            className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition ${
                                formData.resume 
                                    ? "border-green-500 bg-green-50" 
                                    : "border-gray-300 hover:bg-gray-50"
                            }`}
                            onClick={() => !isSubmitting && fileInputRef.current.click()}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        >
                            {formData.resume ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-sm text-gray-600 truncate max-w-xs">{formData.resume.name}</p>
                                </div>
                            ) : (
                                <div>
                                    <svg className="w-8 h-8 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p className="text-sm text-gray-500 mt-2">
                                        Click to upload or drag and drop<br />
                                        <span className="text-xs">(PDF, DOC, DOCX, max 5MB)</span>
                                    </p>
                                </div>
                            )}
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                                accept=".pdf,.doc,.docx"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Any comment?</label>
                        <textarea
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            placeholder="Type here..."
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primry_purble focus:border-transparent min-h-[100px]"
                            disabled={isSubmitting}
                        />
                    </div>

                    {submitError && (
                        <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
                            {submitError}
                        </div>
                    )}

                    <button
                        type="submit"
                        className={`w-full h-[48px] bg-primry_purble hover:bg-primaryLight duration-300 text-white rounded-[15px] font-bold text-lg mt-4 flex items-center justify-center ${
                            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </>
                        ) : (
                            "Send Application"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default JobApplicationModal;