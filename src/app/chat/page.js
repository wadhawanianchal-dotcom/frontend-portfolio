"use client";

import { useState } from "react";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "assistant",
      text: "Hi! I'm Anchal's AI portfolio assistant. Ask me about my skills, projects, education, or frontend development work.",
    },
  ]);

  const sendMessage = () => {
    const question = input.trim();

    if (!question) return;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: question,
      },
      {
        type: "assistant",
        text: "I can answer questions about Anchal's skills, projects, education, achievements, and frontend development work.",
      },
    ]);

    setInput("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <main className="chat-page">
      <section className="chat-container">
        <header className="chat-header">
          <div className="chat-icon" aria-hidden="true">
            ✨
          </div>

          <div>
            <h1>AI Portfolio Assistant</h1>
            <p>Ask anything about Anchal's work</p>
          </div>
        </header>

        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.type === "user"
                  ? "user-message"
                  : "assistant-message"
              }`}
            >
              <strong>
                {message.type === "user" ? "You" : "AI Assistant"}
              </strong>

              <p>{message.text}</p>
            </div>
          ))}
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about skills, projects or education..."
            aria-label="Ask the AI portfolio assistant"
          />

          <button
            type="button"
            onClick={sendMessage}
            disabled={!input.trim()}
          >
            Send
          </button>
        </div>
      </section>
    </main>
  );
}