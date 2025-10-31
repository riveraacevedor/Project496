import React from "react";

const navItems = [
  { label: "Menu", icon: "M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" },
  // Add more items here if needed
];

export default function NavigationRail() {
  return (
    <nav className="flex flex-col items-center gap-6 bg-[#FFDCBE] w-20 min-h-screen py-6">
      {navItems.map((item, idx) => (
        <button
          key={idx}
          className="flex justify-center items-center w-14 h-14 rounded-2xl bg-[#FFE3E3] hover:bg-[#FF9393] transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path d={item.icon} fill="#600E05" />
          </svg>
        </button>
      ))}
    </nav>
  );
}
