// Regex Series: Even Number?
// Write a regular expression that matches only an even number. Numbers will be presented as strings.

// Examples
// "2341" ➞ false

// "132" ➞ true

// "29" ➞ false

// "5578" ➞ true
// Notes
// This challenge is designed for{ RegEx only.
const isEvenNumberRegex = (str) => {
  return /^-?\d*[02468]$/.test(str);
};
console.log(isEvenNumberRegex("2341"));
console.log(isEvenNumberRegex("132"));
console.log(isEvenNumberRegex("29"));
console.log(isEvenNumberRegex("5578"));
