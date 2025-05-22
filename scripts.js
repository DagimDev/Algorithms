console.log("Algorithm Practice");

// Question
// #3. FizzBuzz Problem: Write a function that prints the numbers from 1 to 100. But for
// multiples of three, print "Fizz" instead of the number, and for the multiples of five,
// print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

//     const Fizzbuzz = (num) => {
//     for (let i = 1; i <= num; i++) {
//         let value = i;
//         if (value % 3 === 0 && value % 5 === 0) {
//             console.log(value + ' FizzBuzz');
//         } else if (value % 3 === 0) {
//             console.log(value + ' Fizz');
//         } else if (value % 5 === 0) {
//             console.log(value + ' Buzz');
//         } else {
//             console.log(value);
//         }
//     }
// }
// Fizzbuzz(100);

// const BubbleSort = (a) => {
//   let numbers = a;
//   let checker = true;

//   while (checker) {
//     checker = false
//     for (i = 0; i < numbers.length - 1; i++) {
//       if (numbers[i] > numbers[i + 1]) {
//         checker = true
//         let temp = numbers[i];
//         numbers[i] = numbers[i + 1];
//         numbers[i + 1] = temp;
//       }
//     }
//   }
//   return numbers;
// };

// const bubble = BubbleSort([12, 9, 5, 33, 89]);
// console.log(bubble);

// check if the array of the numbers are eveb or odd
// function EvenOdd(p) {
//   let posative = p;
//   for (u = 0; u < posative.length; u++) {
//     if (posative[u] % 2 === 0) {
//       console.log("Is Even");
//     } else {
//       console.log("Is Odd");
//     }
//   }
//   return posative;
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const check = EvenOdd(array);
// console.log(array);

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the
// number you passed to the function. For example, if the input is 4 then your function should
// return 10 because 1 + 2 + 3 + 4 = 10.
// function addUp(num) {
//   let int = 0;
//   for (i = 0; i <= num; i++) {
//     int += i;
//   }
//   return int;
// }

// console.log(addUp(4));

// 1. Find the Maximum Number in an Array
// 🧠 Problem:
// Given an array, return the largest number.
// 🧩 Steps:
// •	Initialize a variable to store the max value.
// •	Iterate through the array.
// •	Update

// const MaxValue = (a) => {
//   let max = [0];
//   for (i = 0; i < a.length; i++) {
//     if (a[i]  > max) {
//       max = a[i];
//     }
//   }
//   return max;
// };

// const yarra = [1000, 22, 33000, 4, 5, 8, 900];
// const maximum = MaxValue(yarra);
// console.log(maximum);



// 2. Reverse a String
// 🧠 Problem:
// Reverse the input string without using built-in reverse().
// 🧩 Steps:
// •	Loop backward and build the string manually.


const ReverseString = (a) => {
  let str = "";
  // i add this codition "r = a.length - 1; b/c the idex of strings start counting from zero"
  for (r = a.length - 1; r >= 0; r--) {
    str = str + a[r]
  }
  return str;
} 

const string = "hello"
const test = ReverseString(string)
console.log(test)