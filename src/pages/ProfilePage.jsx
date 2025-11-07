import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import { UserContext } from "../context/UserContext";

export default function ProfilePage() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <PageLayout>
      <div className="w-full max-w-4xl bg-[#FFE3E3] rounded-[28px] p-6">

        <h1 className="text-2xl font-normal text-[#600E05] mb-4">
          User Profile
        </h1>

        <div className="flex items-center gap-6 mb-6">
          <img
            src="/Ellipse1.png"
            alt="User Avatar"
            className="w-48 h-48 rounded-full"
          />

          <div>
            <p className="text-2xl font-normal text-[#600E05]">
              {user.username}
            </p>

            <p className="text-sm text-[#600E05] mt-2">
              <strong>ID:</strong> {user.id}
            </p>

            <p className="text-sm text-[#600E05]">
              <strong>Age:</strong> {user.age}
            </p>

            <p className="text-sm text-[#600E05]">
              <strong>Gender:</strong> {user.gender}
            </p>

            <p className="text-sm text-[#600E05]">
              <strong>Joined:</strong>{" "}
              {new Date(user.created_at).toLocaleDateString()}
            </p>

          </div>
        </div>

        <h2 className="text-xl text-[#600E05] mb-4">Recently Rated</h2>

        <p className="text-[#600E05] text-sm">
          (You can add your reviews here later)
        </p>


        <div className="flex justify-end mb-4"> 
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="px-4 py-2 bg-red-400 text-white rounded-lg"
          >
            Log Out
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
