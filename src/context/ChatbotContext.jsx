import { createContext, useState } from "react";
import run from "../config/gemini";
export const ChatContext = createContext();
const ChatProvider = ({ children }) => {
    const [history, setHistory] = useState([]);
    const [level, setLevel] = useState("");
    const [field, setField] = useState("");
    const [interviewStarted, setInterviewStarted] = useState(false);
    const [userInput, setUserInput] = useState(""); 
    const [isLoading, setIsLoading] = useState(false);
    
    const startInterview = async () => {
        if (!level || !field) return; 
        setInterviewStarted(true);
        const prompt = `You are an expert interviewer conducting a mock interview for a candidate applying for a ${field}
        position at the ${level} level mock interview with me give me 10 questions Ensure questions cover technical skills
        , problem-solving, and behavioral aspects, dont correct my answers or do anything just give me the next question and 
        at the end evaluate my answeres give me overall score and enhancements for each answer if needed ,start the chat with 
        'I’m B2W interviewer ,lets start our interview!' and give me first qustion in new line`;

        const userMessage = { role: "user", content: prompt ,hidden:true};
        setHistory([userMessage]);
        setIsLoading(true); 
        try {
            const firstQuestion = await run(prompt, []);
            setHistory(prev => [...prev, { role: "model", content: firstQuestion }]);
        } catch (error) {
            console.error("Error fetching first question:", error);
        } finally {
            setIsLoading(false); 
        }
    };
    const sendMessage = async () => {
        if (!userInput.trim()) return; 
        const userMessage = { role: "user", content: userInput };
        setHistory(prev => [...prev, userMessage]);
        setUserInput("");
        setIsLoading(true)
        const botResponse = await run(userInput, history);
        setIsLoading(false)
        setHistory(prev => [...prev, { role: "model", content: botResponse }]);
    };
    return (
        <ChatContext.Provider value={{ 
            history,sendMessage,startInterview, interviewStarted,level,
            field,setLevel,setField,userInput,setUserInput,isLoading
        }}>
            {children}
        </ChatContext.Provider>
    );
};
export default ChatProvider;
