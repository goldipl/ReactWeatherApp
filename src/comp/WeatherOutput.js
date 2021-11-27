import React from 'react';

const WeatherOutput = (props) => {

  const { cityErr, cityName, cityTemp, cityPressure, cityWind } = props.weather;
  let container = null;


  if (cityName && !cityErr) {
    container = (
      <>
        <div className="resultContainer">
          <div><strong>City: </strong>{String(cityName)}</div>
          <div><strong>Temp: </strong>{`${String(cityTemp)}`} &#176;C</div>
          <div><strong>Pressure: </strong>{`${String(cityPressure)} hPa`}</div>
          <div><strong>Wind: </strong>{`${String(cityWind)} m/s`}</div>
        </div>
      </>
    )
  }


  return (
    <div className="resultContainer">
      {cityErr ? `We haven't ${cityName} in database.` : container}
    </div>
  );
}

export default WeatherOutput;