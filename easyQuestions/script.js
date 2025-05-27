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
    Reversed = char + Reversed; // Prepend each character
  }
  return Reversed;
}

const newString = "hello";
const test = newReverseString(newString);
console.log(test)