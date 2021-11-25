import React from 'react';

const SearchSection = (props) => {
  return (
    <form>
      <input type="text" value={props.cityValue} />
      <button>Search city</button>
    </form>
  );
}

export default SearchSection;