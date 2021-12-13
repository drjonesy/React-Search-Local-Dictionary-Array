import React, { useState } from "react";
import SearchBar from "./SearchBar";

const App = () => {
  // hooks
  const [term, setTerm] = useState();
  return (
    <div className="ui container">
      <SearchBar />
    </div>
  );
};

export default App;
