import React from 'react';

const WeatherOutput = (props) => {

  const { cityErr, cityName, cityTemp, cityPressure, cityWind } = props.weather;
  let container = null;


  if (cityName && !cityErr) {
    container = (
      <>
        <div clasName="resultContainer">
          <div><strong>City: </strong>{String(cityName)}</div>
          <div><strong>Temp: </strong>{`${String(cityTemp)} *C`}</div>
          <div><strong>Pressure: </strong>{`${String(cityPressure)} hPa`}</div>
          <div><strong>Wind: </strong>{`${String(cityWind)} m/s`}</div>
        </div>
      </>
    )
  }


  return (
    <div clasName="resultContainer">
      {cityErr ? `We haven't ${cityName} in database.` : container}
    </div>
  );
}

export default WeatherOutput;