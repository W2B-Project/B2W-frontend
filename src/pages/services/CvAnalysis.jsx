import { useRef, useState } from 'react';
import ResumeReview from '../../assets/images/home/ResumeReview1.png';
import UploadCvModal from '../../components/servicse/UploadCvModal';
import CvAnalysisResult from '../../components/home/CvAnalysisResult';

function CvAnalysis({ setService }) {
    const [showModal, setShowModal] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const fileInputRef = useRef();

    // Replace with your actual AI model endpoint
    const AI_ENDPOINT = "https://0231b0f759fb.ngrok-free.app";

    // Function to send CV to AI model
    const sendCvToAI = async (file) => {
        setIsProcessing(true);
        
        try {
            // Create FormData to send file
            const formData = new FormData();
            formData.append('file', file);
            formData.append('cv', file); // Some APIs might expect different field names
            
            console.log('Sending CV to AI model...', {
                fileName: file.name,
                fileSize: file.size,
                fileType: file.type
            });

            const response = await fetch(AI_ENDPOINT, {
                method: 'POST',
                body: formData,
                // Add headers if needed
                headers: {
                    // 'Authorization': 'Bearer YOUR_TOKEN', // Add if authentication is needed
                    // 'Accept': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            
            // Print result in console
            console.log('AI Model Response:', result);
            console.log('CV Analysis Complete!');
            
            return result;
            
        } catch (error) {
            console.error('Error sending CV to AI model:', error);
            return null;
        } finally {
            setIsProcessing(false);
        }
    };

    // If showing result, render the result component
    if (showResult) {
        return <CvAnalysisResult onBack={() => setShowResult(false)} />;
    }

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setShowModal(true);
            
            // Send CV to AI model in the background
            const aiResult = await sendCvToAI(file);
            
            if (aiResult) {
                console.log('CV processing completed successfully!');
                // You can store the result in state if needed for the result page
                // setAnalysisResult(aiResult);
            }
        }
    };

    return (
        <div className="col-span-9 space-y-6 bg-white rounded-xl shadow pt-5">
            <div className="flex justify-between items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 20 36"
                    fill="none"
                    onClick={() => window.history.back()}
                    className="cursor-pointer"
                >
                    {/* SVG content as before */}
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.8885 17.7731C8.9485 12.6969 13.8941 7.744 18.7253 2.91426C18.9782 2.64843 19.1192 2.29556 19.1192 1.92866C19.1192 1.56176 18.9782 1.2089 18.7253 0.943063C18.0411 0.181863 16.9587 0.247863 16.4659 0.767063C11.4587 5.78746 6.2205 11.0345 0.751298 16.5081C0.317164 16.8645 0.100098 17.2854 0.100098 17.7709C0.100098 18.2563 0.317164 18.6905 0.751298 19.0733L17.2139 35.1465C17.5299 35.4364 17.9465 35.592 18.3752 35.58C18.804 35.5681 19.2112 35.3897 19.5107 35.0827C20.2983 34.2929 19.9947 33.5141 19.6383 33.1445C14.3801 28.0276 9.12944 22.9031 3.8863 17.7709"
                        fill="#030303"
                    />
                </svg>
                <h3 className="font-normal text-2xl">Resume Reviewer</h3>
                <div></div>
            </div>

            <div className="flex flex-col gap-2 items-center text-center">
                <h3 className="font-bold text-3xl">
                    Upload Your <span className="text-primry_purble">Resume</span> for Review
                </h3>
                <p className="text-[#75757B] text-sm font-normal">
                    Get feedback to improve your resume and career opportunities
                </p>

                <div className="shadow-lg rounded-xl py-10 px-20 flex flex-col gap-4 items-center">
                    <img src={ResumeReview} alt="Resume Review" loading="lazy" />

                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        style={{ display: 'none' }}
                    />

                    <button
                        onClick={handleButtonClick}
                        className="rounded-2xl bg-primry_purble border-2 text-white font-roboto p-2"
                        style={{ width: '50%' }}
                    >
                        Upload CV
                    </button>

                    <p className="text-gray-500 text-sm font-light">
                        Supported formats: PDF, DOCX | Max size: 5MB
                    </p>
                </div>
            </div>

            {showModal && (
                <UploadCvModal 
                    onClose={() => setShowModal(false)} 
                    onDone={() => setShowResult(true)}
                    isProcessing={isProcessing}
                />
            )}
        </div>
    );
}

export default CvAnalysis;
