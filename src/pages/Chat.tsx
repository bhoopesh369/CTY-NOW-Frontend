import { useState } from 'react';

interface ChatMessage {
    id: number;
    message: string;
    user: number;
}

const Chat = () => {
    const [chats, setChats] = useState<ChatMessage[]>([]);

    const addMessage = (message: string, user: number) => {
        const newChat: ChatMessage = {
            id: chats.length + 1,
            message,
            user,
        };
        setChats([...chats, newChat]);
    };

    return (
        <div>
            <h1>CTY NOW</h1>

            <div>
                {chats.map((chat) => (
                    <div className="chat chat-start">
                        <div className="chat-bubble">
                            {chat.message}
                        </div>
                    </div>
                ))}
            </div>

            {/* Example of adding a message */}
            <button onClick={() => addMessage('Hello Chat Bot!', 1)}>Send Message</button>
        </div>
    );
};

export default Chat;
