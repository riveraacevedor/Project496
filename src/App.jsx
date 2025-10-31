import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import TitlesLibrary from "./pages/TitlesLibrary";
import DetailedTitlePage from "./pages/DetailedTitle";
import LoginPage from "./pages/LoginPage";
import UserReviews from "./pages/UserReviews";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/library" element={<TitlesLibrary />} />
        <Route path="/detail/:id" element={<DetailedTitlePage />} />
        <Route path="/user_review" element={<UserReviews />} />
        {/* optional: catch-all route */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
