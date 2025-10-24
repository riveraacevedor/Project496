import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full bg-[#FEF7FF] relative">
      {/* Sidebar */}
      <div className="flex flex-col bg-[#FFDCBE] w-24 p-4 gap-6 items-center">
        {/* Example sidebar icons */}
        <div className="w-10 h-10 bg-[#FF9393] rounded-full" />
        <div className="w-10 h-10 bg-[#FF9393] rounded-full" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-6 p-6 bg-[#FFE3E3] relative">
        {/* Floating Back Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-[#FF9393] text-white rounded-lg hover:bg-[#ff7a7a]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Header */}
        <h1 className="text-3xl text-[#1D1B20] font-roboto mb-4">User Profile</h1>

        {/* Example User Info */}
        <div className="flex gap-6">
          <div className="w-32 h-32 rounded-full bg-[#FF9393]" />
          <div className="flex flex-col gap-2">
            <p className="text-[#600E05] font-bold text-xl">Username</p>
            <p className="text-[#49454F] text-sm">Joined: Jan 1, 2023</p>
            <p className="text-[#600E05] text-sm">
              User bio goes here. It can span multiple lines and be edited.
            </p>
          </div>
        </div>

        {/* Recently Rated Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-[#1D1B20] mb-4">Recently Rated</h2>
          <div className="flex gap-4">
            <div className="w-40 h-40 rounded-2xl bg-[#FF9393]" />
            <div className="w-40 h-40 rounded-2xl bg-[#FF9393]" />
          </div>
        </div>
      </div>
    </div>
  );
}
