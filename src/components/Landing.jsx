import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center items-center bg-[#FEF7FF] font-roboto p-6">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#600E05] mb-8 text-center">
        Welcome to My App
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-[#600E05] mb-12 text-center max-w-xl">
        Explore your profile, see your favorites, and manage your recommendations
        all in one place.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-6">
        <button
          onClick={() => navigate("/profile")}
          className="px-6 py-3 bg-[#600E05] text-white rounded-2xl text-lg font-medium hover:bg-[#7a0f0a] transition-colors"
        >
          Go to Profile
        </button>
        <button
          onClick={() => alert("Feature Coming Soon!")}
          className="px-6 py-3 bg-[#FFDCBE] text-[#600E05] rounded-2xl text-lg font-medium hover:bg-[#ffd6a3] transition-colors"
        >
          Explore Features
        </button>
      </div>
    </div>
  );
}
