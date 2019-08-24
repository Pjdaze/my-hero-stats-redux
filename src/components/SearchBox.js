import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        aria-label="search heroes"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search heroes"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
