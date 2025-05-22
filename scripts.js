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


// const ReverseString = (a) => {
//   let str = "";
//   // i add this codition "r = a.length - 1; b/c the idex of strings start counting from zero"
//   for (r = a.length - 1; r >= 0; r--) {
//     str = str + a[r]
//   }
//   return str;
// } 

// const string = "hello"
// const test = ReverseString(string)
// console.log(test)


// 4. Count Vowels in a String
// 🧠 Problem:
// Count number of vowels in a string.
// 🧩 Steps:
// •	Loop through each character and check if it’s a vowel.


// const CountVowels = (s) => {
//   let vowel = "";
//   let cc = 0
//   for (i = 0; i < s.length; i++) {
//     if (s[i] == 'a') {
//       vowel += s[i]
//       cc += i
//     } 
//     else if (s[i] == 'e') {
//       vowel += s[i]
//     }
//     else if (s[i] == 'i') {
//       vowel += s[i]
//     }
//     else if (s[i] == 'o') {
//       vowel += s[i]
//     }
//     else if (s[i] == 'u') {
//       vowel += s[i]
//     }
//   }
//   return vowel
// }

// const variable = "palindrome";
// const count = CountVowels(variable);
// console.log(count)


// function countVowels(str) {
//     let count = 0;
//     const vowels = "aeiou";
//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) count++;
//     }
//     return count;
// }

// console.log(countVowels("palindrome"))


// What's Hiding Amongst the Crowd?

// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

// Examples
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

// Steps to follow when solving any kind of JavaScript problem:
//   1. Understand the problem

//   2. Solve it on paper
//     - Use example cases to make sure that you can actually solve the problem on paper

//       NOTE: The most difficult part for new comers is not actually solving the problem. The difficulty is in understanding & identifying the smallest steps the brain takes to solve the problem. (Our brain is sometimes too fast for us to comprehend)

//   3. Craft a general step that can be followed to solve any kind of similar problem

//     - This is where you would consider scenarios that might not have been covered in the examples you solve above and tweak the solution accordingly

//   4. Write the pseudo code

//     - Identify the smallest steps to follow and pick what JavaScript functionality you need to use to cover that step

//   5. Translate to JavaScript
//     - Follow the pseudo code and write the solution

//   6. Test

// Solution:
// - I need something to save the hidden letters when found
//   Declare a variable = hiddenLetter = ''

// - if empty (return no value message)
//   if (strValue) {
//     //do something
//   }

// - check if given thing is a string to begin with

//   if (typeof strValue === 'string') {
//     // this is a string
//   }else{
//     if not return some message
//   }
// Use loop
// for (0, strValue.length, ++ )
// 1. find first letter
//   strValue.charAt(0);
// 2. check if uppercase
// convert to uppercase using toUpperCase()
// compare with the original
// if equal, it was uppercase. If not it was lowercase

//   if lowercase save in memory
//     Add to hiddenLetter
// 3. move to the next letter
//   if lowercase add to the saved memory
//   if upper case ignore
//   We need to loop through the strings

//     use the string property strValue.length
//     for (0, strValue.length, ++ )
// 4. Continue to the next letter
//   repeat the same thing

//   return hiddenLetter

function findHiddenWord(a) {
  var strValue = a;
  var hiddenLetter = "";
  if (strValue) {
    if (typeof strValue === "string") {
      for (var i = 0; i < strValue.length; i++) {
        if (strValue.charAt(i) !== strValue.charAt(i).toUpperCase()) {
          hiddenLetter = hiddenLetter + strValue.charAt(i);
        }
      }
    } else {
      return "Please enter a String value";
    }
  } else {
    return "Please enter a value first";
  }
  return hiddenLetter;
}

// Test
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

// console.log(findHiddenWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));


// Question 2 (Edabit)
// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:
//   arr1's min is greater than arr2's min.
//   arr1's max is less than arr2's max

// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [4, 0]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// canNest([1, 2, 3, 4], [2, 3]) ➞ false

// arr1, arr2
// check if both inputs are array
//   return please enter array value
//   Use Array.isArray

// 1. get the min value of array 1
// arr1.sort()
// arr1[0] is the min

// 2. get the min value of array 2
// arr2.sort()
// arr2[0] is the min

// 3. compare the two and if min arr 1 is less than or = return false
// arr1[0] <=   arr2[0]  return false

// 4. get the max value of array 1
// arr1.sort()
// arr1[arr1.length - 1] is the max

// 5. get the max value of array 2
// arr2.sort()
// arr2[arr2.length - 1] is the max

// 6. compare the two and if max arr 1 is greate than or = max arr 2 return false
// arr1[arr1.length - 1] >= arr2[arr2.length - 1] return false

// 7. return true

function canNest(arr1, arr2) {
  if (!(Array.isArray(arr1) && Array.isArray(arr2))) {
    return "Both values need to Array";
  }
  let arr1Sorted = arr1.sort();
  let arr2Sorted = arr2.sort();
  let arr1min = arr1Sorted[0];
  let arr2min = arr2Sorted[0];
  let arr1max = arr1Sorted[arr1.length - 1];
  let arr2max = arr2Sorted[arr2.length - 1];

  if (arr1min <= arr2min || arr1max >= arr2max) {
    return false;
  } else {
    return true;
  }
}

// Test
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [4, 0]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// canNest([1, 2, 3, 4], [2, 3]) ➞ false
console.log(canNest([3, 1], [4, 0]));


// 13. Sum of Even Numbers in Array
const SumOfEvennumbers = (h) => {
  let sum = 0;
  for (j = 0; j < h.length; j++) {
    if (h[j] % 2 === 0) {
      sum += h[j]
    }
  }
  return sum;
}

console.log(SumOfEvennumbers([1, 2, 3, 4, 5, 6, 88, 98, 100, 2]))