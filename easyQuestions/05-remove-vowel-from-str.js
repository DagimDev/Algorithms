// Remove Every Vowel from a String
// Create a function that takes a string and returns a new string with all vowels removed.

// Examples
// removeVowels("I have never seen a thin person drinking Diet Coke.")
// ➞ " hv nvr sn  thn prsn drnkng Dt Ck."

// removeVowels("We're gonna build a wall!")
// ➞ "W'r gnn bld  wll!"

// removeVowels("Happy Thanksgiving to all--even the haters and losers!")
// ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
// Notes
// "y" is not considered a vowel.

// const removeVowels = (str) => {
//     const isString = str.toLowerCase()
//     let newString = ""
//     for (const string of isString) {
//         if (string === "a" || string === "e" || string === "i" || string === "o" || string === "u") {
//             newString += ""
//         } else {
//             newString += string
//         }
//     }
//     return newString
// }

// console.log(removeVowels("I have never seen a thin person drinking Diet Coke."))
// console.log(removeVowels("We're gonna build a wall!"))
// console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!"))
// console.log(removeVowels(""))

const removeVowels = (str) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let newString = "";
    for (const char of str) {
        if (!vowels.has(char)) {
            newString += char;
        }
    }
    return newString;
};

console.log(removeVowels("I have never seen a thin person drinking Diet Coke."));
console.log(removeVowels("We're gonna build a wall!"));
console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!"));
console.log(removeVowels(""));