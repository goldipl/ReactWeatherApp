import React, { Component } from 'react';
import './App.css';
import SearchSection from './SearchSection';
import WeatherOutput from './WeatherOutput';

class App extends Component {

  state = {
    cityValue: "",
  }

  handleInputCity = (e) => {
    this.setState({
      cityValue: e.target.cityValue,
    })
  }

  render() {
    return (
      <div className="App" >
        <SearchSection
          cityValue={this.state.cityValue}
          cityChange={this.handleInputCity}
        />
        <WeatherOutput />
      </div>
    );
  }
}

export default App;