import React from "react";

export default function SongCard({ image, artist, song }) {
  return (
    <div className="flex p-2 flex-col items-start gap-2 rounded-xl relative">
      <div className="absolute bottom-0 w-full h-[6px] rounded-xl bg-[#FAAF7E]" />
      <img
        src={image}
        alt={song}
        className="rounded-lg w-[120px] h-[120px] object-cover"
      />
      <div>
        <p className="text-[#600E05] text-sm font-medium">{artist}</p>
        <p className="text-[#49454F] text-xs">{song}</p>
      </div>
    </div>
  );
}
