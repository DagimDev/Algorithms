// Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

// toNumberArray(["91", "44"]) ➞ [91, 44]

// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]
// Notes
// Some inputs are floats.

const toNumberArray = (str) => {
    let isNumber = []
    for (const string of str) {
        isNumber.push(Number(string))
    }
    return isNumber

    // Advanced option
//     const toNumberArray = (strArray) => strArray.map(Number);

// // or with explicit parsing:
// const toNumberArray = (strArray) => strArray.map(x => Number(x));
}
console.log(toNumberArray(["9.4", "4.2"]))
console.log(toNumberArray(["91", "44"]))
console.log(toNumberArray(["9.5", "8.8"]))


const demo = (arr) => {
    return arr.map(arr)
}

console.log(demo[2, 3, 4])