// Does a Number Exist?
// Create a function which validates whether a given number exists, and could represent a real life quantity. Inputs will be given as a string.

// Examples
// validStrNumber("3.2") ➞ true

// validStrNumber("324") ➞ true

// validStrNumber("54..4") ➞ false

// validStrNumber("number") ➞ false
// Notes
// Accept numbers such as .5 and 0003.

const validStrNumber = (str) => {
  const num = Number(str);
  const wow =
    str === "" || str === " "
      ? false
      : str === Infinity || str === -Infinity
      ? false
      : typeof str === "boolean"
      ? false
      : typeof num === "number" && Number.isFinite(num);
  return wow;
};

console.log(validStrNumber("55"));
console.log(validStrNumber("5..54"));
console.log(validStrNumber("number"));
console.log(validStrNumber(true));
console.log(validStrNumber(""));
console.log(validStrNumber(" "));
console.log(validStrNumber(" 02.3"));
