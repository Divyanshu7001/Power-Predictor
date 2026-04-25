import React from 'react'

export default function HowItWork() {
  const steps = [
    {
      title: "Input Your Data",
      description: "Enter your appliance usage and local weather information."
    },
    {
      title: "AI Analysis",
      description: "Our advanced AI algorithms process your data for accurate predictions."
    },
    {
      title: "Receive Insights",
      description: "Get detailed forecasts and energy-saving recommendations."
    },
    {
      title: "Optimize Usage",
      description: "Apply our suggestions to reduce your power consumption and costs."
    }
  ];

  return (
    <section id='how-it-works' className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="text-orange-400 text-4xl font-bold mb-4">{index + 1}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
}
