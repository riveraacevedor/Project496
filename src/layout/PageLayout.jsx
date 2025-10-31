import React from "react";
import Sidebar from "../components/Sidebar";

export default function PageLayout({ children, activePage }) {
  return (
    <div className="flex min-h-screen bg-[#FEF7FF] font-roboto">
      {/* Sidebar stays fixed */}
      <Sidebar activePage={activePage} />

      {/* Main content area */}
      <main className="flex-1 ml-24 p-8">{children}</main>
    </div>
  );
}