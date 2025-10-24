// src/components/Profile.jsx
import React from "react";

export default function Profile() {
  return (
    <div className="min-h-screen min-w-screen bg-[#FEF7FF] text-[#600E05] font-roboto flex flex-col items-center p-4">
      {/* Sidebar */}
      <div className="flex flex-col bg-[#FFDCBE] rounded-[18px] w-20 py-4 px-2 gap-6">
        <div className="flex justify-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white">
            {/* Menu Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
                fill="#600E05"
              />
            </svg>
          </div>
        </div>

        {/* Sidebar Buttons */}
        <div className="flex flex-col gap-4">
          {["Filter", "Favorites", "Rated", "Recommend"].map((label, idx) => (
            <button
              key={idx}
              className="flex flex-col items-center gap-1 px-2 py-1 bg-[#FF9393] rounded-2xl w-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                {/* Simplified icon for brevity */}
                <circle cx="12" cy="12" r="10" fill="#6E0000" />
              </svg>
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full max-w-[800px] bg-[#FFE3E3] rounded-[28px] mt-6 p-6 gap-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-normal">User Profile</h1>
          <div className="flex gap-4 items-center">
            {/* Header icons */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <circle cx="12" cy="12" r="10" fill="#49454F" />
            </svg>
          </div>
        </div>

        {/* User Info */}
        <div className="flex gap-6 items-center">
          <img
            src="/Ellipse1.png"
            alt="Profile"
            className="w-48 h-48 rounded-full"
          />
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-medium">Username</p>
            <p className="text-sm font-medium">Date joined</p>
            <p className="text-sm">
              User Bio (if applicable) Edit Bio (if User is You)
            </p>
          </div>
        </div>

        {/* Recently Rated */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-normal">Recently Rated</h2>

          {[1, 2].map((item) => (
            <div
              key={item}
              className="flex gap-4 items-start bg-white rounded-2xl p-4 shadow-sm"
            >
              <img
                src={`/Image${item === 2 ? "(1)" : ""}.png`}
                alt="Item"
                className="w-30 h-30 rounded-2xl"
              />
              <div className="flex flex-col justify-between w-full">
                <p className="text-lg font-normal">Title</p>
                <p className="text-sm text-[#49454F]">
                  Description duis aute irure dolor in reprehenderit in
                  voluptate velit.
                </p>
                <div className="flex gap-2 text-xs text-[#49454F]">
                  <span>Today</span>
                  <span>•</span>
                  <span>23 min</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
