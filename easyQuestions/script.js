console.log("Another js file")

const $reverseString = (str) => {
  let $reverse = ""
  for (r = str.length - 1; r >= 0; r--) {
      $reverse += str[r]
  }
  return $reverse;
}

const strarr = "hello dagim"
const reversed = $reverseString(strarr);
console.log(reversed); 

const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("hello")); // "olleh"

const zyegerm = "dagim"
console.log(zyegerm.split("").reverse().join(""))
// How it works:
// split("") → Converts the string into an array of characters.
// reverse() → Reverses the array.
// join("") → Joins the array back into a string.

const newReverseString = (str) => {
  let Reversed = "";
  for (const char of str) {
    Reversed += char; // Prepend each character
  }
  return Reversed;
}

const newString = "hello";
const test = newReverseString(newString);
console.log(test)





// Palindrome Checker
// Check if a string is a palindrome (reads the same backward as forward).
// Example: isPalindrome("racecar") → true

const PalindromeChecker = (pal) => {
    for (let p = 0; p < Math.floor(pal.length / 2); p++) {
        if (pal[p] !== pal[pal.length - 1 - p]) {
            // console.log(pal[pal.length - 1 - 1])
            return false;
        }
    }
    return true;
}
const palindrome = "racecar";
const palchecked = PalindromeChecker(palindrome);
console.log(palchecked)

// const str = "hello";

// let index = 0;
// for (const char of str) {
//   if (index === str.length - 1) {
//     console.log("Last character:", char);
//   }
//   index++;
// }
// console.log(index)





// Find the Largest Number in an Array
// Write a function that returns the largest number in an array.
// Example: findMax([3, 1, 4, 1, 5, 9]) → 9
const findMax = (arr) => {
    let max = arr[0];
    // let max = -Infinity;
    if (arr.length === 0) {
        console.log("The Array is Empty")
    }
    for (const num of arr) {
        if (num > max){
            max = num;
        }
    }
    return max
}

const maxFound = [0];
const result = findMax(maxFound);
console.log(result);