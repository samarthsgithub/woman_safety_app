import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation and then redirect to login
    if (email && password) {
      // Store the user's data in local storage or send it to your backend
      localStorage.setItem("userEmail", email);
      navigate("/login");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-200">
      <div className="bg-white rounded-tl-3xl rounded-br-3xl shadow-lg p-6 max-w-xs w-full">
        <h2 className="text-2xl font-bold text-pink-700 mb-4">Sign Up</h2>
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
            Sign Up
          </button>
        </form>
        <p className="text-center text-pink-700 mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer text-pink-500 underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
