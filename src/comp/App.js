import React, { Component } from 'react';
import './App.css';
import SearchSection from './SearchSection';
import WeatherOutput from './WeatherOutput';

class App extends Component {

  state = {
    cityValue: "",
    cityDate: "",
    cityName: "",
    citySunrise: "",
    citySunset: "",
    cityTemp: "",
    cityPressure: "",
    cityWind: "",
    cityErr: "",
  }

  handleInputCity = (e) => {
    this.setState({
      cityValue: e.target.cityValue,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("event confirmation");

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityValue}&APPID=efa2ef11f117f7485b2fca8e87a3a2f5&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Something goes wrong")
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App" >
        <SearchSection
          cityValue={this.state.cityValue}
          cityChange={this.handleInputCity}
          citySubmit={this.handleSubmit}
        />
        <WeatherOutput />
      </div>
    );
  }
}

export default App;