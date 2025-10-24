import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Landing from "./components/Landing";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
