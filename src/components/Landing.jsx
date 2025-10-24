import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FEF7FF]">
      <h1 className="text-4xl font-bold text-[#600E05] mb-6">Welcome</h1>
      <button
        onClick={() => navigate("/profile")}
        className="px-6 py-3 bg-[#FF9393] text-white rounded-lg hover:bg-[#ff7a7a]"
      >
        Go to Profile
      </button>
    </div>
  );
}