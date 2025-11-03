import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../layout/PageLayout";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {   // <-- added async here
    e.preventDefault();
    try {
      const res = await fetch("https://cmpt496-backend.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Login successful:", data);
        navigate("/profile");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <PageLayout>
      <div className="max-w-md mx-auto bg-white rounded-2xl p-6">
        <h2 className="text-2xl text-[#600E05] mb-4">Login</h2>

        {/* Form handles both Enter key and button click */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        >
          <input
            className="p-2 border rounded"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <input
              className="p-2 border rounded w-full"
              type={show ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="absolute right-2 top-2 text-xs text-[#600E05]"
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="px-4 py-2 bg-[#FF9393] rounded text-white mt-2"
          >
            Sign In
          </button>
        </form>
      </div>
    </PageLayout>
  );
}
