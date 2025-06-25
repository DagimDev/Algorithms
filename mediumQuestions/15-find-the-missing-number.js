// Find the Missing Number
// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

// Examples
// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5

// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10

// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
// Notes
// The array of numbers will be unsorted (not in order).
// Only one number will be missing.

const missingNum = (arr) => {
  let missing = 0;
  for (let i = 1; i <= 10; i++) {
    if (!arr.includes(i)) {
      missing = i;
    }
  }
  return missing;
};

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));
