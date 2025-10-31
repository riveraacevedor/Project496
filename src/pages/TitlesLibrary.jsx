import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import { libraryData } from "../components/LibraryData";

export default function TitlesLibrary() {
  const [filter, setFilter] = useState("all"); // 'all' | 'movie' | 'book'

  const filtered = libraryData.filter((item) =>
    filter === "all" ? true : item.type === filter
  );

  return (
    <PageLayout>
      <div className="rounded-[18px] border-8 border-[#CAC4D0] bg-[#FFE3E3] p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl text-[#600E05]">Titles Library</h1>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded-lg ${filter === "all" ? "bg-[#FF9393]" : "border"}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("movie")}
              className={`px-3 py-1 rounded-lg ${filter === "movie" ? "bg-[#FF9393]" : "border"}`}
            >
              Movies
            </button>
            <button
              onClick={() => setFilter("book")}
              className={`px-3 py-1 rounded-lg ${filter === "book" ? "bg-[#FF9393]" : "border"}`}
            >
              Books
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <Link key={item.id} to={`/detail/${item.id}`} className="block">
              <div className="bg-white rounded-2xl p-4 hover:shadow-lg transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <p className="text-lg text-[#600E05] font-medium">{item.title}</p>
                <p className="text-xs text-[#49454F]">{item.author}</p>
                <p className="text-sm text-[#600E05] mt-2">Rating: {item.rating}</p>
              </div>
            </Link>
          ))}

          {filtered.length === 0 && (
            <p className="text-[#600E05]">No titles match the selected filter.</p>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
