import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation and redirect to home
    if (email && password) {
      // Store login state in local storage if needed
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-200">
      <div className="bg-white rounded-tl-3xl rounded-br-3xl shadow-lg p-6 max-w-xs w-full">
        <h2 className="text-2xl font-bold text-pink-700 mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-pink-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-pink-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white text-lg font-bold py-2 px-4 rounded-md shadow-md hover:bg-pink-700"
          >
            Login
          </button>
        </form>
        <p className="text-center text-pink-700 mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="cursor-pointer text-pink-500 underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
