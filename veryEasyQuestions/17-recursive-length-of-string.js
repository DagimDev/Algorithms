// Recursion: Length of a String

// Write a function that returns the length of a string. Make your function recursive.

// Examples
// length("apple") ➞ 5

// length("make") ➞ 4

// length("a") ➞ 1

// length("") ➞ 0

const lengthOfString = (str) => {
    if (str.length === 0) return 0
    return (lengthOfString(str.slice(1))) + 1
}
console.log(lengthOfString("hello"))
console.log(lengthOfString("world hi"))
console.log(lengthOfString("natty"))