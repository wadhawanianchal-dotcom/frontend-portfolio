"use client";

import { useEffect, useRef, useState } from "react";

export default function Modal() {
  const [open, setOpen] = useState(false);
  const openButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus();
    } else {
      openButtonRef.current?.focus();
    }
  }, [open]);

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div style={{ marginBottom: "40px" }}>
      <h2>Modal Dialog</h2>

      <button ref={openButtonRef} onClick={() => setOpen(true)}>
        Open Modal
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onKeyDown={handleKeyDown}
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "2px solid black",
            borderRadius: "8px",
            background: "#f5f5f5",
          }}
        >
          <h3 id="modal-title">Accessible Modal</h3>

          <p>
            Press <strong>Escape</strong> or click the button below to close.
          </p>

          <button ref={closeButtonRef} onClick={() => setOpen(false)}>
            Close Modal
          </button>
        </div>
      )}
    </div>
  );
}