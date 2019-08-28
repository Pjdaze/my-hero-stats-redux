import React from "react";
//child components expect props from parent components like this one
import Button from "../components/Button";

const stylex = {
  padding: "10px"
};

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div style={stylex}>
      <input
        style={{ padding: "10px" }}
        aria-label="search heroes"
        type="search"
        placeholder="search heroes"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
