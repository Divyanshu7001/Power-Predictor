import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbWashMachine } from "react-icons/tb";

export default function Dashboard() {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    energyUsage: "250 kWh",
    appliences: 10,
  });

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 min-h-screen pt-24">
      <div className="container mx-auto px-4 pb-20 ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl border-orange-500 border "
        >
          <h1 className="text-4xl font-bold text-white mb-6 text-center">
            Your Profile
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaUser className="text-orange-500 text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold text-orange-300">
                    Name
                  </h2>
                  <p className="text-gray-300">{userData.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-orange-500 text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold text-orange-300">
                    Email
                  </h2>
                  <p className="text-gray-300">{userData.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaBolt className="text-orange-500 text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold text-orange-300">
                    Energy Usage
                  </h2>
                  <p className="text-gray-300">{userData.energyUsage}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <TbWashMachine className="text-orange-500 text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold text-orange-300">
                    Energy Usage
                  </h2>
                  <p className="text-gray-300">{userData.appliences}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">
                Quick Actions
              </h2>
              <div className="space-y-4">
                <Link className="block" to="/dashboard/options">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Update Profile
                  </button>
                </Link>
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
                <Link to="/dashboard/analytics" className="block">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                    View Analytics
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
