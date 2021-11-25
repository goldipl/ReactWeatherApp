import React from 'react';

const SearchSection = (props) => {
  return (
    <form onSubmit={props.citySubmit}>
      <input type="text"
        value={props.cityValue}
        onChange={props.cityChange}
        placeholder="Type City..."
      />
      <button>Search city</button>
    </form>
  );
}

export default SearchSection;