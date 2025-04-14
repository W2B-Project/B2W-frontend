import { userprofileassets } from "../../../../assets/images/user Profile/userprofileAssets"
import { Check, Upload } from "lucide-react"
import Button from "../../../global/Button"
import { useState } from "react"
function ResumeModal({ onSave, onClose }) {
    const [modalType, setModalType] = useState('upload')
    const [selectedCv, setselectedCV] = useState(null)
    const [progress, setProgress] = useState(0);
    const btnTxt = <div className="flex gap-2 items-center justify-center">
        <Upload />
        <p>Upload your cv</p>
    </div>

    const handleFileUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            setselectedCV(file)
            setModalType('loading')
            setProgress(0);
            let currentProgress = 0;
            const fakeLoading = () => {
                if (currentProgress < 100) {
                    currentProgress += 10; 
                    setProgress(currentProgress);
                    setTimeout(fakeLoading, 500); 
                } else {
                    setModalType("uploaded");
                    onSave(file)
                }
            };
            fakeLoading();
            
        }
    }

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 rounded-xl">
                <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6 ">
                    {/* header of modal */}
                    <p className="cursor-pointer" onClick={onClose}>✕</p>
                    <div className="w-11/12 m-auto">
                        {
                            modalType === 'upload' ?
                                <>
                                    <img src={userprofileassets.uploadCV} alt="" className="m-auto" />
                                    <input type="file" id="cv-input" className="hidden" onChange={handleFileUpload} />
                                    <label htmlFor="cv-input">
                                        <div className="p-2 bg-primry_purble my-5 w-full cursor-pointer rounded-2xl border-primry_purble border-2 text-white font-roboto">
                                            {btnTxt}
                                        </div>
                                    </label>
                                </>
                                : modalType === 'loading' ?
                                    <>
                                        <img src={userprofileassets.uploadCV} alt="" className="m-auto" />
                                        <p>{selectedCv.name}</p>
                                        <div className="my-5 w-full h-4 bg-gray-300 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primry_purble transition-all duration-300"
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>
                                    </>
                                    : <>
                                        <div className="mb-7">
                                            <img src={userprofileassets.uploaded} alt="" className="m-auto" />
                                            <p className="my-2 text-lg text-center">Your CV has been uploaded successfully.</p>
                                        </div>
                                        <p className="my-2">{selectedCv.name}</p>
                                        <div className="flex gap-2 items-center w-full h-4 my-3">
                                            <div className="h-full bg-primry_purble w-full rounded-full" />
                                            <Check color="#54E15D" />
                                        </div>
                                        <Button btn_text={'Done'} width={'w-1/4 block mx-auto mb-1'} onHandleClick={onClose} marg={7} />
                                    </>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default ResumeModal