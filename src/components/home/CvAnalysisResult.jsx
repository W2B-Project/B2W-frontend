import { useNavigate } from 'react-router-dom';
import Button from '../../components/global/Button'

export default function CvAnalysisResult({ onBack }) {
    const navigate = useNavigate();

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            navigate('home');
        }
    };

    return (
        <div className="col-span-9 space-y-6 p-8 bg-white rounded-xl shadow ">
            <h2 className="text-2xl font-semibold text-center font-lato">Resume Reviewer</h2>
            <div className="text-center mt-4">
                <div className="text-lg font-medium">Your Score</div>
                <div className="relative inline-block my-4">
                    <svg width="120" height="120">
                        <circle
                            cx="60"
                            cy="60"
                            r="54"
                            stroke="#eee"
                            strokeWidth="12"
                            fill="none"
                        />
                        <circle
                            cx="60"
                            cy="60"
                            r="54"
                            stroke="#8b5cf6"
                            strokeWidth="12"
                            fill="none"
                            strokeDasharray={`${Math.PI * 54 * 2}`}
                            strokeDashoffset={`${Math.PI * 54 * 2 * 0.25}`} // 75%
                            strokeLinecap="round"
                            transform="rotate(-90 60 60)"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-purple-600 font-bold text-xl">
                        75%
                    </div>
                </div>
                <div className="text-sm text-gray-600">Good Work!</div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>✅ Personal Information</div>
                <div>❌ Experience</div>
                <div>✅ Education</div>
                <div>❌ Certifications</div>
                <div>✅ Key Skills</div>
                <div>✅ Languages</div>
            </div>

            <div className="mt-6 text-left">
                <h3 className="font-semibold mb-2">Suggestions</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                    <li>
                        Highlight specific skills relevant to the job you&apos;re targeting.
                    </li>
                    <li>
                        Include both technical (e.g., tools, software) and soft skills
                        (e.g., communication, teamwork).
                    </li>
                    <li>
                        Focus on achievements, not just duties. Use action verbs like
                        “achieved”, “increased”, or “optimized”.
                    </li>
                    <li>
                        Quantify results where possible (e.g., “Increased sales by 15% within
                        6 months”).
                    </li>
                </ul>
            </div>

            <div className="text-center mt-8">
                <Button
                    btn_text="Back To Home"
                    onHandleClick={handleBack}
                    width="w-1/2"
                />
            </div>
        </div>
    );
}
