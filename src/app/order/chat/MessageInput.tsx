"use client"

import { useState } from 'react';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      console.log('Send message:', message);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center p-2 bg-white rounded-lg shadow mt-4">
      <input
        type="text"
        className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none bg-gray-200"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button
        className="p-2 ml-2 text-white bg-blue-500 rounded-lg"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
