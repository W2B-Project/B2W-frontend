import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uploadImage from '../../assets/images/home/ResumeReview2.png'

export default function UploadCvModal({ onClose, setService, onDone, isProcessing = false, selectedFile }) {
    const [progress, setProgress] = useState(0);
    const [isDone, setIsDone] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isProcessing) {
            setProgress(100);
            return;
        }
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 95 ? prev + 5 : prev));
        }, 300);

        return () => clearInterval(interval);
    }, [isProcessing]);

    const handleDone = () => {
        onClose();
        if (onDone) {
            onDone();
        } else if (setService) {
            setService('CvAnalysisResult');
        } else {
            navigate('/cv-result');
        }
    };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center gap-6 z-50 !mt-0">
            <div className="bg-white rounded-2xl p-6 w-[454px] h-[372px] flex flex-col items-center gap-4 text-center">
                {isProcessing ? (
                    <>
                        <img
                            src={uploadImage}
                            alt="Uploading"
                            className="w-52 h-52"
                        />
                        <div className='text-sm'>Analyzing your CV with AI...</div>
                        <div className="font-medium">{selectedFile.name}</div>
                        <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
                            <div
                                className="h-4 bg-primry_purble transition-all"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-36 h-36 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-4xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 140 140" fill="none">
                                <path d="M70 140C108.66 140 140 108.66 140 70C140 31.3401 108.66 0 70 0C31.3401 0 0 31.3401 0 70C0 108.66 31.3401 140 70 140Z" fill="#F2E5FF" />
                                <path d="M69.9993 128.333C102.216 128.333 128.333 102.216 128.333 69.9993C128.333 37.7827 102.216 11.666 69.9993 11.666C37.7827 11.666 11.666 37.7827 11.666 69.9993C11.666 102.216 37.7827 128.333 69.9993 128.333Z" fill="#7F00FF" />
                                <path d="M65.0437 91.0949C64.9394 91.0949 64.835 91.0924 64.7305 91.0873C63.8079 91.0428 62.9059 90.7993 62.0863 90.3734C61.2667 89.9476 60.5488 89.3495 59.9821 88.6202L51.034 77.1155C49.9921 75.7728 49.5253 74.0716 49.7361 72.3852C49.9468 70.6988 50.8179 69.1648 52.1582 68.1198L52.4801 67.8692C53.8229 66.8273 55.5242 66.3606 57.2107 66.5713C58.8972 66.7821 60.4312 67.6531 61.4764 68.9933C61.9807 69.6418 62.6192 70.1736 63.3481 70.5524C64.077 70.9312 64.8792 71.148 65.6997 71.188C66.5202 71.228 67.3397 71.0903 68.102 70.7842C68.8643 70.4781 69.5515 70.0109 70.1165 69.4146L88.2856 50.2352C88.8646 49.624 89.5583 49.1329 90.3271 48.7898C91.0959 48.4467 91.9248 48.2585 92.7664 48.2357C93.6079 48.213 94.4457 48.3563 95.232 48.6574C96.0182 48.9584 96.7374 49.4115 97.3485 49.9905L97.6451 50.2716C98.8792 51.4408 99.5984 53.0525 99.6442 54.752C99.6901 56.4515 99.059 58.0996 97.8897 59.3338L69.696 89.093C69.0974 89.7255 68.3761 90.2293 67.5762 90.5735C66.7763 90.9177 65.9145 91.0951 65.0437 91.0949Z" fill="white" />
                            </svg>
                        </div>
                        <div className="text-sm">
                            Your CV has been uploaded successfully.
                            
                        </div>
                        <div className="font-medium">{selectedFile.name}</div>
                        <div className='flex items-center gap-3 w-full'>
                            <div className="w-full h-4 bg-primry_purble rounded-full"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                                <path d="M1.5 6.06027L7.17 11.7203L18.5 2.28027" stroke="#54E15D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <button
                            onClick={handleDone}
                            className="rounded-2xl bg-primry_purble border-2 text-white font-roboto p-2 w-1/4"
                        >
                            Done
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
