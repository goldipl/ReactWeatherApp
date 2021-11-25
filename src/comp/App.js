import React, { Component } from 'react';
import './App.css';
import SearchSection from './SearchSection';
import WeatherOutput from './WeatherOutput';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <SearchSection />
        <WeatherOutput />
      </div>
    );
  }
}

export default App;