import { useContext, useEffect, useState } from 'react';
import { jobContext } from '../../../context/JobContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const StatusBadge = ({ status }) => {
    const getStatusClasses = () => {
        switch (status) {
            case "New": return "bg-blue-100 text-blue-800";
            case "Reviewed": return "bg-yellow-100 text-yellow-800";
            case "Interview": return "bg-purple-100 text-purple-800";
            case "Accepted": return "bg-green-100 text-green-800";
            case "Rejected": return "bg-red-100 text-red-800";
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
    const { jobId } = useParams();
    console.log(jobId)
    const {
        getJobApplications,
        applications: allApplications,
        postedJobs,
    } = useContext(jobContext);

    const navigate = useNavigate();
    const [filteredApplications, setFilteredApplications] = useState([]);
    const [job, setJob] = useState(null);

    useEffect(() => {
        const numericJobId = Number(jobId);
        if (!numericJobId || postedJobs.length === 0 ) return;

        const matchedJob = postedJobs.find((j) => j.id === numericJobId);
        setJob(matchedJob);

        if (matchedJob) {
            const filtered = allApplications.filter(app => Number(app.jobId) === numericJobId);
            setFilteredApplications(filtered);
        }
    }, [jobId, allApplications, postedJobs]);
    

    return (
        <div className="max-w-3xl mx-auto p-6 font-sans">
            <div className="flex justify-between items-center mb-6">
                <button
                    onClick={() => navigate('/home-Company')}
                    className="text-gray-500 hover:text-gray-700 flex items-center"
                >
                    <ArrowLeft className="mr-1 text-black" size={25} />
                </button>
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-semibold capitalize">
                        {job?.jobData?.jobTitle ?? "Untitled Job"}
                    </h2>
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
                        <p className="mb-3 text-gray-500 text-lg font-medium">
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
                                            {application.applicantName?.split(' ').map(name => name[0]).join('').toUpperCase() || 'NA'}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-medium text-gray-800">
                                                {application.applicantName}
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-1">
                                                {application.position}
                                            </p>
                                            <p className="text-xs text-gray-400 mt-1">
                                                Applied: {new Date(application.appliedDate).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <StatusBadge status={application.status} />
                                        <Link to={`/home-Company/allApplications/job/${job.id}/application/${application.id}`}>
                                            <ArrowRight size={20} />
                                        </Link>
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
