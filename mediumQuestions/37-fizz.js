    const Fizzbuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        let value = i;
        if (value % 3 === 0 && value % 5 === 0) {
            console.log(value + ' FizzBuzz');
        } else if (value % 3 === 0) {
            console.log(value + ' Fizz');
        } else if (value % 5 === 0) {
            console.log(value + ' Buzz');
        } else {
            console.log(value);
        }
    }
}
Fizzbuzz(100);

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



const Factorial = (num) => {
  let amz = num;
    for (let a = num - 1; a >= 1; a--) {
      amz *= a
    }
  return amz;
};

const factoraized = Factorial(4);
console.log(factoraized)

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
