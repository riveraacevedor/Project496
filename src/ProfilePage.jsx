export default function Profile() {
  return (
    <div className="h-screen w-screen flex flex-col">
    <div className="rounded-[18px] border-8 border-[#CAC4D0] bg-[#FEF7FF] min-w-screen min-h-screen overflow-auto relative">
      <div className="flex pt-11 pr-0 pb-14 pl-0 flex-col items-center gap-10 shrink-0 bg-[#FFDCBE] w-18 h-[709px] absolute left-0 top-17 overflow-hidden">
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
                  className="w-6 h-6 overflow-hidden relative "
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
        <div className="flex flex-col items-start gap-1 w-full">
          <button className="cursor-pointer text-nowrap flex py-1.5 px-0 flex-col justify-center items-center gap-1 w-full">
            <div className="flex flex-col justify-center items-center rounded-2xl bg-[#FF9393] w-fit overflow-hidden">
              <div className="flex justify-center items-center w-14 h-8 relative">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 w-6 h-6 overflow-hidden relative "
                >
                  <path
                    d="M8 18L12 14.95L16 18L14.5 13.05L18.5 10.2H13.6L12 5L10.4 10.2H5.5L9.5 13.05L8 18ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"
                    fill="#6E0000"
                  />
                </svg>
              </div>
            </div>
            <p className="text-[#600E05] font-roboto text-xs font-medium leading-[1.33333em] w-full text-center">
              Filter
            </p>
          </button>
          <button className="cursor-pointer text-nowrap flex py-1.5 px-0 flex-col justify-center items-center gap-1 w-full">
            <div className="flex justify-center items-center rounded-2xl w-fit overflow-hidden">
              <div className="flex py-1 px-0 justify-center items-center gap-2.5 w-14 h-8 relative">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 w-6 h-6 overflow-hidden relative "
                >
                  <path
                    d="M8 18L12 14.95L16 18L14.5 13.05L18.5 10.2H13.6L12 5L10.4 10.2H5.5L9.5 13.05L8 18ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                    fill="#600E05"
                  />
                </svg>
              </div>
            </div>
            <p className="text-[#600E05] font-roboto text-xs font-medium leading-[1.33333em] w-full text-center">
              Favorites
            </p>
          </button>
          <button className="cursor-pointer text-nowrap flex py-1.5 px-0 flex-col justify-center items-center gap-1 w-full">
            <div className="flex justify-center items-center rounded-2xl w-fit overflow-hidden">
              <div className="flex py-1 px-0 justify-center items-center gap-2.5 w-14 h-8 relative">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 w-6 h-6 overflow-hidden relative "
                >
                  <path
                    d="M8 18L12 14.95L16 18L14.5 13.05L18.5 10.2H13.6L12 5L10.4 10.2H5.5L9.5 13.05L8 18ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                    fill="#600E05"
                  />
                </svg>
              </div>
            </div>
            <p className="text-[#600E05] font-roboto text-xs font-medium leading-[1.33333em] w-full text-center">
              Rated
            </p>
          </button>
          <button className="cursor-pointer text-nowrap flex py-1.5 px-0 flex-col justify-center items-center gap-1 w-full h-16">
            <div className="flex justify-center items-center rounded-2xl w-fit overflow-hidden">
              <div className="flex py-1 px-0 justify-center items-center gap-2.5 w-14 h-8 relative">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 w-6 h-6 overflow-hidden relative "
                >
                  <path
                    d="M8 18L12 14.95L16 18L14.5 13.05L18.5 10.2H13.6L12 5L10.4 10.2H5.5L9.5 13.05L8 18ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                    fill="#600E05"
                  />
                </svg>
              </div>
            </div>
            <p className="text-[#600E05] font-roboto text-xs font-medium leading-[1.33333em] w-full text-center">
              Recommend
            </p>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start shrink-0 rounded-[28px] bg-[#FFE3E3] w-[793px] h-113 absolute left-19 top-[62px]">
        <div className="flex py-2 px-3 justify-between items-center shrink-0 w-[817px] h-16 relative">
          <div className="flex justify-center items-center shrink-0 w-12 h-12">
            <div className="flex flex-col justify-center items-center shrink-0 rounded-[100px] w-10 overflow-hidden">
              <div className="flex justify-center items-center w-full h-10">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 overflow-hidden relative "
                >
                  <path
                    d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z"
                    fill="#1D1B20"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start absolute left-14 top-[18px] w-[705px]">
            <p className="line-clamp-1 overflow-hidden text-[#1D1B20] text-ellipsis font-roboto text-[22px] font-normal leading-[1.27273em] w-full">
              User Profile
            </p>
          </div>
          <div className="flex justify-end items-center w-fit h-12 overflow-hidden">
            <div className="flex justify-center items-center w-12 h-12">
              <div className="flex flex-col justify-center items-center shrink-0 rounded-[100px] w-10 overflow-hidden">
                <div className="flex justify-center items-center w-full h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 overflow-hidden relative "
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
        </div>
        <div className="shrink-0 w-[817px] h-84 relative">
          <div className="flex justify-center items-center shrink-0 w-45 h-10 absolute left-[38px] top-[242px]"></div>
          <p className="flex flex-col justify-center shrink-0 overflow-hidden text-[#600E05] text-ellipsis font-roboto text-2xl font-normal leading-[1.33333em] w-[217px] h-[66px] absolute left-139 top-[295px]">
            User’s Reviews
          </p>
          <img
            src="/Ellipse1.png"
            className="shrink-0 rounded-[199px] w-[199px] h-48 absolute left-70 -top-2 max-w-none"
            alt="Ellipse 1"
          />
          <div className="flex pb-10 justify-center items-center w-117 h-49 absolute left-[145px] top-46">
            <div className="flex flex-col items-start gap-1 shrink-0 w-117">
              <p className="line-clamp-2 overflow-hidden text-[#600E05] text-ellipsis font-roboto text-2xl font-normal leading-[1.33333em] w-full">
                Username
              </p>
              <p className="text-[#600E05] font-roboto text-[11px] font-medium leading-[1.4545500000000002em] w-full">
                Date joined
              </p>
              <p className="line-clamp-7 overflow-hidden text-[#600E05] text-ellipsis font-roboto text-sm font-normal leading-[1.42857em] w-full">
                User Bio &#40;if applicable&#41; Edit Bio &#40;if User is
                You&#41;
              </p>
            </div>
          </div>
        </div>
        <div className="flex pb-8 flex-col items-start shrink-0 w-full h-[338px] overflow-hidden">
          <div className="flex py-2 px-6 items-center shrink-0 w-full h-18">
            <p className="text-[#1D1B20] font-roboto text-2xl font-normal leading-[1.33333em] w-fit">
              Recently Rated
            </p>
            <div className="flex justify-center items-center w-12 h-12">
              <div className="flex flex-col justify-center items-center shrink-0 rounded-[100px] w-10 overflow-hidden">
                <div className="flex justify-center items-center w-full h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 overflow-hidden relative "
                  >
                    <path
                      d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                      fill="#49454F"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-0 px-6 flex-col items-start gap-4 shrink-0 w-full h-[155px]">
            <div className="flex flex-col items-start gap-1 rounded-xl w-full">
              <div className="flex items-start gap-4 w-full">
                <img
                  src="/Image.png"
                  className="rounded-2xl w-30 h-30 max-w-none"
                  alt="Image"
                />
                <div className="flex flex-col justify-between items-start w-full h-full">
                  <div className="flex flex-col items-start gap-1 w-full">
                    <p className="text-[#600E05] font-roboto text-[22px] font-normal leading-[1.27273em] w-full">
                      Title
                    </p>
                    <p className="max-h-[52px] text-[#600E05] font-roboto text-sm font-normal leading-[1.42857em] w-full">
                      Description duis aute irure dolor in reprehenderit in
                      voluptate velit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-1 shrink-0 rounded-xl w-full"></div>
            <div className="flex flex-col items-start gap-1 rounded-xl w-full">
              <div className="flex items-start gap-4 w-full">
                <img
                  src="/Image(1).png"
                  className="rounded-2xl w-30 h-30 max-w-none"
                  alt="Image"
                />
                <div className="flex flex-col justify-between items-start w-full h-full">
                  <div className="flex flex-col items-start gap-1 w-full">
                    <p className="text-[#1D1B20] font-roboto text-[22px] font-normal leading-[1.27273em] w-full">
                      Title
                    </p>
                    <p className="max-h-[52px] text-[#49454F] font-roboto text-sm font-normal leading-[1.42857em] w-full">
                      Description duis aute irure dolor in reprehenderit in
                      voluptate velit.
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-1 w-full h-6">
                      <p className="line-clamp-1 overflow-hidden text-[#49454F] text-ellipsis font-roboto text-xs font-normal leading-[1.33333em] w-fit">
                        Today
                      </p>
                      <p className="text-[#49454F] font-roboto text-xs font-normal leading-[1.33333em] w-fit">
                        •
                      </p>
                      <p className="line-clamp-1 overflow-hidden text-[#49454F] text-ellipsis font-roboto text-xs font-normal leading-[1.33333em] w-full">
                        23 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-4 items-center gap-4 bg-[#FEF7FF] shadow-[0-0.594px00rgba(0,0,0,0.05)inset,00.594px00rgba(0,0,0,0.15)] w-full absolute left-0 top-0">
        <div className="flex items-center gap-3 w-fit">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 overflow-hidden relative "
          >
            <path
              d="M19.9999 10.9996H7.82988L13.4199 5.40963L11.9999 3.99963L3.99988 11.9996L11.9999 19.9996L13.4099 18.5896L7.82988 12.9996H19.9999V10.9996Z"
              fill="#79747E"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 overflow-hidden relative "
          >
            <path
              d="M11.9999 3.99963L10.5899 5.40963L16.1699 10.9996H3.99988V12.9996H16.1699L10.5899 18.5896L11.9999 19.9996L19.9999 11.9996L11.9999 3.99963Z"
              fill="#79747E"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 overflow-hidden relative "
          >
            <path
              d="M17.6499 6.34963C16.1999 4.89963 14.2099 3.99963 11.9999 3.99963C7.57989 3.99963 4.00989 7.57963 4.00989 11.9996C4.00989 16.4196 7.57989 19.9996 11.9999 19.9996C15.7299 19.9996 18.8399 17.4496 19.7299 13.9996H17.6499C16.8299 16.3296 14.6099 17.9996 11.9999 17.9996C8.68989 17.9996 5.99989 15.3096 5.99989 11.9996C5.99989 8.68963 8.68989 5.99963 11.9999 5.99963C13.6599 5.99963 15.1399 6.68963 16.2199 7.77963L12.9999 10.9996H19.9999V3.99963L17.6499 6.34963Z"
              fill="#79747E"
            />
          </svg>
        </div>
        <div className="flex py-1.5 px-4 justify-between items-center rounded-[46.08px] bg-[#F3EDF7] w-full overflow-hidden">
          <div className="flex items-center gap-2 w-full">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[15px] h-[15px] overflow-hidden relative "
            >
              <g clipPath="url(#clip0_34_3336)">
                <path
                  opacity="0.65"
                  d="M11.5201 5.44063H10.8801V4.16063C10.8801 2.39423 9.44646 0.960632 7.68006 0.960632C5.91366 0.960632 4.48006 2.39423 4.48006 4.16063V5.44063H3.84006C3.13606 5.44063 2.56006 6.01663 2.56006 6.72063V13.1206C2.56006 13.8246 3.13606 14.4006 3.84006 14.4006H11.5201C12.2241 14.4006 12.8001 13.8246 12.8001 13.1206V6.72063C12.8001 6.01663 12.2241 5.44063 11.5201 5.44063ZM7.68006 11.2006C6.97606 11.2006 6.40006 10.6246 6.40006 9.92063C6.40006 9.21663 6.97606 8.64063 7.68006 8.64063C8.38406 8.64063 8.96006 9.21663 8.96006 9.92063C8.96006 10.6246 8.38406 11.2006 7.68006 11.2006ZM9.66406 5.44063H5.69606V4.16063C5.69606 3.06623 6.58566 2.17663 7.68006 2.17663C8.77446 2.17663 9.66406 3.06623 9.66406 4.16063V5.44063Z"
                  fill="#49454F"
                />
              </g>
              <defs>
                <clipPath id="clip0_34_3336">
                  <rect
                    width="15.36"
                    height="15.36"
                    fill="white"
                    transform="translate(0 0.320007)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="text-[#1D1B20] font-roboto text-md font-normal leading-[1.5em] w-full">
              www.url.com
            </p>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 overflow-hidden relative "
          >
            <path
              d="M18.3332 7.69837L12.3416 7.18171L9.9999 1.66504L7.65823 7.19004L1.66656 7.69837L6.21657 11.64L4.8499 17.4984L9.9999 14.39L15.1499 17.4984L13.7916 11.64L18.3332 7.69837ZM9.9999 12.8317L6.86657 14.7234L7.6999 11.1567L4.93323 8.75671L8.58323 8.44004L9.9999 5.08171L11.4249 8.44837L15.0749 8.76504L12.3082 11.165L13.1416 14.7317L9.9999 12.8317Z"
              fill="#79747E"
            />
          </svg>
        </div>
        <button className="cursor-pointer text-nowrap flex pt-[3px] pr-[7px] pb-[1px] pl-[7px] justify-center items-center rounded-[109.091px] bg-[#79747E] w-7 h-7 overflow-hidden">
          <p className="text-[#FFF] font-roboto text-md font-normal leading-[1.5em] w-3.5 h-6 text-center tracking-[0.0312em]">
            M
          </p>
        </button>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 w-6 h-6 overflow-hidden relative "
        >
          <path
            d="M11.9999 7.99963C13.0999 7.99963 13.9999 7.09963 13.9999 5.99963C13.9999 4.89963 13.0999 3.99963 11.9999 3.99963C10.8999 3.99963 9.99988 4.89963 9.99988 5.99963C9.99988 7.09963 10.8999 7.99963 11.9999 7.99963ZM11.9999 9.99963C10.8999 9.99963 9.99988 10.8996 9.99988 11.9996C9.99988 13.0996 10.8999 13.9996 11.9999 13.9996C13.0999 13.9996 13.9999 13.0996 13.9999 11.9996C13.9999 10.8996 13.0999 9.99963 11.9999 9.99963ZM11.9999 15.9996C10.8999 15.9996 9.99988 16.8996 9.99988 17.9996C9.99988 19.0996 10.8999 19.9996 11.9999 19.9996C13.0999 19.9996 13.9999 19.0996 13.9999 17.9996C13.9999 16.8996 13.0999 15.9996 11.9999 15.9996Z"
            fill="#79747E"
          />
        </svg>
      </div>
    </div>
    </div>
  );
}
