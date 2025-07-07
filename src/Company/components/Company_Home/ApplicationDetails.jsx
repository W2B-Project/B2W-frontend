import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { jobContext } from '../../../context/JobContext';
import { ArrowLeft, Download } from 'lucide-react';
import Button from '../../../components/global/Button';

const ApplicationDetails = () => {
    const { applicationId, jobId } = useParams();
    const navigate = useNavigate();
    const { getApplicationById, updateApplicationStatus, postedJobs } = useContext(jobContext);

    const [application, setApplication] = useState(null);
    const [job, setJob] = useState(null);

    useEffect(() => {
        if (applicationId && jobId) {
            const app = getApplicationById(applicationId);
            const jobFound = postedJobs.find((j) => Number(j.id) === Number(jobId));
            setApplication(app);
            setJob(jobFound);
        }
    }, [applicationId, jobId, getApplicationById, postedJobs]);

    const handleStatusUpdate = (newStatus) => {
        updateApplicationStatus(application.id, newStatus);
        navigate(`/home-Company/allApplications/job/${jobId}`);
    };

    if (!application || !job) {
        return (
            <div className="mx-auto p-6">
                <div className="text-center py-8 text-gray-500">Application data not found</div>
                <button
                    onClick={() => navigate(`/home-Company/allApplications/job/${jobId}`)}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Back to Applications
                </button>
            </div>
        );
    }

    return (
        <div className="mx-auto p-6 font-sans">
            <div className="bg-white p-6 space-y-4 rounded-2xl shadow-sm overflow-hidden">
                <button
                    onClick={() => navigate(`/home-Company/allApplications/job/${jobId}`)}
                    className="flex items-center text-gray-600 hover:text-gray-800 mb-3 transition-colors"
                >
                    <ArrowLeft className="mr-2" size={20} />
                </button>

                <div className="bg-primaryLight/60 px-6 py-4 rounded-2xl flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">{application.applicantName}</h1>
                        <p className="text-gray-600">{application.position}</p>
                    </div>
                    <Button btn_text="View Profile" width={70} />
                </div>

                <div>
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Application Details</h2>
                        <div className="space-y-3 text-gray-700">
                            <div className="flex bg-[#E3E3E5] rounded-[18px] py-4 px-5 justify-start items-center">
                                <span className="w-20 font-medium font-lg">Full Name:</span>
                                <span className="font-medium font-lg">{application.applicantName}</span>
                            </div>
                            <div className="flex bg-[#E3E3E5] rounded-[18px] py-4 px-5 justify-start items-center">
                                <span className="w-12 font-medium font-lg">Email:</span>
                                <span className="font-medium font-lg">{application.applicantEmail}</span>
                            </div>
                            <div className="flex bg-[#E3E3E5] rounded-[18px] py-4 px-5 justify-start items-center">
                                <span className="w-7 font-medium font-lg">CV:</span>
                                <a
                                    href={application.resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-primry_purble hover:underline text-lg font-medium"
                                >
                                    <span className="text-base">Download CV</span>
                                    <Download className="mr-1" size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex bg-[#E3E3E5] rounded-[18px] py-4 px-5 justify-start items-start">
                            <span className="font-medium font-lg">Comments:</span>
                            <span className="text-gray-600">
                                {application.comments || "No comments provided."}
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-4 pt-4 w-full">
                        <button
                            onClick={() => handleStatusUpdate("Rejected")}
                            className="px-6 py-2 w-full bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                        >
                            Reject
                        </button>
                        <button
                            onClick={() => handleStatusUpdate("Accepted")}
                            className="px-6 py-2 w-full bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationDetails;
