// Generate Fibonacci Sequence up to n Terms
// Input: 5 → Output: [0, 1, 1, 2, 3]

const fibonacciSequence = (fib) => {
if (fib < 0) return "not a fibonacci sequence"
  let fibonacci = [0, 1];
  for (let i = 2; i < fib; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
};

console.log(fibonacciSequence(5));
console.log(fibonacciSequence(-5));
console.log(fibonacciSequence(0));
