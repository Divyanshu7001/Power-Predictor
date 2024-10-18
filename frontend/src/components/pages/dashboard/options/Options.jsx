import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCog, FaBell, FaLock, FaSignOutAlt } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Context } from "../../../../main";
import toast from "react-hot-toast";
import axios from "axios";

export default function Options() {
  const [notifications, setNotifications] = useState(true);
  const { isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/Login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_USER_URI}/logoutUser`,
        {},
        {
          withCredentials: true,
        }
      );
      if (response) {
        setIsAuthenticated(false);
        setUser({});
        toast.success(response.data.message, {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        navigate("/");
      }
    } catch (error) {
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
  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl border-orange-500 border relative "
        >
          <Link
            to="/dashboard"
            className="absolute right-10 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            dashboard
          </Link>
          <h1 className="text-4xl font-bold text-white mb-6 text-center">
            Dashboard Options
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaCog className="text-orange-500 text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold text-orange-300">
                    Account Settings
                  </h2>
                  <Link
                    to="/dashboard/options/profile"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Edit Profile
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaBell className="text-orange-500 text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold text-orange-300">
                    Notifications
                  </h2>
                  <button
                    onClick={toggleNotifications}
                    className={`text-gray-300 hover:text-orange-400 transition-colors ${
                      notifications ? "font-bold" : ""
                    }`}
                  >
                    {notifications ? "Enabled" : "Disabled"}
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaLock className="text-orange-500 text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold text-orange-300">
                    Security
                  </h2>
                  <Link
                    to="/dashboard/options/security"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Change Password
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">
                Quick Actions
              </h2>
              <div className="space-y-4">
                <Link to="/dashboard/predictions" className="block">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                    View Predictions
                  </button>
                </Link>
                <Link to="/dashboard/tips" className="block">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Energy Saving Tips
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center"
                >
                  <FaSignOutAlt className="mr-2" /> Log Out
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Outlet />
    </section>
  );
}
