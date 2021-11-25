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