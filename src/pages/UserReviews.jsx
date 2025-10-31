import React from "react";
import PageLayout from "../layout/PageLayout";

// Reusable Star Rating
const Stars = ({ count = 5 }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      >
        <path
          d="M4.85425 18.3333L6.20842 12.4792L1.66675 8.54167L7.66675 8.02083L10.0001 2.5L12.3334 8.02083L18.3334 8.54167L13.7917 12.4792L15.1459 18.3333L10.0001 15.2292L4.85425 18.3333Z"
          fill="#FAAF7E"
        />
      </svg>
    ))}
  </div>
);

// Single review card
const ReviewCard = ({ user, title, text, image }) => (
  <div className="flex gap-4 w-full py-3 border-b border-[#FFE3E3]">
    <img src={image} alt="User" className="w-20 h-20 rounded-2xl" />
    <div className="flex flex-col justify-center gap-1">
      <div className="flex justify-between items-center">
        <p className="text-[#600E05] text-lg font-normal">{user}</p>
        <Stars />
      </div>
      <p className="text-[#600E05] text-sm font-normal">{title}</p>
      <p className="text-[#600E05] text-sm font-normal">{text}</p>
    </div>
  </div>
);

export default function UserReviews() {
  const reviews = [
    {
      user: "Name",
      title: "Review Title",
      text: "Supporting line text lorem ipsum dolor sit amet, consectetur.",
      image: "/Image.png",
    },
    {
      user: "Name",
      title: "Review Title",
      text: "Supporting line text lorem ipsum dolor sit amet, consectetur.",
      image: "/Image(1).png",
    },
    {
      user: "Name",
      title: "Review Title",
      text: "Supporting line text lorem ipsum dolor sit amet, consectetur.",
      image: "/Image(2).png",
    },
  ];

  return (
    <PageLayout>
      <div className="flex flex-col w-full">

        {/* Title section */}
        <div className="flex flex-col justify-center items-start gap-2 p-6 bg-[#FFF3F3] rounded-t-2xl">
          <p className="text-[#600E05] text-4xl font-semibold">
            User Reviews for INSERT TITLE HERE (2025)
          </p>
          <div className="flex gap-2">
            <button className="bg-[#FFE3E3] rounded-lg px-4 py-1 font-medium text-[#600E05]">
              Write a Review
            </button>
            <button className="bg-[#FFE3E3] rounded-lg px-4 py-1 font-medium text-[#600E05]">
              Filter
            </button>
          </div>
        </div>

        {/* Reviews list */}
        <div className="flex flex-col gap-4 p-6">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
