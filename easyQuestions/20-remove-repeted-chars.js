// Remove Repeated Characters
// Create a function that will remove any repeated character(s) in a word passed to the function. Not just consecutive characters, but characters repeating anywhere in the input.

// Examples
// unrepeated("hello") ➞ "helo"

// unrepeated("aaaaa") ➞ "a"

// unrepeated("WWE!!!") ➞ "WE!"

// unrepeated("call 911") ➞ "cal 91"

// My solution
// const unrepeated = (str) => {
//   const removed = new Set(str);
//   return [...removed].join("");
// };

const unrepeated = (str) => {
  const seen = new Set();
  let result = "";
  for (const char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }
  return result;
};
console.log(unrepeated("hello"));
console.log(unrepeated("aaaaa"));
console.log(unrepeated("WWE!!!"));
console.log(unrepeated("call 911"));
