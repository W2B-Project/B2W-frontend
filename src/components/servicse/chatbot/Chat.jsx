import { SendHorizonal } from "lucide-react";
import { chatbot } from "../../../assets/images/services/services";
import { useContext } from "react";
import { ChatContext } from "../../../context/ChatbotContext";
import ReactMarkdown from "react-markdown";
import { useRef, useEffect } from "react";
function Chat() {
    const { history, sendMessage, userInput, setUserInput, isLoading } = useContext(ChatContext);
    const handleSend = (e) => {
        e.preventDefault();
        sendMessage(userInput);
    };
    const chatRef = useRef(null)

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <>
            <div className="w-11/12 m-auto mt-5 ">
                <div className="flex gap-3 items-center">
                    <img src={chatbot.Ai_avatar} alt="ai avatar" />
                    <p className="text-lg font-medium align-middle">Interview Chat</p>
                </div>
                <div className="rounded-3xl bg-veryLight_purple shadow-[0_3px_10px_rgba(128,0,255,0.38)] h-[530px] overflow-y-auto p-5 flex flex-col justify-between mb-5 scroll-smooth" ref={chatRef}>
                    <div className="flex flex-col msgs gap-5 ">
                        {history.filter(msg => !msg.hidden).map((msg, index) => (
                            <div
                                key={index}
                                className={`${msg.role === "user" ? "bg-gray-100 ms-auto rounded-br-none" : "bg-white rounded-bl-none ms-0"}  w-3/4  p-5 rounded-xl `}
                            >
                                <ReactMarkdown>{msg.content}</ReactMarkdown>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="bot-message flex space-x-1">
                                <span className="w-3 h-3 bg-primry_purble rounded-full animate-bounce scale-110"></span>
                                <span className="w-3 h-3 bg-primry_purble rounded-full animate-bounce delay-150 scale-125"></span>
                                <span className="w-3 h-3 bg-primry_purble rounded-full animate-bounce delay-300 scale-150"></span>
                            </div>
                        )}
                    </div>
                    <form className="flex gap-5 items-center mt-5 sticky bottom-0" onSubmit={handleSend}>
                        <input type="text" value={userInput}  onChange={(e) => setUserInput(e.target.value)} className="focus:outline-primry_purble border-0 placeholder:text-gray-500 w-11/12 p-3 rounded-xl placeholder:text-gray" placeholder="type here.." />
                        <button type="sumbit" className="bg-white p-3 rounded-xl"><SendHorizonal color="gray" /></button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Chat