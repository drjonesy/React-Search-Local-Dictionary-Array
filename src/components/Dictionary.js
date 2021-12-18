import data from "../data/words.json";

const Dictionary = (character) => {
  const alphabet = {};
  let words = [];
  let letterKey = "";

  for (const text of data.sort()) {
    if (letterKey !== text[0].toLowerCase()) {
      letterKey = text[0]; // assign letterKey
      words = []; // clear words list
    }
    // check if text is not in words list
    // if indexOf returns -1 THEN word not found in list
    if (letterKey === text[0] && words.indexOf(text) === -1) {
      words.push(text);
      alphabet[letterKey] = words; // reassign key:value list each time it changes
    }
  }
  return alphabet;
};

export default Dictionary;
