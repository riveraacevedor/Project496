// src/components/Profile.jsx
import React from "react";

export default function Profile() {
  return (
    <div className="flex min-h-screen w-full bg-[#FEF7FF]">
      {/* Sidebar */}
      <div className="flex flex-col bg-[#FFDCBE] w-24 p-4 gap-6 items-center">
        {/* Top Menu Icon */}
        <button className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#FF9393]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
              fill="#600E05"
            />
          </svg>
        </button>

        {/* Sidebar Buttons */}
        <div className="flex flex-col gap-3 items-center w-full">
          {["Filter", "Favorites", "Rated", "Recommend"].map((label) => (
            <button
              key={label}
              className="flex flex-col items-center w-full gap-1 py-1"
            >
              <div className="flex justify-center items-center w-12 h-8 rounded-2xl bg-[#FF9393]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  {/* Placeholder path */}
                  <path
                    d="M8 18L12 14.95L16 18L14.5 13.05L18.5 10.2H13.6L12 5L10.4 10.2H5.5L9.5 13.05L8 18Z"
                    fill="#600E05"
                  />
                </svg>
              </div>
              <p className="text-xs text-[#600E05] font-medium">{label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-6 p-6 bg-[#FFE3E3] relative">
        {/* Header */}
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl text-[#1D1B20] font-roboto">User Profile</h1>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 bg-[#F3EDF7] rounded-full flex items-center justify-center">
              M
            </button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z"
                fill="#79747E"
              />
            </svg>
          </div>
        </div>

        {/* User Info */}
        <div className="flex gap-6">
          <img
            src="/Ellipse1.png"
            alt="User"
            className="w-48 h-48 rounded-full"
          />
          <div className="flex flex-col justify-start gap-2">
            <p className="text-2xl text-[#600E05] font-roboto">Username</p>
            <p className="text-sm text-[#600E05] font-medium">Date Joined</p>
            <p className="text-sm text-[#600E05]">
              User Bio (if applicable) Edit Bio (if User is You)
            </p>
          </div>
        </div>

        {/* Recently Rated */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-[#1D1B20] font-roboto">Recently Rated</h2>
          <div className="flex flex-col gap-4">
            {/* Single Review Card */}
            {[1, 2].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow"
              >
                <img
                  src={`/Image${item === 1 ? "" : "(1)"}.png`}
                  alt="Review"
                  className="w-30 h-30 rounded-2xl"
                />
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <p className="text-lg font-roboto text-[#600E05]">Title</p>
                    <p className="text-sm text-[#49454F]">
                      Description duis aute irure dolor in reprehenderit in voluptate
                      velit.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#49454F]">
                    <span>Today</span>•<span>23 min</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
