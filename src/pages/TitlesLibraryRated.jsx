import React from "react";
import Sidebar from "../components/Sidebar";

export default function TitlesLibraryRated() {
  const titles = [
    {
      id: 1,
      title: "The Great Adventure",
      description:
        "A thrilling story about courage, friendship, and exploration.",
      image: "/Image.png",
      rating: 4,
    },
    {
      id: 2,
      title: "Mystery of the Forest",
      description:
        "A suspenseful tale set deep in the ancient woods, filled with twists.",
      image: "/Image(1).png",
      rating: 5,
    },
    {
      id: 3,
      title: "City Lights",
      description:
        "An emotional drama exploring ambition and love in the big city.",
      image: "/Image(2).png",
      rating: 3,
    },
  ];

  return (
    <div className="min-w-screen min-h-screen bg-[#FEF7FF] overflow-auto relative font-roboto flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-[90px] mt-[67px] p-8 bg-[#FFE3E3] rounded-[28px] m-6">
        <h1 className="text-2xl font-normal text-[#600E05] mb-8">
          Rated Titles
        </h1>

        {/* Titles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {titles.map((title) => (
            <div
              key={title.id}
              className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-200"
            >
              <img
                src={title.image}
                alt={title.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="text-lg font-medium text-[#600E05]">
                    {title.title}
                  </h2>
                  <p className="text-sm text-[#600E05] mt-1">
                    {title.description}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={i < title.rating ? "#FF9393" : "#E0E0E0"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
