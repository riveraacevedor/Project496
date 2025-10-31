import React from "react";

export default function Sidebar() {
  const menuItems = [
    { label: "Filter", active: true },
    { label: "Favorites" },
    { label: "Rated" },
    { label: "Recommend" },
  ];

  return (
    <aside className="absolute left-0 top-[67px] flex flex-col items-center bg-[#FFDCBE] w-[72px] h-[calc(100vh-67px)] py-11 gap-10">
      {/* Hamburger icon */}
      <button className="p-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#600E05" />
        </svg>
      </button>

      {/* Menu buttons */}
      <nav className="flex flex-col items-center gap-3">
        {menuItems.map((item, i) => (
          <button
            key={i}
            className={`flex flex-col items-center gap-1 w-full py-2 ${
              item.active ? "bg-[#FF9393] rounded-2xl" : ""
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M8 18L12 14.95L16 18L14.5 13.05L18.5 10.2H13.6L12 5L10.4 10.2H5.5L9.5 13.05L8 18Z"
                fill="#600E05"
              />
            </svg>
            <span className="text-[#600E05] text-xs font-medium text-center">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}