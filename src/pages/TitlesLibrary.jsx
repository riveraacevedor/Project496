import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../layout/PageLayout";

export default function TitlesLibrary() {
  const [filter, setFilter] = useState("all"); // all | movie | book
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load COMBINED list from backend
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("https://cmpt496-backend-8wrp.onrender.com/library");
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error("Failed to load library:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Filter based on chosen type
  const filtered = items.filter((item) =>
    filter === "all" ? true : item.type === filter
  );

  if (loading) {
    return (
      <PageLayout>
        <div className="p-6 text-[#600E05]">Loading titles…</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="rounded-[18px] border-8 border-[#CAC4D0] bg-[#FFE3E3] p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl text-[#600E05]">Titles Library</h1>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded-lg ${
                filter === "all" ? "bg-[#FF9393] text-white" : "border"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("movie")}
              className={`px-3 py-1 rounded-lg ${
                filter === "movie" ? "bg-[#FF9393] text-white" : "border"
              }`}
            >
              Movies
            </button>
            <button
              onClick={() => setFilter("book")}
              className={`px-3 py-1 rounded-lg ${
                filter === "book" ? "bg-[#FF9393] text-white" : "border"
              }`}
            >
              Books
            </button>
          </div>
        </div>

        {/* Titles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <Link
              key={`${item.type}-${item.id}`}
              to={`/detail/${item.type}/${item.id}`} 
              className="block"
            >
              <div className="bg-white rounded-2xl p-4 hover:shadow-lg transition-shadow">
                <img
                  src={item.image_url}
                  alt={item.title}
                  onError={(e) => {
                    e.target.onerror = null;  // prevent infinite loop
                    e.target.src = "/placeholder-cover.png";
                  }}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <p className="text-lg text-[#600E05] font-medium">
                  {item.title}
                </p>

                {/* Creator only exists for books, movies show category */}
                <p className="text-xs text-[#49454F]">
                  {item.creator || (item.type === "movie" ? "Movie" : "")}
                </p>

                <p className="text-sm text-[#600E05] mt-2">
                  Rating: {item.rating ?? "—"}
                </p>
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
