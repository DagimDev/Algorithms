// Hashes and Pluses

// Create a function that returns the number of hashes and pluses in a string.

// Examples
// hashPlusCount("###+") ➞ [3, 1]

// hashPlusCount("##+++#") ➞ [3, 3]

// hashPlusCount("#+++#+#++#") ➞ [4, 6]

// hashPlusCount("") ➞ [0, 0]
// Notes
// Return [0, 0] for an empty string.
// Return in the order of [hashes, pluses].

// My Solution 
const hashPlusCount = (str) => {
    let hash = 0
    let plus = 0
    for (const chars of str) {
        if (chars === "#") {
            hash++
        } else if (chars === '+'){ 
            plus++
        } 
    }
    return [hash, plus]
}

console.log(hashPlusCount("###+"))
console.log(hashPlusCount(""))
console.log(hashPlusCount("bdxhsdjgj"))

// Alternative (With Input Validation)

const hashPlusCount1 = (str) => {
    let hash = 0;
    let plus = 0;
    for (const char of str) {
        if (char === '#') hash++;
        else if (char === '+') plus++;
        else throw new Error("Invalid character in input");
    }
    return [hash, plus];
};