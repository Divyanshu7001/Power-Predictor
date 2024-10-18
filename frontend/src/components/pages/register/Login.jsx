import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../../main";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const { isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Dashboard");
    }
  }, [isAuthenticated, navigate]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_USER_URI}/loginUser`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      //console.log("Login successful:", response.data);
      toast.success(response.data.message, {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setIsAuthenticated(true);
      setUser(response.data.user);
      navigate("/Dashboard");
    } catch (error) {
      //console.log(error.response);
      //console.log(error.response.data.message);
      const errorMessage = error.response?.data?.message || "An error occurred";
      toast.error(errorMessage, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log("Google login initiated");
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 mt-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Login
            </button>
          </form>
          <div className="mt-6">
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-white text-gray-800 font-bold py-2 px-4 rounded flex items-center justify-center hover:bg-gray-200 transition duration-300"
            >
              <FaGoogle className="mr-2" /> Login with Google
            </button>
          </div>
          <p className="mt-4 text-center text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-orange-500 hover:text-orange-400"
            >
              Register here
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
