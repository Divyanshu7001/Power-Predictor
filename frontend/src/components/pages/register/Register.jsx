import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../../main";
import toast from "react-hot-toast";
import axios from "axios";
import Otp from "./Otp";
export default function Register() {
  const { isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(Context);
  const [otpstate, setotpstate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Dashboard");
    }
  }, [isAuthenticated, navigate]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
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
      setotpstate(true);
      localStorage.setItem("email", formData.email);
      console.log("Registration submitted:", formData);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_USER_URI}/send-otp`,
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

  const handleGoogleRegister = () => {
    // Handle Google registration logic here
    console.log("Google registration initiated");
  };

  return (
    <>
      {otpstate ? (
        <Otp />
      ) : (
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8 mt-10">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold text-center text-white mb-6">
                Register
              </h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your Full name"
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

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
                    placeholder="Enter your email address"
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Send Otp
                </button>
              </form>
              <div className="mt-6">
                <button
                  onClick={handleGoogleRegister}
                  className="w-full bg-white text-gray-800 font-bold py-2 px-4 rounded flex items-center justify-center hover:bg-gray-200 transition duration-300"
                >
                  <FaGoogle className="mr-2" /> Register with Google
                </button>
              </div>
              <p className="mt-4 text-center text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-orange-500 hover:text-orange-400"
                >
                  Login here
                </Link>
              </p>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
