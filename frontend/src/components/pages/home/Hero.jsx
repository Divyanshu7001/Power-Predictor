import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 min-h-screen"
    >
      <div className="container mx-auto px-4 pt-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Predict Your Power Usage with Precision
          </h1>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            Harness the power of AI to forecast your electricity consumption
            based on weather patterns and appliance usage.
          </p>
          <Link
            to="/dashboard/predictions"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Start Predicting Now
          </Link>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Weather Integration",
              description:
                "Incorporate real-time weather data for accurate predictions.",
            },
            {
              title: "Appliance Analysis",
              description:
                "Track and analyze the power consumption of your devices.",
            },
            {
              title: "AI-Powered Insights",
              description:
                "Get intelligent recommendations to optimize your energy use.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-xl border-orange-500 border"
            >
              <h3 className="text-xl font-semibold text-orange-300 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
