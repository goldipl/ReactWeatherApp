import React from 'react';

const WeatherOutput = (props) => {

  const { cityErr, cityName, cityTemp, cityPressure, cityWind } = props.weather;
  let container = null;


  if (cityName && !cityErr) {
    container = (
        <div className="resultContainer">
          <div className="city">
            <span>City: </span>{`${String(cityName)}`}
          </div>
          <div className="temp"><span>Temp: </span>{`${String(cityTemp)}`} &#176;C</div>
          <div className="pressure"><span>Pressure: </span>{`${String(cityPressure)} hPa`}</div>
          <div className="wind"><span>Wind: </span>{`${String(cityWind)} m/s`}</div>
        </div>
    )
  }


  return (
    <div className="errorContainer">
      {cityErr ? `We haven't ${cityName} in database.` : container}
    </div>
  );
}

export default WeatherOutput;