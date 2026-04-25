import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Tip() {
  const [currentTip, setCurrentTip] = useState('');

  const tips = [
    "Turn off lights when you leave a room.",
    "Use energy-efficient LED bulbs instead of incandescent ones.",
    "Unplug electronics and appliances when not in use to avoid phantom energy consumption.",
    "Use natural light when possible and avoid turning on unnecessary lights.",
    "Set your thermostat a few degrees lower in winter and higher in summer.",
    "Use a programmable thermostat to automatically adjust temperature when you're asleep or away.",
    "Seal air leaks around windows and doors to improve insulation.",
    "Use cold water for laundry whenever possible.",
    "Run full loads in your dishwasher and washing machine.",
    "Replace old appliances with energy-efficient models."
  ];

  const getRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setCurrentTip(tips[randomIndex]);
  };

  return (
    <section className=" bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 min-h-screen pt-24">
      <div className="container mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl border-orange-500 border relative"
        >
        <Link to="/dashboard" className="absolute right-10 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300">dashboard</Link>
          <h1 className="text-4xl font-bold text-white mb-6 text-center">Energy Saving Tips</h1>
          
          <div className="bg-gray-700 p-6 rounded-lg mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <FaLightbulb className="text-orange-500 text-3xl" />
              <h2 className="text-2xl font-semibold text-orange-300">Tip of the Day</h2>
            </div>
            <p className="text-gray-300 text-lg mb-4">{currentTip || "Click the button to get a tip!"}</p>
            <button 
              onClick={getRandomTip}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Get New Tip
            </button>
          </div>
          
          <p className="text-gray-300 text-center">
            Implementing these tips can help you reduce your energy consumption and lower your electricity bills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
