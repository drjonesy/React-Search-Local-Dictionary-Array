import React, { useState, useEffect } from "react";
import words from "../data/words.json";

const SearchBar = () => {
  const [term, setTerm] = useState("a");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]); // initial state is empty array

  // use effect to apply debounced state
  // helps to reduce requests
  // render atleast once
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000); // wait 1 second before

    return () => {
      clearTimeout(timerId);
    };
  }, [term]); // re-render when term changes

  // search word list and reduce results to term
  useEffect(() => {
    // filter results
    // setDebouncedTerm
    console.log(debouncedTerm);
    const search = () => {
      const filteredData = words.filter((word) => {
        return word.startsWith(debouncedTerm);
      });
      setResults(filteredData); // set results
    };
    search(); // execute search
  }, [debouncedTerm]); // re-render when debouncedTerm changes

  const renderedResults = results.map((result, index) => {
    // need a key for each list element
    return (
      <div key={index} className="item">
        {result}
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search Dictionary</label>
          <input
            className="input"
            value={term} // two way binding
            onChange={(e) => setTerm(e.target.value)} // grab the event from the input field
          ></input>
        </div>
        {/* display results */}
        <div className="ui celled list">{renderedResults}</div>
      </div>
    </div>
  );
}; // End SearchBar

export default SearchBar;
