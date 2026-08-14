'use client';

import { useState } from 'react';

export default function ChatContainer() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-icon">💬</div>
        <div>
          <h1>AI Assistant</h1>
          <p>Online & Ready to help</p>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.role === 'assistant' ? 'assistant-message' : 'user-message'
            }`}
          >
            <strong>{msg.role === 'assistant' ? 'AI' : 'You'}</strong>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="chat-input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}