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
        <div >
            <h1>CTY NOW</h1>

            <div style={{
                backgroundColor: 'grey',
                padding: '20px',
            }}>

                {chats.map((chat) => (
                    <div className="chat chat-start relative w-full h-full">
                        {chat.user == 1 &&
                            <div className='relative left-[85vw]'>
                                <div className="chat-bubble" style={{
                                backgroundColor: 'darkblue',
                                color: 'white',
                                width: 'max-content',
                                padding: '15px',
                                borderRadius: '25px',
                            }}>
                                {chat.message}
                            </div>
                            </div>
                        }
                        {chat.user == 0  &&
                            <div className='relative left-[0vw]'>
                                <div className="chat-bubble" style={{
                                backgroundColor: 'darkblue',
                                color: 'white',
                                width: 'max-content',
                                padding: '15px',
                                marginBottom: '10px',
                                borderRadius: '25px',
                            }}>
                                {chat.message}
                            </div>
                            </div>
                        }
                    </div>
                ))}
            </div>

            {/* Example of adding a message */}
            <button onClick={() => addMessage('Hello Chat Bot!', 1)}>Send Message</button>
        </div >
    );
};

export default Chat;
