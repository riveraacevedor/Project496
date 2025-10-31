import React from "react";
import SongCard from "./SongCard";

export default function SongGrid() {
  const songs = Array.from({ length: 9 }, (_, i) => ({
    image: `/Image(${i}).png`,
    artist: "Artist",
    song: "Song",
  }));

  return (
    <section className="flex justify-end items-center w-full h-[187px] p-6">
      <div className="flex gap-6 overflow-x-auto">
        {songs.map((s, i) => (
          <SongCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
}
