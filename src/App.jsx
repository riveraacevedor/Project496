import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import TitlesLibrary from "./pages/TitlesLibrary";
import DetailedTitlePage from "./pages/DetailedTitle";
import LoginPage from "./pages/LoginPage";
import UserReviews from "./pages/UserReviews";

import SignupPage from "./pages/SignupPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/library" element={<TitlesLibrary />} />
        <Route path="/detail/:type/:id" element={<DetailedTitlePage />} />
        <Route path="/user_review" element={<UserReviews />} />

        <Route path="/signup" element={<SignupPage />} />

        {/* fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
