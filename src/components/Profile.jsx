import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-w-screen min-h-screen bg-[#FEF7FF] overflow-auto relative font-roboto">
      {/* Back Button */}
      <div className="p-4 absolute top-0 left-0">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-[#600E05] text-white rounded-lg"
        >
          ← Back
        </button>
      </div>

      {/* Sidebar */}
      <div className="flex flex-col gap-10 bg-[#FFDCBE] p-6 absolute left-0 top-20 h-[700px] w-20">
        {/* Hamburger Icon */}
        <div className="flex justify-center items-center w-14 h-14 rounded-2xl bg-[#FFDCBE]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#600E05" />
          </svg>
        </div>

        {/* Buttons */}
        {["Filter", "Favorites", "Rated", "Recommend"].map((label) => (
          <button
            key={label}
            className="flex flex-col justify-center items-center gap-1 w-full"
          >
            <div className="flex justify-center items-center w-14 h-8 bg-[#FF9393] rounded-2xl">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M8 18L12 14.95L16 18L14.5 13.05L18.5 10.2H13.6L12 5L10.4 10.2H5.5L9.5 13.05L8 18ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"
                  fill="#6E0000"
                />
              </svg>
            </div>
            <p className="text-[#600E05] text-xs font-medium w-full text-center">{label}</p>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="absolute left-24 top-20 w-[800px] bg-[#FFE3E3] rounded-[28px] p-6">
        <h1 className="text-2xl font-normal text-[#600E05] mb-4">User Profile</h1>

        <div className="flex items-center gap-6 mb-6">
          <img
            src="/Ellipse1.png"
            alt="User Avatar"
            className="w-48 h-48 rounded-full"
          />
          <div>
            <p className="text-2xl font-normal text-[#600E05]">Username</p>
            <p className="text-xs text-[#600E05] font-medium">Date Joined</p>
            <p className="text-sm text-[#600E05] mt-2">
              User Bio (if applicable) Edit Bio (if User is You)
            </p>
          </div>
        </div>

        <h2 className="text-xl text-[#600E05] mb-4">Recently Rated</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4 bg-white rounded-xl p-4">
            <img src="/Image.png" alt="Item" className="w-30 h-30 rounded-2xl" />
            <div className="flex flex-col justify-between w-full">
              <p className="text-lg text-[#600E05]">Title</p>
              <p className="text-sm text-[#600E05]">
                Description duis aute irure dolor in reprehenderit in voluptate velit.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white rounded-xl p-4">
            <img src="/Image(1).png" alt="Item" className="w-30 h-30 rounded-2xl" />
            <div className="flex flex-col justify-between w-full">
              <p className="text-lg text-[#1D1B20]">Title</p>
              <p className="text-sm text-[#49454F]">
                Description duis aute irure dolor in reprehenderit in voluptate velit.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#49454F]">
                <span>Today</span>•<span>23 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
