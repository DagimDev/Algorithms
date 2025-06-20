// Count Ones in a 2D Array
// Create a function to count the number of 1s in a 2D array.

// Examples
// countOnes([
//   [1, 0],
//   [0, 0]
// ]) ➞ 1

// countOnes([
//   [1, 1, 1],
//   [0, 0, 1],
//   [1, 1, 1]
// ]) ➞ 7

// countOnes([
//   [1, 2, 3],
//   [0, 2, 1],
//   [5, 7, 33]
// ]) ➞ 2
// Notes
// N/A


// My solution
const countOnes = (arr) => {
  const array = arr.flat();
  let countOnes = 0;
  for (const Ones of array) {
    if (Ones === 1) {
      countOnes++;
    }
  }
  return countOnes;
};
console.log(
  countOnes([
    [1, 0],
    [0, 0],
  ])
);
console.log(
  countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ])
);
console.log(
  countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33],
  ])
);
