import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../layout/PageLayout";

export default function SignupPage() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [error, setError] = useState("");
    const [usernameTaken, setUsernameTaken] = useState(false);

    const BASE_URL = "https://cmpt496-backend-8wrp.onrender.com";

    // Check existing usernames
    useEffect(() => {
        if (!username || !username.includes("@") || !username.includes(".")) {
            setUsernameTaken(false);
            return;
        }

        const check = async () => {
            try {
                const res = await fetch(`${BASE_URL}/users`);
                const data = await res.json();

                const usernames = data.map((u) => u.username);
                setUsernameTaken(usernames.includes(username));
            } catch (err) {
                console.error("Error checking users:", err);
            }
        };

        const delay = setTimeout(check, 500);
        return () => clearTimeout(delay);
    }, [username]);

    const validateInputs = () => {
        if (!username.includes("@") || !username.includes(".")) {
            return "Please enter a valid email address.";
        }
        if (password.length < 6) {
            return "Password must be at least 6 characters long.";
        }
        if (!age || age <= 0) {
            return "Please enter a valid age.";
        }
        if (!gender) {
            return "Please select a gender.";
        }
        if (usernameTaken) {
            return "That email is already in use.";
        }
        return null;
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");

        const validationError = validateInputs();
        if (validationError) {
            setError(validationError);
            return;
        }

        const created_at = new Date()
            .toISOString()
            .slice(0, 19)
            .replace("T", " ");

        try {
            const res = await fetch(`${BASE_URL}/users`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    password,
                    age,
                    gender,
                    created_at,
                }),
            });

            const text = await res.text();

            if (text.includes("Error adding user")) {
                setError("Failed to create user. The email may already be in use.");
                return;
            }

            navigate("/login");
        } catch (err) {
            console.error(err);
            setError("Server error. Please try again later.");
        }
    };

    return (
        <PageLayout>
            <div className="max-w-md mx-auto bg-white rounded-2xl p-6 mt-8 shadow">
                <h2 className="text-2xl text-[#600E05] mb-4 font-semibold">
                    Create Account
                </h2>

                <form onSubmit={handleSignup} className="flex flex-col gap-4">

                    {/* Email */}
                    <div>
                        <label className="block text-sm text-[#600E05] mb-1">Email</label>
                        <input
                            className={`p-2 border rounded w-full ${usernameTaken ? "border-red-500" : ""
                                }`}
                            type="email"
                            placeholder="email@example.com"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                                setError("");
                            }}
                            required
                        />
                        {usernameTaken && (
                            <p className="text-red-500 text-sm mt-1">
                                That email is already in use.
                            </p>
                        )}
                    </div>

                    {/* Password with toggle */}
                    <div>
                        <label className="block text-sm text-[#600E05] mb-1">Password</label>

                        <div className="relative">
                            <input
                                className="p-2 border rounded w-full"
                                type={showPassword ? "text" : "password"}
                                placeholder="At least 6 characters"
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
                    </div>

                    {/* Age */}
                    <div>
                        <label className="block text-sm text-[#600E05] mb-1">Age</label>
                        <input
                            className="p-2 border rounded w-full"
                            type="number"
                            placeholder="Your age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block text-sm text-[#600E05] mb-1">Gender</label>
                        <select
                            className="p-2 border rounded w-full bg-white"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        >
                            <option value="">Select your gender</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">Other</option>
                        </select>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#FF9393] rounded text-white mt-2"
                    >
                        Sign Up
                    </button>

                </form>

                <p className="text-sm text-[#600E05] mt-3">
                    Already have an account?{" "}
                    <a href="/login" className="underline text-[#600E05]">
                        Sign in here
                    </a>
                </p>
            </div>
        </PageLayout>
    );
}
