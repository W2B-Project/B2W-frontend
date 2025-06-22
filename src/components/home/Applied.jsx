import { useContext, useMemo } from "react";
import { jobContext } from "../../context/JobContext";
import JobItem from "../../components/home/JobItem";

function Applied() {
    const { postedJobs, applications } = useContext(jobContext);

    const { acceptedJobs, rejectedJobs, pendingJobs } = useMemo(() => {
        const accepted = [];
        const rejected = [];
        const pending = [];

        applications.forEach((app) => {
            const job = postedJobs.find((job) => job.id === app.jobId);
            if (!job) return;

            if (app.status === "Accepted") {
                accepted.push(job);
            } else if (app.status === "Rejected") {
                rejected.push(job);
            } else {
                pending.push(job);
            }
        });

        return {
            acceptedJobs: accepted,
            rejectedJobs: rejected,
            pendingJobs: pending,
        };
    }, [applications, postedJobs]);

    return (
        <div className="p-6 space-y-10">
            <h2 className="text-2xl font-bold">Applied Jobs</h2>

            {/* ✅ Accepted Jobs */}
            <Section title="Accepted Jobs" jobs={acceptedJobs} />

            {/* ❌ Rejected Jobs */}
            <Section title="Rejected Jobs" jobs={rejectedJobs} />

            {/* ⏳ Pending Jobs */}
            <Section title="Pending Jobs" jobs={pendingJobs} />
        </div>
    );
}

function Section({ jobs }) {
    return (
        <div className="space-y-4">
            <div className="space-y-6">
                {jobs.map((job, index) => (
                    <JobItem job={job} key={index} company={true} />
                ))}
            </div>
        </div>
    );
}

export default Applied;
