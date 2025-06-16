// Index Shuffle
// Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

// To illustrate:

// indexShuffle("abcd") ➞ "acbd"
// // "ac" (even-indexed) + "bd" (odd-indexed)
// Examples
// indexShuffle("abcdefg") ➞ "acegbdf"

// indexShuffle("holiday") ➞ "hldyoia"

// indexShuffle("maybe") ➞ "myeab"
// Notes
// 0 should be treated as an even number.

// My solution
const indexShuffle = (str) => {
    let even = []
    let odd = []
    for (let i = 0; i < str.length; i++) {
            i % 2 === 0 ? even.push(str[i]) : odd.push(str[i])
    }
    return [...even, ...odd].join("")
}

console.log(indexShuffle("abcd"))
console.log(indexShuffle("abcdefg"))
console.log(indexShuffle("holiday"))
console.log("")


// Optimized Solution
// const indexShuffle = (str) => {
//     let even = '';
//     let odd = '';
//     for (let i = 0; i < str.length; i++) {
//         i % 2 === 0 ? even += str[i] : odd += str[i];
//     }
//     return even + odd;
// };