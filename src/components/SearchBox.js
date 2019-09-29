import React from "react";
//child components expect props from parent components like this one

const stylex = {
  padding: "10px"
};

const inputStyle = {
  fontSize: "1em",
  padding: "8px",
  textAlign: "center",
  fontFamily: "Titillium Web"
};

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div style={stylex}>
      <input
        id="search-box"
        style={inputStyle}
        aria-label="search heroes"
        type="search"
        placeholder="Search Heroes"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
