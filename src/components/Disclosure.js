"use client";

import { useState } from "react";

export default function Disclosure() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Disclosure</h2>

      <button
        aria-expanded={open}
        aria-controls="disclosure-content"
        onClick={() => setOpen(!open)}
      >
        {open ? "Hide Details" : "Show More"}
      </button>

      {open && (
        <div
          id="disclosure-content"
          style={{
            marginTop: "10px",
            padding: "15px",
            border: "1px solid #ccc",
          }}
        >
          <p>
            This disclosure component can be expanded and collapsed.
          </p>
        </div>
      )}
    </div>
  );
}