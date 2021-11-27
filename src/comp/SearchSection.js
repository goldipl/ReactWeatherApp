import React from 'react';

const SearchSection = (props) => {
  return (
    <>
      <h2>Weather App</h2>
      <form onSubmit={props.citySubmit}>
        <input type="text"
          value={props.value}
          onChange={props.cityChange}
          placeholder="Type City..."
        />
        <button>Search city</button>
      </form>
    </>
  );
}

export default SearchSection;