import React from 'react'

export default function Feature() {
  return (
    <section id='features' className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-400 mb-8 text-center">Our Objective</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              At PowerPredict, we empower you to take control of your energy consumption. Our advanced AI-driven platform analyzes your appliance usage patterns and local weather data to provide accurate power usage predictions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              By understanding your energy needs, you can optimize your usage, reduce costs, and contribute to a more sustainable future.
            </p>
          </div>
          <div className="space-y-8">
            {[
              { title: "Personalized Insights", description: "Get tailored recommendations based on your unique usage patterns." },
              { title: "Cost Savings", description: "Identify energy-hungry appliances and optimize your usage to reduce bills." },
              { title: "Environmental Impact", description: "Minimize your carbon footprint by making informed energy decisions." }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold text-orange-300 mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
