import { useState } from 'react';
import chat from '../../assets/images/home/chat.png'
function Chats() {
    const [people, setPeople] = useState([
        { id: 1, name: 'John Doe', lastMessage: 'Hello there!', unread: 2, avatar: 'JD' },
        { id: 2, name: 'Jane Smith', lastMessage: 'Meeting at 3pm', unread: 0, avatar: 'JS' },
        { id: 3, name: 'Mike Johnson', lastMessage: 'Please review the docs', unread: 5, avatar: 'MJ' },
    ]);

    const [activeChat, setActiveChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const startChat = (personId) => {
        const person = people.find(p => p.id === personId);
        setActiveChat(person);
        
        // Reset unread count
        setPeople(people.map(p => 
            p.id === personId ? {...p, unread: 0} : p
        ));
        
        // Load conversation history (simulated)
        setMessages([
            { id: 1, sender: 'them', text: `Hi! This is ${person.name}` },
            { id: 2, sender: 'me', text: 'Hello! How are you?' },
            { id: 3, sender: 'them', text: person.lastMessage },
        ]);
    };

    const handleSendMessage = () => {
        if (newMessage.trim() === '' || !activeChat) return;
        
        const newMsg = { 
            id: messages.length + 1, 
            sender: 'me', 
            text: newMessage 
        };
        
        setMessages([...messages, newMsg]);
        setNewMessage('');
        
        // Simulate reply after 1 second
        setTimeout(() => {
            const reply = { 
                id: messages.length + 2, 
                sender: 'them', 
                text: `Reply to: "${newMessage}"` 
            };
            setMessages(prev => [...prev, reply]);
        }, 1000);
    };

    return (
        <div className="flex h-[538px] bg-gray-100 rounded-xl gap-4">
            {/* People List Sidebar */}
            <div className="bg-white border-r border-gray-200 overflow-y-auto rounded-xl w-1/3">
                <div className="p-4 border-b border-gray-200">
                    <h1 className="text-xl font-bold text-gray-800">Chats</h1>
                </div>
                
                <div className="divide-y divide-gray-200">
                    {people.map(person => (
                        <div 
                            key={person.id}
                            onClick={() => startChat(person.id)}
                            className={`p-4 flex items-center cursor-pointer hover:bg-gray-50 ${activeChat?.id === person.id ? 'bg-blue-50' : ''}`}
                        >
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primry_purble flex items-center justify-center text-white font-medium">
                                {person.avatar}
                            </div>
                            <div className="ml-3 flex-1 overflow-hidden">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-sm font-medium text-gray-900 truncate">{person.name}</h3>
                                    {person.unread > 0 && (
                                        <span className="bg-primry_purble text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                            {person.unread}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-gray-500 truncate">{person.lastMessage}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
                {activeChat ? (
                    <>
                        {/* Chat Header */}
                        <div className="p-4 border-b border-gray-200 bg-white flex items-center rounded-tl-xl rounded-tr-xl">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primry_purble flex items-center justify-center text-white font-medium">
                                {activeChat.avatar}
                            </div>
                            <div className="ml-3">
                                <h2 className="text-lg font-medium text-gray-900">{activeChat.name}</h2>
                                <p className="text-xs text-gray-500">Online</p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                            {messages.map(message => (
                                <div 
                                    key={message.id} 
                                    className={`mb-4 ${message.sender === 'me' ? 'text-right' : 'text-left'}`}
                                >
                                    <div 
                                        className={`inline-block p-3 rounded-lg max-w-xs lg:max-w-md ${message.sender === 'me' 
                                            ? 'bg-primry_purble text-white' 
                                            : 'bg-white text-gray-800 border border-gray-200'}`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Message Input */}
                        <div className="p-4 border-t border-gray-200 bg-white rounded-bl-xl rounded-br-xl">
                            <div className="flex">
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                    className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pribg-primry_purble"
                                    placeholder="Type your message..."
                                />
                                <button
                                    onClick={handleSendMessage}
                                    className="bg-primry_purble text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-pribg-primry_purble"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center bg-gray-50">
                        <div className="flex flex-col items-center gap-3 text-center p-6">
                            <img src={chat} alt="chat" />
                            <p className="text-gray-500">Please select a chat to start messaging.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Chats;