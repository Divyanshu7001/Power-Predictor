import React from 'react'
import { motion } from 'framer-motion'
import { FaBolt, FaChartLine, FaCloudSun, FaMobileAlt, FaPiggyBank } from 'react-icons/fa'

const benefits = [
  { icon: <FaBolt />, text: "Accurate power usage predictions" },
  { icon: <FaChartLine />, text: "Personalized energy-saving recommendations" },
  { icon: <FaCloudSun />, text: "Integration with weather forecasts" },
  { icon: <FaMobileAlt />, text: "Easy-to-use interface" },
  { icon: <FaPiggyBank />, text: "Potential for significant cost savings" }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
}

export default function About() {
  return (
    <section id='about' className="bg-gradient-to-br from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Revolutionizing Power Prediction
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300"
          >
            <p className="mb-6 text-lg leading-relaxed">
              Our cutting-edge AI-powered service transforms the way you understand and manage your electricity consumption. By seamlessly integrating your appliance usage patterns with real-time weather data, we deliver pinpoint accuracy in forecasting your power usage.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're committed to reducing your carbon footprint, aiming to slash your energy bills, or simply curious about your power consumption habits, our innovative platform provides you with the insights and tools needed to make impactful, informed decisions.
            </p>
          </motion.div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-gray-300"
          >
            <h3 className="text-2xl font-semibold text-orange-400 mb-6">Empower Your Energy Management:</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <span className="text-orange-500 text-xl">{benefit.icon}</span>
                  <span>{benefit.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
 