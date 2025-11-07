import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageLayout from "../layout/PageLayout";

export default function DetailedTitlePage() {
  const { type, id } = useParams(); // <-- expects /detail/:type/:id
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const base = type === "movie" ? "movies" : "books";
        const res = await fetch(`http://localhost:3000/${base}/${id}`);
        if (!res.ok) {
          setItem(null);
        } else {
          const data = await res.json();
          setItem(data);
        }
      } catch (e) {
        console.error("Failed to load item:", e);
        setItem(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [type, id]);

  if (loading) {
    return (
      <PageLayout>
        <div className="rounded-[18px] border-8 border-[#CAC4D0] bg-[#FFE3E3] p-8">
          <p className="text-[#600E05]">Loading…</p>
        </div>
      </PageLayout>
    );
  }

  if (!item) {
    return (
      <PageLayout>
        <div className="rounded-[18px] border-8 border-[#CAC4D0] bg-[#FFE3E3] p-8">
          <p className="text-[#600E05]">Title not found.</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-3 py-1 bg-[#FF9393] rounded-lg text-white"
          >
            Back
          </button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="rounded-[18px] border-8 border-[#CAC4D0] bg-[#FFE3E3] p-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={item.image_url}
            alt={item.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder-cover.png";
            }}
            className="w-48 h-64 object-cover rounded-lg"
          />
          <div>
            <h1 className="text-2xl text-[#600E05] font-medium">{item.title}</h1>
            <p className="text-sm text-[#600E05] mb-2">
              {item.creator || (type === "movie" ? "Movie" : "")}
            </p>
            <p className="text-sm text-[#600E05] mb-4">{item.description}</p>
            <p className="text-sm text-[#49454F]">Rating: {item.rating ?? "—"}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-[#FF9393] rounded-lg text-white">Purchase / Rent</button>
          <button onClick={() => navigate("/user_review")} className="px-4 py-2 bg-[#FF9393] rounded-lg text-white">
            User Reviews
          </button>
          <button onClick={() => navigate(-1)} className="px-4 py-2 border rounded-lg">
            Back to Library
          </button>
        </div>
      </div>
    </PageLayout>
  );
}