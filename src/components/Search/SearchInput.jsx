import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    onSearch(input);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search country"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full pl-10 p-2 shadow-md rounded-md dark:bg-gray-700"
      />
    </form>
  );
};

export default SearchInput;