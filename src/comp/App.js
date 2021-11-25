import React, { Component } from 'react';
import './App.css';
import SearchSection from './SearchSection';
import WeatherOutput from './WeatherOutput';

class App extends Component {

  state = {
    cityValue: "",
  }

  render() {
    return (
      <div className="App" >
        <SearchSection cityValue={this.state.cityValue} />
        <WeatherOutput />
      </div>
    );
  }
}

export default App;