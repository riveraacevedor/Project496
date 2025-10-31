import React from "react";
import PageLayout from "../layout/PageLayout";

export default function ProfilePage() {
  return (
    <PageLayout>
      <div className="w-full max-w-4xl bg-[#FFE3E3] rounded-[28px] p-6">
        <h1 className="text-2xl font-normal text-[#600E05] mb-4">User Profile</h1>
        <div className="flex items-center gap-6 mb-6">
          <img src="/Ellipse1.png" alt="User Avatar" className="w-48 h-48 rounded-full" />
          <div>
            <p className="text-2xl font-normal text-[#600E05]">Username</p>
            <p className="text-xs text-[#600E05] font-medium">Date Joined</p>
            <p className="text-sm text-[#600E05] mt-2">
              User Bio (if applicable) Edit Bio (if User is You)
            </p>
          </div>
        </div>

        <h2 className="text-xl text-[#600E05] mb-4">Recently Rated</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4 bg-white rounded-xl p-4">
            <img src="/Image.png" alt="Item" className="w-30 h-30 rounded-2xl" />
            <div className="flex flex-col justify-between w-full">
              <p className="text-lg text-[#600E05]">Title</p>
              <p className="text-sm text-[#600E05]">
                Description duis aute irure dolor in reprehenderit in voluptate velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
