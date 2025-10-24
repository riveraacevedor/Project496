// src/App.jsx
import React from "react";
import Profile from "./components/Profile";
import "./App.css"; // Tailwind or custom styles

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-[#FEF7FF] flex flex-col md:flex-row">
      {/* Sidebar (from Profile component) */}
      <Profile />
    </div>
  );
}

export default App;