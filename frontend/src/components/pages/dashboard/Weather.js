import React from 'react'
import axios from 'axios';
export default async function Weather(params,res) {
    console.log(params);
    const city=params;
    if (!city) {
        return res.status(400).json({ error: "City name is required" });
}

try {
  // Make a request to the WeatherAPI
  const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json`,
    {
      params: {
        key: import.meta.env.VITE_API_KEY,
        q: params,
        days: 7, // You can adjust the number of forecast days
      },
    }
  );

  // Return the weather data
  return response.data;
} catch (error) {
  console.error(error);
  //res.status(500).json({ error: "Unable to fetch weather data" });
}

}