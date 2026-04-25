import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaLightbulb, FaTv, FaFan, FaWater } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Prediction = () => {
  const [appliances, setAppliances] = useState({
    lights: 5,
    tv: 1,
    ac: 1,
    waterHeater: 1,
  });

  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppliances(prev => ({ ...prev, [name]: parseInt(value) }));
  };

  const calculatePrediction = () => {
    // This is a simplified prediction model. In a real-world scenario,
    // you'd use more complex algorithms and consider more factors.
    const basePrediction = 100; // Base energy usage in kWh
    const lightUsage = appliances.lights * 0.06 * 5 * 30; // Assuming 60W bulbs used 5 hours a day
    const tvUsage = appliances.tv * 0.1 * 4 * 30; // Assuming 100W TV used 4 hours a day
    const acUsage = appliances.ac * 1.5 * 8 * 30; // Assuming 1500W AC used 8 hours a day
    const waterHeaterUsage = appliances.waterHeater * 4.5 * 1 * 30; // Assuming 4500W water heater used 1 hour a day

    const totalPrediction = basePrediction + lightUsage + tvUsage + acUsage + waterHeaterUsage;
    setPrediction(Math.round(totalPrediction));
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl border-orange-500 border relative"
        >
            <Link to="/dashboard" className="absolute right-10 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300">dashboard</Link>
          <h1 className="text-4xl font-bold text-white mb-6 text-center">Energy Usage Prediction</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaLightbulb className="text-orange-500 text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold text-orange-300">Lights</h2>
                  <input
                    type="number"
                    name="lights"
                    value={appliances.lights}
                    onChange={handleInputChange}
                    className="bg-gray-700 text-white px-3 py-2 rounded"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaTv className="text-orange-500 text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold text-orange-300">TV</h2>
                  <input
                    type="number"
                    name="tv"
                    value={appliances.tv}
                    onChange={handleInputChange}
                    className="bg-gray-700 text-white px-3 py-2 rounded"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaFan className="text-orange-500 text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold text-orange-300">AC</h2>
                  <input
                    type="number"
                    name="ac"
                    value={appliances.ac}
                    onChange={handleInputChange}
                    className="bg-gray-700 text-white px-3 py-2 rounded"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaWater className="text-orange-500 text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold text-orange-300">Water Heater</h2>
                  <input
                    type="number"
                    name="waterHeater"
                    value={appliances.waterHeater}
                    onChange={handleInputChange}
                    className="bg-gray-700 text-white px-3 py-2 rounded"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Prediction</h2>
              <button 
                onClick={calculatePrediction}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300 mb-4"
              >
                Calculate Prediction
              </button>
              {prediction && (
                <div className="text-center">
                  <FaBolt className="text-orange-500 text-4xl mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">
                    Predicted Monthly Usage:
                  </p>
                  <p className="text-3xl font-bold text-orange-400">
                    {prediction} kWh
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Prediction;
