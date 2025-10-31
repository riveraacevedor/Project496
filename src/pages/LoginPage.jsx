import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: integrate actual login logic
    navigate("/profile");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#FFDCBE] relative">
      {/* Top Menu Icon */}
      <div className="absolute top-16 left-6">
        <button onClick={() => navigate("/")} className="p-3 rounded-2xl hover:bg-[#FFB28F] transition">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6 text-[#600E05]"
          >
            <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Login Card */}
      <div className="flex flex-col items-center bg-[#FEF7FF] rounded-[28px] shadow-lg p-8 mt-32 w-[360px] gap-6">
        <h1 className="text-3xl font-medium text-[#600E05] text-center">
          Login
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[#600E05] font-medium text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
              className="w-full h-12 px-4 rounded-2xl border border-[#FF9393] focus:outline-none focus:ring-2 focus:ring-[#FF9393]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-[#600E05] font-medium text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
              className="w-full h-12 px-4 rounded-2xl border border-[#FF9393] focus:outline-none focus:ring-2 focus:ring-[#FF9393]"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-[#FF9393] rounded-2xl text-[#600E05] font-medium hover:bg-[#f36b6b] transition"
          >
            Log In
          </button>
        </form>

        <p className="text-[#600E05] text-sm text-center">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="font-medium underline hover:text-[#FF9393]"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
