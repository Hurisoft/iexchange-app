'use client'
import ChatWindow from './ChatWindow';

const Chat = () => {
    const messages = [
        { user: 'me', text: 'Hello!' },
        { user: 'them', text: 'Hi there!' },
    ];

    return (<ChatWindow messages={messages} />);
}

export default Chat