import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

export default function Analytics() {
  // Mock data - replace with actual data from your API or state management
  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Estimated Usage (kWh)',
        data: [300, 280, 260, 240, 220, 200, 220, 240, 260, 280, 300, 320],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Usage (kWh)',
        data: [30, 35, 28, 32, 38, 40, 35],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Temperature (°C)',
        data: [22, 24, 23, 25, 26, 28, 27],
        borderColor: 'rgb(255, 159, 64)',
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };

  const weatherData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Humidity (%)',
        data: [60, 65, 58, 62, 70, 68, 63],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Wind Speed (km/h)',
        data: [10, 12, 8, 15, 11, 9, 13],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
      },
    ],
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 min-h-screen pt-24 ">
      <div className="container mx-auto px-4 relative">
      <Link to="/dashboard" className="absolute right-5  bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300">dashboard</Link>
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Energy Analytics</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl border-orange-500 border">
            <h2 className="text-2xl font-semibold text-orange-300 mb-4">Estimated Usage for Next 12 Months</h2>
            <Line data={monthlyData} options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Monthly Energy Usage Forecast',
                },
              },
            }} />
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl border-orange-500 border">
            <h2 className="text-2xl font-semibold text-orange-300 mb-4">Next 7 Days Usage and Temperature</h2>
            <Line data={weeklyData} options={{
              responsive: true,
              interaction: {
                mode: 'index',
                intersect: false,
              },
              stacked: false,
              plugins: {
                title: {
                  display: true,
                  text: 'Weekly Usage and Temperature',
                },
              },
              scales: {
                y: {
                  type: 'linear',
                  display: true,
                  position: 'left',
                },
                y1: {
                  type: 'linear',
                  display: true,
                  position: 'right',
                  grid: {
                    drawOnChartArea: false,
                  },
                },
              },
            }} />
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl md:col-span-2 border-orange-500 border mb-10">
            <h2 className="text-2xl font-semibold text-orange-300 mb-4">Other Weather Factors</h2>
            <Bar data={weatherData} options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Weekly Weather Factors',
                },
              },
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
