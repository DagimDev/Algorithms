// Capitalize the First Letter of Each Word
// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

// Examples
// makeTitle("This is a title") ➞ "This Is A Title"

// makeTitle("capitalize every word") ➞ "Capitalize Every Word"

// makeTitle("I Like Pizza") ➞ "I Like Pizza"

// makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
// Notes
// You can expect a valid string for each test case.
// Some words may contain more than one uppercase letter (see example #4).
const makeTitle = (str) => {
  const arrayOfStrings = str.split(/\s/g);
  let res = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    res.push(arrayOfStrings[i][0].toUpperCase() + arrayOfStrings[i].slice(1))
  }
  return res.join(" ")
};

console.log(makeTitle("This is a title"));