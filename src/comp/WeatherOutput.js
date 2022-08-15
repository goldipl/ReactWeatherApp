import React from 'react';

const WeatherOutput = (props) => {

  const { cityErr, cityName, cityTemp, cityPressure, cityWind } = props.weather;
  let container = null;


  if (cityName && !cityErr) {
    container = (
        <div className="resultContainer">
          <div className="city"><strong>City: </strong>{String(cityName)}</div>
          <div className="temp"><strong>Temp: </strong>{`${String(cityTemp)}`} &#176;C</div>
          <div className="pressure"><strong>Pressure: </strong>{`${String(cityPressure)} hPa`}</div>
          <div className="wind"><strong>Wind: </strong>{`${String(cityWind)} m/s`}</div>
        </div>
    )
  }


  return (
    <div className="resultContainer">
      {cityErr ? `We haven't ${cityName} in database.` : container}
    </div>
  );
}

export default WeatherOutput;