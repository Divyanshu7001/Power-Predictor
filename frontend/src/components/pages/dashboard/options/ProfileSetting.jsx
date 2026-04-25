import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { Context } from "../../../../main";
export default function ProfileSetting() {
  const { isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(Context);
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProfileUpdate = () => {
    // Logic for updating profile (e.g., API call)
    setMessage("Profile updated successfully!");
  };

  return (
    <section id="profile" className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl border-orange-500 border"
        >
          <h1 className="text-4xl font-bold text-white mb-6 text-center">
            Profile Settings
          </h1>
          {message && (
            <p className="text-green-500 text-center mb-4">{message}</p>
          )}
          <div className="flex items-center space-x-4 mb-4">
            <FaUser className="text-orange-500 text-2xl" />
            <h2 className="text-xl font-semibold text-orange-300">
              Edit Your Profile
            </h2>
          </div>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            value={user.fullName}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded border text-black border-gray-300"
          />
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded border text-black border-gray-300"
          />
          <input
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded border text-black border-gray-300"
          />
          <button
            onClick={handleProfileUpdate}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Update Profile
          </button>
        </motion.div>
      </div>
    </section>
  );
}
