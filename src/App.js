import React, { useState } from 'react';
import './App.css';
import SearchSection from './components/SearchSection';
import WeatherOutput from './components/WeatherOutput';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    cityErr: false,
    cityName: "",
    cityTemp: "",
    cityPressure: "",
    cityWind: "",
    cityDesc: "",
    cityDate: "",
  });

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!value.trim()) {
      setWeather(prev => ({
        ...prev,
        cityErr: true,
        cityName: "Please enter a city name"
      }));
      return;
    }

    setLoading(true);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=efa2ef11f117f7485b2fca8e87a3a2f5&units=metric`;

    fetch(API)
      .then(response => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then(data => {
        const time = new Date().toLocaleString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        setWeather({
          cityErr: false,
          cityName: value,
          cityTemp: Math.round(data.main.temp),
          cityPressure: data.main.pressure,
          cityWind: data.wind.speed.toFixed(1),
          cityDesc: data.weather[0].main,
          cityDate: time,
        });
        setValue("");
      })
      .catch(error => {
        console.error(error);
        setWeather(prev => ({
          ...prev,
          cityErr: true,
          cityName: value,
          cityTemp: "",
          cityPressure: "",
          cityWind: "",
          cityDesc: ""
        }));
        setValue("");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`app-wrapper ${isDark ? 'dark' : 'light'}`}>
      <div className="app-container">
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        <SearchSection
          value={value}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          loading={loading}
        />
        <WeatherOutput weather={weather} />
      </div>
    </div>
  );
}

export default App;