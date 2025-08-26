"use client";
import { useState } from "react";
import { Tabs, Tab, Button, Form } from "react-bootstrap";

export default function HomePage() {
  // Tab Headers/Content model
  const [headers, setHeaders] = useState(["Step 1", "Step 2", "Step 3"]);
  const [tabContents, setTabContents] = useState([
    "Instructions for Step 1.",
    "Step 2:\n1. Install VSCode\n2. Install Chrome\n3. Install Node\n4. etc",
    "Instructions for Step 3.",
  ]);
  const [tabIndex, setTabIndex] = useState(0);

  // Output code for the selected tab (example)
  const outputCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>${headers[tabIndex]}</title>
  <meta charset="UTF-8" />
  <style>
    body { background: #f0f8ff; font-family: Arial, sans-serif; padding: 20px; }
    h1 { color: #004080; }
  </style>
</head>
<body>
  <h1>${headers[tabIndex]}</h1>
  <pre>${tabContents[tabIndex]}</pre>
</body>
</html>
`.trim();

  // Add a new tab
  const addTab = () => {
    setHeaders([...headers, `Step ${headers.length + 1}`]);
    setTabContents([
      ...tabContents,
      `Instructions for Step ${headers.length + 1}.`,
    ]);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="d-flex align-items-center justify-content-between py-2 border-bottom">
        <span className="fw-bold fs-4 ms-2">LTU Assignment</span>

        <div className="d-flex align-items-center me-2">
          <Form.Check
            type="switch"
            id="dark-mode-switch"
            label="Dark Mode"
            style={{ marginRight: "10px" }}
            onChange={() => {
              document.body.classList.toggle("bg-dark");
              document.body.classList.toggle("text-light");
            }}
          />
          <span className="fw-bold">22133836</span>
        </div>
      </div>

      {/* Main split grid */}
      <div className="d-flex mt-4" style={{ minHeight: 400 }}>
        {/* Tabs Headers Panel (Left) */}
        <div
          style={{ minWidth: 150, borderRight: "1px solid #ddd", padding: 10 }}
        >
          <div className="mb-2 d-flex align-items-center justify-content-between">
            <span className="fw-bold">Tabs Headers:</span>
            <Button
              size="sm"
              variant="outline-primary"
              style={{ marginLeft: 8, padding: "0 8px" }}
              onClick={addTab}
              title="Add Tab"
            >
              [+]
            </Button>
          </div>
          <div>
            {headers.map((header, idx) => (
              <div
                key={idx}
                onClick={() => setTabIndex(idx)}
                className={`my-1 p-2 rounded ${
                  tabIndex === idx ? "bg-primary text-white" : "bg-light"
                }`}
                style={{
                  cursor: "pointer",
                  fontWeight: tabIndex === idx ? "bold" : undefined,
                }}
              >
                {header}
              </div>
            ))}
          </div>
        </div>

        {/* Tab Content Panel (Middle) */}
        <div
          style={{ minWidth: 220, borderRight: "1px solid #ddd", padding: 10 }}
        >
          <span className="fw-bold">Tabs Content</span>
          <div className="mt-2 p-2 border">
            <pre style={{ margin: 0 }}>{tabContents[tabIndex]}</pre>
          </div>
        </div>

        {/* Output (Right code panel) */}
        <div className="flex-fill p-3">
          <label htmlFor="codeoutput" className="form-label fw-bold">
            Output
          </label>
          <textarea
            id="codeoutput"
            rows={16}
            className="form-control"
            readOnly
            value={outputCode}
            style={{
              fontFamily: "monospace",
              fontSize: 14,
              background: "#f9f9f9",
            }}
          ></textarea>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-4 pt-2 border-top text-center text-muted">
        &copy; {new Date().getFullYear()} Sarvesh Kumar, 22133836
      </footer>
    </div>
  );
}
