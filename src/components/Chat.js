"use client";

import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Anchal's AI portfolio assistant. Ask me about my skills, projects, education, or frontend development work.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);
    } catch (error) {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't process your request right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSend();
    }
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-icon">✨</div>

        <div>
          <h1>AI Portfolio Assistant</h1>
          <p>Ask me anything about Anchal's work</p>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((item, index) => (
          <div
            key={index}
            className={`message ${
              item.role === "user"
                ? "user-message"
                : "assistant-message"
            }`}
          >
            <strong>
              {item.role === "user" ? "You" : "AI Assistant"}
            </strong>

            <p>{item.content}</p>
          </div>
        ))}

        {loading && (
          <div className="message assistant-message">
            <strong>AI Assistant</strong>
            <p>Thinking...</p>
          </div>
        )}
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Ask about skills, projects or education..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />

        <button onClick={handleSend} disabled={loading}>
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}