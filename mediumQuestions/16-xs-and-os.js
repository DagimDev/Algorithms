// Xs and Os, Nobody Knows
// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

// Return a boolean value (true or false).
// Return true if the amount of x's and o's are the same.
// Return false if they aren't the same amount.
// The string can contain any character.
// When "x" and "o" are not in the string, return true.
// Examples
// XO("ooxx") ➞ true

// XO("xooxx") ➞ false

// XO("ooxXm") ➞ true
// // Case insensitive.

// XO("zpzpzpp") ➞ true
// // Returns true if no x and o.

// XO("zzoo") ➞ false
// Notes
// Remember to return true if there aren't any x's or o's.
// Must be case insensitive.

const XO = (str) => {
  let x = 0;
  let o = 0;
  for (const char of str) {
    if (char.toLowerCase() === "x") {
      x++;
    } else if (char.toLowerCase() === "o") {
      o++;
    }
  }
  return x === o ? true : false;
};

// Obtimized solution
const XOS = (str) => {
  let xs = 0;
  let os = 0;
  for (const char of str.toLowerCase()) {
    if (char === "x") xs++;
    else if (char === "o") os++;
  }
  return xs === os;
};
console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));
console.log(XOS("ooxx"));
console.log(XOS("xooxx"));
console.log(XOS("ooxXm"));
console.log(XOS("zpzpzpp"));
console.log(XOS("zzoo"));