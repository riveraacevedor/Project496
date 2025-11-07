import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import { UserContext } from "../context/UserContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const BASE_URL = "https://cmpt496-backend-8wrp.onrender.com";

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${BASE_URL}/users`);
      const users = await res.json();

      const found = users.find(
        (u) => u.username === username && u.password === password
      );

      if (!found) {
        setError("Invalid username or password.");
        return;
      }

      setUser(found);
      navigate("/profile");
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again.");
    }
  };

  return (
    <PageLayout>
      <div className="max-w-md mx-auto bg-white rounded-2xl p-6 mt-8 shadow">
        <h2 className="text-2xl text-[#600E05] mb-4 font-semibold">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            className="p-2 border rounded"
            type="email"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          {/* Password with toggle */}
          <div className="relative">
            <input
              className="p-2 border rounded w-full"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-[#600E05]"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="px-4 py-2 bg-[#FF9393] rounded text-white mt-2"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-[#600E05] mt-3">
          Don't have an account?{" "}
          <a href="/signup" className="underline text-[#600E05]">
            Sign up here
          </a>
        </p>
      </div>
    </PageLayout>
  );
}
