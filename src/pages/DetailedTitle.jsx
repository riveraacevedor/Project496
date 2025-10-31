import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import { libraryData } from "../components/LibraryData";

export default function DetailedTitlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = libraryData.find((entry) => entry.id === parseInt(id, 10));


  
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
      <div className="rounded-[18px] border-8 border-[#CAC4D0] bg-[#FFE3E3] p-6 max-w-4xl">
        <div className="flex gap-6">
          <img src={item.image} alt={item.title} className="w-48 h-64 object-cover rounded-lg" />
          <div>
            <h1 className="text-2xl text-[#600E05] font-medium">{item.title}</h1>
            <p className="text-sm text-[#600E05] mb-2">{item.author}</p>
            <p className="text-sm text-[#600E05] mb-4">{item.description}</p>
            <p className="text-sm text-[#49454F]">Rating: {item.rating}</p>
          </div>
        </div>

        {/* More sections if needed */}
        <div className="mt-6">
          <button className="px-4 py-2 bg-[#FF9393] rounded-lg text-white mr-2">Purchase / Rent</button>
          <button className="px-4 py-2 bg-[#FF9393] rounded-lg text-white mr-2">User Reviews</button>
          <button onClick={() => navigate(-1)} className="px-4 py-2 border rounded-lg">
            Back to Library
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
