import React from "react";

const sideButtons = [
  { label: "Filter", bg: "#FF9393", iconFill: "#6E0000" },
  { label: "Favorites", bg: "#FFE3E3", iconFill: "#600E05" },
  { label: "Rated", bg: "#FFE3E3", iconFill: "#600E05" },
  { label: "Recommend", bg: "#FFE3E3", iconFill: "#600E05" },
];

const tabs = ["All", "Movies", "Books", "TV Shows"];

export default function TitlesLibraryRated() {
  return (
    <div className="rounded-[18px] border-8 border-[#CAC4D0] bg-[#FEF7FF] min-w-screen min-h-screen overflow-auto relative">
      {/* Sidebar */}
      <div className="flex pt-11 pb-14 flex-col items-center gap-10 bg-[#FFDCBE] absolute left-0 top-17 overflow-hidden w-18 h-[709px]">
        <div className="flex flex-col items-center gap-1 w-fit">
          <div className="flex justify-center items-center w-fit">
            <div className="flex flex-col justify-center items-center rounded-2xl w-14 overflow-hidden">
              <div className="flex justify-center items-center w-full h-14">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 relative"
                >
                  <path
                    d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
                    fill="#600E05"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar buttons */}
        <div className="flex flex-col items-start gap-1 w-full">
          {sideButtons.map((btn, idx) => (
            <button
              key={idx}
              className="cursor-pointer flex py-1.5 px-0 flex-col justify-center items-center gap-1 w-full"
            >
              <div
                className={`flex justify-center items-center rounded-2xl w-fit overflow-hidden`}
                style={{ backgroundColor: btn.bg }}
              >
                <div className="flex justify-center items-center w-14 h-8 relative">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 relative"
                  >
                    <path
                      d="M8 18L12 14.95L16 18L14.5 13.05L18.5 10.2H13.6L12 5L10.4 10.2H5.5L9.5 13.05L8 18ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"
                      fill={btn.iconFill}
                    />
                  </svg>
                </div>
              </div>
              <p className="text-[#600E05] font-roboto text-xs font-medium leading-[1.33333em] w-full text-center">
                {btn.label}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-start rounded-[28px] bg-[#FFE3E3] w-[814px] h-163 absolute left-18 top-23">
        {/* Header */}
        <div className="flex pb-3 flex-col items-start gap-2 w-[814px]">
          <div className="flex pt-2 pr-2 pb-0 pl-2 justify-between items-start w-full h-14">
            <div className="flex justify-center items-center w-12 h-12">
              <div className="flex justify-center items-center rounded-full w-10 h-10 overflow-hidden">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 relative"
                >
                  <path
                    d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z"
                    fill="#1D1B20"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center w-fit overflow-hidden">
              <div className="flex justify-center items-center w-12 h-12">
                <div className="flex justify-center items-center rounded-full w-10 h-10 overflow-hidden">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 relative"
                  >
                    <path
                      d="M12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8Z"
                      fill="#49454F"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-0 px-6 flex-col justify-center items-start gap-1 w-full">
            <p className="text-[#600E05] font-roboto text-3xl font-medium leading-[1.28571em] w-full">
              Rated Titles
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex py-4 px-6 items-start gap-1 w-full overflow-hidden">
          {tabs.map((tab, idx) => (
            <div
              key={idx}
              className={`flex justify-center items-center rounded-lg ${
                tab === "Movies" ? "bg-[#FFE3E3]" : "border border-[#FF9393]"
              } w-fit h-8 overflow-hidden`}
            >
              <button className="cursor-pointer flex py-1.5 px-4 justify-center items-center gap-2 w-fit h-8">
                <p className="text-[#600E05] font-roboto text-sm font-medium leading-[1.42857em] w-fit">
                  {tab}
                </p>
              </button>
            </div>
          ))}
        </div>

        {/* Example Rated Card */}
        <div className="flex pt-0 pr-6 pb-8 pl-6 items-start gap-406 flex-wrap w-full">
          <div className="flex min-w-[120px] max-w-[220px] flex-col items-start gap-1 w-full h-42">
            <img
              src="/Image.png"
              className="shrink-0 rounded-2xl w-full h-30 max-w-none"
              alt="Image"
            />
            <div className="flex flex-col items-start w-full">
              <p className="overflow-hidden text-[#600E05] text-ellipsis font-roboto text-lg font-medium leading-[1.11111em] w-full h-5">
                It Feeds &#40;2025&#41;
              </p>
              <p className="line-clamp-1 overflow-hidden text-[#600E05] text-ellipsis font-roboto text-[15px] font-normal leading-[1.06667em] w-full">
                You Rated: 3&#x2F;5
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Nav */}
      <div className="flex p-4 items-center gap-4 bg-[#FEF7FF] shadow-[0-0.594px0 rgba(0,0,0,0.05) inset,0 0.594px0 rgba(0,0,0,0.15)] w-full absolute left-0 top-0">
        <div className="flex items-center gap-3 w-fit">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 relative"
          >
            <path
              d="M19.9999 10.9996H7.82988L13.4199 5.4096L11.9999 3.9996L3.99988 11.9996L11.9999 19.9996L13.4099 18.5896L7.82988 12.9996H19.9999V10.9996Z"
              fill="#79747E"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 relative"
          >
            <path
              d="M11.9999 3.9996L10.5899 5.4096L16.1699 10.9996H3.99988V12.9996H16.1699L10.5899 18.5896L11.9999 19.9996L19.9999 11.9996L11.9999 3.9996Z"
              fill="#79747E"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 relative"
          >
            <path
              d="M17.6499 6.3496C16.1999 4.8996 14.2099 3.9996 11.9999 3.9996C7.57989 3.9996 4.00989 7.5796 4.00989 11.9996C4.00989 16.4196 7.57989 19.9996 11.9999 19.9996C15.7299 19.9996 18.8399 17.4496 19.7299 13.9996H17.6499C16.8299 16.3296 14.6099 17.9996 11.9999 17.9996C8.68989 17.9996 5.99989 15.3096 5.99989 11.9996C5.99989 8.6896 8.68989 5.9996 11.9999 5.9996C13.6599 5.9996 15.1399 6.6896 16.2199 7.7796L12.9999 10.9996H19.9999V3.9996L17.6499 6.3496Z"
              fill="#79747E"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
