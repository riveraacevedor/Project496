import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Profile from "./components/Profile";
import LoginPage from "./pages/LoginPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/LoginPage" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
