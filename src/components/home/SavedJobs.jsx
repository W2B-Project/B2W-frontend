import Saved from "../UserProfile/Saved/Saved"
function SavedJobs() {
    return (
        <div className="col-span-9 bg-white">
            <div className="w-[90%] m-auto">
                <p className="text-center text-2xl font-semibold my-5">Saved Jobs</p>
                <Saved />
            </div>

        </div>
    )
}

export default SavedJobs
