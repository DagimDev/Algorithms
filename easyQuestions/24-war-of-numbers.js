// War of Numbers
// There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.

// Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.

// Examples
// warOfNumbers([2, 8, 7, 5]) ➞ 2
// // 2 + 8 = 10
// // 7 + 5 = 12
// // 12 is larger than 10
// // So we return 12 - 10 = 2

// warOfNumbers([12, 90, 75]) ➞ 27

// warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]) ➞ 168
// Notes
// The given array contains only positive integers.

const warOfNumbers = (arr) => {
  let even = 0;
  let odd = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      even += num;
    } else {
      odd += num;
    }
  }

  // return Math.max(even, odd) - Math.min(even, odd);
  return Math.abs(even - odd)

};
console.log(warOfNumbers([2, 8, 7, 5]));
console.log(warOfNumbers([12, 90, 75]));
console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]));