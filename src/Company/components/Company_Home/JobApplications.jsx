import { useContext, useEffect, useState } from 'react';
import { jobContext } from '../../../context/JobContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const StatusBadge = ({ status }) => {
    const getStatusClasses = () => {
        switch (status) {
            case "New": return "bg-blue-100 text-blue-800";
            case "Reviewed": return "bg-yellow-100 text-yellow-800";
            case "Interview": return "bg-purple-100 text-purple-800";
            case "Hired": return "bg-green-100 text-green-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClasses()}`}>
            {status}
        </span>
    );
};

const JobApplications = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const {
        getJobApplications,
        applications: allApplications,
    } = useContext(jobContext);
    const [filteredApplications, setFilteredApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (state?.job) {
            console.log('Job data received:', state.job);
            getJobApplications(state.job.id)
                .then(() => setLoading(false))
                .catch(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [state?.job]);

    useEffect(() => {
        if (state?.job && allApplications.length > 0) {
            const filtered = allApplications.filter(app =>
                app.jobId === Number(state.job.id) || app.jobId === 0
            );
            console.log('Filtered applications:', filtered);
            setFilteredApplications(filtered);
        }
    }, [allApplications, state?.job]);

    const handleViewApplication = (applicationId) => {
        navigate(`application/${applicationId}`, {
            state: { job: state.job }
        });
    };

    if (loading) {
        return <div className="text-center p-6">Loading...</div>;
    }

    if (!state?.job) {
        return (
            <div className="max-w-3xl mx-auto p-6">
                <div className="text-center py-8 text-gray-500">
                    No job selected. Please select a job first.
                </div>
                <button
                    onClick={() => navigate('/home-Company')}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Back to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6 font-sans">
            <div className="flex justify-between items-center mb-6">
                <button
                    onClick={() => navigate(-1)}
                    className="text-gray-500 hover:text-gray-700 flex items-center"
                >
                    <ArrowLeft className="mr-1 text-black" size={25} />
                </button>
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-semibold">{state.job.jobData.jobTitle}</h2>
                    <span className="text-sm text-gray-500">
                        at {state.job.companyName || 'Our Company'}
                    </span>
                </div>
                <span className="text-lg text-white bg-primry_purble rounded-full h-4 w-4 flex justify-center items-center p-3 aspect-square">
                    {filteredApplications.length}
                </span>
            </div>

            <div className="space-y-4">
                {filteredApplications.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        <p>No applications found for this job</p>
                    </div>
                ) : (
                    <div>
                        <p className='mb-3 text-gray-500 text-lg font-medium'>
                            Applications ({filteredApplications.length})
                        </p>
                        <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
                            {filteredApplications.map((application) => (
                                <div
                                    key={application.id}
                                    className="flex justify-between items-center p-4 hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-medium text-gray-600">
                                            {application.applicantName?.split(' ').map(name => name[0]).join('').toUpperCase()}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-medium text-gray-800">
                                                {application.applicantName || 'Unknown Applicant'}
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-1">
                                                {application.position || 'No position specified'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <StatusBadge status={application.status || 'New'} />
                                        <button
                                            onClick={() => handleViewApplication(application.id)}
                                            className="text-gray-500 hover:text-gray-700 flex items-center"
                                            aria-label="View application details"
                                        >
                                            <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobApplications;