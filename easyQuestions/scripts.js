console.log("Easy Algortithm Questions");

// check if the array of the numbers are eveb or odd
function EvenOdd(p) {
  let posative = p;
  for (u = 0; u < posative.length; u++) {
    if (posative[u] % 2 === 0) {
      console.log("Is Even");
    } else {
      console.log("Is Odd");
    }
  }
  return posative;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const check = EvenOdd(array);
console.log(array);

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the
// number you passed to the function. For example, if the input is 4 then your function should
// return 10 because 1 + 2 + 3 + 4 = 10.
function addUp(num) {
  let int = 0;
  for (i = 0; i <= num; i++) {
    int += i;
  }
  return int;
}

console.log(addUp(4));

const MaxValue = (a) => {
  let max = [0];
  for (i = 0; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
    }
  }
  return max;
};

const yarra = [1000, 22, 33000, 4, 5, 8, 900];
const maximum = MaxValue(yarra);
console.log(maximum);

// 13. Sum of Even Numbers in Array
const SumOfEvennumbers = (h) => {
  let sum = 0;
  for (j = 0; j < h.length; j++) {
    if (h[j] % 2 === 0) {
      sum += h[j];
    }
  }
  return sum;
};

console.log(SumOfEvennumbers([1, 2, 3, 4, 5, 6, 88, 98, 100, 2]));

// Capitalize First Letter
const sdd = "hello";
let you = "";
for (a = 0; a < sdd.length; a++) {
  if (sdd[a] == sdd[0]) {
    you = sdd[0].toUpperCase();
  } else {
    you += sdd[a];
  }
  // you = sdd[0].toUpperCase()
}
console.log(you);

// Find minumum value from the array
const input = [1000, 4, -4, 44, 99, 35, 22, 555];
let min = 0;
for (m = 0; m < input.length; m++) {
  if (min < input[m]) {
    min = min;
  } else {
    min = input[m];
  }
}
console.log(min);

// Calculate Power (x^n) without using Math.pow
// Input: 2, 3 → Output: 8

const power = (x, y) => {
  let box = 1;
  for (i = 0; i < y; i++) {
    box *= x;
  }
  return box;
};
console.log(power(3, 3));

// Calculate Power (x^n) using Math.pow

const _a = 4;
const _b = 3;
const _pow = Math.pow(_a, _b)
console.log(_pow)

// Generate Fibonacci Sequence up to n Terms
// Input: 5 → Output: [0, 1, 1, 2, 3]

function Fibonacci(x) {
  let ressult = [0, 1];
  for (c = 2; c < x; c++) {
    ressult[c] = ressult[c - 1] + ressult[c - 2];
  }
  return ressult;
}
console.log(Fibonacci(5));