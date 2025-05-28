console.log("Test");

// Two Sum
// Given an array of integers and a target number, return the indices of the two numbers that add up to
// the target.
// Example: twoSum([2, 7, 11, 15], 9) → [0, 1]

const twoSum = (arr, target) => {
  // let index = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
        //  index.push(i, j)
      }
    }
  }
  return [];
};

const array = twoSum([2, 7, 11, 15], 9);
console.log(array);

// Factorial of a Number
// Write a recursive function to compute the factorial of a number.
// Example: factorial(5) → 120 (5 × 4 × 3 × 2 × 1)

const Factorial = (n) => {
  if (n === 1) return 1; // base case
  return n * Factorial(n - 1); // recursive case
};

console.log(Factorial(4));

// const Factorial = (num) => {
//   let amz = num;
//     for (let a = num - 1; a >= 1; a--) {
//       amz *= a
//     }
//   return amz;
// };

// const factoraized = Factorial(4);
// console.log(factoraized)

// Fibonacci Sequence
// Return the nth number in the Fibonacci sequence (using recursion or iteration).
// Example: fibonacci(6) → 8 (0, 1, 1, 2, 3, 5, 8)

const FibonacciSequence = (x) => {
  let fib = [0, 1];
  for (let i = 1; i <= x; i++) {
    fib.push(fib[i] + fib[i - 1]);
  }
  // fib.push(fib[0] + fib[1]);
  // console.log(typeof fib)
  return fib;
};

const isSequence = FibonacciSequence(5);
console.log(isSequence);
