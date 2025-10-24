export default function Profile() {
  return (
    <div className="rounded-[18px] border-8 border-[#CAC4D0] bg-[#FEF7FF] min-w-screen min-h-screen overflow-auto relative">

      {/* Sidebar */}
      <div className="flex flex-col items-center gap-10 bg-[#FFDCBE] w-18 h-[709px] absolute left-0 top-17 p-11 overflow-hidden">

        {/* Menu Icon */}
        <div className="flex justify-center items-center w-fit">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#600E05" />
          </svg>
        </div>

        {/* Sidebar Buttons */}
        <div className="flex flex-col items-start gap-1 w-full">
          
          {/* Filter Button */}
          <button className="flex flex-col items-center gap-1 py-1.5 w-full">
            <div className="flex justify-center items-center rounded-2xl bg-[#FF9393] w-fit overflow-hidden">
              <div className="w-14 h-8 flex justify-center items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 18L12 14.95L16 18L14.5 13.05L18.5 10.2H13.6L12 5L10.4 10.2H5.5L9.5 13.05L8 18ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" fill="#6E0000"/>
                </svg>
              </div>
            </div>
            <p className="text-[#600E05] font-roboto text-xs font-medium w-full text-center">Filter</p>
          </button>

          {/* Favorites Button */}
          <button className="flex flex-col items-center gap-1 py-1.5 w-full">
            <div className="flex justify-center items-center rounded-2xl w-fit overflow-hidden">
              <div className="flex py-1 px-0 justify-center items-center gap-2.5 w-14 h-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 18L12 14.95L16 18L14.5 13.05L18.5 10.2H13.6L12 5L10.4 10.2H5.5L9.5 13.05L8 18ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#600E05"/>
                </svg>
              </div>
            </div>
            <p className="text-[#600E05] font-roboto text-xs font-medium w-full text-center">Favorites</p>
          </button>

          {/* Rated Button */}
          <button className="flex flex-col items-center gap-1 py-1.5 w-full">
            <div className="flex justify-center items-center rounded-2xl w-fit overflow-hidden">
              <div className="flex py-1 px-0 justify-center items-center gap-2.5 w-14 h-8">
                {/* SVG same as Favorites */}
              </div>
            </div>
            <p className="text-[#600E05] font-roboto text-xs font-medium w-full text-center">Rated</p>
          </button>

          {/* Recommend Button */}
          <button className="flex flex-col items-center gap-1 py-1.5 w-full h-16">
            <div className="flex justify-center items-center rounded-2xl w-fit overflow-hidden">
              <div className="flex py-1 px-0 justify-center items-center gap-2.5 w-14 h-8">
                {/* SVG same as Favorites */}
              </div>
            </div>
            <p className="text-[#600E05] font-roboto text-xs font-medium w-full text-center">Recommend</p>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-start bg-[#FFE3E3] rounded-[28px] w-[793px] h-113 absolute left-19 top-[62px]">

        {/* Profile Header */}
        <div className="flex justify-between items-center w-[817px] h-16 px-3 py-2">
          <div className="w-12 h-12 flex justify-center items-center rounded-full">
            {/* User SVG */}
          </div>
          <p className="text-[#1D1B20] text-2xl font-normal">User Profile</p>
          <div className="w-12 h-12 flex justify-center items-center rounded-full">
            {/* Menu Dots SVG */}
          </div>
        </div>

        {/* User Info */}
        <div className="absolute left-139 top-[295px] text-2xl text-[#600E05]">
          User’s Reviews
        </div>

        <img src="/Ellipse1.png" className="absolute left-70 -top-2 w-[199px] h-48 rounded-full" alt="Ellipse" />

        {/* Recently Rated Section */}
        <div className="flex flex-col gap-4 w-full px-6 py-0 mt-6">
          {/* Example Item */}
          <div className="flex items-start gap-4 w-full">
            <img src="/Image.png" className="w-30 h-30 rounded-2xl" alt="Rated Item" />
            <div className="flex flex-col justify-between w-full h-full">
              <p className="text-[#600E05] text-[22px]">Item Title</p>
              <p className="text-[#600E05] text-sm">Item description goes here. Duis aute irure dolor in reprehenderit.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
