import React, { Component } from 'react';
import './App.css';
import SearchSection from './SearchSection';
import WeatherOutput from './WeatherOutput';

class App extends Component {

  state = {
    value: "",
    cityDate: "",
    cityName: "",
    cityTemp: "",
    cityPressure: "",
    cityWind: "",
    cityErr: false,
  }

  handleInputCity = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("event confirmation");

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=efa2ef11f117f7485b2fca8e87a3a2f5&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Something goes wrong")
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString();
        this.setState({
          cityErr: false,
          cityDate: time,
          cityName: this.state.value,
          cityTemp: data.main.temp,
          cityPressure: data.main.pressure,
          cityWind: data.wind.speed,
        })
      })
      .catch(cityErr => {
        console.log(cityErr);
        this.setState({
          cityErr: true,
          cityName: this.state.value,
        })
      })
  }

  render() {
    return (
      <div className="App" >
        <SearchSection
          value={this.state.value}
          cityChange={this.handleInputCity}
          citySubmit={this.handleSubmit}
        />
        <WeatherOutput weather={this.state} />
      </div>
    );
  }
}

export default App;