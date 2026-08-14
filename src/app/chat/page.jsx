"use client";

import { useState } from "react";

const getAnswer = (question) => {
  const q = question.toLowerCase().trim();

  if (
    q.includes("skill") ||
    q.includes("technology") ||
    q.includes("technologies") ||
    q.includes("tech stack")
  ) {
    return `Anchal's technical skills include:

• C
• C++
• Java
• SQL
• JavaScript
• HTML5
• CSS3
• React.js
• Node.js
• MySQL
• OOP
• Data Structures & Algorithms
• DBMS
• Git
• GitHub
• Kali Linux
• Cisco Packet Tracer`;
  }

  if (
    q.includes("project") ||
    q.includes("projects") ||
    q.includes("built") ||
    q.includes("developed")
  ) {
    return `Anchal has worked on several projects:

• Transport System — C, Data Structures
• Hospital Management System — C++, OOP, Data Structures
• Airline Resource Allocation System — Java, Java Swing, OOP
• Ultimate Fashion E-Commerce Website — HTML, CSS, JavaScript`;
  }

  if (
    q.includes("education") ||
    q.includes("university") ||
    q.includes("degree") ||
    q.includes("semester") ||
    q.includes("graduate")
  ) {
    return `Anchal is pursuing a Bachelor of Science in Computer Science at DHA Suffa University in Karachi, Pakistan.

She has completed her 4th semester and expects to graduate in 2028.`;
  }

  if (
    q.includes("achievement") ||
    q.includes("achievements") ||
    q.includes("workshop") ||
    q.includes("competition") ||
    q.includes("event")
  ) {
    return `Anchal's activities and achievements include:

• Retrieval-Augmented Generation (RAG) Workshop — GDG On Campus, DSU, 2026
• Stranger Designs: UI/UX Event — Microsoft Learn Student Community, DSU, 2026
• HASHCODE Coding Competition — GDG On Campus, DSU, 2025`;
  }

  if (
    q.includes("frontend") ||
    q.includes("front-end") ||
    q.includes("web development") ||
    q.includes("web")
  ) {
    return `Anchal has frontend development experience with:

• HTML5
• CSS3
• JavaScript
• React.js

She focuses on building responsive, user-friendly web interfaces.`;
  }

  if (
    q.includes("email") ||
    q.includes("contact") ||
    q.includes("reach")
  ) {
    return `You can contact Anchal at:

wadhawanianchal@gmail.com`;
  }

  if (
    q.includes("who") ||
    q.includes("about") ||
    q.includes("introduce")
  ) {
    return `Anchal Wadhwani is a Computer Science undergraduate at DHA Suffa University. She is interested in software engineering and web development and has experience working with programming languages, databases and frontend technologies.`;
  }

  return `I can help you learn about Anchal's:

• Skills
• Projects
• Education
• Achievements
• Frontend development
• Contact information

Try asking: "What are Anchal's skills?"`;
};

export default function ChatPage() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I'm Anchal's AI portfolio assistant. Ask me about her skills, projects, education, achievements, or frontend development work.",
    },
  ]);

  const handleSend = (event) => {
    event.preventDefault();

    const question = input.trim();

    if (!question) return;

    const answer = getAnswer(question);

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        text: question,
      },
      {
        role: "assistant",
        text: answer,
      },
    ]);

    setInput("");
  };

  return (
    <main className="chat-page">
      <section className="chat-container">

        {/* Header */}
        <header className="chat-header">
          <div className="chat-avatar">
            ✨
          </div>

          <div className="chat-header-info">
            <h1>AI Portfolio Assistant</h1>

            <div className="online-status">
              <span className="online-dot"></span>
              Online & Ready to help
            </div>
          </div>
        </header>

        {/* Messages */}
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-row ${
                message.role === "user"
                  ? "user-row"
                  : "assistant-row"
              }`}
            >
              <div
                className={`message ${
                  message.role === "user"
                    ? "user-message"
                    : "assistant-message"
                }`}
              >
                <span className="message-name">
                  {message.role === "user"
                    ? "You"
                    : "AI Assistant"}
                </span>

                <p style={{ whiteSpace: "pre-line" }}>
                  {message.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <form
          onSubmit={handleSend}
          className="chat-input-area"
        >
          <input
            type="text"
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
            placeholder="Ask about skills, projects or education..."
            aria-label="Ask the AI portfolio assistant"
          />

          <button
            type="submit"
            disabled={!input.trim()}
          >
            Send
          </button>
        </form>

      </section>
    </main>
  );
}