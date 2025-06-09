// Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]
// Notes
// All test arrays will have at least one element and are valid.

const minMax = (arr) => {
  let min = Infinity
  let max = -Infinity

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
    if (arr[i] < min) min = arr[i]
  }

  return [min, max]

};

// const minMax = arr => [Math.min(...arr), Math.max(...arr)];

console.log(minMax([10, 20, -30, 5, 40]));
console.log(minMax([2]))
