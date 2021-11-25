import React from 'react';

const SearchSection = (props) => {
  return (
    <form onSubmit={props.citySubmit}>
      <input type="text"
        value={props.value}
        onChange={props.cityChange}
        placeholder="Type City..."
      />
      <button>Search city</button>
    </form>
  );
}

export default SearchSection;