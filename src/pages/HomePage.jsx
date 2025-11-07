import React, { useEffect, useState } from "react";
import PageLayout from "../layout/PageLayout";

export default function HomePage() {
  const [recs, setRecs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const BASE_URL = "https://cmpt496-backend-1.onrender.com";

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await fetch(`${BASE_URL}/recommendations/1`);

        if (!res.ok) {
          setError("Failed to fetch recommendations.");
          setLoading(false);
          return;
        }

        const data = await res.json();
        setRecs(data);
      } catch (err) {
        console.error("Error:", err);
        setError("Server error when loading recommendations.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <PageLayout>
      <h1 className="text-3xl font-semibold text-[#600E05] mb-6">
        Recommendations
      </h1>

      {loading && <p className="text-[#600E05]">Loading recommendations...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {recs && recs.recommendations && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {recs.recommendations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 flex flex-col"
            >
              {/* Movie / Book Image */}
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-56 object-cover rounded-lg mb-3"
              />

              {/* Title */}
              <p className="text-xl text-[#600E05] font-semibold">
                {item.title}
              </p>

              {/* Metadata */}
              <p className="text-sm text-[#600E05] mt-1">
                {item.type.toUpperCase()} • {item.release_year}
              </p>

              {/* Rating */}
              <p className="text-sm text-[#600E05] font-medium mt-1">
                ⭐ {item.rating}/5
              </p>

              {/* Description */}
              <p className="text-sm text-[#600E05] mt-3 line-clamp-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {recs && (!recs.recommendations || recs.recommendations.length === 0) && (
        <p className="text-[#600E05] mt-4">No recommendations found.</p>
      )}
    </PageLayout>
  );
}
