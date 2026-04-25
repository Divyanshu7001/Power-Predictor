import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Otp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    otp: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [avatar, setAvatar] = useState(null); 
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.password === formData.confirmPassword &&
      formData.confirmPassword !== ""
    ) {
      console.log("After Password Check");

      if (formData.password.length >= 8) {
        try {
         console.log("In try catch");
          const email = localStorage.getItem("email");
          console.log(email);

          const data = new FormData(); // Use FormData to send files
          data.append("email", email);
          data.append("otp", formData.otp);
          data.append("username", formData.username);
          data.append("password", formData.password);
          data.append("avatar", avatar); // Add the avatar file
          data.append("confirmPassword", formData.confirmPassword);

          console.log(data);

          const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_USER_URI}/createUser`,
            data,
            {
              withCredentials: true,
              headers: { "Content-Type": "multipart/form-data" },
            }
          );

          toast.success(response.data.message, {
            icon: "👏",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          navigate("/Dashboard");
        } catch (error) {
          const errorMessage =
            error.response?.data?.message || "An error occurred";
          toast.error(errorMessage, {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      } else {
        alert("Password must be at least 8 characters long");
      }
    }
  };

  return (
    <section id="otp" className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl border-orange-500 border"
        >
          <form onSubmit={handleSubmit} className="space-y-3">
            <h2 className="text-4xl font-bold text-white mb-6 text-center">
              Enter OTP
            </h2>
            {message && (
              <p className="text-green-500 text-center mb-4">{message}</p>
            )}
            <input
              type="text"
              name="otp"
              placeholder="Enter 4-digit OTP"
              value={formData.otp}
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 rounded border border-gray-300 text-gray-900"
            />
            <label className="block text-gray-300 mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <label className="block text-gray-300 mb-2">Profile Picture</label>
            <input
              type="file"
              onChange={handleFileChange}
              required
              className="w-full px-2 py-1 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <label className="block text-gray-300 mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Verify OTP & Register
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link
              to="/login"
              className="text-gray-300 hover:text-orange-400 transition-colors"
            >
              Back to Login
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
