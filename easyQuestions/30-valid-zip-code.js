// Valid Zip Code
// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

// Must only contain numbers (no non-digits allowed).
// Must not contain any spaces.
// Must not be greater than 5 digits in length.
// Examples
// isValid("59001") ➞ true

// isValid("853a7") ➞ false

// isValid("732 32") ➞ false

// isValid("393939") ➞ false

// const isValid = (str) => {
//   if (str.length > 5) return false;   bad solution 
//   if (isNaN(str)) return false
//   return true
// };

const isValid = (str) => {
  if (str.length !== 5) return false;
  for (let char of str) {
    if (char < '0' || char > '9') return false;
  }
  return true;
};
console.log(isValid("59001")); // ➞ true
console.log(isValid("853a7")); // ➞ false
console.log(isValid("732 32")); // ➞ false
console.log(isValid("393939")); // ➞ false