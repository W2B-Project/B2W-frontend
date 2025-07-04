import { useNavigate } from 'react-router-dom';

export default function SignLanguageResult({ onBack }) {
    const navigate = useNavigate();

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            navigate(-1);
        }
    };

    return (
        <div className="col-span-9 space-y-6">
            <div className="flex justify-between items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 20 36"
                    fill="none"
                    onClick={handleBack}
                    className="cursor-pointer"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.8885 17.7731C8.9485 12.6969 13.8941 7.744 18.7253 2.91426C18.9782 2.64843 19.1192 2.29556 19.1192 1.92866C19.1192 1.56176 18.9782 1.2089 18.7253 0.943063C18.0411 0.181863 16.9587 0.247863 16.4659 0.767063C11.4587 5.78746 6.2205 11.0345 0.751298 16.5081C0.317164 16.8645 0.100098 17.2854 0.100098 17.7709C0.100098 18.2563 0.317164 18.6905 0.751298 19.0733L17.2139 35.1465C17.5299 35.4364 17.9465 35.592 18.3752 35.58C18.804 35.5681 19.2112 35.3897 19.5107 35.0827C20.2983 34.2929 19.9947 33.5141 19.6383 33.1445C14.3801 28.0276 9.12944 22.9031 3.8863 17.7709"
                        fill="#030303"
                    />
                </svg>
                <h3 className="font-normal text-2xl">Signify Results</h3>
                <div></div>
            </div>

            <div className="flex flex-col gap-6 items-center text-center">
                <h3 className="font-bold text-3xl">
                    Sign Language <span className="text-primry_purble">Translation</span> Complete
                </h3>
                <p className="text-[#75757B] text-sm font-normal">
                    Your sign language has been successfully translated to text
                </p>

                <div className="shadow-lg rounded-xl py-10 px-20 flex flex-col gap-6 items-center w-full max-w-2xl">
                    {/* Translation Result Card */}
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 w-full">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Translated Text:</h4>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <p className="text-gray-700 text-base leading-relaxed">
                                "Hello, how are you today? I hope you're having a wonderful day!"
                            </p>
                        </div>
                    </div>

                    {/* Confidence Score */}
                    <div className="bg-gray-50 rounded-lg p-4 w-full">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-600">Translation Confidence</span>
                            <span className="text-sm font-bold text-green-600">94%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-4">
                        <button
                            onClick={handleBack}
                            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                        >
                            Try Again
                        </button>
                        <button
                            onClick={() => {
                                // Copy to clipboard functionality
                                navigator.clipboard.writeText("Hello, how are you today? I hope you're having a wonderful day!");
                            }}
                            className="px-6 py-2 bg-primry_purble text-white rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            Copy Text
                        </button>
                    </div>

                    <p className="text-gray-500 text-sm font-light mt-2">
                        Translation powered by AI • Processing time: 2.3 seconds
                    </p>
                </div>
            </div>
        </div>
    );
}
