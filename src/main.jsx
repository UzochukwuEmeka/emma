import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BlobCursor from "./components/Cursor/BlobCursor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="relative w-[100vw] overflow-hidden">
      <BlobCursor />
      <App />
    </div>
  </React.StrictMode>
);
