import React from 'react';
import './App.css';
import SearchSection from './SearchSection';
import WeatherOutput from './WeatherOutput';

function App() {
  return (
    <div className="App" >
      <SearchSection />
      <WeatherOutput />
    </div>
  );
}

export default App;