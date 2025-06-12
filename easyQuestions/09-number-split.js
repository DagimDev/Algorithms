// Number Split
// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// Examples
// numberSplit(4) ➞ [2, 2]

// numberSplit(10) ➞ [5, 5]

// numberSplit(11) ➞ [5, 6]

// numberSplit(-9) ➞ [-5, -4]
// Notes
// All numbers will be integers.
// You can expect negative numbers too.

// my solution 
const numberSplit = (num) => {
    return [Math.floor(num / 2) , Math.ceil(num / 2)]
}

console.log(numberSplit(4))
console.log(numberSplit(10))
console.log(numberSplit(11))
console.log(numberSplit(-9))


// Optimized Solution Code
const numberSplit1 = (num) => {
    const half = num / 2;
    return [Math.floor(half), Math.ceil(half)];
};

console.log(numberSplit1(4));   // Output: [2, 2]
console.log(numberSplit1(10));  // Output: [5, 5]
console.log(numberSplit1(11));  // Output: [5, 6]
console.log(numberSplit1(-9));  // Output: [-5, -4]