import React from 'react';

const WeatherOutput = ({ weather }) => {
  const { cityErr, cityName, cityTemp, cityPressure, cityWind, cityDesc, cityDate } = weather;

  if (cityErr) {
    return (
      <div className="weather-output error-state">
        <div className="error-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 8v4M12 16h.01"></path>
          </svg>
        </div>
        <p className="error-message">
          We couldn't find <strong>{cityName}</strong>. Please check the spelling and try again.
        </p>
      </div>
    );
  }

  if (!cityName) {
    return (
      <div className="weather-output empty-state">
        <div className="empty-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
          </svg>
        </div>
        <p className="empty-text">Search for a city to see the weather</p>
      </div>
    );
  }

  return (
    <div className="weather-output success-state">
      <div className="weather-header">
        <div className="location-info">
          <h2 className="city-name">{cityName}</h2>
          <p className="weather-time">{cityDate}</p>
        </div>
        <div className="weather-description">{cityDesc}</div>
      </div>

      <div className="weather-grid">
        <div className="weather-card primary">
          <div className="card-icon temp-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20m0-20c-3.314 0-6 2.686-6 6 0 4 6 10 6 10s6-6 6-10c0-3.314-2.686-6-6-6z"></path>
            </svg>
          </div>
          <div className="card-content">
            <p className="card-label">Temperature</p>
            <p className="card-value">{cityTemp}°C</p>
          </div>
        </div>

        <div className="weather-card">
          <div className="card-icon pressure-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M12 7v5l3 3"></path>
              <path d="M8.56 8.56l-2.8-2.8M15.44 8.56l2.8-2.8"></path>
            </svg>
          </div>
          <div className="card-content">
            <p className="card-label">Pressure</p>
            <p className="card-value">{cityPressure} hPa</p>
          </div>
        </div>

        <div className="weather-card">
          <div className="card-icon wind-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
            </svg>
          </div>
          <div className="card-content">
            <p className="card-label">Wind Speed</p>
            <p className="card-value">{cityWind} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherOutput;