// Multiplying Numbers in a String
// Given a string of numbers separated by a comma and space, return the product of the numbers.

// Examples
// multiplyNums("2, 3") ➞ 6

// multiplyNums("1, 2, 3, 4") ➞ 24

// multiplyNums("54, 75, 453, 0") ➞ 0

// multiplyNums("10, -2") ➞ -20
// Notes
// Bonus: Try to complete this challenge in one line!

const multiplyNums = (str) => {
  let temp = str.split(",").map(Number);
  let sum = 1;
  for (let i = 0; i < temp.length; i++) {
    sum *= temp[i];
  }
  return sum;
};

// Optimized Solution (One-Liner)
const multiplyNums1 = (str) => str.split(", ").map(Number).reduce((a, b) => a * b, 1);

console.log(multiplyNums("2, 3"));
console.log(multiplyNums("1, 2, 3, 4"));
console.log(multiplyNums("54, 75, 453, 0"));
console.log(multiplyNums("10, -2"));
console.log(multiplyNums1("2, 3"));
console.log(multiplyNums1("1, 2, 3, 4"));
console.log(multiplyNums1("54, 75, 453, 0"));
console.log(multiplyNums1("10, -2"));
