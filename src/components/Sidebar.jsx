import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaBook, FaSignInAlt } from "react-icons/fa";

export default function Sidebar({ activePage }) {
  const location = useLocation();

  const pageButtons = [
    { label: "Home", path: "/", icon: <FaHome /> },
    { label: "Profile", path: "/profile", icon: <FaUser /> },
    { label: "Library", path: "/library", icon: <FaBook /> },
    { label: "Login", path: "/login", icon: <FaSignInAlt /> },
  ];

  const filterButtons = [
    { label: "Filter" },
    { label: "Favorites" },
    { label: "Rated" },
    { label: "Recommended" },
  ];

  const isActive = (path) =>
    location.pathname === path ||
    (path === "/library" && location.pathname.startsWith("/detail"));

  return (
    <aside className="fixed left-0 top-0 flex flex-col items-center bg-[#FFDCBE] w-24 h-screen py-10 gap-8 shadow-lg">
      {/* Menu icon */}
      <div className="flex justify-center items-center w-14 h-14 rounded-2xl bg-[#FFDCBE]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#600E05" />
        </svg>
      </div>

      {/* Page Navigation */}
      <nav className="flex flex-col items-center gap-3">
        {pageButtons.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center gap-1 w-full py-2 transition-all ${
              isActive(item.path) ? "bg-[#FF9393] rounded-2xl" : ""
            }`}
          >
            <div className="text-[#600E05] text-xl">{item.icon}</div>
            <span className="text-[#600E05] text-xs font-medium text-center">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      <div className="border-t border-[#600E05] w-3/4 my-4"></div>

      {/* Filter Buttons */}
      <nav className="flex flex-col items-center gap-3">
        {filterButtons.map((item) => (
          <button
            key={item.label}
            className="flex flex-col items-center gap-1 w-full py-2"
          >
            <div className="flex justify-center items-center w-12 h-8 bg-[#FF9393] rounded-2xl">
              <span className="text-[#600E05] text-xs font-medium">
                {item.label}
              </span>
            </div>
          </button>
        ))}
      </nav>
    </aside>
  );
}
