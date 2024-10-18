import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PasswordReset() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordReset = () => {
    // Logic for password reset (e.g., API call)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      setMessage("Password reset link has been sent to your email.");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <section id="passwordreset" className=" min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl border-orange-500 border"
        >
          <h1 className="text-4xl font-bold text-white mb-6 text-center">
            Password Reset
          </h1>
          <div className="flex items-center space-x-4 mb-4">
            <FaLock className="text-orange-500 text-2xl" />
            <h2 className="text-xl font-semibold text-orange-300">
              Enter your email to reset your password
            </h2>
          </div>
          {message && (
            <p className="text-green-500 text-center mb-4">{message}</p>
          )}
          <input
            type="email"
            placeholder="Email Address"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 rounded border border-gray-300 text-gray-900"
          />
          <button
            onClick={handlePasswordReset}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Send Reset Link
          </button>
          <div className="mt-4 text-center">
            <Link
              to="/dashboard/options/"
              className="text-gray-300 hover:text-orange-400 transition-colors"
            >
              Back to Security Settings
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
