"use client";

import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Tab 1",
      content: "This is the content of Tab 1.",
    },
    {
      title: "Tab 2",
      content: "This is the content of Tab 2.",
    },
    {
      title: "Tab 3",
      content: "This is the content of Tab 3.",
    },
  ];

  function handleKeyDown(e) {
    if (e.key === "ArrowRight") {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }

    if (e.key === "ArrowLeft") {
      setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
    }
  }

  return (
    <div style={{ marginBottom: "40px" }}>
      <h2>Tabs</h2>

      <div role="tablist" aria-label="Example Tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeTab === index}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={handleKeyDown}
            style={{
              marginRight: "10px",
              padding: "8px 14px",
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        style={{
          marginTop: "15px",
          padding: "15px",
          border: "1px solid #ccc",
        }}
      >
        {tabs[activeTab].content}
      </div>
    </div>
  );
}