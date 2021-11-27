import React from 'react';

const WeatherOutput = (props) => {

  const { cityName, cityTemp, cityPressure, cityWind } = props.weather;
  return (
    <>
      <div>{`City: ${String(cityName)}`}</div>
      <div>{`Temp: ${String(cityTemp)} *C`}</div>
      <div>{`Pressure: ${String(cityPressure)} hPa`}</div>
      <div>{`Wind: ${String(cityWind)} m/s`}</div>
    </>
  );
}

export default WeatherOutput;