import React from "react";
import PageLayout from "../layout/PageLayout";

export default function HomePage() {
  return (
    <PageLayout>
      <h1 className="text-3xl font-semibold text-[#600E05] mb-6">Welcome Home</h1>
      <p className="text-[#600E05]">
        This is the main homepage content area. Add any components or cards here.
      </p>
    </PageLayout>
  );
}