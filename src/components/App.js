import React, { useState } from "react";
import dictionary from "../data/words.json";

const App = () => {
  // state
  const [term, setTerm] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [results, setResults] = useState([
    "Welcome. Search for a bit of text.",
  ]);
  // custom functions
  const reducedList = (arr, _term) => {
    return arr.filter((text) => {
      if (caseSensitive) {
        return text.startsWith(_term);
      }
      return text.toLowerCase().startsWith(_term.toLowerCase()) ? text : "";
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const sortedList = dictionary.sort();
    if (term.trim() !== "") {
      setResults(reducedList(sortedList, term));
    } else {
      setResults(["Results not found..."]);
    }
  };

  const renderResults = () => {
    return results.map((result, index) => {
      return (
        <div key={index} className="item">
          {result}
        </div>
      );
    });
  };

  return (
    <div className="ui container">
      <div className="ui segment" style={{ marginTop: "20px" }}>
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <label>"Dictionary Search"</label>
            <input
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
          <div className="ui toggle checkbox">
            <input
              type="checkbox"
              name="caseType"
              onClick={(e) => setCaseSensitive(e.target.checked)}
            />
            <label>Case Sensitive</label>
          </div>
        </form>
      </div>
      <div className="ui celled list">{renderResults()}</div>
    </div>
  );
};

export default App;
