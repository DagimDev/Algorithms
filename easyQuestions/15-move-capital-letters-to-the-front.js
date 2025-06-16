// Move Capital Letters to the Front

// Create a function that moves all capital letters to the front of a word.

// Examples
// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"
// Notes
// Keep the original relative order of the upper and lower case letters the same.


// My solution
const capToFront = (str) => {
  const set = new Set([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]);
  let capps = "";
  let small = "";
  for (const char of str) {
    if (set.has(char)) {
      capps += char
    } else {
      small += char;
    }
  }
  return capps + small
};

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"))

// Optimized Solution
// const capToFront = (str) => {
//   let capitals = '';
//   let lowers = '';
//   for (const char of str) {
//     if (char >= 'A' && char <= 'Z') {
//       capitals += char;
//     } else {
//       lowers += char;
//     }
//   }
//   return capitals + lowers;
// };
