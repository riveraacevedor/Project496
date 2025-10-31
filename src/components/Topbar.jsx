import React from "react";

export default function Topbar() {
  return (
    <header className="absolute top-0 left-0 w-full flex items-center gap-4 p-4 bg-[#FEF7FF] shadow-sm z-10">
      {/* Nav arrows + refresh */}
      <div className="flex items-center gap-3">
        {["arrow-back", "arrow-forward", "refresh"].map((icon, i) => (
          <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d={
                icon === "arrow-back"
                  ? "M19.9999 10.9996H7.82988L13.4199 5.4096L11.9999 3.9996L3.99988 11.9996L11.9999 19.9996L13.4099 18.5896L7.82988 12.9996H19.9999V10.9996Z"
                  : icon === "arrow-forward"
                  ? "M11.9999 3.9996L10.5899 5.4096L16.1699 10.9996H3.99988V12.9996H16.1699L10.5899 18.5896L11.9999 19.9996L19.9999 11.9996L11.9999 3.9996Z"
                  : "M17.6499 6.3496C16.1999 4.8996 14.2099 3.9996 11.9999 3.9996C7.57989 3.9996 4.00989 7.5796 4.00989 11.9996C4.00989 16.4196 7.57989 19.9996 11.9999 19.9996C15.7299 19.9996 18.8399 17.4496 19.7299 13.9996H17.6499C16.8299 16.3296 14.6099 17.9996 11.9999 17.9996C8.68989 17.9996 5.99989 15.3096 5.99989 11.9996C5.99989 8.6896 8.68989 5.9996 11.9999 5.9996C13.6599 5.9996 15.1399 6.6896 16.2199 7.7796L12.9999 10.9996H19.9999V3.9996L17.6499 6.3496Z"
              }
              fill="#79747E"
            />
          </svg>
        ))}
      </div>

      {/* URL bar */}
      <div className="flex items-center justify-between flex-1 rounded-full bg-[#F3EDF7] py-1.5 px-4">
        <div className="flex items-center gap-2">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path
              opacity="0.65"
              d="M11.52 5.12H10.88V3.84C10.88 2.07 9.45 0.64 7.68 0.64C5.91 0.64 4.48 2.07 4.48 3.84V5.12H3.84C3.14 5.12 2.56 5.7 2.56 6.4V12.8C2.56 13.5 3.14 14.08 3.84 14.08H11.52C12.22 14.08 12.8 13.5 12.8 12.8V6.4C12.8 5.7 12.22 5.12 11.52 5.12Z"
              fill="#49454F"
            />
          </svg>
          <span className="text-[#1D1B20] text-sm">www.url.com</span>
        </div>

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M18.3332 7.69837L12.3416 7.18171L9.9999 1.66504L7.65823 7.19004L1.66656 7.69837L6.21657 11.64L4.8499 17.4984L9.9999 14.39L15.1499 17.4984L13.7916 11.64L18.3332 7.69837ZM9.9999 12.8317L6.86657 14.7234L7.6999 11.1567L4.93323 8.75671L8.58323 8.44004L9.9999 5.08171L11.4249 8.44837L15.0749 8.76504L12.3082 11.165L13.1416 14.7317L9.9999 12.8317Z"
            fill="#79747E"
          />
        </svg>
      </div>

      {/* User button */}
      <button className="flex justify-center items-center rounded-full bg-[#79747E] w-7 h-7">
        <span className="text-white text-sm font-medium">M</span>
      </button>

      {/* More options */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
          fill="#79747E"
        />
      </svg>
    </header>
  );
}
